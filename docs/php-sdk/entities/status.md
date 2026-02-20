---
sidebar_position: 1
---
# Status

Represents the current status of the Biteral API, and additionally provides information about your request, your credentials, and other useful data such as available API versions, or the version you are currently using.

Property|Type|Description
---|---|---
<Badge variant="sdk php property" icon="property" text="availableApiVersions" />|<Badge variant="sdk php payload" text="array<ApiVersion>" to="/php-sdk/payloads/api-version-payload" />|The available API versions.
<Badge variant="sdk php property" icon="property" text="latestStableMajorApiVersion" />|int|The major API version currently considered stable. For example: <Badge variant="value" text="1" />
<Badge variant="sdk php property" icon="property" text="requestMajorApiVersion" />|int|The major API version used for this API request. For example: <Badge variant="value" text="1" />
<Badge variant="sdk php property" icon="property" text="clientId" />|string|The Client ID making this API request. For example: <Badge variant="value" text="cli_2YyNEfr5gcl139" />
<Badge variant="sdk php property" icon="property" text="projectId" />|string|The Project ID making this API request. For example: <Badge variant="value" text="prj_skd2kjn1j4aO1K" />
<Badge variant="sdk php property" icon="property" text="roles" />|array\<string\>|The roles held by the API key used in this API request. For example: <Badge variant="value" text="['ROLE_API_USER']" />
<Badge variant="sdk php property" icon="property" text="permissions" />|array\<string\>|The permissions held by the API key used in this API request. For example: <Badge variant="value" text="['all']" />.
<Badge variant="sdk php property" icon="property" text="serverTime" />|DateTimeImmutable|The API server's date and time when the request was made.
<Badge variant="sdk php property" icon="property" text="environment" />|string|The environment where the API is running. For example <Badge variant="value" text="prod" />