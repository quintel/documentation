---
title: Main principles
---

In the ETM the total greenhouse gas emissions for both the present and future are calculated for scenarios. This page contains extra information on the modelling principles behind carbon emissions in the ETM.

## Emission categories
The ETM make a distinction between four 'types' of greenhouse gas emissions:
1. **Energetic CO<sub>2</sub> emissions**. These emissions are calculated by the ETM based on the energy use in your scenario. In other words, they are the result of the choices made in the [Demand](https://pro.energytransitionmodel.com/scenario/demand/households/population-and-housing-stock) and [Supply](https://pro.energytransitionmodel.com/scenario/supply/electricity/coal-plants) sections of the model.
2. **Non-energetic CO<sub>2</sub> emissions**. These emissions are given as an input to the ETM. For the future year, you can make assumptions about the growth or decline of these emissions in the [Emissions](https://pro.energytransitionmodel.com/scenario/emissions/other_emissions/overview) section of the ETM. There are two exceptions to this category: non-energetic CO<sub>2</sub> in the [Fertilizer industry](https://pro.energytransitionmodel.com/scenario/demand/industry/fertilizers) and from the use of hydrogen and ammonia feedstock (e.g. in the [Chemicals](https://pro.energytransitionmodel.com/scenario/demand/industry/chemicals) industry) are calculated dynamically by the ETM based on energy demand and supply.
3. **Energetic other greenhouse gas emissions**. For example methane and nitrous oxide. These emissions are given as an input to the ETM. For the future year, you can make assumptions about the growth or decline of these emissions in the [Emissions](https://pro.energytransitionmodel.com/scenario/emissions/other_emissions/overview) section of the ETM. This means that these emissions are **not** adjusted automatically by the ETM if changes are made to energy supply and demand.
4. **Non-energetic other greenhouse gas emissions**. For example methane and nitrous oxide. These emissions are given as an input to the ETM. For the future year, you can make assumptions about the growth or decline of these emissions in the [Emissions](https://pro.energytransitionmodel.com/scenario/emissions/other_emissions/overview) section of the ETM.

## Modelling principles
To calculate the energetic CO<sub>2</sub> emissions in your scenario (category 1), the ETM assumes the following principles:

* Emissions are assigned to the sector energy is _used_ in, rather than the _location_ of emissions. This means that emissions related to the production of, for example, electricity are attributed to all sectors using electricity (households, industry etc.) rather than to the power sector. Read more about how emissions are calculated [here](#calculation-of-primary-co2-emissions). A consequence of this approach is that the ETM by default _does_ take into account emissions of imported energy carriers (imported ammonia, electricity, heat, hydrogen etc.) and _does not_ take into account emissions of exported energy carriers. Read the [Emissions from import](co2-emissions-import-export.md) page for more information.

* In a departure from common UNFCCC standards, emissions per sector are calculated based on the [primary energy](primary-energy.md) that is used to supply the final energy demand of that sector. This means that any conversion and transportation losses are included in the sector's emissions. For example, transmission losses of the power grid are distributed to the demand sectors relative to their electricity demand. The primary energy demand is multiplied with the [emission factor](co2-emission-factors.md) per carrier to obtain the CO<sub>2</sub> emissions. More information can be found in the [emission factors](co2-emission-factors.md) article.

* The ETM follows international conventions regarding the scope of CO<sub>2</sub> emissions. More precisely, this means that by default:
  * Emissions of biomass are assumed to be (net) zero. This assumption can be changed in the [biomass section](https://pro.energytransitionmodel.com/scenario/supply/biomass/co-sub-2-sub-emissions-of-biomass).
  * Emissions of international aviation and shipping are not taken into account. This assumption can be changed in the [transportation sector](https://pro.energytransitionmodel.com/scenario/demand/transport_international_transport/international-transport).

* LULUCF (Land Use, Land Use Change, and Forestry) emissions are out of scope. For more information on these definitions click [here](http://www.eea.europa.eu/publications/emep-eea-emission-inventory-guidebook-2009/part-b-sectoral-guidance-chapters).

* Other greenhouse gases and CO<sub>2</sub> emissions from non-energetic processes are calculated separately. These emissions can be adjusted in the Emissions > [Greenhouse gases](https://pro.energytransitionmodel.com/scenario/emissions/other_emissions/overview) section in the ETM. As stated briefly above, there are exceptions to this:
	* The ETM does include the calculation of CO<sub>2</sub> emissions resulting from natural gas feedstock in the fertilizer industry. This gas is used in Steam Methane Reformers to produce hydrogen feedstock. As this is closely tied to the energy system and virtually all of this CO<sub>2</sub> is emitted, it is included in the ETM.
	* The ETM does include the calculation of emissions related to final demand of non-energetic hydrogen and ammonia. Users can make explicit assumptions about how this is produced in the [hydrogen](https://pro.energytransitionmodel.com/scenario/supply/hydrogen/hydrogen-production) and [ammonia](https://pro.energytransitionmodel.com/scenario/supply/hydrogen/ammonia-production) section. As such, the ETM is able to determine the emissions related to this.


## Calculation of primary CO<sub>2</sub> emissions
For each sector and each final demand carrier, the associated CO<sub>2</sub> emissions are calculated by determining how much [primary energy](primary-energy.md) is needed to produce or supply this final demand and by multiplying this primary energy demand by the emission factor of the carrier. This means that all conversion and transportation losses are taken into account and assigned to the sector in which the final demand carriers are used.

:::info Calulation example
Suppose the household sector has a final electricity demand of `100 PJ`. All power is produced by coal-fired power plants with an efficiency of `50%`. To supply `100 PJ` electricity, `100 / 50% = 200 PJ` coal is needed. The total CO<sub>2</sub> emissions taken into account for household electricity demand equals `200 PJ * emission factor of coal`.
:::

## Exception: Liquid fuels
One exception to the primary emission method is the final demand of liquid fuels (non-biogenic), such as diesel, gasoline and kerosene. Instead of calculating primary emissions, the direct emissions for final demand of these fuels are caluclated by multiplying final demand with the emission factors of these fuels. The reason for this is two-fold:
* Refineries are highly complex industrial processes that are modelled in a simplified way in the ETM. More detail is required to trace back the exact energetic and feedstock inputs used to produce each refinery product, in order to determine accurate emissions with the primary emission method. 
* Using the primary emission method for refineries can result in widely varying emission factors for liquid fuels between countries with and without refineries. This reduces comparability between countries. 

The emission factors for liquid fuels are country sepcific and can be consulted in the [Dataset Manager](https://data.energytransitionmodel.com/). The liquid fuels for which direct emissions are calculated as an exception are the following:
* Diesel
* Gasoline
* Kerosene
* Heavy fuel oil (HFO)
* Liquefied petrol gas (LPG)
* Naphtha
* Methanol

The emission factors of imported hydrogen carriers, ammonia and heat can be changed in the [Emission factors](https://energytransitionmodel.com/scenario/emissions/emission_factors/co2-emissions-of-imported-heat) section of the ETM. 
