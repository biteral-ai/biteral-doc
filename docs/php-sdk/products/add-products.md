---
title: Load products
expanded: false
sidebar_position: 1
icon: arrow-right
---
# Load products

The PHP SDK allows loading products into Biteral, updating them and deleting them, in addition to other operations that will be useful when implementing the tools.

### Load a product

Call <Badge variant="sdk php method" text="products()->ingest()" /> with a <Badge variant="sdk php payload" text="ProductPayload" to="/php-sdk/payloads/product-payload" /> object as a parameter:

```php
use Biteral\Payload\Brand\BrandPayload;
use Biteral\Payload\Shared\PricePayload;
use Biteral\Payload\Product\ProductPayload;
use Biteral\Payload\Product\ProductCategoryPayload;
use Biteral\Payload\Product\ProductAttributePayload;

$productPayload =
    new ProductPayload([
        'code' => 'N30122',
        'title' => 'Urban sports shoes for men – AirFlow model',
        'description' => 'These shoes combine style and comfort for daily use. Designed with breathable materials, non-slip rubber sole, and ergonomic insole, they are ideal for both walking around the city and indoor training. The AirFlow model offers a perfect fit and a modern design that adapts to any casual look. Available in various sizes and colors.',
        'attributes' => [
            new ProductAttributePayload(['title' => 'Material', 'value' => 'Leather']),
            new ProductAttributePayload(['title' => 'Color', 'value' => 'Black with gray accents']),
            new ProductAttributePayload(['title' => 'Available sizes', 'value' => '39, 40, 41, 42, 43, 44']),
            new ProductAttributePayload(['title' => 'Sole', 'value' => 'Non-slip rubber']),
            new ProductAttributePayload(['title' => 'Weight', 'value' => '850g (pair, size 42)']),
            new ProductAttributePayload(['title' => 'Recommended use', 'value' => 'Daily use and light training'])
        ],
        'brand' => new BrandPayload(['code' => 'OW142302', 'name' => 'Nike']),
        'category' => new ProductCategoryPayload([
            'code' => 'MC418292',
            'title' => 'Sports shoes',
            'description' => 'Footwear designed to provide comfort, support, and performance in physical or sporting activities. These shoes are also suitable for urban and daily use thanks to their modern designs and versatile materials. They feature non-slip soles, breathable fabrics, and styles that combine functionality with fashion.'
        ]),
        'price' => new PricePayload(['amount' => '49.95', 'currency' => 'EUR']),
        'imageUrl' => 'https://m.media-amazon.com/images/I/61cELGQXXhL._AC_UL320_.jpg',
        'url' => 'https://www.amazon.es/Hitmars-Zapatillas-Deportivas-Transpirables-Sneakers/dp/B0CYGMZVL7'
    ]);

$client->products()->ingest($productPayload);
```

This will add the product to Biteral.

:::info
Please note that the product will be added to the project corresponding to the API key you are using.
:::
