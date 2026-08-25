---
title: Built environment inputs priority
---

The housing and building stock, insulation, behaviour and weather inputs all influence the heat demand.
Because ETEngine applies inputs one after another (see [Priority](inputs#priority) for the general mechanism), the **order** in which these inputs run matters.
Running them in the wrong order silently produces incorrect results rather than an error.

This page documents the priority order used for these inputs, and the reasoning behind it, so that future additions or changes respect the same ordering.
These priorities order is also documented as a comment at the top of each of the relevant `.ad` files in etsource, so it stays visible to anyone editing them directly.

## Priorities

Recall that **a higher `priority` number runs earlier**. The building/housing inputs use the following order (highest to lowest):

#### 4. Shares of new residences

   * `households_share_of_<housing_type>`

   These inputs don't update anything themselves; they only need to have a value available (as a [share group](inputs#share-groups), summing to 100%) before the total number of new residences is distributed across housing types.


#### 3. Building and housing stock

   * `households_number_of_residences_new`
   * `households_demolished_<construction_period>`
   * `buildings_number_of_buildings_new`
   * `buildings_number_of_buildings_demolished`

   These read the shares set using priority 4 (via `INPUT_VALUE(...)`) to calculate, per housing type, the number of units added or removed, and update the number of units and useful demand per building type and construction period accordingly. These inputs also update the total roof area available for PV, and the total cooling demand as they are dependant on the total number of buildings.

 #### 2. Weather years

   * `settings_weather_curve_set`

   If the user selects a non-default weather year, this scales `preset_demand` for space heating and cooling using temperature/degree-day factors derived from that weather year, and marks `AREA(weather_curve_set)` as non-default. This must run after stock changes so it scales correctly.

:::info Weather years override temperature input

If the user selects a non-default weather year (`settings_weather_curve_set`), the `flexibility_outdoor_temperature` slider has **no effect at all**, even though the temperature with priority 0 is set after the weather years with priority 2. This happens because temperature input explicitly checks whether a weather year has been selected, and does nothing when this is the case
:::

#### 1. Insulation

   * `households_insulation_<construction_period>`
   * `buildings_insulation_existing_buildings`
   * `buildings_insulation_new_buildings`

   These reduce the typical heat demand (`AREA()`) and `preset_demand` by the entered percentage, and use the resulting typical heat demand to (re)calculate insulation costs. This runs after the stock and weather updates so that insulation is applied to the correct, final number of units and to demand that has already been adjusted for the weather year.

#### 0. Behaviour, temperature and batteries

   * `households_space_heating_behaviour`
   * `buildings_space_heating_behaviour`
   * `flexibility_outdoor_temperature`
   * `households_flexibility_p2p_electricity_market_penetration`

   These are the last things to run, changing already-calculated heat demands by a factor. Their relative execution order doesn't matter.
   The total number of households batteries is also calculated based on the market penetration and the total number of households.

:::info Custom profiles for air temperature

If a user uploads a custom temperature curve in the _Modify profiles_ it sets the _Outdoor temperature_ slider based on the temperature profile in the back-end and de-activates the slider in the front-end.
