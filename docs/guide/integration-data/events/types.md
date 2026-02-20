---
title: Event types
expanded: false
icon: arrow-right
order: 1000
---
import EventDescriptionEventAddedtoCart from '../../../_components/events/descriptions/event-added-to-cart.md';
import EventDescriptionEventRemovedFromCart from '../../../_components/events/descriptions/event-removed-from-cart.md';
import EventDescriptionEventAddedToWishlist from '../../../_components/events/descriptions/event-added-to-wishlist.md';
import EventDescriptionEventRemovedFromWishlist from '../../../_components/events/descriptions/event-removed-from-wishlist.md';
import EventDescriptionEventSale from '../../../_components/events/descriptions/event-sale.md';
import EventDescriptionEventReturnRequested from '../../../_components/events/descriptions/event-return-requested.md';
import EventDescriptionEventProductViewed from '../../../_components/events/descriptions/event-product-viewed.md';
import EventDescriptionEventCategoryViewed from '../../../_components/events/descriptions/event-category-viewed.md';
import EventDescriptionEventBrandViewed from '../../../_components/events/descriptions/event-brand-viewed.md';
import EventDescriptionEventSearch from '../../../_components/events/descriptions/event-search.md';
import EventDescriptionEventFilterApplied from '../../../_components/events/descriptions/event-filter-applied.md';
import EventDescriptionEventOrderApplied from '../../../_components/events/descriptions/event-order-applied.md';
import EventDescriptionEventCouponApplied from '../../../_components/events/descriptions/event-coupon-applied.md';
import EventDescriptionEventReviewWritten from '../../../_components/events/descriptions/event-review-written.md';
import EventDescriptionEventStockAlertRequested from '../../../_components/events/descriptions/event-stock-alert-requested.md';

import EventPropertyTimestamp from '../../../_components/events/properties/timestamp.md';
import EventPropertyCustomerCode from '../../../_components/events/properties/customer-code.md';
import EventPropertyProductCode from '../../../_components/events/properties/product-code.md';
import EventPropertyCategoryCode from '../../../_components/events/properties/category-code.md';
import EventPropertyBrandCode from '../../../_components/events/properties/brand-code.md';

<details>
<summary><Badge variant="event" icon="event" text="EventAddedToCart" /></summary>

<EventDescriptionEventAddedtoCart />

| Parameter| Value |
| :--- | :--- |
| <Badge variant="property required" tooltip="Required" icon="required" text="type" /> | <Badge variant="value" text="EventAddedToCart" /> |
| <Badge variant="property" icon="property" text="timestamp" /> | <EventPropertyTimestamp /> |
| <Badge variant="property required" tooltip="Required" icon="required" text="customerCode" /> | <EventPropertyCustomerCode /> |
| <Badge variant="property required" tooltip="Required" icon="required" text="productCode" /> | <EventPropertyProductCode /> |
| <Badge variant="property" icon="property" text="quantity" /> | The number of units of this product added to the cart. If not specified, the default value is `1` |

</details>


<details>
<summary><Badge variant="event" icon="event" text="EventRemovedFromCart" /></summary>

<EventDescriptionEventRemovedFromCart />

| Parameter| Value |
| :--- | :--- |
| <Badge variant="property required" tooltip="Required" icon="required" text="type" /> | <Badge variant="value" text="EventRemovedFromCart" /> |
| <Badge variant="property" icon="property" text="timestamp" /> | <EventPropertyTimestamp /> |
| <Badge variant="property required" tooltip="Required" icon="required" text="customerCode" /> | <EventPropertyCustomerCode /> |
| <Badge variant="property required" tooltip="Required" icon="required" text="productCode" /> | <EventPropertyProductCode /> |
| <Badge variant="property" icon="property" text="quantity" /> | The number of units of this product removed from the cart. If not specified, the default value is `1` |

</details>


<details>
<summary><Badge variant="event" icon="event" text="EventAddedToWishlist" /></summary>

<EventDescriptionEventAddedToWishlist />

| Parameter| Value |
| :--- | :--- |
| <Badge variant="property required" tooltip="Required" icon="required" text="type" /> | <Badge variant="value" text="EventAddedToWishlist" /> |
| <Badge variant="property" icon="property" text="timestamp" /> | <EventPropertyTimestamp /> |
| <Badge variant="property required" tooltip="Required" icon="required" text="customerCode" /> | <EventPropertyCustomerCode /> |
| <Badge variant="property required" tooltip="Required" icon="required" text="productCode" /> | <EventPropertyProductCode /> |

</details>


<details>
<summary><Badge variant="event" icon="event" text="EventRemovedFromWishlist" /></summary>

<EventDescriptionEventRemovedFromWishlist />

| Parameter| Value |
| :--- | :--- |
| <Badge variant="property required" tooltip="Required" icon="required" text="type" /> | <Badge variant="value" text="EventRemovedFromWishlist" /> |
| <Badge variant="property" icon="property" text="timestamp" /> | <EventPropertyTimestamp /> |
| <Badge variant="property required" tooltip="Required" icon="required" text="customerCode" /> | <EventPropertyCustomerCode /> |
| <Badge variant="property required" tooltip="Required" icon="required" text="productCode" /> | <EventPropertyProductCode /> |

</details>


<details>
<summary><Badge variant="event" icon="event" text="EventSale" /></summary>

<EventDescriptionEventSale />

| Parameter| Value |
| :--- | :--- |
| <Badge variant="property required" tooltip="Required" icon="required" text="type" /> | <Badge variant="value" text="EventSale" /> |
| <Badge variant="property" icon="property" text="timestamp" /> | <EventPropertyTimestamp /> |
| <Badge variant="property required" tooltip="Required" icon="required" text="customerCode" /> | <EventPropertyCustomerCode /> |
| <Badge variant="property required" tooltip="Required" icon="required" text="productCode" /> | <EventPropertyProductCode /> |
| <Badge variant="property" icon="property" text="quantity" /> | The number of units of this product purchased. If not specified, the default value is `1` |

</details>


<details>
<summary><Badge variant="event" icon="event" text="EventReturnRequested" /></summary>

<EventDescriptionEventReturnRequested />

:::info
Must be sent when the customer requests a return, even if it is not accepted, or ultimately does not occur for any reason.
:::

| Parameter| Value |
| :--- | :--- |
| <Badge variant="property required" tooltip="Required" icon="required" text="type" /> | <Badge variant="value" text="EventReturnRequested" /> |
| <Badge variant="property" icon="property" text="timestamp" /> | <EventPropertyTimestamp /> |
| <Badge variant="property required" tooltip="Required" icon="required" text="customerCode" /> | <EventPropertyCustomerCode /> |
| <Badge variant="property required" tooltip="Required" icon="required" text="productCode" /> | <EventPropertyProductCode /> |

</details>


<details>
<summary><Badge variant="event" icon="event" text="EventProductViewed" /></summary>

<EventDescriptionEventProductViewed />

| Parameter| Value |
| :--- | :--- |
| <Badge variant="property required" tooltip="Required" icon="required" text="type" /> | <Badge variant="value" text="EventProductViewed" /> |
| <Badge variant="property" icon="property" text="timestamp" /> | <EventPropertyTimestamp /> |
| <Badge variant="property required" tooltip="Required" icon="required" text="customerCode" /> | <EventPropertyCustomerCode /> |
| <Badge variant="property required" tooltip="Required" icon="required" text="productCode" /> | <EventPropertyProductCode /> |

</details>


<details>
<summary><Badge variant="event" icon="event" text="EventCategoryViewed" /></summary>

<EventDescriptionEventCategoryViewed />

| Parameter| Value |
| :--- | :--- |
| <Badge variant="property required" tooltip="Required" icon="required" text="type" /> | <Badge variant="value" text="EventCategoryViewed" /> |
| <Badge variant="property" icon="property" text="timestamp" /> | <EventPropertyTimestamp /> |
| <Badge variant="property required" tooltip="Required" icon="required" text="customerCode" /> | <EventPropertyCustomerCode /> |
| <Badge variant="property required" tooltip="Required" icon="required" text="categoryCode" /> | <EventPropertyCategoryCode /> |

</details>


<details>
<summary><Badge variant="event" icon="event" text="EventBrandViewed" /></summary>

<EventDescriptionEventBrandViewed />

| Parameter| Value |
| :--- | :--- |
| <Badge variant="property required" tooltip="Required" icon="required" text="type" /> | <Badge variant="value" text="EventBrandViewed" /> |
| <Badge variant="property" icon="property" text="timestamp" /> | <EventPropertyTimestamp /> |
| <Badge variant="property required" tooltip="Required" icon="required" text="customerCode" /> | <EventPropertyCustomerCode /> |
| <Badge variant="property required" tooltip="Required" icon="required" text="brandCode" /> | <EventPropertyBrandCode /> |

</details>


<details>
<summary><Badge variant="event" icon="event" text="EventSearch" /></summary>

<EventDescriptionEventSearch />

:::info
This event must be sent if your website has its own text search engine. If you use Biteral's natural search engine, it is not necessary to send this event when a search is performed from there.
:::

| Parameter| Value |
| :--- | :--- |
| <Badge variant="property required" tooltip="Required" icon="required" text="type" /> | <Badge variant="value" text="EventSearch" /> |
| <Badge variant="property" icon="property" text="timestamp" /> | <EventPropertyTimestamp /> |
| <Badge variant="property required" tooltip="Required" icon="required" text="customerCode" /> | <EventPropertyCustomerCode /> |
| <Badge variant="property required" tooltip="Required" icon="required" text="query" /> | The search text exactly as the customer typed it. |

</details>


<details>
<summary><Badge variant="event" icon="event" text="EventFilterApplied" /></summary>

<EventDescriptionEventFilterApplied />

| Parameter| Value |
| :--- | :--- |
| <Badge variant="property required" tooltip="Required" icon="required" text="type" /> | <Badge variant="value" text="EventFilterApplied" /> |
| <Badge variant="property" icon="property" text="timestamp" /> | <EventPropertyTimestamp /> |
| <Badge variant="property required" tooltip="Required" icon="required" text="customerCode" /> | <EventPropertyCustomerCode /> |
| <Badge variant="property required" tooltip="Required" icon="required" text="filterName" /> | The filter name, for example: `color` |
| <Badge variant="property required" tooltip="Required" icon="required" text="filterValue" /> | The filter value, for example: `red` |

</details>


<details>
<summary><Badge variant="event" icon="event" text="EventOrderApplied" /></summary>

<EventDescriptionEventOrderApplied />

| Parameter| Value |
| :--- | :--- |
| <Badge variant="property required" tooltip="Required" icon="required" text="type" /> | <Badge variant="value" text="EventOrderApplied" /> |
| <Badge variant="property" icon="property" text="timestamp" /> | <EventPropertyTimestamp /> |
| <Badge variant="property required" tooltip="Required" icon="required" text="customerCode" /> | <EventPropertyCustomerCode /> |
| <Badge variant="property required" tooltip="Required" icon="required" text="orderDescription" /> | The description of the applied order. It can be any word or phrase describing the order, for example: `price`, `newest products first`, `screen size`, etc. |
| <Badge variant="property" icon="property" text="orderDirection" /> | If relevant, the order direction: `asc` for ascending direction, `desc` for descending direction |

</details>


<details>
<summary><Badge variant="event" icon="event" text="EventCouponApplied" /></summary>

<EventDescriptionEventCouponApplied />

:::info
Must be sent only when the coupon code entered by the customer has been confirmed as valid.
:::

| Parameter| Value |
| :--- | :--- |
| <Badge variant="property required" tooltip="Required" icon="required" text="type" /> | <Badge variant="value" text="EventCouponApplied" /> |
| <Badge variant="property" icon="property" text="timestamp" /> | <EventPropertyTimestamp /> |
| <Badge variant="property required" tooltip="Required" icon="required" text="customerCode" /> | <EventPropertyCustomerCode /> |

</details>


<details>
<summary><Badge variant="event" icon="event" text="EventReviewWritten" /></summary>

<EventDescriptionEventReviewWritten />

| Parameter| Value |
| :--- | :--- |
| <Badge variant="property required" tooltip="Required" icon="required" text="type" /> | <Badge variant="value" text="EventReviewWritten" /> |
| <Badge variant="property" icon="property" text="timestamp" /> | <EventPropertyTimestamp /> |
| <Badge variant="property required" tooltip="Required" icon="required" text="customerCode" /> | <EventPropertyCustomerCode /> |
| <Badge variant="property required" tooltip="Required" icon="required" text="productCode" /> | <EventPropertyProductCode /> |
| <Badge variant="property" icon="property" text="review" /> | The review text, exactly as the customer wrote it. |

</details>


<details>
<summary><Badge variant="event" icon="event" text="EventStockAlertRequested" /></summary>

<EventDescriptionEventStockAlertRequested />

:::info
Must be sent when a customer requests to be notified when a product is available for purchase again, usually because they found the product but it was out of stock.
:::

| Parameter| Value |
| :--- | :--- |
| <Badge variant="property required" tooltip="Required" icon="required" text="type" /> | <Badge variant="value" text="EventStockAlertRequested" /> |
| <Badge variant="property" icon="property" text="timestamp" /> | <EventPropertyTimestamp /> |
| <Badge variant="property required" tooltip="Required" icon="required" text="customerCode" /> | <EventPropertyCustomerCode /> |
| <Badge variant="property required" tooltip="Required" icon="required" text="productCode" /> | <EventPropertyProductCode /> |

</details>
