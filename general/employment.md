This page serves to explain the Employment module implemented in 2012 and commissioned by [Alliander](http://www.alliander.com/nl/alliander/). It describes the changes made to the ETM to accommodate the calculation of employment effects.

Introduction
------------

### Background

Adding employment figures to the ETM provides the user with a new, politically relevant, quantifier of his or her scenarios. Increase of local employment is often used as an argument in favor or renewable energy, this module allows quantification of this effect and could, therefore, prove a useful handle to assess the possible energy futures with.

### Scope

As a result of the limited time available for the project, the implementation has been limited to three sectors and no systematic validation of research data has been performed. The following sections and subsections have been included in the project.

1.  Households:
    1.  space heating
    2.  cooling
    3.  hot water
    4.  insulation
    5.  district heating
    6.  solar panels

2.  Buildings:
    1.  space heating
    2.  cooling
    3.  insulation

3.  Supply
    1.  Electricity production
    2.  Renewable electricity
    3.  Fossil heat
    4.  Renewable heat

The 'Industry' and 'Agriculture' sections have not been included in the current implementation. More limitations and known issues can be found in Appendix B.

Research
--------

FTE (Full Time Equivalent) employment figures have been obtained for the technologies listed in Appendix A. To this end, experts from various fields have been interviewed including Energy Matters, ENECO, KEMA and Scheepstra Duurzame Energie. Moreover, we have used literature values for well-known technologies and interviewed a fitter familiar with residential energy-related technologies.

For the converters listed in Appendix A, employment figures in man\_hours have been assigned. These figures have been subdivided into the following categories

1.  planning
2.  production
3.  assembly/placement
4.  maintenance
5.  removal/replacement

As we are primarily interested in local employment, we have tried to quantify for every step which fraction of the above categories is carried out in The Netherlands. For the production phase, for instance, this fraction is often estimated to be zero (parts for resistive heaters are typically produced in cheap-labor countries).

Implementation
--------------

Employment figures in the categories mentioned above in the 'Research' section have been associated with the technologies in the ETM. Moving a slider of a technologie (which is included in the project scope) instantaneously changes the net employment of the current scenario visible in the flexible dashboard item shown in Figure 2.

### Full load hours calculation

For technologies that feature in a ‘share’ group such as the space heating and hot water converters in households, an improved number\_of\_units calculation can be implemented. This has been done for these two share groups.

There are several issues related to this improvement, however:

-   If the capacity of a technology in a share groups is too large for a single residence, the number\_of\_units of this converter will be unrealistically large. This has been aided by diminishing the number of units by a factor ‘household\_supplied\_per\_unit’. This factor is defined as capacity/10kW where 10 kW is the typical capacity of a single-residence heat pump.
-   If not all residences have exactly one of the technologies in the share group, the number of units should not be directly proportional to the share of the technology. A case in point is the ‘cooling’ share group in households. Not all residences in the Netherlands have a cooling technology installed. In this case, the original (default) implementation of the number of units calculation (where the number of units scales with the demand) is more accurate. If the cooling demand per person increases the number of residences with a cooling technology will likely increase.

### Insulation

For insulation of households, the employment is calculated analogously to costs. Based on the Rc value (equivalently: slider position) of the houses, a combination of insulation improvements is assumed. These improvements have a cost associated with them. We have added man-hours in precisely the same way, using standardized installation guides. More details can be found on the [Insulation](insulation.md) page.

Use
---

![Figure 1: Selecting flexible dashboard item for the Employment module](../images/selectDashboard.png "Figure 1: Selecting flexible dashboard item for the Employment module")

Information about employment is accessible by either

1.  selecting the 'Employment' dashboard item
2.  or navigating to the 'Employment' slide in Costs \> Employment

### Dashboard item

The dashboard item can be selected by clicking 'change' on the ETM dashboard and selecting 'Employment' from the pop-up menu shown in Figure 1.

Moving the slider associated with a technology (included in the project scope) instantaneously changes the net employment of the current scenario visible in the flexible dashboard item shown in Figure 2.

![Figure 2: Flexible dashboard item for the Employment module](../images/dashboard.png "Figure 2: Flexible dashboard item for the Employment module")

### Slide

![Figure 3: Employment slide](../images/slide.png "Figure 3: Employment slide")

The 'Employment slide' (Costs \> Employment) is shown in Figure 3. It shows a graph of the total employment per year in the start-year and the end-year (left and right respectively), subdivided in the previously mentioned categories. The units are in kFTE (1000 Full Time Equivalents which taken to be 1800 man hours per year). The three sliders give the user the opportunity to change the values of three poorly known factors:

1.  Production share: the percentage of the total employment that is taken up by the production phase of parts for energy-related technologies.
2.  Local production labor: the percentage of the labor in the production category that is done locally (in The Netherlands).
3.  Economic multiplier: the effect of secondary, tertiary, etc. employment. This quantifies how many jobs are created from every job taken into account by the calculation. The default value of ‘1’ takes the very conservative standpoint that secondary employment is zero.

Appendix A: List of technologies with employment figures
--------------------------------------------------------

Overview of technologies included in the employment calculations are given in the table below. Columns show name, and employment figures for four phases: 'planning', 'placement', 'maintenance' and 'removal/replacement'.

`+------------------------------------------------------------------------+---------------+----------------+----------------+----------------+`
`|                                 name                                   |   planning    |   placement    |  maintenance   |    removal     |`
`+------------------------------------------------------------------------+---------------+----------------+----------------+----------------+`
`| buildings_collective_geothermal                                        | 0.0           | 19530.0        | 19530.0        | 0.0            |`
`| buildings_collective_chp_gas_power_fuelmix                             | 360.0         | 2880.0         | 1260.0         | 360.0          |`
`| buildings_collective_chp_wood_pellets                                  | 113580.0      | 820080.0       | 171000.0       | 91080.0        |`
`| buildings_cooling_airconditioning                                      | 0.0           | 23.0           | 1.7            | 7.0            |`
`| buildings_cooling_collective_heatpump_water_water_ts_electricity       | 6.0           | 50272.2        | 1377.3         | 40.0           |`
`| buildings_cooling_heatpump_air_water_network_gas                       | 0.0           | 8164.9         | 340.2          | 16.0           |`
`| buildings_solar_pv_solar_radiation                                     | 0.0           | 11855.56       | 118.56         | 0.0            |`
`| buildings_space_heater_coal                                            | 0.0           | 88.0           | 1.5            | 64.0           |`
`| buildings_space_heater_collective_heatpump_water_water_ts_electricity  | 6.0           | 16933.0        | 463.9          | 40.0           |`
`| buildings_space_heater_crude_oil                                       | 0.0           | 136.0          | 1.5            | 64.0           |`
`| buildings_space_heater_electricity                                     | 0.0           | 17.0           | 0.0            | 1.0            |`
`| buildings_space_heater_heatpump_air_water_network_gas                  | 6.0           | 16933.0        | 463.9          | 40.0           |`
`| buildings_space_heater_network_gas                                     | 0.0           | 21.0           | 0.0            | 1.0            |`
`| buildings_space_heater_solar_thermal                                   | 0.0           | 430.8          | 4.5            | 16.0           |`
`| buildings_space_heater_wood_pellets                                    | 0.0           | 84.0           | 1.5            | 80.0           |`
`| energy_chp_combined_cycle_gas_power_fuelmix                            | 442800.0      | 2835000.0      | 534600.0       | 354600.0       |`
`| energy_chp_ultra_supercritical_coal                                    | 590580.0      | 7087680.0      | 1170000.0      | 472500.0       |`
`| energy_chp_ultra_supercritical_crude_oil                               | 590580.0      | 7087680.0      | 1170000.0      | 472500.0       |`
`| energy_chp_ultra_supercritical_lignite                                 | 590580.0      | 7087680.0      | 1170000.0      | 472500.0       |`
`| energy_chp_ultra_supercritical_wood_pellets                            | 113580.0      | 820080.0       | 171000.0       | 91080.0        |`
`| energy_power_combined_cycle_ccs_coal                                   | 2281500.0     | 3802500.0      | 367200.0       | 1170000.0      |`
`| energy_power_combined_cycle_ccs_gas_power_fuelmix                      | 27300.0       | 27300.0        | 650000.0       | 816000.0       |`
`| energy_power_combined_cycle_coal                                       | 1755000.0     | 2925000.0      | 216000.0       | 900000.0       |`
`| energy_power_combined_cycle_gas_power_fuelmix                          | 21000.0       | 500000.0       | 76800.0        | 480000.0       |`
`| energy_power_geothermal                                                | 0.0           | 41664.0        | 22848.0        | 0.0            |`
`| energy_power_nuclear_gen3_uranium_oxide                                | 4400000.0     | 1296000.0      | 288000.0       | 480000.0       |`
`| energy_power_solar_pv_solar_radiation                                  | 0.0           | 222222.22      | 2222.22        | 0.0            |`
`| energy_power_supercritical_coal                                        | 1350000.0     | 2250000.0      | 180000.0       | 900000.0       |`
`| energy_power_supercritical_waste_mix                                   | 113580.0      | 820080.0       | 171000.0       | 91080.0        |`
`| energy_power_turbine_network_gas                                       | 88560.0       | 567000.0       | 106920.0       | 70920.0        |`
`| energy_power_ultra_supercritical_ccs_coal                              | 1755000.0     | 2925000.0      | 306000.0       | 1170000.0      |`
`| energy_power_ultra_supercritical_coal                                  | 1350000.0     | 2250000.0      | 180000.0       | 900000.0       |`
`| energy_power_ultra_supercritical_cofiring_wood_pellets                 | 1350000.0     | 2250000.0      | 180000.0       | 900000.0       |`
`| energy_power_ultra_supercritical_crude_oil                             | 21000.0       | 500000.0       | 76800.0        | 480000.0       |`
`| energy_power_ultra_supercritical_gas_power_fuelmix                     | 21000.0       | 500000.0       | 76800.0        | 480000.0       |`
`| energy_power_ultra_supercritical_lignite                               | 1350000.0     | 2250000.0      | 180000.0       | 900000.0       |`
`| energy_power_ultra_supercritical_oxyfuel_ccs_lignite                   | 1755000.0     | 2925000.0      | 306000.0       | 1170000.0      |`
`| energy_power_wind_turbine_coastal                                      | 3439.09       | 4120.2         | 750.0          | 1740.0         |`
`| energy_power_wind_turbine_inland                                       | 3439.09       | 4120.2         | 750.0          | 1740.0         |`
`| energy_power_wind_turbine_offshore                                     | 3439.1        | 22680.0        | 750.0          | 1740.0         |`
`| households_collective_geothermal                                       | 0.0           | 19530.0        | 19530.0        | 0.0            |`
`| households_collective_chp_network_gas                                  | 360.0         | 2880.0         | 1260.0         | 360.0          |`
`| households_collective_chp_wood_pellets                                 | 113580.0      | 820080.0       | 171000.0       | 91080.0        |`
`| households_cooling_airconditioning_electricity                         | 0.0           | 7.0            | 1.5            | 7.0            |`
`| households_cooling_collective_heatpump_water_water_ts_electricity      | 6.0           | 130.0          | 4.0            | 40.0           |`
`| households_cooling_heatpump_air_water_network_gas                      | 6.0           | 130.0          | 4.0            | 40.0           |`
`| households_cooling_heatpump_ground_water_electricity                   | 6.0           | 130.0          | 4.0            | 40.0           |`
`| households_solar_pv_solar_radiation                                    | 0.0           | 11111.11       | 111.11         | 0.0            |`
`| households_space_heater_coal                                           | 0.0           | 72.0           | 1.5            | 64.0           |`
`| households_space_heater_collective_heatpump_water_water_ts_electricity | 900.0         | 4320.0         | 1620.0         | 720.0          |`
`| households_space_heater_combined_network_gas                           | 0.0           | 4.5            | 0.5            | 4.5            |`
`| households_space_heater_crude_oil                                      | 0.0           | 120.0          | 1.5            | 64.0           |`
`| households_space_heater_district_heating_steam_hot_water               | 0.0           | 0.0            | 0.0            | 0.0            |`
`| households_space_heater_electricity                                    | 0.0           | 1.0            | 0.0            | 1.0            |`
`| households_space_heater_heatpump_add_on_electricity                    | 0.0           | 16.0           | 0.5            | 16.0           |`
`| households_space_heater_heatpump_air_water_network_gas                 | 900.0         | 4320.0         | 1620.0         | 720.0          |`
`| households_space_heater_heatpump_ground_water_electricity              | 6.0           | 130.0          | 4.0            | 40.0           |`
`| households_space_heater_network_gas                                    | 0.0           | 5.0            | 0.0            | 1.0            |`
`| households_space_heater_wood_pellets                                   | 0.0           | 68.0           | 1.5            | 64.0           |`
`| households_water_heater_coal                                           | 0.0           | 88.0           | 1.5            | 80.0           |`
`| households_water_heater_combined_network_gas                           | 0.0           | 4.5            | 0.5            | 4.5            |`
`| households_water_heater_crude_oil                                      | 0.0           | 136.0          | 1.5            | 64.0           |`
`| households_water_heater_district_heating_steam_hot_water               | 0.0           | 11.6           | 0.0            | 0.0            |`
`| households_water_heater_fuel_cell_chp_network_gas                      | 0.0           | 8.5            | 0.5            | 4.5            |`
`| households_water_heater_heatpump_air_water_electricity                 | 2.0           | 72.0           | 1.5            | 16.0           |`
`| households_water_heater_micro_chp_network_gas                          | 0.0           | 8.5            | 0.5            | 4.5            |`
`| households_water_heater_network_gas                                    | 0.0           | 8.0            | 1.0            | 4.0            |`
`| households_water_heater_resistive_electricity                          | 0.0           | 5.0            | 1.0            | 5.0            |`
`| households_water_heater_solar_thermal                                  | 0.0           | 16.0           | 0.333333       | 16.0           |`
`| households_water_heater_wood_pellets                                   | 0.0           | 88.0           | 1.5            | 80.0           |`
`+------------------------------------------------------------------------+---------------+----------------+----------------+----------------+`

Appendix B: known issues
------------------------

The following issues are present in the current release and will be fixed in the next releases.

-   Industry and agriculture are excluded from the employment calculation.
-   At present, geothermal heating in Households and Buildings uses employment figures from geothermal electricity production (scaled to match the capacity). This is due to the lack of literature on geothermal heating projects in the Netherlands.
-   Combi-technologies (used for heating and how water) in Households are counted double as they appear both in the Hot Water and Space heating sections of the model.
-   Some heat pumps may have inaccurate capacities in the Households and Buildings sectors, the number of units the ETM uses for these technologies may be incorrect. A thorough validation of these technologies is underway.
-   Employment effects of district heating do not take the construction of a heat network into account. The extent and properties of such a network are too dependent on the specifics of each project, to conclude what impact the network has on employment.
-   The 'Replacement of existing houses' slider does not take into account that heating or cooling technologies need to be installed for each new house. The effect of this slider on employment is therefore unrealistically small.
-   To assess the employment impact of CCS technologies we have added 30% to the impact of the 'planning', 'production', 'placement' and 'removal' stages and 70% to 'maintenance' compared to the reference non-CCS technologies.
-   The employment impact of maintenance for offshore wind turbines has been taken from onshore wind research.
-   The following technologies are not included in the employment calculation:
    -   The hydropower plants (both river and mountain)
    -   Central burners for heat generation in the Supply section (coal, gas, biomass and waste-fired)
    -   Appliances (washing machines, stereos etc.)
    -   Ventilation, recirculation en heat recovery

