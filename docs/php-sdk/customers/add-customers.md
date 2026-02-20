---
title: Load customers
expanded: false
sidebar_position: 1
icon: arrow-right
---
# Load customers

The PHP SDK allows loading customers into Biteral, updating them and deleting them, in addition to other operations that will be useful when implementing the tools.

### Create a customer

Call <Badge variant="sdk php method" text="customers()->ingest()" /> with a <Badge variant="sdk php payload" text="CustomerPayload" to="/php-sdk/payloads/customer-payload" /> object as a parameter:

```php
use Biteral\Entity\Customer\CustomerGender;
use Biteral\Payload\Customer\CustomerPayload;

$client = new Client($apiKey, $apiVersion, $apiBaseUrl);

$customerPayload =
    new CustomerPayload([
        'code' => 'D314K1432',
        'country' => 'ES',
        'state' => 'Barcelona',
        'city' => 'Q11355',
        'yearBorn' => 1983,
        'gender' => CustomerGender::FEMALE,
        'metadata' => [
            'currentDiscountRate' => '10%',
            'isNew' => true
        ]
    ]);

$client->customers()->ingest($customerPayload);
```

This will add the customer to Biteral.

:::info
Please note that the customer will be added to the project corresponding to the API key you are using.
:::
