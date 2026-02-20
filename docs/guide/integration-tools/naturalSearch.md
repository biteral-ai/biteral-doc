---
title: Natural search
sidebar_position: 2
icon: /static/icons/products/naturalSearch.svg
---
# Natural search

The [natural search engine](https://biteral.ai/natural-search) allows your users to ask questions, type what they are looking for or describe their needs using natural language to get a list of products that match what they are looking for.

Since we do not use traditional search systems based on keywords, dictionaries, frequency extraction or syntactical analyzers, the results include products that have a logical contextual relationship with the need the customer expressed, even if they didn't use any of the words from your product's description.

:::info
Because product search is based on conceptualized information, results also include relevant products even if the customer makes general queries, misspells words or even uses another language.
:::

### Perform a natural search

<Tabs>
<TabItem value="php" label={<Badge icon="code" text="PHP SDK" transparent />}>
Once you have [loaded your products](/guide/integration-data/products), call <Badge variant="sdk php method" text="naturalSearch()->query" to="/php-sdk/products/add-products" /> with a <Badge variant="php sdk payload" text="NaturalSearchQuery" to="/php-sdk/entities/natural-search-query" /> object as parameter:

```php
$products =
    $client->naturalSearch()->query(
        new NaturalSearchQuery(
            query: 'A gift for someone who loves cooking'
        )
    );
```

And you will get an array of <Badge variant="sdk php entity" text="Product" to="/php-sdk/entities/product" /> objects as a result:

```php
foreach ($products as $product) {
    echo $product->payload->title."\n";
}
```

</TabItem>
<TabItem value="api" label={<Badge icon="technology/api" text="API" transparent />}>
Once you have [loaded your products](/guide/integration-data/products), make a <Badge variant="http-get" text="GET" /> request to the <Badge variant="api-endpoint" text="/natural-search" to="/api/endpoints/natural-search/get" /> endpoint passing the search query in the <Badge variant="parameter" text="query" /> parameter, for example: `A gift for someone who loves cooking`

And you will get the matching products like this:

```json
{
    "object": "product",
    "id": "pro_Fj2f4kN1m2dk41",
    "createdAt": "2025-07-02T17:51:50+00:00",
    "updatedAt": null,
    "payload": {
        "code": "DJA8298",
        "isActive": true,
        "title": "Gift set for cooking enthusiasts – gourmet edition",
        "description": "This gift set is perfect for those who enjoy cooking. It includes a bamboo cutting board, a professional stainless steel chef's knife, a custom apron, and a gourmet recipe book. All presented in an elegant gift box. Ideal for surprising any cooking lover with high-quality and practical tools.",
        "attributes": null,
        "brand": null,
        "category": null,
        "price": {
            "amount": "39.90",
            "currency": "EUR"
        }
    },
    {
        "object": "product",
        "id": "pro_Bk3l0gX8m9aj27",
        "createdAt": "2025-07-03T09:22:30+00:00",
        "updatedAt": null,
        "payload": {
            "code": "FNN1848",
            "isActive": true,
            "title": "World spices kit – 12 international flavors",
            "description": "Discover an exclusive collection of 12 spices selected from different corners of the world. Presented in glass jars with handmade labels, this kit is perfect to add a special touch to any dish and expand the recipient's culinary repertoire.",
            "attributes": null,
            "brand": null,
            "category": null,
            "price": {
                "amount": "29.50",
                "currency": "EUR"
            }
        }
    },
    {
        "object": "product",
        "id": "pro_Yt7q1lRm4xzp90",
        "createdAt": "2025-07-04T14:10:00+00:00",
        "updatedAt": null,
        "payload": {
            "code": "SJD2818",
            "isActive": true,
            "title": "Custom apron with pocket – vintage design",
            "description": "An elegant and functional apron with a vintage design, made of thick cotton. It features a front pocket and can be customized with a name or phrase. A practical and original gift for amateur chefs.",
            "attributes": null,
            "brand": null,
            "category": null,
            "price": {
                "amount": "19.95",
                "currency": "EUR"
            }
        }
    }
}
```

</TabItem>
</Tabs>
