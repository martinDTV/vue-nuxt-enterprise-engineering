# Estrategia de pruebas Vue/Nuxt

- Unit: utilidades puras, contratos normalización, permisos para presentación y paginación.
- Composable: reactividad, cancelación, eventos y cleanup.
- Component: Vue Test Utils + Vitest según Vue oficial; probar comportamiento usuario, accesibilidad, props y eventos, no detalles internos frágiles.
- Nuxt: @nuxt/test-utils cuando corresponda a versión, SSR/render, Nitro handlers; verificar configuración de mocks para no esconder bugs SSR.
- E2E: Playwright flujos: login, logout, sesión caducada, cambio de organización, paginación, formularios, permisos, errores 429/500, deep link y mobile.
- Contract: OpenAPI generado contra API real/stub controlado; diferencia en códigos/campos produce falla.
- Tests de seguridad: SSR dos sesiones, caché cruzada, fragmentos de invitación, PII en logs, error leak, uploads.
- Tests de accesibilidad: axe + teclado manual, foco, VoiceOver/NVDA según alcance.
- Testing pyramid pragmática, smoke en build de producción, no solo dev.
- Flakiness: reloj inyectable, datos deterministas, TZ estable, requests aisladas, esperas basadas en condiciones y no sleep.
- CI: typecheck, lint, unit, integration, E2E smoke y dependencias auditadas, reportar cobertura de ramas críticas.

## Escenarios mínimos tabulares
- búsqueda lenta + filtro rápido: respuesta antigua no gana.
- page=999: normalización o estado vacío explícito.
- cambiar de organización en request: no mostrar datos del tenant anterior.
- 401/403/409/422/429/503: UX acorde.
- SSR/hidratación sin warning y sin re-fetch no deseado.
- ClientOnly justificado y fallback accesible.
- renovación/múltiples pestañas: consistencia sin fuga.
- firma irreversible: no doble envío.
