import { eq } from 'drizzle-orm'
import { useValidatedQuery, z } from 'h3-zod'

export default eventHandler(async (event) => {
  const { projectId } = await useValidatedQuery(event, {
    projectId: z.string().min(1).max(140),
  })
  await requireUserSession(event)
  const logs = await useDb().select().from(tables.log).where(eq(tables.log.projectId, projectId)).all()
  return logs
})
