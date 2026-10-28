# Contratos de paginación sugeridos (adaptar al backend real)

## Por página
`GET /patients?page=1&page_size=25&q=ana&sort=-created_at`
```json
{"items": [], "page": 1, "page_size": 25, "total": 0}
```
Validar allowlist de sort en backend; `total` solo si el backend lo entrega realmente. Cualquier query de UI debe ir serializada y tener default. No mandar PII clínica a query strings.

## Cursor
`GET /events?limit=25&after=opaqueCursor`
```json
{"items": [], "next_cursor": null, "has_more": false}
```
Cursor opaco; no inventar páginas numéricas. En nuevas inserciones, definir snapshot/consistencia cuando producto lo requiera.

## UX
Loading inicial, refresco silencioso, empty sin filtros, empty con filtros, error y retry, no permission, disabled tenant, rate limited con Retry-After. Orden determinista; key incluye organización y filtros.
