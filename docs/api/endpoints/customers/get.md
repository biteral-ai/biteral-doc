---
title: Get
sidebar_label: Get
sidebar_position: 2
icon: arrow-right
---
# <Badge variant="api-endpoint" text="/customers" /> <Badge variant="http-get" text="GET" />

Get a customer.

<Tabs>
<TabItem value="parameters" label={<Badge icon="parameter" text="Parameters" transparent />}>

Specify one of these two parameters to get a customer using their code or their ID in Biteral:

<table>
    <tbody>

        <tr>
            <td><Badge variant="api parameter" icon="parameter" text="code" /></td>
            <td>Customer code, for example <Badge variant="value" text="D314K1432" /></td>
        </tr>

        <tr>
            <td><Badge variant="api parameter" icon="parameter" text="id" /></td>
            <td>Customer identifier in Biteral, for example <Badge variant="value" text="cus_C0fCLwecMysLj9" /></td>
        </tr>

    </tbody>
</table>

</TabItem>
<TabItem value="result" label={<Badge icon="json" text="Result" transparent />}>

```json
{
    "object": "customer",
    "id": "cus_C0fCLwecMysLj9",
    "createdAt": "2025-11-14T18:27:46+00:00",
    "updatedAt": "2025-11-15T09:16:03+00:00",
    "projectId": "prj_18vn8R74uvSijf",
    "payload": {
        "code": "D314K1432",
        "isActive": true,
        "country": "ESP",
        "state": "ES-B",
        "city": "Q11355",
        "yearBorn": 1990,
        "gender": 2,
        "metadata": {
            "currentDiscountRate": "10%",
            "isNew": true
        }
    }
}
```
</TabItem>
</Tabs>
