---
title: Economic viability of power plants
---

This section explains the economic viability of power plants, as presented in the following tables:
- [Economic viability of electricity production technologies]
- [Economic viability of electricity storage technologies]
- [Economic viability of electricity demand technologies]

As described in the [Cost methods](cost-methods.md), the ETM separates fuel costs from OPEX and CAPEX for each cost group. To accurately assess the economic viability of power production facilities, fuel costs must be included in the calculations.

In these tables, different cost methods are used compared to the rest of the model. Each table contains four columns, each showing calculations related to costs and revenue. All values are expressed in euros per MWh of the output carrier. The calculations for each column are as follows:

1. **CAPEX (€/MWh)**  
   The CAPEX is based on the plant's capital expenditure as shown in the [Cost methods](cost-methods.md). Since the unit is euros per MWh of the output carrier, the CAPEX for a power producer is divided by the electricity output. For a power-to-heat producer, it is divided by the heat output in MWh.

2. **OPEX (€/MWh)**  
   The OPEX in these tables differs from the regular OPEX calculated in the ETM. Fuel input costs are included. For conventional power plants, fuel and emission costs are added to the OPEX. For technologies using electricity as an input (such as batteries and flexible electricity demand technologies), OPEX is based on the hourly electricity market calculations in the ETM. The OPEX formula is illustrated below:

   ![](/img/docs/costs_equation_opex.png)

   This value is then divided by the MWh of the output carrier.

3. **Revenue (€/MWh)**  
   For technologies with electricity as an output, revenue is based on the hourly electricity market calculations in the ETM. For each hour, revenue is calculated by multiplying the electricity output by the electricity price, then dividing by the total electricity production. Revenue is not attributed to heat production due to limited information on heat value in the model. For flexible technologies with other output carriers (such as power-to-hydrogen and synthetic kerosene production), the user-defined scenario price is used to calculate revenue.

4. **Economic viability (€/MWh)**  
   Economic viability is calculated by subtracting OPEX and CAPEX from revenue, as shown below:

   ![](/img/docs/Economic_viability_equation.png)

## Special technology cases

Some technology categories have more complex cost and revenue structures:

1. **CHPs**  
   Combined Heat and Power (CHP) plants produce both heat and electricity. Since the ETM does not assign a value to produced heat, a correction is applied to the marginal costs of CHPs to ensure correct placement in the electricity market merit order. For more information, see [Waste outputs](contrib/waste-outputs.md). At the moment, the revenue of these CHPs is not corrected with this assumption. 

2. **Flexible synthetic kerosene production**  
   Synthetic kerosene production uses both electricity and hydrogen as input carriers. Therefore, fuel cost calculations are based on the input of both carriers.

3. **Battery parks & offshore hybrid wind parks**  
   Battery parks consist of multiple components. As a result, economic viability is not currently calculated for these technologies.

