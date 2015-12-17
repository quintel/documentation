# "Buurtbatterij" (neighbourhood battery)

The neighbourhood battery is a P2P storage technology which is located somewhere higher up in the network (typically not at the level of residences). Its main functions are:

* Balancing supply and demand by storing electricity in times of excess production and discharging in times of demand
* Preventing congestion of the transformer(s) and cable(s) of which it is a child

## What the user can adjust

The properties of the P2P technology serve as the starting point. The most important ones:

* Capacity (charging/discharging) [kW]
* Volume [kWh]
* Investment costs [EUR]
* Technical lifetime [years]

A new one:

* The fraction of the battery which should be reserved for congestion management [kWh]. If this is set to 20%, the battery cannot be discharged further than 10% and cannot be charged further than 90% for the purpose of 'balancing'. 
![](./buurtbatterij_design.png)

The battery will actively charge or discharge to return to a state **between the limits set by the user**. So, if a congestion management event has discharged the battery to 5% full with the above setting of 20%, it will actively charge to 10% if no further congestion occurs and if doing so does not result in congestion. If no excess electricity production is available, the battery will use electricity from the grid.

The maximum value for the slider setting is 100% when the battery will charge up to 50% and then never balance anymore but only react to congestion. If there is no more congestion to compensate, the battery will return to being 50% charged.

## Example 1

Consider the following setup:

![](./buurtbatterij_example_1.png)

Let's assume time steps of 1 hour for simplicity.
The battery discharges 4 kWh, the wind turbine produces 1 kWh, the grid will provide the remaining 6 kWh. The battery will not discharge completely because 1 kWh has to remain for congestion management (the slider is set to 20%, so in total 2 kWh of tis volume is reserved for congestion management).

## Example 2
Similar to Example 1 but without wind production and with only 1 kWh in the battery:

![](./buurtbatterij_example_2.png)

The battery will discharge its 1 kWh of charge to prevent congestion of the trafo. The grid can supply the remaining 10 kWh to satisfy demand and the trafo can just manage. If the network permits it, the battery will be charged to 1 kWh in the next time step.


## Example 3
Similar to Example 1 and 2 but without demand:

![](./buurtbatterij_example_3.png)

The battery will charge its maximum (capacity limited) of 5 kWh to balance demand and supply. The grid must absorb the remaining 6 kWh.




