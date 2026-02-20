---
sidebar_position: 8
---
# EventPayload

Representa un evento ocurrido en vuestro sistema. Por ejemplo, una venta realizada.

Propiedad|Tipo|Descripción
---|---|---
<Badge variant="sdk php property" icon="property" text="type" />|string|El nombre del tipo de evento, de entre los [tipos de eventos disponibles](/guide/integration-data/events/types). Por ejemplo: <Badge variant="value" text="EventAddedToCart" />
<Badge variant="sdk php property" icon="property" text="timestamp" />|DateTimeImmutable|El momento en el que se produjo el evento. Si no lo especificas, se utilizará el momento actual.

:::warning
Cada tipo <Badge variant="sdk php property" text="type" /> de evento requiere algunas propiedades adicionales. Consulta los [tipos de eventos disponibles y sus propiedades adicionales](/guide/integration-data/events/types).
:::