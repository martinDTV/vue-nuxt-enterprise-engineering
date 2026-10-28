# Integración de APIs FastAPI/OpenAPI, BFF y contratos

- Mantener OpenAPI versionado; cliente generado cuando aporte valor. No editar a mano artefactos generados.
- Validar datos a runtime en frontera cuando el backend no sea totalmente confiable o el DTO sea complejo; TS es borrado en runtime.
- Convención uniforme de errores `code`, `message`, `fields`, `requestId`, respetando backend. Mapear 401,403,404,409,422,429,503 a UX apropiado.
- 429 respeta Retry-After; reintentar GET idempotentes con backoff/jitter; no reintentar mutaciones peligrosas sin clave idempotente y contrato explícito.
- AbortController, timeouts, dedupe, no peticiones duplicadas en SSR/hidratación.
- Los tipos API se transforman al modelo de pantalla; fechas ISO y moneda no parsearse informalmente.
- BFF Nuxt puede encargarse de sesión, cookies y llamadas internas; backend FastAPI mantiene RBAC, RLS y validación.
- CORS: solo navegador y origen; server-to-server no usa CORS. Configurar SSR baseURL/proxy bien.
- No filtrar errores internos ni devolver trazas SQL o stack traces a UI.
- Contract tests para endpoints críticos, auth, headers, cookies y actualizaciones compatibles.
- Observabilidad: propagar request/correlation IDs, sin datos sensibles ni tokens.
