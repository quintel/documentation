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

The COP of hybrid heat pumps (HHPs) is different from air-source heat pumps (ASHPs). HHPs are often installed in less insulated houses compared to air-source heat pumps and additionally these houses have different heat delivery systems, so the required output temperature of HHPs is higher than for ASHPs. Instead of 35°C output temperature, which is used for ASHPs, 45°C output temperature for HHPs is assumed. With this output temperature and the cost-optimal threshold COP (about the threshold COP you can find more information below), the HHP electricity share for houses with energy label B is 64%.

![](/img/docs/20200401_hhp_gas_elec_share.png)

The equation used is:

`  COP (T) = 2.323 + 0.0578 * T  		(3)`

_Sources: [Documentation hybrid heat pump (gas) - space heating](https://github.com/quintel/etdataset-public/blob/master/nodes_source_analyses/energy/households/households_space_heater_hybrid_heatpump_air_water_electricity.converter.xlsx), and here: [Documentation hybrid heat pump (gas) - hot water](https://github.com/quintel/etdataset-public/blob/master/nodes_source_analyses/energy/households/households_water_heater_hybrid_heatpump_air_water_electricity.converter.xlsx)_

### Threshold-COP

The efficiency of hybrid heat pumps (HHPs) is dependent on the ambient temperature and is depicted by the coefficient of performance (COP). The COP becomes lower as the outside temperature decreases. In the ETM it is possible to set the COP for which the HHP must switch between electricity and gas. You can choose a setting that is most financially attractive for the consumer, but you can also choose a setting that produces less impact on the electricity network

![](/img/docs/20200401_threshold_COP_sliders.png)

_Checkout: the threshold COP sliders in the ETM in the [Flexibility → Net load](https://pro.energytransitionmodel.com/scenario/flexibility/flexibility_net_load/demand-response-behavior-of-hybrid-heat-pumps) section._

To help you decide the cost-optimal COP setting from a consumer perspective, a special chart is added to the ETM. It shows how much it costs to make a unit of heat with the HHP for space heating. For the gas part, these costs are independent of the COP (and therefore the outside temperature). The costs for the electrical part are decreasing with increasing COP (and increasing outside temperature). The intersection of the two curves is the cost-optimal COP setting for space heating for the given cost price gas and electricity. This assumed cost price of gas and electricity can be set with sliders.

![](/img/docs/20210730_HHP_cost_optimal_COP_chart.png)

![](/img/docs/20200313_HHP_COP_gas_electricity_costs_sliders.png)

The assumptions...

- Gas price 81.4 ct/m3 gas
- Electricity price 22.5 ct/kWh
- Gas efficiency space heating = 1.07

... lead to a cut off COP for space heating of **2.6**. This cut-off COP is used in the start situation of your scenario. For the HHP on hydrogen a similar cut-off COP is adopted.

If you are interested in the impact of HHPs on the electricity grid, you can have a look at the chart that is shown when clicking on the 'Annual'-button in the right corner of the chart. This chart shows the hourly gas and electricity demand of HHPs.

![](/img/docs/20200320_hourly_demand_HHP_households.png)

## Ground-source heat pump

The COP of heat pump ground is independent of the ambient temperature. The temperature of the reservoir in the ground from which the heat pump extracts heat is considered constant.

_Checkout: the specifications of ground heat pumps in [Documentation heat pump ground - space heating](https://github.com/quintel/etdataset-public/blob/master/nodes_source_analyses/energy/households/households_space_heater_heatpump_ground_water_electricity.converter.xlsx)_

