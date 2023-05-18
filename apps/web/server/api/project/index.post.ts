import { useValidatedBody, z } from 'h3-zod'
import { v4 } from 'uuid'

export default eventHandler(async (event) => {
  const { name } = await useValidatedBody(event, {
    name: z.string().min(1).max(140),
  })
  const session = await requireUserSession(event)
  const id = v4()
  const project = await useDb()
    .insert(tables.project)
    .values({
      id,
      name,
    })
    .run()
  await useDb()
    .insert(tables.userToProject)
    .values({
      userId: session.user.id,
      projectId: id,
    })
    .run()
  return project
})
