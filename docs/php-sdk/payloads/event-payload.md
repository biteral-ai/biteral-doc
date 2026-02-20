---
sidebar_position: 8
---
# EventPayload

Represents an event that occurred in your system. For example, a successful sale.

Property|Type|Description
---|---|---
<Badge variant="sdk php property" icon="property" text="type" />|string|The name of the event type, from among the [available event types](/guide/integration-data/events/types). For example: <Badge variant="value" text="EventAddedToCart" />
<Badge variant="sdk php property" icon="property" text="timestamp" />|DateTimeImmutable|The moment the event occurred. If you do not specify it, the current moment will be used.

:::warning
Each event <Badge variant="sdk php property" text="type" /> requires some additional properties. Check the [available event types and their additional properties](/guide/integration-data/events/types).
:::