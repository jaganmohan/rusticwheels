// https://nuxt.com/docs/api/configuration/nuxt-config
import tailwindcss from '@tailwindcss/vite'
export default defineNuxtConfig({
  compatibilityDate: '2024-11-01',
  devtools: { enabled: true },
  modules: [
    'reka-ui/nuxt',
    '@nuxt/image',
    '@nuxt/icon',
    '@nuxtjs/color-mode'
  ],
  vite: {
    plugins: [
      tailwindcss()
    ]
  }
})