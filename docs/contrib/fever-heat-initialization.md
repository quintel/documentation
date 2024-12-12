---
title: Built environment heat initialization
---

## Introduction
This section explains how the ETM initializes the technology split for space heating and hot water demand in households in the base and future year. 

The depicted default (start year) technology split for space heating and hot water demand in the frontend, found in the [Space heating & hot water](https://energytransitionmodel.com/scenario/demand/households/space-heating-and-hot-water) section under Households, is not directly sourced from a data point but is instead calculated by the Fever module under a set of assumptions and various data points. 

The technology split for space heating and hot water represents the percentage of residences utilizing specific technologies to meet their space heating and hot water demand. In the base year, this split is determined for space heating and hot water separately through the following steps:
1. Loading households demand data
2. Allocating heating technologies to residences

These steps are further explained below.

:::info Technology splits for space heating depicted by default in the frontend
In a blanc scenario, the default values in the base yearfor the technology splits for space heating are depicted. The technology splits for hot water are thus not depicted here. See for example the `start_value_gql` of the slider for the gas-fired condensing combi boiler:

``` 
start_value_gql = present:V(households_space_heater_combined_network_gas,"fever.share_in_group") * 100.0
```
Note that whereas the start value of the slider depicts the technology split value for **space heating only**, the functionality of the slider applies to both space heating and hot water. Thus, from the moment the user sets this slider, for instance to 20%, this means the gas-fired condensing combi boiler is used in 20% of the residences for **both space heating and hot water** in the future year.
:::

---

## Step 1: Loading Household Demand Data
In the first step, Fever loads data from the dataset into the model. This data is available for review in the [Dataset manager](https://data.energytransitionmodel.com/) and includes the following data for households in the base year:
- Final demand per carrier
- Application splits (splits per carrier to applications)
- Technology splits (splits per carrier to technology)

Based on these data points, the model determines the final demand per carrier per heating technology for space heating and hot water separately. 

---

## Step 2: Allocating Technologies to Residences
Using the final heat demand data, Fever assigns technologies to different residence types and construction periods. Technologies that are higher in the merit order are allocated to newer residences (more recent construction period), as these residences tend to have better insulation. 

For example, in the Netherlands, newer residences often use heating technologies such as heat pumps due to their limited heat output capacity, which makes them better suited to well-insulated buildings. The allocation of heating technologies to residence types and construction period is based on this assumption.

The standard merit order for heat in households can be found in the [Households merit order section](https://energytransitionmodel.com/scenario/demand/households_heating_order/merit-order).

### Example:
For this example we will use a simple fictive dataset, with 5 technologies and a total final demand of 5 PJ.

There are 5 technologies in the merit-order, for simplicity we simply rank them as Technology 1 to 5.
For the sake of simplicity, each of the technologies has an equal final demand in this example, namely 1 PJ. This leads to the following merit order:

1. **Technology 1:** 1 PJ (20%)
2. **Technology 2:**:1 PJ (20%)
2. **Technology 3:** 1 PJ (20%)
3. **Technology 4:** 1 PJ (20%)
4. **Technology 5:** 1 PJ (20%)

The residences are subdivided by construction periods with their corresponding demands:
The amount of residences differ for each constuction period, while the final demand for each of the construction periods is 1 PJ.

- **2005 - present:** 125,000 residences,(25%),  demand = 1 PJ 
- **1985 - 2004:** 112,500 residences (22.5%), demand = 1 PJ
- **1965 - 1984:** 100,000 residences (20%), demand = 1 PJ
- **1945 - 1964:** 87,500 residences (17.5%), demand = 1 PJ
- **Before 1945:** 75,000 residences (15%), demand = 1 PJ

### Heating Technology Allocation 

Using the provided demand data and merit order, the model assigns heating technologies to residences based on their construction period and heat demand:

1. **Technology 1:** 
   Technology 1 is assigned first, since this is the first technology it is assigned to the newest residences wich are built between **2005 - present**. The demand of the first technology equals the demand of the households in this period, since they are both 1 PJ, this technology serves 125,000 residences.

2. **Technology 2:**  
   Since all the residences with building period **2005 - present** are served, this technology is first assigned to the residences in the construction period **1984 - 2005**. The demand of the second technology equals the demand of the households in this period, since they are both 1 PJ, this technology serves 112,500 residences.

3. **Technology 3:**  
   The demand of the Technology 3 matches the demand of the residences in the construction period between **1965 - 1984**, this technology therfore serves 100,000 residences. 

4. **Technology 4:**  
   The demand of the Technology 4 matches the demand of the residences in the construction period between **1945 - 1964**, this technology therfore serves 87,500 residences. 
5. **Technology 4:**  
   The demand of the Technology 5 matches the demand of the residences in the construction period before **1945**, this technology therfore serves 75,000 residences. 


### Summary of Technology Allocation
- **Technology 1:** 125,000 residences (25,0%)
- **Technology 2**: 112,500 residences (22.5%)
- **Technology 3:** 100,000 residences (20%)
- **Technology 4:** 87,500 residences (17.5%)
- **Technology 5:** 75,000 residences (15%)


This distribution is then set as the default slider settings in the frontend. 

---

