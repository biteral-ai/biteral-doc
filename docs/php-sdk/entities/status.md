---
sidebar_position: 1
---
# Status

Representa el estado actual de la API de Biteral, y además proporciona información sobre tu petición, tus credenciales y otros datos útiles como las versiones de API disponibles, o la versión que estás actualizando actualmente.

Propiedad|Tipo|Descripción
---|---|---
<Badge variant="sdk php property" icon="property" text="availableApiVersions" />|<Badge variant="sdk php payload" text="array<ApiVersion>" to="/php-sdk/payloads/api-version-payload" />|Las versiones de la API que están disponibles.
<Badge variant="sdk php property" icon="property" text="latestStableMajorApiVersion" />|int|La versión mayor de API que se considera estable actualmente. Por ejemplo: <Badge variant="value" text="1" />
<Badge variant="sdk php property" icon="property" text="requestMajorApiVersion" />|int|La versión mayor de API que se ha utilizado para esta petición a la API. Por ejemplo: <Badge variant="value" text="1" />
<Badge variant="sdk php property" icon="property" text="clientId" />|string|El ID de cliente con el que se está realizando esta petición a la API. Por ejemplo: <Badge variant="value" text="cli_2YyNEfr5gcl139" />
<Badge variant="sdk php property" icon="property" text="projectId" />|string|El ID de proyecto con el que se está realizando esta petición a la API. Por ejemplo: <Badge variant="value" text="prj_skd2kjn1j4aO1K" />
<Badge variant="sdk php property" icon="property" text="roles" />|array\<string\>|Los roles que posee la API key utilizada en esta petición a la API. Por ejemplo: <Badge variant="value" text="['ROLE_API_USER']" />
<Badge variant="sdk php property" icon="property" text="permissions" />|array\<string\>|Los permisos que posee la API key utilizada en esta petición a la API. Por ejemplo: <Badge variant="value" text="['all']" />.
<Badge variant="sdk php property" icon="property" text="serverTime" />|DateTimeImmutable|La fecha y hora del servidor de API en el momento de realizar la petición.
<Badge variant="sdk php property" icon="property" text="environment" />|string|El entorno en el que está funcionando la API. Por ejemplo <Badge variant="value" text="prod" />