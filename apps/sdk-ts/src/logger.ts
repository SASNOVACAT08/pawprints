export default class DataKittenLogger {
  private static url = ''
  private static environment = ''
  private static projectId = ''

  static init(url: string, environment: string, projectId: string) {
    DataKittenLogger.url = `${url}/api/log`
    DataKittenLogger.environment = environment
    DataKittenLogger.projectId = projectId
  }

  private static async fetch(level: string, title: string, content: string) {
    const body = JSON.stringify({
      title,
      level,
      environment: DataKittenLogger.environment,
      content,
      projectId: DataKittenLogger.projectId,
      createdAt: new Date(),
    })
    fetch(DataKittenLogger.url, {
      method: 'POST',
      body,
      headers: {
        'Content-Type': 'application/json',
      },
    })
  }

  private static log(level: string, title: string, ...args: unknown[]) {
    DataKittenLogger.fetch(level, title, JSON.stringify({ ...args }))
    console.log(`[${level.toUpperCase()}] ${title}`, ...args)
  }

  static info(title: string, ...args: unknown[]) {
    DataKittenLogger.log('info', title, ...args)
  }

  static warn(title: string, ...args: unknown[]) {
    DataKittenLogger.log('warn', title, ...args)
  }

  static error(title: string, ...args: unknown[]) {
    DataKittenLogger.log('error', title, ...args)
  }
}
