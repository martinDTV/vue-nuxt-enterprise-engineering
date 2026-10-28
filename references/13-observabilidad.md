# Observabilidad frontend y UX operacional

- Logs estructurados con request ID, nombre de ruta sanitizado, clase de error y timings, no payloads ni tokens.
- Métricas: error rate por operación, navegación, performance web vitals, tasa 429, respuestas 5xx y abandonos de formulario.
- Alertas accionables, no saturación; correlación con backend sin exponer PII.
- Session replay y analytics deshabilitados en pantallas con datos sensibles salvo evaluación explícita; masking no garantiza cumplimiento.
- Error boundary Nuxt, fallback recuperable, `retry` con límites y mensaje humano.
- Sentry u otra herramienta solo con aprobación, limpieza de breadcrumbs, scrubbers y DPA donde aplique.
- Debug de SSR/hidratación: SSR HTML, payload, consola y Network; no imprimir tokens para depurar.
- Features flags: documentar ciclo de vida y alcance por tenant, no confiar en flags para autorizar.
