---
title: Descatalogados
expanded: false
sidebar_position: 5
icon: arrow-right
---
# Productos descatalogados

Cuando un producto ya no está a la venta, elimínalo de Biteral con el método <Badge variant="light" text="products()->deleteByCode()" />:

```php
$client->products()->deleteByCode('N39291');
```

También puedes utilizar <Badge variant="light" text="products()->deleteById()" />, que te permitie eliminar un producto utilizando su id en Biteral.
