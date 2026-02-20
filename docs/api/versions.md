---
title: Versions
sidebar_position: 2
---
# Versions

Every time we add or improve features that involve changes to the API specification and could affect your implementation, we release a new major version. The previous version remains available, so you can be confident that your integration will continue working without interruption, even if we update the API in the future.

Because of this, it is essential that you add the <Badge variant="header" text="X-API-Version" /> header to API requests, which specifies the API version you want to use.

:::tip
In the documentation, we mark each feature with a tag like <Badge variant="version" text="v1" /> so you know in which version it is available.
:::

:::info
To get information about available versions, use the <Badge variant="api-endpoint" text="/status" to="/api/endpoints/status" /> endpoint.
:::
