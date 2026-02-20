---
title: Send events in batches
expanded: false
sidebar_position: 2
icon: arrow-right
---
import LotsOfEvents from '../../_components/note_lots_of_events.md';

# Send events in batches

If your system generates many events, it is better to send events in batches.

:::info
<LotsOfEvents />
:::

To send events in batches, instead of using <Badge variant="sdk php method" text="events()->ingest()" /> every time an event occurs in your system, use some mechanism that collects events when they occur, and send them later in a batch every so often or when you have collected a lot, using <Badge variant="sdk php method" text="eventsBatchIngest()->ingest()" />. See how it works:

```php
// Get an EventsBatchIngestService object to be able to reuse it
$eventsBatchIngestService = $client->eventsBatchIngest();

// Start an event ingestion session
$eventsBatchIngestService->startIngestionSession();

// Loop through your pending events to send
while ($event = $query->getRow()) {

    // Create an EventPayload object just like when loading products individually
    $eventPayload =
        new EventPayload([
            'type' => $event->getType(),
            'timestamp' => new DateTimeImmutable('@'.$event->getTimestamp()),
            'customerCode' => $event->getCustomerCode(),
            'productCode' => $event->getProductCode()
        ]);

    // Send the event to be loaded in batches
    $eventsBatchIngestService->ingest($eventPayload);
}

// When the loop is finished, do not forget to close the ingestion session
$batchIngestResult = $eventsBatchIngestService->finishIngestionSession();
```

> When you send events in batches, it is essential to specify <Badge variant="parameter" text="timestamp" />, since the time you send the event may be different from the time it actually occurred.

Remember that each event <Badge variant="parameter" text="type" /> requires different additional parameters. Check the available events guide to know what parameters you must add to each event type:

<Button text="Available event types" to="/guide/integration-data/events/types" />

### Ideas to collect events in batches

A simple way to send events in batches is to create a process that runs regularly every `N` minutes, and sends all events that have occurred in the last `N` minutes in a batch, using the method described above.

Some more advanced implementations save events in a queue before sending them to Biteral, and perform a bulk send of the accumulated events when the queue reaches a certain size. This event queue can be implemented in many ways, such as a conventional database like MySQL, an in-memory system like Redis or a message broker like RabbitMQ.
