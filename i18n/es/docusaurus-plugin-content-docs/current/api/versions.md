---
title: Versiones
sidebar_position: 2
---
# Versiones

Cada vez que añadimos o mejoramos funcionalidades que implican cambios en la especificación de la API y podrían afectar a tu implementación, publicamos una nueva versión principal. La versión anterior sigue disponible, por lo que puedes estar seguro de que tu integración seguirá funcionando sin interrupciones, incluso si actualizamos la API en el futuro.

Por eso, es imprescindible que añadas el header <Badge variant="header" text="X-API-Version" /> a las peticiones a la API, que especifica la versión de la API que quieres utilizar.

:::tip
En la documentación marcamos cada funcionalidad con una etiqueta como <Badge variant="version" text="v1" /> para que sepas en qué versión está disponible.
:::

:::info
Para obtener información sobre las versiones disponibles, utiliza el endpoint <Badge variant="api-endpoint" text="/products" to="/api/endpoints/status" />
:::
