---
title: Bulk load
expanded: false
sidebar_position: 2
icon: arrow-right
---
# Bulk load customers

If you need to load many customers into Biteral, calling <Badge variant="sdk php method" text="customers()->ingest()" /> for each customer you want to load is slow, and can cause errors due to excessive memory consumption.

Instead, use <Badge variant="sdk php method" text="customersBatchIngest()->ingest()" />, which is specifically designed for bulk loads. This method groups customers optimally to maximize speed and reduce the risk of resource usage related problems. See how it works:

```php
// Get a CustomersBatchIngestService object to reuse it
$customersBatchIngestService = $client->customersBatchIngest();

// Start a customer ingestion session
$customersBatchIngestService->startIngestionSession();

// Loop through the customers as you normally would with your database
while ($customer = $query->getRow()) {

    // Create a CustomerPayload object just like when loading customers individually
    $customerPayload =
        new CustomerPayload([
            'code' => $customer->getCode(),
            'country' => $customer->getCountry(),
            'state' => $customer->getState(),
            'city' => $customer->getCity(),
            'yearBorn' => $customer->getYearBorn(),
            [...]
        ]);

    // Send the customer to be loaded in batches
    $customersBatchIngestService->ingest($customerPayload);
}

// When the loop is finished, do not forget to finish the ingestion session
$batchIngestResult = $customersBatchIngestService->finishIngestionSession();
```

:::info
When you load many customers to Biteral very quickly, it can take a while until they are all available for Biteral's tools.
:::
