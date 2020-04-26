---
title: Heat and electricity production cost
---

This page describes how costs are calculated for individual converters in the model. The calculations are designed to be standardized so that they can be used for several types of devices. These calculations are done for each converter.

Currently, the most important use of this calculation is in the heat and electricity producing devices (including CHP's), for which the total costs are calculated using this method. These total costs are used in the dashboard, where the costs for the electricity and heat producing devices are an important part of the total costs.

This page gives an overview of all the components of the cost calculations for electricity and heat producing technologies.

## Total costs

The total costs define the yearly total costs of a technology in euro's. The total costs are split up in the fixed and variable costs of the converter. It therefore simply adds up Fixed costs and Variable costs (see below).

![](/img/docs/TotalCosts.jpg)

## Fixed costs

The fixed costs are the costs that have to be paid yearly, independent of the full load hours of the device. When more devices are required, the fixed costs will go up, but when only the number of full load hours changes, these costs remain the same.
The total costs are a combination of cost of capital, depreciation, and fixed operation and maintenance costs.

![](/img/docs/FixedCosts.jpg)

#### Cost of capital

The cost of capital is the amount of money that is spent yearly to finance the required investment for the device. It assumes that the capital required either costs money to finance, or could have been used to generate money elsewhere. This is a percentage of the average investment over the lifetime of a device, which is called the WACC, the [weighted average cost of capital](http://en.wikipedia.org/wiki/Weighted_average_cost_of_capital). This is set to 4% for domestic appliances, 6% for the buildings and agricultural sector and to 10% for industrial and larger applications. During the construction of the plant capital costs must also be paid and this is factored into the costs by taking into account the construction time into the equation.

![](/img/docs/CostOfCapital.jpg)

Where:

-   Average investment = (initial investment + initial investment for Carbon Capture and Storage (CCS) + installing costs + Decommissioning Costs ) / 2
-   WACC = [Weighted average cost of capital](http://en.wikipedia.org/wiki/Weighted_average_cost_of_capital)
-   Construction Time = the time it takes to construct a typical plant of this type
-   Technical Lifetime = the average amount of time that a plant can continue operating

#### Depreciation Costs

Next to the cost of capital, a device will decrease in value every year. Using the [straight line depreciation](http://en.wikipedia.org/wiki/Depreciation#Straight-line_depreciation) method the yearly depreciation is calculated.

![](/img/docs/DepreciationCosts.jpg)

Where:

-   Total investment = the initial investment + initial investment for Carbon Capture and Storage (CCS) + installing costs + Decommissioning Costs
-   Residual Value = the remaining value after a plant is retired (for example: selling raw material, reclaimed land, etc)
-   Technical lifetime = the average amount of time that a plant can continue operating

#### Fixed Operation and Maintenance costs

Operation and Maintenance costs can have both a fixed and a variable part. The fixed part is the costs that are made yearly, independent of whether the device is used or not. Examples of fixed costs are the costs for personnel that have to do yearly maintenance such as cleaning the device. Fixed O&M Costs are specified per year and found directly from research. This means that Fixed O&M Costs have no calculations associated with them.

## Variable costs

The variable costs depend on how much the available devices are used. It is a combination of fuel costs, the variable part of operation and maintenance costs, and if applicable, CO<sub>2</sub> emission costs.
 ![](/img/docs/VariableCosts.jpg)

#### Fuel costs

Here, the fuel costs for the device are calculated, based on the efficiency of the device. The cost of the energy carrier that is consumed is used, except for electricity and steam/hot water. The production of these energy carriers already have costs assigned, so these would be counted double if they would be calculated here again.

![](/img/docs/FuelCosts.jpg)

Where:

-   Typical fuel input = the yearly input of fuel for a typical plant of this type
-   Fuel price = the fuel price of the type(s) used by this plant for the year of calculation

#### CO<sub>2</sub> emission costs

Devices in certain sectors need to have emission rights for the CO<sub>2</sub> they emit. If they do, the amount of CO<sub>2</sub> emitted is calculated based on the carbon content of the energy carrier used, and whether part of the CO<sub>2</sub> is captured or not. The costs for CO<sub>2</sub>-emission is calculated by multiplying the emitted amount of CO<sub>2</sub> with the cost of CO<sub>2</sub>-emission rights in the area and the percentage of CO<sub>2</sub>-rights that has to be paid.

![](/img/docs/CO2Emissions.jpg)

Where:

-   Typical fuel input = the yearly input of fuel for a typical plant of this type
-   Fuel CO<sub>2</sub> emissions = the typical amount of CO<sub>2</sub> emitted when burning this fuel
-   CO<sub>2</sub> price = the price of emitting one unit of CO<sub>2</sub>
-   % free CO<sub>2</sub> credits = factor specifying how much of the CO<sub>2</sub> credits are given away for free in the current country (or area)
-   % ETS = factor specifying which part of this plant falls under the European Emissions Trading scheme
-   % CO<sub>2</sub> free = factor specifying how much of these CO<sub>2</sub> emissions do not have costs associated with them (example: non-energetic emissions of CO<sub>2</sub>)

#### Variable Operation and Maintenance costs

Here the variable operation and maintenance costs are calculated. These for example include costs for additional cleaning and service costs that depend of the number of full load hours of the device.

![](/img/docs/VariableOMCosts.jpg)

Where:

-   Full load hours = the typical yearly full load hours of a plant of this type
-   Variable Operation & Maintenance Costs per Full load hour = the normal costs for operating and maintaining the plant for one full load hour
-   Variable Operation & Maintenance Costs for CCS per Full load hour = the additional costs for operating and maintaining the Carbon Capture and Storage (CCS) part of a plant for one full load hour
