import { useValidatedBody, z } from 'h3-zod'

export default eventHandler(async (event) => {
  const { id } = await useValidatedBody(event, {
    id: z.number().int().positive(),
  })
  await requireUserSession(event)
  const user = null

  try {
    await useDb()
      .insert(tables.user)
      .values({
        id,
      })
      .run()
  } catch (error) {
    // Do nothing
  }

  return user
})
