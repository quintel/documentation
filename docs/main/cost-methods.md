---
title: Cost methods
---

This page describes the main cost groups of the ETM and how they are calculated for a scenario. 

The ETM had six main cost groups. These groups consist of sub groups. These subgroups are the sum of individual technologies and some additional modules. A detailed datadump of all groups and subgroups and modules and can be found in the ['datadump'](https://pro.energytransitionmodel.com/scenario/data/data_export/energy-flows). A detailed overview of the scope per subgroup can be found ['here'](https://docs.energytransitionmodel.com/main/cost-overview-per-sector).

## Main cost groups
The yearly costs of a scenario in the ETM is built up from all technologies, carriers, and CO2 costs in a scenario. **Important:** Group 1-4 consists of the CAPEX and OPEX excluding fuels and CCUS costs. Group 5 includes all the fuel costs and group 6 all the CCUS and CO2 costs. 

1. **Buildings and installations:** Building and installation-related costs (CAPEX + OPEX) of sectors. Subgroups:
  -  Households  
  -  Buildings  
  -  Transport 
  -  Industry 
  -  Agriculture 

2. **Energy Production:** Installation-related costs (CAPEX + OPEX) of the energy production sector. Subgroups: 
  -  Power plants
  -  CHP plants (including the industrial steam network)
  -  Heat plants 
  -  Dedicated hydrogen production 
  -  Biomass treatment
  -  Other intallations (synthetic kerosine, regasification of lng, and energy compressors for network gas)

3. **Infrastructure**: CAPEX + OPEX of the energy infrastructure. Subgroups:
  -  Gas network (natural gas and green gas) 
  -  Heat network
  -  Hydrogen network
  -  Electricity network
   
4. **Storage and conversion:** Installation-related costs (CAPEX + OPEX). All G2P is associated with means of 'Energy production'. Subgroups:
  -  Power-to-power (p2p)
  -  Power-to-gas (p2g) 
  -  Power-to-heat (p2h)
  -  Storage (of hydrogen and heat) 

5. **Energy carriers and import:** All net primary demand of energy carriers. The carrier costs for export are is subtracted from the import costs. For example if gasoline (made in the country) is exported the neccessary imported crude oil costs are substracted from the total crude oil import.
  
6. **Carbon capture, sequestration and utilisation (CCSU):** CAPEX + OPEX of all CCUS technologies, including CO2 costs.

## CAPEX and OPEX 
The costs of group 1-4 consists of two variables: CAPEX or `capital_expenditures_excluding_ccs` and OPEX or `operating_expenses_excluding_ccs`

### **CAPEX**: 
Capital expenditures are major investments that are designed to be used for many years. The yearly costs for these investments are based on the total investment over lifetime, WACC and plant lifetime. CCUS and fuel costs are not in the CAPEX and OPEX of group 1-4. 

In formula:
`capital_expenditures_excluding_ccs = (total_investment_over_lifetime * expenditure_factor_per_lifetime_year` where
`expenditure_factor_per_lifetime_year = (wacc + 1) / (technical_lifetime + construction_time)` 

Additional definitions:
-   Total initial investment over lifetime = total initial investment + decommissioning costs
-   WACC = [Weighted average cost of capital](cost-wacc.md)
-   Construction Time = the time it takes to construct a typical plant of this type
-   Technical Lifetime = the average amount of time that a plant can continue operating

### **OPEX**: 
Operating expenses include Operation and Maintenance (O&M) costs, without CCS. O&M costs can have both a variable and a fixed part. 
- Variable_operation and maintenance costs = These for example include costs for additional cleaning and service costs that depend of the number of full load hours of the plant.
-  The fixed part is the costs that are made yearly, independent of whether the plant is used or not. Examples of fixed costs are the costs for personnel that have to do yearly maintenance such as cleaning the plant. Fixed O&M Costs are specified per year and found directly from research. This means that Fixed O&M Costs have no calculations associated with them.

In formula: 
`operating_expenses_excluding_ccs = variable_operation_and_maintenance_costs (- variable_operation_and_maintenance_costs_for_ccs) + fixed_operation_and_maintenance_costs_per_year`. 

Additional definitions:
-   Full load hours = the typical yearly full load hours of a plant of this type, this is calculated in the scenario.
-   Variable Operation & Maintenance Costs per Full load hour = the normal costs for operating and maintaining the plant for one full load hour, this is researched per technology, see: https://github.com/quintel/etdataset/tree/master/nodes_source_analyses 


## Changing costs in a scenario
All the costs of ['technologies'](https://github.com/quintel/etdataset/tree/master/nodes_source_analyses) and ['datasets (or regions)'](https://github.com/quintel/etdataset/tree/master/source_analyses) are researched in advance. Technologies have the same starting assumptions for all regions. Carrier costs can be different per region. When making a scenario, many of these assumptions can be changed in the ['Costs'](https://pro.energytransitionmodel.com/scenario/costs/costs_heat/district-heating-infrastructure) section of the ETM.

