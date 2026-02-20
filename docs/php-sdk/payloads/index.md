# Payloads

Los Payloads son los objetos que utilizas para proporcionar datos a Biteral sobre vuestro e-commerce.

Por ejemplo, cuando [añades un producto a Biteral](/php-sdk/products/add-products) con <Badge variant="sdk php method" text="$client->products()->post()" />, debes proporcionar como parámetro un objeto de la clase <Badge variant="sdk php payload" text="ProductPayload" to="/php-sdk/payloads/product-payload" />

Además, muchos métodos del SDK devuelven datos en forma de [entidades](/php-sdk/entities), que son objetos que a su vez contienen Payloads de uno de estos tipos. Por ejemplo, cuando obtienes un producto con <Badge variant="sdk php method" text="$client->products()->get()" />, obtienes como resultado un objeto (entidad) de la clase <Badge variant="sdk php entity" text="Product" to="/php-sdk/entities/product" /> que incluye, entre otras cosas, el Payload original del objeto, disponible en <Badge variant="sdk php property" text="$result->payload" />

### Ejemplo

```php
// Añadir un producto
$client->products()->post(
    new ProductPayload(
        code: 'N39291',
        title: 'Zapatillas deportivas urbanas para hombre – modelo AirFlow'
    )
);

// Obtener el producto que acabas de añadir
$result = $client->products()->getByCode('N39291');

// Muestra el título del producto
echo $result->payload->title; // "Zapatillas deportivas urbanas para hombre – modelo AirFlow"
```
