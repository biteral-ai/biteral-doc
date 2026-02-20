---
title: Deactivate customers
expanded: false
sidebar_position: 4
icon: arrow-right
---
# Deactivate customers temporarily

Sometimes you may need to temporarily deactivate some customers so they are not part of the data handled by Biteral's tools.

In such cases, set <Badge variant="parameter" text="isActive" /> on your customer to <Badge variant="value" text="false" />:

```php
use Biteral\Payload\Customer\CustomerPayload;

$customerPayload =
    new CustomerPayload([
        'code' => 'D314K1432',
        'isActive' => false
    ]);

$client->customers()->ingest($customerPayload);
```

When the customer is available again, reactivate it by setting <Badge variant="parameter" text="isActive" /> to <Badge variant="value" text="true" />

:::info
When you load a customer for the first time, <Badge variant="parameter" text="isActive" /> will be <Badge variant="value" text="true" /> unless you specify otherwise.
:::
