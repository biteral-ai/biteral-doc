---
title: Post
sidebar_label: Post
sidebar_position: 1
icon: arrow-right
---
import LotsOfEvents from '../../../_components/note_lots_of_events.md';

# <Badge variant="api-endpoint" text="/events" /> <Badge variant="http-post" text="POST" />

Send an event.

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
            <td>Event type, from the [available event types](/guide/integration-data/events/types). For example <Badge variant="value" text="EventAddedToCart" /></td>
        </tr>

        <tr>
            <td><Badge variant="api parameter" icon="parameter" text="timestamp" /></td>
            <td>The moment the event occurred. If you don't specify it, the current time will be used. An [ISO 8601](https://en.wikipedia.org/wiki/ISO_8601) string, for example: <Badge variant="value" text="2025-11-18T07:21:16.527Z" /></td>
        </tr>

    </tbody>
</table>

</TabItem>
</Tabs>

Remember that each event <Badge variant="parameter" text="type" /> requires different additional parameters. Check the available events guide to know which parameters to add to each event type:

<Button text="Available event types" to="/guide/integration-data/events/types" />

### Send multiple events at once

If your system generates many events, it is better to send them in batches.

:::info
<LotsOfEvents />
:::

To send events in batches, pass the events as an array, for example:

```json
[
    {
        "type": "EventSale",
        "timestamp": "2025-11-18T07:21:16.527Z",
        "customerCode": "D314K1432",
        "productCode": "N30122",
        "quantity": 2
    },
    {
        "type": "EventProductViewed",
        "timestamp": "2025-11-18T07:18:13.527Z",
        "customerCode": "D314K1432",
        "productCode": "N30122"
    }
]
```

:::tip
You can load up to 100 events at once using this method
:::
