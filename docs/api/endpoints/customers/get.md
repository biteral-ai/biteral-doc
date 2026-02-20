---
title: Get
sidebar_label: Get
sidebar_position: 2
icon: arrow-right
---
# <Badge variant="api-endpoint" text="/customers" /> <Badge variant="http-get" text="GET" />

Obtener un cliente.

<Tabs>
<TabItem value="parameters" label={<Badge icon="parameter" text="Parámetros" transparent />}>

Especifica uno de estos dos parámetros para obtener un cliente a través de su código o de su Id en Biteral:

<table>
    <tbody>

        <tr>
            <td><Badge variant="api parameter" icon="parameter" text="code" /></td>
            <td>Código de cliente, por ejemplo <Badge variant="value" text="D314K1432" /></td>
        </tr>

        <tr>
            <td><Badge variant="api parameter" icon="parameter" text="id" /></td>
            <td>Identificador del cliente en Biteral, por ejemplo <Badge variant="value" text="cus_C0fCLwecMysLj9" /></td>
        </tr>

    </tbody>
</table>

</TabItem>
<TabItem value="result" label={<Badge icon="json" text="Resultado" transparent />}>

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
