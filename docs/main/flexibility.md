---
title: Flexibility
---
## What is flexibility?

[Link to Flexibility section in ETM](https://pro.energytransitionmodel.com/scenario/flexibility/flexibility_overview/what-is-flexibility)

Natural patterns like seasons (yearly), the variations in weather (weekly), day and night and our rhythm of waking up, going to work, coming home, etc. cause both the need for energy and the availability of energy to fluctuate. Flexibility is about balancing energy supply and demand on all these timescales.

For longer timescales, the amount or volume of energy supplied or used is more interesting. For shorter timescales, the ability to produce or use a certain amount of energy is more interesting. This is called capacity.

Some forms of flexibility are more suite to process large (fluctuations in) volumes of energy, others are more suitable large fluctuations in capacity. Only some are suited to both. Some examples are:

Suitable for large (fluctuations in) volume
* Imports/exports of gas/hydrogen
* Power-to-gas: hydrogen production from excess power
* Storage of gas/hydrogen
* Seasonal storage of heat
* …

Suitable for large (fluctuations in) capacity
* Storage in lithium-ion batteries
* …

Suitable for both volume and capacity
* Imports/exports of electricity
* Power-to-heat: heat production from excess power (with heat storage)
* Curtailment of renewable power production
* …

On this page, you can see the ETM charts that we have added to show how supply and demand compare on various timescales. For these comparisons we deliberately do not show the contributions of flexibility technologies such as those mentioned above. Our intention is to only show the baseload demand and inflexible supply, meaning the demand and supply that is independent of other technologies in the energy system. This way, you can see how large the mismatch between supply and demand, and therefore, the need for flexibility is. For a full overview of the exact definitions of inflexible supply and baseload demand see the section [Definitions of inflexible supply and baseload demand](#definitions-of-inflexible-supply-and-baseload-demand)

Once you have evaluated the need for flexibility in your scenario, we invite you to address this need by tuning the amount of flexible technologies you have installed in your scenario, for example in the [Excess electricity](https://pro.energytransitionmodel.com/scenario/flexibility/excess_electricity/order-of-flexibility-options). An overview of these technologies in the can be found on the [Excess electricity documentation](excess-electricity.md).

## Chart 1: Monthly supply and demand volumes

![Chart 1: Monthly supply and demand volumes](/img/docs/20210202_Monthly_supply_and_demand_volumes.png)

This chart shows the monthly total <i>volumes</i> for supply and demand of electricity, gas, hydrogen and heat. This gives you insight into the balance of your energy system throughout the year: when does imbalance occur? Which carriers are not in balance?

## Chart 2: Imbalance of monthly supply and demand volumes

![Chart 2: Imbalance of monthly supply and demand volumes](/img/docs/20210202_Imbalance_of_monthly_supply_and_demand_volumes.png)

This chart shows the monthly imbalance between supply and demand <i>volumes</i> for electricity, gas,
hydrogen and heat. The imbalance is calculated by subtracting the baseload demand from the inflexible supply, this is called the "residual load". Negative values mean "surpluses" of energy and positive values "shortages". This chart gives insight into the balance of your energy system throughout the year: in which months does an imbalance occur? Which carriers are not in balance? Are these shortages or surpluses of energy?

## Chart 3: The need for flexibility: volume

![Chart 3: The need for flexibility: volume](/img/docs/20210202_The_need_for_flexibility_volume.png)

This chart gives a rough estimate for how much long-term flexibility (storage volume) is needed in your scenario. The blue (“uncorrected”) line in the chart is created by summing up the hourly imbalance for all relevant carriers at each hour. This curve is indicative because we do not take any losses of storage or conversion into account.

This curve gives a general impression of the extent to which the energy system is in balance over the year. In periods where demand exceeds supply (cold periods with no wind and little sunshine), the resulting curve dips as ‘storage’ gets depleted. In periods where supply is generally higher than demand (like sunny summer months), the curve rises again.

By comparing the start and end point of this line, you can see whether the system is in surplus or deficit on an annual basis. The absolute difference shows how much room there is for surplus storage or surplus conversion losses to make up for any shortages, or how large the shortage is that needs to be filled with additional energy production or imports.

The red (“corrected”) line shows the fluctuations in required storage volume if supply and demand would balance out over the year. This gives a rough estimate of your total required storage capacity to ensure that carriers can be used at the right time. This total required storage capacity can be read from the highest value of this line.

This line is obtained by subtracting the annual surplus/deficit from the blue line. Because the cumulative nature of the curve, the correction of first hour is added to the correction of the second hour etc. until the last hour is corrected to coincide with the level of the first hour.

## Chart 4: The need for flexibility: capacity

![Chart 4: The need for flexibility: capacity](/img/docs/20210202_The_need_for_flexibility_capacity.png)

This chart shows the monthly maximum <i>capacity</i> for supply and demand of electricity, gas, hydrogen and heat. This gives an indication of the capacity needed to deal with imbalance for each energy carrier. This capacity can be realized in the form of transport infrastructure or other flexibility options. For the electricity network the relation between transport infrastructure and flexibility options can be explored in more detail in the [Net load section in the ETM](https://pro.energytransitionmodel.com/scenario/flexibility/flexibility_net_load/peak-load-and-usable-capacity).

## Definitions of inflexible supply and baseload demand

For the comparisons in the flexibility charts above we deliberately do not show the contributions of flexibility technologies. Our intention is to only show the baseload demand and inflexible supply, meaning the demand and supply that is independent of other technologies in the energy system. This way, you can see how large the mismatch between supply and demand, and therefore, the need for flexibility is.

We define technologies as flexible when they are deployed to ensure the hourly balance of the <i>energy system</i>. Dispatchable power plants for example are considered flexible because they only produce electricity to the extent that electricity shortages exist, and therefor balance the electricity system. Because we are interested in the balance of the energy system as a whole, any technology that contributes to the balance of a single energy carrier is considered a flexible technology for all energy carriers. This means for example that power-to-heat, which contributes to the balance of the electricity system, is also considered a flexible technology for district heating. Finally, it is important to note that the categorization of technologies according to this definition, is done based on the representation of each technology in the ETM. For example, the import of natural gas can be seen as a flexible technology in reality, but in the ETM it is represented as a flat curve and it is therefore categorized as an inflexible technology.

### Electricity

See the [Flexibility → Excess electricity](https://pro.energytransitionmodel.com/scenario/flexibility/excess_electricity/order-of-flexibility-options) section of the model.

#### Inflexible suppply

* Includes:
  * Must-run / volatile: wind turbines, solar panels, hydro power, must-run nuclear plants
* Excludes:
  * Dispatchable power plants
  * Batteries discharging: household batteries, vehicle-to-grid, large-scale batteries, etc.
  * Import

#### Baseload demand

* Includes:
  * Final electricity demand in sectors
  * Must-run heat pumps / boilers for district heating
* Excludes:
  * Batteries charging: household batteries, vehicle-to-grid, large-scale batteries etc.
  * Conversion: power-to-hydrogen, power-to-heat (for industry or district heating)
  * Curtailment
  * Export

### Gas

#### Inflexible supply

* Includes:
  * Production green gas and LNG (flat curve)
  * Extraction natural gas (flat curve)
  * Import of natural gas (flat curve; constant import of gas to balance yearly production of gas)
* Excludes:
  * Gas from storage (in the ETM, gas is automatically buffered throughout the year)

#### Baseload demand

* Includes:
  * Final gas demand in sectors
  * Export of gas (flat curve; constant export of gas to balance yearly production of gas)
  * Distribution losses
* Excludes:
  * Gas used in dispatchable power plants and heat boilers for district heating
  * Gas entering storage (in the ETM, gas is automatically buffered throughout the year)

### Hydrogen

See the [Supply → Hydrogen](https://pro.energytransitionmodel.com/scenario/supply/hydrogen/hydrogen-production) section of the model.

#### Inflexible supply

* Includes:
  * Must-run / volatile: dedicated offshore wind turbine or solar PV plant for H2, steam methane reforming, biomass gasification
  * Import of hydrogen (flat curve; constant import of hydrogen to balance yearly production of hydrogen)
* Excludes:
  * Hydrogen from storage (in the ETM, hydrogen is automatically buffered throughout the year)
  * Hydrogen produced by power-to-gas

#### Baseload demand

* Includes:
  * Final hydrogen demand in sectors
  * Export of hydrogen (flat curve; constant export of hydrogen to balance yearly production of gas)
  * Distribution losses
* Excludes:
  * Hydrogen used in dispatchable power plants and heat boilers for district heating
  * Hydrogen entering storage (in the ETM, gas is automatically buffered throughout the year)

### District heating

See the [Supply → District heating](https://pro.energytransitionmodel.com/scenario/supply/heat/heat-sources) section of the model.

#### Inflexible supply

* Includes:
  * Must-run / volatile: solar thermal, residual heat from industry, geothermal heat
  * Import of heat (flat curve)
* Excludes:
  * Heat produced by power-to-heat
  * Heat produced by CHPs, as CHPs participate as dispatchable power plants in the electricity merit order
  * Dispatchable heat sources: collective heat pump, hydrogen heater, etc.
  * Heat from seasonal storage

#### Baseload demand

* Includes:
  * Final heat demand in sectors
  * Losses: distribution losses, heat surplus (wasted)
* Excludes:
  * Heat entering seasonal storage
