---
title: Post
sidebar_label: Post
sidebar_position: 1
icon: arrow-right
---
# <Badge variant="api-endpoint" text="/customers" /> <Badge variant="http-post" text="POST" />

Crear o modificar un cliente.

<Tabs>
<TabItem value="result" label={<Badge icon="json" text="JSON request body" transparent />}>

```json
{
    "code": "D314K1432",
    "country": "ES",
    "state": "Barcelona",
    "city": "Q11355",
    "yearBorn": 1990,
    "gender": 2,
    "metadata": {
        "currentDiscountRate": "10%",
        "isNew": true
    }
}
```

</TabItem>
<TabItem value="documentation" label={<Badge icon="parameter" text="Documentation" transparent />}>

<table>
    <tbody>

        <tr>
            <td><Badge variant="api parameter required" icon="required" text="code" /></td>
            <td>Código de cliente <Badge variant="value-restriction" icon="max-length" text="255" />. Por ejemplo <Badge variant="value" text="D314K1432" /> </td>
        </tr>

        <tr>
            <td><Badge variant="api parameter" icon="parameter" text="isActive" /></td>
            <td>
                Indica si el cliente está habilitado para ser utilizado por los servicios de Biteral, como recomendaciones, búsqueda o análisis. Si no se incluye este campo al enviar o actualizar el cliente, se asume automáticamente que el cliente está activo <Badge variant="value" text="true" />. Poner <Badge variant="api parameter" text="isActive" /> a <Badge variant="value" text="false" /> permite mantener el cliente en el sistema sin que participe en ningún procesamiento o aparezca en ningún resultado.
            </td>
        </tr>

        <tr>
            <td><Badge variant="api parameter" icon="parameter" text="country" /></td>
            <td>
                País donde el cliente se ubica. Puede ser el nombre del país en inglés o en lengua nativa (por ejemplo, <Badge variant="value" text="España" />), un código [ISO 3166-1 alpha-3](https://en.wikipedia.org/wiki/ISO_3166-1_alpha-3) (por ejemplo, <Badge variant="value" text="ESP" />), un código [ISO 3166-1 alpha-2](https://en.wikipedia.org/wiki/ISO_3166-1_alpha-2) (por ejemplo, <Badge variant="value" text="ES" />), un código [ISO 3166-1 numeric](https://en.wikipedia.org/wiki/ISO_3166-1_numeric) (por ejemplo, <Badge variant="value" text="724" />) o un [WikiData ID](https://www.wikidata.org/wiki/Wikidata:Identifiers) (por ejemplo, <Badge variant="value" text="Q29" />)
            </td>
        </tr>

        <tr>
            <td><Badge variant="api parameter" icon="parameter" text="state" /></td>
            <td>
                Estado, región, comunidad o provincia donde el cliente se ubica. Puede ser el nombre del estado, región, comunidad o provincia en inglés o en lengua nativa (por ejemplo, <Badge variant="value" text="Barcelona" />), un código [ISO 3166-2](https://en.wikipedia.org/wiki/ISO_3166-2) (por ejemplo, <Badge variant="value" text="ES-B" />), un código [FIPS 10-4](https://en.wikipedia.org/wiki/FIPS_10-4) (por ejemplo, <Badge variant="value" text="36" />) o un [WikiData ID](https://www.wikidata.org/wiki/Wikidata:Identifiers) (por ejemplo, <Badge variant="value" text="Q1492" />)
            </td>
        </tr>

        <tr>
            <td><Badge variant="api parameter" icon="parameter" text="city" /></td>
            <td>
                Ciudad o localidad donde el cliente se ubica. Puede ser el nombre de la ciudad o localidad en inglés o en lengua nativa (por ejemplo, <Badge variant="value" text="Antwerp" />) o un [WikiData ID](https://www.wikidata.org/wiki/Wikidata:Identifiers) (por ejemplo, <Badge variant="value" text="Q11355" />)
            </td>
        </tr>

        <tr>
            <td><Badge variant="api parameter" icon="parameter" text="yearBorn" /></td>
            <td>Año de nacimiento del cliente, por ejemplo: <Badge variant="value" text="1990" /></td>
        </tr>

        <tr>
            <td><Badge variant="api parameter" icon="parameter" text="gender" /></td>
            <td>El género del cliente, de entre los posibles valores: <Badge variant="value" text="0" /> para género desconocido, <Badge variant="value" text="1" /> para masculino, <Badge variant="value" text="2" /> para femenino o <Badge variant="value" text="3" /> para otros géneros.</td>
        </tr>

        <tr>
            <td><Badge variant="api parameter" icon="parameter" text="metadata" /></td>
            <td>
                Datos adicionales que te resulten útiles cuando recibas el cliente como resultado de las herramientas de Biteral. Un objeto JSON <Badge variant="value-restriction" icon="max-length" text="60000" />. Por ejemplo:

                ```json
                {
                    "currentDiscountRate": "10%",
                    "isNew": true
                }
                ```
            </td>
        </tr>

    </tbody>
</table>

</TabItem>
</Tabs>

### Actualizar un cliente

Para actualizar los datos sobre un cliente, realiza la misma petición <Badge variant="http-post" text="POST" /> a este endpoint con los nuevos datos.

Los datos que no especifiques mantendrán su valor anterior. Para eliminar un dato, pásalo como <Badge variant="value" text="null" />

### Cargar varios clientes a la vez

Puedes cargar los clientes uno a uno, pero es más rápido cargarlos en bloques. Para hacerlo, pasa los clientes en forma de un array, por ejemplo:

```json
[
    {
        "code": "D314K1432",
        "country": "ES",
        "state": "Barcelona",
        "city": "Q11355",
        "yearBorn": 1990,
        "gender": 2,
        "metadata": {
            "currentDiscountRate": "10%",
            "isNew": true
        }
    }
    {
        "code" : "N4213S4123"
        ...
    },
    ...
]
```

:::tip
Puedes cargar hasta 100 clientes a la vez utilizando este método
:::

:::info
Cuando cargas muchos clientes a Biteral muy rápidamente, puede pasar un rato hasta que todos están disponibles para las herramientas de Biteral.
:::
