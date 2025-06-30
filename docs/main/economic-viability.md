---
title: Economic viability of assets
---

This section explains the economic viability of power plants, as presented in the following tables:


**Economic viability of electricity production technologies**

The technologies in this table are in one of the following categories:
* **Dispatchable powerplants** (e.g. Biomass CHPs)
* **Volatile powerplants** (e.g. Offshore wind turbines)
* **Must-run powerplants** (e.g. Coal gas CCGT (must-run))

**Economic viability of electricity storage technologies**

The technologies in this table are comprised of the following categories:
* **Batteries in households**
* **Batteries in Electric vehicles** (e.g. Batteries in electric vans)
* **Large batteries** (e.g. Flow batteries)

For more information concerning these technologies, please view [Electricity storage](electricity-storage).

**Economic viability of flexible electricity demand technologies**

The technologies in this table are comprised of the following categories:
* **Power-to-heat** (e.g. Heat pump)
* **Synthetic kerosene production** (e.g. Electrolysers for synthetic kerosene)
* **Hydrogen production** (e.g. Electrolysers)

Please view [Electricity conversion](electricity-conversion) for more information concerning these technologies.

### Cost calculations

As described in the [Cost methods](cost-methods.md), the ETM separates fuel costs from OPEX and CAPEX for each cost group. To accurately assess the economic viability on a plant level, fuel costs must be included in the calculations.

In these tables, different cost methods are used compared to the rest of the model. Each table contains four columns, each showing calculations related to costs and revenue. All values are expressed in euros per MWh of the output carrier. The calculations for each column are as follows:

1. **CAPEX (€/MWh)**  
  The CAPEX is based on the plant's capital expenditure as shown in the [Cost methods](cost-methods.md). The unit is in euros per MWh of the relevant output carrier. For a power producer this means that the CAPEX is divided by the electricity output, for a power-to-heat producer for example, it is divided by the heat output in MWh.

2. **OPEX (€/MWh)**  
   The OPEX in these tables differs from the regular OPEX calculated in the ETM. Fuel and emissions costs are included. For technologies using electricity as an input (such as batteries and flexible electricity demand technologies), OPEX is based on the hourly electricity market calculations in the ETM. The OPEX formula is illustrated below:

   ![](/img/docs/costs_equation_opex_assets.png)

   This value is then divided by the MWh of the output carrier.

3. **Revenue (€/MWh)**  
   For technologies with electricity as an output, revenue is based on the hourly electricity market calculations in the ETM. For each hour, revenue is calculated by multiplying the electricity output by the electricity price, then dividing by the total electricity production. Revenue is not attributed to heat production due to limited information on heat value in the model. For flexible technologies with other output carriers (such as power-to-hydrogen and synthetic kerosene production), the user-defined scenario price is used to calculate revenue.

4. **Economic viability (€/MWh)**  
   Economic viability is calculated by subtracting OPEX and CAPEX from revenue, as shown below:

   ![](/img/docs/Economic_viability_equation.png)

### Notable exceptions

Some technology categories have more complex cost and revenue structures:

1. **CHPs**  
   CHPs are a special case because they produce both electricity and heat. However, only the revenue from electricity production is considered, as no value is assigned to the heat they generate. Please view [Waste outputs and costable factor](../contrib/waste-outputs) for more information on the modelling of CHPs.

2. **Flexible synthetic kerosene production**  
   Synthetic kerosene production uses both electricity and hydrogen as input carriers. Therefore, fuel cost calculations are based on the input of both carriers. Please view [Power for synthetic kerosene production](electricity-conversion/#power-for-synthetic-kerosene-production) for more information.

3. **Battery parks & offshore hybrid wind parks**  
   These plants consist of multiple components. As a result, it is difficult to determine the economic viability of one of the components in the plant. For this reason, these have been left out of the tables. Please view [Always on battery parks](../contrib/always-on-battery-parks) & [Hybrid offshore wind](hybrid-offshore-wind) for more information on these technologies.

4. **Battery electric vehicles**  
   The costs associated with Battery Electric Vehicles (BEVs) are not solely related to their role in the energy system, as their primary function is transportation. For this reason, the BEV CAPEX and economic viability columns are excluded from the Economic Viability table. However, the table does include the other relevant columns: the average cost of electricity used for charging (OPEX) and the average profit from electricity discharged back to the grid (Revenue). These can be used to assess the business case of BEVs in a scenario. For more information concerning the cost of BEVs please view [Cost overview of the transport sector](cost-overview-per-sector/#transport).

