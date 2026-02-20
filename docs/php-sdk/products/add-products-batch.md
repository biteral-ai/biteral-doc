---
title: Bulk load
expanded: false
sidebar_position: 2
icon: arrow-right
---
# Bulk load products

If you need to load many products into Biteral, calling <Badge variant="sdk php method" text="products()->ingest()" /> for each product you want to load is slow, and can cause errors due to excessive memory consumption.

Instead, use <Badge variant="sdk php method" text="productsBatchIngest()->ingest()" />, which is specifically designed for bulk loads. This method groups products optimally to maximize speed and reduce the risk of resource usage related problems. See how it works:

```php
// Get a ProductsBatchIngestService object to reuse it
$productsBatchIngestService = $client->productsBatchIngest();

// Start a product ingestion session
$productsBatchIngestService->startIngestionSession();

// Loop through the products as you normally would with your database
while ($product = $query->getRow()) {

    // Create a ProductPayload object just like when loading products individually
    $productPayload =
        new ProductPayload([
            'code' => $product->getCode(),
            'title' => $product->getTitle(),
            [...]
        ]);

    // Send the product to be loaded in batches
    $productsBatchIngestService->ingest($productPayload);
}

// When the loop is finished, do not forget to finish the ingestion session
$batchIngestResult = $productsBatchIngestService->finishIngestionSession();
```

:::info
When you load many products to Biteral very quickly, it can take a while until they are all available for Biteral's tools.
:::
