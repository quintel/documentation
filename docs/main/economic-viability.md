---
title: Economic viability of power plants
---

This section explains the economic viability of power plants, as presented in the following tables:
- **Economic viability of electricity production technologies**
- **Economic viability of electricity storage technologies**
- **Economic viability of flexible electricity demand technologies**

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
   CHPs are a special case because they produce both electricity and heat. However, only the revenue from electricity production is considered, as no value is assigned to the heat they generate.

2. **Flexible synthetic kerosene production**  
   Synthetic kerosene production uses both electricity and hydrogen as input carriers. Therefore, fuel cost calculations are based on the input of both carriers.

3. **Battery parks & offshore hybrid wind parks**  
   These plants consist of multiple components. As a result, it is difficult to determine the economic viability of one of the components in the plant. 
   For this reason, these have been left out of the tables.

4. **Battery electric vehicles**  
   The costs associated with Battery Electric Vehicles (BEVs) are not solely related to their role in the energy system, as their primary function is transportation. For this reason, the BEV CAPEX and economic viability columns are excluded from the Economic Viability table. However, the table does include the other relevant columns: the average cost of electricity used for charging (OPEX) and the average profit from electricity discharged back to the grid (Revenue). These can be used to assess the business case of BEV's in a scenario.

