---
title: Productos
sidebar_position: 2
icon: /static/icons/product.svg
---
# Integrar productos

Lo más recomendable es comenzar cargando todos los productos disponibles en vuestro e-commerce para que Biteral pueda empezar a trabajar con ellos, pero primero veamos cómo cargar un único producto:

### Cargar tu primer producto

<Tabs>
<TabItem value="php" label={<Badge icon="code" text="SDK PHP" transparent />}>

Una vez hayas [instalado el SDK](/php-sdk/install), llama a <Badge variant="sdk php method" text="products()->ingest" to="/php-sdk/products/add-products" /> con un objeto <Badge variant="php sdk payload" text="ProductPayload" to="/php-sdk/payloads/product-payload" /> como parámetro.

<Button text="Cargar un producto con PHP" to="/php-sdk/products/add-products" />

</TabItem>
<TabItem value="api" label={<Badge icon="technology/api" text="API" transparent />}>

Una vez hayas aprendido [cómo conectar con la API](/api/connect), haz una petición <Badge variant="http-post" text="POST" /> al endpoint <Badge variant="api-endpoint" text="/products" to="/api/endpoints/products/post" />

<Button text="Cargar un producto con la API" to="/api/endpoints/products/post" />

</TabItem>
</Tabs>

### Cargar muchos productos a la vez

Al cargar todo vuestro catálogo, realizar una petición por cada producto sería muy lento. En su lugar, utiliza el método de carga masiva de productos:

<Button text="Carga masiva con PHP" to="/php-sdk/products/add-products-batch" />
<Button text="Carga masiva con la API" to="/api/endpoints/products/post/#cargar-varios-productos-a-la-vez" />

### Otras operaciones con productos

También puedes realizar otras operaciones con productos, como modificarlos, desactivarlos o eliminarlos:

<Button text="Otras operaciones con productos con PHP" to="/php-sdk/products/update-products" />
<Button text="Otras operaciones con productos con la API" to="/api/endpoints/products/post" />