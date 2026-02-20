---
sidebar_position: 2
---
# Product

Representa uno de vuestros productos en Biteral. Además de los datos que habéis proporcionado sobre el producto, incluye información propia de Biteral, como el identificador interno del producto, la fecha en que se añadió o la fecha de la última actualización.

Propiedad|Tipo|Descripción
---|---|---
<Badge variant="sdk php property" icon="property" text="id" />|string|Id del producto en Biteral. Por ejemplo: <Badge variant="value" text="pro_hs14jd193K1ndJ" />
<Badge variant="sdk php property" icon="property" text="projectId" />|string|Id del proyecto en Biteral al que pertenece el producto. Por ejemplo: <Badge variant="value" text="prj_18vn8R74uvSijf" />
<Badge variant="sdk php property" icon="property" text="createdAt" />|DateTimeImmutable|Fecha de creación del producto.
<Badge variant="sdk php property" icon="property" text="updatedAt" />|DateTimeImmutable|Fecha en la que el producto se actualizó por última vez.
<Badge variant="sdk php property" icon="property" text="payload" />|<Badge variant="sdk php payload" text="ProductPayload" to="/php-sdk/payloads/product-payload" />|Payload de los datos del producto
