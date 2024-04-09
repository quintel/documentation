---
title: Heat pumps
---

This page explains how heat pumps are integrated within the ETM. You can choose to use heat pumps in households or buildings the ['Demand'](https://pro.energytransitionmodel.com/scenario/demand/households/space-heating-and-hot-water) section of the ETM. 

## Temperature dependency of COP

Heat pumps use electricity to efficiently extract heat from air or water. The ETM models three types of heat pumps:

* [Air-source heat pumps](#air-source-heat-pumps) (Air)
* [Hybrid heat pumps](#hybrid-heat-pumps) (Air)
* [Ground-source heat pumps](#ground-source-heat-pump) (Water)

The coefficient of performance (COP) is influenced by the temperature of the source from which heat is extracted.

## Air-source heat pumps

### Space heating

The temperature dependency of the COP of air-source heat pumps (ASHPs) is based on research done by ECN and used by Ecofys in their report ['Systeemkosten van warmte voor woningen'](https://refman.energytransitionmodel.com/publications/2063).

The equation used is:

`  COP(T) = 3.25 + 0.0875 * T     		(1)`

Where T is the ambient temperature.

![](/img/docs/20170921_COP_space.png)

### Hot water

The temperature dependency of the COP of ASHPs is also based on research done by ECN and used by Ecofys in their report ['Systeemkosten van warmte voor woningen'](https://refman.energytransitionmodel.com/publications/2063).

The equation used is:

`  COP(T) = 1.86 + 0.043 * T     		(2)`

Where T is the ambient temperature.

![](/img/docs/20170921_COP_water.png)

More information about the sources behind specifications of heat pump ground can be found here: [Documentation heat pump air - space heating](https://github.com/quintel/etdataset-public/blob/master/nodes_source_analyses/energy/households/households_space_heater_heatpump_air_water_electricity.converter.xlsx) and here: [Documentation heat pump air - hot water](https://github.com/quintel/etdataset-public/blob/master/nodes_source_analyses/energy/households/households_water_heater_heatpump_air_water_electricity.converter.xlsx).

## Hybrid heat pumps

The COP of hybrid heat pumps (HHPs) is different from air-source heat pumps (ASHPs). HHPs are often installed in less well-insulated houses compared to air-source heat pumps. Additionally, these houses typically have different heat delivery systems, so the required output temperature of HHPs is higher than for ASHPs. Instead of 35°C output temperature, which is used for ASHPs, an 45°C output temperature for HHPs is assumed.

The equation to calculate the COP based on outside temperature is:

`  COP (T) = 2.323 + 0.0578 * T  		(3)`

_Sources for the different hybrid heat pumps_: 
* **Network gas hybrid heat pumps**: [Documentation hybrid heat pump (gas) - space heating](https://github.com/quintel/etdataset-public/blob/master/nodes_source_analyses/energy/households/households_space_heater_hybrid_heatpump_air_water_electricity.converter.xlsx), and [Documentation hybrid heat pump (gas) - hot water](https://github.com/quintel/etdataset-public/blob/master/nodes_source_analyses/energy/households/households_water_heater_hybrid_heatpump_air_water_electricity.converter.xlsx)
* **Hydrogen hybrid heat pumps**: [Documentation hybrid heat pump (hydrogen) - space heating](https://github.com/quintel/etdataset-public/blob/master/nodes_source_analyses/energy/households/households_space_heater_hybrid_hydrogen_heatpump_air_water_electricity.converter.xlsx), and [Documentation hybrid heat pump (hydrogen) - hot water](https://github.com/quintel/etdataset-public/blob/master/nodes_source_analyses/energy/households/households_water_heater_hybrid_hydrogen_heatpump_air_water_electricity.converter.xlsx)
* **Oil hybrid heat pumps**: [Documentation hybrid heat pump (oil) - space heating](https://github.com/quintel/etdataset-public/blob/master/nodes_source_analyses/energy/households/households_space_heater_hybrid_crude_oil_heatpump_air_water_electricity.xlsx), and [Documentation hybrid heat pump (oil) - hot water](https://github.com/quintel/etdataset-public/blob/master/nodes_source_analyses/energy/households/households_water_heater_hybrid_crude_oil_heatpump_air_water_electricity.xlsx)

### Threshold COP

The efficiency of hybrid heat pumps (HHPs) depends on the ambient temperature and is represented by the coefficient of performance (COP). The COP becomes lower as the ambient temperature decreases. In the ETM it is possible to set a so-called _threshold COP_, i.e. the COP below which the HHP switches from electricity to its other fuel source (network gas, hydrogen or oil). You can choose a setting that is most financially attractive for the consumer, but you can also choose a setting that reduces the impact on the electricity network.

Currently, you can set the threshold COP for space heating for either gas-based HHPs (both network gas and hydrogen) or for the oil HHP. Additionally, the threshold COP for water heating can be adjusted as well for completeness sake, but note that HHPs typically use the fuel part to provide hot water. For this reason, the default water heating COP is set at the maximum value of `6.0`, so that the heat pump part is effectively never enabled.

![](/img/docs/20240405_hhp_threshold_cop_sliders.png)

_The threshold COP sliders in the ETM can be found in the [Net load](https://energytransitionmodel.com/scenario/flexibility/flexibility_net_load/demand-response-behavior-of-hybrid-heat-pumps) section._


#### Optimal threshold from a consumer perspective
To help you decide what the cost-optimal COP setting for space heating is from a consumer perspective, a special chart is available in the ETM. It shows how much it costs to make one unit of heat with the _network gas_ HHP for space heating. For the gas part, these costs are independent of the COP (and therefore the outside temperature). The costs for the electrical part are decreasing with increasing COP (and increasing outside temperature). The intersection of the two curves is the cost-optimal COP setting for space heating for the given cost price gas and electricity. This assumed cost price of gas and electricity can be set with sliders. Note that the monetary unit is euro_cents_.

![](/img/docs/20240904_Hybrid_heat_pump_threshold_COP_for_space_heating.png)

![](/img/docs/20200313_HHP_COP_gas_electricity_costs_sliders.png)

The assumptions...

- Gas price 81.4 €ct/m3 gas
- Electricity price 22.5 €ct/kWh
- Gas efficiency space heating = 1.07

... lead to a cut off COP for space heating of **2.6**. This cut-off COP is used in the starting situation of your scenario. For the HHP on hydrogen a similar cut-off COP is adopted.

#### Optimal threshold from a network perspective
HHPs have a varying impact on the electricity grid. The chart below shows the hourly gas and electricity demand of HHPs. Different time intervals throughout the year are available under the dropdown menu.

![](/img/docs/20240405_hourly_demand_HHP_households.png)

## Ground-source heat pump

The COP of heat pump ground is independent of the ambient temperature. The temperature of the reservoir in the ground from which the heat pump extracts heat is considered constant.

_Checkout: the specifications of ground heat pumps in [Documentation heat pump ground - space heating](https://github.com/quintel/etdataset-public/blob/master/nodes_source_analyses/energy/households/households_space_heater_heatpump_ground_water_electricity.converter.xlsx)_

