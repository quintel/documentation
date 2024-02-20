---
title: Insulation and heat demand reduction
---

Insulation can be used to bring down the amount of heating we need for our houses while staying comfortable. The ETM allows you to alter the typical heat demand for all housing types for all buildings (in the Commercial and Public Services, shortly CaPS, sector) separately in the Demand > ['Household']**LINK** or ['Buildings']**LINK** section. This page discusses the modeling methods used for the implementation of heat demand in the ETM and the data that underlies the modeling.

-- links to sections --

## Housing types
The ETM distinguishes 4 housing types and 6 age categories, combining into a total of 24 different types of housing stock for households. As basic types apartments, detached houses, semi-detached houses and terraced house are available. For the age categories the following construction year periods are available: older than 1945, 1945 - 1964, 1965 - 1984, 1985 - 2004, 2005 - present, and new residences. These new residences are residences that will be newly constructed.

-- source or statement: why these housing types --

-- screenshot of housing stock section --

## Coupling technologies to individual buildings and residences

Based on the available technologies installed in the space heating sections of ['Households']**LINK** or ['Buildings']**LINK** a coupling is made between the technologies and housing types. For both the housing types and technologies the ETM uses an ordinal order, on which is served first by who. For instance contemporary apartments are high in the list, as well as heatpumps because they are generally....

-- pls finish this --

### Coupling algorithm
The algorithm works as follows, here we give an example for households. In this case we assume there are 100 total residences, of which 40 new apartments, and 60 old apartments. We assume the share of heatpumps is set to 50% and the share of conventional gas boilers is also set to 50%. The order for heat consumers is: new apartments, old apartments. The order for heat producers is: heatpumps, conventional gas boilers.


- The top heating technology in the list is heatpumps. These should be installed in 50% of the residences. This equals to a number of 50 residences.
- First it tries to supply to the first in the list of consumers. There are 40 new apartments, hence the technology can be installed for each of them.
- Now there are 50 - 40 = 10 residences left for the heatpump to be installed in.
- The second type of heat consumer in the list is the old apartments. There are 60 residences of this type still without an assigned heating technology. The heatpumps are installed for 10 of them.
- The heatpumps are now all assigned
- The second heating producer is the conventional gas boiler. These should be installed in 50% of the residences, meaning a total number of 50.
- The 40 new apartments, at the top of the ordered consumers, already all have a technology assigned.
- Going down the list, the old apartments have 60 - 10 = 50 residences remaining without an assigned technology. All of these are assigned a conventional gas boiler.

### Households technology order
The orders are generally predetermined by the ETM, but users are allowed to alter the order for the heat producers for households. This section can be found under Demand > Households > ['Merit order']**LINK**.

## Typical heat demand
-- What is our understanding of typical heat demand, sources etc. --

## Costs
-- How do we calculate costs --

## Heat demand profiles

The ETM models heating in households and buildings on an hourly basis in the so-called ["Fever" calculation](/contrib/fever). For this calculation hourly heat demand profiles for houses and buildings are needed. Each housing type has two profiles attached, one for if a technology coupled to it supplies in a more constant way like a **INSERT**, or has a more prominent day/night cycle.

-- finish this! --

### Households
-- how did we get the demand profiles, and why, sources, etc. --

### Buildings
-- how did we get the demand profiles, and why, sources, etc. --
