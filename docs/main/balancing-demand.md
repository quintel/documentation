---
title: Balancing demand with supply
---

Having determined energy consumption in the [Demand](https://energytransitionmodel.com/scenario/demand/households/population-and-housing-stock) section, you have the opportunity to specify how and how much electricity and heat production should be produced in the [Supply](https://energytransitionmodel.com/scenario/supply/electricity/coal-plants) section. This page shortly explains how the ETM responds when energy supply does not cover energy demand.

## Electricity
If electricity supply does not cover or either exceeds demand, the ETM uses interconnectors to exchange electricity with areas outside of your scenario area. The number of interconnectors can be adjusted in the ‘Flexibility’ section and dictate a maximum amount of electricity import or export. If the maximum amount of import is exceeded black-out hours will occur. If the maximum amount of export is exceeded, production technologies will be turned off, which is known as curtailment.

## District heating
The ETM distinguishes between input sources for two distinct types of ‘district heating’ networks:
* Supply for district heating networks (HT, MT and LT systems) for households, buildings and agriculture. These can be set for each temperature level separately in the [District heating](https://energytransitionmodel.com/scenario/supply/heat/overview-district-heating) section. The allocation of electricity and heat from CHPs and power-to-heat sources can be altered as well;
* Supply for a ‘district heating’ network for industry, called a steam network, which can be set in the [Steam network sources](https://energytransitionmodel.com/scenario/demand/industry/steam-network-sources) section.

In both networks, if the supply of heat does not match the demand, the ETM automatically balances this. Any shortages in heat production are met using a back-up boiler which runs on network gas. If there is a surplus of heat production, heat is automatically ‘dumped’.
