# ADRs y decisiones de diseño

Para cada decisión relevante registrar: contexto, versión de framework, opciones, elección, razón, riesgos, alternativa descartada, tests, observabilidad y condiciones de revisión.

Decisiones frecuentes:
- Nuxt SSR vs CSR por ruta.
- BFF Nitro vs llamadas directas FastAPI.
- Pinia vs TanStack Query/Pinia Colada vs `useFetch`.
- Paginación offset vs cursor y UX.
- Forms Nuxt UI / VueUse / validation libs.
- Auth WorkOS/OIDC y cookies.
- Presigned URLs vs proxy de descarga auditado.
- Caché privada y invalidación multi-org.
- Nuxt UI versión actual y componentes permitidos.

## Señales para cambiar una decisión
LCP/INP fuera de budgets, fuga de privacidad demostrada, alto coste de CPU SSR, funciones de cache inválidas, necesidades offline, interfaz con gran volumen, rotura de contrato API o nueva versión mayor de Nuxt.
