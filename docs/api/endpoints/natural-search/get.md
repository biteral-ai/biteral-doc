---
title: Get
sidebar_label: Get
sidebar_position: 1
icon: arrow-right
---
# <Badge variant="api-endpoint" text="/natural-search" /> <Badge variant="http-get" text="GET" />

Get a list of products that match a natural language search query.

<Tabs>
<TabItem value="parameters" label={<Badge icon="parameter" text="Parameters" transparent />}>

<table>
    <tbody>

        <tr>
            <td><Badge variant="api parameter required" icon="required" text="query" /></td>
            <td>The string typed by the user to find products in natural language, for example <Badge variant="value" text="A gift for a cooking enthusiast" /></td>
        </tr>

        <tr>
            <td><Badge variant="api parameter" icon="parameter" text="limit" /></td>
            <td>Limits the maximum number of products to return, for example <Badge variant="value" text="5" />. By default, a maximum of <Badge variant="value" text="10" /> products are returned.</td>
        </tr>

    </tbody>
</table>

</TabItem>
<TabItem value="result" label={<Badge icon="json" text="Result" transparent />}>

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
        "isActive": true,
        "payload": {
            "code": "FNN1848",
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
        "isActive": true,
        "payload": {
            "code": "SJD2818",
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
