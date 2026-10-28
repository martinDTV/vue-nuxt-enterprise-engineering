# Performance, SEO y budgets

- Medir antes de optimizar: LCP, INP, CLS; budgets por ruta y dispositivo real.
- Evitar waterfall SSR; paralelizar requests independientes, elegir lazy para paneles no críticos; usar payload apropiado.
- Lazy imports de componentes/rutas; optimizar imágenes `srcset`, `sizes`, formatos; dimensionamiento previene CLS.
- Fuentes optimizadas/self-host si posible; `font-display`, preload solo las esenciales.
- Evitar dependencias enormes: inspeccionar bundle analyzer, tree shaking, icon imports, fechas, editores.
- Reducir reactividad profunda en datasets masivos; render virtualizado cuando medición justifique.
- No cachear nada privado en CDN público. Rutas marketing pueden prerender; caché de datos de sesión/tenant no.
- SEO: metadata con `useSeoMeta`, canonical, robots, sitemap, open graph, structured data solo donde relevante y veraz.
- Páginas privadas: `noindex`, no filtrar contenido sensible al HTML público ni al crawler.
- Cuidado con third-party JS y tracking: consentimiento, privacidad, hidratación y performance.
- Ejecutar Lighthouse web performance en build real, no atribuir scores inexistentes.
