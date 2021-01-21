---
title: Primary demand
---

Primary energy is energy found in nature that has not been subjected to any conversion or transformation process. For quantitative applications such as the Energy Transition Model (ETM) and Energy Balances we need to define the primary energy more precisely. The conventions in the ETM are consistent with International Energy Agency (IEA) and Eurostat (EC) conventions unless otherwise specified.

## Primary energy calculation method

The model calculates primary consumption associated with the output of a specific converter in a bottom-up fashion: Each converter 'asks' the converter one level higher what the primary consumption of that converter's output is and takes his share. This process continues until it reaches the primary converters. At the primary converters, the primary consumption is determined using the [physical content method](primary-energy.md#physical-content-method). Hence the associated primary consumption can be calculated for every converter, including those that represent *non-energetic* consumption (for example feedstock in the chemical industry) and those that export energy (currently only electricity is exported as a carrier where transformation losses occur).

## "Energy use" in the dashboard

*Main article: [Dashboard](dashboard.md)*

The "Energy use" in the dashboard is the primary consumption associated with total (inland) final consumption. This includes primary consumption that results from final non-energy consumption (for example feedstock in the chemical industry). It does not include primary consumption that results from exports. This also means that, *contrary to IEA/EC conventions*, the losses which are typically incurred in the conversion sector are only included for the part of the inland final consumption, not for the exports.

## Physical content method

We determine the primary energy equivalent of an energy flow by calculating the physical energy content of the primary energy form. This method is called the 'physical content method' (as opposed to the 'partial substitution method').

-   For combustible fuels (coal, oil, gas, biomass, waste and derived products) the primary energy form is the fuel itself. The physical energy is calculated on net calorific value basis.
-   For nuclear, solar-thermal, geothermal, and heat-pumps; heat is the primary energy form. The physical energy calculation is different for these carriers (see table below)
-   For hydro, wind, tide/wave/ocean and solar photovoltaic; electricity is the primary energy form. The physical energy is equal to the gross output of electricity.

### Physical energy calculation

|Technology|Primary energy form|Calculation IEA/EC|Calculation ETM|
|----------|-------------------|------------------|---------------|
|Combustible fuels (coal, oil, gas, biomass, waste and derivatives)|Fuel itself|Heat of combustion on a net calorific value basis (also known as lower heating value)|Idem|
|Nuclear|Heat|3.03 x gross output of electricity (which assumes a 33% efficiency)|3.125 x (assumes 32 % efficiency)|
|Solar thermal|Heat|Output of heat. Note: only solar heat from flat plate collectors and solar thermal electric plants is counted, not passive heating of houses etc.|Idem|
|Geothermal heat|Heat|2 x heat output|Output of heat|
|Geothermal electricity|Heat / Electricity|10 x electricity output|Gross output of electricity|
|Heat pump (ambient heat part)|Heat|Useful heat output - Electricity input. Note: only ambient heat for heat pumps that deliver monetized heat is counted; ambient heat for heat pumps in for example households or industry is not counted at all.|All ambient heat input to heatpumps is counted, also for example in households or industry. The calculation is idem.|
|Hydro energy|Electricity|Gross output of electricity|Idem|
|Wind energy|Electricity|Gross output of electricity|Idem|
|Tide/wave/ocean|Electricity|Gross output of electricity|N/A|
|Solar Photovoltaic|Electricity|Gross output of electricity|Idem|

General information on primary energy can be found [here](http://en.wikipedia.org/wiki/Primary_energy).
