---
title: Collections
---

import endpointData from '@site/data/api/collections';
import ApiEndpoint from '@site/src/components/ApiEndpoint';
import UpcomingFeature from '@site/src/components/UpcomingFeature';

<UpcomingFeature release="2023.01" />

The ETM's [Collections](https://energytransitionmodel.com/multi_year_charts) feature can be used by providing scenario IDs directly to the URL. However, in order for them to appear in your list, you can use the API to create persisted collections.

Instead of a collection, the viewer can also show a comparison of a selection of [saved scenarios](saved-scenarios.md). With this endpoint you may also create such a persisted collection.

The ETM provides an API for creating, updating, and removing collections from your account.

## The Collection object

All collections contain the following attributes, which will be part of any response from the
collection endpoint:

* `id` - the numeric id of the collection.
* `scenario_ids` - the list of [scenarios](scenarios.md) in the collection.
* `saved_scenario_ids` - the list of [saved scenarios](saved-scenarios.md) in the collection.<!-- Right now everything comes in the shape of scenario_ids! -->
* `created_at` - date of creation.
* `updated_at` - date of last update.
* `discarded_at` - date it was discarded.
* `discarded` - specifies weather the collection has been discarded.
* `interpolation` - specifies whether the collection is a transition path.
* `title` - the title of the collection, shown in the list.
* `version_id` - the version associated with the collection. See [model versions](docs/main/user_manual/model-versions.md) for more information.<!-- This probably should be "version":"tag" instead -->
* `owner` - information about the owner of the Collection.
  * `id` - the owner's unique ID number
  * `name` - the owner's name

## Getting information about a collection

Fetch information about a collection.

<ApiEndpoint data={endpointData.show} />

```http title="Example request"
GET /api/v3/collections/123 HTTP/2
Host: engine.energytransitionmodel.com
Accept: application/json
Authorization: Bearer YOUR_TOKEN
```

```json title="Example response"
{
  "id": 123,
  "scenario_ids": [12, 34, 56],
  "title": "My collection",
  "version_id": 1,
  "created_at": "2022-07-27T13:45:32.000Z",
  "updated_at": "2022-12-22T19:21:32.000Z",
  "discarded_at": null,
  "discarded": false,
  "interpolation": false,
  "owner": {
    "id": 1,
    "name": "John Doe"
  }
}
```

## Listing your collections

You can get a list of all collections which belong to you. [The list is paginated](intro.md#pagination).

<ApiEndpoint data={endpointData.index} />

```http title="Example request"
GET /api/v3/collections HTTP/2
Host: engine.energytransitionmodel.com
Accept: application/json
Authorization: Bearer YOUR_TOKEN
```

```json title="Example response"
{
  "collections": [
    {
      "id": 123,
      "scenario_ids": [12, 34, 56],
      "title": "My collection",
      "version_id": 1,
      "created_at": "2022-07-27T13:45:32.000Z",
      "updated_at": "2022-12-22T19:21:32.000Z",
      "discarded_at": null,
      "discarded": false,
      "interpolation": false,
      "owner": {
        "id": 1,
        "name": "John Doe"
      }
    },
    // ...
  ]
}
```

## Create a collection

Creating a collection will cause it to appear in your list and in the web application.

<ApiEndpoint data={endpointData.create} />

Before you can create a **collection**, you must [create the underlying **scenarios**](scenarios.md#create-a-scenario) or [**saved scenarios**](saved-scenarios#create-a-saved-scenario). The response will include the ID number of your new scenario. You may then create a collection as a second step, passing the scenario IDs:

```http title="Example request"
POST /api/v3/collections HTTP/2
Host: engine.energytransitionmodel.com
Accept: application/json
Authorization: Bearer YOUR_TOKEN

{
  "scenario_ids": [12, 34],
  "saved_scenario_ids": [3],
  "title": "My collection"
}
```

```json title="Example response"
{
  "id": 123,
  "scenario_ids": [12, 34],
  "saved_scenario_ids": [3],
  "title": "My collection",
  "version_id": 1,
  "created_at": "2022-07-27T13:45:32.000Z",
  "updated_at": "2022-12-22T19:21:32.000Z",
  "discarded_at": null,
  "discarded": false,
  "interpolation": false,
  "owner": {
    "id": 1,
    "name": "John Doe"
  }
}
```

## Update a collection

Update a collection by assigning new underlying scenarios and title.

<ApiEndpoint data={endpointData.update} />

```http title="Example request"
PUT /api/v3/collections/123 HTTP/2
Host: engine.energytransitionmodel.com
Accept: application/json
Authorization: Bearer YOUR_TOKEN

{
  "title": "A new title",
  "scenario_ids": [456, 789]
  "saved_scenario_ids": [22],
}
```

```json title="Example response"
{
  "id": 123,
  "scenario_ids": [456, 789],
  "saved_scenario_ids": [22],
  "title": "A new title",
  "version_id": 1,
  "created_at": "2022-12-23T19:21:32.000Z",
  "updated_at": "2022-12-23T19:22:38.000Z",
  "discarded_at": null,
  "discarded": false,
  "interpolation": false,
  "owner": {
    "id": 1,
    "name": "John Doe"
  }
}
```

## Delete a collection

collections may also be permanently deleted.

:::warning Deleting scenarios
Deleting a collection removes it from your list of paths in the web application. It does not delete the underlying scenarios. You may delete scenarios or saved scenarios owned by your account as a separate action; see [Deleting your scenarios](scenarios.md#deleting-your-scenarios) or [Delete a saved scenario](saved-scenarios#delete-a-saved-scenario).
:::

<ApiEndpoint data={endpointData.destroy} />

```http title="Example request"
DELETE /api/v3/collections/123 HTTP/2
Host: engine.energytransitionmodel.com
Authorization: Bearer YOUR_TOKEN
```
