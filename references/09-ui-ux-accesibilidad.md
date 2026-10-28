# UI/UX de aplicaciones profesionales

- Sistema de diseño: tokens semánticos de color, tipografía, espacios, radios, estados, dark mode si aplica; no proliferación de colores hardcodeados.
- Componentes accesibles Nuxt UI / Reka según versión; verificar API y slots reales; no asumir que biblioteca garantiza accesibilidad total.
- Estructura de páginas consistente: breadcrumb, heading, action primary, filtros, contenido, error/empty/loading.
- WCAG 2.2 AA como objetivo por defecto; teclado, foco visible, label asociado, contraste, reduced motion, zoom 200%, estados no solo color.
- Dialog: focus trap, escape, retorno del foco, confirmación destructiva; danger actions describen efecto irreversible.
- Toast no sustituye información persistente; errores de formulario cerca del campo y resumen accesible.
- Tablas: caption cuando útil, encabezados, sort accesible, paginación anunciada; ofrecer mobile view si la tabla es muy ancha.
- Skeletons no deben falsear contenido ni producir saltos masivos; indicadores de progreso para >espera percibida.
- Formularios clínicos: evitar pérdida de datos, autosave con aviso, advertencias claras de firma irreversible, confirmación en dos pasos.
- UX: primero flujos de usuario y estados; screenshots y reviews responsivos; no optimizar solo para desktop.
- Animaciones: GSAP/Three.js opcionales cuando añaden valor; no usarlos de forma decorativa sobre todo en pantallas de administración.
