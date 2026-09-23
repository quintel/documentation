---
title: Heat pumps
---

This page explains how heat pumps are integrated within the ETM. You can choose to use heat pumps in households or buildings the ['Demand'](https://pro.energytransitionmodel.com/scenario/demand/households/space-heating-and-hot-water) section of the ETM.

## Temperature dependency of COP

Heat pumps use electricity to efficiently extract heat from air or water. Refrigerators use heat pumps, for example, but buildings can use them for heating and cooling too. The ETM models three types of heat pumps:

* [Air-source heat pumps](#air-source-heat-pumps) (Air)
* [Hybrid heat pumps](#hybrid-heat-pumps) (Air)
* [Ground-source heat pumps](#ground-source-heat-pump) (Water)

The efficiency of a heat pump is called the coefficient of performance (COP) and is determined by the temperature of the source from which heat is extracted.

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

### General working principle
A hybrid heat pump (HHP) is a combination of an electric heat pump that draws its heat from the outside air and an efficient conventional, fuel-fired boiler. This fuel can be either network gas, hydrogen or oil. The fuel-fired part takes over all of the heating of the building on cold winter days, when heat demand peaks. As a result, a hybrid heat pump has less impact on the electricity grid than an all-electric heat pump does. Smart use of HHps may therefore avoid the need to reinforce local power grids.

For optimal results with most types of heat pump, installation of under-floor and wall heating instead of radiators is often required, as well as good levels of insulation. The HHP partly bypasses those needs because of its fuel-fired heater as a fall-back option. Hybrid hydrogen heat pumps can intelligently use whichever part (heat pump or fuel-fired heater) is the most efficient or cost-effective given the weather conditions and insulation level. Houses with limited insulation will rely on the fuel-fired part more, better insulated ones will make more use of the heat pump.

### COP of hybrid heat pumps
The COP of HHPs is different from air-source heat pumps (ASHPs). HHPs are often installed in less well-insulated houses compared to air-source heat pumps. Additionally, these houses have different heat delivery systems, so the required output temperature of HHPs is higher than for ASHPs. Instead of 35°C output temperature, which is used for ASHPs, the ETM assumes a 45°C output temperature for HHPs.

The equation to calculate the COP based on outside temperature is:

`  COP (T) = 2.323 + 0.0578 * T  		(3)`

_Sources for the different hybrid heat pumps_:
* **Network gas hybrid heat pumps**: [Documentation hybrid heat pump (gas) - space heating](https://github.com/quintel/etdataset-public/blob/master/nodes_source_analyses/energy/households/households_space_heater_hybrid_heatpump_air_water_electricity.converter.xlsx), and [Documentation hybrid heat pump (gas) - hot water](https://github.com/quintel/etdataset-public/blob/master/nodes_source_analyses/energy/households/households_water_heater_hybrid_heatpump_air_water_electricity.converter.xlsx)
* **Hydrogen hybrid heat pumps**: [Documentation hybrid heat pump (hydrogen) - space heating](https://github.com/quintel/etdataset-public/blob/master/nodes_source_analyses/energy/households/households_space_heater_hybrid_hydrogen_heatpump_air_water_electricity.converter.xlsx), and [Documentation hybrid heat pump (hydrogen) - hot water](https://github.com/quintel/etdataset-public/blob/master/nodes_source_analyses/energy/households/households_water_heater_hybrid_hydrogen_heatpump_air_water_electricity.converter.xlsx)
* **Oil hybrid heat pumps**: [Documentation hybrid heat pump (oil) - space heating](https://github.com/quintel/etdataset-public/blob/master/nodes_source_analyses/energy/households/households_space_heater_hybrid_crude_oil_heatpump_air_water_electricity.xlsx), and [Documentation hybrid heat pump (oil) - hot water](https://github.com/quintel/etdataset-public/blob/master/nodes_source_analyses/energy/households/households_water_heater_hybrid_crude_oil_heatpump_air_water_electricity.xlsx)

### Threshold COP

The COP of HHPs depends on the ambient temperature. The COP becomes lower as the outside temperature decreases. In the ETM it is possible to set the so-called _threshold COP_, i.e. the COP below which the HHP switches from electricity to its other fuel source, i.e. network gas, hydrogen or oil. You can choose a setting that is most financially attractive for the consumer, but you can also choose a setting that reduces the impact on the electricity network. Currently, you can set the threshold COP for space heating for either gas-based HHPs (both network gas and hydrogen) or for the oil HHP. For completeness sake, the threshold COP for water heating can be adjusted as well, but note that HHPs typically use the fuel part to provide hot water. For this reason, the default water heating COP is set at the maximum value of 6.0, so that the heat pump part is never enabled.

![](/img/docs/20240405_hhp_threshold_cop_sliders.png)

_The threshold COP sliders in the ETM can be found in the [Net load](https://energytransitionmodel.com/scenario/flexibility/flexibility_net_load/demand-response-behavior-of-hybrid-heat-pumps) section._


#### Optimal threshold from a consumer perspective
To help you decide what the cost-optimal COP setting for space heating is from a consumer perspective, a special chart is available in the ETM. It shows how much it costs to make one unit of heat with the _network gas_ HHP for space heating. For the gas part, these costs are independent of the COP (and therefore the outside temperature). The costs for the electrical part are decreasing with increasing COP (and increasing outside temperature). The intersection of the two curves is the cost-optimal COP setting for space heating for the given cost price gas and electricity. This assumed cost price of gas and electricity can be set with sliders. Note that the monetary unit is euro_cents_.

![](/img/docs/20240904_Hybrid_heat_pump_threshold_COP_for_space_heating.png)

![](/img/docs/20200313_HHP_COP_gas_electricity_costs_sliders.png)

The assumptions...

* Gas price 81.4 €ct/m3 gas
* Electricity price 22.5 €ct/kWh
* Gas boiler efficiency for space heating = 1.07

... lead to a cut off COP for space heating of **2.6**. This cut-off COP is used in the starting situation of your scenario. For the HHP on hydrogen a similar cut-off COP is adopted.

The abovementioned chart is not yet available for oil HHPs, but the corresponding assumptions are:
* Oil price of 58.9 €ct / L
* Electricity price 22.5 €ct / kWh
* Oil boiler efficiency for space heating = 0.95.

The resulting threshold COP is 3.5. **Note that because of this high threshold COP, by default the oil heater might provide most if not all of the space heating functionality**.

HHPs have a varying impact on the electricity grid. The chart below shows the hourly gas and electricity demand of HHPs. Different time intervals throughout the year are available under the dropdown menu.

![](/img/docs/20240405_hourly_demand_HHP_households.png)

## Ground-source heat pump

The COP of heat pump ground is independent of the ambient temperature. The temperature of the reservoir in the ground from which the heat pump extracts heat is considered constant.

_Checkout: the specifications of ground heat pumps in [Documentation heat pump ground - space heating](https://github.com/quintel/etdataset-public/blob/master/nodes_source_analyses/energy/households/households_space_heater_heatpump_ground_water_electricity.converter.xlsx)_
