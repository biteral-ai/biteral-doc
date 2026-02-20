---
sidebar_position: 5
---
# Customer

Representa uno de vuestros clientes en Biteral. Además de los datos que habéis proporcionado sobre el cliente, incluye información propia de Biteral, como el identificador interno del cliente, la fecha en que se añadió o la fecha de la última actualización.

Propiedad|Tipo|Descripción
---|---|---
<Badge variant="sdk php property" icon="property" text="id" />|string|Id del cliente en Biteral. Por ejemplo: <Badge variant="value" text="cus_hs14jd193K1ndJ" />
<Badge variant="sdk php property" icon="property" text="projectId" />|string|Id del proyecto en Biteral al que pertenece el cliente. Por ejemplo: <Badge variant="value" text="prj_18vn8R74uvSijf" />
<Badge variant="sdk php property" icon="property" text="createdAt" />|DateTimeImmutable|Fecha de creación del cliente.
<Badge variant="sdk php property" icon="property" text="updatedAt" />|DateTimeImmutable|Fecha en la que el cliente se actualizó por última vez.
<Badge variant="sdk php property" icon="property" text="payload" />|<Badge variant="sdk php payload" text="CustomerPayload" to="/php-sdk/payloads/customer-payload" />|Payload de los datos del cliente
