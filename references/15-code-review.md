# Revisión técnica adversarial

## Revisor 1 — Corrección
¿Cumple contrato API? ¿Hay casos vacíos, errores, datos parciales, abort y concurrencia? ¿La paginación remota es real? ¿Las fechas respetan zona?

## Revisor 2 — Seguridad
¿SSR puede cruzar usuarios? ¿Las claves de caché incluyen org? ¿Están los permisos validados en servidor? ¿Tokens/logs/cookies seguros? ¿Enlace prefirmado expuesto?

## Revisor 3 — UX y accesibilidad
¿Se puede completar con teclado? ¿Carga, vacío, error, conflicto y éxito? ¿Form responsive? ¿Acción destructiva explícita? ¿Screen readers?

## Revisor 4 — Operación
¿Tests suficientes y confiables? ¿Metrics sanitizadas? ¿Rollback? ¿Terceros introducidos? ¿Mantiene contrato de backend y lockfile?

## Formato de hallazgo
`[SEVERITY] archivo:línea — escenario reproducible; riesgo; evidencia; corrección; prueba de regresión`. No llamar alto a una suposición sin camino de explotación. Reportar riesgos residuales y decisiones explícitas.
