---
title: Installation
sidebar_position: 1
icon: arrow-right
---
# Install the PHP SDK

The Biteral PHP SDK is a composer package that allows you to easily integrate Biteral into PHP projects version 5.6 and higher.

<Button variant="primary" text="Biteral SDK on GitHub" to="https://github.com/biteral-ai/biteral-sdk-php" />

#### Add the SDK to your project:

```bash
composer require biteral/biteral-sdk-php
```

#### Create a client using your API key:

```php
use Biteral\Client;
$client = new Client('ux3HzRTaLGKvZjTb7ufaFUgJPvXbcNX7DWbnWAAUxQjHYqZJ');
```

#### and you are ready to make requests, like for example:

```php
$status = $client->status()->get();
```

<Badge variant="sdk php method" text="status()->get()" /> returns a <Badge variant="sdk php entity" text="Status" to="/php-sdk/entities/status" /> entity which you can use to get information about the connection or the API status, and it is a simple way to check that the connection to Biteral works correctly. For example:

```php
if ($status->latestStableMajorApiVersion === $status->requestMajorApiVersion) {
    echo "You are using the latest API version";
}
```
