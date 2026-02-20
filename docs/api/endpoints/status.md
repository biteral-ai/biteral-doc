---
title: /status
sidebar_position: 1
---
# <Badge variant="api-endpoint" text="/status" /> <Badge variant="http-get" text="GET" />

Gets information about the API status and other useful parameters like your credentials, the version you are using, and the available versions.

<Tabs>
<TabItem value="result" label={<Badge icon="json" text="Result" transparent />}>
```json
{
    "object": "status",
    "availableApiVersions": [
        {
            "object": "api_version",
            "payload": {
                "version": "1.0.0b",
                "status": "beta",
                "isDeprecated": false
            }
        }
    ],
    "latestStableMajorApiVersion": 1,
    "requestMajorApiVersion": 1,
    "clientId": "cli_FnPwntyztB5vXi",
    "projectId": "prj_DXwRnr27kHGcCZ",
    "roles": [
        "ROLE_API_USER"
    ],
    "permissions": [
        "status",
        "depotIngest",
        "depotFetch",
        "depotDelete"
    ],
    "serverTime": "2025-07-09T11:00:32+00:00",
    "environment": "prod"
}
```
</TabItem>
</Tabs>