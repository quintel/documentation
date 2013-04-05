### Excess-Electricity Module
##### This is to enhance the discussion of what is to become of the first "storage" (really: excess electricity) implemenation
________
#### Definitions: 
Excess power = negative residual load
Residual load = demand – must-run – volatiles
volatiles = wind + solar + hydro (everything driven by ‘nature’)
Must-run = CHPs that follow a profile (everything that is not volatile and operates regardless of electricity price) 

#### Technical requirements:
* extract the amount of excess from the merit order calculation 
 * Hours of excess electricity and capacity of excess power (under no-export assumption)
 * Also extract what caused the excess? Was it from volatile or fossil sources?

#### What do we want to display to the user?
#### 1. Dashboard Item - % curtailed
#####Possible Dashboard items (as a percentage): 
* Amount of excess power (MWh) / Total electricity demand (MWh)
* Amount of excess power (MWh) / Total delivered non-dispatchable power (incliuding CHPs)
* Amount of excess due to volatiles / Total theoretical volatile production
* Amount of excess due to volatiles / Total delivered volatile electricity

#### 2. Chart (that appears when clicking on the dashboard item)
* Display a ranking (table) of the technologies that is determined by an economic indicator. And show the investment cost and other data. 
 * BUT: 
 * Do we adapt the parameters to the actual slider settings? To the data in etsource? What if there are no electric cars? Would the power-to-battery route become unavailable? 
 * Under which constraints? 90 % curtailment reduction? Installed capacity? 
 * Do we say anything about the reduction potential? 
 * All of this might beocome a huge project....
* Display a chart that shows an economic indicator as a function of curtailment reduction (applied to the ‘current’ excess scenario)? see [example chart](http://cl.ly/image/2I0Y2E0k2i1r) (NPV being [net present value](http://cl.ly/image/1n0y3F2z1r3j))
 * Equally difficult to calculate
