---
title: Hydrogen
---

There is a growing interest in using hydrogen as energy carrier, for instance for heat production, electricity production, transport fuel or as a feedstock for the chemical industry. Hydrogen could be a solution to bridge the growing imbalance between energy demand and supply due to the increased volatile production of solar and wind electricity. 

With the ETM you can explore the role of hydrogen in the future energy system, using various options for hydrogen demand, supply, transport and storage to your energy scenario in the Supply > ['Hydrogen'](https://pro.energytransitionmodel.com/scenario/supply/hydrogen/hydrogen-production) sub-section. The ETM calculates the resulting hydrogen demand and supply in your scenario for every hour per year. To make sure that for each hour supply matches demand storage is used. 

This page contains more information about the options for hydrogen in the ETM. 

## Hydrogen Demand 

In the ETM you can use hydrogen for:

* district heating for households and buildings
* Heating demand for households and buildings
* heat production in industry and agriculture
* fertilizer production (as feedstock)
* transport (cars, busses, trucks, vans, ships and planes)
* electricity production (hydrogen gas turbines)
* Baseload export

Each of these options has its own hourly demand profile. For electricity production the demand profile is determined by the electricity market in your scenario. See [Merit Order](merit-order.md) for more information. In excess of Demand, the model uses back-up hydrogen export to ensure an hourly balance.

![Hourly hydrogen demand chart](/img/docs/20240314_hydrogen_demand.png)

## Hydrogen Production

You can set the installed capacities of various heating sources in the 'Supply' tab. The ETM distinguishes between two types of hydrogen sources:

* 'Must-run' sources
* Dispatchable sources


#### Must-run

'Must-run' sources include all hydrogen sources that supply hydrogen according to a pre-defined production curve, regardless of whether there is hydrogen demand at that moment. For example, hydrogen wind farms produce hydrogen when the wind is blowing even if there is no demand for hydrogen at that moment. The ETM models the following must-run sources:

* Must-run Steam methane reforming (SMR) 
* Must-run Steam methane reforming with CCS
* Must-run Autothermal reforming (ATR) 
* Must-run Autothermal reforming with CCS
* Must-run Ammonia reforming
* Biomass gasification
* Biomass gasifiction with CCS
* Dedicated H<sub>2</sub> production by offshore wind farms
* Dedicated H<sub>2</sub> production by solar PV farms
* Flexible H<sub>2</sub> production with electrolysis
* LH2 regasification
* LOHC reforming
* Import from abroad

SMR and biomass gasification are mature technologies that are used all over the world. In contrast, ammonia reforming and ATR are more novel technologies, that still require development to become commercially available. In the ETM it is assumed that the must-run variant of these technologies have a flat production profile, i.e. they produce a constant amount of hydrogen throughout the year.

Options 10 and 11, dedicated wind and solar farms, are renewable energy plants built solely for hydrogen production. These plants turn renewable electricity directly into hydrogen using electrolysis. To date, such dedicated plants are not (yet) used at a large scale. Their production profile is determined by solar and wind weather curves.

The ETM also allows you to install flexible production routes. SMR, ATR and ammonia reforming are the 3 hydrogen production technologies which can be installed as both must-run and flexible. Next to this, flexible electrolysers can be installed. This technology is also known as power-to-gas. See [Power-to-gas](electricity-conversion#power-to-gas) for more information. The flexible technoligies will produce hydrogen if the hourly electricity price is low enough. 

Finally you can choose to import hydrogen from abroad. Import is assumed to be constant throughout the year. You can specify the costs of imported hydrogen in the cost section and also adjust the CO<sub>2</sub> emissions of imported hydrogen. 

#### Dispatchable
Dispatchable hydrogen sources include all hydrogen sources that can be turned on and off at will. Their production profiles are determined dynamically: in a given hour, dispatchable hydrogen sources will only produce hydrogen if the demand in that hour exceeds supply of must-run sources. Dispatchables will switch on to ensure that supply matches demand. The ETM models the following dispatchable hydrogen sources:

* Flexible Steam methane reforming (SMR)
* Flexible Autothermal reforming (ATR) 
* Flexible Ammonia reforming 
* A back-up/emergency import

For each of these production routes you can set the installed capacity in the 'Hydrogen production' section. The only exception is the back-up import. The ETM automatically determines the required amount of hydrogen import capacity to ensure that supply always meet demand in every hour.

![Hourly hydrogen production chart](/img/docs/20240314_hydrogen_production.png)


## Hydrogen storage

The ETM calculates hydrogen demand and supply on an hourly-basis which makes it possible to identify moments of excess hydrogen production and shortages. To make sure that hydrogen supply matches demand throughout the year, excess hydrogen can be stored.
In the model, 2 hydrogen storage methods are available. 

* Hydrogen storage in depleted gas fields
* Hydrogen storage in salt caverns

Depleted gas fiels have a typical storage volume of 8 TWh and take 30 days to fill or deplete. Salt caverns have a typical storage volume of 0.25 TWh and take 10 days to fill or deplete. 

The ETM ensures that hydrogen supply matches demand for every hour per year in your scenario. It does so by automatically storing excess hydrogen production in a buffer, drawing from this buffer at demand peaks and by importing/exporting any shortage/excess of hydrogen. The costs for storage can be adjusted in the costs section.

![Hourly hydrogen storage chart](/img/docs/20240314_hydrogen_storage.png)

## Merit orders 

When multiple dispatchable sources and storage of hydrogen are installed, a hydrogen 'merit order' determines which source swithces on first. The back-up hydrogen import comes last ('lender of last resort'). By default, the 2 storage options are set first. 

!['Merit order of dispatchable hydrogen production'](/img/docs/20240314_hydrogen_merit_order_production.png)

Storage facilities of hydrogen represent both flexible supply as demand. For this reason, users can determine the order in which the storage methods must be used for flexible supply.

!['Merit order of dispatchable hydrogen demand'](/img/docs/20240314_hydrogen_merit_order_demand.png)

## Hydrogen transport

How will hydrogen be transported in the future? At the moment, two distribution methods seem to be the most viable: compressed hydrogen transport via pipelines and via trucks.

The ETM assumes that all hydrogen supply will be transported via pipelines. This option is relatively cheap, especially when tran distances are long, the volume of the distributed hydrogen is large and demand for hydrogen is concentrated. In addition, it is possible to set the share of hydrogen that will be distributed by trucks after pipeline transportation. Trucks are much more flexible than pipelines. They are suitable for delivering smaller quantities of hydrogen and for delivery to remote areas.

## Calculation principles

The ETM ensures that total hydrogen demand and supply per hour are equal for every scenario. You can set which flexible hydrogen production type should be used first when an imbalance occurs via the "Merit order of dispatchable hydrogen production". For the flexible hydrogen demand you can set the "Merit order of dispatchable hydrogen demand". As a last resort the model automatically exports any excess hydrogen production and imports any hydrogen deficits.


