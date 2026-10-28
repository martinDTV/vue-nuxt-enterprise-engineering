# Verificación SSR y multi-tenant

- [ ] Probar usuario A y B en peticiones SSR simultáneas: nada cruzado.
- [ ] Cambiar org en una petición lenta, respuesta vieja no sobrescribe actual.
- [ ] Logout limpia caché, DOM sensible, websockets y estado persistido.
- [ ] HTML inicial y `__NUXT_DATA__` sin secretos ni datos ajenos.
- [ ] No `runtimeConfig.public` secreto ni proxy indiscriminado de cookies.
- [ ] CDN nunca cachea HTML privado sin separación demostrable.
- [ ] XSS, CSRF, open redirect y URL sensibles revisadas.
- [ ] Protected routes y acciones verificadas contra API tras 403/404.
- [ ] Pre-signed URLs cortas, no en analytics/referrer/logs.
- [ ] Header forwarded host/IP solo desde proxies confiables.
