// EJEMPLO — ajustar según Nuxt instalado, hosting y política real de datos.
export default defineNuxtConfig({
  ssr: true,
  routeRules: {
    '/': { prerender: true },
    '/public/**': { swr: 300 }, // Solo si el contenido es realmente público y cacheable
    // Sin prerender / swr / isr en rutas autenticadas o clínicas.
  },
  runtimeConfig: {
    apiSecret: '', // Solo servidor, nunca exponer al navegador
    public: { appName: 'Example' },
  },
})
