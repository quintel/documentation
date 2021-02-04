---
title: Hydrogen
---

There is a growing interest in using hydrogen as energy carrier, for instance for heat production, electricity production, transport fuel or as a feedstock for the chemical industry. Hydrogen could be a solution to bridge the growing imbalance between energy demand and supply due to the increased volatile production of solar and wind electricity. 

The ETM allows you to explore a future hydrogen economy by allowing you to add various options for hydrogen demand, supply, transport and storage to your energy scenario in the Supply > ['Hydrogen'](https://pro.energytransitionmodel.com/scenario/supply/hydrogen/hydrogen-production) sub-section. The ETM calculates the resulting hydrogen demand and supply in your scenario for every hour per year. To make sure that for each hour supply matches demand storage buffers are used. 

This page contains more information about the options for hydrogen in the ETM. 

## Hydrogen production

Several hydrogen production routes are implemented in the ETM:

1. Steam methane reforming (SMR)
2. Steam methane reforming with CCS
3. Biomass gasification
4. Biomass gasifiction with CCS
5. Dedicated H<sub>2</sub> production by offshore wind farms
6. Dedicated H<sub>2</sub> production by solar PV farms
7. H2 production from excess electricity
8. Import from abroad

SMR biomass gasification are mature technologies that are used all over the world. In the ETM it is assumed that these technologies have a flat production profile, i.e. they produce a constant amount of hydrogen throughout the year.

Options 4 and 5, dedicated wind and solar farms are renewable energy plants, built solely for hydrogen production, that turn renewable electricity directly into hydrogen using electrolysis. To date such dedicated plants are not (yet) used at a large scale. The production profile is determined by solar and wind weather curves.

The ETM also allows you to turn excess electricity into hydrogen. In scenarios with a lot of renewable electricity generation capacity there will likely be moments during the year at which electricity production exceeds electricity demand. To avoid curtailment or costly transportation of this electricity it can be turned into hydrogen using electrolysis (power-to-gas).

Finally you can choose to import hydrogen from abroad. Import is assumed to be constant throughout the year. You can specify the costs of imported hydrogen in the cost section and also adjust the CO<sub>2</sub> emissions of imported hydrogen. Note that if the total year demand of hydrogen in your scenario exceeds supply, hydrogen will be imported automatically to avoid shortages.

![Hourly hydrogen production chart](/img/docs/20181002_hydrogen_production.png)

## Hydrogen demand

The ETM allows you to explore a future hydrogen economy by allowing you to use hydrogen for:

* district heating for households and buildings
* heat production in industry and agriculture
* fertilizer production (as feedstock)
* transport vehicles (cars, busses and trucks)
* electricity production (hydrogen gas turbines)

Each of these options has its own hourly demand profile. For electricity production the demand profile is determined by the electricity market in your scenario. See [Merit Order](merit-order.md) for more information.

![Hourly hydrogen demand chart](/img/docs/20181002_hydrogen_demand.png)

## Hydrogen storage

The ETM calculates hydrogen demand and supply on an hourly-basis which makes it possible to identify moments of excess hydrogen production and shortages. To make sure that hydrogen supply matches demand throughout the year, excess hydrogen can be stored. Different hydrogen storage methods are available around the world, of which underground hydrogen storage in salt caverns is already used for different industrial purposes in the US and the UK. Storage in salt caverns is interesting due to the large quantities that can be stored, the low accompanied costs and low leakage into surrounding areas.

The ETM ensures that hydrogen supply matches demand for every hour per year in your scenario. It does so by automatically storing excess hydrogen production in a buffer, drawing from this buffer at demand peaks and by importing/exporting any shortage/excess of hydrogen. The costs for storage can be adjusted in the costs section.

![Hourly hydrogen storage chart](/img/docs/20181002_hydrogen_storage.png)

## Hydrogen transport

How will hydrogen be transported in the future? At the moment, two distribution methods seem to be the most viable: compressed hydrogen transport via pipelines and via trucks.

Transport via pipelines can be relatively cheap, especially if distribution distances are long, the volume of the distributed hydrogen is large and demand for hydrogen is concentrated. Trucks, on the other hand, are much more flexible than pipelines. They are suitable for delivering smaller quantities of hydrogen and for delivery to remote areas.

The ETM allows you to choose the percentage of total hydrogen supply in your scenario that is transported by pipelines and by trucks. The costs of both technologies can be adjusted in the costs section.

## Calculation principles

The ETM ensures that total hydrogen demand and supply per year are equal for every scenario. It does so by automatically exporting any excess hydrogen production and importing any hydrogen deficits. To make sure that hydrogen supply and demand are also balanced on an hourly basis the ETM automatically adds a hydrogen storage buffer to your scenario. If hydrogen supply exceeds demand at a given hour hydrogen is put in the storage for later use. If demand exceeds supply hydrogen is drawn from the storage to avoid deficits.

![Yearly hydrogen demand and supply chart](/img/docs/20181002_hydrogen_mekko.png)


