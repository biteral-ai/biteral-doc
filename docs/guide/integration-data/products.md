---
title: Productos
sidebar_position: 2
icon: /static/icons/product.svg
---
# Integrar productos

Lo más recomendable es comenzar cargando todos los productos disponibles en vuestro e-commerce para que Biteral pueda empezar a trabajar con ellos, pero primero veamos cómo cargar un único producto:

### Cargar tu primer producto

<Tabs>
<TabItem value=":icon-file-code: **Con PHP**" label=":icon-file-code: **Con PHP**">

Una vez hayas [instalado el SDK](/php-sdk/install), llama a <Badge variant="info" text="products()->ingest" />(/php-sdk/products/add-products) con un objeto <Badge variant="info" text="ProductPayload" />(/php-sdk/payloads/product-payload) como parámetro.

[!ref icon="arrow-right" text="Cargar un producto con PHP"](/php-sdk/products/add-products)

</TabItem>
<TabItem value="** Con la API**" label="** Con la API**">

Una vez hayas aprendido [cómo conectar con la API](/api/connect), haz una petición <Badge variant="success" text="POST" /> al endpoint <Badge>/products</Badge>(/api/endpoints/products/post)

[!ref icon="arrow-right" text="Cargar un producto con la API"](/api/endpoints/products/post)
</TabItem>
</Tabs>

### Cargar muchos productos a la vez

Al cargar todo vuestro catálogo, realizar una petición por cada producto sería muy lento. En su lugar, utiliza el método de carga masiva de productos:

[!ref icon="arrow-right" text="Carga masiva con PHP"](/php-sdk/products/add-products-batch)
[!ref icon="arrow-right" text="Carga masiva con la API"](/api/endpoints/products/post/#cargar-varios-productos-a-la-vez)

### Otras operaciones con productos

También puedes realizar otras operaciones con productos, como modificarlos, desactivarlos o eliminarlos:

[!ref icon="arrow-right" text="Otras operaciones con productos con PHP"](/php-sdk/products/update-products)
[!ref icon="arrow-right" text="Otras operaciones con productos con la API"](/api/endpoints/products/post)