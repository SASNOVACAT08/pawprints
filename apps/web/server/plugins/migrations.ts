import { join } from 'path'
import { migrate } from 'drizzle-orm/better-sqlite3/migrator'

export default defineNitroPlugin(() => {
  if (!process.env.DB) {
    const { dbDir } = useRuntimeConfig()
    migrate(useDb(), { migrationsFolder: join(dbDir, './migrations') })
  }
})
