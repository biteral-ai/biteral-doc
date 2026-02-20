---
sidebar_position: 7
---
# CustomerPayload

Representa uno de vuestros clientes, con únicamente los datos que proporcionaste al añadirlo a Biteral.

Propiedad|Tipo|Descripción
---|---|---
<Badge variant="sdk php property" icon="property" text="isActive" />|bool|Indica si este cliente está activo en las herramientas de Biteral.
<Badge variant="sdk php property" icon="property" text="code" />|string|Código del cliente. Puede ser cualquier identificador único que utilicéis internamente o públicamente para identificar vuestro cliente. Puede utilizarse un código arbitrario de cualquier tipo, incluyendo números, letras u otros caracteres. El único requisito es que debe corresponder específicamente sólo a uno de vuestros clientes. Por ejemplo: <Badge variant="value" text="D314K1432" />
<Badge variant="sdk php property" icon="property" text="country" />|string|País donde el cliente se ubica, un código [ISO 3166-1 alpha-3](https://en.wikipedia.org/wiki/ISO_3166-1_alpha-3) (por ejemplo, <Badge variant="value" text="ESP" />). Cuando se envían datos, también acepta el nombre del país en inglés o en lengua nativa (por ejemplo, <Badge variant="value" text="España" />), códigos [ISO 3166-1 alpha-2](https://en.wikipedia.org/wiki/ISO_3166-1_alpha-2) (por ejemplo, <Badge variant="value" text="ES" />), [ISO 3166-1 numeric](https://en.wikipedia.org/wiki/ISO_3166-1_numeric) (por ejemplo, <Badge variant="value" text="724" />) y [WikiData ID](https://www.wikidata.org/wiki/Wikidata:Identifiers) (por ejemplo, <Badge variant="value" text="Q29" />)
<Badge variant="sdk php property" icon="property" text="state" />|string|Estado, región, comunidad o provincia donde el cliente se ubica, un código [ISO 3166-2](https://en.wikipedia.org/wiki/ISO_3166-2) (por ejemplo, <Badge variant="value" text="ES-B" />). Cuando se envían datos, también acepta el nombre del estado, región, comunidad o provincia en inglés o en lengua nativa (por ejemplo, <Badge variant="value" text="Barcelona" />), códigos [FIPS 10-4](https://en.wikipedia.org/wiki/FIPS_10-4) (por ejemplo, <Badge variant="value" text="36" />) y [WikiData ID](https://www.wikidata.org/wiki/Wikidata:Identifiers) (por ejemplo, <Badge variant="value" text="Q1492" />)
<Badge variant="sdk php property" icon="property" text="city" />|string|Ciudad o localidad donde el cliente se ubica, un [WikiData ID](https://www.wikidata.org/wiki/Wikidata:Identifiers) (por ejemplo, <Badge variant="value" text="Q11355" />). Cuando se envían datos, también acepta el nombre de la ciudad en inglés o en lengua nativa (por ejemplo, <Badge variant="value" text="Antwerp" />)
<Badge variant="sdk php property" icon="property" text="yearBorn" />|int|Año de nacimiento del cliente. Por ejemplo: <Badge variant="value" text="1990" />
<Badge variant="sdk php property" icon="property" text="gender" />|int|El género del cliente, de entre los posibles valores: <Badge variant="value" text="0" /> para género desconocido, <Badge variant="value" text="1" /> para masculino, <Badge variant="value" text="2" /> para femenino o <Badge variant="value" text="3" /> para otros géneros
<Badge variant="sdk php property" icon="property" text="metadata" />|string|Datos adicionales que te resulten útiles cuando recibas el cliente como resultado de las herramientas de Biteral en forma de una cadena JSON.
