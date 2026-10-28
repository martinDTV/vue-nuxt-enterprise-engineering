# Auth, autorización, sesiones y amenazas frontend

## Diseño
- OAuth/OIDC/OAuth callback y PKCE según arquitectura del IdP; preferir patrón BFF con sesión cookie HttpOnly Secure SameSite apropiada cuando sea viable.
- `HttpOnly` protege lectura JS pero no elimina CSRF; evaluar cookies, métodos mutantes, Origin, tokens CSRF y SameSite.
- No guardar tokens largos en localStorage por comodidad. Si unavoidable por requisitos concretos, documentar amenazas y mitigaciones.
- Login/logout, rotación, session expiry, refresh, reauth, step-up/MFA, usuario deshabilitado, multi-tab y 401 concurrentes requieren máquina de estados clara.
- No confiar en `v-if="canEdit"` para autorizar; API debe regresar 403/404 y el frontend manejarlo.
- `tenant/org` en ruta y cache key no basta: servidor verifica membresía y permisos efectivos.
- Al cambiar clínica, limpiar estados privados, vistas, query caches, tabs y objetos descargables; abortar peticiones en vuelo.
- Prevención XSS: escapes por defecto, no `v-html` con contenido no confiable; librerías de sanitización auditadas donde necesario.
- Inyecciones de URLs: no navegar a redirect arbitrario ni aceptar `javascript:`/orígenes extraños; proteger open redirects.
- Nunca logs/analytics de payloads sensibles, URL fragments de invitaciones, access tokens, patient fields.
- Headers: CSP, Referrer-Policy, HSTS, Permissions-Policy, frame ancestors, cookies; CSP adaptada a Nuxt y dependencias reales.
- En links prefirmados S3: comprobar auth antes de emitir, TTL breve, riesgo de reuso hasta expiración, no exponer en analytics ni referrers.
- SSR: no reusar mutable singleton con sesión; no cache público HTML o payloads privados.
- CSRF y XSS no se resuelven exclusivamente por CORS.

## Checklist adversarial
Usuario A/B mismo servidor SSR; logout/login sin recarga; cambio org mientras request lenta; owner/admin/assistant; direct URL; WebSocket; 401 por token revocado; invitación vieja; HTML SSR cache; SSR payload; SSRF en BFF; uploads; PII logs.
