---
title: Post
sidebar_label: Post
sidebar_position: 1
icon: arrow-right
---
import LotsOfEvents from '@site/src/components/note_lots_of_events.md';

# <Badge variant="api-endpoint" text="/events" /> <Badge variant="http-post" text="POST" />

Enviar un evento.

<Tabs>
<TabItem value="result" label={<Badge icon="json" text="JSON request body" transparent />}>

```json
{
    "type": "EventSale",
    "timestamp": "2025-11-18T07:21:16.527Z",
    "customerCode": "D314K1432",
    "productCode": "N30122",
    "quantity": 2
}
```

</TabItem>
<TabItem value="documentation" label={<Badge icon="parameter" text="Documentation" transparent />}>

<table>
    <tbody>

        <tr>
            <td><Badge variant="api parameter required" icon="required" text="type" /></td>
            <td>Tipo de evento, de entre los [tipos de eventos disponibles](/guide/integration-data/events/types). Por ejemplo <Badge variant="value" text="EventAddedToCart" /></td>
        </tr>

        <tr>
            <td><Badge variant="api parameter" icon="parameter" text="timestamp" /></td>
            <td>El momento en el que se produjo el evento. Si no lo especificas, se utilizará el momento actual. Una cadena [ISO 8601](https://en.wikipedia.org/wiki/ISO_8601), por ejemplo: <Badge variant="value" text="2025-11-18T07:21:16.527Z" /></td>
        </tr>

    </tbody>
</table>

</TabItem>
</Tabs>

Recuerda que cada tipo <Badge variant="parameter" text="type" /> de evento requiere parámetros adicionales diferentes, consulta la guía de eventos disponibles para saber qué parametros debes añadir a cada tipo de evento:

<Button text="Tipos de eventos disponibles" to="/guide/integration-data/events/types" />

### Enviar varios eventos a la vez

Si vuestro sistema genera muchos eventos, es mejor enviar los eventos en grupo.

:::info
<LotsOfEvents />
:::

Para enviar eventos en grupo, pasa los eventos en forma de un array, por ejemplo:

```json
[
    {
        "type": "EventSale",
        "timestamp": "2025-11-18T07:21:16.527Z",
        "customerCode": "D314K1432",
        "productCode": "N30122",
        "quantity": 2
    }
    {
        "type": "EventProductViewed",
        "timestamp": "2025-11-18T07:18:13.527Z",
        "customerCode": "D314K1432",
        "productCode": "N30122"
    },
    {
        "type": "EventSearch",
        ...
    },
    ...
]
```

:::tip
Puedes cargar hasta 100 eventos a la vez utilizando este método
:::
