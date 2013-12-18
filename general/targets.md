# Targets

Introduction
------------

The Targets section in the model allows a user to set the boundary conditions for the scenario that he creates. Only in this section, the sliders do not change the future energy system like in the other sections. Instead they set the values that the scenario is evaluated against. The user can always see the number of attained targets in the [dashboard](dashboard.md).

For example, if a user sets the target of reducing CO<sub>2</sub> emissions by 20% in the end year of the scenario the model will show this goal as unattained as long as the CO<sub>2</sub> emissions are higher than the 20% reduction. Once the user takes measures that make the CO<sub>2</sub> emissions go below the 20% reduction, the goal is shown as having been attained in the [dashboard](dashboard.md).

There are 10 targets in the model, of which 3 are only shown when appropriate. The targets are divided over 4 categories.

-   Sustainability targets
-   Cost
-   Dependence
-   Area use

It is hard to attain all targets when realistic values are chosen, this is because some targets conflict with others. For example, if one wants to achieve high CO<sub>2</sub> reductions, but not have energy costs increase.

Sustainability targets
----------------------

**CO<sub>2</sub> emissions:** Sets the percentage of CO<sub>2</sub> emissions in the end year, compared to the 1990 CO<sub>2</sub> emissions in the current region of the scenario. The [CO<sub>2</sub> calculations](co2_calculations.md) page of this Wiki provides details on how CO<sub>2</sub> emissions are calculated.

**Percentage renewables:** Sets the percentage of final energy consumption that comes from renewable sources. EU renewable energy targets are defined in terms of final energy use. This means renewable heat and electricity are weighted equally when calculating the renewable percentage.

Dependence
----------

**Max energy imports:** Sets the maximum percentage of total energy needed that may be imported from abroad. This is net imports (imports minus exports).

**Max electricity imports:** Sets the maximum percentage of total electricity needed that may be imported from abroad. This is net imports (imports minus exports).

Cost
----

**Total energy cost:** Sets the percentage by which energy costs are allowed to deviate from the current costs.

**Total electricity cost:** Sets the percentage by which electricity costs are allowed to deviate from the current costs.

Area use
--------

**Onshore inland:** Sets the maximum area that may be used for inland onshore wind turbines.

**Onshore coastal:** Sets the maximum area that may be used for inland coastal wind turbines. This goal is only shown when the region has sea area.

**Offshore:** Sets the maximum area that may be used for offshore wind turbines. This goal is only shown when the region has sea area.

**Land for CSP:** Sets the maximum area that may be used for Concentrated Solar Power plants. This goal is only shown when CSP is a viable option in the region that the scenario is created for.

Note
----

Please note once again that the values set in this section are not hard boundaries. In setting his measures a user can go over any of the boundaries he has set in the targets section. this just means he will in the end not attain all the targets that he has set for himself. The user should then ask himself whether to change his scenario, or realize that maybe his targets were to ambitious.
