---
title: Electricity conversion
---

The Flexibility > ['Electricity conversion'](https://pro.energytransitionmodel.com/scenario/flexibility/flexibility_conversion/conversion-by-flexible-demand-technologies) section of the ETM deals with flexible electricity demand technologies that can convert electricity into another energy carrier. The demand of these technologies is considered flexible because it can be increased, reduced or shifted in time if needed. This characteristic is especially useful when large capacities of inflexible supply are installed, such as wind turbines and solar panels. By strategically implementing flexible electricity demand, you can decrease the amount of inflexible supply that has to be curtailed at times when it exceeds inflexible (or baseload) demand.

_Checkout: the ['Flexibility'](flexibility) infopage for more information about the difference between flexible and inflexible supply and demand technologies._

## Behaviour of technologies
The behaviour of flexible demand technologies is determined mainly by the **installed capacity** and the **willingness-to-pay**. The installed capacity determines how much electricity each technology can consume in a given hour. The willingness-to-pay determines the maximum price that a technology is willing to pay to consume that electricity.

### Willingness-to-pay
When multiple flexible demand technologies are installed, each with their own willingness-to-pay, this creates a demand-side merit order. Inflexible (or baseload) demand is always served first in this merit order. This is because the willingness-to-pay of the baseload demand is effectively represented by the Value of Lost Load (['VoLL'](https://pro.energytransitionmodel.com/scenario/costs/costs_flexibility/value-of-lost-load)). Baseload demand is only curtailed when total supply falls short. In this case a shortage occurs and load is lost (see ['Loss of Load Expectation'](loss-of-load-expectation)). The costs that consumers incur for this loss of load is represented by the VoLL, which typically ranges between 3000 and 10000 euros/MWh and is therefore significantly higher than the typical willingness-to-pay of flexible demand technologies.

The electricity market is cleared in each hour by matching the demand-side merit order with the supply-side merit order. This market clearing determines which flexible demand technologies are supplied in each hour and what the electricity price will be. If a flexible demand technology is price-setting in a given hour, the electricity price in that hour will be equal to the willingness-to-pay of that technology.

_Checkout: the ['Merit order'](merit-order) infopage for more information on the clearing of the demand-side and supply-side merit order in the model, including an description of how the electricity price is set._

## Description of technologies

### Power-to-gas
Electricity can be used to produce hydrogen through the electrolysis of water. The sustainability of hydrogen from power-to-gas therefore depends on the carbon intensity of the electricity used to produce. In the ETM, the hydrogen produced by power-to-gas will be supplied to the central hydrogen network. You can determine the installed capacity of power-to-gas plants and their willingness-to-pay under Flexibility > Electricity conversion > ['Conversion to hydrogen'](https://pro.energytransitionmodel.com/scenario/flexibility/flexibility_conversion/conversion-to-hydrogen).

_Checkout: the ['Hydrogen'](hydrogen) infopage for more information about the central hydrogen network; what other types of supply are available, where to set hydrogen demand and how the central hydrogen network is balanced._

### Power-to-heat
In the ETM, electricity can be used to produce heat for either the district heating network or the industrial heat network. There are two power-to-heat technologies that can supply heat to the district heating network. Electric boilers directly use electricity to heat up water, while heat pumps use ambient heat as an additional input. You can determine the installed capacity of these power-to-heat technologies and their willingness-to-pay under Flexibility > Electricity conversion > ['Conversion to heat for district heating'](https://pro.energytransitionmodel.com/scenario/flexibility/flexibility_conversion/conversion-to-heat-for-district-heating).

_Checkout: the ['Heat pumps'](heat-pumps) infopage to see how heat pumps work. For more information about the district heating and industrial heating networks, go to the ['District heating'](heat-networks) infopage._

For the industrial heat network only electric boilers are available as a power-to-heat technology. It is important to note that in the ETM, these boilers are fitted to existing natural gas or hydrogen heaters. These boilers are available for the following sub-sectors: refineries, chemical, food and paper. You can determine the capacity of both the power-to-heat boilers and the heaters in the corresponding industry sub-sector under Demand  > ['Industry'](https://pro.energytransitionmodel.com/scenario/demand/industry/energy-demand-in-the-industry). The willingness-to-pay can be set under Flexibility > Electricity conversion > ['Conversion to heat for industry'](https://pro.energytransitionmodel.com/scenario/flexibility/flexibility_conversion/conversion-to-heat-for-industry).

### Electricity storage
Consumption by electricity storage technologies, also known as power-to-power, is another form of flexible electricity demand. An example of this is charging by batteries. For electricity storage two types of behaviour are available: one that is based on willingness-to-pay and willingness-to-accept prices and another that uses a forecasting algorithm. On the ['Electricity storage'](electricity-storage) infopage you can read more about both types of behaviour.

### Export
Electricity can be exported to neighbouring countries through the interconnectors between these countries. The capacity of these interconnectors is limited and can be adjusted in the Flexibility > ['Import/Export'](https://pro.energytransitionmodel.com/scenario/flexibility/electricity_import_export/interconnector-1) sub-section. The behaviour of export is then very similar to flexible electricity conversion technologies. The main difference is that the willingness-to-pay of export is given by the price of the interconnector, which represents the electricity price in the neighbouring country. In the Import/Export sub-section you can change this price or upload an hourly price curve to model the hourly electricity price in the neighbouring country.