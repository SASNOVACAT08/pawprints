import { resolve } from 'path'

export default defineNuxtConfig({
  modules: ['@nuxtjs/tailwindcss', 'nuxt-icon'],
  runtimeConfig: {
    dbDir: resolve('./server/db'),
    github: {
      clientId: '',
      clientSecret: '',
    },
    session: {
      name: 'nuxt-session',
      password: '',
    },
  },
})
