---
title: Deactivate products
expanded: false
sidebar_position: 4
icon: arrow-right
---
# Deactivate products temporarily

Sometimes you may need to temporarily deactivate some products so they are not part of the data handled by Biteral's tools.

> For example, you most likely do not want to get **out of stock** products in the natural search results.

In such cases, set <Badge variant="parameter" text="isActive" /> on your product to <Badge variant="value" text="false" />:

```php
use Biteral\Payload\Product\ProductPayload;

$productPayload =
    new ProductPayload([
        'code' => 'N39291',
        'isActive' => false
    ]);

$client->products()->ingest($productPayload);
```

When the product is available again, reactivate it by setting <Badge variant="parameter" text="isActive" /> to <Badge variant="value" text="true" />.

:::info
When you load a product for the first time, <Badge variant="parameter" text="isActive" /> will be <Badge variant="value" text="true" /> unless you specify otherwise.
:::
