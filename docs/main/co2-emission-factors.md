---
title: Emission factors
---

(Carbon) Emission factors describe the amount of CO<sub>2</sub> emissions emitted as a result of the generation of electricity. The following page displays all emission factors used in the calculation of (total) emissions in the ETM. This is mainly relevant when choosing a technique for the generation of energy in the (Supply)[https://pro.energytransitionmodel.com/scenario/supply/electricity/coal-plants] section of the ETM.

## Overview
The emission factors for energy carriers may vary per region. For example, the (organic) composition of coal or waste depends on where these carriers are sourced and hence so does their CO<sub>2</sub> content. The ETM supports this by specifying emission factors per country in the [ETDataset country analysis](https://github.com/quintel/etdataset-public).

If no 'custom' emission factor is specified, the following 'default' emission factors are used:

| Primary energy carrier | Emission factor (*kg CO<sub>2</sub> per MJ*)
|----------------|-----------------
| Coal | 0.096 |
| Crude oil | 0.0755 |
| Lignite | 0.1012 |
| Natural gas | 0.0564 |
| Uranium (nuclear energy) | 0 |
| Non-biogenic waste | 0.0835 |
| Biomass (solid, liquid, gaseous, waste) | 0 |
| Renewable electricity (wind, solar etc.) | 0 |
| Renewable heat (ambient heat, solar thermal, geothermal) | 0 |

_Source: [EU Joint Research Centre](http://refman.et-model.com/publications/1708)_

The emission factors for electricity, hydrogen and (collective) heat depend on the installed production technologies, which vary per ETM scenario. E.g. a scenario with lots of coal-fired power plants will have a more carbon-intensive power supply than a scenario with nuclear power plants. If [carbon capture](co2-ccus.md) is applied to energy production technologies using biomass as input, a carrier may have a [negative emission factor](co2-negative-emissions.md). This means that any sector using this carrier will see a decrease in its emissions. This, for example, applies to:
* Coal-fired power plants with biomass co-firing
* Gas-fired power plants using green gas
* Hydrogen production with biomass gasification technology

The emission factors of _imported_ electricity, hydrogen and heat can be set in the model. See the [import and export](co2-emissions-import-export.md) article for more information. The following default factors are used in case no country-specific data has been specified:

| Energy carrier | Emission factor (*kg CO<sub>2</sub> per MJ*)
|----------------|-----------------
| Imported electricity | 0.146 |
| Imported heat | 0.078 |
| Imported hydrogen | 0.04 |

_Source: [Mixed](https://github.com/quintel/etdataset-public/tree/master/carriers_source_analyses)_

## Calculation of CO<sub>2</sub> emissions
For each sector and each final demand carrier, the associated CO<sub>2</sub> emissions are calculated by determining how much [primary energy](primary-energy.md) is needed to produce or supply this final demand and by multiplying this primary energy demand by the emission factor of the carrier. This means that all conversion and transportation losses are taken into account and assigned to the sector in which the final demand carriers are used.

_Example: Suppose the household sector has a final electricity demand of 100 PJ. Also suppose that all power is produced using gas-fired power plants with an efficiency of 50%. Power transmission losses are assumed to be 5%. To supply 100 PJ electricity to the household sector, 105.3 PJ electricity needs to be produced: `105.3 * 5%` transmission losses leaves 100 PJ final demand. To produce this electricity, 210.6 PJ natural gas is needed (`105.3 / 50%` power plant efficiency). The total CO<sub>2</sub> emissions taken into account for household electricity demand equals `210.6 PJ * the emission factor of natural gas`._

## Exception: Refinery products and emission factors
One exception to this rule is the final demand of 'refinery products' in the transportation sector, such as diesel, gasoline and kerosene. To calculate the emissions associated with this final demand, the ETM simply multiplies the final demand of these carriers directly with fixed emission factors, rather than tracing back the primary energy demand. The reason for this is two-fold:
* Energetic demand of refineries, e.g. electricity and heat used in refinery processes, is already included in the final demand of the industry sector, and hence CO<sub>2</sub> emissions. To avoid double-counting, these emissions should not be taken into account when calculating the emissions of refinery products in transportation.
* Refineries are highly complex industrial processes that are modelled in a simplified way in the ETM. More detail is required to trace back the exact energetic and feedstock inputs used to produce each refinery product. Using fixed factors avoids (slight) inconsistencies with emission factors typically found in the literature.

For refinery products, the following default emission factors are used. Again note that these values may be overwritten with country-specific data.

| Energy carrier | Emission factor (*kg CO<sub>2</sub> per MJ*) |
|----------------|-----------------|
| Diesel | 0.0743 |
| Gasoline | 0.072 |
| Heavy fuel oil | 0.0774 |
| Kerosene | 0.0715 |
| LPG | 0.0667 |

_Source: [EU Joint Research Centre](http://refman.et-model.com/publications/1708)_
