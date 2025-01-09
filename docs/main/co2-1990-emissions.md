---
title: 1990 emissions
---

The ETM compares future CO<sub>2</sub> emissions to 1990 emission levels, as this is a common reference point in (inter)national climate policy. In contrast to the present and future scenario year, the 1990 emissions number is not calculated (dynamically) by the model, but instead is a fixed input number researched for each region. You can view the CO<sub>2</sub> emissions of your scenario compared to 1990 by clicking on the dashboard item 'CO<sub>2</sub> relative to 1990'. This page explains which data is used within the ETM and how 1990 emissions are calculated per area.

_Checkout: The 1990 emissions of other green house gases is currently not included in the ETM. The method described below is about CO<sub>2</sub> only._

## Country-level data
For all countries in the ETM, the 1990 emissions number is based on data from the [European Environmental Agency](https://www.eea.europa.eu/data-and-maps/data/national-emissions-reported-to-the-unfccc-and-to-the-eu-greenhouse-gas-monitoring-mechanism-16). The following categories are included:

| Emissions Category | Code | Type |
|----------------|-----------------|
| Fuel Combustion by sector | 1.AA | Energetic |
| Ammonia Production in Fertilizer sector | 2.B.1 | Non-Energetic |
| Metal Industry | 2.C | Energetic |
| Waste Incineration | 5.C.1 | Energetic |

For non-energetic emissions, the ETM only takes the non-energetic emissions during the production of ammonia in the fertilizer sector into account. 
These emissions can be calculated using valid generic assumptions. 
In other subsectors of the industry, non-energetic emissions can vary site-specific, therefore the ETM does not take these into account.

Other emissions, such as other feedstock and fugitive emissions are not included in the 1990 number as these emissions are out of scope of the ETM.

## Regional-level data
For regional datasets, no uniform, international source exists detailing historic emissions on a fine-grained geographical level. As such, 1990 emissions are researched for each region individually.

For subregions of the Netherlands, data is used from [RIVM](http://emissieregistratie.nl/erpubliek/bumper.nl.aspx). They report 1990 emissions on a municipality level. However, this data does not comply with the [main principles](co2-main-principles.md) of the ETM's CO<sub>2</sub> calculation:

* Emissions are reported by geographical location. This means that a municipality with a power plant within its border is assigned the full emissions of the plant. Conversely, no emissions for electricity use are taken into account for municipalities without power plants.
* The regional data does not conform to IPCC definitions. This means that emissions of biomass are included.

## Correction method
To be able to compare 1990 emissions to the present and future emission levels calculated by the ETM, the following data correction is applied:

* First, for all municipalities 1990 CO<sub>2</sub> emissions are calculated for all sectors _except_ the energy sector
* Secondly, each municipality total is divided by the Dutch total, both excluding energy sector emissions. This results in a 'scaling factor' per municipality. For example, municipality X has 3% of total Dutch 1990 emissions excluding the energy sector.
* Finally, this scaling factor is multiplied with the total Dutch 1990 emissions _including_ the energy sector to obtain an estimate per municipality.

This results in an estimate of the full 1990 municipality emissions that is in compliance with the ETM principles. This method implicitly assumes that the 1990 Dutch energy sector emissions can be allocated to a municipality level proportionally to a municipality's non-energy sector 1990 emissions.

Two caveats apply to this method, making it difficult to assess the quality of the outcomes:
* For several sectors, the RIVM source data is based on estimates rather than measurements.
* The above method has not been tested extensively, due to a lack of reference data.
