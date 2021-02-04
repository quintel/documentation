---
title: Primary demand
---

This page discusses how primary energy is defined and calculated in the ETM. Primary energy is energy found in nature that has not been subjected to any conversion or transformation process. For quantitative applications such as the Energy Transition Model (ETM) and Energy Balances we need to define the primary energy more precisely. The conventions in the ETM are consistent with International Energy Agency (IEA) and Eurostat (EC) conventions unless otherwise specified.

## Primary energy calculation method

The model calculates primary consumption associated with the output of a specific converter in a bottom-up fashion: Each converter 'asks' the converter one level higher what the primary consumption of that converter's output is and takes his share. This process continues until it reaches the primary converters. At the primary converters, the primary consumption is determined using the [physical content method](primary-energy.md#physical-content-method). Hence the associated primary consumption can be calculated for every converter, including those that represent *non-energetic* consumption (for example feedstock in the chemical industry) and those that export energy (currently only electricity is exported as a carrier where transformation losses occur).

## Physical content method

We determine the primary energy equivalent of an energy flow by calculating the physical energy content of the primary energy form. This method is called the 'physical content method' (as opposed to the 'partial substitution method').

-   For combustible fuels (coal, oil, gas, biomass, waste and derived products) the primary energy form is the fuel itself. The physical energy is calculated on net calorific value basis.
-   For nuclear, solar-thermal, geothermal, and heat-pumps; heat is the primary energy form. The physical energy calculation is different for these carriers (see table below)
-   For hydro, wind, tide/wave/ocean and solar photovoltaic; electricity is the primary energy form. The physical energy is equal to the gross output of electricity.

