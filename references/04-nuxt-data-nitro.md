# Nuxt data fetching, Nitro, runtime config

- `useFetch`: default para consulta SSR-friendly en componente/página; cuidado con el uso de `$fetch` directo en setup SSR porque puede repetir request durante hidratación.
- `useAsyncData`: cuando el handler mezcla fuentes o necesita resolver lógica; nombre/key estable, resultado serializable y control de errores.
- `$fetch` y `ofetch`: para llamadas imperativas, eventos o server endpoints; no sustituir sin motivo `useFetch` en carga inicial SSR.
- `useRequestFetch()`/request headers: comprender cuándo se reenvían cookies en SSR y jamás reenviar `authorization`, `cookie` o cabeceras sensibles a un origen externo no confiable.
- Nitro BFF: recomendable cuando custodia cookies httpOnly, oauth callback, secretos, firma de requests o simplifica same-origin; no duplicar toda la API FastAPI en Nitro.
- `runtimeConfig`: secretos solamente en campos privados; `public` es visible al navegador. `useRuntimeConfig(event)` en server handlers según versión.
- `server/api`: validar método, payload y permisos; imponer tamaños; timeouts; manejo de errors sanitizado; tracing; rate limit.
- SSR fetch/caching: clave de caché aislada por usuario y tenant; NUNCA cachear datos privados mediante routeRules públicas o memoización global.
- `useAsyncData` compartido puede entregar refs compartidos por key; revisar que key represente cada contexto de cuenta/org/filtros.
- Nuxt layers/plugins/middleware: dependencias claras, `*.client.ts` / `*.server.ts` cuando corresponda, composables en contexto válido.
- Comprobar baseURL en SSR vs cliente, DNS de contenedores, CORS y cookies; las rutas server-to-server no dependen de CORS del navegador.

## Decisión axios vs $fetch
`$fetch` suele bastar en Nuxt; Axios está permitido con razones concretas (interceptores/interoperabilidad/SDK existente). No exigir Axios por costumbre; si se usa, encapsular instancia por request cuando lleva cookies/tokens de sesión y evitar interceptores globales con identidad mutable.
