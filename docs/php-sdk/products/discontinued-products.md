---
title: Discontinued
expanded: false
sidebar_position: 5
icon: arrow-right
---
# Discontinued products

When a product is no longer for sale, delete it from Biteral with the <Badge variant="sdk php method" text="products()->deleteByCode()" /> method:

```php
$client->products()->deleteByCode('N39291');
```

You can also use <Badge variant="sdk php method" text="products()->deleteById()" />, which allows you to delete a product using its Biteral id.
