import LotsOfEvents from '../../../_components/note_lots_of_events.md';

# Integrate events

Events are the actions your customers perform, and they allow Biteral to learn how they interact with your products. For example, some of the most important events Biteral collects are product purchases, catalog browsing, or even returns.

### Send an event

<Tabs>
<TabItem value="php" label={<Badge icon="code" text="PHP SDK" transparent />}>

Call <Badge variant="sdk php method" text="events()->ingest" to="/php-sdk/events/send-events" /> with an <Badge variant="sdk php payload" text="EventPayload" to="/php-sdk/payloads/event-payload" /> object as parameter. Check the [available event types](/guide/integration-data/events/types) to know what additional parameters you must add to the object.

<Button text="Send an event with PHP" to="/php-sdk/events/send-events" />

</TabItem>
<TabItem value="api" label={<Badge icon="technology/api" text="API" transparent />}>

Make a <Badge variant="http-post" text="POST" /> request to the <Badge variant="api-endpoint" text="/events" to="/api/endpoints/events/post" /> endpoint.

<Button text="Send an event with the API" to="/api/endpoints/events/post" />

</TabItem>
</Tabs>

### When to send an event

The easiest way is to send events the exact moment they occur in your system. Besides, this will make Biteral's results updated in near real-time. However, if your system generates many events, it is better to send them in batches:

<Button text="Send events in batches with PHP" to="/php-sdk/events/send-events-batch" />
<Button text="Send events in batches with the API" to="/api/endpoints/events/post/#send-multiple-events-at-once" />

#

:::info
<LotsOfEvents />
:::