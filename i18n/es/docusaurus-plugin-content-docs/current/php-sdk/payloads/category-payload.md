---
sidebar_position: 5
---
# CategoryPayload

Representa una de las categorías de los productos con los que trabajáis.

:::info
Si trabajáis con una estructura jerárquica con varios niveles de categorías y subcategorías, siempre representa a la subcategoría final a la que pertenece el producto.
:::

Propiedad|Tipo|Descripción
---|---|---
<Badge variant="sdk php property" icon="property" text="code" />|string|Código de la categoría. Puede ser cualquier identificador único que utilicéis internamente o públicamente para identificar la marca. Puede incluir números, letras y caracteres especiales. Por ejemplo: <Badge variant="value" text="JD934828" />
<Badge variant="sdk php property" icon="property" text="title" />|string|Nombre de la categoría, por ejemplo: <Badge variant="value" text="Zapatillas deportivas" />
<Badge variant="sdk php property" icon="property" text="description" />|description|Descripción del tipo de productos que contiene la categoría, por ejemplo: <Badge variant="value" text="Calzado diseñado para actividades físicas y deportivas. Incluye zapatillas para correr, entrenar, practicar deportes específicos o vestir con estilo deportivo en el día a día." />
