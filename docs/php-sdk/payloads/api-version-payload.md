---
sidebar_position: 1
---
# ApiVersion

Represents an API version.

Property|Type|Description
---|---|---
<Badge variant="sdk php property" icon="property" text="version" />|string|The full API version string. For example: <Badge variant="value" text="1.0.0b" />
<Badge variant="sdk php property" icon="property" text="status" />|string|The state this version is in, among the available states: <Badge variant="value" text="alpha" />: Development version, specification may change, <Badge variant="value" text="beta" />: Testing version, bugs may appear, <Badge variant="value" text="stable" />: Stable version, recommended for production, <Badge variant="value" text="retired" />: Obsolete version not available
<Badge variant="sdk php property" icon="property" text="isDeprecated" />|bool|Indicates if this API version is no longer maintained, and will stop being available soon.
