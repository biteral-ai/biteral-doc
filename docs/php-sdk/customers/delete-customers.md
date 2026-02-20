---
title: Delete customers
expanded: false
sidebar_position: 5
icon: arrow-right
---
# Delete customers

When a customer is no longer a customer, it is better to delete them from Biteral as well to make sure you do not use resources in Biteral for data that is already obsolete. Delete it from Biteral with the <Badge variant="sdk php method" text="customers()->deleteByCode()" /> method:

```php
$client->customers()->deleteByCode('D314K1432');
```

You can also use <Badge variant="sdk php method" text="customers()->deleteById()" />, which allows you to delete a customer using its Biteral id.
