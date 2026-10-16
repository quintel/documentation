---
title: Heat pumps
---

This page explains how heat pumps are integrated within the ETM. You can choose to use heat pumps in households or buildings in the ['Demand'](https://pro.energytransitionmodel.com/scenario/demand/households/space-heating-and-hot-water) section of the ETM.

## Overview

Heat pumps use electricity to efficiently extract heat from a source such as air, ground or water. The ETM distinguishes heat pump technologies along three dimensions:

* **Heat source** — where the heat pump extracts its heat from.
* **Heat sink** — where the heat pump delivers its heat to, such as water (for radiators or underfloor heating) or air.
* **Standalone or hybrid** — whether the heat pump is all-electric, or combined with a fuel-fired boiler as backup.

These dimensions combine into the technologies described below: [air-to-water](#air-to-water-heat-pumps) and [air-to-air](#air-to-air-heat-pumps-airco) heat pumps each come in a standalone (all-electric) and a hybrid (+ fuel backup) variant, while [ground-to-water](#ground-to-water-heat-pump), [surface water-to-water (aquathermal)](#surface-water-to-water-heat-pump-aquathermal) and [solar thermal-to-water (PVT)](#solar-thermal-to-water-heat-pump-pvt) heat pumps are only available as standalone. Unless stated otherwise, the heat pumps on this page are standalone (all-electric).

The efficiency of a heat pump is called the coefficient of performance (COP). In general, the COP depends on the temperature of the source from which heat is extracted, and is described by a formula of the form:

`  COP(T) = base_cop + cop_per_degree * T`

Where `T` is the relevant source temperature, and `base_cop` / `cop_per_degree` are defined in each technology's documentation sheet. This linear formula is a simplification of the real, non-linear relationship between COP and source temperature, fitted to represent the technology's performance over its typical operating range.

### Hybrid heat pumps

#### General working principle
A hybrid heat pump (HHP) is a combination of an electric heat pump and a fuel-fired boiler. In the ETM, hybrids are available as [air-to-water](#air-to-water-heat-pumps) heat pumps with network gas, hydrogen or oil as fuel, and as [air-to-air](#air-to-air-heat-pumps-airco) heat pumps with network gas. The fuel-fired part can take over all of the heating of the building on cold winter days, when heat demand peaks. As a result, a hybrid heat pump has less impact on the electricity grid than an all-electric heat pump does. Smart use of HHPs may therefore avoid the need to reinforce local power grids.

For optimal results with most types of heat pump, installation of under-floor and wall heating instead of radiators is often required, as well as good levels of insulation. The HHP partly bypasses those needs because of its fuel-fired heater as a fall-back option. Hybrid heat pumps can intelligently use whichever part (heat pump or fuel-fired heater) is the most efficient or cost-effective given the weather conditions and insulation level. Houses with limited insulation will rely on the fuel-fired part more, better insulated ones will make more use of the heat pump.

#### Threshold COP and fuel top-up

Each hybrid heat pump has a _threshold COP_: the COP below which it switches from electricity to its fuel. How the threshold COP is set differs per technology, and is described in the sections on [air-to-water](#air-to-water-heat-pumps) and [air-to-air](#air-to-air-heat-pumps-airco) heat pumps.

The threshold COP is not the only reason the fuel-fired part of a hybrid heat pump runs. Each hour, the ETM first lets the electric heat pump supply as much heat as it can, given its electrical capacity and that hour's COP. If this is not enough to meet that hour's full heat demand the fuel-fired part supplies the remaining, unmet demand within that same hour, even if the COP is still above the threshold COP. In other words, the threshold COP and the heat pump's capacity are two independent triggers for the fuel-fired part. This applies to all hybrid heat pumps, including the network gas / hydrogen / oil air-to-water variants and the hybrid air conditioning technology described below.

## Air-to-water heat pumps

### Standalone

The standalone air-to-water heat pump, also known as an air-source heat pump (ASHP), extracts heat from the outside air and delivers it to a water-based heating system.

#### Space heating

`  COP(T) = 3.058 + 0.0593 * T`

Where T is the ambient temperature.

_Checkout the specifications in [Documentation heat pump air - space heating](https://github.com/quintel/etdataset-public/blob/master/nodes_source_analyses/energy/households/households_space_heater_heatpump_air_water_electricity.xlsx?raw=true)._

#### Hot water

`  COP(T) = 2.104 + 0.0407 * T`

Where T is the ambient temperature.

_Checkout the specifications in [Documentation heat pump air - hot water](https://github.com/quintel/etdataset-public/blob/master/nodes_source_analyses/energy/households/households_water_heater_heatpump_air_water_electricity.xlsx?raw=true)._

### Hybrid

The hybrid air-to-water heat pump combines an air-source heat pump with a fuel-fired boiler on network gas, hydrogen or oil. See [hybrid heat pumps](#hybrid-heat-pumps) for the general working principle.

#### COP of hybrid heat pumps
The COP as a function of outside temperature, and the corresponding sources, differ per fuel:

| Fuel | Space heating COP(T) | Hot water COP(T) | Sources |
|---|---|---|---|
| Network gas | 3.058 + 0.0593 * T | 2.104 + 0.0407 * T | [Space heating](https://github.com/quintel/etdataset-public/blob/master/nodes_source_analyses/energy/households/households_space_heater_hybrid_heatpump_air_water_electricity.xlsx?raw=true), [Hot water](https://github.com/quintel/etdataset-public/blob/master/nodes_source_analyses/energy/households/households_water_heater_hybrid_heatpump_air_water_electricity.xlsx?raw=true) |
| Hydrogen | 2.323 + 0.0578 * T | 1.86 + 0.043 * T | [Space heating](https://github.com/quintel/etdataset-public/blob/master/nodes_source_analyses/energy/households/households_space_heater_hybrid_hydrogen_heatpump_air_water_electricity.converter.xlsx?raw=true), [Hot water](https://github.com/quintel/etdataset-public/blob/master/nodes_source_analyses/energy/households/households_water_heater_hybrid_hydrogen_heatpump_air_water_electricity.converter.xlsx?raw=true) |
| Oil | 2.323 + 0.0578 * T | 2.323 + 0.0578 * T | [Space heating](https://github.com/quintel/etdataset-public/blob/master/nodes_source_analyses/energy/households/households_space_heater_hybrid_crude_oil_heatpump_air_water_electricity.xlsx?raw=true), [Hot water](https://github.com/quintel/etdataset-public/blob/master/nodes_source_analyses/energy/households/households_water_heater_hybrid_crude_oil_heatpump_air_water_electricity.xlsx?raw=true) |

#### Threshold COP

The COP of HHPs depends on the ambient temperature. The COP becomes lower as the outside temperature decreases. In the ETM it is possible to set the threshold COP, i.e. the COP below which the HHP switches from electricity to its other fuel source, i.e. network gas, hydrogen or oil. You can choose a setting that is most financially attractive for the consumer, but you can also choose a setting that reduces the impact on the electricity network. Currently, you can set the threshold COP for space heating for either gas-based HHPs (both network gas and hydrogen) or for the oil HHP. For completeness sake, the threshold COP for water heating can be adjusted as well, but note that HHPs typically use the fuel part to provide hot water. For this reason, the default water heating COP is set at the maximum value of 6.0, so that the heat pump part is never enabled.

![](/img/docs/20240405_hhp_threshold_cop_sliders.png)

_The threshold COP sliders in the ETM can be found in the [Net load](https://energytransitionmodel.com/scenario/flexibility/flexibility_net_load/demand-response-behavior-of-hybrid-heat-pumps) section._

#### Optimal threshold from a consumer perspective
To help you decide what the cost-optimal COP setting for space heating is from a consumer perspective, a special chart is available in the ETM. It shows how much it costs to make one unit of heat with the _network gas_ HHP for space heating. For the gas part, these costs are independent of the COP (and therefore the outside temperature). The costs for the electrical part are decreasing with increasing COP (and increasing outside temperature). The intersection of the two curves is the cost-optimal COP setting for space heating for the given cost price gas and electricity. This assumed cost price of gas and electricity can be set with sliders. Note that the monetary unit is _euro_ _cents_.

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

## Air-to-air heat pumps ("airco")

Air-to-air heat pumps use the same working principle as air-to-water heat pumps: electricity and ambient heat to generate heat. However, the heat is distributed directly through air (an air conditioning unit) rather than through a water-based system such as underfloor heating or radiators. They are typically installed alongside, or as part of, a cooling/air conditioning system.

### Standalone

The standalone variant is an air conditioning unit with a heat pump boiler. It uses an air conditioning unit that can also heat (an air-to-air heat pump) for space heating, paired with a separate heat pump boiler for hot water production. There is no fuel-fired backup.

Space heating and hot water have different COPs:

#### Space heating

`  COP(T) = 2.856 + 0.0752 * T`

Where T is the ambient temperature.

#### Hot water

`  COP(T) = 2.104 + 0.0407 * T`

Where T is the ambient temperature.

_Checkout the specifications in [Documentation air conditioning with heat pump boiler - space heating](https://github.com/quintel/etdataset-public/blob/master/nodes_source_analyses/energy/households/households_space_heater_airconditioning_with_heat_pump_boiler.xlsx?raw=true) and [Documentation air conditioning with heat pump boiler - hot water](https://github.com/quintel/etdataset-public/blob/master/nodes_source_analyses/energy/households/households_water_heater_airconditioning_with_heat_pump_boiler.xlsx?raw=true)._

### Hybrid

The hybrid variant is an air conditioning unit with a gas combi boiler. It combines a smaller air-to-air heat pump with a gas-fired combi boiler, which provides space heating backup and all hot water production. Even though it is modelled as a hybrid, the threshold COP has no real function here: for space heating it is hardcoded to 1.0, a value the air conditioning's COP never drops below, and for hot water it is hardcoded to 10.0, a value it will never reach. The air conditioning is therefore assumed to always supply heat for space heating regardless of its COP, with the gas boiler only supplying the space heating deficit that the air conditioning cannot cover, plus all hot water.

This is because the behaviour of people who heat using air conditioning differs from that with other heat pumps. It can be used to heat an entire house, but is also used to, for example, apply additional heating to a specific room while the gas boiler heats the entire house to a minimum temperature. Combined use of both the heat pump and the gas boiler at the same time is therefore more likely than a hard cutoff based on COP.

Unlike the network gas / hydrogen / oil hybrid heat pumps, this threshold COP is currently not user-adjustable via a slider.

For space heating, the COP is:

`  COP(T) = 2.856 + 0.0752 * T`

Where T is the ambient temperature.

Unlike the standalone variant above, hot water here is not produced by a heat pump: it is provided entirely by the gas combi boiler, which has a fixed, temperature-independent efficiency rather than a COP.

_Checkout the specifications in [Documentation air conditioning with gas combi boiler - space heating](https://github.com/quintel/etdataset-public/blob/master/nodes_source_analyses/energy/households/households_space_heater_hybrid_airconditioning_combined_network_gas.xlsx?raw=true) and [Documentation air conditioning with gas combi boiler - hot water](https://github.com/quintel/etdataset-public/blob/master/nodes_source_analyses/energy/households/households_water_heater_hybrid_airconditioning_combined_network_gas.xlsx?raw=true)._

## Ground-to-water heat pump

The ground-to-water heat pump (also known as a ground-source heat pump) extracts heat from the ground and delivers it to a water-based heating system. Its COP is independent of the ambient temperature: the temperature of the reservoir in the ground from which the heat pump extracts heat is considered constant.

_Checkout the specifications in [Documentation heat pump ground - space heating](https://github.com/quintel/etdataset-public/blob/master/nodes_source_analyses/energy/households/households_space_heater_heatpump_ground_water_electricity.converter.xlsx?raw=true) and [Documentation heat pump ground - hot water](https://github.com/quintel/etdataset-public/blob/master/nodes_source_analyses/energy/households/households_water_heater_heatpump_ground_water_electricity.converter.xlsx?raw=true)._

## Surface water-to-water heat pump (aquathermal)

This heat pump abstracts heat from surface water and is equipped with seasonal thermal storage (TS).

For space heating, the COP is:

`  COP(T) = 3.25 + 0.0875 * T`

For hot water, the COP is:

`  COP(T) = 1.86 + 0.043 * T`

Where T is the surface water temperature.

_Checkout the specifications in [Documentation aquathermal heat pump - space heating](https://github.com/quintel/etdataset-public/blob/master/nodes_source_analyses/energy/households/households_space_heater_heatpump_surface_water_water_ts_electricity.xlsx?raw=true)._ The hot water variant of this technology shares the same source analysis.

It is also possible to use aquathermal energy for district heating. Checkout the [district heating](heat-networks) documentation for more information.

## Solar thermal-to-water heat pump (PVT)

Unlike the other heat pumps on this page, the PVT heat pump does not extract heat from an ambient source and does not have a temperature-dependent COP. Instead, it combines a fixed share of electricity with a fixed share of heat from a solar-thermal (PVT) collector to produce useable heat:

* **Space heating**: 20.4% electricity, 79.6% solar thermal.
* **Hot water**: 30.3% electricity, 69.7% solar thermal.

_Checkout the specifications in [Documentation PVT heat pump - space heating](https://github.com/quintel/etdataset-public/blob/master/nodes_source_analyses/energy/households/households_space_heater_heatpump_pvt_electricity.converter.xlsx?raw=true) and [Documentation PVT heat pump - hot water](https://github.com/quintel/etdataset-public/blob/master/nodes_source_analyses/energy/households/households_water_heater_heatpump_pvt_electricity.converter.xlsx?raw=true)._
