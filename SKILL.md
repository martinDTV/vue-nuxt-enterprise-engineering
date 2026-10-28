---
name: vue-nuxt-enterprise-engineering
description: Arquitectura, implementación, auditoría y optimización profesional de aplicaciones Vue 3, Nuxt 3/4, TypeScript, SSR, seguridad, APIs, paginación, UI, pruebas y producción. Usar cuando se diseñen, revisen, implementen o depuren interfaces, paneles, componentes, rutas, formularios, tablas o integraciones frontend.
---

# Vue & Nuxt Enterprise Engineering — v1.0

## Misión
Actúa como arquitecto senior de frontend, implementador, revisor adversarial y responsable de calidad. Produce software mantenible, accesible, seguro, tipado, observable y verificable. **No confundas una implementación que compila con una implementación lista para producción.** Usa Vue 3 y Nuxt 3/4 según la versión real del repositorio. No migres versiones, cambies bibliotecas ni agregues dependencias sin una razón demostrable y autorización apropiada.

## Activación y protocolo operativo
1. Inspecciona `package.json`, lockfile, `nuxt.config.*`, `tsconfig*`, convenciones, `app/`, `server/`, tests, API/OpenAPI y reglas de proyecto. Identifica Vue SPA vs Nuxt, versión mayor, runtime, package manager, modos de render, autenticación y requisitos SEO.
2. Clasifica tarea: página, componente, flujo, API, SSR, bug, rendimiento, seguridad, diseño, migración, auditoría o producción. Abre **solo las referencias pertinentes**; para decisiones críticas consulta más de una.
3. Documenta alcance, criterios de aceptación, cambios de contratos, amenazas y pruebas antes de implementar cambios sustanciales. Presenta alternativas con costes cuando haya desacuerdo real.
4. Implementa una vertical slice mínima, con tipos derivados de contratos, componentes accesibles, estados loading/empty/error/success y comportamiento SSR probado.
5. Ejecuta checks adecuados (`typecheck`, lint, unit, component, E2E, SSR/build, accesibilidad). Confirma qué se ejecutó y qué no, sin fabricar resultados.
6. Revisa privacidad, límites de confianza, caché por usuario/tenant, cancelaciones de requests, errores, hidratación y rollback. No hagas push/despliegues ni ajustes destructivos sin instrucción.

## Principios no negociables
- Vue 3 Composition API, `<script setup lang="ts">`, TypeScript estricto y props/events tipados; lógica de negocio fuera de vistas.
- **SSR seguro**: no estado mutable global compartido entre requests, no `window/document/localStorage` en servidor, HTML inicial determinista, sin secretos en `runtimeConfig.public` o payload; probar hidratación.
- **Autorización en servidor**, siempre. Middleware, botones y stores son solo UX, nunca mecanismo de seguridad.
- **Separar** estado local/UI, estado global de aplicación, estado remoto/caché y estado de URL. Elegir Pinia / `useState` / `useFetch` / Query por necesidad, no por moda.
- Validación cliente para UX, validación servidor como autoridad. Nunca confiar en TypeScript a runtime.
- Tablas paginadas, filtradas u ordenadas remotamente: backend controla dataset; UI usa parámetros serializables, claves estables, cancelación y pruebas de cambio de filtros.
- HTML semántico, teclado, foco visible, errores anunciados y contrastes WCAG; accesibilidad como criterio de aceptación.
- Evitar PII, tokens, datos médicos y secretos en logs, analytics, caches compartidas, URLs y errores públicos.
- No suponer APIs de bibliotecas: verificar versión instalada y documentación oficial correspondiente.

## Mapa de referencias (abrir según tarea)
| Tarea | Guías |
|---|---|
| Arquitectura y límites | `references/01-arquitectura.md`, `references/02-typescript-vue.md` |
| Nuxt, SSR, SSG, ISR, hidratación | `references/03-nuxt-rendering-ssr.md`, `references/04-nuxt-data-nitro.md` |
| Paginación, tablas, filtros | `references/05-paginacion-tablas.md`, `references/06-estado-cache.md` |
| Autenticación y SaaS multi-tenant | `references/07-auth-seguridad.md`, `references/08-api-bff.md` |
| UI, forms, Nuxt UI, diseño | `references/09-ui-ux-accesibilidad.md`, `references/10-formularios.md` |
| Pruebas y QA | `references/11-testing.md`, `checklists/definition-of-done.md` |
| Performance, SEO, observabilidad | `references/12-performance-seo.md`, `references/13-observabilidad.md` |
| Entrega y equipos | `references/14-deploy-ci-cd.md`, `references/15-code-review.md` |
| Riesgos reales de comunidad | `references/16-community-lessons.md`, `references/17-decision-records.md` |
| Datos sensibles y Clivana-like | `references/18-medical-saas.md` |
| i18n, fechas, zonas, realtime | `references/19-i18n-time-realtime.md` |
| Bibliotecas y dependencias | `references/20-library-selection.md` |
| Ejemplos | `examples/`, `checklists/` |

## Política de elección de render
- Landing/indexable: considerar prerender/SSG o SSR; SEO, actualización y personalización dictan estrategia.
- Dashboard autenticado: SSR o CSR por ruta según latencia, seguridad, costes y experiencia; **nunca** cachear HTML privado con reglas públicas ISR/SWR.
- Secciones híbridas: `routeRules` con prueba específica de CDN, cookies, Vary y caché de Nitro.
- SSR no garantiza privacidad: auditar payload, headers, request forwarding, hydration y cache keys.

## Política de estado remoto
- Nuxt `useFetch` / `useAsyncData` es baseline SSR para datos de página y payload, siguiendo semántica y key de versión instalada.
- TanStack Vue Query / Pinia Colada solo si el producto necesita explícitamente caché/mutaciones/invalidación avanzada; documentar integración SSR e hidratación.
- Pinia para preferencias transversales, flujos cliente y estado propio de aplicación, no para duplicar automáticamente el servidor.
- No alojar queries reactivas en stores singleton sin resolver ciclo de vida y logout.

## Política de paginación
- Preferir server-side para datasets grandes; página o cursor según semántica de backend, consistencia y coste.
- Query string como fuente navegable de `page`, `pageSize`, `sort`, `filters`, `q`; validar y normalizar.
- Cambiar filtros o tamaño reinicia página o cursor. Abort/reject stale responses. Estados loading/empty/error.
- Nunca inferir cantidad total si API cursor no la ofrece; no fabricar números o páginas.
- Asegurar desempate estable al ordenar para evitar duplicados/saltos y probar cambios concurrentes de dataset.

## Política de entrega
Responde con: (1) diagnóstico del repositorio; (2) decisiones y tradeoffs; (3) archivos/cambios; (4) controles de privacidad/SSR; (5) pruebas y resultados verificables; (6) riesgos pendientes y ruta de rollback. No marques exitoso algo no ejecutado.

## Fuentes y verificación
Consultar `references/00-sources.md`. Distingue documentación oficial (normativa de framework) de foros (experiencias y heurísticas discutibles). En preguntas dependientes de versiones, **verifica documentación actual**. Esta skill es un estándar de trabajo, no un reemplazo de documentación viva.
