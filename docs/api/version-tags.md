---
id: version-tag
title: Version Tags
sidebar_label: Scenario Version Tags
---

import endpointData from '@site/data/api/version-tag';
import ApiEndpoint from '@site/src/components/ApiEndpoint';

Every owned scenario can be tagged as a version. This can be useful in cases with many iterations of scenario creation. When a scenario is tagged, the user that last updated the scenario is registered and kept up-to-date. Moreover, you can add a short description of the version.

## The version tag object

The version tag object consist of the following two fields:

* `user` - Initially the user that created the tag, will be updated when the scenario is updated with the user that last touched the scenario.
* `description` - A short description of the version, optional.
* `last_updated_at` - The date and time the scenario was last updated.


## Get a version tag

Sending a GET request for a version tag:

<ApiEndpoint data={endpointData.show} />

```http title="Example request"
GET /api/v3/scenarios/0/version HTTP/2
Host: engine.energytransitionmodel.com
Accept: application/json
Authorization: Bearer YOUR_TOKEN
```

```json title="Example response"
{
  "user_id": 1,
  "description": "My description",
  "last_updated_at": "2021-07-16T09:23:00.000Z"
}
```

## Create a version tag

Sending a POST request for a version tag:

<ApiEndpoint data={endpointData.create} />

```http title="Example request"
POST /api/v3/scenarios/0/version HTTP/2
Host: engine.energytransitionmodel.com
Accept: application/json
Authorization: Bearer YOUR_TOKEN

{
  "description": "My description"
}
```

```json title="Example response"
{
  "user_id": 1,
  "description": "My description",
  "last_updated_at": "2021-07-16T09:23:00.000Z"
}
```

## Update a version tag

Sending a PUT request for a version tag:

<ApiEndpoint data={endpointData.create} />

```http title="Example request"
PUT /api/v3/scenarios/0/version HTTP/2
Host: engine.energytransitionmodel.com
Accept: application/json
Authorization: Bearer YOUR_TOKEN

{
  "description": "My altered description"
}
```

```json title="Example response"
{
  "user_id": 1,
  "description": "My altered description",
  "last_updated_at": "2021-07-16T09:23:00.000Z"
}
```

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
