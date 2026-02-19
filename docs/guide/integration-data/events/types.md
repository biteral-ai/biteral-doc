---
label: Tipos de eventos
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

==- **EventAddedToCart**

<EventDescriptionEventAddedtoCart />

##### Parámetros

[!badge variant="danger" icon="lock" text="type"]
: [!badge variant="warning" text="EventAddedToCart"]

[!badge icon="screen-full" text="timestamp"]
: <EventPropertyTimestamp />

[!badge variant="danger" icon="lock" text="customerCode"]
: <EventPropertyCustomerCode />

[!badge variant="danger" icon="lock" text="productCode"]
: <EventPropertyProductCode />

[!badge icon="screen-full" text="quantity"]
: La cantidad de unidades de este producto añadidas al carrito. Si no se especifica, el valor por defecto es `1`

==-


==- **EventRemovedFromCart**

<EventDescriptionEventRemovedFromCart />

##### Parámetros

[!badge variant="danger" icon="lock" text="type"]
: [!badge variant="warning" text="EventRemovedFromCart"]

[!badge icon="screen-full" text="timestamp"]
: <EventPropertyTimestamp />

[!badge variant="danger" icon="lock" text="customerCode"]
: <EventPropertyCustomerCode />

[!badge variant="danger" icon="lock" text="productCode"]
: <EventPropertyProductCode />

[!badge icon="screen-full" text="quantity"]
: La cantidad de unidades de este producto retiradas del carrito. Si no se especifica, el valor por defecto es `1`

==-


==- **EventAddedToWishlist**

<EventDescriptionEventAddedToWishlist />

##### Parámetros

[!badge variant="danger" icon="lock" text="type"]
: [!badge variant="warning" text="EventAddedToWishlist"]

[!badge icon="screen-full" text="timestamp"]
: <EventPropertyTimestamp />

[!badge variant="danger" icon="lock" text="customerCode"]
: <EventPropertyCustomerCode />

[!badge variant="danger" icon="lock" text="productCode"]
: <EventPropertyProductCode />

==-


==- **EventRemovedFromWishlist**

<EventDescriptionEventRemovedFromWishlist />

##### Parámetros

[!badge variant="danger" icon="lock" text="type"]
: [!badge variant="warning" text="EventRemovedFromWishlist"]

[!badge icon="screen-full" text="timestamp"]
: <EventPropertyTimestamp />

[!badge variant="danger" icon="lock" text="customerCode"]
: <EventPropertyCustomerCode />

[!badge variant="danger" icon="lock" text="productCode"]
: <EventPropertyProductCode />

==-


==- **EventSale**

<EventDescriptionEventSale />

##### Parámetros

[!badge variant="danger" icon="lock" text="type"]
: [!badge variant="warning" text="EventSale"]

[!badge icon="screen-full" text="timestamp"]
: <EventPropertyTimestamp />

[!badge variant="danger" icon="lock" text="customerCode"]
: <EventPropertyCustomerCode />

[!badge variant="danger" icon="lock" text="productCode"]
: <EventPropertyProductCode />

[!badge icon="screen-full" text="quantity"]
: La cantidad de unidades de este producto compradas. Si no se especifica, el valor por defecto es `1`

==-


==- **EventReturnRequested**

<EventDescriptionEventReturnRequested />

!!!
Debe enviarse cuando el cliente solicita la devolución, aunque ésta no sea aceptada, o finalmente no se produzca por cualquier motivo.
!!!

##### Parámetros

[!badge variant="danger" icon="lock" text="type"]
: [!badge variant="warning" text="EventReturnRequested"]

[!badge icon="screen-full" text="timestamp"]
: <EventPropertyTimestamp />

[!badge variant="danger" icon="lock" text="customerCode"]
: <EventPropertyCustomerCode />

[!badge variant="danger" icon="lock" text="productCode"]
: <EventPropertyProductCode />

==-


==- **EventProductViewed**

<EventDescriptionEventProductViewed />

##### Parámetros

[!badge variant="danger" icon="lock" text="type"]
: [!badge variant="warning" text="EventProductViewed"]

[!badge icon="screen-full" text="timestamp"]
: <EventPropertyTimestamp />

[!badge variant="danger" icon="lock" text="customerCode"]
: <EventPropertyCustomerCode />

[!badge variant="danger" icon="lock" text="productCode"]
: <EventPropertyProductCode />

==-


==- **EventCategoryViewed**

<EventDescriptionEventCategoryViewed />

##### Parámetros

[!badge variant="danger" icon="lock" text="type"]
: [!badge variant="warning" text="EventCategoryViewed"]

[!badge icon="screen-full" text="timestamp"]
: <EventPropertyTimestamp />

[!badge variant="danger" icon="lock" text="customerCode"]
: <EventPropertyCustomerCode />

[!badge variant="danger" icon="lock" text="categoryCode"]
: <EventPropertyCategoryCode />

==-


==- **EventBrandViewed**

<EventDescriptionEventBrandViewed />

##### Parámetros

[!badge variant="danger" icon="lock" text="type"]
: [!badge variant="warning" text="EventBrandViewed"]

[!badge icon="screen-full" text="timestamp"]
: <EventPropertyTimestamp />

[!badge variant="danger" icon="lock" text="customerCode"]
: <EventPropertyCustomerCode />

[!badge variant="danger" icon="lock" text="brandCode"]
: <EventPropertyBrandCode />

==-


==- **EventSearch**

<EventDescriptionEventSearch />

!!!
Este evento debe enviarse si vuestro web tiene su propio buscador textual. Si utilizáis el buscador natural de Biteral, no es necesario enviar este evento cuando se produce una búsqueda desde allí.
!!!

##### Parámetros

[!badge variant="danger" icon="lock" text="type"]
: [!badge variant="warning" text="EventSearch"]

[!badge icon="screen-full" text="timestamp"]
: <EventPropertyTimestamp />

[!badge variant="danger" icon="lock" text="customerCode"]
: <EventPropertyCustomerCode />

[!badge variant="danger" icon="lock" text="query"]
: El texto de la búsqueda tal como lo escribió el cliente.

==-


==- **EventFilterApplied**

<EventDescriptionEventFilterApplied />

##### Parámetros

[!badge variant="danger" icon="lock" text="type"]
: [!badge variant="warning" text="EventFilterApplied"]

[!badge icon="screen-full" text="timestamp"]
: <EventPropertyTimestamp />

[!badge variant="danger" icon="lock" text="customerCode"]
: <EventPropertyCustomerCode />

[!badge variant="danger" icon="lock" text="filterName"]
: El nombre del filtro, por ejemplo: `color`

[!badge variant="danger" icon="lock" text="filterValue"]
: El valor del filtro, por ejemplo: `rojo`

==-


==- **EventOrderApplied**

<EventDescriptionEventOrderApplied />

##### Parámetros

[!badge variant="danger" icon="lock" text="type"]
: [!badge variant="warning" text="EventOrderApplied"]

[!badge icon="screen-full" text="timestamp"]
: <EventPropertyTimestamp />

[!badge variant="danger" icon="lock" text="customerCode"]
: <EventPropertyCustomerCode />

[!badge variant="danger" icon="lock" text="orderDescription"]
: La descripción del orden aplicado. Puede ser cualquier palabra o frase que describa el orden, por ejemplo: `price`, `newest products first`, `screen size`, etcétera.

[!badge icon="screen-full" text="orderDirection"]
: Si es relevante, la dirección del orden: `asc` para dirección ascendente, `desc` para dirección descendente

==-


==- **EventCouponApplied**

<EventDescriptionEventCouponApplied />

!!!
Debe enviarse sólo cuando el código del cupón introducido por el cliente haya sido confirmado como válido.
!!!

##### Parámetros

[!badge variant="danger" icon="lock" text="type"]
: [!badge variant="warning" text="EventCouponApplied"]

[!badge icon="screen-full" text="timestamp"]
: <EventPropertyTimestamp />

[!badge variant="danger" icon="lock" text="customerCode"]
: <EventPropertyCustomerCode />

==-


==- **EventReviewWritten**

<EventDescriptionEventReviewWritten />

##### Parámetros

[!badge variant="danger" icon="lock" text="type"]
: [!badge variant="warning" text="EventReviewWritten"]

[!badge icon="screen-full" text="timestamp"]
: <EventPropertyTimestamp />

[!badge variant="danger" icon="lock" text="customerCode"]
: <EventPropertyCustomerCode />

[!badge variant="danger" icon="lock" text="productCode"]
: <EventPropertyProductCode />

[!badge icon="screen-full" text="review"]
: El texto de la review, tal como la escribió el cliente.

==-


==- **EventStockAlertRequested**

<EventDescriptionEventStockAlertRequested />

!!!
Debe enviarse cuando un cliente solicita ser notificado cuando un producto vuelva a estar disponible para la compra, normalmente, porque encontró el producto pero no estaba disponible para comprar en ese momento debido a falta de stock.
!!!

##### Parámetros

[!badge variant="danger" icon="lock" text="type"]
: [!badge variant="warning" text="EventStockAlertRequested"]

[!badge icon="screen-full" text="timestamp"]
: <EventPropertyTimestamp />

[!badge variant="danger" icon="lock" text="customerCode"]
: <EventPropertyCustomerCode />

[!badge variant="danger" icon="lock" text="productCode"]
: <EventPropertyProductCode />

[!badge icon="screen-full" text="review"]
: El texto de la review, tal como la escribió el cliente.

==-