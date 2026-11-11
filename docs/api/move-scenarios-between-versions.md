---
id: move-scenarios-between-versions
title: Move scenarios between versions
---

This guide shows how to copy the slider settings of a scenario to a new scenario in another model version, in three requests. For background, see [Model versions](../main/user_manual/model-versions#move-scenarios-between-versions).

Each version of the model has its own API address. Your [personal access token](authentication) works for all of them.

| Version | API address |
|:---|:---|
| `#latest` | `https://engine.energytransitionmodel.com/api/v3` |
| `#2027-stable` | _available soon_ |
| `#2025-01` | `https://2025-01.engine.energytransitionmodel.com/api/v3` |

The examples below move scenario `12345` from `#latest` to `#2025-01`.

## Step 1: Get the slider settings

Request your scenario from the version it was made in. You can find its ID in [My Scenarios](../main/user_manual/managing-scenarios/my-scenarios-menu).

```sh
curl https://engine.energytransitionmodel.com/api/v3/scenarios/12345 \
  -H "Authorization: Bearer [YOUR_TOKEN]"
```

From the response, you need the `area_code`, the `end_year` and the `user_values`, which lists every slider you changed:

```json title="Example response (shortened)"
{
  "id": 12345,
  "area_code": "nl2019",
  "end_year": 2050,
  "user_values": {
    "buildings_insulation_new_buildings": 40.3,
    "capacity_of_energy_power_hydro_river": 39.0
  }
}
```

## Step 2: Create the new scenario

Send these values to the API address of the other version:

```sh
curl -X POST https://2025-01.engine.energytransitionmodel.com/api/v3/scenarios \
  -H "Content-Type: application/json" \
  -H "Authorization: Bearer [YOUR_TOKEN]" \
  -d '{
    "scenario": {
      "area_code": "nl2019",
      "end_year": 2050,
      "user_values": {
        "buildings_insulation_new_buildings": 40.3,
        "capacity_of_energy_power_hydro_river": 39.0
      }
    }
  }'
```

The response contains the ID of the new scenario. If a slider does not exist in the other version, you get an error naming it. See [Differences between versions](#differences-between-versions).

## Step 3: Save the new scenario

To make the new scenario show up in My Scenarios, save it using its ID:

```sh
curl -X POST https://2025-01.engine.energytransitionmodel.com/api/v3/saved_scenarios \
  -H "Content-Type: application/json" \
  -H "Authorization: Bearer [YOUR_TOKEN]" \
  -d '{"saved_scenario": {"scenario_id": 67890, "title": "My scenario (2025-01)"}}'
```

Custom curves and changed heat network or flexibility orders are not copied. Set these again in the new scenario, for example through [Custom curves](custom-curves).

## Differences between versions

If sliders were renamed, changed or removed between the two versions, adjust the `user_values` before step 2. The `changelog_inputs.csv` file linked in the [release notes](../main/releases) lists every changed slider with its old and new key and unit.

For the full description of each request, see [Scenarios](scenarios) and [Saved scenarios](saved-scenarios).
