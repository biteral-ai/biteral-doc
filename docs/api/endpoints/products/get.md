---
title: Get
sidebar_label: Get
sidebar_position: 2
icon: arrow-right
---
# <Badge variant="api-endpoint" text="/products" /> <Badge variant="http-get" text="GET" />

Get a product.

<Tabs>
<TabItem value="parameters" label={<Badge icon="parameter" text="Parameters" transparent />}>

Specify one of these two parameters to get a product using its code or its ID in Biteral:

<table>
    <tbody>

        <tr>
            <td><Badge variant="api parameter" icon="parameter" text="code" /></td>
            <td>Product code, for example <Badge variant="value" text="N39291" /></td>
        </tr>

        <tr>
            <td><Badge variant="api parameter" icon="parameter" text="id" /></td>
            <td>Product identifier in Biteral, for example <Badge variant="value" text="pro_f28Jfk0i28iXIs" /></td>
        </tr>

    </tbody>
</table>

</TabItem>
<TabItem value="result" label={<Badge icon="json" text="Result" transparent />}>

```json
{
    "object": "product",
    "id": "pro_T743ujEHOI3Fz4",
    "createdAt": "2025-07-02T17:51:50+00:00",
    "updatedAt": null,
    "payload": {
        "code": "N30122",
        "isActive": true,
        "title": "Urban sports shoes for men – AirFlow model",
        "description": "These shoes combine style and comfort for everyday use. Designed with breathable materials, a non-slip rubber sole, and an ergonomic insole, they are ideal for both city walking and indoor training. The AirFlow model offers a perfect fit and a modern design that adapts to any casual look. Available in various sizes and colors.",
        "attributes": [
            {
                "object": "product_attribute",
                "id": "att_emMDUSQtOUH7Ms",
                "createdAt": "2025-07-02T17:51:50+00:00",
                "updatedAt": null,
                "payload": {
                    "title": "Material",
                    "value": "Leather"
                }
            },
            {
                "object": "product_attribute",
                "id": "att_gXRdrp7X3XMA1l",
                "createdAt": "2025-07-02T17:51:50+00:00",
                "updatedAt": null,
                "payload": {
                    "title": "Color",
                    "value": "black with gray details"
                }
            },
            {
                "object": "product_attribute",
                "id": "att_lIVqsz91O5QzYc",
                "createdAt": "2025-07-02T17:51:50+00:00",
                "updatedAt": null,
                "payload": {
                    "title": "Sole",
                    "value": "non-slip rubber"
                }
            },
            {
                "object": "product_attribute",
                "id": "att_qbOmTRs9pEbOll",
                "createdAt": "2025-07-02T17:51:50+00:00",
                "updatedAt": null,
                "payload": {
                    "title": "Recommended use",
                    "value": "Daily use and light training"
                }
            },
            {
                "object": "product_attribute",
                "id": "att_qN9PKSTG7mhyI5",
                "createdAt": "2025-07-02T17:51:50+00:00",
                "updatedAt": null,
                "payload": {
                    "title": "Available sizes",
                    "value": "39, 40, 41, 42, 43, 44"
                }
            },
            {
                "object": "product_attribute",
                "id": "att_xFON2UUYKQYMLg",
                "createdAt": "2025-07-02T17:51:50+00:00",
                "updatedAt": null,
                "payload": {
                    "title": "Weight",
                    "value": "850g (pair, size 42)"
                }
            }
        ],
        "brand": {
            "object": "product_brand",
            "id": "bra_npTCsTj4PCvziZ",
            "createdAt": "2025-07-02T17:51:50+00:00",
            "updatedAt": null,
            "payload": {
                "code": "OW142302",
                "name": "Nike"
            }
        },
        "category": {
            "object": "product_category",
            "id": "cat_QLEPkCAVbYFELo",
            "createdAt": "2025-07-02T17:51:50+00:00",
            "updatedAt": null,
            "payload": {
                "code": "MC418292",
                "title": "Sports shoes",
                "description": "Footwear designed to offer comfort, support, and performance in physical or sports activities. These shoes also adapt to urban and daily use thanks to their modern designs and versatile materials. They include features like non-slip soles, breathable fabrics, and styles that combine functionality with fashion."
            }
        },
        "price": {
            "amount": "49.95",
            "currency": "EUR"
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
}
```

</TabItem>
</Tabs>
