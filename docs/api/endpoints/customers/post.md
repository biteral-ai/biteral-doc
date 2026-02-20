---
title: Post
sidebar_label: Post
sidebar_position: 1
icon: arrow-right
---
# <Badge variant="api-endpoint" text="/customers" /> <Badge variant="http-post" text="POST" />

Create or update a customer.

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
            <td>Customer code <Badge variant="value-restriction" icon="max-length" text="255" />. For example <Badge variant="value" text="D314K1432" /> </td>
        </tr>

        <tr>
            <td><Badge variant="api parameter" icon="parameter" text="isActive" /></td>
            <td>
                Indicates if the customer is enabled to be used by Biteral's services, such as recommendations, search, or analysis. If this field is not included when sending or updating the customer, it is automatically assumed that the customer is active <Badge variant="value" text="true" />. Setting <Badge variant="api parameter" text="isActive" /> to <Badge variant="value" text="false" /> allows keeping the customer in the system without them participating in any processing or appearing in any results.
            </td>
        </tr>

        <tr>
            <td><Badge variant="api parameter" icon="parameter" text="country" /></td>
            <td>
                Country where the customer is located. It can be the country name in English or native language (for example, <Badge variant="value" text="Spain" />), an [ISO 3166-1 alpha-3](https://en.wikipedia.org/wiki/ISO_3166-1_alpha-3) code (for example, <Badge variant="value" text="ESP" />), an [ISO 3166-1 alpha-2](https://en.wikipedia.org/wiki/ISO_3166-1_alpha-2) code (for example, <Badge variant="value" text="ES" />), an [ISO 3166-1 numeric](https://en.wikipedia.org/wiki/ISO_3166-1_numeric) code (for example, <Badge variant="value" text="724" />) or a [WikiData ID](https://www.wikidata.org/wiki/Wikidata:Identifiers) (for example, <Badge variant="value" text="Q29" />).
            </td>
        </tr>

        <tr>
            <td><Badge variant="api parameter" icon="parameter" text="state" /></td>
            <td>
                State, region, community, or province where the customer is located. It can be the state name in English or native language (for example, <Badge variant="value" text="Barcelona" />), an [ISO 3166-2](https://en.wikipedia.org/wiki/ISO_3166-2) code (for example, <Badge variant="value" text="ES-B" />), a [FIPS 10-4](https://en.wikipedia.org/wiki/FIPS_10-4) code (for example, <Badge variant="value" text="36" />) or a [WikiData ID](https://www.wikidata.org/wiki/Wikidata:Identifiers) (for example, <Badge variant="value" text="Q1492" />).
            </td>
        </tr>

        <tr>
            <td><Badge variant="api parameter" icon="parameter" text="city" /></td>
            <td>
                City or town where the customer is located. It can be the city name in English or native language (for example, <Badge variant="value" text="Antwerp" />) or a [WikiData ID](https://www.wikidata.org/wiki/Wikidata:Identifiers) (for example, <Badge variant="value" text="Q11355" />).
            </td>
        </tr>

        <tr>
            <td><Badge variant="api parameter" icon="parameter" text="yearBorn" /></td>
            <td>Customer's birth year, for example: <Badge variant="value" text="1990" /></td>
        </tr>

        <tr>
            <td><Badge variant="api parameter" icon="parameter" text="gender" /></td>
            <td>Customer's gender, among the possible values: <Badge variant="value" text="0" /> for unknown gender, <Badge variant="value" text="1" /> for male, <Badge variant="value" text="2" /> for female or <Badge variant="value" text="3" /> for other genders.</td>
        </tr>

        <tr>
            <td><Badge variant="api parameter" icon="parameter" text="metadata" /></td>
            <td>
                Additional data that is useful to you when receiving the customer as a result from Biteral's tools. A JSON object <Badge variant="value-restriction" icon="max-length" text="60000" />. For example:

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

### Update a customer

To update a customer's data, make the same <Badge variant="http-post" text="POST" /> request to this endpoint with the new data.

The data you don't specify will keep its previous value. To remove data, pass it as <Badge variant="value" text="null" />.

### Load multiple customers at once

You can load customers one by one, but it is faster to load them in batches. To do this, pass the customers as an array, for example:

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
    },
    {
        "code" : "N4213S4123"
    }
]
```

:::tip
You can load up to 100 customers at once using this method
:::

:::info
When you load many customers to Biteral very quickly, it might take a while until they are all available for Biteral's tools.
:::
