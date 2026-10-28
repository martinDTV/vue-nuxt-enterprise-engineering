# Selección responsable de librerías

Candidatas — no instalar sin confirmar versión: Vue Router, Pinia, VueUse, Nuxt UI, Reka UI, Tailwind, TanStack Vue Query, Pinia Colada, Zod/Valibot, vee-validate, Vitest, Vue Test Utils, @nuxt/test-utils, Playwright, axe, date-fns/Luxon/Temporal polyfill, i18n.

Para cada dependencia evaluar: problema concreto, alternativa nativa, compatibilidad Nuxt/Vue/TS, soporte SSR, mantenimiento, frecuencia de releases, seguridad de cadena de suministro, licencia, footprint, tree-shaking, accesibilidad, DX, costo de migración y pruebas de integración.

Reglas:
- Preferir `useFetch`/`useAsyncData` como baseline Nuxt, no imponer Axios.
- Preferir librerías accesibles antes de custom date picker, modal, select o tabla compleja.
- Si Nuxt UI/Tailwind ya están instaladas, usarlas coherentemente antes de añadir segunda biblioteca de componentes.
- No instalar Pinia + Query + Colada simultáneamente sin justificación explícita; evitar cachés duplicadas.
- Herramientas de seguridad y SEO deben respetar privacidad y SSR.
