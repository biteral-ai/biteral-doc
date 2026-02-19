import LotsOfEvents from '@site/src/components/note_lots_of_events.md';

# Integrar eventos

Los eventos son las acciones que vuestros clientes realizan, y permiten a Biteral aprender cómo interactúan con vuestros productos. Por ejemplo, algunos de los eventos más importantes que Biteral recopila son la compra de productos, la navegación por vuestro catálogo o incluso las devoluciones.

### Enviar un evento

<Tabs>
<TabItem value=":icon-file-code: **Con PHP**" label=":icon-file-code: **Con PHP**">

Llama a <Badge variant="info" text="events()->ingest" />(/php-sdk/events/send-events) con un objeto <Badge variant="info" text="EventPayload" />(/php-sdk/payloads/event-payload) como parámetro. Consulta los [tipos de eventos disponibles](/guide/integration-data/events/types) para saber qué parametros adicionales debes añadir al objeto.

[!ref icon="arrow-right" text="Enviar un evento con PHP"](/php-sdk/events/send-events)

</TabItem>
<TabItem value="**Con la API**" label="**Con la API**">

Haz una petición <Badge variant="http-post" text="POST" /> al endpoint <Badge>/events</Badge>(/api/endpoints/events/post)

[!ref icon="arrow-right" text="Enviar un evento con la API"](/api/endpoints/events/post)

</TabItem>
</Tabs>

### Cuándo enviar un evento

Lo más sencillo es enviar los eventos en el mismo instante en que se producen en tu sistema. Además, esto hará que los resultados de Biteral estén actualizados casi en tiempo real. Sin embargo, si vuestro sistema genera muchos eventos, es mejor enviar los eventos en grupo:

[!ref icon="arrow-right" text="Enviar eventos en grupo con PHP"](/php-sdk/events/send-events-batch)
[!ref icon="arrow-right" text="Enviar eventos en grupo con la API"](/api/endpoints/events/post/#enviar-varios-eventos-a-la-vez)

<LotsOfEvents />