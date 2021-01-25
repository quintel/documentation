---
title: Storage
---

_Note: These static electricity storage calculations have largely been replaced by a more dynamic excess electricity calculation that is part of the merit order calculation. The main results of the electricity storage calculation are, however, still available in the front-end of the ETM._

The largest obstacle in integrating large amounts of wind or solar power into the grid is the frequent mismatch between generation and demand. This can lead to both shortage and excess.

This page serves to explain the [Flexibility -> Flexibility options -> Wind power production cost slide](https://pro.energytransitionmodel.com/scenario/flexibility/electricity_storage/wind-power-production-cost) in the ETM.

## Excess electricity due to volatile production

![](/img/docs/Simulation_of_excess_electricity.jpg)

_Figure: Simulation of excess electricity. This chart displays how excess electricity can be caused: Together, must-run capacity, solar and wind production, may deliver more electricity to the grid than is demanded. In the chart, excess electricity occurs (when the demand (red line) is smaller than the total production (top of green area). This situation might occur in The Netherlands in the year 2020, if the targeted capacity of \~13 GW wind is reached. Chart taken from Deuchler, R, 2013. [Load management – strategies for dealing with temporary oversupply of variable renewable electricity](http://refman.et-model.com/publications/1743)._

Although excess electricity does not occur in the 'present year' scenario of The Netherlands, it might become an issue in your future scenario. Especially if the scenario is based on large amounts of volatile electricity production. Also, volatile producers are not dispatchable, they cannot be turned on 'on-demand' like conventional power plants. As a consequence, it may happen that on occasion the supply of electricity surpasses the demand. Such an event is called an excess event (see the image above). Although excess electricity is not visible on an annual average, it does occur during certain hours of the year. If no measure are taken to deal with excess electricity, the production of wind and solar power plants has to be curbed in consequence. The act of limiting wind and solar power production, although free and renewable electricity is available, is called curtailment (Dutch 'afschakelen').

_Source: The phenomenon of excess electricity production form large installed capacities of wind or solar energy is investigated extensively in a [Master Thesis](http://refman.et-model.com/publications/1743) that was undertaken at Quintel Intelligence. This section of the ETM is based on that study._

## Modelling excess electricity

The following paragraphs describe how excess electricity is modeled and how the economic performance of storage and conversion technologies is carried out.

![](/img/docs/Excess_electrictity_chart.jpg)

_Figure: Annual excess electricity as a function of installed wind and solar capacity. This is an indicative figure, with the purpose of explaining the methodology. A similar chart is shown in Deuchler, R, 2013. [Load management – strategies for dealing with temporary oversupply of variable renewable electricity](http://refman.et-model.com/publications/1743)._

## Modelling Excess electricity
In order to model excess events in the ETM, a separate model is created operating with the same extrinsic inputs as the [merit order](/merit-order). In particular, all required information regarding non-dispatchable producers are loaded in the external model (number of units, availability, effective capacity). Furthermore, the profiles of the merit order module are used to derive the hourly electricity production of non-dispatchables (wind, solar, hydro and CHPs). The separate model is based on a typical scenario in the ETM with the exception that only wind and solar can be adjusted. All other factors, including the demand, remain constant. When increasing the amount of solar or wind energy, annual excess events can be observed. 

## Effect on the electricity production cost of wind turbines

_Note: From here on it is assumed that excess electricity cannot be exported to neighboring countries._ 

It is very likely that The Netherlands and Germany will face excess electricity events simultaneously. Therefore, neighbouring countries are likely unwilling to import a surplus from the Netherlands. In consequence, the only solution to exporting excess electricity that we have today is curtailment. Curtailing electricity means that wind turbines and solar panels are switched of (partly) because their power output cannot be integrated into the grid. Curtailment may lead to an increase in the electricity production cost in the future since it decreases the output. In this context, the total cost of producing electricity from a wind turbine is defined as:

```
total cost of integrated production [€/MWh] =
  technology costs [€] /
  useful electricity output [MWh]

where useful electricity output =
  cost of producing electricity [€/MWh] /
  (100% -  % curtailed production)
```

The cost of producing electricity is a default value, taken from the "[Cost / Wind turbines](http://energytransitionmodel.com/scenario/costs/wind/investment)" section of the ETM. By default, the following cost are displayed in the ETM: wind coastal: 59 €/MWh, wind inland: 71 €/MWh and wind offshore: 157 €/MWh. As only a relatively small number of turbines can be installed in coastal areas, only 'inland wind turbines' are considered. 

## Storage and conversion technologies

The amount and distribution of excess electricity is already known. Next, the separate model calculates how much excess electricity can be absorbed by storage or conversion technologies. The conversion of excess electricity depends on the occurrence of excess power and the conversion technology's characteristics, described below. For all technologies, only 1 MW of capacity is installed in the separate model. This ensures that only the cost for 'installing the first' unit are addressed. If more conversion capacity is installed, the economic performance will suffer: The amount of excess is constant. If more conversion units are built, the energy throughput per unit is decreased, which increases the cost.

The performance indicator **levelized cost** is used to compare the technologies in the Figure 4. In case of the wind turbine, the levelized cost refers to the total cost of producing electricity. In case of the storage and conversion technologies, levelized cost refers to the amount of useful energy delivered to a consumer (power, heat or gas). Levelized cost are defined as:

```
levelized cost =
  (capital recovery factor * investment cost + annual operation cost) /
  useful energy output
```

or

![Left](/img/docs/Levelized_cost_definition.jpg)

## Assumptions in simulating Excess Electricity and Levelized Costs

* The simulation of excess electricity and its storage and conversion is based on numerous assumption, some of which have already been mentioned in the Methodology. This is a complete list of relevant assumptions:

  1. The simulation is based on the 'copper plate assumption', which means that the electricity grid is assumed to be perfect and that there are no losses or constraints in transmission and distribution of electricity.

  2. Excess electricity is only derived from comparing the hourly demand and supply of electricity. Excess electricity is not due to an insufficient grid.

  3. All storage and conversion technologies have direct and equal access to excess electricity (in reality power-to-heat may be a distributed technology, while power-to-gas is likely installed as a central facility). Therefore, all indirect effects on the cost of the electricity grid are not taken into account.

  4. No export of excess electricity.

  5. It is assumed that all storage/conversion technologies can obtain excess electricity at zero cost (market price of electricity = 0 during excess events).

* The economic characterization is based on a projection for the year 2020. Potential cost reductions in a more distant future (learning effects and economy of scale) are not considered in the analysis .

* The technologies investigated in the simulation are analysed individually, i.e. only one technology is installed at a time.

* Other effects or technologies that might reduce the future amount of excess electricity are not considered in the simulation. For example, the options to export electricity, store electricity in conventional pumped hydro power plants or demand side management are all not taken into account.

* The storage and conversion technologies are only permitted to convert excess electricity. In other words, it is not considered that electricity is bought from the grid at times of a positive residual demand.

* The simulation is based on many inputs that originate from the [merit order module](merit-order.md). In particular, the profiles for electricity demand and wind & solar production stay constant, regardless of future changes in demand or installed generation capacity.

