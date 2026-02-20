---
title: Desactivar productos
expanded: false
sidebar_position: 4
icon: arrow-right
---
# Desactivar productos temporalmente

En algunas ocasiones es posible que necesites desactivar temporalmente algunos productos de forma que no formen parte de los datos que manejan las herramientas de Biteral.

> Por ejemplo, lo más probable es que no desees obtener productos que están **fuera de stock** en los resultados de la búsqueda natural.

En tales casos, pon <Badge variant="parameter" text="isActive" /> en tu producto a <Badge variant="value" text="false" />:

```php
use Biteral\Payload\Product\ProductPayload;

$productPayload =
    new ProductPayload([
        'code' => 'N39291',
        'isActive' => false
    ]);

$client->products()->ingest($productPayload);
```

Cuando el producto vuelva a estar disponible, reactívalo poniendo <Badge variant="parameter" text="isActive" /> a <Badge variant="value" text="true" />.

:::info
Cuando cargas un producto por primera vez, <Badge variant="parameter" text="isActive" /> será <Badge variant="value" text="true" /> si no especificas lo contrario.
:::
