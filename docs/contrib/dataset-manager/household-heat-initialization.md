---
title: Household Heat Technology Split Initialization
---

## Introduction
This section explains how the ETM initializes the technology split for heat demand in households. 

The 'current' technology split for heat demand in households, found in the "Space heating & hot water" section under Households, is not directly sourced from data but is instead calculated by the Fever module under a set of assumptions. 
More information about the fever module can be found in the [fever](/contrib/fever) section.

The technology split represents the percentage of residences utilizing specific technologies to meet their heat demands. Fever determines this split through a three-step process:

---

## Step 1: Loading Household Demand Data
In the first step, Fever loads data from the dataset into the model. This data is available for review in the dataset manager and includes the final heat demand for each technology in the current scenario. The model then assigns this demand to the appropriate heating technologies.
This data can't be found explicitly in the data set manager, but it can be caluclated using the final demand of the carriers in the household section, the application splits for the relevant carriers, and the technology split for the relevant applications.

---

## Step 2: Assigning Technologies to Housing Types
Using the final heat demand data, Fever assigns technologies to different housing types. Technologies higher in the merit order are allocated to newer households, as these homes tend to have better insulation. 

For example, in the Netherlands, newer homes often use technologies like heat pumps due to their limited heat output capacity, which makes them better suited to well-insulated buildings. The allocation process is based on this assumption.

The standard merit order for household heating technologies is as follows:

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

The households are divided by building periods, with their corresponding demands:

- **2005 - present:** 85,889 households, demand = 1.116 PJ
- **1985 - 2004:** 81,921 households, demand = 1.051 PJ
- **1965 - 1984:** 118,525 households, demand = 1.534 PJ
- **1945 - 1964:** 112,330 households, demand = 1.472 PJ
- **Before 1945:** 30,884 households, demand = 0.409 PJ

### Example of Heat Technology Assignment in Cyprus

Using the provided demand data and merit order, the model assigns heating technologies to households based on their building period and heat demand:

1. **Air Heat Pumps:**  
   These are assigned first to the least demanding houses built between **2005 - present**. A total of **61,250 households** can be heated using air heat pumps, leaving **24,630 households** from this period unheated.

2. **Electric Boilers:**  
   The remaining households in the **2005 - present** period are allocated to electric boilers. The remaining demand allows allocation of **29,411 households** from the **1985 - 2004** period to electric boilers. This leaves **52,510 households** in this period unheated.

3. **Biomass Heaters:**  
   Next, biomass heaters are assigned to the unheated households in the **1985 - 2004** period. This covers **42,164 households**, leaving **10,346 households** from this period without heating.

4. **Oil-Fired Heaters:**  
   Finally, all remaining households are allocated to oil-fired heaters. This includes:
   - **10,346 households** in the **1985 - 2004** period
   - **118,525 households** in the **1965 - 1984** period
   - **112,330 households** in the **1945 - 1964** period
   - **30,884 households** built **before 1945**

### Summary of Technology Allocation
- **Air Heat Pumps:** 61,250 households (14.3%)
- **Electric Boilers:** 54,041 households (12.6%)
- **Biomass Boilers:** 42,641 households (9.8%)
- **Oil-Fired Heaters:** 272,103 households (63.3%)



This initialization results in more heat pumps being assigned than space heaters, despite similar starting demands across technologies.

---

## Step 3: Hourly Calculations

After the allocation, hourly calculations begin. These calculations consider the peak capacity of each assigned technology and the peak demand for each household type. Through this the deficits between technology output and household demand are localized. Then the final demand in the future scenario is determined. This is how deficits can be seen in the model, while the starting data in the dataset manager does not show any

---