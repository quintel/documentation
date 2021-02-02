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

For the comparisons in the flexibility charts above we deliberately do not show the contributions of flexibility technologies. Our intention is to only show the baseload demand and inflexible supply, meaning the demand and supply that is independent of other technologies in the energy system. This way, you can see how large the mismatch between supply and demand, and therefore, the need for flexibility is. For a full overview of exact definitions of inflexible supply and baseload demand see the table below.

| | Inflexible supply | Baseload demand |
| --- | --- | --- |
| Electricity <br/><br/>[Link to excess electricity section in ETM](https://pro.energytransitionmodel.com/scenario/flexibility/excess_electricity/order-of-flexibility-options)              | Includes:<br/>\- Must-run / volatile: wind turbines, solar panels, hydro power, must-run nuclear plants<br/><br/>Excludes:<br/>\- Dispatchable electricity plants<br/>\- Batteries discharging: household batteries, vehicle-to-grid, large-scale batteries, etc.                                                                                                                                                         | Includes:<br/>\- Final electricity demand in sectors<br/>\- Must-run heat pumps / boilers for district heating<br/><br/>Excludes:<br/>\- Storage: batteries charging<br/>\- Conversion: conversion to hydrogen (P2G), conversion to heat (P2H for industry or district heating)<br/>\- Curtailment<br/>\- Export                                                                                 |
| Gas                       | Includes:<br/>\- Production green gas and LNG (flat curve)<br/>\- Extraction natural gas (flat curve)<br/>\- Import of natural gas (flat curve; constant import of gas to balance yearly production of gas)<br/><br/>Excludes:<br/>\- Gas from storage (in the ETM, gas is automatically buffered throughout the year)                                                                                     | Includes:<br/>\- Final gas demand in sectors<br/>\- Export of gas (flat curve; constant export of gas to balance yearly production of gas)<br/>\- Distribution losses<br/><br/>Excludes:<br/>\- Gas used in dispatchable power plants and heat boilers for district heating<br/>\- Gas entering storage (in the ETM, gas is automatically buffered throughout the year)                         |
| Hydrogen <br/><br/>[Link to hydrogen section in ETM](https://pro.energytransitionmodel.com/scenario/supply/hydrogen/hydrogen-production)                  | Includes:<br/>\- Must-run / volatile: windmolen op zee voor H2, solar PV plant for H2, steam methane reforming, biomass gasification<br/>\- Import of hydrogen (flat curve; constant import of hydrogen to balance yearly production of hydrogen)<br/><br/>Excludes:<br/>\- Hydrogen from storage (in the ETM, hydrogen is automatically buffered throughout the year)<br/>\- Hydrogen produced by power-to-gas | Includes<br/>\- Final hydrogen demand in sectors<br/>\- Export of hydrogen (flat curve; constant export of hydrogen to balance yearly production of gas)<br/>\- Distribution losses<br/><br/>Excludes:<br/>\- Hydrogen used in dispatchable power plants and heat boilers for district heating<br/>\- Hydrogen entering storage (in the ETM, gas is automatically buffered throughout the year) |
| Heat for district heating <br/><br/>[Link to district heating section in ETM](https://pro.energytransitionmodel.com/scenario/supply/heat/heat-sources)  | Includes:<br/>\- Must-run / volatile: solar thermal, residual heat from industry, geothermal heat, constant import of heat<br/><br/>Excludes:<br/>\- Heat from seasonal storage<br/>\- Heat produced by power-to-heat<br/>\- Heat produced by CHPs, as CHPs participate as dispatchable power plants in the electricity merit order<br/>\- All dispatchable heat sources: collective heat pump, hydrogen heater, etc.                                        | Includes:<br/>\- Final heat demand in sectors<br/>\- Losses: distribution losses, heat surplus (wasted)<br/><br/>Excludes:<br/>\- Heat entering seasonal storage                                                                                                                                                                                                                              |