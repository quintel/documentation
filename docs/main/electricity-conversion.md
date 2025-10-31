---
title: Electricity conversion
---

The [Electricity conversion](https://energytransitionmodel.com/scenario/flexibility/flexibility_conversion/conversion-by-flexible-demand-technologies) section of the ETM deals with flexible electricity demand technologies that can convert electricity into another energy carrier. The demand of these technologies is considered flexible because it can be increased, reduced or shifted in time if needed. This characteristic is especially useful when large capacities of inflexible supply are installed, such as wind turbines and solar panels. By strategically implementing flexible electricity demand, you can decrease the amount of inflexible supply that has to be curtailed at times when it exceeds inflexible (or baseload) demand.

:::info Flexibility
See [the Flexibility page](flexibility.md) for more information about the difference between flexible and inflexible supply and demand technologies.
:::

## Behaviour of technologies

The behaviour of flexible demand technologies is determined mainly by the **installed capacity** and the **willingness to pay**. The installed capacity determines how much electricity each technology can consume in a given hour. The willingness to pay determines the maximum price that a technology is willing to pay to consume that electricity.

### Willingness to pay

When multiple flexible demand technologies are installed, each with their own willingness to pay, this creates a demand-side merit order. Inflexible (or baseload) demand is always served first in this merit order. This is because the willingness to pay of the baseload demand is effectively represented by the Value of Lost Load (["VoLL"](https://energytransitionmodel.com/scenario/costs/costs_flexibility/value-of-lost-load)). Baseload demand is only curtailed when total supply falls short. In this case a shortage occurs and load is lost (see [Loss of Load Expectation](loss-of-load-expectation.md)). The costs that consumers incur for this loss of load is represented by the VoLL, which typically ranges between 3000 and 10000 euros/MWh and is therefore significantly higher than the typical willingness to pay of flexible demand technologies.

The electricity market is cleared in each hour by matching the demand-side merit order with the supply-side merit order. This market clearing determines which flexible demand technologies are supplied in each hour and what the electricity price will be. If a flexible demand technology is price-setting in a given hour, the electricity price in that hour will be equal to the willingness to pay of that technology.

:::info Merit order
See [Merit order](merit-order.md) for more information on the clearing of the demand-side and supply-side merit order in the model, including an description of how the electricity price is set.
:::

## Description of technologies

### Power-to-gas

Electricity can be used to produce hydrogen through the electrolysis of water. The sustainability of hydrogen from power-to-gas therefore depends on the carbon intensity of the electricity used to produce. In the ETM, the hydrogen produced by power-to-gas will be supplied to the central hydrogen network.

You can determine the installed capacity of onshore power-to-gas plants and their willingness to pay in the [Conversion to hydrogen](https://energytransitionmodel.com/scenario/flexibility/flexibility_conversion/conversion-to-hydrogen) section. Additionally, it is possible to set installed capacity for an offshore electrolyser as part of a hybrid offshore wind hub. Capacity can be installed in the [Flexibility](https://energytransitionmodel.com/scenario/flexibility/flexibility_net_load/hybrid-offshore-wind-components) section. See [Hybrid offshore wind](hybrid-offshore-wind) for more information.

:::info Hydrogen
See [Hydrogen](hydrogen.md) for more information about the central hydrogen network; what other types of supply are available, where to set hydrogen demand and how the central hydrogen network is balanced.
:::

### Power-to-heat
In the ETM, electricity can be used to produce heat for the district heating network, the industrial steam network or in agriculture.

#### District heating network
The installed capacity of the power-to-heat technologies for district heating can be set in the [Flexibility](https://energytransitionmodel.com/scenario/flexibility/flexibility_conversion/conversion-to-heat-for-district-heating) section. This is also where the willingness to pay can be set. For these technologies, the behaviour is not only price-dependent but also temperature-dependent, based on the temperatue cut-off:
* In hours where the outside air temperature is above the temperature cut-off, the availability is set at 0%.
* In hours where the outside air temperature is below the temperature cut-off, the availability is set at 100%.

:::info Availability of power-to-heat
To model availability more precisely, you can override the availability of each technology type — such as boilers, heat pumps, HT, and MT — by uploading hourly profiles in the [modify profiles](https://energytransitionmodel.com/scenario/flexibility/curve_upload/upload-curves) section. Each profile only overrides that technology’s availability. Setting all four availability curves does not disable the temperature setpoint slider in the interface, but it will render it ineffective.
:::

#### Industrial steam network
For the industrial steam network, only electric boilers are available as a power-to-heat technology. These boilers are fitted to existing natural gas or hydrogen heaters. They are available for the industry sub sectors refineries, chemical, food and paper. The capacity of both the power-to-heat boilers and the heaters can be set in the sub sectors in the [Industry](https://energytransitionmodel.com/scenario/demand/industry/energy-demand-in-the-industry) section. The willingness to pay can be set in the [Flexibility](https://energytransitionmodel.com/scenario/flexibility/flexibility_conversion/conversion-to-heat-for-industry) section.

#### Agriculture
For agriculture, power-to-heat works the same as for the industrial steam network. These boilers are fitted to existing natural gas or hydrogen heaters. The capacity of both the power-to-heat boilers and the heaters can be set in the sub sectors in the [Agriculture](https://energytransitionmodel.com/scenario/demand/agriculture/heat) section. The willingness to pay can be set in the [Flexibility](https://energytransitionmodel.com/scenario/flexibility/flexibility_conversion/conversion-to-heat-for-agriculture) section.

### Power for synthetic kerosene production
In the ETM, electricity can also be used for the production of synthetic kerosene. This kerosene is produced by combining electricity, hydrogen and CO2<sub>2</sub>. See the [Utilisation and storage of CO<sub>2</sub>](co2-ccus.md)page for more information.

The capacity of the dispatchable synthetic kerosene production can be set under [Utilisation and storage of CO<sub>2</sub>](https://energytransitionmodel.com/scenario/emissions/ccus/utilisation-and-storage-of-co2). The willingness to pay can be set under [Conversion to kerosene for industry](https://pro.energytransitionmodel.com/scenario/flexibility/flexibility_conversion/).

### Electricity storage
Consumption by electricity storage technologies, also known as power-to-power, is another form of flexible electricity demand. An example of this is charging by batteries. For electricity storage two types of behaviour are available: one that is based on willingness to pay and willingness to accept prices and another that uses a forecasting algorithm. The [electricity storage documentation](electricity-storage.md) contains more information about both types of behaviour.

### Export
Electricity can be exported to neighbouring countries through the interconnectors between these countries. The capacity of these interconnectors is limited and can be adjusted in the [Import/Export](https://energytransitionmodel.com/scenario/flexibility/electricity_import_export/interconnector-1) sub-section. The behaviour of export is then very similar to flexible electricity conversion technologies. The main difference is that the willingness to pay of export is given by the price of the interconnector, which represents the electricity price in the neighbouring country. In the Import/Export sub-section you can change this price or upload an hourly price curve to model the hourly electricity price in the neighbouring country.
