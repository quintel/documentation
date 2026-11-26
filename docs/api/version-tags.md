---
id: version-tag
title: Version Tags
sidebar_label: Scenario Version Tags
---

import VersionTags from './_shared/_version-tags.mdx';
import endpointData from '@site/data/api/version-tag';
import ApiEndpoint from '@site/src/components/ApiEndpoint';

<VersionTags api="v3" />

## Get batch version tags

Sending a GET request for retrieving the version tags for multiple scenarios at once:

<ApiEndpoint data={endpointData.index} />

```http title="Example request"
GET /api/v3/scenarios/versions HTTP/2
Host: engine.energytransitionmodel.com
Accept: application/json
Authorization: Bearer YOUR_TOKEN

{
  "scenarios": [0, 1, 2]
}
```

```json title="Example response"
{
  "0": {
    "user_id": 1,
    "description": "My description",
    "last_updated_at": "2021-07-16T09:23:00.000Z"
  },
  "1": {
    "user_id": 2,
    "description": "My second description",
    "last_updated_at": "2021-07-17T09:23:00.000Z"
  },
  "2": {
    "user_id": 1,
    "description": "My third description",
    "last_updated_at": "2021-07-18T09:23:00.000Z"
  },
}
```
