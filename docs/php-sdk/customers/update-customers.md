---
title: Update customers
expanded: false
sidebar_position: 3
icon: arrow-right
---
To change the data of a customer you already loaded, call <Badge variant="sdk php method" text="customers()->ingest()" /> again, but this time specify only the data that changes. You can also specify the other data if it's more convenient for you, even if it hasn't changed.

```php
use Biteral\Payload\Customer\CustomerPayload;

$customerPayload =
    new CustomerPayload([
        'code' => 'D314K1432',
        'state' => 'Madrid'
    ]);

$client->customers()->ingest($customerPayload);
```

When updating customers, it is mandatory to specify at least <Badge variant="parameter" text="code" />

:::tip
If you want to remove a property from a customer, set its value to <Badge variant="value" text="null" />
:::


:::info
If the data you send when updating a customer does not contain any changes compared to the current values, it is not considered an update. In that case, the `ingest` request does not count towards your billable `ingest` requests quota.
:::
