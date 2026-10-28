# TypeScript estricto + Vue 3

- `strict: true`; preferir `unknown` a `any`, unions discriminadas y tipos derivados de OpenAPI.
- `<script setup lang="ts">`, `defineProps`, `withDefaults` cuando aplique; `defineEmits` tipado, `defineModel` solo donde la API instalada lo soporte.
- `computed` puro; `watch` para efectos, sin bucles reactivos; `watchEffect` con precaución si depende de múltiples fuentes o async.
- `ref` para primitivos y estructuras; `reactive` para objetos coherentes; `shallowRef` para datos grandes no transformados en profundo.
- `toRefs`, `toRef` o `storeToRefs` al extraer propiedades reactivas; no desestructurar estados reactivos ingenuamente.
- Evitar mutar props, side effects al render, cambios de estado dentro de computed y watchers sin limpieza.
- `onScopeDispose` / limpieza en composables con timers, eventos, suscripciones y AbortController.
- Props/events, slots, fallthrough attrs, `v-model`, key estable y tipos de template deben verificarse.
- No usar `v-html` para contenido no confiable; exigir sanitizador mantenido y política robusta si inevitable.
- Errores HTTP como unión tipada: validation, unauthenticated, forbidden, conflict, rate_limited, unavailable, unknown. No confiar en `catch(error: any)`.
- No enviar objetos `Date` serializados implícitamente como si preservaran zona horaria local.

## Revisión
¿Está claro qué estado es fuente de verdad? ¿Se usa un watcher donde bastaba computed? ¿Existen carreras al cambiar props? ¿Se limpia recurso al desmontar? ¿La vista depende de tipos de API sin normalizar? ¿Se tipan todos los eventos y errores?
