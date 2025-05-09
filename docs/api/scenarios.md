---
title: Scenarios
---

import endpointData from '@site/data/api/scenario';
import ApiEndpoint from '@site/src/components/ApiEndpoint';
import { ReleaseBadge } from '@site/src/components/EnvBadge';
import UpcomingFeature from '@site/src/components/UpcomingFeature';

Here you can find the basics on creating a scenario through the API, requesting information on
touched sliders and setting sliders. For these operations the scenario endpoint is used.

## The Scenario object

All scenarios contain the following attributes, which will be part of any response from the
scenario endpoint:

* `id` - the numeric id of the scenario.
* `area_code` - the identifier for the area.
* `start_year` - year the scenario starts.
* `end_year` - year the scenario ends.
* `url` - the url of the API endpoint for this scenario.
* `scaling` - object that contains details of custom scaling factors.
* `source` - source through which the scenario was created.
* `created_at` - date of creation.
* `updated_at` - date of last update.
* `keep_compatible` - default false, see [forward compatibility](#forward-compatibility).
* `esdl_exportable` - determines if the scenario can be exported as an ESDL file.
* `active_couplings` - list of couplings that have been activated
* `inactive_couplings` - list of couplings that have been deactivated
* `template` - the id of the scenario that was used as a template, or null if no template was used.
* `metadata` - object that contains custom metadata managed by the user of the scenario.
* `private` - boolean that determines if the scenario is private or not.
* `user_values` - object that contains the sliders changed by a user:
  * `slider_one` - the set value for slider_one.
  * `slider_two` - the set value for slider_two.
  * ...

### Templates

On [the ETM start page](https://pro.energytransitionmodel.com/#preset-scenario) you find a list of
featured scenarios that were created or commissioned by professional and governmental bodies. Any of
these scenarios can be used as a preset.

When using a preset, all attributes and user values as described above are copied to a new scenario.
All attached curves and heat- and flexibility orders are also cloned from the preset to the new
scenario. The cloning is done only when the scenario using the preset is created. This means that
later changes to the preset will not be reflected in the new scenario.

Next to the given list of available presets by the ETM, you may also use your own scenarios as a
preset. Also see the [create section](#create-a-scenario-based-on-another-scenario).

### Authentication

It is highly recommended that you [use authentication](authentication.md) when working with
scenarios. When you create a scenario as an authenticated user it will be linked with your user
account. This means that by default:

* **Anyone** will be able to **read** the scenario
* **Only you** will be able to **change** the scenario
* **Only you** will be able to **delete** the scenario

If you prefer your scenario to be private, so that only you can read it, see the documentation on
[private scenarios](scenarios.md#private-scenarios). You may also change the default privacy of your
scenarios with the "Privacy" setting on
**[your profile page](https://engine.energytransitionmodel.com/identity/profile)**.

#### Using the API without authentication

If you do not use authentication when creating a scenario, it will be both readable **and writable**
by any other person using the API.

## Get information about a scenario

Fetches all the attributes of the given scenario.

<ApiEndpoint data={endpointData.show} />

```http title="Example request"
GET /api/v3/scenarios/12345 HTTP/2
Host: engine.energytransitionmodel.com
Accept: application/json
Authorization: Bearer YOUR_TOKEN
```

```json title="Example response"
{
  "id": 12345,
  "title": "API",
  "area_code":"nl",
  "start_year": 2019,
  "end_year": 2050,
  "url": "https://engine.energytransitionmodel.com/api/v3/scenarios/12345",
  "scaling": null,
  "source": null,
  "template": null,
  "created_at": "2021-07-16T09:23:00.000Z",
  "updated_at": "2021-07-16T09:23:00.000Z",
  "esdl_exportable": false,
  "active_couplings": [],
  "inactive_couplings": [],
  "user_values": {
    "buildings_insulation_level": 40.3,
    "capacity_of_energy_power_hydro_river": 39.0
  },
  "metadata": {
    "my_tags": ["high_insulation", "hydro_river"],
    "my_identifier": 1010,
    ...
  }
}
```

## Listing your scenarios

<UpcomingFeature release="2023.01" />

[When authenticated](authentication.md), you can get a list of all scenarios which belong to you. [The list is paginated](intro.md#pagination).

<ApiEndpoint data={endpointData.index} />

```http title="Example request"
GET /api/v3/scenarios HTTP/2
Host: engine.energytransitionmodel.com
Accept: application/json
Authorization: Bearer YOUR_TOKEN
```

```json title="Example response"
{
  "links": {
        "first": "https://engine.energytransitionmodel.com/api/v3/scenarios?page=1",
        "prev": null,
        "next": "https://engine.energytransitionmodel.com/api/v3/scenarios?page=2",
        "last": "https://engine.energytransitionmodel.com/api/v3/scenarios?page=4"
  },
  "meta": {
      "limit": 25,
      "count": 25,
      "total": 85,
      "current_page": 1,
      "total_pages": 4
  },
  "data": [
    {
      "id": 12345,
      "area_code":"nl",
      "start_year": 2019,
      "end_year": 2050,
      "url": "https://engine.energytransitionmodel.com/api/v3/scenarios/12345",
      "scaling": null,
      "source": null,
      "created_at": "2021-07-16T09:23:00.000Z",
      "updated_at": "2021-07-16T09:23:00.000Z",
      "esdl_exportable": false,
      "active_couplings": [],
      "inactive_couplings": [],
    },
    // ...
  ]
}
```

## Create a scenario

A scenario can be created in three ways: as a blank scenario for an area and end year, as a new
scenario with certain sliders set, or as a scenario based on another scenario (its preset). All
creation methods use a POST request on the scenario endpoint, but with different data.

### Create a blank scenario

Creates a scenario where all sliders are at their default position. The following data can
be supplied:

* `area_code` - the code of the desired area, default: 'nl'
* `end_year` - end year of the scenario, integer, default: 2050
* `source` - identifier for the application creating the scenario (highly recommended), default: null

<ApiEndpoint data={endpointData.create} />

```http title="Example request"
POST /api/v3/scenarios HTTP/2
Host: engine.energytransitionmodel.com
Accept: application/json
Authorization: Bearer YOUR_TOKEN

{
  "scenario": {
    "area_code": "UKNI01_northern_ireland",
    "end_year": "2040"
  }
}
```

```json title="Example response"
{
  "id": 123456,
  "area_code":"UKNI01_northern_ireland",
  "start_year": 2018,
  "end_year": 2040,
  "url": "https://engine.energytransitionmodel.com/api/v3/scenarios/123456",
  "scaling": null,
  "source": null,
  "template": null,
  "created_at": "2021-07-16T09:23:00.000Z",
  "updated_at": "2021-07-16T09:23:00.000Z",
  "esdl_exportable": false
}
```

### Create a scenario with slider settings

User values may also be provided on create in the `user_values` object.

<ApiEndpoint data={endpointData.create} />

```http title="Example request"
POST /api/v3/scenarios HTTP/2
Host: engine.energytransitionmodel.com
Accept: application/json
Authorization: Bearer YOUR_TOKEN

{
  "scenario": {
    "area_code": "UKNI01_northern_ireland",
    "end_year": "2040"
    "user_values": {
      "buildings_insulation_level": 40.3,
      "capacity_of_energy_power_hydro_river": 39.0
    }
  }
}
```

```json title="Example response"
{
  "id": 123456,
  "area_code":"UKNI01_northern_ireland",
  "start_year": 2018,
  "end_year": 2040,
  ...
  "user_values": {
    "buildings_insulation_level": 40.3,
    "capacity_of_energy_power_hydro_river": 39.0
  }
}
```

### Create a scenario based on another scenario

Creates a scenario with another scenario as [template](#templates). The only data that needs to
be provided for this action is:

* `scenario_id` - the ID of the scenario that is to be used as a preset

If an end year area code are provided next to the scenario ID, these will be ignored in favour
of the year and area of the preset.

<ApiEndpoint data={endpointData.create} />

```http title="Example request"
POST /api/v3/scenarios HTTP/2
Host: engine.energytransitionmodel.com
Accept: application/json
Authorization: Bearer YOUR_TOKEN

{
  "scenario": {
    "scenario_id": "11111"
  }
}
```

```json title="Example response"
{
  "id": 123456,
  "area_code":"nl",
  "start_year": 2019,
  "end_year": 2050,
  "url": "https://engine.energytransitionmodel.com/api/v3/scenarios/123456",
  ...
  "template": 11111,
  ...
  "user_values": {
    "buildings_insulation_level": 40.3,
    "capacity_of_energy_power_hydro_river": 39.0
  }
}
```

## Set sliders in a scenario

:::info Available inputs
A list of all available sliders for the scenario, with their min and max values, can be retrieved
through the inputs endpoint: `GET /api/v3/scenarios/{scenario_id}/inputs`.
:::

Updates the user values of a scenario with the provided `user_values`. If you want to reset a slider to its standard value, please supply the "reset" keyword instead of a value.

<ApiEndpoint data={endpointData.update} />

```http title="Example request"
PUT /api/v3/scenarios/12345 HTTP/2
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

```json title="Example response"
{
  "scenario": {
    "id": 12345,
    ...
    "user_values": {
      "buildings_insulation_level": 35.7,
      "capacity_of_energy_power_hydro_river": 39.0
    }
  }
}
```

:::warning Balancing groups
Some sliders are grouped in a 'share group' to together sum to 100%. An error will be returned if
you try to set all inputs in such a group without making sure the group still makes exactly 100.0.
:::

## Metadata

Updates the scenario metadata with a new metadata object.

The `metadata` object can contain any custom meta information about the scenario in JSON format up to
64Kb. Examples of user defined metadata can be: custom tags that a user wishes to give to a scenario,
internal identifiers (e.g. ID's from scenarios in other energy related models whose information was used in the
ETM scenario) or custom descriptions. Please mind that, as the ETM leaves managing this data up to the user,
the full metadata object of a scenario will be overwritten when a new metadata object is supplied in the
request. Also, when cloning a scenario the metadata will not be cloned to the new scenario.

Both `metadata` and `user_values` can be supplied with a request simultaneously.

<ApiEndpoint data={endpointData.update} />

```http title="Example request"
PUT /api/v3/scenarios/12345 HTTP/2
Host: engine.energytransitionmodel.com
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
    "id": 12345,
    ...
    "metadata": {
      "my_tags": ["high_insulation", "hydro_river"],
      "my_identifier": 1010
    }
  }
}
```

### Best practices

* A top-level `title` attribute can be used to name your scenario, with this title being used in select places in the Energy Transition Model.

  ```json
  {
    "scenario": {
      "metadata": {
        "title": "My scenario"
      }
    }
  }
  ```

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

## Forward compatibility

<UpcomingFeature release="2022.05" />

The ETM is frequently updated with new features and improvements. This sometimes means we rename sliders or change the unit in which they are set; as a result, your scenario risks becoming obsolete as the model changes.

If you need to continue using your scenario long-term, you may set the `keep_compatible` attribute to `true`. This will subject your scenario to automatic updates ensuring that it remains compatible with future versions of the model.

For example, if a slider is renamed, we will rename the slider value in your scenario to reflect this change. If it were to be updated from having a percentage value to an absolute capacity value in MW, we will set the new MW value in your scenario such that the energy flows are as close as possible to those in your original scenario.

:::warning Keep compatible
Not keeping your scenario compatible with newer model versions can cause the model to break or lead to unforeseen outcomes for your scenarios.
:::

```http title="Example request"
PUT /api/v3/scenarios/12345 HTTP/2
Host: engine.energytransitionmodel.com
Accept: application/json
Authorization: Bearer YOUR_TOKEN

{
  "scenario": {
    "keep_compatible": true
  }
}
```

## Private scenarios

<UpcomingFeature release="2023.01" />

If you are using authentication, your scenarios will be associated with your user account. This
prevents others from being able to change or delete your scenario but, by default, other people can
still view your scenario. If you wish to change this default, see the "Privacy" setting on
**[your profile page](https://engine.energytransitionmodel.com/identity/profile)**.

To make your scenario private, so that only you can view it, set the `private` attribute to `true`:

```http title="Example request"
PUT /api/v3/scenarios/12345 HTTP/2
Host: engine.energytransitionmodel.com
Accept: application/json
Authorization: Bearer YOUR_TOKEN

{
  "scenario": {
    "private": true
  }
}
```

```json title="Example response"
{
  "scenario": {
    "id": 12345,
    ...
    "private": true,
  }
}
```

## Query a scenario

You can query a scenario using `gqueries`. These queries make calculations on the graph and return
values for the present (start year) and future (end year), as well as the unit used.

<ApiEndpoint data={endpointData.update} />

```http title="Example request"
PUT /api/v3/scenarios/12345 HTTP/2
Host: engine.energytransitionmodel.com
Accept: application/json
Authorization: Bearer YOUR_TOKEN

{
  "gqueries": [
    "costs_of_insulation",
    "costs_of_capital_in_electricity_production"
  ]
}
```

```json title="Example response"
{
  "scenario": {
    ...
  },
  "gqueries": {
    "costs_of_insulation": {
      "present": 0.0,
      "future": 1234567.8,
      "unit": "euro"
    },
    "costs_of_capital_in_electricity_production": {
      "present": 1234567.8,
      "future": 2345678.9,
      "unit": "euro"
    }
  }
}
```

:::info Work-in-Progress
A list of all available gqueries is still being worked on.
:::

## Deleting your scenarios

<UpcomingFeature release="2023.01" />

[When authenticated](authentication.md), you can delete your scenarios. You cannot delete scenarios belonging to other users, or scenarios [which have no owner](authentication.md#using-the-api-without-authentication).

<ApiEndpoint data={endpointData.destroy} />

```http title="Example request"
DELETE /api/v3/scenarios/12345 HTTP/2
Host: engine.energytransitionmodel.com
Authorization: Bearer YOUR_TOKEN
```

## Scenario coupling

<UpcomingFeature release="2024.09" />

When your scenario is [coupled to another energy model](/main/external-coupling), certain inputs of your scenario are overwritten by this other model. When inspecting a scenario the `active_couplings` and `inactive_couplings` attributes will indicate whether your scenario was coupled, and which couplings are currently active.

To couple a new model, simply set [a coupling input](/main/external-coupling#coupling-external-inputs) and the coupled external model will become active automatically.

### Deactivating coupled models

A coupled external model can be deactivated by sending the following request
to the uncoupling endpoint.

<ApiEndpoint data={endpointData.uncouple} />

```http title="Example request"
POST /api/v3/scenarios/12345 HTTP/2
Host: engine.energytransitionmodel.com
Accept: application/json
Authorization: Bearer YOUR_TOKEN

{
  "groups": ["external_coupling_group_1"]
}
```

```json title="Example response"
{
  {
  "scenario": {
    "id": 12345,
    ...
    "active_couplings": [],
    "inactive_couplings": ["external_coupling_group_1"],
  }
}
}
```

### Activating coupled models

The couple endpoint can be used to (re)activate the coupled external model.

<ApiEndpoint data={endpointData.couple} />

```http title="Example request"
POST /api/v3/scenarios/12345 HTTP/2
Host: engine.energytransitionmodel.com
Accept: application/json
Authorization: Bearer YOUR_TOKEN

{
  "groups": ["external_coupling_group_1"]
}
```

```json title="Example response"
{
  {
  "scenario": {
    "id": 12345,
    ...
    "active_couplings": ["external_coupling_group_1"],
    "inactive_couplings": [],
  }
}
}
```
### Uncoupling coupled models

It is possible to permanently uncoupled the external model by setting `force` to `true`.
This means that the inputs set by the external model will be erased. This action is irreversible.

<ApiEndpoint data={endpointData.uncouple} />

```http title="Example request"
POST /api/v3/scenarios/12345 HTTP/2
Host: engine.energytransitionmodel.com
Accept: application/json
Authorization: Bearer YOUR_TOKEN

{
  "force": true
}
```

```json title="Example response"
{
  {
  "scenario": {
    "id": 12345,
    ...
    "active_couplings": [],
    "inactive_couplings": [],
  }
}
}
```
