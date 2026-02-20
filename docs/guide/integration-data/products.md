---
title: Products
sidebar_position: 2
icon: /static/icons/product.svg
---
# Integrate products

We highly recommend you start by loading all available products in your e-commerce so Biteral can start working with them, but first let's see how to load a single product:

### Load your first product

<Tabs>
<TabItem value="php" label={<Badge icon="code" text="PHP SDK" transparent />}>

Once you have [installed the SDK](/php-sdk/install), call <Badge variant="sdk php method" text="products()->ingest" to="/php-sdk/products/add-products" /> with a <Badge variant="php sdk payload" text="ProductPayload" to="/php-sdk/payloads/product-payload" /> object as parameter.

<Button text="Load a product with PHP" to="/php-sdk/products/add-products" />

</TabItem>
<TabItem value="api" label={<Badge icon="technology/api" text="API" transparent />}>

Once you have learned [how to connect to the API](/api/connect), make a <Badge variant="http-post" text="POST" /> request to the <Badge variant="api-endpoint" text="/products" to="/api/endpoints/products/post" /> endpoint.

<Button text="Load a product with the API" to="/api/endpoints/products/post" />

</TabItem>
</Tabs>

### Load multiple products at once

When loading your entire catalog, making a request for each product would be very slow. Instead, use the bulk product load method:

<Button text="Bulk load with PHP" to="/php-sdk/products/add-products-batch" />
<Button text="Bulk load with the API" to="/api/endpoints/products/post/#load-multiple-products-at-once" />

### Other product operations

You can also perform other operations with products, like updating, deactivating, or deleting them:

<Button text="Other product operations with PHP" to="/php-sdk/products/update-products" />
<Button text="Other product operations with the API" to="/api/endpoints/products/post" />