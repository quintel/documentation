---
title: Carbon Emissions
---

In the ETM the total CO<sub>2</sub> emissions for both the present and future in your scenario are calculated. If you are interested in how these emissions are calculated or how terms are defined in the ETM, the following pages will give an in-depth explanation: 

General carbon emissions calculations
Emission per sector
Emission factors
1990 Co2 emissions 
Emissions from imported electricity 
Emissions from biomass 
Negative emissions 

This page contains some extra information on the background of carbon budgeting.   

## Background CO<sub>2</sub> Emissions
CO<sub>2</sub> is seen as the main (human-induced) contributor to climate change at the moment. Climate change is seen as an important global issue due to the plethora of negative consequences for humanity. Due to this fact CO2 emissions are an important indicator for decision-making in the energy sector and displayed and calculated in the ETM. The following text and images will give a brief introduction to the effects of climate change.  

### Carbon budget
The IPCC has quantified global carbon budgets, for various scenario's of climate change (IPCC, 2013). The budgets estimate the amount of CO<sub>2</sub> we can still emit while having a likely chance of remaining within a certain level of temperature rise (1.5 oC, 2 oC, 3 oC) with respect to pre-industrial levels.
 
![](/img/docs/20160817-carbon-countdown.png)
 
_Source: (Carbon Brief, 2014)_

To remain within a relatively safe temperature rise of 1.5 degrees in 2050 a CO<sub>2</sub> reduction of roughly 50% is needed.
 
_Source: The relationship between risks from climate change, temperature change, cumulative carbon dioxide (CO2) emissions and changes in annual greenhouse gas (GHG) emissions by 2050. (IPCC, 2014)_

## Modelling principles
The ETM calculates the total CO<sub>2</sub> emissions for both the present and future. By default, it uses the following principles:

* Emissions are assigned to the sector energy is _used_ in, rather than the _location_ of emissions. This means that emissions related to the production of, for example, electricity are attributed to all sectors using electricity (households, industry etc.) rather than to the power sector. A consequence of this approach is that the ETM by default _does_ take into account emissions of imported energy carriers (imported electricity, heat, hydrogen etc.) and _does not_ take into account emissions of exported energy carriers. More information can be found in the [import and export section](co2-emissions-import-export.md).

* The ETM follows international conventions regarding the scope of CO<sub>2</sub> emissions. More precisely, this means that by default:
  * Emissions of biomass are assumed to be (net) zero. This assumption can be changed in the [biomass section](https://pro.energytransitionmodel.com/scenario/supply/biomass/co-sub-2-sub-emissions-of-biomass).
  * Emissions of international aviation and shipping are not taken into account. This assumption can be changed in the [transportation sector](https://pro.energytransitionmodel.com/scenario/demand/transport_international_transport/international-transport).

* The ETM does not take into account other greenhouse gases, such as methane and nitrous oxide, in its main emissions calculation. The reason for this is that these emissions are typically not (directly) related to the energy system and the ETM does not contain sliders that affect these emissions. For sake of completeness, other greenhouse gas emissions are taken into account in the [CO<sub>2</sub> footprint factsheet](https://pro.energytransitionmodel.com/scenario/data/data_visuals/co-sub-2-sub-footprint).

* The ETM does not take into account CO<sub>2</sub> emissions related to non-energetic use of energy carriers, such as use of oil and gas as feedstock in industry. The reason for this is that there is insufficient data to determine how much of this CO<sub>2</sub> is emitted and how much is (temporarily) stored in products such as plastics. There are two exceptions to this:
  * The ETM does include CO<sub>2</sub> emissions resulting from natural gas feedstock in the fertilizer industry. This gas is used in Steam Methane Reformers to produce hydrogen feedstock. As this is closely tied to the energy system and virtually all of this CO<sub>2</sub> is emitted, it is included in the ETM.
  * The ETM does include emissions related to final demand of non-energetic hydrogen. You can make explicit assumptions about how this hydrogen is produced in the [hydrogen section](https://pro.energytransitionmodel.com/scenario/supply/hydrogen/hydrogen-production). As such, the ETM is able to determine the emissions related to this.

* Likewise, fugitive emissions, solvent and other product use, and LULUCF (Land Use, Land Use Change, and Forestry) emissions are out of scope. For more information on these definitions click [here](http://www.eea.europa.eu/publications/emep-eea-emission-inventory-guidebook-2009/part-b-sectoral-guidance-chapters).

* In a departure from common UNFCCC standards, emissions per sector are calculated based on the [primary energy](primary-energy.md) that is used to supply the final energy demand of that sector. This means that any conversion and transportation losses are included in the sector's emissions. For example, transmission losses of the power grid are distributed to the demand sectors relative to their electricity demand. The primary energy demand is multiplied with the [emission factor](co2-emission-factors.md) per carrier to obtain the CO<sub>2</sub> emissions. More information can be found in the [emission factors](co2-emission-factors.md) article.


 

