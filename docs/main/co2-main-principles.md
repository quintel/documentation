---
title: Main principles
---

In the ETM the total CO<sub>2</sub> emissions for both the present and future in your scenario are calculated. This page contains extra information on the modelling principles behind carbon emissions in the ETM. 

## Modelling principles
By default, the ETM uses the following principles:

* Emissions are assigned to the sector energy is _used_ in, rather than the _location_ of emissions. This means that emissions related to the production of, for example, electricity are attributed to all sectors using electricity (households, industry etc.) rather than to the power sector. A consequence of this approach is that the ETM by default _does_ take into account emissions of imported energy carriers (imported electricity, heat, hydrogen etc.) and _does not_ take into account emissions of exported energy carriers. 

_Checkout: the ['Emissions from imported electricity'](co2-emissions-import-export) infopage which provides more information on this subject._

* In a departure from common UNFCCC standards, emissions per sector are calculated based on the [primary energy](primary-energy.md) that is used to supply the final energy demand of that sector. This means that any conversion and transportation losses are included in the sector's emissions. For example, transmission losses of the power grid are distributed to the demand sectors relative to their electricity demand. The primary energy demand is multiplied with the [emission factor](co2-emission-factors.md) per carrier to obtain the CO<sub>2</sub> emissions. More information can be found in the [emission factors](co2-emission-factors.md) article.

* The ETM follows international conventions regarding the scope of CO<sub>2</sub> emissions. More precisely, this means that by default:
  * Emissions of biomass are assumed to be (net) zero. This assumption can be changed in the [biomass section](https://pro.energytransitionmodel.com/scenario/supply/biomass/co-sub-2-sub-emissions-of-biomass).
  * Emissions of international aviation and shipping are not taken into account. This assumption can be changed in the [transportation sector](https://pro.energytransitionmodel.com/scenario/demand/transport_international_transport/international-transport).

* Other greenhouse gases and CO<sub>2</sub> emissions from non-energetic processes are calculated seperately as they are not the result from changes in the energy system. These emissions can be adjusted in the Emissions > [Greenhouse gases](energytransitionmodel.com/scenario/emissions/other_emissions/overview) section in the ETM. There are two exceptions to this: 
	* The ETM does include the calculation of CO<sub>2</sub> emissions resulting from natural gas feedstock in the fertilizer industry. This gas is used in Steam Methane Reformers to produce hydrogen feedstock. As this is closely tied to the energy system and virtually all of this CO<sub>2</sub> is emitted, it is included in the ETM.
	* The ETM does include the calculation of emissions related to final demand of non-energetic hydrogen. Users can make explicit assumptions about how this hydrogen is produced in the [hydrogen section](https://pro.energytransitionmodel.com/scenario/supply/hydrogen/hydrogen-production). As such, the ETM is able to determine the emissions related to this.

* LULUCF (Land Use, Land Use Change, and Forestry) emissions are out of scope. For more information on these definitions click [here](http://www.eea.europa.eu/publications/emep-eea-emission-inventory-guidebook-2009/part-b-sectoral-guidance-chapters).
