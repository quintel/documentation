### Excess-Electricity Module
##### This is to enhance the discussion of what is to become of the first "storage" implementation (really: excess electricity)
________
#### Definitions: 
* Excess power = negative residual load
* Residual load = demand – must-run – volatiles
* volatiles = wind + solar + hydro + geothermal? (everything driven by ‘nature’)
* Must-run = CHPs that follow a profile (everything that is not volatile and operates regardless of electricity price) 
* Dispatchable = All conventional power plants that can be switched of without causing energy to be lost. 
* Non-dispatchable = All participants of the sort 'use-it-or-loose-it'. If they are turned off, renewable energy is lost (curtailment). In particular: wind, solar, hydro, geothermal and everything with a profile in merit order: CHPs and waste incinerator. 

## Dashboard Item
There will be a new dashboard item: percentage of 'excess electricity over total non-dispatchable production". 
All non-dispatchable participants can cause excess electricity, and therefore are included in the dashboard item. 
The denominator represents the total non-dispatchable production, it does NOT refer to the energy that is required by domestic demand. 

#### Technical requirements:
* extract the amount of hourly excess from the merit order calculation. 
* Sum of hourly excess electricity: annual excess in MWh. 
* The amount of energy produced by non-dispatchable participants is known already. It needs to be summed up for the dashboard item. 
 
#### Expected behavior of Dashboard item
* For scenarios of < 20 % renewable electricity, zero excess is expected. 
 * It is possible that excess is caused by lots of fossil-driven CHPs in scenarios << 20 % renewable electricity. 
* The figure in the dashboard will be in the range of 0 - 100 %.
* The dashboard item can also display the amount of excess (MWh) instead of a percentage. 
________
## Diagram of Capacities
We want to display a chart to the user that compares the capacity of excess electricity to the capacity of the technologies that could potentially deal with the excess. 
This chart is supposed to be dynamic, i.e. it is supposed to update according to certain slider settings. For example, building more electric vehicles or increasing the number of certain heating technologies, will increase the capacity of the power-to-power/heat technology. 
The chart will display two vertically stacked bars: The first one displays the maximum capacity of dealing with excess in 2010. The second bar updates to the situation in the future scenario. The second bar will have a red line that indicates the maximum excess power observed. (the red line has the same purpose as the demand-line in the electricity production chart). 


#### Technical requirements:
* The chart needs to update to certain sliders. These sliders have to be identified and a mechanism has to be found that links the capacity to the slider values. 
* Power-to-power: The amount of electric vehicles will influence the storage capacity
* Power-to-heat: The amount of certain heating technology will influence the conversion capacity
* Power-to-gas: The capacity for hydrogen production is not known --> problematic!!
* The peak in the excess electricity curve has to be extracted from merit order calculation. 
___________
## Diagram of costs?
We also want to display some information about the costs that are linked to the conversion/storage of excess electricity. 
The motivation is a question like this: "What is the cheapest way to boost the share of renewable energy/electricity?" 
Is it cheaper to build more wind turbines, which will increase the renewability, but also the amount of excess? Or is it a smarter choice to reduce excess and integrate more electricity? 

### Problems
So far, we decided to NOT calculate energy flows 'through' the individual technologies in this project (scope).Therefore, the dashboard item "excess electricity" only reacts to everything that also changes the merit order calculation (installed capacities and the demand for electricity). **The dashboard item does not process the information displayed in the diagram of conversion capacities.**
In consequence, the dashboard item is prone to misunderstands: 

* By increasing the amount of electric vehicles, the dashboard item "excess electricity" will react (higher electricity demand --> less excess). The user might get the impression that the reduction of excess is due to a power-to-power conversion (i.e. storage in batteries), while it is actually just a consequence of changing demand. The user might conclude that power-to-power storage increased system renewability at a certain system cost, while actually only his choice for electric cars caused the observed changes. 
* The same holds true for the dashboard item "renewable energy/electricity". 
* possibly more issues

As we do not know the energy flow through the technologies, we cannot calculate benefits for the technologies. Even if we did we do not have a good measure for potential revenues. Revenues are linked to converting excess electricity, but also for stabilizing the electricity grid (voltage/frequency) and ramping services. 

###### Alternative Suggestion: 
**** would it be an idea to just display a graph from literature? **** 
[For example a chart by Denholm & Hand [2011]?](http://cl.ly/image/143l1g3i3m29) (assuming 12 h of storage (34 GW/414 GWh) of different efficiencies in Texas). Of course, we would need data for the Netherlands... 

### Text that needs to be generated: 

1. Explanation of what is displayed in dashboard and charts. 
* Justification of choosing these technologies. 
* Justification of the maximum potential conversion capacities. 
* The ranking/hierarchy of technologies in the chart. 
* Potentially the cost of the technologies. 


