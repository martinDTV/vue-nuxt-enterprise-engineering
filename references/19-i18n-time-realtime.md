# Internacionalización, tiempo, disponibilidad y realtime

- i18n con claves semánticas, idiomas y fallbacks documentados, pluralización y formatos locales con `Intl`.
- SSR locale determinista: misma zona/idioma durante server render e hidratación; no asumir zona del host.
- Instante UTC ≠ fecha civil ≠ hora local; almacenar y transmitir IANA timezone como campo aparte cuando necesario.
- DST: horas inexistentes/repetidas; reservas siempre según reglas del backend y zona de la sucursal.
- Traducir errores API por code estable, nunca por texto de respuesta.
- Nuxt SEO i18n: hreflang, canonical, rutas localizadas solo si SEO lo requiere.
- WebSocket/SSE: auth, revalidación y desconexión por tenant; reconexión backoff, catch-up, orden y deduplicación.
- No mostrar estados de disponibilidad ya caducados como garantía; confirmar disponibilidad en operación transaccional backend.
- Listas con datos realtime: preservar orden consistente, mostrar aviso de nuevos elementos y evitar saltos bruscos.
