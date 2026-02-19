---
sidebar_position: 5
---
# Customer

Representa uno de vuestros clientes en Biteral. Además de los datos que habéis proporcionado sobre el cliente, incluye información propia de Biteral, como el identificador interno del cliente, la fecha en que se añadió o la fecha de la última actualización.

### Propiedades

||
---|---|---
<Badge icon="screen-full" text="id" />|string|Id del cliente en Biteral. Por ejemplo: `cus_hs14jd193K1ndJ`
<Badge icon="screen-full" text="projectId" />|string|Id del proyecto en Biteral al que pertenece el cliente. Por ejemplo: `prj_18vn8R74uvSijf`
<Badge icon="screen-full" text="createdAt" />|DateTimeImmutable|Fecha de creación del cliente.
<Badge icon="screen-full" text="updatedAt" />|DateTimeImmutable|Fecha en la que el cliente se actualizó por última vez.
<Badge icon="screen-full" text="payload" />|<Badge variant="info" text="CustomerPayload" />(/php-sdk/payloads/customer-payload)|Payload de los datos del cliente
