---
title: Actualizar clientes
expanded: false
sidebar_position: 3
icon: arrow-right
---
Para cambiar los datos de un cliente que ya cargaste, llama a <Badge variant="sdk php method" text="customers()->ingest()" /> nuevamente, pero esta vez especifica sólo los datos que cambian. También puedes especificar los demás datos si te resulta más cómodo, aunque no hayan cambiado.

```php
use Biteral\Payload\Customer\CustomerPayload;

$customerPayload =
    new CustomerPayload([
        'code' => 'D314K1432',
        'state' => 'Madrid'
    ]);

$client->customers()->ingest($customerPayload);
```

Al actualizar clientes, es imprescindible especificar al menos <Badge variant="parameter" text="code" />

:::tip
Si quieres eliminar un dato de un cliente, establece su valor a <Badge variant="value" text="null" />
:::


:::info
Si los datos que envías al actualizar un cliente no contienen ningún cambio respecto a los valores actuales, no se considera una actualización. En ese caso, la petición `ingest` no cuenta para tu cuota de peticiones `ingest` facturables.
:::
