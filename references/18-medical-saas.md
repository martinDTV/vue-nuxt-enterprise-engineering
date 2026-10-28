# SaaS médico y datos sensibles (ej. Clivana)

**No interpreta normas jurídicas ni certifica cumplimiento.** Exigir revisión especializada para México y operación con datos reales.

- Multi-tenant: organizaciones, sucursales, profesionales y pacientes son dominios distintos; id de organización no es autorización.
- Nunca mezclar identidades clínicas con identidades administrativas; acceso a expediente sujeto a relación de atención vigente y decisiones del backend.
- Separar `clinical:read`, `clinical:write`, `clinical:sign`, `clinical:export`; UI no decide legitimidad del acceso.
- Cache privadas segregadas por org/professional/user; invalidar en cambio de clínica, baja de afiliación, MFA step-up expirado y logout.
- Prohibir PII de pacientes en query strings, telemetry, console, analytics, capturas, exception payloads y storage persistente.
- SSR y payload: inspeccionar contenido enviado a cliente, no prerender ni CDN shared de pantallas clínicas.
- Notas: borrador vs firmada inmutable, confirmación fuerte y recuperación ante timeout ambiguo, sin optimistic signing.
- Las citas pueden mostrar información mínima según rol; no renderizar objetos clínicos completos en tablas administrativas.
- Formularios largos: edición segura, aviso de borrador, no pérdida accidental; autosave solo con controles de autorización y privacidad.
- Archivos: enlaces firmados breves, descarga auditada, no dejar URL en historial/logs/referrer.
- Consentimientos: versión y atribución, accesible y claro, pero requisito jurídico concreto validado externamente.
- Rutas públicas de paciente y panel médico tienen límites de tasa y sesiones diferentes.
- Pruebas E2E obligatorias: profesional sale de clínica, queda sin datos; cuenta suspendida; token revocado; cross-tenant; SSR doble sesión.
