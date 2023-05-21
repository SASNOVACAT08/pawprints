export default class PawPrintsLogger {
  private static url = ''
  private static environment = ''
  private static projectId = ''

  static init(url: string, environment: string, projectId: string) {
    PawPrintsLogger.url = `${url}/api/log`
    PawPrintsLogger.environment = environment
    PawPrintsLogger.projectId = projectId
  }

  private static async fetch(level: string, title: string, content: string) {
    const body = JSON.stringify({
      title,
      level,
      environment: PawPrintsLogger.environment,
      content,
      projectId: PawPrintsLogger.projectId,
      createdAt: new Date(),
    })
    fetch(PawPrintsLogger.url, {
      method: 'POST',
      body,
      headers: {
        'Content-Type': 'application/json',
      },
    })
  }

  private static log(level: string, title: string, ...args: unknown[]) {
    PawPrintsLogger.fetch(level, title, JSON.stringify({ ...args }))
    console.log(`[${level.toUpperCase()}] ${title}`, ...args)
  }

  static info(title: string, ...args: unknown[]) {
    PawPrintsLogger.log('info', title, ...args)
  }

  static warn(title: string, ...args: unknown[]) {
    PawPrintsLogger.log('warn', title, ...args)
  }

  static error(title: string, ...args: unknown[]) {
    PawPrintsLogger.log('error', title, ...args)
  }
}
