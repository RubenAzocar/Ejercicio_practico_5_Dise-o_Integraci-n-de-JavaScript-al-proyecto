# Proyecto: Inteligencia Artificial - Sitio Web Informativo

## Descripción

Este proyecto es un sitio web informativo dedicado a la Inteligencia Artificial, diseñado como parte del Ejercicio Práctico 5 del Curso Fullstack de Talento Digital. El sitio presenta información completa y actualizada sobre el estado actual de la IA en 2025, abordando desde conceptos fundamentales hasta su impacto en la sociedad y la economía global.

El contenido está organizado en múltiples secciones que incluyen la definición y conceptos básicos de la IA, sus aplicaciones en la vida cotidiana, datos interesantes sobre su evolución y mercado, y un análisis del impacto social y económico que esta tecnología está generando en el mundo actual. El sitio utiliza un diseño responsive con enfoque Mobile First, implementado con HTML5 semántico, CSS3 personalizado y Bootstrap 5.3.3 para garantizar una experiencia óptima en cualquier dispositivo.

La interfaz presenta un diseño moderno con efectos de glassmorphism, gradientes tecnológicos y una paleta de colores en tonos azules y cyan que reflejan la temática tecnológica. El sitio incluye una navegación intuitiva con menú colapsable para dispositivos móviles, cards de Bootstrap para la presentación visual del contenido, y una estructura semántica que facilita la comprensión y accesibilidad de la información.

## Integraciones de JavaScript Realizadas

Se ha implementado una funcionalidad de **scroll suave** mediante JavaScript puro que permite al usuario regresar al inicio de la página de manera fluida y elegante. Esta integración mejora significativamente la experiencia del usuario al navegar por el contenido extenso del sitio.

**Archivo creado:** `ASSETS/JS/app.js`

**Funcionalidad implementada:**
- Botón "Ir arriba" que aparece en la página y permite volver al inicio con un solo clic
- Desplazamiento suave hacia la parte superior usando `window.scrollTo()` con la opción `behavior: 'smooth'`
- Event listener que espera la carga completa del DOM antes de ejecutar la funcionalidad
- Enlace del archivo JavaScript en el HTML justo antes del cierre de la etiqueta `</body>`

Esta implementación utiliza JavaScript vanilla (sin librerías adicionales) siguiendo las mejores prácticas de desarrollo web moderno, garantizando un código limpio, eficiente y fácil de mantener.
