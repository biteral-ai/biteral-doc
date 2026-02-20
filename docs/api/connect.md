---
title: Conectar
sidebar_position: 1
---
# Conectar con la API

La API REST de Biteral es el principal método de conexión de vuestro sistema a Biteral, y es el método recomendado para integraciones de cualquier tamaño flexibles y fiables.

Si utilizas PHP, es muy recomendable utilizar el [SDK de Biteral para PHP](/php-sdk/install), que proporciona un interfaz extremadamente sencillo y fiable para trabajar con la API de Biteral.

### Antes de empezar

1. Crea una cuenta en [Biteral](https://biteral.ai/signup)
1. Obtén vuestra API key de pruebas desde el [dashboard](https://biteral.ai/dashboard)

<details>
<summary>Limitaciones de la API key de pruebas</summary>

La API key de pruebas os permite utilizar Biteral gratuitamente, ideal para realizar pruebas desde vuestro entorno de desarrollo y ver resultados reales sobre cómo funcionaría Biteral con vuestro sistema. Sin embargo, la API key de pruebas tiene algunos límites:

:::warning
***Límite de peticiones por segundo estricto*** Algunos endpoints tienen el máximo de peticiones por segundo limitado, así que es posible que obtengas un código de respuesta `429 Too Many Requests` al utilizar una API key de pruebas y realizar demasiadas peticiones en un breve espacio de tiempo.
:::

:::warning
***Límite máximo de peticiones diarias*** Algunos endpoints sólo pueden recibir cierto número de peticiones por día. Al utilizar una API key de pruebas, si alcanzas este límite obtendrás también un código de respuesta `429 Too Many Requests`
:::
</details>

### Cómo conectar

Realiza peticiones `HTTPS` a **`api.biteral.ai`** incluyendo los siguientes headers:

- <Badge variant="header" text="X-API-Key" /> Vuestra API key
- <Badge variant="header" text="X-API-Version" /> La versión principal de la API que vas a utilizar, por ejemplo: <Badge variant="value" text="1" />

<Tabs>
<TabItem value="curl" label={<Badge icon="terminal" text="Curl" transparent />}>

```shell
curl \
    -G https://api.biteral.ai/status \
    -H 'X-API-Key: ux3HzRTaLGKvZjTb7ufaFUgJPvXbcNX7DWbnWAAUxQjHYqZJ' \
    -H 'X-API-Version: 1'
```

</TabItem>
<TabItem value="php" label={<Badge icon="code" text="SDK PHP" transparent />}>

```php
use Biteral\Client;
$client = new Client('ux3HzRTaLGKvZjTb7ufaFUgJPvXbcNX7DWbnWAAUxQjHYqZJ');
$status = $client->getInfo();
print_r($status);
```

</TabItem>
</Tabs>

### Enviar y recibir datos en la API

Los endpoints <Badge variant="http-post" text="POST" />, <Badge variant="http-put" text="PUT" /> y <Badge variant="http-patch" text="PATCH" /> normalmente aceptan los datos en formato JSON a través del `body` de la petición. Por ejemplo, éste es el cuerpo de una petición <Badge variant="http-post" text="POST" /> al endpoint <Badge variant="api-endpoint" text="/products" to="/api/endpoints/products/post" /> para enviar un producto a Biteral:

```json
{
    "code": "N30123",
    "title": "Zapatillas deportivas urbanas para hombre – modelo AirFlow",
    "description": "Estas zapatillas combinan estilo y comodidad para el uso diario. Diseñadas con materiales transpirables, suela de goma antideslizante y plantilla ergonómica, son ideales tanto para caminar por la ciudad como para entrenar en interiores. El modelo AirFlow ofrece un ajuste perfecto y un diseño moderno que se adapta a cualquier look casual. Disponibles en varias tallas y colores."
}
```

Otros endpoints del tipo <Badge variant="http-get" text="GET" /> o <Badge variant="http-delete" text="DELETE" /> aceptan datos a través de los parámetros en la URL de la petición. Por ejemplo, ésta es la URL para una petición <Badge variant="http-get" text="GET" /> al endpoint <Badge variant="api-endpoint" text="/products" to="/api/endpoints/products/get" /> que obtiene los datos de un producto:

```
https://api.biteral.ai/products?code=B00YUU43VS
```

Todos los endpoints responden siempre en formato JSON, por ejemplo:

```json
{
    "object": "product",
    "id": "pro_Fm3NC30gQHfxIP",
    "createdAt": "2025-07-09T10:21:11+00:00",
    "updatedAt": "2025-07-09T10:42:48+00:00",
    "payload": {
        "code": "N30122",
        "isActive": true,
        "title": "Zapatillas deportivas urbanas para hombre – modelo AirFlow",
        "description": "Estas zapatillas combinan estilo y comodidad para el uso diario. Diseñadas con materiales transpirables, suela de goma antideslizante y plantilla ergonómica, son ideales tanto para caminar por la ciudad como para entrenar en interiores. El modelo AirFlow ofrece un ajuste perfecto y un diseño moderno que se adapta a cualquier look casual. Disponibles en varias tallas y colores.",
        "attributes": null,
        "brand": null,
        "category": null,
        "price": {
            "amount": "49.95",
            "currency": "EUR"
        }
    }
}
```

### Códigos de respuesta

Los códigos HTTP de respuesta indican si la petición se realizó con éxito, o si se produjo algún error:

| Código | Tipo | Descripción |
|-----------------|------|-------------|
| <Badge variant="ok" text="200" /> | OK | La solicitud se completó exitosamente. |
| <Badge variant="ok" text="201" /> | Created | La solicitud se completó y se creó un nuevo recurso. |
| <Badge variant="warning" text="400" /> | Bad Request | La petición se realizó de forma incorrecta, o alguno de los datos incluidos no tenía el formato o la sintaxis correcta. |
| <Badge variant="warning" text="401" /> | Unauthorized | La solicitud requiere autenticación, y no proporcionaste una API Key válida. |
| <Badge variant="warning" text="403" /> | Forbidden | El cliente no tiene permiso para acceder al recurso solicitado. |
| <Badge variant="warning" text="404" /> | Not Found | El recurso solicitado no se encontró. |
| <Badge variant="warning" text="405" /> | Method Not Allowed | El método HTTP utilizado no está permitido para el recurso solicitado. |
| <Badge variant="warning" text="429" /> | Too Many Requests | Realizaste demasiadas solicitudes en un período de tiempo corto. |
| <Badge variant="ko" text="500" /> | Internal Server Error | El servidor encontró un error interno que impidió procesar la solicitud. |
| <Badge variant="ko" text="503" /> | Service Unavailable | El servidor no está disponible temporalmente debido a mantenimiento o sobrecarga. |
