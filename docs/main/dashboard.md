---
title: Dashboard
---

The dashboard of the Energy Transition Model is an overview containing the most essential performance indicators of your scenario at the bottom of the page. You can click on each of the indicators in the dashboard to get a pop-up with a chart and more detailed information on each of the subjects. By clicking 'Change' at the bottom right of the dashboard you can customize the dashboard. The following text defines the performance indicators used within the dashboard. The pages (Energy use (Primary energy use), CO<sub>2</sub> emissions, Costs (dashboard), Renewables, Summary) within this section give a more detailed description of the calculations used to produce the dashboard items. 

![Change dashboard](/img/docs/dashboard_overview.png)

## Energy use

### Primary energy use 
The percentage under ‘energy use’ on the dashboard shows difference in total primary energy consumption between the present and the future (based on your scenario). This includes all types of energy and non-energy consumption (e.g. natural gas consumption for fertilizer) within the ETM. Primary energy consumption as a result from exports is not included. This means losses incurred in the conversion sector before exporting energy are excluded. 

_Check out: the [Primary demand](primary-energy) page for more information._

## CO<sub>2</sub> emissions

### CO<sub>2</sub> emissions relative to 1990
This percentage shows the change in CO<sub>2</sub> emission between 1990 and the final year of the scenario. The chart shows the CO<sub>2</sub> emissions in 1990, in the present year and final year. CO<sub>2</sub> emissions shown here are the total energetic CO<sub>2</sub> emissions resulting from the total final energy consumption. This does not include CO<sub>2</sub> emissions from non-energy consumption, exports, fugitive emissions, industrial processes, solvents and other product use, LULUCF, and other. It does include the CO<sub>2</sub> emission reduction due to CO<sub>2</sub> capture and storage and the emissions from feedstock. 

### Domestic CO<sub>2</sub> emissions
Percentage difference in energetic CO<sub>2</sub> emissions due to final energy consumption between 1990 and the scenario year, excluding the CO<sub>2</sub> emissions of imported electricity and including emissions of exported electricity.

### CO<sub>2</sub> emissions relative to start year
This percentage shows the change in CO<sub>2</sub> emission between the starting year and final year of your scenario. The scope and chart are similar to CO<sub>2</sub> emission relative to 1990. 

_Checkout: the [Emissions](co2-emissions) section within the Dashboard section for more information on definitions and calculations._

## Energy imports
### Net foreign energy imports 
The percentage shows the amount of imported primary energy (imports - exports) compared to the total primary energy consumption. In this case conversion losses due to export are included in the total primary energy consumption (a ‘territorial’ approach). The chart shows the total amount of energy import as a result of the total energy import of different types of energy carriers for the present and final scenario year. 

_Checkout: the Energy Imports page in the Dashboard section for more information._

## Costs 
### Annual energy costs 
The number shows the total yearly cost of energy supply for your scenario. The chart displays the costs for the present (left) and final scenario year (right) composed of the costs for different types of energy production. 

_Checkout: the Total annual costs page under Dashboard > Costs para for further information._

## Annual energy cost per household 
The number shows the total yearly cost of energy supply divided by the total number of households. The chart displays the costs for the present (left) and final scenario year (right) composed of the costs for different types of energy production. 

## Profitability of power plants 
Percentage of plants installed in your scenario that make a profit. 

_Note: The value is in current year's euros. It includes the costs of the primary energy carriers and the costs of all the plants that produce electricity and / or heat. Click [here](cost-overview-per-sector.md) for more information on the cost calculation._

_Checkout: the Profitability of power plants page under Dashboard > Costs calculations for dashboard for further information._

_Checkout: the general Costs section which explains how costs are defined and calculated in the ETM in general._ 

## Biomass

### Primary biomass use 
The primary biomass use item within the dashboard explains the total amount of primary available energy in wet biomass, dry biomass, oil-based biomass or biogenic waste. The chart shows the total bio resource demand within your region and relates the demand to the potential of each bio resource category.

### Final biomass use 
The final biomass use displays the total amount of final energy produced due to the usage of biomass. The final biomass is calculated by subtracting the energy losses when using biomass to produce energy from the total primary biomass use. 

### Share of biomass import 
The total share of biomass import is the amount of imported biomass (in joule) compared to the of the total amount of primary biomass use. The amount of biomass that is imported from outside your region is defined by looking at the total potential of biomass within your region compared to the total demand of biomass. The Sankey-diagram attached to this dashboard item displays this difference. 

_Check out: the Biomass page under Supply for more information._

## Renewables
### Total share of renewable energy 
The number shows the percentage of final energy consumption that is supplied by renewable sources in your scenario. The chart shows the percentage for the present year and final scenario year. 

### Total share of renewable electricity 
The percentage of final electricity consumption that is renewably produced. 

### Share of renewable energy in households 
The percentage of final energy consumption in households that is renewably produced. 

_Checkout: the Renewables page within this Dashboard section for more information._

## Summary

### Loss of load expectation 
The loss of load dashboard item shows the number of hours in which the capacity for electricity production is expected to be less than the demand. It is calculated by comparing the peak electricity demand with the total installed capacity. The variability of volatile electricity production (i.e. Solar PV and wind turbines) is also taken into account. The graph displays the peak electricity demand compared to the installed electricity production for the present and future. The electricity production capacity is split into volatile production, which is unreliable, and dispatchable production, which is reliable. To avoid a loss of load it is important that there is sufficient reliable electricity capacity to meet the peak electricity demand. 

_Check out: the Loss of load page in the Flexibility > Electricity hour calculations section for more information._

### Number of blackout hours 
The total number of blackout hours can be determined using the hourly electricity production calculations compared to the hourly electricity demand. If regional electricity production and the maximum amount of electricity import is not enough to satisfy the demand, a blackout will occur. The graph shows the hourly electricity production compared to the hourly electricity demand. 

### Number of hours with excess electricity 
As a result of large numbers of wind turbines and solar panels installed, the supply of electricity can be larger than the demand. The number of hours with excess electricity displays this event. If you include flexibility options in your scenario, the number of excess events decreases.

_Check out: the Flexibility section for more information._