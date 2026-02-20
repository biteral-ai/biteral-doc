---
title: Connect
sidebar_position: 1
---
# Connect to the API

The Biteral REST API is the primary method to connect your system to Biteral, and it is the recommended method for flexible and reliable integrations of any size.

If you use PHP, we highly recommend using the [Biteral PHP SDK](/php-sdk/install), which provides an extremely simple and reliable interface to work with the Biteral API.

### Before you begin

1. Create a [Biteral](https://biteral.ai/signup) account
1. Get your test API key from the [dashboard](https://biteral.ai/dashboard)

<details>
<summary>Test API key limitations</summary>

The test API key allows you to use Biteral for free, ideal for testing from your development environment and seeing real results on how Biteral would work with your system. However, it has some limits:

:::warning
***Strict requests per second limit***

Some endpoints have a strict maximum requests per second limit, so you might get a `429 Too Many Requests` response code when using a test API key and making too many requests in a short amount of time.
:::

:::warning
***Maximum daily requests limit***

Some endpoints can only receive a certain number of requests per day. When using a test API key, if you reach this limit, you will get a `429 Too Many Requests` response code.
:::
</details>

### How to connect

Make `HTTPS` requests to **`api.biteral.ai`** including the following headers:

- <Badge variant="header" text="X-API-Key" /> Your API key
- <Badge variant="header" text="X-API-Version" /> The major API version you are going to use, for example: <Badge variant="value" text="1" />

<Tabs>
<TabItem value="curl" label={<Badge icon="terminal" text="Curl" transparent />}>

```shell
curl \
    -G https://api.biteral.ai/status \
    -H 'X-API-Key: ux3HzRTaLGKvZjTb7ufaFUgJPvXbcNX7DWbnWAAUxQjHYqZJ' \
    -H 'X-API-Version: 1'
```

</TabItem>
<TabItem value="php" label={<Badge icon="code" text="PHP SDK" transparent />}>

```php
use Biteral\Client;
$client = new Client('ux3HzRTaLGKvZjTb7ufaFUgJPvXbcNX7DWbnWAAUxQjHYqZJ');
$status = $client->getInfo();
print_r($status);
```

</TabItem>
</Tabs>

### Send and receive data in the API

The <Badge variant="http-post" text="POST" />, <Badge variant="http-put" text="PUT" /> and <Badge variant="http-patch" text="PATCH" /> endpoints normally accept data in JSON format through the request `body`. For example, this is the body of a <Badge variant="http-post" text="POST" /> request to the <Badge variant="api-endpoint" text="/products" to="/api/endpoints/products/post" /> endpoint to send a product to Biteral:

```json
{
    "code": "N30123",
    "title": "Urban sports shoes for men – AirFlow model",
    "description": "These shoes combine style and comfort for everyday use. Designed with breathable materials, a non-slip rubber sole, and an ergonomic insole, they are ideal for both city walking and indoor training. The AirFlow model offers a perfect fit and a modern design that adapts to any casual look. Available in various sizes and colors."
}
```

Other endpoints like <Badge variant="http-get" text="GET" /> or <Badge variant="http-delete" text="DELETE" /> accept data through parameters in the request URL. For example, this is the URL for a <Badge variant="http-get" text="GET" /> request to the <Badge variant="api-endpoint" text="/products" to="/api/endpoints/products/get" /> endpoint that retrieves product data:

```
https://api.biteral.ai/products?code=B00YUU43VS
```

All endpoints always respond in JSON format, for example:

```json
{
    "object": "product",
    "id": "pro_Fm3NC30gQHfxIP",
    "createdAt": "2025-07-09T10:21:11+00:00",
    "updatedAt": "2025-07-09T10:42:48+00:00",
    "payload": {
        "code": "N30122",
        "isActive": true,
        "title": "Urban sports shoes for men – AirFlow model",
        "description": "These shoes combine style and comfort for everyday use. Designed with breathable materials, a non-slip rubber sole, and an ergonomic insole, they are ideal for both city walking and indoor training. The AirFlow model offers a perfect fit and a modern design that adapts to any casual look. Available in various sizes and colors.",
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

### Response codes

The HTTP response codes indicate whether the request was successful, or if an error occurred:

| Code | Type | Description |
|-----------------|------|-------------|
| <Badge variant="ok" text="200" /> | OK | The request completed successfully. |
| <Badge variant="ok" text="201" /> | Created | The request completed and a new resource was created. |
| <Badge variant="warning" text="400" /> | Bad Request | The request was malformed, or some of the included data had incorrect format or syntax. |
| <Badge variant="warning" text="401" /> | Unauthorized | The request requires authentication, and you didn't provide a valid API Key. |
| <Badge variant="warning" text="403" /> | Forbidden | The client does not have permission to access the requested resource. |
| <Badge variant="warning" text="404" /> | Not Found | The requested resource was not found. |
| <Badge variant="warning" text="405" /> | Method Not Allowed | The HTTP method used is not allowed for the requested resource. |
| <Badge variant="warning" text="429" /> | Too Many Requests | You made too many requests in a short period of time. |
| <Badge variant="ko" text="500" /> | Internal Server Error | The server encountered an internal error that prevented processing the request. |
| <Badge variant="ko" text="503" /> | Service Unavailable | The server is temporarily unavailable due to maintenance or overload. |
