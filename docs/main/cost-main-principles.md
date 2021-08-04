---
title: Costs
---

The Energy Transition Model calculates the total cost of the yearly energy supply for a scenario. This is the sum of depreciation costs, cost of capital, operation and maintenance costs, and fuel costs of various components of the energy system. You can change these in the ['Costs'](https://pro.energytransitionmodel.com/scenario/costs/specs_electricity/coal-plants) section of the ETM.

On this page you can find a general explanation of the ETM's cost calculation principles.

## Principles
The cost calculation in the ETM adheres to the following principles:

* The ETM uses a 'greenfield' approach: In calculating the costs of a future energy system, the ETM disregards any existing assets and investments. Only investment costs of assets required in the future are taken into account. This means that the ETM does not include 'transition costs' for moving from the current energy system to the future system (such as stranded assets, disposal costs etc.)

* The ETM calculates the social _costs_ of the future energy system, not the *prices* of energy for specific stakeholders. Taxes, subsidies, levies etc. are therefore not taken into account.

* By default, the ETM contains no 'implicit' assumptions about future changes in costs, such as cost development curves. All costs figures for all technologies are based on present-day cost data. Users can make assumptions about future changes in costs for various technologies and commodities in [the Cost section](https://pro.energytransitionmodel.com/scenario/supply/merit_order/merit-order) of the model.

* The cost calculation only encompasses costs that are directly related to the energy system, i.e. the production and distribution of electricity, heat, gas, hydrogen and various other energy carriers. This means that the ETM takes into account investments for heating and cooling technologies but not for other applications, such as cars, lighting, household appliances etc. Only the fuel costs of these applications are accounted for. An overview per sector can be found [here](cost-overview-per-sector.md).

* All costs are expressed in real terms. This means that inflation is not taken into account.

* All investment costs are depreciated using the [straight line depreciation](http://en.wikipedia.org/wiki/Depreciation#Straight-line_depreciation) method.

_Note: The ETM was not created for in-depth cost analyses, but for scenario creation. Since its focus is energy, rather than costs, the ETM makes no claim to be exhaustive in the scope of its cost calculation. The resulting energy system costs are therefore best compared to those of other scenarios created with the ETM. Please be cautious when comparing the outcomes to cost estimates from other models._
