---
id: move-scenarios-between-versions
title: "Move scenarios between versions: a step-by-step manual"
sidebar_label: Move scenarios between versions
---

This manual explains how to move a scenario from one model version to another, for example from `latest` to a stable version. For background on the different versions, see [Model versions](model-versions).

## Before you start

Scenarios are not moved between versions automatically. To move a scenario, for example from
`latest` to `2025-01`, you copy its slider settings and reuse them in a new scenario in the other version.
You can do this by setting each slider by hand, but this can be a lot of work.

The easiest way to do this is with the [API](../../api/intro). You can also use [PyETM](../PyETM/introduction),
which wraps the same API calls in Python. Every version of the model has its own API address:

| Version | API address |
|:---|:---|
| `#latest` | `https://engine.energytransitionmodel.com/api/v3` |
| `#2025-01` | `https://2025-01.engine.energytransitionmodel.com/api/v3` |
| `#stable-2027` | _available soon_ |

The same [personal access token](../../api/authentication) works for both `latest` and
the stable versions. A token is required if the new scenario should belong to your account.

## Step 1: Extract the slider settings of your existing scenario

Look up the ID of your scenario. You can find it in the scenario info in [My Scenarios](managing-scenarios/my-scenarios-menu). Then request the scenario from the version it was made in:

```sh
curl https://engine.energytransitionmodel.com/api/v3/scenarios/12345 \
  -H "Accept: application/json" \
  -H "Authorization: Bearer [YOUR_TOKEN]"
```

The response contains a `user_values` object. This object lists every slider you changed in the scenario, together with the value you set. Sliders you did not touch are not included, because they use their default values. Also note down the `area_code` and `end_year` of the scenario, because the new scenario needs them too.

```json title="Example response (shortened)"
{
  "id": 12345,
  "area_code": "nl2019",
  "end_year": 2050,
  ...
  "user_values": {
    "buildings_insulation_new_buildings": 40.3,
    "capacity_of_energy_power_hydro_river": 39.0
  }
}
```

See [Get information about a scenario](../../api/scenarios#get-information-about-a-scenario) for the full description of this request.

## Step 2: Create a scenario with the same slider settings in the other version

Send the `area_code`, `end_year` and `user_values` from step 1 to the API address of the version you want to move to. This creates a new scenario with the same slider settings:

```sh
curl -X POST https://2025-01.engine.energytransitionmodel.com/api/v3/scenarios \
  -H "Accept: application/json" \
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

The response contains the ID of the new scenario. Check that its `user_values` match the ones you sent. If an input in your list no longer exists in the target version, the API returns an error that names the input. See [Handling differences between versions](#handling-differences-between-versions) for how to solve this.

You can also create the new scenario first and set the sliders afterwards. See [Create a scenario with slider settings](../../api/scenarios#create-a-scenario-with-slider-settings) and [Set sliders in a scenario](../../api/scenarios#set-sliders-in-a-scenario) for details.

## Step 3: Save the new scenario

A scenario created through the API does not show up in My Scenarios automatically. To add it, create a saved scenario on the same API address, using the ID of the new scenario:

```sh
curl -X POST https://2025-01.engine.energytransitionmodel.com/api/v3/saved_scenarios \
  -H "Accept: application/json" \
  -H "Content-Type: application/json" \
  -H "Authorization: Bearer [YOUR_TOKEN]" \
  -d '{"saved_scenario": {"scenario_id": 67890, "title": "My scenario (2025-01)"}}'
```

See [Create a saved scenario](../../api/saved-scenarios#create-a-saved-scenario) for details.

:::info Settings that are not sliders
`user_values` contains only slider settings. If your scenario uses uploaded custom curves, or a changed heat network order or flexibility order, you have to set these again in the new scenario. You can do this in the model interface or through the API, see for example [Custom curves](../../api/custom-curves).
:::

## Handling differences between versions

How easy it is to move a scenario depends on how much the two versions differ.

**Right after a stable version is released**, moving a scenario is straightforward. A new stable version is a copy of `latest` at the moment of release. On the day of its release, a stable version is identical to `latest`. All slider names, units and functions are the same, so you can copy the `user_values` as they are.

**As time goes by**, `latest` keeps being updated every month, while the stable version stays the same. Sliders in `latest` may be:

* **renamed** - the old key no longer exists and has to be replaced by the new key;
* **added** - the new slider is not set in your old scenario, so it gets its default value;
* **deleted** - the setting can no longer be copied and has to be left out;
* **changed in function or unit** - for example from a percentage to a capacity in MW, so the value has to be converted before you copy it.

This does not mean that moving a scenario is no longer possible. It means that you have to check which sliders changed between the two versions, and adjust the `user_values` before you send them in step 2. To find out what changed:

1. Read the [release notes](../releases) or the Technical Newsletter (see [Communication](model-versions#communication)) for the months between the two versions.
2. Download the `changelog_inputs.csv` file linked in the release notes. For each changed input, it lists the deploy month, whether the input is new, renamed, changed or removed, the previous and new input key, the previous and new unit, and an explanation.
3. Look up each key in your `user_values` in the changelog. Replace renamed keys, convert values whose unit or function changed, and leave out deleted inputs.

After you create the new scenario, compare its main outcomes with those of the original scenario. Some differences are expected, because the model itself may have changed between the versions.
