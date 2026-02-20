---
title: Customers
sidebar_position: 3
icon: /static/icons/customer.svg
---
# Integrate customers

Biteral uses information about your customers to power tools like personalized recommendations. Your customer data is always sent anonymized, so there is no direct link between the information you send and the final customer.

### Load a customer

<Tabs>
<TabItem value="php" label={<Badge icon="code" text="PHP SDK" transparent />}>

Call <Badge variant="sdk php method" text="customers()->ingest" to="/php-sdk/customers/add-customers" /> with a <Badge variant="sdk php payload" text="CustomerPayload" to="/php-sdk/payloads/customer-payload" /> object as parameter.

<Button text="Load a customer with PHP" to="/php-sdk/customers/add-customers" />

</TabItem>
<TabItem value="api" label={<Badge icon="technology/api" text="API" transparent />}>

Make a <Badge variant="http-post" text="POST" /> request to the <Badge variant="api-endpoint" text="/customers" to="/api/endpoints/customers/post" /> endpoint.

<Button text="Load a customer with the API" to="/api/endpoints/customers/post" />

</TabItem>
</Tabs>

### Load multiple customers at once

Just like when you load multiple products at once, you can load multiple customers efficiently using the bulk customer load method:

<Button text="Bulk load with PHP" to="/php-sdk/customers/add-customers-batch" />
<Button text="Bulk load with the API" to="/api/endpoints/customers/post/#load-multiple-customers-at-once" />

### Other customer operations

You can also perform other operations with customers, like updating, deactivating or deleting them:

<Button text="Other customer operations with PHP" to="/php-sdk/customers/update-customers" />
<Button text="Other customer operations with the API" to="/api/endpoints/customers/post" />
