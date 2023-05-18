import { sqliteTable, text, integer } from 'drizzle-orm/sqlite-core'

export const log = sqliteTable('log', {
  id: integer('id').primaryKey(),
  title: text('title').notNull(),
  type: text('type', { enum: ['info', 'warn', 'error'] })
    .default('info')
    .notNull(),
  environment: text('environment'),
  content: text('content'),
  createdAt: integer('created_at').notNull(),
})

export const project = sqliteTable('project', {
  id: integer('id').primaryKey(),
  name: text('name').notNull(),
  authorizedUser: integer('authorized_user').references(() => user.id),
})

export const user = sqliteTable('user', {
  id: integer('id').primaryKey(),
  githubId: integer('github_id').notNull(),
})
