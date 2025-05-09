---
title: Saved scenarios
---

import endpointData from '@site/data/api/saved-scenarios';
import ApiEndpoint from '@site/src/components/ApiEndpoint';
import UpcomingFeature from '@site/src/components/UpcomingFeature';

<UpcomingFeature release="2023.01" />

Those using [the ETM web application](https://energytransitionmodel.com/) can save scenarios to their account. These scenarios appear in [their saved scenario list](https://energytransitionmodel.com/saved_scenarios). Scenarios in this list are called **saved scenarios**.

The ETM provides an API for creating, updating, and removing scenarios from your list of saved scenarios.

## The SavedScenario object

All scenarios contain the following attributes, which will be part of any response from the
scenario endpoint:

* `id` - the numeric id of the saved scenario.
* `scenario_id` - the number id of [the underlying scenario](scenarios.md).
* `area_code` - the geographic area which the scenario represents.
* `end_year` - the year the scenario ends.
* `title` - the title of the saved scenario, shown in the list and when opening the scenario.
* `description` - optional long-form text which describes the scenario.
* `scenario_id_history` - an array containing up to 20 scenario IDs which represent previous versions of the scenario; see [Scenario ID history](#scenario-id-history)
* `private` - indicates if the saved scenario can only be viewed by its owner (`true`), or by everyone (`false`).
* `discarded` - whether the saved scenario appears in the trash (`true`) or the list of saved scenarios (`false`).
* `created_at` - the time at which the saved scenario was created.
* `updated_at` – the time when the saved scenario was most recently updated.
* `version` - the version associated with the saved scenario. See [model versions](docs/main/user_manual/model-versions.md) for more information.
* `scenario` - read-only information about the underlying scenario.
* `saved_scenario_users` - array about the users associated with the SavedScenario.
  * `id` - the user's unique ID number.
  * `role` - the user's [role](/main/user_manual/managing-scenarios/scenario-manage-access) with respect to the SavedScenario.

### Scenarios vs. saved scenarios

All of the information about the scenarios you create are stored and retrieved as Scenario objects, through [the scenarios API](scenarios.md). If you use the ETM exclusively through the API, you do not need to use the saved scenarios API. However, if you want a finished scenario to show up in your list of saved scenarios, you will need to also create a saved scenario which references the scenario you created.

<div class="bordered-image">
  <img src="/img/docs/api/saved-scenario-relation.png" alt="" width="415" height="205" />
</div>

### Scenario ID history

When the scenario is updated through the web interface, copies of the previous version of the scenario will be saved and added to the `scenario_id_history` list, and the `scenario_id` will be updated to point to a new scenario.

This list cannot be modified through the API, nor do changed to the underlying scenario through the API cause new versions to be added to this list.

## Getting information about a saved scenario

Fetch information about a saved scenario. This will include a copy of the information about the underlying scenario.

<ApiEndpoint data={endpointData.show} />

```http title="Example request"
GET /api/v3/saved_scenario/123 HTTP/2
Host: engine.energytransitionmodel.com
Accept: application/json
Authorization: Bearer YOUR_TOKEN
```

```json title="Example response"
{
  "id": 123,
  "scenario_id": 456789,
  "scenario_id_history": [
    456788
  ],
  "title": "My saved scenario",
  "area_code": "nl2019",
  "end_year": 2050,
  "private": false,
  "discarded_at": false,
  "created_at": "2022-07-27T13:45:32.000Z",
  "updated_at": "2022-12-22T19:21:32.000Z",
  "version": "latest",
  "saved_scenario_users": [
    {
  "user_id": 123,
  "role": "scenario_owner"
    }
  ],
  "scenario": {
    "id": 456789,
    "created_at": "2022-07-27T15:59:33.000Z",
    "updated_at": "2022-12-20T17:47:41.000Z",
    "user_values": {
      "households_number_of_inhabitants": 19.5,
      "households_useful_demand_for_cooling": 2.5
    },
    "end_year": 2050,
    "keep_compatible": true,
    "private": false,
    "area_code": "nl2019",
    "source": "ETM",
    "balanced_values": {},
    "metadata": {},
    "active_couplings": [],
    "start_year": 2019,
    "inactive_couplings": [],
    "scaling": null,
    "template": 123456,
    "url": "https://engine.energytransitionmodel.com/api/v3/scenarios/456789"
  }
}
```

## Listing your saved scenarios

You can get a list of all saved scenarios which belong to you. [The list is paginated](intro.md#pagination).

<ApiEndpoint data={endpointData.index} />

```http title="Example request"
GET /api/v3/saved_scenarios HTTP/2
Host: engine.energytransitionmodel.com
Accept: application/json
Authorization: Bearer YOUR_TOKEN
```

```json title="Example response"
{
  "links": {
        "first": "https://engine.energytransitionmodel.com/api/v3/saved_scenarios?page=1",
        "prev": null,
        "next": "https://engine.energytransitionmodel.com/api/v3/saved_scenarios?page=2",
        "last": "https://engine.energytransitionmodel.com/api/v3/saved_scenarios?page=3"
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
      "scenario_id": 456789,
      "scenario_id_history": [
        456788
      ],
      "title": "My saved scenario",
      "description": null,
      "area_code": "nl2019",
      "end_year": 2050,
      // ...
    },
    // ...
  ]
}
```

## Create a saved scenario

Creating a saved scenario will cause it to appear in your list of saved scenarios in the web application.

<ApiEndpoint data={endpointData.create} />

Before you can create a **saved scenario**, you must [create the underlying **scenario**](scenarios.md#create-a-scenario). The response will include the ID number of your new scenario. You may then create a saved scenario as a second step, passing the scenario ID:

```http title="Example request"
POST /api/v3/saved_scenarios HTTP/2
Host: engine.energytransitionmodel.com
Accept: application/json
Authorization: Bearer YOUR_TOKEN

{
  "scenario_id": 12345,
  "title": "My saved scenario"
}
```

```json title="Example response"
{
  "id": 123,
  "scenario_id": 12345,
  "scenario_id_history": [],
  "title": "My saved scenario",
  "description": null,
  "area_code": "nl2019",
  "end_year": 2050,
  "private": false,
  "discarded": false,
  "created_at": "2022-12-23T19:21:32.000Z",
  "updated_at": "2022-12-23T19:21:32.000Z",
  "saved_scenario_users": [
      {
        "id": 123,
        "role": "scenario_owner"
      }
    ],
  "scenario": {
    "id": 12345,
    // ...
  }
}
```

## Update a saved scenario

Update a saved scenario by assigning a new underlying scenario, title, or description.

<ApiEndpoint data={endpointData.update} />

```http title="Example request"
PUT /api/v3/saved_scenarios/123 HTTP/2
Host: engine.energytransitionmodel.com
Accept: application/json
Authorization: Bearer YOUR_TOKEN

{
  "title": "A new title",
  "scenario_id": 67890
}
```

```json title="Example response"
{
  "id": 123,
  "scenario_id": 67890,
  "scenario_id_history": [12345],
  "title": "A new title",
  "description": null,
  "area_code": "nl2019",
  "end_year": 2050,
  "private": false,
  "discarded": false,
  "created_at": "2022-12-23T19:21:32.000Z",
  "updated_at": "2022-12-23T19:22:38.000Z",
  "saved_scenario_users": [
      {
        "id": 123,
        "role": "scenario_owner"
      }
    ],
  "scenario": {
    "id": 67890,
    // ...
  }
}
```

## Update the underlying scenario

As described in [**scenarios vs. saved scenarios**](#scenarios-vs-saved-scenarios), a *saved* scenario is just a way to keep track of a scenario. It allows you to show it in your list of saved scenarios in the ETM web application. You cannot directly change the underlying scenario through the saved scenario.

However, the saved scenario does provide you with the ID of the scenario object, and with that you can perform any action you wish. See [the documentation for the scenario API](scenarios.md) for more information.

There are two approaches to updating the scenario itself:

### Update the scenario directly

<ol class="steps">
  <li>

**Fetch the saved scenario**

Start by [fetching the details of the saved scenario](#getting-information-about-a-saved-scenario). much of the information in the reply is not relevant when updating the scenario; we care only about the returned `scenario_id`.

```http title="Request"
GET /api/v3/saved_scenario/123 HTTP/2
Host: engine.energytransitionmodel.com
Accept: application/json
Authorization: Bearer YOUR_TOKEN
```

```json title="Response"
{
  "id": 123,
  // highlight-next-line
  "scenario_id": 456789,
  "scenario_id_history": [],
  "title": "My saved scenario",
  "description": null,
  // ...
}
```

  </li>
  <li>

**Update the scenario using the scenario ID.**

[Send a request to the API to update the scenario](scenarios.md#set-sliders-in-a-scenario) with whatever new values you want. You can also perform queries, get CSVs, or perform any other scenario action with the scenario ID. The above response returns a scenario ID of `456789` so we'll use that in the example below.

```http title="Request"
// highlight-next-line
PUT /api/v3/scenarios/456789 HTTP/2
Host: engine.energytransitionmodel.com
Accept: application/json
Authorization: Bearer YOUR_TOKEN

{
  "scenario": {
    "user_values": {
      "buildings_insulation_level": 35.7
    }
  }
}
```

  </li>
</ol>

Your scenario has now been updated with the new `user_value` settings.

This approach can be used for any action that you would normally perform on a scenario: fetch the saved scenario to get the `scenario_id`, then perform an action on the scenario. For example, to download the electricity price curve CSV, fetch the saved scenario, then perform a GET request on the scenario's CSV endpoint:

```bash
curl https://engine.energytransitionmodel.com/api/v3/scenarios/456789/curves/electricity_price.csv \
  -H "Accept: text/csv" \
  -H "Authorization: Bearer YOUR_TOKEN"
```

### Clone the scenario and update the saved scenario

An alternative to updating the scenario directly, is to create a clone of the scenario, modify that, then change the saved scenario to point to the new scenario.

This has the advantage of preserving the original scenario, and the saved scenario will track the most recent 20 scenarios used. This allows you to maintain a simple history of the changes you've made to the scenario.

<ol class="steps">
  <li>

**Fetch the saved scenario**

As before, we start by [fetching the details of the saved scenario](#getting-information-about-a-saved-scenario) in order to get the `scenario_id`.

```http title="Request"
GET /api/v3/saved_scenario/123 HTTP/2
Host: engine.energytransitionmodel.com
Accept: application/json
Authorization: Bearer YOUR_TOKEN
```

```json title="Response"
{
  "id": 123,
  // highlight-next-line
  "scenario_id": 123456,
  "scenario_id_history": [],
  "title": "My saved scenario",
  "description": null,
  // ...
}
```

The returned `scenario_id` is `123456`.

</li>
<li>

**Clone the scenario**

[Clone the scenario](scenarios.md#create-a-scenario-based-on-another-scenario) using the scenario ID. This will create a new scenario with the same settings as the original scenario.

```http title="Request"
POST /api/v3/scenarios HTTP/2
Host: engine.energytransitionmodel.com
Accept: application/json
Authorization: Bearer YOUR_TOKEN

{
  "scenario": {
    // highlight-next-line
    "scenario_id": "123456"
  }
}
```

```json title="Response"
{
  // highlight-next-line
  "id": 123457,
  "area_code":"nl",
  "start_year": 2019,
  "end_year": 2050,
  "user_values": {
    "buildings_insulation_level": 35.7
  }
  // ...
}
```

The API returns details of the new scenario, including the new scenario ID. In this example, the new scenario ID is `123457`.

</li>
<li>

**Update the scenario**

We'll now send a request to the API to update the scenario with whatever new values you want.

```http title="Request"
// highlight-next-line
PUT /api/v3/scenarios/123457 HTTP/2
Host: engine.energytransitionmodel.com
Accept: application/json
Authorization: Bearer YOUR_TOKEN

{
  "scenario": {
    "user_values": {
      "buildings_insulation_level": 42.0,
      "households_number_of_inhabitants": 18.3,
      "households_solar_pv_solar_radiation_market_penetration": 21.0
    }
  }
}
```

</li>
<li>

**Update the saved scenario**

Finally, we'll [update the saved scenario to point to the new scenario](#update-a-saved-scenario). This is done by sending a request to the API to update the saved scenario with the new scenario ID.

```http title="Request"
PUT /api/v3/saved_scenarios/123 HTTP/2
Host: engine.energytransitionmodel.com
Accept: application/json
Authorization: Bearer YOUR_TOKEN

{
  // highlight-next-line
  "scenario_id": 123457
}
```

```json title="Response"
{
  "id": 123,
  // highlight-start
  "scenario_id": 123457,
  "scenario_id_history": [123456],
  // highlight-end
  "title": "My saved scenario",
  "description": null,
  // ...
}
```

The saved scenario now points at your new scenario, and the the original scenario is preserved in the `scenario_id_history`.

</li>
</ol>

## Delete a saved scenario

Saved scenarios may also be permanently deleted. This actions skips moving the saved scenario to the trash and deletes it immediately.

:::warning Deleting scenarios
Deleting a saved scenario removes it from your list of saved scenarios in the web application. It does not delete the underlying scenario. You may delete scenarios owned by your account as a separate action; see [Deleting your scenarios](scenarios.md#deleting-your-scenarios).
:::

<ApiEndpoint data={endpointData.destroy} />

```http title="Example request"
DELETE /api/v3/saved_scenarios/123 HTTP/2
Host: engine.energytransitionmodel.com
Authorization: Bearer YOUR_TOKEN
```
