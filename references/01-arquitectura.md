# Arquitectura de aplicaciones mantenibles

## Estrategia
Preferir organización por capacidades / feature vertical y composición clara antes que directorios gigantes `components/` y `utils/`. Evitar arquitectura hexagonal teatral en frontend pequeño; establecer límites donde hay contratos, testing y ciclos de vida. Desacoplar vista, caso de uso, acceso remoto y mappers cuando la complejidad lo amerite.

```
app/
  pages/                 # rutas y composición de páginas Nuxt 4 (verificar versión)
  components/ui/         # UI reutilizable sin dominio
  composables/           # estado reusable de capa presentación
  middleware/            # navegación, no autorización final
  layouts/
  plugins/
  assets/
features/
  patients/
    api/                 # adapters hacia contratos del backend
    components/
    composables/
    models/
    validation/
    tests/
  appointments/
  organizations/
shared/
  api/                   # cliente HTTP, errores, serialización
  types/
  utils/
server/
  api/                   # Nitro/BFF solo si hace falta
  utils/
```

Vue SPA puede usar `src/` equivalente. Nuxt 3 vs Nuxt 4 tienen convenciones diferentes (`app/`, layers y autoimports): confirmar el repo, no copiar árbol a ciegas. Nuxt features externas a app pueden requerir configuración explícita de imports/components.

## Reglas
- Página coordina composición y navegación, no contiene HTTP complejo ni reglas de negocio.
- Componentes UI puros reciben props y emiten events; no importan stores de dominio ocultamente.
- `features/x` no importa implementación interna de `features/y`; exponer API pública o fachada.
- No singletons globales mutables en SSR, especialmente con usuario, tenant y tokens.
- Naming convencional y consistente; import aliases y barrels solo si ayudan sin ciclos.
- Distinguir: `domain model` ≠ `API DTO` ≠ `view model`. Mapear explícitamente fechas, enums y `null`.
- Cada feature debe tener tests de invariantes, estados UX, seguridad y SSR si aplica.
- Evitar generalizar de más: extraer después de duplicación significativa, no por una coincidencia.

## Checklist de arquitectura
Versiones verificadas; ownership; dependencias unidireccionales; contratos API; límites cliente/servidor; estado; errores; permisos; pruebas; escenarios multi-org; localización; coste de cambio.
