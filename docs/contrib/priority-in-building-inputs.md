---
title: Priority in building and housing inputs
---

The housing and building stock, insulation and behaviour inputs (introduced in [quintel/etsource#3470](https://github.com/quintel/etsource/pull/3470)) update a lot of shared graph state: typical heat demand attributes, useful demand `preset_demand`, number of units, roof surface for PV, and more. Because ETEngine applies inputs one after another (see [Priority](inputs#priority) for the general mechanism), the **order** in which these inputs run matters. Running them in the wrong order silently produces incorrect results rather than an error.

This page documents the priority order used for these inputs, and the reasoning behind it, so that future additions or changes respect the same ordering.

## Priority order

Recall that **a higher `priority` number runs earlier**. The building/housing inputs use the following order (highest to lowest):

 **`priority = 4` — shares of new residences**
   * `households_share_of_apartments`
   * `households_share_of_detached`
   * `households_share_of_semi_detached`
   * `households_share_of_terraced`

   These inputs don't update anything themselves; they only need to have a value available (as a [share group](inputs#share-groups), summing to 100%) before the total number of new residences is distributed across housing types.


**`priority = 3` — number of new/demolished buildings and residences**
   * `households_number_of_residences_new`
   * `households_demolished_<period>`
   * `buildings_number_of_buildings_new`
   * `buildings_number_of_buildings_demolished`

   These read the shares set using priority 4 (via `INPUT_VALUE(...)`) to calculate, per housing type, the number of units added or removed, and update the number of units and useful demand accordingly.

 **`priority = 2` — weather curve set**
   * `settings_weather_curve_set`

   If the user selects a non-default weather year, this scales `preset_demand` for space heating and cooling using temperature/degree-day factors derived from that weather year, and marks `AREA(weather_curve_set)` as non-default. This must run after stock changes so it scales correctly.

4. **`priority = 1` — insulation**
   * `households_insulation_<period>`
   * `buildings_insulation_existing_buildings`
   * `buildings_insulation_new_buildings`

   These reduce the typical heat demand (`AREA()`) and `preset_demand` by the entered percentage, and use the resulting typical heat demand to (re)calculate insulation costs. This runs after the stock and weather updates so that insulation is applied to the correct, final number of units and to demand that has already been adjusted for the weather year.

5. **`priority = 0` — behaviour, outdoor temperature, and P2P flexibility**
   * `households_space_heating_behaviour`
   * `buildings_space_heating_behaviour`
   * `flexibility_outdoor_temperature`
   * `households_flexibility_p2p_electricity_market_penetration`

   These are the last things to run, changing already-calculated heat demands by a factor. Since nothing downstream depends on their output, their relative execution order among each other doesn't matter.

This order is also documented as a comment at the top of each of the relevant `.ad` files in etsource, so it stays visible to anyone editing them directly.

### Weather year overrides outdoor temperature

If the user selects a non-default weather curve set (`settings_weather_curve_set`), the `flexibility_outdoor_temperature` slider has **no effect at all**, even if a value for this was set.

This happens because `flexibility_outdoor_temperature.ad` explicitly checks whether a weather curve set has been applied, and does nothing if so:

```
- query =
    IF(
      EQUALS(AREA(weather_curve_set), "default"),
      -> { ...apply outdoor temperature factor to preset_demand... },
      -> {}
    )
- priority = 0
```

`settings_weather_curve_set` (priority 2) runs before `flexibility_outdoor_temperature` (priority 0) and, when the user picks a non-default weather set, sets `AREA(weather_curve_set)` to that weather set's name. By the time `flexibility_outdoor_temperature` runs, the condition `AREA(weather_curve_set) == "default"` is false, so its `IF` falls through to the empty branch and the slider is ignored.

In other words: **weather curve set and outdoor temperature are mutually exclusive**
