// https://nuxt.com/docs/api/configuration/nuxt-config
import tailwindcss from '@tailwindcss/vite'
export default defineNuxtConfig({
  devtools: { enabled: true },

  modules: [
    'reka-ui/nuxt',
    '@nuxt/image',
    '@nuxt/icon',
    '@nuxt/ui',
    '@nuxtjs/color-mode'
  ],

  vite: {
    plugins: [
      tailwindcss()
    ]
  },

  app: {
    pageTransition: { name: 'page', mode: 'out-in' }
  },

  compatibilityDate: '2025-05-26',
})