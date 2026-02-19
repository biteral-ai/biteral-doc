import LotsOfEvents from '@site/src/components/note_lots_of_events.md';

# Integrar eventos

Los eventos son las acciones que vuestros clientes realizan, y permiten a Biteral aprender cómo interactúan con vuestros productos. Por ejemplo, algunos de los eventos más importantes que Biteral recopila son la compra de productos, la navegación por vuestro catálogo o incluso las devoluciones.

### Enviar un evento

<Tabs>
<TabItem value="php" label={<Badge icon="code" text="SDK PHP" transparent />}>

Llama a <Badge variant="sdk php method" text="events()->ingest" to="/php-sdk/events/send-events" /> con un objeto <Badge variant="sdk php payload" text="EventPayload" to="/php-sdk/payloads/event-payload" /> como parámetro. Consulta los [tipos de eventos disponibles](/guide/integration-data/events/types) para saber qué parametros adicionales debes añadir al objeto.

<Button text="Enviar un evento con PHP" to="/php-sdk/events/send-events" />

</TabItem>
<TabItem value="api" label={<Badge icon="technology/api" text="API" transparent />}>

Haz una petición <Badge variant="http-post" text="POST" /> al endpoint <Badge variant="api-endpoint" text="/events" to="/api/endpoints/events/post" />

<Button text="Enviar un evento con la API" to="/api/endpoints/events/post" />

</TabItem>
</Tabs>

### Cuándo enviar un evento

Lo más sencillo es enviar los eventos en el mismo instante en que se producen en tu sistema. Además, esto hará que los resultados de Biteral estén actualizados casi en tiempo real. Sin embargo, si vuestro sistema genera muchos eventos, es mejor enviar los eventos en grupo:

<Button text="Enviar eventos en grupo con PHP" to="/php-sdk/events/send-events-batch" />
<Button text="Enviar eventos en grupo con la API" to="/api/endpoints/events/post/#enviar-varios-eventos-a-la-vez" />

#

:::info
<LotsOfEvents />
:::