# Lecciones de comunidad revisadas (no reglas absolutas)

1. Debate Pinia + TanStack: en r/vuejs una recomendación recurrente es separar estado de servidor y estado de cliente; un participante describe queries dentro de Pinia singleton causando refetches persistentes y problemas tras logout. Es una experiencia, no prueba de que todo uso sea inválido. https://www.reddit.com/r/vuejs/comments/1nm3ysk/where_to_put_tanstack_queries_when_used_with_pinia/
2. Arquitectura de estado grande: la comunidad también defiende Pinia para coordinar flujos e incluso I/O encapsulada en stores. La elección debe basarse en lifecycle, SSR, testing y team conventions. https://www.reddit.com/r/vuejs/comments/1szuhyn/how_are_you_managing_complex_state_in_larger_vue/
3. Pinia Colada: foros plantearon dudas de madurez/paginación en 2025 y mencionaron soporte cambiante. Antes de adoptarlo, verificar estado de versión y garantías, no depender de testimonios viejos. https://www.reddit.com/r/vuejs/comments/1limhlq
4. Hydration mismatches: discusiones Nuxt recomiendan comparar HTML SSR, consola y producción; esto complementa, no sustituye, el modelo oficial de hidratación. https://www.reddit.com/r/Nuxt/comments/1sqtcsr/hydration_completed_but_contains_mismatches_error/
5. No adoptar recomendaciones virales sin reproducirlas: benchmark bundle, perfil de seguridad, compatibilidad y mantenimiento.

## Señales de alerta en PR
`ClientOnly` añadido para ocultar mismatch; uso indiscriminado de `$fetch` en SSR; cache server global; todos los datos en Pinia; scope de tenant ausente de keys; filtro local sobre página parcial; permisos validados solo por visibilidad; paquete sin mantenimiento; supuesta optimización sin profiling.
