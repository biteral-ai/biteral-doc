---
title: Update products
expanded: false
sidebar_position: 3
icon: arrow-right
---
To change the data of a product you already loaded, call <Badge variant="sdk php method" text="products()->ingest()" /> again, but this time specify only the data that changes. You can also specify the other data if it's more convenient for you, even if it hasn't changed.

```php
use Biteral\Payload\Product\ProductPayload;

$productPayload =
    new ProductPayload([
        'code' => 'N39291',
        'price' => new PricePayload(['amount' => '39.90', 'currency' => 'EUR'])
    ]);

$client->products()->ingest($productPayload);
```

When updating products, it is mandatory to specify at least <Badge variant="parameter" text="code" />

:::tip
If you want to remove a property from a product, set its value to <Badge variant="value" text="null" />
:::


:::info
If the data you send when updating a product does not contain any changes compared to the current values, it is not considered an update. In that case, the `ingest` request does not count towards your billable `ingest` requests quota.
:::
