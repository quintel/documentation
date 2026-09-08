---
title: Collections
---

import endpointData from '@site/data/api/collections';
import ApiEndpoint from '@site/src/components/ApiEndpoint';
import UpcomingFeature from '@site/src/components/UpcomingFeature';

<UpcomingFeature release="2023.01" />

The ETM's [Collections](https://energytransitionmodel.com/multi_year_charts) feature shows a collection by its ID. Use this API to create persisted collections, so that they appear in your list and can be opened in the viewer.

Instead of a collection, the viewer can also show a comparison of a selection of [saved scenarios](saved-scenarios.md). With this endpoint you may also create such a persisted collection.

The ETM provides an API for creating, updating, and removing collections from your account.

## The Collection object

All collections contain the following attributes, which will be part of any response from the
collection endpoint:

* `id` - the numeric id of the collection.
* `title` - the title of the collection, shown in the list.
* `version` - the version associated with the collection. See [model versions](docs/main/user_manual/model-versions.md) for more information.
* `scenario_ids` - the list of [scenarios](scenarios.md) in the collection.
* `saved_scenario_ids` - the list of [saved scenarios](saved-scenarios.md) in the collection.
* `scenarios` - every scenario in the collection, in the order they are shown. Read-only; change the contents of a collection with `scenario_ids` and `saved_scenario_ids`. Each entry pairs a scenario with the saved scenario it came from:
  * `saved_scenario_id` - the ID of the [saved scenario](saved-scenarios.md), or `null` for scenarios the collection holds directly.
  * `scenario_id` - the ID of the corresponding [scenario](scenarios.md).
  * `title` - the saved scenario's title, or `null` for scenarios the collection holds directly.
* `collections_app_url` - url to access the collection in the collections app.
* `created_at` - date of creation.
* `updated_at` - date of last update.
* `discarded_at` - date it was discarded.
* `discarded` - specifies weather the collection has been discarded.
* `interpolation` - specifies whether the collection is a transition path.
* `interpolation_params` - information if the collection is a transition path:
  * `area_code` - the identifier for the area.
  * `end_years` - the end years of the collection's saved scenarios. Scenarios held directly record no end year and are not listed.
* `owner` - information about the owner of the collection:
  * `id` - the owner's unique ID number.
  * `name` - the owner's name.

:::info Transition path parameters
`area_code` is the collection's own `area_code`: a top-level parameter, auto-filled from the saved scenarios when a transition path is created. `end_years` is read from the collection's saved scenarios.
:::

:::info Transition paths
A transition path holds one saved scenario per end year, each named after the collection and that year, for example `My collection (Interpolated 2030)`. Some older transition paths hold their interpolated scenarios directly instead: those list them in `scenario_ids`, with only the source scenario in `saved_scenario_ids`.

This endpoint does not interpolate. Setting `interpolation` marks the scenarios you pass as a transition path, which must hold no more than one scenario per end year, and whose saved scenarios must all share one area.
:::

## Getting information about a collection

Fetch information about a collection.

:::info Who can read a collection
A collection is readable by its owner, and by anyone who can read every [scenario](scenarios.md) in it. A collection holding a scenario you may not read is not returned at all.

Collections created with only `scenario_ids` and no saved scenarios are readable by their owner only.
:::

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
  "title": "My collection",
  "version": "latest",
  "scenario_ids": [],
  "saved_scenario_ids": [5, 6, 7],
  "scenarios": [
    { "saved_scenario_id": 5, "scenario_id": 12, "title": "My collection (Interpolated 2030)" },
    { "saved_scenario_id": 6, "scenario_id": 34, "title": "My collection (Interpolated 2040)" },
    { "saved_scenario_id": 7, "scenario_id": 56, "title": "My collection" }
  ],
  "collections_app_url": "https://collections.energytransitionmodel.com/collections/123?locale=en",
  "created_at": "2022-07-27T13:45:32.000Z",
  "updated_at": "2022-12-22T19:21:32.000Z",
  "discarded_at": null,
  "discarded": false,
  "interpolation": true,
  "interpolation_params": {
    "area_code": "nl2023",
    "end_years": [2030, 2040, 2050]
  },
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
      "id": 12,
      "title": "My collection",
      "version": "latest",
      "scenario_ids": [],
      "saved_scenario_ids": [1, 2, 3],
      "scenarios": [
        { "saved_scenario_id": 1, "scenario_id": 11, "title": "My saved scenario" },
        { "saved_scenario_id": 2, "scenario_id": 22, "title": "My second saved scenario" },
        { "saved_scenario_id": 3, "scenario_id": 33, "title": "My third saved scenario" }
      ],
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

:::info Auto-filled attributes
The API automatically fills in `version` for all collections. For transition paths (`interpolation: true`) with saved scenarios, `area_code` and `end_year` are also auto-filled from the saved scenarios if not explicitly provided.
:::

```http title="Example request"
POST /api/v3/collections HTTP/2
Host: engine.energytransitionmodel.com
Accept: application/json
Authorization: Bearer YOUR_TOKEN

{
  "title": "My collection",
  "scenario_ids": [12, 34],
  "saved_scenario_ids": [5, 6],
  "discarded": false
}
```

```json title="Example response"
{
  "id": 123,
  "title": "My collection",
  "version": "latest",
  "scenario_ids": [12, 34],
  "saved_scenario_ids": [5, 6],
  "scenarios": [
    { "saved_scenario_id": null, "scenario_id": 12, "title": null },
    { "saved_scenario_id": null, "scenario_id": 34, "title": null },
    { "saved_scenario_id": 5, "scenario_id": 56, "title": "My saved scenario" },
    { "saved_scenario_id": 6, "scenario_id": 78, "title": "My second saved scenario" }
  ],
  "collections_app_url": "https://collections.energytransitionmodel.com/collections/123?locale=en",
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
  "scenario_ids": [45, 67],
  "saved_scenario_ids": [89],
  "discarded": false
}
```

```json title="Example response"
{
  "id": 123,
  "title": "A new title",
  "version": "latest",
  "scenario_ids": [45, 67],
  "saved_scenario_ids": [89],
  "scenarios": [
    { "saved_scenario_id": null, "scenario_id": 45, "title": null },
    { "saved_scenario_id": null, "scenario_id": 67, "title": null },
    { "saved_scenario_id": 89, "scenario_id": 90, "title": "My saved scenario" }
  ],
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

:::info Managing discarded collections
You can move a collection to the trash by setting `discarded: true` when creating or updating it. To restore a collection from trash, update it with `discarded: false`. This allows you to manage your collections without permanently deleting them.
:::

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
