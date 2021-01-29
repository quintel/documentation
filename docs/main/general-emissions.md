---
title: General carbon emission calculations
---

This page explains the general emission calculation approach behind the ETM. 

## General emission calculations
Emissions in the ETM are assigned to the specific sector that uses the energy. This is opposed to assigning emissions to the location in which they are emitted. This means that emissions related to the production of, for example, electricity are attributed to all sectors using electricity (households, industry etc.) rather than to the power sector. 

A consequence of this approach is that the ETM considers emissions of imported energy carriers (imported electricity, heat, hydrogen etc.) but disregards emissions of exported energy carriers. 

_Checkout: the Emission from imported electricity page which provides more information on this subject._

## Scope of emissions 
The ETM follows international conventions regarding the scope of CO<sub>2</sub> emissions. More precisely, this means that by default:
* Emissions of biomass are assumed to be (net) zero. This assumption can be changed in the biomass section.
* Emissions of international aviation and shipping are not taken into account. This assumption can be changed in the transportation sector.

However, there is a departure from common UNFCCC standards: emissions per sector are calculated based on the primary energy that is used to supply the final energy demand of that sector. This means that any conversion and transportation losses are included in the sector's emissions. For example, transmission losses of the power grid are distributed to the demand sectors relative to their electricity demand. The primary energy demand is multiplied with the emission factor per carrier to obtain the CO<sub>2</sub> emissions. More information can be found in the emission factors article.

## Emissions outside the scope
The following emission sources are outside the scope of the ETM:
* Other greenhouse gases, such as methane and nitrous oxide, in its main emissions calculation. The is due to the fact that these emissions are typically not (directly) related to the energy system and the ETM does not contain sliders that affect these emissions. For the sake of completeness, other greenhouse gas emissions are taken into account in the CO<sub>2</sub> footprint factsheet.
* CO<sub>2</sub> emissions related to non-energetic use of energy carriers, such as use of oil and gas as feedstock in industry. The reason for this is that there is insufficient data to determine how much of this CO<sub>2</sub> is emitted and how much is (temporarily) stored in products such as plastics. There are two exceptions to this:
1.	The ETM does include CO<sub>2</sub> emissions resulting from natural gas feedstock in the fertilizer industry. This gas is used in Steam Methane Reformers to produce hydrogen feedstock. As this is closely tied to the energy system and virtually all of this CO<sub>2</sub> is emitted, it is included in the ETM.
2.	The ETM does include emissions related to final demand of non-energetic hydrogen. Users can make explicit assumptions about how this hydrogen is produced in the hydrogen section. As such, the ETM is able to determine the emissions related to this.
* Fugitive emissions, solvent and other product use, and LULUCF (Land Use, Land Use Change, and Forestry) emissions are out of scope. For more information on these definitions you can view the emission inventory guidebook from the European Environment Agency. 

