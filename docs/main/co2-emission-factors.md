---
title: Emission factors
---

(Carbon) emission factors describe the amount of CO<sub>2</sub> emissions emitted as a result of energy use. This section gives a general information about emission factors in the ETM. 

## General
The emission factors for energy carriers may vary per region. For example, the (organic) composition of coal or waste depends on where these carriers are sourced and hence so does their CO<sub>2</sub> content. Region-specific emission factors can be consulted via the [Dataset Manager](https://data.energytransitionmodel.com/).

The emission factors for electricity, hydrogen and (collective) heat depend on the installed production technologie, which varies per scenario. For example, a scenario with a high total capacity of coal-fired power plants will have a more CO<sub>2</sub>-intensive power supply than a scenario with a high total capacity of renewable power. Furthermore, if [carbon capture](co2-ccus.md) is applied to electricity production technologies using biomass as input, a carrier may have a [negative emission factor](co2-negative-emissions.md). This, for example, applies to:
* Coal-fired power plants with biomass co-firing
* Gas-fired power plants using green gas
* Hydrogen production with biomass gasification technology

## Imported carriers
The ETM calculates CO<sub>2</sub> emissions via the primary emission method. As a consequence, emissions from imported energy carriers are taken into account. Read more about the main principles of emission calculations [here](co2-main-principles#modelling-principles).

As a result, the ETM used emissions factors for imported carriers that do not have direct emissions when used (meaning they do not have a carbon content). The ETM assumes an emission factor for import of the following carriers:
* Imported electricity
* Imported hydrogen
* Imported heat
* Imported ammonia
* Imported liquid hydrogen
* Imported liquid organic hydrogen carrier (LOHC)

Go to the [Dataset Manager](https://data.energytransitionmodel.com/) to consult the region-specific emission factors for these imported carriers.
