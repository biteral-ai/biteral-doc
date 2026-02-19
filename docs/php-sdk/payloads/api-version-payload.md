---
sidebar_position: 1
---
# ApiVersion

Representa una versión de la API.

### Propiedades

||
---|---|---
<Badge icon="screen-full" text="version" />|string|El string de versión de la API completo. Por ejemplo: `1.0.0b`
<Badge icon="screen-full" text="status" />|string|El estado en que se encuentra esta versión, de entre los estados disponibles: `alpha`: Versión en desarrollo, la especificación puede cambiar, `beta`: Versión en pruebas, pueden aparecer errores, `stable`: Versión estable, recomendada para producción, `retired`: Versión obsoleta no disponible)
<Badge icon="screen-full" text="isDeprecated" />|bool|Indica si esta versión de API ya no se mantiene, y dejará de estar disponible próximamente.
