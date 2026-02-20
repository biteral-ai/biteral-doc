# Entidades

Las entidades representan, por ejemplo, los clientes o productos de vuestro e-commerce dentro de Biteral. No solo contienen los datos originales que habéis proporcionado, sino también información adicional generada por Biteral como el identificador interno de la entidad o la fecha en que se añadió la entidad.

Por ejemplo, cuando obtienes un producto con <Badge variant="sdk php method" text="$client->products()->get()" />, obtienes como resultado un objeto (entidad) de la clase <Badge variant="sdk php entity" text="Product" to="/php-sdk/entities/product" /> que incluye, entre otras cosas el identificador interno del producto en Biteral, la fecha en que se añadió y la fecha en que se modificó por última vez.

:::info
Además, también incluye el <Badge variant="sdk php payload" text="ProductPayload" to="/php-sdk/payloads/product-payload" /> original del objeto, disponible en `$result->payload`
:::

### Ejemplo

```php
// Obtener un producto
$result = $client->products()->getByCode('N39291');

// Muestra el id en Biteral del producto
echo $result->id; // "pro_jK2j391Xxmd34K"

// Muestra el título del producto
echo $result->payload->title; // "Zapatillas deportivas urbanas para hombre – modelo AirFlow"
```
