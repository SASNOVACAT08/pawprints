import type { H3Event } from 'h3'
import { sha256 } from 'ohash'
import { defu } from 'defu'
import { UserSession } from '@/types/UserSession'

export async function getUserSession(event: H3Event) {
  return (await _useSession(event)).data as UserSession
}
export async function setUserSession(event: H3Event, data: UserSession) {
  const session = await _useSession(event)

  await session.update(data)

  return session.data as UserSession
}
export async function clearUserSession(event: H3Event) {
  const session = await _useSession(event)

  await session.clear()

  return true
}

export async function requireUserSession(event: H3Event) {
  const userSession = await getUserSession(event)

  if (!userSession.user) {
    throw createError({
      statusCode: 401,
      message: 'Unauthorized',
    })
  }

  return userSession
}

let sessionConfig: any

function _useSession(event: H3Event) {
  if (!sessionConfig) {
    sessionConfig = defu({ password: process.env.NUXT_SESSION_PASSWORD }, useRuntimeConfig().session)
  }

  if (!sessionConfig.password) {
    const randomPassword = sha256(`${Date.now()}${Math.random()}`).slice(0, 32)
    sessionConfig.password = randomPassword
  }

  return useSession(event, sessionConfig)
}
