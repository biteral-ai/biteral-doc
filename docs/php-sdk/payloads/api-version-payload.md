---
sidebar_position: 1
---
# ApiVersion

Representa una versión de la API.

Propiedad|Tipo|Descripción
---|---|---
<Badge variant="sdk php property" icon="property" text="version" />|string|El string de versión de la API completo. Por ejemplo: <Badge variant="value" text="1.0.0b" />
<Badge variant="sdk php property" icon="property" text="status" />|string|El estado en que se encuentra esta versión, de entre los estados disponibles: <Badge variant="value" text="alpha" />: Versión en desarrollo, la especificación puede cambiar, <Badge variant="value" text="beta" />: Versión en pruebas, pueden aparecer errores, <Badge variant="value" text="stable" />: Versión estable, recomendada para producción, <Badge variant="value" text="retired" />: Versión obsoleta no disponible)
<Badge variant="sdk php property" icon="property" text="isDeprecated" />|bool|Indica si esta versión de API ya no se mantiene, y dejará de estar disponible próximamente.
