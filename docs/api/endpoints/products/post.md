---
title: Post
sidebar_label: Post
sidebar_position: 1
icon: arrow-right
---
# <Badge variant="api-endpoint" text="/products" /> <Badge variant="http-post" text="POST" />

Create or update a product.

<Tabs>
<TabItem value="result" label={<Badge icon="json" text="JSON request body" transparent />}>

```json
{
    "code": "N30123",
    "title": "Urban sports shoes for men – AirFlow model",
    "description": "These shoes combine style and comfort for everyday use. Designed with breathable materials, a non-slip rubber sole, and an ergonomic insole, they are ideal for both city walking and indoor training. The AirFlow model offers a perfect fit and a modern design that adapts to any casual look. Available in various sizes and colors.",
    "price": {
        "amount": "49.95",
        "currency": "EUR"
    },
    "attributes": [
        {"title": "Material", "value": "Leather"},
        {"title": "Color", "value": "black with gray details"},
        {"title": "Available sizes", "value": "39, 40, 41, 42, 43, 44"},
        {"title": "Sole", "value": "non-slip rubber"},
        {"title": "Weight", "value": "850g (pair, size 42)"},
        {"title": "Recommended use", "value": "Daily use and light training"}
    ],
    "brand": {
        "code": "OW142302",
        "name": "Nike"
    },
    "category": {
        "code": "MC418292",
        "title": "Sports shoes",
        "description": "Footwear designed to offer comfort, support, and performance in physical or sports activities. These shoes also adapt to urban and daily use thanks to their modern designs and versatile materials. They include features like non-slip soles, breathable fabrics, and styles that combine functionality with fashion."
    },
    "imageUrl": "https://m.media-amazon.com/images/I/61cELGQXXhL._AC_UL320_.jpg",
    "url": "https://www.amazon.es/Hitmars-Zapatillas-Deportivas-Transpirables-Sneakers/dp/B0CYGMZVL7",
    "metadata": {
        "videoUrl": "https://m.media-amazon.com/videos/C/dk14lkKlsnw._AC_UL1080_.mp4",
        "currentDiscountRate": "50%",
        "isNew": true,
        "isFeatured": false
    }
}
```

</TabItem>
<TabItem value="documentation" label={<Badge icon="parameter" text="Documentation" transparent />}>

<table>
    <tbody>

        <tr>
            <td><Badge variant="api parameter required" icon="required" text="code" /></td>
            <td>Product code <Badge variant="value-restriction" icon="max-length" text="255" />. For example <Badge variant="value" text="N39291" /> </td>
        </tr>

        <tr>
            <td><Badge variant="api parameter" icon="parameter" text="isActive" /></td>
            <td>
                Indicates if the product is enabled to be used by Biteral's services, such as recommendations, search, or analysis. If this field is not included when sending or updating the product, it is automatically assumed that the product is active <Badge variant="value" text="true" />. Setting <Badge variant="api parameter" text="isActive" /> to <Badge variant="value" text="false" /> allows keeping the product in the system without it participating in any processing or appearing in any results.
            </td>
        </tr>

        <tr>
            <td><Badge variant="api parameter required" icon="required" text="title" /></td>
            <td>Product title. <Badge variant="value-restriction" icon="max-length" text="10000" /></td>
        </tr>

        <tr>
            <td><Badge variant="api parameter" icon="parameter" text="description" /></td>
            <td>Product description. <Badge variant="value-restriction" icon="max-length" text="60000" /></td>
        </tr>

        <tr>
            <td><Badge variant="api parameter" icon="parameter" text="price" /></td>
            <td>
                The price of the product. A JSON object where <Badge variant="property required" icon="required" text="amount" /> is the product price, and <Badge variant="property required" icon="required" text="currency" /> is the currency in which the price is expressed, according to the [ISO 4217](https://en.wikipedia.org/wiki/ISO_4217) standard. For example:

                ```json
                {
                    "amount": "49.95",
                    "currency": "EUR"
                }
                ```
            </td>
        </tr>

        <tr>
            <td><Badge variant="api parameter" icon="parameter" text="attributes" /></td>
            <td>
                The product attributes. An array of JSON objects where <Badge variant="property required" icon="required" text="title" /> <Badge variant="value-restriction" icon="max-length" text="255" /> is the attribute title and <Badge variant="property" icon="required" text="value" /> <Badge variant="value-restriction" icon="max-length" text="60000" /> is its value. For example:

                ```json
                [
                    {"title": "Material", "value": "Leather"},
                    {"title": "Color", "value": "black with gray details"},
                    {"title": "Available sizes", "value": "39, 40, 41, 42, 43, 44"},
                    {"title": "Sole", "value": "non-slip rubber"},
                    {"title": "Weight", "value": "850g (pair, size 42)"},
                    {"title": "Recommended use", "value": "Daily use and light training"}
                ]
                ```
            </td>
        </tr>

        <tr>
            <td><Badge variant="api parameter" icon="parameter" text="brand" /></td>
            <td>
                The product brand. A JSON object where <Badge variant="property required" icon="required" text="code" /> <Badge variant="value-restriction" icon="max-length" text="255" /> is the brand code and <Badge variant="property" text="name" /> <Badge variant="value-restriction" icon="max-length" text="255" /> is its name. For example:

                ```json
                {
                    "code": "OW142398",
                    "name": "Nike"
                }
                ```
            </td>
        </tr>

        <tr>
            <td><Badge variant="api parameter" icon="parameter" text="category" /></td>
            <td>
                The product category. A JSON object where <Badge variant="property required" icon="required" text="code" /> <Badge variant="value-restriction" icon="max-length" text="255" /> is the category code, <Badge variant="property" text="title" /> <Badge variant="value-restriction" icon="max-length" text="255" /> its title and <Badge variant="property" text="description" /> <Badge variant="value-restriction" icon="max-length" text="60000" /> its description. For example:

                ```json
                {
                    "code": "MC418298",
                    "title": "Sports shoes",
                    "description": "Footwear designed to offer comfort, support, and performance in physical or sports activities. These shoes also adapt to urban and daily use thanks to their modern designs and versatile materials. They include features like non-slip soles, breathable fabrics, and styles that combine functionality with fashion."
                }
                ```
            </td>
        </tr>

        <tr>
            <td><Badge variant="api parameter" icon="parameter" text="imageUrl" /></td>
            <td>The URL of the product image, preferably an image of approximately 600 pixels wide. For example: <Badge variant="value" text="https://m.media-amazon.com/images/I/61cELGQXXhL._AC_UL320_.jpg" /></td>
        </tr>

        <tr>
            <td><Badge variant="api parameter" icon="parameter" text="url" /></td>
            <td>The public URL of the product. For example: <Badge variant="value" text="https://www.amazon.es/Hitmars-Zapatillas-Deportivas-Transpirables-Sneakers/dp/B0CYGMZVL7" /></td>
        </tr>

        <tr>
            <td><Badge variant="api parameter" icon="parameter" text="metadata" /></td>
            <td>
                Additional data that is useful to you when receiving the product as a result from Biteral's tools. A JSON object <Badge variant="value-restriction" icon="max-length" text="60000" />. For example:

                ```json
                {
                    "videoUrl": "https://m.media-amazon.com/videos/C/dk14lkKlsnw._AC_UL1080_.mp4",
                    "currentDiscountRate": "50%",
                    "isNew": true,
                    "isFeatured": false
                }
                ```
            </td>
        </tr>

    </tbody>
</table>

</TabItem>
</Tabs>

### Update a product

To update a product's data, make the same <Badge variant="http-post" text="POST" /> request to this endpoint with the new data.

The data you don't specify will keep its previous value. To remove data, pass it as <Badge variant="value" text="null" />.

### Load multiple products at once

You can load products one by one, but it is faster to load them in batches. To do this, pass the products as an array, for example:

```json
[
    {
        "code": "N30123",
        "title": "Urban sports shoes for men – AirFlow model",
        "description": "These shoes combine style and comfort for everyday use. Designed with breathable materials, a non-slip rubber sole, and an ergonomic insole, they are ideal for both city walking and indoor training. The AirFlow model offers a perfect fit and a modern design that adapts to any casual look. Available in various sizes and colors.",
        "price": {
            "amount": "49.95",
            "currency": "EUR"
        }
    },
    {
        "code" : "J481955"
    }
]
```

:::tip
You can load up to 100 products at once using this method
:::

:::info
When you load many products to Biteral very quickly, it might take a while until they are all available for Biteral's tools.
:::
