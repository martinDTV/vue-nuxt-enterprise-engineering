# Nuxt: rendering, SSR, CSR, prerender e hidratación

## Matriz de selección
- Landing, marketing, contenido público: SSG/prerender cuando el contenido sea estable; SSR cuando requiera frescura por petición.
- Páginas indexables personalizadas: SSR con separación rigurosa de cachés; SEO puede exigir server output.
- Dashboard autenticado: SSR privado con BFF o CSR por ruta, según necesidades reales; mantener protección API.
- Datos clínicos o privados: evitar prerender/ISR/cache pública, `stale-while-revalidate` compartido y payload persistente accesible fuera de sesión.
- Nitro/routeRules: documentar por ruta headers, Vary, caché y cookies; inspeccionar respuesta HTML y CDN real.

## Fallos de hidratación y causas
- Render diferente cliente/servidor por `Date.now()`, `Math.random()`, zona horaria, locale, ID generados sin control.
- Uso de window/document, localStorage, media queries, tamaño viewport o extensiones del navegador.
- HTML inválido o anidamiento no permitido que el navegador repara.
- API ejecutada duplicada o payload incompatible entre SSR y navegación.
- Estado global mutable entre requests. **Riesgo de fuga entre usuarios**.

## Remedios
- Utilizar `useState` por request para estado SSR; evitar `const ref = ref(...)` global de información de usuario.
- `useFetch` / `useAsyncData` para datos iniciales y transferencia en payload. Comprobar keys, `watch`, `dedupe`, `lazy`, `server`, `immediate` en versión instalada.
- APIs de navegador únicamente en `onMounted` o componentes/áreas client-only justificadas.
- No envolver una página completa en ClientOnly para esconder un bug de hidratación.
- Para fechas: render consistente, o mostrar placeholder determinista y formatear tras hidratación cuando sea necesario.
- Verificar salida HTML del servidor, consola de hydration y eventos de navegación, no solo que `npm run dev` abra.
- Middleware de ruta corre potencialmente en servidor y cliente: no producir efectos repetidos ni usar navegador sin guardias.

## Seguridad SSR
Nunca serializar credenciales, tokens de proveedor, datos de sesión completos, cabeceras internas, stack traces o información clínica que no necesita el cliente. Inspeccionar `__NUXT_DATA__` y documentos HTML devueltos. No agregar `useState` con datos de otro usuario fuera de un scope de request.
