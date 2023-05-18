export default eventHandler(async (event) => {
  await requireUserSession(event)
  const projects = await useDb().select().from(tables.project).all()
  return projects
})
