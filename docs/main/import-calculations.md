---
title: Import calculations
---

This page describes the calculation method used in the ETM to determine the energy imports. The method is demand driven, which means the amount of primary energy required to meet final consumption is calculated. 

For each area, the input data includes domestic production curves (see below) that describe the amount of energy that is produced/extracted domestically for all years up to 2050. Depending on the scenario year, the amount of domestically produced or extracted energy may therefore differ.

When the domestic demand for a carrier exceeds domestic production/extraction the remainder is imported. Vice versa, when domestic production/extraction of a carrier is higher than what is required, the excess amount is exported.

## Carriers

This is determined for the following primary energy carriers:

-   Coal
-   Oil
    -   Crude oil
    -   Diesel
    -   Gasoline
    -   Kerosine
    -   LPG
-   Gas
    -   Natural gas
    -   LNG
-   Uranium
-   Electricity
-   Biomass
    -   Bio-diesel
    -   Bio-ethanol
    -   Bio-oil
    -   Biofuel (Deprecated)
    -   Greengas
    -   Waste (All waste including non-biogenic)
    -   Algue diesel
    -   Wood pellet
    -   Biocoal
-   Heat

_Note: Lignite cannot be imported from a neighboring country, as this would not be energy efficient. All lignite is therefore assumed to be locally available. For each country it is defined whether or not lignite is available for production of electricity._

All converters that import energy are grouped together in a group named energy_import and all converters that export energy are in the group energy_export. The total net import is the sum of all converters in the energy_import group minus those in the energy_export group. To calculate how large the total imported energy is compared to the total energy use of the area, the total amount of energy import is divided by the total primary energy consumption of the region. The total primary energy consumption includes the conversion losses incurred for the generation of electricity that is exported.
