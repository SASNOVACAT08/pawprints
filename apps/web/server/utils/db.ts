import { join } from 'path'
import { drizzle as drizzleD1, DrizzleD1Database } from 'drizzle-orm/d1'
import { drizzle, BetterSQLite3Database } from 'drizzle-orm/better-sqlite3'
import Database from 'better-sqlite3'

export * as tables from '@/server/db/schema'

let _db: DrizzleD1Database | BetterSQLite3Database | null = null

export const useDb = () => {
  if (!_db) {
    if (process.env.DB) {
      _db = drizzleD1(process.env.DB)
    } else if (process.dev) {
      const { dbDir } = useRuntimeConfig()
      const sqlite = new Database(join(dbDir, './db.sqlite'))
      _db = drizzle(sqlite)
    } else {
      throw new Error('No database configured for production')
    }
  }
  return _db
}
