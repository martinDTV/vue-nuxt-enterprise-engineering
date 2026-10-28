# Estado, caché, invalidación y consistencia

## Cuatro categorías
- Local componente: modal, formulario en edición, foco, selección — refs, computed.
- URL: búsqueda, página, sort, filtros reproducibles — route.query.
- Aplicación compartida: navegación, tema, wizard, clínica activa (solo identificador no secreto) — Pinia o useState SSR-safe.
- Servidor: resultados de API y mutaciones — Nuxt async data / TanStack Query / Pinia Colada.

## Reglas
- No duplicar automáticamente datos HTTP en Pinia si ya existe caché remota.
- Al cambiar de usuario/tenant, limpiar o particionar toda caché y datos persistidos, abortar peticiones antiguas, invalidar websockets/suscripciones.
- SSR hydration de biblioteca query requiere procedimiento propio y validación en versión actual.
- No crear queries activas dentro de stores singleton sin resolver ciclo de vida.
- Optimistic updates solo si tiene rollback, conflictos e idempotencia; evitar en historias clínicas firmadas, pagos y permisos.
- Persistencia Pinia: no secretos, tokens, datos médicos ni listas de pacientes sin una revisión explícita de seguridad; en general no persistir esos datos.
- Cache-Control de privados: considerar `private, no-store` según sensibilidad y despliegue; CDN con `Vary` correcto y políticas verificadas.
- Invalidation tras create/update/delete: comprobar recurso y listas afectadas, incluyendo filtros y totales.
- Estados offline y recuperación: definir comportamiento, no inventar soporte offline.
