---
title: Clientes
sidebar_position: 3
icon: /static/icons/customer.svg
---
# Integrar clientes

Biteral utiliza información sobre vuestros clientes para para alimentar herramientas como las recomendaciones personalizadas. Los datos de vuestros clientes siempre se envían anonimizados, de forma que no existe un vínculo directo entre la información que envías y el cliente final.

### Cargar un cliente

<Tabs>
<TabItem value="php" label={<Badge icon="code" text="SDK PHP" transparent />}>

Llama a <Badge variant="info" text="customers()->ingest" to="/php-sdk/customers/add-customers" /> con un objeto <Badge variant="info" text="CustomerPayload" to="/php-sdk/payloads/customer-payload" /> como parámetro.

<Button text="Cargar un cliente con PHP" to="/php-sdk/customers/add-customers" />

</TabItem>
<TabItem value="api" label={<Badge icon="technology/api" text="API" transparent />}>

Haz una petición <Badge variant="success" text="POST" /> al endpoint <Badge>/customers</Badge>(/api/endpoints/customers/post)

<Button text="Cargar un cliente con la API" to="/api/endpoints/customers/post" />

</TabItem>
</Tabs>

### Cargar muchos clientes a la vez

Igual que cuando cargas muchos productos a la vez, puedes cargar varios clientes de forma eficiente utilizando el método de carga masiva de clientes:

<Button text="Carga masiva con PHP" to="/php-sdk/customers/add-customers-batch" />
<Button text="Carga masiva con la API" to="/api/endpoints/customers/post/#cargar-varios-clientes-a-la-vez" />

### Otras operaciones con clientes

También puedes realizar otras operaciones con clientes, como modificarlos, desactivarlos o eliminarlos:

<Button text="Otras operaciones con clientes con PHP" to="/php-sdk/customers/update-customers" />
<Button text="Otras operaciones con clientes con la API" to="/api/endpoints/customers/post" />
