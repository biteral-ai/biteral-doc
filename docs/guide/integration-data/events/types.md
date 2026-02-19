---
title: Tipos de eventos
expanded: false
icon: arrow-right
order: 1000
---
import EventDescriptionEventAddedtoCart from '@site/src/components/events/descriptions/event-added-to-cart.md';
import EventDescriptionEventRemovedFromCart from '@site/src/components/events/descriptions/event-removed-from-cart.md';
import EventDescriptionEventAddedToWishlist from '@site/src/components/events/descriptions/event-added-to-wishlist.md';
import EventDescriptionEventRemovedFromWishlist from '@site/src/components/events/descriptions/event-removed-from-wishlist.md';
import EventDescriptionEventSale from '@site/src/components/events/descriptions/event-sale.md';
import EventDescriptionEventReturnRequested from '@site/src/components/events/descriptions/event-return-requested.md';
import EventDescriptionEventProductViewed from '@site/src/components/events/descriptions/event-product-viewed.md';
import EventDescriptionEventCategoryViewed from '@site/src/components/events/descriptions/event-category-viewed.md';
import EventDescriptionEventBrandViewed from '@site/src/components/events/descriptions/event-brand-viewed.md';
import EventDescriptionEventSearch from '@site/src/components/events/descriptions/event-search.md';
import EventDescriptionEventFilterApplied from '@site/src/components/events/descriptions/event-filter-applied.md';
import EventDescriptionEventOrderApplied from '@site/src/components/events/descriptions/event-order-applied.md';
import EventDescriptionEventCouponApplied from '@site/src/components/events/descriptions/event-coupon-applied.md';
import EventDescriptionEventReviewWritten from '@site/src/components/events/descriptions/event-review-written.md';
import EventDescriptionEventStockAlertRequested from '@site/src/components/events/descriptions/event-stock-alert-requested.md';

import EventPropertyTimestamp from '@site/src/components/events/properties/timestamp.md';
import EventPropertyCustomerCode from '@site/src/components/events/properties/customer-code.md';
import EventPropertyProductCode from '@site/src/components/events/properties/product-code.md';
import EventPropertyCategoryCode from '@site/src/components/events/properties/category-code.md';
import EventPropertyBrandCode from '@site/src/components/events/properties/brand-code.md';

<details>
<summary>**EventAddedToCart**</summary>

<EventDescriptionEventAddedtoCart />

##### Parámetros

<Badge variant="parameter locked" icon="lock" text="type" />
: <Badge variant="value" text="EventAddedToCart" />

<Badge variant="parameter" icon="parameter" text="timestamp" />
: <EventPropertyTimestamp />

<Badge variant="parameter locked" icon="lock" text="customerCode" />
: <EventPropertyCustomerCode />

<Badge variant="parameter locked" icon="lock" text="productCode" />
: <EventPropertyProductCode />

<Badge variant="parameter" icon="parameter" text="quantity" />
: La cantidad de unidades de este producto añadidas al carrito. Si no se especifica, el valor por defecto es `1`

</details>


<details>
<summary>**EventRemovedFromCart**</summary>

<EventDescriptionEventRemovedFromCart />

##### Parámetros

<Badge variant="parameter locked" icon="lock" text="type" />
: <Badge variant="value" text="EventRemovedFromCart" />

<Badge variant="parameter" icon="parameter" text="timestamp" />
: <EventPropertyTimestamp />

<Badge variant="parameter locked" icon="lock" text="customerCode" />
: <EventPropertyCustomerCode />

<Badge variant="parameter locked" icon="lock" text="productCode" />
: <EventPropertyProductCode />

<Badge variant="parameter" icon="parameter" text="quantity" />
: La cantidad de unidades de este producto retiradas del carrito. Si no se especifica, el valor por defecto es `1`

</details>


<details>
<summary>**EventAddedToWishlist**</summary>

<EventDescriptionEventAddedToWishlist />

##### Parámetros

<Badge variant="parameter locked" icon="lock" text="type" />
: <Badge variant="value" text="EventAddedToWishlist" />

<Badge variant="parameter" icon="parameter" text="timestamp" />
: <EventPropertyTimestamp />

<Badge variant="parameter locked" icon="lock" text="customerCode" />
: <EventPropertyCustomerCode />

<Badge variant="parameter locked" icon="lock" text="productCode" />
: <EventPropertyProductCode />

</details>


<details>
<summary>**EventRemovedFromWishlist**</summary>

<EventDescriptionEventRemovedFromWishlist />

##### Parámetros

<Badge variant="parameter locked" icon="lock" text="type" />
: <Badge variant="value" text="EventRemovedFromWishlist" />

<Badge variant="parameter" icon="parameter" text="timestamp" />
: <EventPropertyTimestamp />

<Badge variant="parameter locked" icon="lock" text="customerCode" />
: <EventPropertyCustomerCode />

<Badge variant="parameter locked" icon="lock" text="productCode" />
: <EventPropertyProductCode />

</details>


<details>
<summary>**EventSale**</summary>

<EventDescriptionEventSale />

##### Parámetros

<Badge variant="parameter locked" icon="lock" text="type" />
: <Badge variant="value" text="EventSale" />

<Badge variant="parameter" icon="parameter" text="timestamp" />
: <EventPropertyTimestamp />

<Badge variant="parameter locked" icon="lock" text="customerCode" />
: <EventPropertyCustomerCode />

<Badge variant="parameter locked" icon="lock" text="productCode" />
: <EventPropertyProductCode />

<Badge variant="parameter" icon="parameter" text="quantity" />
: La cantidad de unidades de este producto compradas. Si no se especifica, el valor por defecto es `1`

</details>


<details>
<summary>**EventReturnRequested**</summary>

<EventDescriptionEventReturnRequested />

!!!
Debe enviarse cuando el cliente solicita la devolución, aunque ésta no sea aceptada, o finalmente no se produzca por cualquier motivo.
!!!

##### Parámetros

<Badge variant="parameter locked" icon="lock" text="type" />
: <Badge variant="value" text="EventReturnRequested" />

<Badge variant="parameter" icon="parameter" text="timestamp" />
: <EventPropertyTimestamp />

<Badge variant="parameter locked" icon="lock" text="customerCode" />
: <EventPropertyCustomerCode />

<Badge variant="parameter locked" icon="lock" text="productCode" />
: <EventPropertyProductCode />

</details>


<details>
<summary>**EventProductViewed**</summary>

<EventDescriptionEventProductViewed />

##### Parámetros

<Badge variant="parameter locked" icon="lock" text="type" />
: <Badge variant="value" text="EventProductViewed" />

<Badge variant="parameter" icon="parameter" text="timestamp" />
: <EventPropertyTimestamp />

<Badge variant="parameter locked" icon="lock" text="customerCode" />
: <EventPropertyCustomerCode />

<Badge variant="parameter locked" icon="lock" text="productCode" />
: <EventPropertyProductCode />

</details>


<details>
<summary>**EventCategoryViewed**</summary>

<EventDescriptionEventCategoryViewed />

##### Parámetros

<Badge variant="parameter locked" icon="lock" text="type" />
: <Badge variant="value" text="EventCategoryViewed" />

<Badge variant="parameter" icon="parameter" text="timestamp" />
: <EventPropertyTimestamp />

<Badge variant="parameter locked" icon="lock" text="customerCode" />
: <EventPropertyCustomerCode />

<Badge variant="parameter locked" icon="lock" text="categoryCode" />
: <EventPropertyCategoryCode />

</details>


<details>
<summary>**EventBrandViewed**</summary>

<EventDescriptionEventBrandViewed />

##### Parámetros

<Badge variant="parameter locked" icon="lock" text="type" />
: <Badge variant="value" text="EventBrandViewed" />

<Badge variant="parameter" icon="parameter" text="timestamp" />
: <EventPropertyTimestamp />

<Badge variant="parameter locked" icon="lock" text="customerCode" />
: <EventPropertyCustomerCode />

<Badge variant="parameter locked" icon="lock" text="brandCode" />
: <EventPropertyBrandCode />

</details>


<details>
<summary>**EventSearch**</summary>

<EventDescriptionEventSearch />

!!!
Este evento debe enviarse si vuestro web tiene su propio buscador textual. Si utilizáis el buscador natural de Biteral, no es necesario enviar este evento cuando se produce una búsqueda desde allí.
!!!

##### Parámetros

<Badge variant="parameter locked" icon="lock" text="type" />
: <Badge variant="value" text="EventSearch" />

<Badge variant="parameter" icon="parameter" text="timestamp" />
: <EventPropertyTimestamp />

<Badge variant="parameter locked" icon="lock" text="customerCode" />
: <EventPropertyCustomerCode />

<Badge variant="parameter locked" icon="lock" text="query" />
: El texto de la búsqueda tal como lo escribió el cliente.

</details>


<details>
<summary>**EventFilterApplied**</summary>

<EventDescriptionEventFilterApplied />

##### Parámetros

<Badge variant="parameter locked" icon="lock" text="type" />
: <Badge variant="value" text="EventFilterApplied" />

<Badge variant="parameter" icon="parameter" text="timestamp" />
: <EventPropertyTimestamp />

<Badge variant="parameter locked" icon="lock" text="customerCode" />
: <EventPropertyCustomerCode />

<Badge variant="parameter locked" icon="lock" text="filterName" />
: El nombre del filtro, por ejemplo: `color`

<Badge variant="parameter locked" icon="lock" text="filterValue" />
: El valor del filtro, por ejemplo: `rojo`

</details>


<details>
<summary>**EventOrderApplied**</summary>

<EventDescriptionEventOrderApplied />

##### Parámetros

<Badge variant="parameter locked" icon="lock" text="type" />
: <Badge variant="value" text="EventOrderApplied" />

<Badge variant="parameter" icon="parameter" text="timestamp" />
: <EventPropertyTimestamp />

<Badge variant="parameter locked" icon="lock" text="customerCode" />
: <EventPropertyCustomerCode />

<Badge variant="parameter locked" icon="lock" text="orderDescription" />
: La descripción del orden aplicado. Puede ser cualquier palabra o frase que describa el orden, por ejemplo: `price`, `newest products first`, `screen size`, etcétera.

<Badge variant="parameter" icon="parameter" text="orderDirection" />
: Si es relevante, la dirección del orden: `asc` para dirección ascendente, `desc` para dirección descendente

</details>


<details>
<summary>**EventCouponApplied**</summary>

<EventDescriptionEventCouponApplied />

!!!
Debe enviarse sólo cuando el código del cupón introducido por el cliente haya sido confirmado como válido.
!!!

##### Parámetros

<Badge variant="parameter locked" icon="lock" text="type" />
: <Badge variant="value" text="EventCouponApplied" />

<Badge variant="parameter" icon="parameter" text="timestamp" />
: <EventPropertyTimestamp />

<Badge variant="parameter locked" icon="lock" text="customerCode" />
: <EventPropertyCustomerCode />

</details>


<details>
<summary>**EventReviewWritten**</summary>

<EventDescriptionEventReviewWritten />

##### Parámetros

<Badge variant="parameter locked" icon="lock" text="type" />
: <Badge variant="value" text="EventReviewWritten" />

<Badge variant="parameter" icon="parameter" text="timestamp" />
: <EventPropertyTimestamp />

<Badge variant="parameter locked" icon="lock" text="customerCode" />
: <EventPropertyCustomerCode />

<Badge variant="parameter locked" icon="lock" text="productCode" />
: <EventPropertyProductCode />

<Badge variant="parameter" icon="parameter" text="review" />
: El texto de la review, tal como la escribió el cliente.

</details>


<details>
<summary>**EventStockAlertRequested**</summary>

<EventDescriptionEventStockAlertRequested />

!!!
Debe enviarse cuando un cliente solicita ser notificado cuando un producto vuelva a estar disponible para la compra, normalmente, porque encontró el producto pero no estaba disponible para comprar en ese momento debido a falta de stock.
!!!

##### Parámetros

<Badge variant="parameter locked" icon="lock" text="type" />
: <Badge variant="value" text="EventStockAlertRequested" />

<Badge variant="parameter" icon="parameter" text="timestamp" />
: <EventPropertyTimestamp />

<Badge variant="parameter locked" icon="lock" text="customerCode" />
: <EventPropertyCustomerCode />

<Badge variant="parameter locked" icon="lock" text="productCode" />
: <EventPropertyProductCode />

<Badge variant="parameter" icon="parameter" text="review" />
: El texto de la review, tal como la escribió el cliente.

</details>
