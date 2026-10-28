# Paginación, tablas, búsquedas y filtros: contrato profesional

## Elegir estrategia
1. **Offset/page**: ir a página N, total conocido, tablas administrativas; riesgo de páginas inestables ante inserciones. Ordenamiento determinista con campo secundario único.
2. **Cursor/keyset**: feed o dataset grande/cambiante; cursor opaco y estable, no asumir total ni salto aleatorio. No decodificar cursor en UI.
3. **Infinite scroll**: solo con motivación UX; accesibilidad, recuperación de posición, teclado, SEO y fin de resultados.
4. **Virtualización**: si el DOM es costoso; no sustituye paginación backend, necesita alturas/scroll y tests de navegación.

## Contrato
Definir shape API, `items`, `page`, `page_size`, `total` o `next_cursor`, sort allowlist, filtros, validación de rangos, criterio de consistencia. UI no filtra solo la página actual si usuario espera filtrar todo dataset.

## Invariantes
- URL sincronizada y normalizada: `?page=2&pageSize=25&sort=-createdAt&q=...`; back/forward reproduce resultado.
- Debounce en búsqueda, cancelar peticiones anteriores y proteger orden de respuesta.
- Borrar filtro/reset página o cursor; al borrar último elemento recomputar página válida.
- Key de query incluye tenant, identidad, filtros, sort, page/cursor; limpiar caches al cambiar clínica o cerrar sesión.
- Diferenciar 0 resultados globales vs 0 resultados con filtros. Estado loading que evita mover contenido violentamente.
- Tabla accesible con `th scope`, sort status anunciado, acciones por fila con etiquetas, foco y controles de paginación.
- Límites de `pageSize` y tipos deben corresponder a backend; comportamiento explícito frente a 400/422/429.
- Selección masiva: distinguir página vs todas las coincidencias; no realizar bulk cross-page implícito.
- Mutaciones: invalidar o revalidar, preservar scroll/foco cuando apropiado, evitar optimistic update clínica riesgosa.

## Anti-patrones
Filtrar localmente 25 resultados como si fueran todos; llamar al servidor al escribir cada carácter; comparar índices como row key; UI que muestra `total` inventado con cursor; ordenar fechas locale-formateadas; `watch` que dispara loop con router; promesas viejas sobrescribiendo resultados nuevos.

Ver `examples/nuxt-paginated-patients.vue` y `examples/pagination-contract.md`.
