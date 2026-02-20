---
title: Desactivar clientes
expanded: false
sidebar_position: 4
icon: arrow-right
---
# Desactivar clientes temporalmente

En algunas ocasiones es posible que necesites desactivar temporalmente algunos clientes de forma que no formen parte de los datos que manejan las herramientas de Biteral.

En tales casos, pon <Badge variant="parameter" text="isActive" /> en tu cliente a <Badge variant="value" text="false" />:

```php
use Biteral\Payload\Customer\CustomerPayload;

$customerPayload =
    new CustomerPayload([
        'code' => 'D314K1432',
        'isActive' => false
    ]);

$client->customers()->ingest($customerPayload);
```

Cuando el cliente vuelva a estar disponible, reactívalo poniendo <Badge variant="parameter" text="isActive" /> a <Badge variant="value" text="true" />

:::info
Cuando cargas un cliente por primera vez, <Badge variant="parameter" text="isActive" /> será <Badge variant="value" text="true" /> si no especificas lo contrario.
:::
