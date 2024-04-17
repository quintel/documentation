---
title: Hydrogen
---

There is a growing interest in using hydrogen as energy carrier, for instance for heat production, electricity production, transport fuel or as a feedstock for the chemical industry. Hydrogen could be a solution to bridge the growing imbalance between energy demand and supply due to the increased volatile production of solar and wind electricity. 

With the ETM you can explore the role of hydrogen in the future energy system, using various options for hydrogen demand, supply, transportation and storage to your energy scenario in the [Hydrogen](https://pro.energytransitionmodel.com/scenario/supply/hydrogen/hydrogen-production) section. 

This page contains more information about the options for modelling hydrogen in the ETM. 

## Hydrogen demand

Hydrogen demand is composed of inflexible and flexible hydrogen demand. 

### Inflexible demand
In the ETM, the inflexible hydrogen demand categories are the following:

* District heating for households and buildings
* Heating demand for households and buildings
* Heat production in industry and agriculture
* Fertilizer production (as feedstock)
* Transport (cars, buses, trucks, vans, ships and planes)
* Electricity production (hydrogen gas turbines)
* Baseload export

Each of these options has its own hourly demand profile. For electricity production the demand profile is determined by the electricity market in your scenario. See [Merit Order](merit-order.md) for more information. 

### Flexible demand
In case of overproduction by inflexible hydrogen supply (must-run producers), flexible hydrogen demand can be deployed to balance hydrogen supply and demand. Flexible demand is composed of:

* Salt caverns for hydrogen storage
* Depleted gas fields for hydrogen storage
* Back-up export

The storage technologies can function as flexible demand by storing overproduction of hydrogen from inflexible hydrogen producers. See [hydrogen storage](hydrogen.md#hydrogen-storage) for more information on the hydrogen storage technologies. As a last resort, the back-up export functions as flexible demand for the remaining overproduction of inflexible hydrogen supply.

The order in which the flexible demand categories are deployed can be altered in the merit order of dispatchable hydrogen demand. See [merit orders](hydrogen.md#merit-orders) for more information. 

![Hourly hydrogen demand chart](/img/docs/20240314_hydrogen_demand.png)

## Hydrogen production

Similar to hydrogen demand, the hydrogen sources are composed of inflexible sources (must-run sources) and flexible sources (dispatchable sources). 

### Must-run

Must-run sources include all hydrogen sources that supply hydrogen according to a pre-defined production curve, regardless of whether there is hydrogen demand at that moment. In this sense, these sources are considered inflexible sources of hydrogen. For example, hydrogen wind farms produce hydrogen when the wind is blowing even if there is no demand for hydrogen at that moment. The ETM contains the following must-run sources:

* Steam methane reforming (SMR) with or without CCS
* Autothermal reforming (ATR) with or without CCS
* Ammonia reforming
* Biomass gasification with or without CCS
* Dedicated H<sub>2</sub> production by offshore wind turbines
* Dedicated H<sub>2</sub> production by solar PV plants
* Flexible H<sub>2</sub> production with electrolysis
* LH2 regasification
* LOHC reforming
* Baseload import

SMR and biomass gasification are mature technologies that are used all over the world. In contrast, ammonia reforming and ATR are more novel technologies that still require development to become commercially available. In the ETM it is assumed that the must-run variant of these technologies have a flat production profile, i.e. they produce a constant amount of hydrogen throughout the year.

Dedicated wind turbines and solar PV plants are renewable energy plants built solely for hydrogen production. These plants turn renewable electricity directly into hydrogen using electrolysis. To date, such dedicated plants are not (yet) used at a large scale. Their production profile is determined by solar and wind weather curves.

The ETM also allows you to install a variety of hydrogen production routes. SMR, ATR and ammonia reforming are the three hydrogen production technologies which can be installed as both must-run and dispatchable. Next to this, flexible hydrogen production with electrolysers can be installed. This technology is also known as power-to-gas. See [Power-to-gas](electricity-conversion#power-to-gas) for more information. Power-to-gas will will produce hydrogen if the hourly electricity price is low enough. 

:::info Power-to-gas as inflexible producer
Whereas the name 'flexible hydrogen producer with electrolysis' might suggest that power-to-gas is a flexible hydrogen producer, this is not the case for the categorisation of hydrogen sources. Power-to-gas produces hydrogen when the electricity price is low, regardless of whether there is hydrogen demand at that moment. Therefore, this technology is categorised as an inflexible hydrogen producer. 
:::

Finally, you can choose to import hydrogen from abroad. Baseload import is assumed to be constant throughout the year. You can specify the costs of imported hydrogen in the [cost section](https://energytransitionmodel.com/scenario/costs/costs_hydrogen/hydrogen-import) and also adjust the [CO<sub>2</sub> emissions](https://energytransitionmodel.com/scenario/emissions/emission_factors/co2-emissions-of-imported-hydrogen-carriers-and-ammmonia) of imported hydrogen. 

### Dispatchable
Dispatchable hydrogen sources include all hydrogen sources that can be turned on and off at will. These sources are therefore considered flexible. Their production profiles are determined dynamically: in a given hour, dispatchable hydrogen sources will only produce hydrogen if the inflexible demand in that hour exceeds supply of must-run producers. Dispatchables will switch on to ensure that supply matches demand. The ETM models the following dispatchable hydrogen sources:

* Steam methane reforming (SMR)
* Autothermal reforming (ATR) 
* Ammonia reforming
* Salt caverns for hydrogen storage
* Depleted gas fields for hydrogen storage
* Back-up import

For SMR, ATR and ammonia reforming the dispatchable installed capacity can be set. Furthermore, in case of a shortage caused by inflexible hydrogen demand the storage technologies can function as a flexible hydrogen source by releasing stored hydrogen. See [hydrogen storage](hydrogen.md#hydrogen-storage) for more information on the hydrogen storage technologies. As a last resort, the back-up import functions as flexible supply for the remaining shortage caused by inflexible hydrogen demand.

The order in which the dispatchable sources of hydrogen are deployed can be altered in the merit order of dispatchable hydrogen producers. See [merit orders](hydrogen.md#merit-orders) for more information. 

![Hourly hydrogen production chart](/img/docs/20240314_hydrogen_production.png)

## Hydrogen storage

The ETM calculates inflexible hydrogen demand and inflexible supply on an hourly-basis which makes it possible to identify moments of excess hydrogen production and shortages. To make sure that hydrogen supply matches demand throughout the year, flexible demand and flexible supply can be deployed. Hydrogen storage technologies have the ability to be deployed as both flexible demand and supply. 

In the ETM, two hydrogen storage technologies are available:

* Salt caverns
* Depleted gas fields

Generally, salt caverns are better suited to deliver short-term flexibility while depleted gas fields can handle long-term flexibility better. The volume and relative capacity can be adjusted in the [hydrogen storage](https://energytransitionmodel.com/scenario/supply/hydrogen/hydrogen-storage) section. The costs for storage can be adjusted in the [costs section](https://energytransitionmodel.com/scenario/costs/costs_hydrogen/hydrogen-storage).

![Hourly hydrogen storage chart](/img/docs/20240314_hydrogen_storage.png)

## Merit orders 

The ETM ensures that total hydrogen demand and supply per hour are equal for every scenario. In case of overproduction or shortage caused by either inflexible supply or inflexible demand, flexible production technologies and flexible demand are deployed for balancing. A hydrogen 'merit order' for both flexible demand and supply determines the order in which the flexible demand and supply categories are switched in case of imbalance caused by inflexible demand or supply. The storage technologies can either function as flexible demand or flexible supply, and therefore are included in both merit orders. 

### Merit order of dispatchable production
In the merit order of dispatchable hydrogen production, the order of the following flexible producers can be set:
* Depleted gas fields for hydrogen storage
* Salt caverns for hydrogen storage
* Ammonia reforming (dispatchable)
* Autothermal reforming (dispatchable)
* Steam methane reforming (dispatchable)

The back-up hydrogen import comes last ('lender of last resort'). By default, the two hydrogen storage options are set first. 

!['Merit order of dispatchable hydrogen production'](/img/docs/20240314_hydrogen_merit_order_production.png)

### Merit order of dispatchable demand
The order of the following flexible demand options can be set in the merit order of dispatchable demand:
* Depleted gas fields for hydrogen storage
* Salt caverns for hydrogen storage

The back-up hydrogen export comes last. 

!['Merit order of dispatchable hydrogen demand'](/img/docs/20240314_hydrogen_merit_order_demand.png)

## Hydrogen transportation

How will hydrogen be transported in the future? At the moment, two distribution methods seem to be the most viable: compressed hydrogen transportation via pipelines and via trucks.

The ETM assumes that all hydrogen supply will be transported via pipelines. This option is relatively cheap, especially when transportation distances are long, the volume of the distributed hydrogen is large and demand for hydrogen is concentrated. In addition, it is possible to set the share of hydrogen that will be distributed by trucks after pipeline transportation. Trucks are much more flexible than pipelines. They are suitable for delivering smaller quantities of hydrogen and for delivery to remote areas.
