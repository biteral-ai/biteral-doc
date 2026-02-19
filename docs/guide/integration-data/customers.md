---
title: Clientes
sidebar_position: 3
icon: /static/icons/customer.svg
---
# Integrar clientes

Biteral utiliza información sobre vuestros clientes para para alimentar herramientas como las recomendaciones personalizadas. Los datos de vuestros clientes siempre se envían anonimizados, de forma que no existe un vínculo directo entre la información que envías y el cliente final.

### Cargar un cliente

<Tabs>
<TabItem value=":icon-file-code: **Con PHP**" label=":icon-file-code: **Con PHP**">

Llama a <Badge variant="info" text="customers()->ingest" />(/php-sdk/customers/add-customers) con un objeto <Badge variant="info" text="CustomerPayload" />(/php-sdk/payloads/customer-payload) como parámetro.

[!ref icon="arrow-right" text="Cargar un cliente con PHP"](/php-sdk/customers/add-customers)

</TabItem>
<TabItem value="**Con la API**" label="**Con la API**">

Haz una petición <Badge variant="success" text="POST" /> al endpoint <Badge>/customers</Badge>(/api/endpoints/customers/post)

[!ref icon="arrow-right" text="Cargar un cliente con la API"](/api/endpoints/customers/post)

</TabItem>
</Tabs>

### Cargar muchos clientes a la vez

Igual que cuando cargas muchos productos a la vez, puedes cargar varios clientes de forma eficiente utilizando el método de carga masiva de clientes:

[!ref icon="arrow-right" text="Carga masiva con PHP"](/php-sdk/customers/add-customers-batch)
[!ref icon="arrow-right" text="Carga masiva con la API"](/api/endpoints/customers/post/#cargar-varios-clientes-a-la-vez)

### Otras operaciones con clientes

También puedes realizar otras operaciones con clientes, como modificarlos, desactivarlos o eliminarlos:

[!ref icon="arrow-right" text="Otras operaciones con clientes con PHP"](/php-sdk/customers/update-customers)
[!ref icon="arrow-right" text="Otras operaciones con clientes con la API"](/api/endpoints/customers/post)
