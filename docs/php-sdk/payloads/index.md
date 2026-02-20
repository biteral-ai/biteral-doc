# Payloads

Payloads are the objects you use to provide data to Biteral about your e-commerce.

For example, when you [add a product to Biteral](/php-sdk/products/add-products) with <Badge variant="sdk php method" text="$client->products()->post()" />, you must provide an object of the <Badge variant="sdk php payload" text="ProductPayload" to="/php-sdk/payloads/product-payload" /> class as a parameter.

Additionally, many SDK methods return data in the form of [entities](/php-sdk/entities), which are objects that in turn contain Payloads of one of these types. For example, when you get a product with <Badge variant="sdk php method" text="$client->products()->get()" />, you result in an object (entity) of the <Badge variant="sdk php entity" text="Product" to="/php-sdk/entities/product" /> class that includes, among other things, the object's original Payload, available at <Badge variant="sdk php property" text="$result->payload" />

### Example

```php
// Add a product
$client->products()->post(
    new ProductPayload(
        code: 'N39291',
        title: 'Urban sports shoes for men – AirFlow model'
    )
);

// Get the product you just added
$result = $client->products()->getByCode('N39291');

// Shows the product's title
echo $result->payload->title; // "Urban sports shoes for men – AirFlow model"
```
