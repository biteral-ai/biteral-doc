---
sidebar_position: 2
---
# Product

Represents one of your products in Biteral. In addition to the data you provided about the product, it includes Biteral's own information, such as the product's internal identifier, the date it was added, or the date of the last update.

Property|Type|Description
---|---|---
<Badge variant="sdk php property" icon="property" text="id" />|string|Product ID in Biteral. For example: <Badge variant="value" text="pro_hs14jd193K1ndJ" />
<Badge variant="sdk php property" icon="property" text="projectId" />|string|Project ID in Biteral to which the product belongs. For example: <Badge variant="value" text="prj_18vn8R74uvSijf" />
<Badge variant="sdk php property" icon="property" text="createdAt" />|DateTimeImmutable|Product creation date.
<Badge variant="sdk php property" icon="property" text="updatedAt" />|DateTimeImmutable|Date when the product was last updated.
<Badge variant="sdk php property" icon="property" text="payload" />|<Badge variant="sdk php payload" text="ProductPayload" to="/php-sdk/payloads/product-payload" />|Payload of the product data
