# Build, deployment y seguridad operacional

- Versiones de Node, npm/pnpm/bun y lockfile fijadas; builds reproducibles y sin drift.
- Nuxt Nitro preset según plataforma (Node, container, serverless/edge): validar capacidades y restricciones de crypto, cookies, tiempos límite.
- Multi-stage container no root, healthcheck, secrets env/secret manager, runtime config validado, logs sanitizados.
- Reverse proxy: forwarded headers solo de proxies confiables, HTTPS/HSTS, CORS, body size, WAF/rate limit y websockets.
- CI: typecheck/lint/tests/build, dependencias, secret scan, SBOM si requerido, smoke en staging y rollback.
- CDN: cache de estáticos immutable versionados; HTML/payload sensible `no-store` o partición demostrada.
- Config de entornos: local, test, staging, prod; no secretos en public runtime ni variables incorporadas al bundle.
- SSG/ISR/SSR por ruta testeado tras deploy: comportamiento real depende de plataforma.
- Despliegue zero-downtime: versiones compatibles con backend y API, feature flags, contratos y migraciones.
- Checklist de salida: accesibilidad, auth, cache privacy, tracing, uploads, límites, observabilidad, backup/restore si maneja datos.
