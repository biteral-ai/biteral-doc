---
sidebar_position: 5
---
# Customer

Represents one of your customers in Biteral. In addition to the data you provided about the customer, it includes Biteral's own information, such as the customer's internal identifier, the date it was added, or the date of the last update.

Property|Type|Description
---|---|---
<Badge variant="sdk php property" icon="property" text="id" />|string|Customer ID in Biteral. For example: <Badge variant="value" text="cus_hs14jd193K1ndJ" />
<Badge variant="sdk php property" icon="property" text="projectId" />|string|Project ID in Biteral to which the customer belongs. For example: <Badge variant="value" text="prj_18vn8R74uvSijf" />
<Badge variant="sdk php property" icon="property" text="createdAt" />|DateTimeImmutable|Customer creation date.
<Badge variant="sdk php property" icon="property" text="updatedAt" />|DateTimeImmutable|Date when the customer was last updated.
<Badge variant="sdk php property" icon="property" text="payload" />|<Badge variant="sdk php payload" text="CustomerPayload" to="/php-sdk/payloads/customer-payload" />|Payload of the customer data
