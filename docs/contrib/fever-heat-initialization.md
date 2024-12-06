---
title: Built environment heat initialization
---

## Introduction
This section explains how the ETM initialises the technology split for space heating and hot water demand in households. 

The depicted default technology split for space heating and hot water demand in households, found in the [Space heating & hot water](https://energytransitionmodel.com/scenario/demand/households/space-heating-and-hot-water) section under Households, is not directly sourced from data but is instead calculated by the Fever module under a set of assumptions. 
More information about the Fever module can be found in the [Fever](/contrib/fever) section.

The technology split represents the percentage of residences utilizing specific technologies to meet their space heating and hot water demand. Fever determines this split through a three-step process:

---

## Step 1: Loading Household Demand Data
In the first step, Fever loads data from the dataset into the model. This data is available for review in the [Dataset manager](https://data.energytransitionmodel.com/) and includes data on final demands, application splits and technology splits in the households sector for the base year. Subsequentyly, the model  assigns final demand to the appropriate heating technologies.
The assigned final demand per heating technology is not presented explicitly in the Dataset manager, but is derived from the household's final demand per carrier, the application splits for the relevant carriers, and the technology split for the relevant applications.

---

## Step 2: Allocating Technologies to Residences
Using the final heat demand data, Fever assigns technologies to different residence types and construction periods. Technologies that are higher in the merit order are allocated to newer residences (more recent construction period), as these residences tend to have better insulation. 

For example, in the Netherlands, newer residences often use heating technologies such as heat pumps due to their limited heat output capacity, which makes them better suited to well-insulated buildings. The allocation of heating technologies to residence types and construction period is based on this assumption.

The standard merit order for residence heating technologies is as follows:

1. LT district heating
2. Aquathermal heat pump with TS (surface water)
3. Air heat pump
4. Ground heat pump
5. Ground heat pump with PVT
6. MT district heating
7. Hybrid air heat pump (gas)
8. Hybrid air heat pump (hydrogen)
9. Hybrid air heat pump (oil)
10. HT district heating
11. Electric boiler
12. Condensing combi boiler (gas)
13. Condensing combi boiler (hydrogen)
14. Wood pellet boiler
15. Gas-fired heater
16. Coal-fired heater
17. Oil-fired heater

### Example: Cyprus
For Cyprus, the technology split is initialized using the following merit order and demand values:

1. **Air heat pump:** 0.681 PJ (10.7%)
2. **Electric boiler:** 0.678 PJ (10.7%)
3. **Biomass boiler:** 0.761 PJ (12.0%)
4. **Oil-fired heater:** 4.24 PJ (66.7%)

The residences are subdivided by construction periods with their corresponding demands:

- **2005 - present:** 85,889 residences, demand = 1.116 PJ
- **1985 - 2004:** 81,921 residences, demand = 1.051 PJ
- **1965 - 1984:** 118,525 residences, demand = 1.534 PJ
- **1945 - 1964:** 112,330 residences, demand = 1.472 PJ
- **Before 1945:** 30,884 residences, demand = 0.409 PJ

### Example of Heating Technology Allocation in Cyprus

Using the provided demand data and merit order, the model assigns heating technologies to residences based on their construction period and heat demand:

1. **Air Heat Pumps:**  
   These are assigned first to th residences with lowest heat demand and built between **2005 - present**. A total of **61,250 residences** can be heated using air heat pumps, leaving **24,630 residences** from this construction period unheated.

2. **Electric Boilers:**  
   The remaining residences in the **2005 - present** construction period will be heated with the available heating technology in Cyprus that is next in the merit order. In this case, electric boilers are allocated to these remaining residences. The remaining demand from electric boilers is allocated to **29,411 residences** from the **1985 - 2004** construction period. This leaves **52,510 residences** in this construbtion period unheated.

3. **Biomass Heaters:**  
   Next, biomass heaters are assigned to the unheated residences in the **1985 - 2004** construction period. This covers **42,164 residences**, leaving **10,346 residences** from this construction period without heating.

4. **Oil-Fired Heaters:**  
   Finally, oil-fired heaters are allocated to all remaining residences. This includes:
   - **10,346 residences** in the **1985 - 2004** period
   - **118,525 residences** in the **1965 - 1984** period
   - **112,330 residences** in the **1945 - 1964** period
   - **30,884 residences** built **before 1945**

### Summary of Technology Allocation
- **Air Heat Pumps:** 61,250 residences (14.3%)
- **Electric Boilers:** 54,041 residences (12.6%)
- **Biomass Boilers:** 42,641 residences (9.8%)
- **Oil-Fired Heaters:** 272,103 residences (63.3%)

This allocation process results in, for example, more heat pumps being allocated than space heaters, despite similar heat demand across technologies in the base year. 

---

## Step 3: Hourly Calculations

After the alloation of heating technologies to residences, hourly calculations in heat demand and supply begin for the future year, which is first done based on the default scenario settings. Based on hourly heat demand profiles (taking into account peak demands per residence type and construction period) and heat supply profiles (taking into account available capacity per technology), moments of deficits are determined. 

When changes are made to the scenario, final heat demand and heat supply per heating technology are calculated again, together with the hourly calculations to determine the potential deficits. 

---
