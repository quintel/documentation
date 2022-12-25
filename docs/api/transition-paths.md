---
title: Transition paths
---

import endpointData from '@site/data/api/transition-paths';
import ApiEndpoint from '@site/src/components/ApiEndpoint';
import UpcomingFeature from '@site/src/components/UpcomingFeature';

<UpcomingFeature release="2023.01" />

The ETM's [Transition Paths](https://energytransitionmodel.com/multi_year_charts) feature can be used by providing scenario IDs directly to the URL. However, in order for them to appear in your list, you can use the API to create persisted transition paths.

The ETM provides an API for creating, updating, and removing transition paths from your account.

## The TransitionPath object

All scenarios contain the following attributes, which will be part of any response from the
scenario endpoint:

* `id` - the numeric id of the transition path.
* `scenario_ids` - the list of [scenarios](scenarios.md) in the transition path.
* `area_code` - the geographic area which the transition path represents.
* `end_year` - the year the original scenario.
* `title` - the title of the transition path, shown in the list.
* `owner` - information about the owner of the TransitionPath.
  * `id` - the owner's unique ID number
  * `name` - the owner's name

## Getting information about a transition path

Fetch information about a transition path.

<ApiEndpoint data={endpointData.show} />

```http title="Example request"
GET /api/v3/transition_paths/123 HTTP/2
Host: engine.energytransitionmodel.com
Accept: application/json
Authorization: Bearer YOUR_TOKEN
```

```json title="Example response"
{
  "id": 123,
  "scenario_ids": [12, 34, 56],
  "title": "My transition path",
  "area_code": "nl2019",
  "end_year": 2050,
  "created_at": "2022-07-27T13:45:32.000Z",
  "updated_at": "2022-12-22T19:21:32.000Z",
  "owner": {
    "id": 1,
    "name": "John Doe"
  }
}
```

## Listing your transitions paths

You can get a list of all transition paths which belong to you. [The list is paginated](intro.md#pagination).

<ApiEndpoint data={endpointData.index} />

```http title="Example request"
GET /api/v3/transition_paths HTTP/2
Host: engine.energytransitionmodel.com
Accept: application/json
Authorization: Bearer YOUR_TOKEN
```

```json title="Example response"
{
  "links": {
        "first": "https://engine.energytransitionmodel.com/api/v3/transition_paths?page=1",
        "prev": null,
        "next": "https://engine.energytransitionmodel.com/api/v3/transition_paths?page=2",
        "last": "https://engine.energytransitionmodel.com/api/v3/transition_paths?page=3"
  },
  "meta": {
      "limit": 25,
      "count": 25,
      "total": 65,
      "current_page": 1,
      "total_pages": 3
  },
  "data": [
    {
      "id": 123,
      "scenario_ids": [12, 34, 56],
      "title": "My transition path",
      "area_code": "nl2019",
      "end_year": 2050,
      "created_at": "2022-07-27T13:45:32.000Z",
      "updated_at": "2022-12-22T19:21:32.000Z",
      "owner": {
        "id": 1,
        "name": "John Doe"
      }
    },
    // ...
  ]
}
```

## Create a transition path

Creating a transition path will cause it to appear in your list of in the web application.

<ApiEndpoint data={endpointData.create} />

Before you can create a **transition path**, you must [create the underlying **scenarios**](scenarios.md#create-a-scenario). The response will include the ID number of your new scenario. You may then create a transition oath as a second step, passing the scenario IDs:

```http title="Example request"
POST /api/v3/transition_paths HTTP/2
Host: engine.energytransitionmodel.com
Accept: application/json
Authorization: Bearer YOUR_TOKEN

{
  "scenario_ids": [12, 34],
  "title": "My transition path"
}
```

```json title="Example response"
{
  "id": 123,
  "scenario_ids": [12, 34],
  "title": "My transition path",
  "area_code": "nl2019",
  "end_year": 2050,
  "created_at": "2022-07-27T13:45:32.000Z",
  "updated_at": "2022-12-22T19:21:32.000Z",
  "owner": {
    "id": 1,
    "name": "John Doe"
  }
}
```

## Update a transition path

Update a transition path by assigning new underlying scenarios and title.

<ApiEndpoint data={endpointData.update} />

```http title="Example request"
PUT /api/v3/transition_paths/123 HTTP/2
Host: engine.energytransitionmodel.com
Accept: application/json
Authorization: Bearer YOUR_TOKEN

{
  "title": "A new title",
  "scenario_ids": [456, 789]
}
```

```json title="Example response"
{
  "id": 123,
  "scenario_ids": [456, 789],
  "title": "A new title",
  "area_code": "nl2019",
  "end_year": 2050,
  "created_at": "2022-12-23T19:21:32.000Z",
  "updated_at": "2022-12-23T19:22:38.000Z",
  "owner": {
    "id": 1,
    "name": "John Doe"
  }
}
```

## Delete a transition path

Transition paths may also be permanently deleted.

:::warning Deleting scenarios
Deleting a transition path removes it from your list of paths in the web application. It does not delete the underlying scenario. You may delete scenarios owned by your account as a separate action; see [Deleting your scenarios](scenarios.md#deleting-your-scenarios).
:::

<ApiEndpoint data={endpointData.destroy} />

```http title="Example request"
DELETE /api/v3/transition_paths/123 HTTP/2
Host: engine.energytransitionmodel.com
Authorization: Bearer YOUR_TOKEN
```
