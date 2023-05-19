import { useValidatedBody, z } from 'h3-zod'

export default eventHandler(async (event) => {
  const { title, level, environment, projectId, createdAt } = await useValidatedBody(event, {
    title: z.string().min(1).max(140),
    level: z.enum(['info', 'warning', 'error']),
    environment: z.string().min(1).max(140),
    projectId: z.string().min(1).max(140),
    createdAt: z.coerce.date(),
  })
  await useDb()
    .insert(tables.log)
    .values({
      title,
      level: level as any,
      environment,
      createdAt,
      projectId,
    })
    .run()
  return true
})
