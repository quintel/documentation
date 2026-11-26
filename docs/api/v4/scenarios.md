---
title: Scenarios
---

import endpointData from '@site/data/api/v4/scenarios';
import engineData from '@site/data/api/scenario';
import ApiEndpoint from '@site/src/components/ApiEndpoint';

A scenario is what you save, share and list. Behind it is the calculation an engine holds for it, with its sliders, metadata and couplings. You reach the scenario at `/api/v4/saved_scenarios/{id}`, and its calculation at the same address with a trailing slash: `/api/v4/saved_scenarios/{id}/`.

## The Scenario object

All scenarios contain the following attributes, which will be part of any response about a scenario:

* `id` - the numeric ID of the scenario. It stays the same for as long as the scenario exists.
* `title` - the title of the scenario.
* `description` - a description of the scenario, or null.
* `scenario_id` - the ID of the scenario's current calculation. It changes every time the scenario is [saved](#save-a-scenario).
* `area_code` - the identifier for the area.
* `end_year` - year the scenario ends.
* `version` - the tag of the [model version](../../main/user_manual/model-versions.md) the scenario is calculated with.
* `private` - whether only the scenario's users can see it.
* `discarded_at` - when the scenario was [moved to the trash](#discard-and-restore-a-scenario), or null.
* `created_at` - date of creation.
* `updated_at` - date of last update.

### Authentication

Anyone can read a public scenario without a token. Everything else needs a [token](../authentication.md), and what the token can do also depends on your role on the scenario:

* **Viewers** can read the scenario, also when it is private.
* **Collaborators** can also change it: its sliders, metadata, title, description and privacy. They can also save it.
* **Owners** can also delete it, move it to the trash and back, and manage its users.

You are the owner of every scenario you create.

## Get information about a scenario

Fetches all the attributes of the given scenario.

<ApiEndpoint data={endpointData.show} />

```http title="Example request"
GET /api/v4/saved_scenarios/123 HTTP/2
Host: my.energytransitionmodel.com
Accept: application/json
Authorization: Bearer YOUR_TOKEN
```

```json title="Example response"
{
  "data": {
    "id": 123,
    "title": "My scenario",
    "description": null,
    "scenario_id": 98765,
    "area_code": "nl2023",
    "end_year": 2050,
    "version": "latest",
    "private": false,
    "discarded_at": null,
    "created_at": "2026-11-25T10:00:00.000Z",
    "updated_at": "2026-11-25T10:00:00.000Z"
  },
  "meta": {}
}
```

## Listing your scenarios

Lists the scenarios you have a role on, most recently updated first. Scenarios in the trash are left out. [The list is paginated](overview.md#pagination).

<ApiEndpoint data={endpointData.index} />

```http title="Example request"
GET /api/v4/saved_scenarios?page=1 HTTP/2
Host: my.energytransitionmodel.com
Accept: application/json
Authorization: Bearer YOUR_TOKEN
```

```json title="Example response"
{
  "data": [
    {
      "id": 123,
      "title": "My scenario",
      ...
    },
    ...
  ],
  "meta": {
    "pagination": { "page": 1, "limit": 25, "pages": 3, "count": 61 }
  }
}
```

## Create a scenario

A scenario can be created in three ways: as a blank scenario for an area and end year, as a scenario based on another scenario, or from a scenario you made through API v3. Each needs a `title` and the `version` to calculate it with, and answers `201 Created` with the new scenario.

### Create a blank scenario

Creates a scenario where all sliders are at their default position, for the given `area_code` and `end_year`. Once it exists, you can [set its sliders](#set-sliders-in-a-scenario).

<ApiEndpoint data={endpointData.create} />

```http title="Example request"
POST /api/v4/saved_scenarios HTTP/2
Host: my.energytransitionmodel.com
Accept: application/json
Authorization: Bearer YOUR_TOKEN

{
  "saved_scenario": {
    "title": "My scenario",
    "version": "latest",
    "area_code": "nl2023",
    "end_year": 2050
  }
}
```

```json title="Example response"
{
  "data": {
    "id": 123,
    "title": "My scenario",
    "description": null,
    "scenario_id": 98765,
    "area_code": "nl2023",
    "end_year": 2050,
    "version": "latest",
    "private": false,
    "discarded_at": null,
    "created_at": "2026-11-25T10:00:00.000Z",
    "updated_at": "2026-11-25T10:00:00.000Z"
  },
  "meta": {}
}
```

### Create a scenario based on another scenario

Creates a copy of a scenario you can read, given as `source`. The copy takes the source's sliders, curves and orders, but not its metadata. It is calculated with the source's version and area, so `version` must be the source's and `area_code` cannot be given. Unless you give `private`, the copy is as private as its source.

If you give an `end_year` other than the source's, the new scenario is [interpolated](../interpolation.md#how-the-interpolation-works) to that year from the source. To interpolate, the source must be public, or you must be its collaborator or owner.

<ApiEndpoint data={endpointData.create} />

```http title="Example request"
POST /api/v4/saved_scenarios HTTP/2
Host: my.energytransitionmodel.com
Accept: application/json
Authorization: Bearer YOUR_TOKEN

{
  "saved_scenario": {
    "title": "My scenario in 2040",
    "version": "latest",
    "source": 123,
    "end_year": 2040
  }
}
```

```json title="Example response"
{
  "data": {
    "id": 124,
    "title": "My scenario in 2040",
    "scenario_id": 98770,
    "area_code": "nl2023",
    "end_year": 2040,
    ...
  },
  "meta": {}
}
```

### Create a scenario from an API v3 scenario

A scenario you made through API v3 can become a scenario here: give its ID as `scenario_id`, with the `area_code` and `end_year` it was made with. You must be able to change it, and no other scenario may have it already. Otherwise the request is refused with `422 Unprocessable Entity`, pointing at `scenario_id`.

<ApiEndpoint data={endpointData.create} />

```http title="Example request"
POST /api/v4/saved_scenarios HTTP/2
Host: my.energytransitionmodel.com
Accept: application/json
Authorization: Bearer YOUR_TOKEN

{
  "saved_scenario": {
    "title": "My scenario",
    "version": "latest",
    "scenario_id": 98765,
    "area_code": "nl2023",
    "end_year": 2050
  }
}
```

## Get information about a scenario's calculation

Fetches the calculation behind a scenario, as its engine holds it. Its `id` is the scenario's `scenario_id`, and its `url` is its address in API v3. The other attributes are described with API v3's [Scenario object](../scenarios.md#the-scenario-object).

<ApiEndpoint data={engineData.show} api="v4" />

```http title="Example request"
GET /api/v4/saved_scenarios/123/ HTTP/2
Host: my.energytransitionmodel.com
Accept: application/json
Authorization: Bearer YOUR_TOKEN
```

```json title="Example response"
{
  "id": 98765,
  "area_code": "nl2023",
  "end_year": 2050,
  "source": null,
  "private": false,
  "keep_compatible": true,
  "bound": true,
  "created_at": "2026-11-25T10:00:00.000Z",
  "updated_at": "2026-11-25T10:00:00.000Z",
  "user_values": {
    "buildings_insulation_new_buildings": 40.3,
    "capacity_of_energy_power_hydro_river": 39.0
  },
  "balanced_values": {},
  "metadata": {
    "saved_scenario_id": 123
  },
  "active_couplings": [],
  "start_year": 2023,
  "inactive_couplings": [],
  "scaling": null,
  "template": null,
  "url": "https://engine.energytransitionmodel.com/api/v3/scenarios/98765"
}
```

## Set sliders in a scenario

:::info Available inputs
A list of all available sliders for the scenario, with their min and max values, can be retrieved through the [inputs endpoint](inputs.md): `GET /api/v4/saved_scenarios/{id}/inputs`.
:::

Updates the user values of a scenario's calculation with the provided `user_values`. If you want to reset a slider to its standard value, please supply the "reset" keyword instead of a value. The change applies straight away: [saving](#save-a-scenario) keeps a snapshot of the scenario as it is.

<ApiEndpoint data={engineData.update} api="v4" />

```http title="Example request"
PUT /api/v4/saved_scenarios/123/ HTTP/2
Host: my.energytransitionmodel.com
Accept: application/json
Authorization: Bearer YOUR_TOKEN

{
  "scenario": {
    "user_values": {
      "buildings_insulation_new_buildings": 35.7
    }
  }
}
```

```json title="Example response"
{
  "scenario": {
    "id": 98765,
    ...
    "user_values": {
      "buildings_insulation_new_buildings": 35.7,
      "capacity_of_energy_power_hydro_river": 39.0
    }
  },
  "gqueries": {}
}
```

:::warning Balancing groups
Some sliders are grouped in a 'share group' to together sum to 100%. An error will be returned if you try to set all inputs in such a group without making sure the group still makes exactly 100.0.
:::

## Metadata

Updates the metadata of a scenario's calculation with a new metadata object.

The `metadata` object can contain any custom meta information about the scenario in JSON format up to 64Kb. Examples of user defined metadata can be: custom tags that a user wishes to give to a scenario, internal identifiers (e.g. ID's from scenarios in other energy related models whose information was used in the ETM scenario) or custom descriptions. Please mind that, as the ETM leaves managing this data up to the user, the full metadata object will be overwritten when a new metadata object is supplied in the request. Also, when creating a scenario based on another scenario, the metadata is not copied to the new scenario.

Both `metadata` and `user_values` can be supplied with a request simultaneously.

<ApiEndpoint data={engineData.update} api="v4" />

```http title="Example request"
PUT /api/v4/saved_scenarios/123/ HTTP/2
Host: my.energytransitionmodel.com
Accept: application/json
Authorization: Bearer YOUR_TOKEN

{
  "scenario": {
    "metadata": {
      "my_tags": ["high_insulation", "hydro_river"],
      "my_identifier": 1010
    }
  }
}
```

```json title="Example response"
{
  "scenario": {
    "id": 98765,
    ...
    "metadata": {
      "my_tags": ["high_insulation", "hydro_river"],
      "my_identifier": 1010
    }
  },
  "gqueries": {}
}
```

### Best practices

* If you are a developer integrating your model with the ETM, consider namespacing your attributes to avoid collisions with those set by other third-party services.

  ```json
  {
    "scenario": {
      "metadata": {
        "org.example.my-app": {
          "id": 1337,
          "tags": ["high-renewability", "hydro"]
        }
      }
    }
  }
  ```

## Update a scenario

Updates a scenario's `title`, `description` or privacy. Making a scenario private also makes the snapshots in its history private, so that only the scenario's users can see them.

<ApiEndpoint data={endpointData.update} />

```http title="Example request"
PUT /api/v4/saved_scenarios/123 HTTP/2
Host: my.energytransitionmodel.com
Accept: application/json
Authorization: Bearer YOUR_TOKEN

{
  "saved_scenario": {
    "private": true
  }
}
```

```json title="Example response"
{
  "data": {
    "id": 123,
    "title": "My scenario",
    ...
    "private": true,
    ...
  },
  "meta": {}
}
```

## Query a scenario

You can query a scenario using `gqueries`. These queries make calculations on the graph and return values for the present (start year) and future (end year), as well as the unit used. API v3 [lists the available gqueries](../gqueries.md).

<ApiEndpoint data={engineData.update} api="v4" />

```http title="Example request"
PUT /api/v4/saved_scenarios/123/ HTTP/2
Host: my.energytransitionmodel.com
Accept: application/json
Authorization: Bearer YOUR_TOKEN

{
  "gqueries": [
    "dashboard_total_costs",
    "dashboard_renewability"
  ]
}
```

```json title="Example response"
{
  "scenario": {
    ...
  },
  "gqueries": {
    "dashboard_total_costs": {
      "present": 63.2,
      "future": 58.9,
      "unit": "bln_euro"
    },
    "dashboard_renewability": {
      "present": 0.12,
      "future": 0.67,
      "unit": "factor"
    }
  }
}
```

## Save a scenario

Keeps the scenario's current calculation as a snapshot in its [history](../../main/user_manual/managing-scenarios/scenario-history.md), and carries on with a copy of it. The scenario keeps its `id`, and its `scenario_id` becomes the copy's. A scenario keeps up to 100 snapshots: saving beyond that drops the oldest.

<ApiEndpoint data={endpointData.snapshot} />

```http title="Example request"
POST /api/v4/saved_scenarios/123/snapshots HTTP/2
Host: my.energytransitionmodel.com
Accept: application/json
Authorization: Bearer YOUR_TOKEN
```

```json title="Example response"
{
  "data": {
    "id": 123,
    "title": "My scenario",
    "scenario_id": 98766,
    ...
  },
  "meta": {}
}
```

## Discard and restore a scenario

Discarding moves a scenario to the [trash](../../main/user_manual/managing-scenarios/my-scenarios-menu.md#trash), which leaves it out of your list. It can be restored for 60 days, after which it is deleted for good. While it is in the trash, its engine endpoints, saving it and adding users to it answer `409 Conflict` with `scenario_discarded`.

<ApiEndpoint data={endpointData.discard} />

```http title="Example request"
PUT /api/v4/saved_scenarios/123/discard HTTP/2
Host: my.energytransitionmodel.com
Accept: application/json
Authorization: Bearer YOUR_TOKEN
```

```json title="Example response"
{
  "data": {
    "id": 123,
    ...
    "discarded_at": "2026-11-26T10:00:00.000Z",
    ...
  },
  "meta": {}
}
```

Restoring brings a scenario back from the trash.

<ApiEndpoint data={endpointData.restore} />

```http title="Example request"
PUT /api/v4/saved_scenarios/123/restore HTTP/2
Host: my.energytransitionmodel.com
Accept: application/json
Authorization: Bearer YOUR_TOKEN
```

## Deleting your scenarios

Deletes a scenario and its history for good. Only its owners can delete it.

<ApiEndpoint data={endpointData.destroy} />

```http title="Example request"
DELETE /api/v4/saved_scenarios/123 HTTP/2
Host: my.energytransitionmodel.com
Authorization: Bearer YOUR_TOKEN
```

```http title="Example response"
HTTP/2 204 No Content
```

## Scenario coupling

When your scenario is [coupled to another energy model](/main/external-coupling), certain inputs of your scenario are overwritten by this other model. When getting [a scenario's calculation](#get-information-about-a-scenarios-calculation), the `active_couplings` and `inactive_couplings` attributes will indicate whether your scenario was coupled, and which couplings are currently active.

To couple a new model, simply set [a coupling input](/main/external-coupling#coupling-external-inputs) and the coupled external model will become active automatically.

### Deactivating coupled models

A coupled external model can be deactivated by sending the following request to the uncoupling endpoint.

<ApiEndpoint data={engineData.uncouple} api="v4" />

```http title="Example request"
POST /api/v4/saved_scenarios/123/uncouple HTTP/2
Host: my.energytransitionmodel.com
Accept: application/json
Authorization: Bearer YOUR_TOKEN

{
  "groups": ["external_coupling_group_1"]
}
```

```json title="Example response"
{
  "id": 98765,
  ...
  "active_couplings": [],
  "inactive_couplings": ["external_coupling_group_1"]
}
```

### Activating coupled models

The couple endpoint can be used to (re)activate the coupled external model.

<ApiEndpoint data={engineData.couple} api="v4" />

```http title="Example request"
POST /api/v4/saved_scenarios/123/couple HTTP/2
Host: my.energytransitionmodel.com
Accept: application/json
Authorization: Bearer YOUR_TOKEN

{
  "groups": ["external_coupling_group_1"]
}
```

```json title="Example response"
{
  "id": 98765,
  ...
  "active_couplings": ["external_coupling_group_1"],
  "inactive_couplings": []
}
```

### Uncoupling coupled models

It is possible to permanently uncouple the external model by setting `force` to `true`. This means that the inputs set by the external model will be erased. This action is irreversible.

<ApiEndpoint data={engineData.uncouple} api="v4" />

```http title="Example request"
POST /api/v4/saved_scenarios/123/uncouple HTTP/2
Host: my.energytransitionmodel.com
Accept: application/json
Authorization: Bearer YOUR_TOKEN

{
  "force": true
}
```

```json title="Example response"
{
  "scenario": {
    "id": 98765,
    ...
  },
  "gqueries": {}
}
```
