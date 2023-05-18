import { eq } from 'drizzle-orm'

export default eventHandler(async (event) => {
  const config = useRuntimeConfig()

  const { code } = getQuery(event)

  if (!code) {
    const redirectUrl = getRequestURL(event).href
    return sendRedirect(
      event,
      `https://github.com/login/oauth/authorize?client_id=${config.github.clientId}&redirect_uri=${redirectUrl}`,
    )
  }

  const response: any = await $fetch('https://github.com/login/oauth/access_token', {
    method: 'POST',
    body: {
      client_id: config.github.clientId,
      client_secret: config.github.clientSecret,
      code,
    },
  })
  if (response.error) {
    return sendRedirect(event, '/')
  }

  const ghUser: any = await $fetch('https://api.github.com/user', {
    headers: {
      'User-Agent': `Github-OAuth-${config.github.clientId}`,
      Authorization: `token ${response.access_token}`,
    },
  })

  const user = await useDb().select().from(tables.user).where(eq(tables.user.id, ghUser.id)).get()

  if (!user) {
    const length = (await useDb().select().from(tables.user).all()).length
    if (length === 0) {
      await useDb()
        .insert(tables.user)
        .values({
          id: ghUser.id,
        })
        .run()
    }
  }

  await setUserSession(event, {
    user: ghUser,
  })

  return sendRedirect(event, '/')
})
