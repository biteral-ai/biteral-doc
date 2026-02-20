---
sidebar_position: 2
---
# ProductPayload

Represents one of your products, with only the data you provided when adding it to Biteral.

Property|Type|Description
---|---|---
<Badge variant="sdk php property" icon="property" text="isActive" />|bool|Indicates if this product is active in Biteral's tools.
<Badge variant="sdk php property" icon="property" text="code" />|string|Product code. It can be any unique identifier you use internally or publicly to identify your product. An SKU, an EAN code, or an arbitrary code of any type can be used, including numbers, letters, or other characters. The only requirement is that it must correspond specifically to only one product in your catalog. For example: <Badge variant="value" text="N841812" />
<Badge variant="sdk php property" icon="property" text="title" />|string|Product title
<Badge variant="sdk php property" icon="property" text="description" />|string|Product description
<Badge variant="sdk php property" icon="property" text="attributes" />|<Badge variant="sdk php payload" text="array<ProductAttributePayload>" to="/php-sdk/payloads/product-attribute-payload" />|Product attributes
<Badge variant="sdk php property" icon="property" text="brand" />|<Badge variant="sdk php payload" text="BrandPayload" to="/php-sdk/payloads/brand-payload" />|Product brand
<Badge variant="sdk php property" icon="property" text="category" />|<Badge variant="sdk php payload" text="CategoryPayload" to="/php-sdk/payloads/category-payload" />|Product category
<Badge variant="sdk php property" icon="property" text="price" />|<Badge variant="sdk php payload" text="PricePayload" to="/php-sdk/payloads/price-payload" />|Product price
<Badge variant="sdk php property" icon="property" text="imageUrl" />|string|The product image URL, preferably an image of approximately 600 pixels wide.
<Badge variant="sdk php property" icon="property" text="url" />|string|The public product URL.
<Badge variant="sdk php property" icon="property" text="metadata" />|string|Additional data that is useful to you when you receive the product as a result of Biteral's tools in the form of a JSON string.
