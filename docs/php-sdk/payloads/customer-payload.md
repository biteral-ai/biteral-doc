---
sidebar_position: 7
---
# CustomerPayload

Represents one of your customers, with only the data you provided when adding it to Biteral.

Property|Type|Description
---|---|---
<Badge variant="sdk php property" icon="property" text="isActive" />|bool|Indicates if this customer is active in Biteral's tools.
<Badge variant="sdk php property" icon="property" text="code" />|string|Customer code. It can be any unique identifier you use internally or publicly to identify your customer. An arbitrary code of any type can be used, including numbers, letters, or other characters. The only requirement is that it must correspond specifically to only one of your customers. For example: <Badge variant="value" text="D314K1432" />
<Badge variant="sdk php property" icon="property" text="country" />|string|Country where the customer is located, an [ISO 3166-1 alpha-3](https://en.wikipedia.org/wiki/ISO_3166-1_alpha-3) code (for example, <Badge variant="value" text="ESP" />). When sending data, it also accepts the country name in English or native language (for example, <Badge variant="value" text="Spain" />), [ISO 3166-1 alpha-2](https://en.wikipedia.org/wiki/ISO_3166-1_alpha-2) codes (for example, <Badge variant="value" text="ES" />), [ISO 3166-1 numeric](https://en.wikipedia.org/wiki/ISO_3166-1_numeric) (for example, <Badge variant="value" text="724" />), and [WikiData ID](https://www.wikidata.org/wiki/Wikidata:Identifiers) (for example, <Badge variant="value" text="Q29" />)
<Badge variant="sdk php property" icon="property" text="state" />|string|State, region, community, or province where the customer is located, an [ISO 3166-2](https://en.wikipedia.org/wiki/ISO_3166-2) code (for example, <Badge variant="value" text="ES-B" />). When sending data, it also accepts the name of the state, region, community, or province in English or native language (for example, <Badge variant="value" text="Barcelona" />), [FIPS 10-4](https://en.wikipedia.org/wiki/FIPS_10-4) codes (for example, <Badge variant="value" text="36" />), and [WikiData ID](https://www.wikidata.org/wiki/Wikidata:Identifiers) (for example, <Badge variant="value" text="Q1492" />)
<Badge variant="sdk php property" icon="property" text="city" />|string|City or town where the customer is located, a [WikiData ID](https://www.wikidata.org/wiki/Wikidata:Identifiers) (for example, <Badge variant="value" text="Q11355" />). When sending data, it also accepts the city name in English or native language (for example, <Badge variant="value" text="Antwerp" />)
<Badge variant="sdk php property" icon="property" text="yearBorn" />|int|The customer's birth year. For example: <Badge variant="value" text="1990" />
<Badge variant="sdk php property" icon="property" text="gender" />|int|The customer's gender, among the possible values: <Badge variant="value" text="0" /> for unknown gender, <Badge variant="value" text="1" /> for male, <Badge variant="value" text="2" /> for female, or <Badge variant="value" text="3" /> for other genders
<Badge variant="sdk php property" icon="property" text="metadata" />|string|Additional data that is useful to you when you receive the customer as a result of Biteral's tools in the form of a JSON string.
