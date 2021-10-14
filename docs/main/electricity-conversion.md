---
title: Electricity conversion
---

The Flexibility > ['Electricity conversion'](https://pro.energytransitionmodel.com/scenario/flexibility/flexibility_conversion/conversion-by-flexible-demand-technologies) section of the ETM deals with flexible electricity demand technologies that can convert electricity into another energy carrier. The demand of these technologies is considered flexible because it can be increased, reduced or shifted in time if needed. This characteristic is especially useful when large capacities of inflexible supply are installed, such as wind turbines and solar panels. By strategically implementing flexible electricity demand, you can decrease the amount of inflexible supply that has to be curtailed at times when it exceeds inflexible (or baseload) demand.

_Checkout: the ['Flexibility'](flexibility) infopage for more information about the difference between flexible and inflexible supply and demand technologies._

## Description of technologies

### Power-to-gas
Electricity can be used to produce hydrogen through the electrolysis of water. The sustainability of hydrogen from power-to-gas therefore depends on the carbon intensity of the electricity used to produce. In the ETM, the hydrogen produced by power-to-gas will be supplied to the central hydrogen network. You can determine the installed capacity of power-to-gas plants and their willingness-to-pay under Flexibility > Electricity conversion > ['Conversion to hydrogen'](https://pro.energytransitionmodel.com/scenario/flexibility/flexibility_conversion/conversion-to-hydrogen).

_Checkout: the ['Hydrogen'](hydrogen) infopage for more information about the central hydrogen network; what other types of supply are available, where to set hydrogen demand and how the central hydrogen network is balanced._

### Power-to-heat
In the ETM, electricity can be used to produce heat for either the district heating network or the industrial heat network. There are two power-to-heat technologies that can supply heat to the district heating network. Electric boilers directly use electricity to heat up water, while heat pumps use ambient heat as an additional input. You can determine the installed capacity of these power-to-heat technologies and their willingness-to-pay under Flexibility > Electricity conversion > ['Conversion to heat for district heating'](https://pro.energytransitionmodel.com/scenario/flexibility/flexibility_conversion/conversion-to-heat-for-district-heating).

_Checkout: the ['Heat pumps'](heat-pumps) infopage to see how heat pumps work. For more information about the district heating and industrial heating networks, go to the ['District heating'](heat-networks) infopage._

For the industrial heat network only electric boilers are available as a power-to-heat technology. It is important to note that in the ETM, these boilers can only be fitted to existing natural gas or hydrogen heaters. These boilers are available for the following sub-sectors: refineries, chemical, food and paper. You can determine the capacity of both the power-to-heat boilers and the heaters in the corresponding industry sub-sector under Demand  > ['Industry'](https://pro.energytransitionmodel.com/scenario/demand/industry/energy-demand-in-the-industry). The willingness-to-pay can be set under Flexibility > Electricity conversion > ['Conversion to heat for industry'](https://pro.energytransitionmodel.com/scenario/flexibility/flexibility_conversion/conversion-to-heat-for-industry).

## Effect of willingness-to-pay
{DESCRIPTION OF WILLINGNESS-TO-PAY}
{EXPLANATION OF ACTIVE ROLE IN MARKET CLEARING}
{EFFECT OF WTP ON MERIT ORDER, SEE MERIT ORDER}

## Other types of flexible demand

### Electricity storage
Storage options for excess electricity can be set under ['Storage'](https://pro.energytransitionmodel.com/scenario/flexibility/flexibility_storage/electricity-storage) in the ETM. Here you can change the percentage of household batteries and car batteries that is used to store excess electricity from the grid which is then released at another moment. The specs of household batteries are documented in their [node source analysis](https://github.com/quintel/etdataset-public/blob/master/nodes_source_analyses/households/households_flexibility_p2p_electricity.converter.xlsx) and for electric vehicles in their [node source analysis](https://github.com/quintel/etdataset-public/blob/master/nodes_source_analyses/transport/transport_car_using_electricity.converter.xlsx). For both options you need to have installed household batteries or electric cars in your scenario in order to see an effect. You can also choose to store electricity in large-scale battery systems connected to the grid or underground pumped hydro storage.

### Export
Excess electricity can be exported to neighbouring countries through the interconnectors between these countries. The capacity of these interconnectors is limited and can be adjusted in the Flexibility > ['Import/Export'](https://pro.energytransitionmodel.com/scenario/flexibility/electricity_import_export/interconnector-1) sub-section. Also, at times of excess electricity due to large amounts of solar or wind energy, neighbouring countries will most likely also have to deal with this excess electricity. To avoid unrealistic estimations of electricity that can be exported you can limit the interconnector capacity.
