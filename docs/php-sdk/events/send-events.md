---
title: Send events
expanded: false
sidebar_position: 1
icon: arrow-right
---
# Send events

Every time one of your customers performs one of the actions covered by Biteral, such as buying a product or viewing a category, you must send an event to Biteral to feed the artificial intelligence tools.

:::info
There are several [event types](/guide/integration-data/events/types/) that you must send to Biteral. It is not necessary to implement all of them in your system, but it is recommended so Biteral can offer a more complete and accurate analysis of customer behavior.
:::

### Send an event

Call <Badge variant="sdk php method" text="events()->ingest" to="/php-sdk/events/send-events" /> with an <Badge variant="sdk php payload" text="EventPayload" to="/php-sdk/payloads/event-payload" /> object as parameter. Check the [available event types](/guide/integration-data/events/types) to know what additional parameters you must add to the object:

```php
use Biteral\Payload\Event\EventSalePayload;

$eventPayload =
    new EventPayload([
        'type' => 'EventSale',
        'timestamp' => new DateTimeImmutable('2025-11-15 15:53:15'),
        'customerCode' => 'D314K1432',
        'productCode' => 'N30122'
    ]);

$client->events()->ingest($eventPayload);
```

> If you send events the exact moment they occur, it is not necessary to specify <Badge variant="parameter" text="timestamp" />.

### When to send an event

The easiest way is to send events the exact moment they occur in your system. Besides, this will make Biteral's results updated in near real-time. However, if your system generates many events, it is better to send them in batches. Continue to the next section to learn how to do it.