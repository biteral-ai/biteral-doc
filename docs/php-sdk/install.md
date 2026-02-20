---
title: Instalación
sidebar_position: 1
icon: arrow-right
---
# Instalar el SDK para PHP

El SDK de Biteral PHP es un package para composer que te permite integrar con facilidad Biteral en proyectos PHP versión 5.6 y superiores.

<Button variant="primary" text="SDK de Biteral en GitHub" to="https://github.com/biteral-ai/biteral-sdk-php" />

#### Añade el SDK a tu proyecto:

```bash
composer require biteral/biteral-sdk-php
```

#### Crea un cliente utilizando tu API key:

```php
use Biteral\Client;
$client = new Client('ux3HzRTaLGKvZjTb7ufaFUgJPvXbcNX7DWbnWAAUxQjHYqZJ');
```

#### y ya puedes realizar peticiones, como por ejemplo:

```php
$status = $client->status()->get();
```

<Badge variant="sdk php method" text="status()->get()" /> devuelve una entidad <Badge variant="sdk php entity" text="Status" to="/php-sdk/entities/status" /> con la que puedes obtener información sobre la conexión o el estado de la API, y es una forma sencilla de comprobar que la conexión con Biteral funciona correctamente. Por ejemplo:

```php
if ($status->latestStableMajorApiVersion === $status->requestMajorApiVersion) {
    echo "Estás utilizando la versión de API más reciente";
}
```
