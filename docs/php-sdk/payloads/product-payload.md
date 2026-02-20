---
sidebar_position: 2
---
# ProductPayload

Representa uno de vuestros productos, con únicamente los datos que proporcionaste al añadirlo a Biteral.

Propiedad|Tipo|Descripción
---|---|---
<Badge variant="sdk php property" icon="property" text="isActive" />|bool|Indica si este producto está activo en las herramientas de Biteral.
<Badge variant="sdk php property" icon="property" text="code" />|string|Código del producto. Puede ser cualquier identificador único que utilicéis internamente o públicamente para identificar vuestro producto. Puede utilizarse un SKU, un código EAN, o un código arbitrario de cualquier tipo, incluyendo números, letras u otros caracteres. El único requisito es que debe corresponder específicamente sólo a un producto de vuestro catálogo. Por ejemplo: <Badge variant="value" text="N841812" />
<Badge variant="sdk php property" icon="property" text="title" />|string|Título del producto
<Badge variant="sdk php property" icon="property" text="description" />|string|Descripción del producto
<Badge variant="sdk php property" icon="property" text="attributes" />|<Badge variant="sdk php payload" text="array<ProductAttributePayload>" to="/php-sdk/payloads/product-attribute-payload" />|Atributos del producto
<Badge variant="sdk php property" icon="property" text="brand" />|<Badge variant="sdk php payload" text="BrandPayload" to="/php-sdk/payloads/brand-payload" />|Marca del producto
<Badge variant="sdk php property" icon="property" text="category" />|<Badge variant="sdk php payload" text="CategoryPayload" to="/php-sdk/payloads/category-payload" />|Categoría del producto
<Badge variant="sdk php property" icon="property" text="price" />|<Badge variant="sdk php payload" text="PricePayload" to="/php-sdk/payloads/price-payload" />|Precio del producto
<Badge variant="sdk php property" icon="property" text="imageUrl" />|string|La URL de la imagen del producto, preferiblemente una imagen de aproximadamente 600 píxeles de ancho.
<Badge variant="sdk php property" icon="property" text="url" />|string|La URL pública del producto.
<Badge variant="sdk php property" icon="property" text="metadata" />|string|Datos adicionales que te resulten útiles cuando recibas el producto como resultado de las herramientas de Biteral en forma de una cadena JSON.
