# Formularios, validación y flujos multistep

- Validación dual: cliente UX, backend autoridad. Seleccionar Zod/Valibot y formularios de acuerdo con versión y peso.
- Esquemas tipados, normalización de campos y errores 422 del backend, no duplicar una tercera definición manual si OpenAPI puede ayudar.
- Errores por campo, accesibilidad, foco a primer error, campos obligatorios, entradas con máscaras si son necesarias y no invasivas.
- Estado dirty/touched/submitting/success; desactivar doble envío y manejar idempotencia y timeout ambiguo.
- Abort al desmontar cuando seguro; no abortar mutaciones en servidor solo por ocultar UI sin diseñar recuperación.
- Wizards: preservar borradores de forma segura, navegación back/forward, reentrada, permisos por paso; no persistir información sensible en storage sin autorización.
- Fechas/horarios: serialización explícita, UTC para instantes, IANA para zonas, reglas DST, no mezclar fecha local con instante.
- Campos de archivos: validar bytes en servidor, MIME no es evidencia suficiente, uploads en streaming, mensajes de límites y fallos.
- Casos 409/conflicto: mostrar diferencia y acciones explícitas, no sobreescribir silenciosamente.
- Cerrar modal sin perder cambios, borrador vs documento firmado, confirmaciones irreversibles.
