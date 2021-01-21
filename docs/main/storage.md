---
title: Storage
---

:::note
These static electricity storage calculations have largely been replaced by a more dynamic excess electricity calculation that is part of the merit order calculation. The main results of the electricity storage calculation are, however, still available in the front-end of the ETM.
:::

The largest obstacle in integrating large amounts of wind or solar power into the grid is the frequent mismatch between generation and demand. This can lead to both shortage and excess.

This page serves to explain the [Flexibility -> Flexibility options -> Wind power production cost slide](https://pro.energytransitionmodel.com/scenario/flexibility/electricity_storage/wind-power-production-cost) in the ETM.

### Introduction

![](/img/docs/Simulation_of_excess_electricity.jpg)

*Above: Simulation of excess electricity. This chart displays how excess electricity can be caused: Together, must-run capacity, solar and wind production, may deliver more electricity to the grid than is demanded. In the chart, excess electricity occurs (when the demand (red line) is smaller than the total production (top of green area). This situation might occur in The Netherlands in the year 2020, if the targeted capacity of \~13 GW wind is reached. Chart taken from [Deuchler (2013)](#references).*

Although excess electricity does not occur in the 'present year' scenario of The Netherlands, it might me become an issue in your future scenario, if it is based on large amounts of volatile electricity production. Especially wind and solar energy is highly volatile, which means that power production varies strongly with time. Also, volatile producers are not dispatchable, they cannot be turned on 'on-demand' like conventional power plants. In order to reach high shares of renewable electricity, you might increase the capacity of wind and solar generation. In consequence, it may happen that, on occasion, the supply of electricity surpasses the demand. Such an event is called an excess event. See Figure 1 for a graphical explanation. The figure describes a scenario in which wind and solar energy already produce a considerable amount of electricity. Although excess electricity is not visible on an annual average, it does occurs during certain hours of the year.

This page addresses potential consequences of excess electricity and introduces technologies that may help with the reduction of excess. If no measure are taken to deal with excess electricity, the production of wind and solar power plants has to be curbed in consequence. The act of limiting wind and solar power production, although free and renewable electricity is available, is called curtailment (Dutch 'afschakelen').

The phenomenon of excess electricity production form large installed capacities of wind or solar energy is investigated extensively in a [Master Thesis](http://refman.et-model.com/publications/1743) that was undertaken at Quintel Intelligence. This section of the ETM is based on that study.

### Methodology

The following paragraphs describe how excess electricity is modeled and how the economic performance of storage and conversion technologies is carried out; which leads to the chart shown in the ETM frontend (Figure 4).

![](/img/docs/Excess_electrictity_chart.jpg)

*Above: Annual excess electricity as a function of installed wind and solar capacity. This is an indicative figure, with the purpose of explaining the methodology. A similar chart is shown in [Deuchler (2013)](#references).*

### Excess electricity

Since the modeling of excess events cannot be done with annual average figures in the ETM, the amount of excess had to be forecasted outside the ETM. A separate model is created that operates with the same extrinsic inputs as the [merit order](merit-order.md). In particular, all required information regarding non-dispatchable producers area loaded in the external model (number of units, availability, effective capacity). Furthermore, the profiles of the merit order module are used to derive the hourly electricity production of non-dispatchables (wind, solar, hydro and CHPs).

The scenario used for forecasting excess electricity represents a 'present' scenario (ETM), with the only exception that the number of units of solar PV and wind turbines can be increased. The ratio of the present number of units remains constant, i.e. a doubling in wind and solar capacity results in twice the number of units for all participants operating on solar and wind energy. The electricity demand is kept constant and all profiles remain unchanged.

An intermediate result is the residual demand curve, as a function of installed wind and solar capacity. The residual demand curve contains information on the total annual excess electricity as well as its hourly distribution throughout the year. The first excess events can be observed when enough wind and solar capacity is installed, see Figure 2.

### Effect on the electricity production cost of wind turbines

**From here on it is assumed that excess electricity cannot be exported to neighboring countries.** It is very likely that The Netherlands and Germany will face excess electricity events simultaneously. Therefore, neighboring countries are likely not willing to import a surplus from The Netherlands when their own demand is low and wind is blowing hard. In consequence, the only solution to exporting excess electricity that we have today is **curtailment**. Curtailing electricity means that wind turbines and solar panels are switched of (partly) because their power output cannot be integrated into the grid. Curtailment may lead to an increase in the electricity production cost in the future because of a potentially decreases output. In this context, the total cost of producing electricity from a wind turbine is defined as:

```
total cost of integrated production [€/MWh] =
  technology costs [€] /
  useful electricity output [MWh]

where useful electricity output =
  cost of producing electricity [€/MWh] /
  (100% -  % curtailed production)
```

The cost of producing electricity is a default value, taken from the "[Cost / Wind turbines](http://energytransitionmodel.com/scenario/costs/wind/investment)" section of the ETM. By default, the following cost are displayed in the ETM: wind coastal: 59 €/MWh, wind inland: 71 €/MWh and wind offshore: 157 €/MWh. As only a relative small number of turbines can be installed in coastal areas, it is decided to consider 'inland wind turbines' that are still very competitive and have a large potential.

### Storage and conversion technologies

The amount and distribution of excess electricity is already known. Next, the separate model calculates how much excess electricity can be absorbed by storage or conversion technologies. The conversion of excess electricity depends on the occurrence of excess power and the conversion technology's characteristics, described below. For all technologies, only 1 MW of capacity is installed in the separate model. This ensures that only the cost for 'installing the first' unit are addressed. If more conversion capacity is installed, the economic performance will suffer: The amount of excess is constant. If more conversion units are built, the energy throughput per unit is decreased, which increases the cost.

The performance indicator **levelized cost** is used to compare the technologies in the Figure 4. In case of the wind turbine, the levelized cost refers to the total cost of producing electricity. In case of the storage and conversion technologies, levelized cost refers to the amount of useful energy delivered to a consumer (power, heat or gas). Levelized cost are defined as:

```
levelized cost =
  (capital recovery factor * investment cost + annual operation cost) /
  useful energy output
```

or

![Left](/img/docs/Levelized_cost_definition.jpg)

Deriving the cost curves for conversion technologies for Figure 4 is rather complex and CPU- intensive. Furthermore, the simulation of excess electricity and its conversion is only possible with the information of the merit order module and with an hourly calculation. The simulation can only produce indicative results because there are many [assumptions](storage.md#assumptions-in-simulating-excess-electricity-and-levelized-costs) and many uncertainties in the [technology characterization]. For these reasons, the chart has to be static and cannot adapt to slider settings.

## Assumptions in simulating Excess Electricity and Levelized Costs

* The simulation of excess electricity and its storage and conversion is based on numerous assumption, some of which have already been mentioned in the Methodology. This is a complete list of relevant assumptions:

  1. The simulation is based on the 'copper plate assumption', which means that the electricity grid is assumed to be perfect and that there are no losses or constraints in transmission and distribution of electricity.

  2. Excess electricity is only derived from comparing the hourly demand and supply of electricity. Excess electricity is not due to an insufficient grid.

  3. All storage and conversion technologies have direct and equal access to excess electricity (in reality power-to-heat may be a distributed technology, while power-to-gas is likely installed as a central facility). Therefore, all indirect effects on the cost of the electricity grid are not taken into account.

  4. No export of excess electricity.

  5. It is assumed that all storage/conversion technologies can obtain excess electricity at zero cost (market price of electricity = 0 during excess events).

* The economic characterization is based on a projection for the year 2020. Potential cost reductions in a more distant future (learning effects and economy of scale) are not considered in the analysis .

* The technologies investigated in the simulation are analyzed individually, i.e. only one technology is installed at a time.

* Other effects or technologies that might reduce the future amount of excess electricity are not considered in the simulation. For example, the options to export electricity, store electricity in conventional pumped hydro power plants or demand side management are all not taken into account.

* The storage and conversion technologies are only permitted to convert excess electricity. In other words, it is not considered that electricity is bought from the grid at times of a positive residual demand.

* The simulation is based on many inputs that originate from the [merit order module](merit-order.md). In particular, the profiles for electricity demand and wind & solar production stay constant, regardless of future changes in demand or installed generation capacity.

## Characterization of conversion technologies

This section describes the conversion/storage technologies with a bit more detail. All technologies are characterized in two ways: there is a technical and an economic characterization. The technical characterization defines the physical energy flow through the conversion units (e.g. capacity and availability). The economical description comprises costs like investment and operation costs but also lifetimes and discount rates. Since the conversion technologies are still being developed further, it expected that they become cheaper in the future. All economic data is forecasted for the 2020.

The most important technology characterizations are summarized in the following table. Further technology descriptions and the technical characterization are provided in the following subsections.

|Technology|Investment cost|Annual O&M cost|Lifetime|Discount rate|Round-trip efficiency|Source|
|----------|---------------|---------------|--------|-------------|---------------------|------|
||€ / kWel<sub>input</sub> (\*)|€ / kWel<sub>input</sub> (\*)|years|%|%||
|Battery storage, 10kW/85kWh batteries|1615|9.4|10|15|\> 80|[Budischak et al., 2012](#references) (data interpolated to 2020)|
|Conversion to Heat|1500|0|4|10|\~ 100|estimate based on 750 € / unit [Deuchler, 2013](#references)|
|Conversion to Gas|1329|50.7|10|15|\~ 60|[Greiner et al., 2007](#references)|

(\*) The unit € / kWel<sub>input</sub> refers to the cost for installing capacity. The capacity (kW) refers to the ability to absorb excess electricity (instead of electricity output).

### Power to Power / Electricity storage

Power-to-power storage is modeled as central battery storage here. Several other options for storing electricity are available, for example, pumped hydro or compressed air energy storage. It might also be possible to store electricity in electric vehicles batteries, which would be a decentralized storage option.

The analysis here is based on battery investment cost of 190 €/kWh ([Budischak et al., 2012](#references)), which is a forecast for 2020. These cost refer to a storage capacity (kWh), but need to be transformed into a charging capacity (kW) for the simulation. This is done with the following assumptions: The batteries are charged with 10 kW and have a storage capacity of 85 kWh. As a result, the cost per kW are: 190€/kWh \* 85kWh / 10kW = 1615€/kW. The cost of battery storage that are provided in the literature may vary a lot. A figure of 190 €/kWh may appear very low to some people, while 1615€/kW seem rather high to others. Note that the translation from storage to charging capacity depends on the maximum storage charge (kWh) and the charging rate. Under the assumption that batteries are only half the size, or the charging rate can be doubled, the cost per kW charging capacity would halve.

Electricity storage has one district disadvantage in comparison to the other conversion technologies, which the fact that a storage can be fully charged. As seen above, a smaller battery would likely be cheaper to install, However, battery storage can only absorb excess electricity as long as it is not fully charged. Therefore, large storage volumes can be advantageous. The simulation only allows to charge/discharge electricity storage in accordance with its current charging level. If it is fully charged, further excess cannot be absorbed and the technology has to idle until it can discharge when the excess event has past. This shortcoming explains why the levelized cost increase again at very high installed capacities of solar and wind. In scenarios of more than 100 GW, excess electricity is such a common phenomenon that battery discharge is hardly possible. Electricity storage is suited best for regular charging and discharging operation.

### Conversion to Heat

The conversion of excess electricity to heat has to serve a demand for heat. Many potential heat demands can also be satisfied electrically, especially in space heating or hot water preparation. Furthermore, it is also possible to heat storage tanks in agricultural CHPs. Another option for converting power into thermal energy would be power-to-cooling.

For this analysis (and chart), it is chosen to simulate the preparation of hot water in Dutch residential households. In contrast to space heating, hot water demand is rather constant throughout the year ([AEE, 2009](#references)), which guarantees for a high availability of the conversion technology.

Conversion to heat (power-to-heat) is characterized in the following way: Regular gas-driven heating systems are equipped with additional preheating tanks. A preheating tank has a volume of 100 liter and can be heated electrically with up to 500 W when excess electricity is available. The preheating tank is used to preheat water before it enters the conventional heating system. In this way, it is ensured that hot water is always available for the consumer, while low-capacity electric heating is integrated into the system. The electric heating capacity is rather low (500 W), in order to limit the additional stress on the electricity grid that will be caused by a large number of synchronized decentralised consumers. There is no constraint on the availability of power-to-heat conversion. The conversion can start or stop from one hour to the next. It is assumed that converting at \<500 W will not cause an oversupply of heat, which would be wasted.

Economical characterization, see table above.

### Conversion to Gas

![](/img/docs/Power_to_gas_layout.jpg)

*Above: Figure 3: Layout of Power-to-Hydrogen conversion. Layout and Firgures are based on [Greiner et al., 2007].*

Excess electricity can be converted into hydrogen via electrolysis. A layout of this process is shown in Figure 2. Excess electricity is used to split water molecules into hydrogen and oxygen. The hydrogen is then compressed and mixed in with natural gas in the gas network. This 'green' hydrogen can be integrated into the grid with percentages of up to 15% ([Melaina et al., 2013](#references)).

The process has an efficiency of 60%, which means that 1 kWh of excess electricity is converted into hydrogen with a lower heating value of 0.6 kWh ([Greiner et al., 2007](#references)). This inclues a compression of about 30 bar, which should be sufficient for pipeline feedin at medium pressure levels. Several pilot plants are currently built or decomissioned in Germany to prove the feasibility of the conversion.

The produced hydrogen can be converted into synthetic methane or methanol in addditional process steps. Methane has the advantage of being easier to store (especially in pore storage) and it is easier to blend in with the natural gas grid. Methanol has the advantage of being a liquid energy carriere of high energy-density. It could be transported easily in trucks, which eliminates the need to connect the conversion technology to a pipeline. However, all further processing of hydrogen lowers the total conversion efficiency and is very likely going to increase total system cost.

Power-to-gas conversion is very flexible in the model. The conversion is always possible and only limited by the installed conversion capacity (MW). Potential constraints due to limited hydrogen contents in the gas grid or limited hydrogen storage are not considered.

## Results: Costs for producing electricity in excess scenarios

![](/img/docs/Electricity_Storage_Chart.png)

*Above: Figure 4: Chart displayed in Energy Transition Model / Supply / Electricity storage. It gives an impression of how the costs of conversion technologies compare and at what point it might become economically interesting to build first conversion units.*

The results of the simulation lead to an hourly forecast of excess electricity, see Figure 2. If values of ~15 GW of wind and solar capacity are exceeded, the first occurrences of excess power are observed in The Netherlands. At ~15 GW of installed wind and solar capacity, the scenario has \~40% renewable electricity.

Excess electricity can be absorbed by three different conversion technologies, which are characterized by different costs, conversion efficiencies and availabilities. Figure 4 shows the results of the simulation. The **x-axis** of the chart displays the total installed generation capacity of wind and solar. The **y-axis** has the unit € / MWh<sub>output</sub>. Figure 4 is based on the assumption that all excess electricity is curtailed (export or other means of reducing curtailment are not considered). In this context, the figure also displays how the cost for producing electricity from inland wind turbines may increase, as discussed above.

It can be seen that power-to-heat conversion is the most competitive in comparison to the other technologies. This is due to the relatively low investment and operation costs. Furthermore, power-to-heat conversion has a high availability and very high conversion efficiency in the simulation. While absorbed electricity is converted to heat with an efficiency of 100%, power- to-power and power-to-gas conversion suffer from higher conversion losses (which increases the cost per delivered energy).

The simulation of excess electricity and its storage and conversion is based on numerous assumption, some of which have already been mentioned in the Methodology. This is a complete list of relevant assumptions: Power-to-power storage is highly disadvantaged because of its low availability. Especially in scenarios with frequent occurrences of excess, battery storage is often fully charged and has to wait for discharge opportunities. The levelized cost of the power-to-power route actually increase for wind and solar capacities above ~100 GW, simply because the opportunities to discharge decrease dramatically.

The intersections of the increasing wind production and the conversion technologies indicates if conversion becomes an attractive option. If excess conversion is displayed to be cheaper than the inland wind turbine, it may economically be interesting to start building the first conversion units. However, this does not mean that all excess electricity can be avoided. To reduce excess electricity significantly, it is necessary to install a sufficient conversion capacity. Since all conversion units compete for a fixed amount of excess, the production cost increase if more conversion capacity is installed. The curves in the chart only refer to the first conversion units that are installed.

## Uncertainties

Many uncertainties of the simulation are due to the many assumptions.

-   All excess electricity is curtailed unless it is stored or converted in one of the technologies discussed here (export or other means of reducing curtailment are not considered).
-   Excess electricity is forecasted at a fixed ratio of wind and solar capacities. The installed capacity does not represent your actual scenario. Since much more wind than solar capacity is installed in the present, the results are rather uncertain in scenarios that are based on a lot of solar energy.
-   Excess electricity is based on the same profiles that are used in the merit order module. These profiles suffer from certain shortcomings (limited dataset, no changes in the profile shape for very large installed capacities etc. ), which makes the forecast of excess uncertain. Also, the profiles are based on measurements of a single year; however, the actual production from solar and wind differs from year to year. Furthermore, it is assumed that the electricity demand and its profile stay constant.
-   All participants that are labeled 'must-run' are taken into account in the analysis. It is not known how the must-run capacity will develop in the future. Lowering must-run capacity will lower the residual demand and therefore excess electricity.
-   The simulation is carried out on an hourly resolution.
-   All participants and conversion technology is modeled very 'flexible': All participants can ramp their electricity output/conversion up or down by 100% from one hour to the next. In reality, large power plants, e,g, coal plants cannot switch on/off that quickly. It is expected that there is a certain minimum electricity production that is caused by spinning reserves and inflexible power plants.

Further uncertainties are due to the technology characterization

-   Learning effects are not considered - some technologies might advance faster than others.
-   The power-to-heat route benefits from a relatively low discount rate.
-   The battery cost are set to 190 € / MWh, which seems to be an optimistic but generally accepted forecast for 2020. However, it is necessary to transform this figure into capacity cost in € / MW. This is done with the additional assumptions of a 10 kW charging capacity and a battery size of 85 kWh.

In the end, it has to be concluded that the results of the simulation are very uncertain. Furthermore, the simulation actually does not represent the user scenario in the ETM. Therefore, the chart is labeled 'indicative' and the y-axis does not display numbers.

## References

-   AEE, (2009). [Dimensioning of Domestic Hot Water Systems. In Thermal Use of Solar Energy](http://refman.et-model.com/publications/1742). AEE - Institute for Sustainable Technologies.
-   Budischak, C., Sewell, D., Thomson, H., Mach, L., Veron, D. E., & Kempton, W. (2012). [Cost-Minimized Combinations of Wind Power, Solar Power and Electrochemical Storage, Powering the Grid up to 99.9% of the Time](http://refman.et-model.com/publications/1734). Journal of Power Sources, 225, 60–74. <doi:10.1016/j.jpowsour.2012.09.054>
-   Deuchler, R, 2013. [Load management – strategies for dealing with temporary oversupply of variable renewable electricity](http://refman.et-model.com/publications/1743). Utrecht University. Excerpt of thesis report:



- Investment costs for retrofitting the power-to-heat route are 750 € per household. This figure is based on the following breakdown:

- 250 € for the new 100 l tank incl. electric heating unit (alternatively for equipping an existing tank with a new electric heater)

- 30 € for piping and insulating material

- 150 € for connecting to a “smart metering” system

- 320 € labor cost (8 hours of work at 40 €/hour)

-   Greiner, C., Korpas, M., & Holen, A. (2007). [Norwegian case study on the production of hydrogen from wind power](http://refman.et-model.com/publications/1740). International journal of hydrogen energy, 32(10-11), 1500–1507. <doi:10.1016/j.ijhydene.2006.10.030>
-   Melaina, M.W., Antonia, O., Penev, M., 2013. [Blending Hydrogen into Natural Gas Pipeline Networks: A Review of Key Issues](http://refman.et-model.com/publications/1739). National Renewable Energy Laboratory, USA.

