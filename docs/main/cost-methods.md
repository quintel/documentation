---
title: Cost methods
---

This page describes how costs are calculated for individual heat- or electricity technologies in the ETM. The calculations are designed to be standardised so that they can be used for several types of plants (electricity, heat, hydrogen etc.). These calculations are done for each technology. In the ['Costs'](https://pro.energytransitionmodel.com/scenario/costs/costs_heat/district-heating-infrastructure) section of the ETM you can change costs related to the production, conversion or storage of energy. 

This page gives an overview of all the components of the cost calculations.

## Main cost groups
The yearly costs of a scenario in the ETM is splitted in six main cost groups. 
1. **Buildings and installations:** Building and installation-related costs (CAPEX + OPEX) of sectors households, buildings, transport, agriculture and industry. 
2. **Energy Production:** Installation-related costs (CAPEX + OPEX) of the energy production sector. This includes: power plants, chp plants (including the industrial steam network), heat plants, dedicated hydrogen production, biomass treatment, and other intallations (synthetic kerosine, regasification of lng, and energy compressors for network gas). 
3. **Infrastructure**: CAPEX + OPEX of the gas, heat, hydrogen, and electricity network. 
4. **Storage and conversion:** Installation-related costs (CAPEX + OPEX). All G2P is associated with means of 'Energy production'.
5. **Energy carriers and import:** All net primary demand of energy carriers.
6. **Carbon capture, sequestration and utilisation (CCSU):** CAPEX + OPEX of all CCUS technologies, including CO2 costs.


**Important:** Group 1-4 consists of the CAPEX and OPEX exclusive fuels and CCUS costs, which are categorised separately in group 5 and 6. 

## CAPEX and OPEX 
The costs of group 1-4 consists of two variables: `capital_expenditures_excluding_ccs` and `operating_expenses_excluding_ccs`
The costs define the yearly total costs of a technology in euros. The total costs are split up in the CAPEX and OPEX costs of the converter, exclusive fuel and CCS costs. 


#### Cost of capital

The cost of capital is the amount of money that is spent yearly to finance the required investment for the plant. It assumes that the capital required either costs money to finance, or could have been used to generate money elsewhere. This is a percentage of the average investment over the lifetime of a plant, which is called the WACC, the [weighted average cost of capital](http://en.wikipedia.org/wiki/Weighted_average_cost_of_capital). During the construction of the plant capital costs must also be paid and this is factored into the costs by taking into account the construction time into the equation. See the [WACC section](cost-wacc.md) for more information.

![](/img/docs/CostOfCapital.jpg)

Where:

-   Average investment = (initial investment + initial investment for Carbon Capture and Storage (CCS) + installing costs + Decommissioning Costs ) / 2
-   WACC = [Weighted average cost of capital](cost-wacc.md)
-   Construction Time = the time it takes to construct a typical plant of this type
-   Technical Lifetime = the average amount of time that a plant can continue operating

#### Depreciation Costs

Next to the cost of capital, a plant will decrease in value every year. Using the [straight line depreciation](http://en.wikipedia.org/wiki/Depreciation#Straight-line_depreciation) method the yearly depreciation is calculated.

![](/img/docs/DepreciationCosts.jpg)

Where:

-   Total investment = the initial investment + initial investment for Carbon Capture and Storage (CCS) + installing costs + Decommissioning Costs
-   Residual Value = the remaining value after a plant is retired (for example: selling raw material, reclaimed land, etc)
-   Technical lifetime = the average amount of time that a plant can continue operating

#### Fixed Operation and Maintenance costs

Operation and Maintenance costs can have both a fixed and a variable part. The fixed part is the costs that are made yearly, independent of whether the plant is used or not. Examples of fixed costs are the costs for personnel that have to do yearly maintenance such as cleaning the plant. Fixed O&M Costs are specified per year and found directly from research. This means that Fixed O&M Costs have no calculations associated with them.

## Variable costs

The variable costs depend on how much the available plants are used. It is a combination of fuel costs, the variable part of operation and maintenance costs, and if applicable, CO<sub>2</sub> emission costs.
 ![](/img/docs/VariableCosts.jpg)

#### Fuel costs

Here, the fuel costs for the plant are calculated, based on the efficiency of the plant. The cost of the energy carrier that is consumed is used, except for electricity and steam/hot water. The production of these energy carriers already have costs assigned, so these would be counted double if they would be calculated here again.

![](/img/docs/FuelCosts.jpg)

Where:

-   Typical fuel input = the yearly input of fuel for a typical plant of this type
-   Fuel price = the fuel price of the type(s) used by this plant for the year of calculation

#### CO<sub>2</sub> emission costs

Plants in certain sectors need to have emission rights for the CO<sub>2</sub> they emit. If they do, the amount of CO<sub>2</sub> emitted is calculated based on the carbon content of the energy carrier used, and whether part of the CO<sub>2</sub> is captured or not. The costs for CO<sub>2</sub>-emission is calculated by multiplying the emitted amount of CO<sub>2</sub> with the cost of CO<sub>2</sub>-emission rights in the area and the percentage of CO<sub>2</sub>-rights that has to be paid.

![](/img/docs/CO2Emissions.jpg)

Where:

-   Typical fuel input = the yearly input of fuel for a typical plant of this type
-   Fuel CO<sub>2</sub> emissions = the typical amount of CO<sub>2</sub> emitted when burning this fuel
-   CO<sub>2</sub> price = the price of emitting one unit of CO<sub>2</sub>
-   % free CO<sub>2</sub> credits = factor specifying how much of the CO<sub>2</sub> credits are given away for free in the current country (or area)
-   % ETS = factor specifying which part of this plant falls under the European Emissions Trading scheme
-   % CO<sub>2</sub> free = factor specifying how much of these CO<sub>2</sub> emissions do not have costs associated with them (example: non-energetic emissions of CO<sub>2</sub>)

#### Variable Operation and Maintenance costs

Here the variable operation and maintenance costs are calculated. These for example include costs for additional cleaning and service costs that depend of the number of full load hours of the plant.

![](/img/docs/VariableOMCosts.jpg)

Where:

-   Full load hours = the typical yearly full load hours of a plant of this type
-   Variable Operation & Maintenance Costs per Full load hour = the normal costs for operating and maintaining the plant for one full load hour
-   Variable Operation & Maintenance Costs for CCS per Full load hour = the additional costs for operating and maintaining the Carbon Capture and Storage (CCS) part of a plant for one full load hour
