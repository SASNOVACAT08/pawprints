import { sqliteTable, text, integer } from 'drizzle-orm/sqlite-core'

export const log = sqliteTable('log', {
  id: integer('id').primaryKey(),
  title: text('title').notNull(),
  type: text('type', { enum: ['info', 'warn', 'error'] })
    .default('info')
    .notNull(),
  environment: text('environment'),
  content: text('content'),
  createdAt: integer('created_at', { mode: 'timestamp' }).notNull(),
  projectId: text('project_id')
    .references(() => project.id)
    .notNull(),
})

export const project = sqliteTable('project', {
  id: text('id').primaryKey(),
  name: text('name').notNull(),
})

export const userToProject = sqliteTable('user_to_project', {
  userId: integer('user_id')
    .references(() => user.id)
    .notNull(),
  projectId: text('project_id')
    .references(() => project.id)
    .notNull(),
})

export const user = sqliteTable('user', {
  id: integer('id').primaryKey(),
})
