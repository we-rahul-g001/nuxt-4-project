import { defineNuxtConfig } from "nuxt/config";

export default defineNuxtConfig({
  compatibilityDate: '2025-09-25',
  devtools: { enabled: true },
  css: ['@/assets/css/main.css'],
  modules: ['@nuxtjs/tailwindcss', '@nuxt/image', '@pinia/nuxt'],
})