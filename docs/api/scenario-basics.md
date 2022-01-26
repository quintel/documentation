---
title: Scenario basics
---

import endpointData from '@site/data/api/scenario';
import ApiEndpoint from '@site/src/components/ApiEndpoint';

Here you can find the basics on creating a scenario through the API, requesting information on
touched sliders and setting sliders. For these operations the scenario endpoint is used.

## The Scenario object

All scenarios contain the following attributes, which will be part of any response from the
scenario endpoint:

* `id` - the numeric id of the scenario.
* `title` - an optional title, this is not used in the GUI.
* `area_code` - the identifier for the area.
* `start_year` - year the scenario starts.
* `end_year` - year the scenario ends.
* `url` - the url of the API endpoint for this scenario.
* `scaling` - object that contains details of custom scaling factors.
* `source` - source through which the scenario was created, can be 'API' or 'ETM'.
* `created_at` - date of creation.
* `updates_at` - date of last update.
* `protected` - default false, see [protected scenarios](#protected-scenarios)
* `esdl_exportable` - determines if the scenario can be exported as an ESDL file.

The following attributes will always be `null` unless the requested scenario was or used a
[preset scenario](#preset-scenarios):

* `template` - the id of the scenario that was used as a preset.
* `ordering` - the number in the order of preset scenarios.
* `display_group` - type of the preset scenario.

When [a truthy value of the `detailed` parameter](#the-detailed-parameter) is sent with the request, the following objects are also part of the response:

* `user_values` - object that contains the silders touched by a user in the scenario:
  * `slider_one` - the set value for slider_one.
  * `slider_two` - the set value for slider_two.
  * ...
* `metadata` - object that contains custom metadata managed by the user of the scenario

### Preset Scenarios

On [the ETM start page](https://pro.energytransitionmodel.com/#preset-scenario) you find a list of
featured scenarios that were created or commissioned by professional and governmental bodies.
Any of these scenarios can be used as a preset.

When using a preset, all attributes and user values as described above are copied to a new scenario.
All attached curves and heat- and flexibility orders are also cloned from the preset to the new scenario.
The cloning is done only when the scenario using the preset is created. This means that later changes
to the preset will not be reflected in the new scenario.

Next to the given list of available presets by the ETM, you may also use your own scenarios as a preset.
Also see the [create section](#create-a-scenario-based-on-another-scenario).

## Get information about an existing Scenario

Fetches all the attributes of the given scenario.

<ApiEndpoint data={endpointData.show} />

```http title="Example request"
GET /api/v3/scenarios/12345 HTTP/2
Host: engine.energytransitionmodel.com
Accept: application/json
```

```json title="Example response"
{
  "id": 12345,
  "title": "API",
  "area_code":"nl",
  "start_year": 2019,
  "end_year": 2050,
  "url": "https://engine.energytransitionmodel.com/api/v3/scenarios/12345",
  "ordering": null,
  "display_group": null,
  "scaling": null,
  "source": null,
  "template": null,
  "created_at": "2021-07-16T09:23:00.000Z",
  "updated_at": "2021-07-16T09:23:00.000Z",
  "protected": false,
  "esdl_exportable": null
}
```

### The `detailed` parameter

The information supplied by the GET request will by default not contain slider settings. Adding
the parameter `detailed` with a truthy value to the request will have the response include an extra
object called `user_values`. This object contains a key, value pair for each slider that has been touched.

The `metadata` object will also be included in the response when `detailed` is set to `true`. This
object can contain any data in JSON format up to 64Kb, and can be used to set custom values for the
scenario. Such as identifiers for other models, descriptions, or tags. The ETM will never touch this
object as it is purely meant as a place for users to store meta information about their scenario.

```http title="Example request"
GET /api/v3/scenarios/12345?detailed=true HTTP/2
Host: engine.energytransitionmodel.com
Accept: application/json
```

```json title="Example response"
{
  "id": 12345,
  "title": "API",
  "area_code": "nl",
  "start_year": 2019,
  "end_year": 2050,
  ...
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

## Create a Scenario

A scenario can be created in three ways: as a blank scenario for an area and end year, as a new scenario
with certain sliders set, or as a scenario based on another scenario (its preset). All creation
methods use a POST request on the scenario endpoint, but with different data.

### Create a blank Scenario

Creates a scenario where all sliders are at their default position. The following data can
be supplied:

* `area_code` - the code of the desired area, default: 'nl'
* `title` - title of the scenario, default: 'API'
* `end_year` - end year of the scenario, integer, default: 2050
* `source` - identifier for the application creating the scenario (highly recommended), default: null

<ApiEndpoint data={endpointData.create} />

```http title="Example request"
POST /api/v3/scenarios HTTP/2
Host: engine.energytransitionmodel.com
Accept: application/json

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
  "title": "API",
  "area_code":"UKNI01_northern_ireland",
  "start_year": 2018,
  "end_year": 2040,
  "url": "https://engine.energytransitionmodel.com/api/v3/scenarios/123456",
  "ordering": null,
  "display_group": null,
  "scaling": null,
  "source": null,
  "template": null,
  "created_at": "2021-07-16T09:23:00.000Z",
  "updated_at": "2021-07-16T09:23:00.000Z",
  "protected": false,
  "esdl_exportable": null
}
```

### Create a Scenario with slider settings

User values may also be provided on create in the `user_values` object. You can supply the `detailed`
parameter to see them reflected in the response.

<ApiEndpoint data={endpointData.create} />

```http title="Example request"
POST /api/v3/scenarios?detailed=true HTTP/2
Host: engine.energytransitionmodel.com
Accept: application/json

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
  "title": "API",
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

### Create a Scenario based on another Scenario

Creates a scenario with another scenario as [preset](#preset-scenarios). The only data that needs to
be provided for this action is:

* `scenario_id` - the ID of the scenario that is to be used as a preset

If an end year area code are provided next to the scenario ID, these will be ignored in favour
of the year and area of the preset.

<ApiEndpoint data={endpointData.create} />

```http title="Example request"
POST /api/v3/scenarios?detailed=true HTTP/2
Host: engine.energytransitionmodel.com
Accept: application/json

{
  "scenario": {
    "scenario_id": "11111"
  }
}
```

```json title="Example response"
{
  "id": 123456,
  "title": "API",
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

## Set sliders in a Scenario

:::info Available inputs
A list of all available sliders for the scenario, with their min and max values, can be retrieved
through the inputs endpoint: `GET /api/v3/scenarios/{scenario_id}/inputs`.
:::

Updates the user values of a scenario with the provided `user_values`. The `detailed` parameter
may also be supplied with the data.

<ApiEndpoint data={endpointData.update} />

```http title="Example request"
PUT /api/v3/scenarios/12345 HTTP/2
Host: engine.energytransitionmodel.com
Accept: application/json

{
  "scenario": {
    "user_values": {
      "buildings_insulation_level": 35.7
    }
  },
  "detailed": true
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

## Add meta information to a Scenario
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

{
  "scenario": {
    "metadata": {
      "my_tags": ["high_insulation", "hydro_river"],
      "my_identifier": 1010
    }
  },
  "detailed": true
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

## Protected scenarios

When you have finished fine-tuning your scenario you may mark it as protected by setting the `protected` attribute to true:

```http title="Example request"
PUT /api/v3/scenarios/12345 HTTP/2
Host: engine.energytransitionmodel.com
Accept: application/json

{
  "scenario": {
    "protected": true
  }
}
```

Protecting a scenario has two outcomes:

1. It ensures that the scenario remains compatible with future versions of the ETM. The ETM is periodically updated with new features, and we may make changes to your scenario to ensure that the choices you made are preserved.

  For example, if an input is renamed we will rename the slider value in your scenario to reflect this change. If an input were updated from having a value representing a percentage of demand to an absolute capacity value in MW, we will set the new MW value in your scenario such that the energy flows are as close as possible to those in your original scenario.

2. The scenario becomes read-only and may no longer be changed by yourself or any other third-party. This prevents someone else from changing your scenario without your knowledge.

:::warning Always mark important scenarios as protected
It is highly recommended that you protect scenarios that you wish to keep long-term. The ETM makes no guarantee about the availability or accuracy of old unprotected scenarios.
:::

You may set slider values at the same time as changing the scenario to be protected. Your updates will be applied and the scenario protected against any future changes:

```http2 title="Example request"
PUT /api/v3/scenarios/12345 HTTP/2
Host: engine.energytransitionmodel.com
Accept: application/json

{
  "scenario": {
    "protected": true,
    "user_values": {
      "buildings_insulation_level": 35.7
    }
  }
}
```

### Modifying a protected scenario

A protected scenario cannot be updated through the API, with attempts receiving a 403 Forbidden response. If you accidentally mark a scenario as protected and wish to make futher changes, you may [create a new clone of your protected scenario](#create-a-scenario-based-on-another-scenario). The clone will not be protected and will accept your updates.

## Query a Scenario

You can query a scenario using `gqueries`. These queries make calculations on the graph and return
values for the present (start year) and future (end year), as well as the unit used.

<ApiEndpoint data={endpointData.update} />

```http title="Example request"
PUT /api/v3/scenarios/12345 HTTP/2
Host: engine.energytransitionmodel.com
Accept: application/json

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
