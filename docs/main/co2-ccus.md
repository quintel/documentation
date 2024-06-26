---
title: Carbon capture, utilisation and storage
sidebar_label: Capture, utilisation and storage
---
Carbon capture, utilisation and storage (CCUS) is an emissions reduction technology that can be applied across the energy system. This article describes the CCUS features in the ETM.

You can make choices regarding the application of carbon [capture](#capture), what [happens](#utilisation-and-storage) to this captured carbon, how it is [transported](#transport) and the [costs](#costs) associated with it. 

_Checkout: the [negative emissions](co2-negative-emissions) infopage for more information on negative emissions as an effect of CCUS._

## Capture and import
The ETM models five types of carbon supply:
* Capture in [industry](#industry)
* Capture in the [power sector](#power-sector)
* Capture in [hydrogen production](#hydrogen-production)
* [Direct Air Capture](#direct-air-capture)
* Import of CO<sub>2</sub>

For each of the carbon capture technologies, you can make choices about the extent to which it is applied in the future energy system. In addition, you can also set the amount of baseload CO<sub>2</sub> that will be imported.

Note that separate choices have to be made about what happens with this CO<sub>2</sub> supply. This can be done in the [utilisation and storage](#utilisation-and-storage) section. Without making any assumption on demand, any surplus of captured CO<sub>2</sub> will be exported (any deficit will be imported). See the [Supply and demand of carbon](#supply-and-demand-of-carbon) page for more information.

### Industry
For various industry sectors, you can make assumptions about the captured amounts of CO<sub>2</sub> emissions. The sliders in the model set the share of the total capture potential in a sector that is utilised. For example, if a sector emits 3 Mt of capturable emissions, a slider value of 50% means that in your scenario 1.5 Mt CO<sub>2</sub> is captured in that sector.

The capture potential of an industrial sector depends on various aspects. First of all, it depends on the size and efficiency of the sector in the chosen area.

Secondly, it depends on the energy carriers or production technologies used in the sector. For example, a steel sector using conventional blast furnaces has a much lower capture potential than a steel sector using cyclone furnaces. Your choices in the [Industry](https://pro.energytransitionmodel.com/scenario/demand/industry/energy-demand-in-the-industry) section of the model directly impact the capture potential.

Thirdly, capture potentials can vary per the region chosen in the ETM. More information about the assumed potentials and sources used can be found on [ETDataset](https://github.com/quintel/etdataset-public/tree/master/source_analyses/nl/2015/12_molecules).

The ETM takes into account the energy requirements of carbon capture technology. To extract CO<sub>2</sub> from industrial process and combustion emissions, electricity and heat are needed. The amount of energy used varies per subsector and at what stage CO<sub>2</sub> is captured.

Currently, it is assumed that all additional energy for carbon capture is electric, also for heat production.  

### Power sector
Per plant type, you can set the share of installed capacity equipped with carbon capture technology. For example, if installed capacity for pulverised coal power plants is 500 MW, a slider setting of 50% means that 250 MW has a carbon capture unit.

Installing carbon capture units leads to higher investment costs, as well as higher operation and maintenance costs (O&M). In addition, the efficiency of the plant goes down to cover the additional energy required to capture the CO<sub>2</sub>. The higher O&M and lower efficiency means that the marginal costs of the plant goes up. This may affect the plant's position in the [merit order](merit-order.md) of the power market and hence its number of full load hours. For biomass-fired power plants specifically, it is possible to sell captured biogenic CO<sub>2</sub> which in turn can lower the plant's marginal costs. 

The energy requirements are modelled as a lower output efficiency of the plant. This means that more coal or gas input is required to produce the same amount of electricity as a regular plant without capture unit.

### Hydrogen production
CO<sub>2</sub> capture at hydrogen production plants works in a similar way as the power sector. The main difference is that for hydrogen, plants are assumed to have fixed full load hours. In other words, there is no 'merit order' that determines which plants produces when. As such, the additional (marginal) costs caused by the capture unit do lead to higher total costs, but do not affect the number of full load hours of the plant.

### Direct Air Capture
You can set the amount of CO<sub>2</sub> captured by Direct Air Capture (DAC) technology. Direct Air Capture is a process of capturing CO<sub>2</sub> directly from the ambient air using electricity.

The ETM assumes DAC units to run base load, i.e. with a flat hourly profile. The electricity required to run DACs is considered final demand of the energy sector. Since DAC is rather energy intensive, the net CO<sub>2</sub> reduction depends on the emission factor of the electricity used.

### Import of CO<sub>2</sub>
Carbon import can be an interesting business case for countries that have a proper carbon storage infrastructure. External entities can buy the right to transport emitted carbon to the importing country. You can set the amount of imported CO<sub>2</sub> in Mton.

## Utilisation and storage
Captured CO<sub>2</sub> can be used in multiple ways. The ETM currently offers the following applications:

* [Offshore storage](#storage)
* Feedstock for [synthetic methanol](#synthetic-methanol)
* Feedstock for [synthetic kerosene](#synthetic-kerosene)
* ['Other'](#other-utilisation) utilisation

### Storage
CO<sub>2</sub> captured in the previous section can be stored long term ('sequestered'), typically in an underground geological formation. The ETM models offshore sequestration in empty oil or gas fields. You can set the amount of CO<sub>2</sub> that is stored annually.

The ETM takes into account investment costs, yearly recurring operation and maintenance costs as well as energy requirements for compressing and transporting the captured CO<sub>2</sub> to offshore locations.

The maximum storage per year varies per region in the ETM and is based on public research. It is assumed that the maximum storage value per year can be sustained for a period of 40 years. For example, research for the Netherlands indicates that a total of 1680 Mt CO<sub>2</sub> can be stored offshore. This comes down to 42 Mt (the slider max) per year over a period of 40 years.

Please note: For some regions, no data could be found on storage potentials. An overview of the research used can be found on
[ETDataset](https://github.com/quintel/etdataset-public/blob/master/source_analyses/eu/2015/11_area/11_ccs_offshore_storage_potential_per_year.xls).

### Synthetic methanol
Rather than storing captured CO<sub>2</sub> (semi) permanently, it can also be re-used for various purposes. One application modelled in the ETM is the production of synthetic methanol. The user can set the amount of methanol produced in the future.

Methanol is one of the most widely used base chemicals in the chemical industry sector. For example, it is used for the production of plastics and polyester. In addition, methanol can be used as a fuel.

Synthetic methanol is made of CO<sub>2</sub>, hydrogen and electricity. The ETM takes all three into account, as well as the investment and O&M costs associated with its production.

_Note: The production of synthetic methanol does not (automatically) affect the production of methanol and other chemical products in the conventional chemical industry sector. You can make choices about this themselves in the [Chemicals](https://energytransitionmodel.com/scenario/demand/industry/chemicals) section._

### Synthetic kerosene
Similar to synthetic methanol, captured CO<sub>2</sub> can be used to produce kerosene, which can subsequently serve as transport fuel in the aviation sector. The ETM takes the CO<sub>2</sub>, hydrogen and electricity requirements for producing kerosene into account, as well as the investment and O&M costs associated with its production. 

There are two production routes for synthetic kerosene in the ETM, must-run and dispatchable. The dispatchable production is flexible following the electricity price, therefore the capacity is set in the electric input capacity in MWe. See the [Electricity conversion](electricity-conversion) page for more information. The must-run production is set as the yearly supply of kerosene in PJ.

Please note: The production of synthetic kerosene does not (automatically) affect the production of fossil kerosene in the conventional refineries sector. Users can make choices about this themselves in the [Refineries](https://energytransitionmodel.com/scenario/demand/industry/refineries) section.

### Other utilisation
Finally, you can set the amount of CO<sub>2</sub> used for 'other utilisation' purposes. This includes all applications that are currently not modelled explicitly in the ETM. Examples include utilisation of CO<sub>2</sub> as a propellant gas for beer and soda production or for the cultivation of crops in greenhouses. CO<sub>2</sub> emitted by the fertilizers industry sector can also be captured and used to produce urea, which is used as an animal feed additive and fertilizer.

In many cases, utilising CO<sub>2</sub> does not reduce emission, but only delays it. Therefore, the amount of CO<sub>2</sub> set with this slider is included in the total emissions of your scenario by default. It is however also possible to delay part of these emissions indefinitely, in which case they are excluded from the total emissions. You can set this share in the [Greenhouse gases](https://energytransitionmodel.com/scenario/emissions/other_emissions/delayed-emissions) section.

## Supply and demand of carbon
The ETM keeps track of all 'supply' of carbon (capture) and all 'demand' of carbon (utilisation and storage). This is summarised in the chart below:

![Supply and demand of carbon](/img/docs/ccus_supply_demand_mekko.png)

You can make choices about the supply and demand independently. The ETM registers a carbon 'surplus/export' in case more carbon is captured than is stored or utilised. Vice versa, a 'deficit/import' occurs when less carbon is captured than used for storage and utilisation. 

## Transport
Carbon can be transported in two different ways in the ETM:
* Via (underground) pipelines
* Liquefied in ships

For each type of infrastructure, you can set the share of total captured CO<sub>2</sub> transported. The ETM takes into account the investment costs and operation and maintenance costs.

Since the ETM has limited spatial information, fixed distances and volumes per infrastructure unit are assumed. More information can be found on [ETDataset](https://github.com/quintel/etdataset-public/tree/master/nodes_source_analyses/molecules/molecules).

## Costs
In the [Costs & efficiencies](https://energytransitionmodel.com/scenario/costs/CO<sub>2</sub>/prices) section of the ETM, you can make assumptions about changes in CCUS related costs in the future. By default, all CCUS related costs taken into account by the model are based on present-day cost data. This means that the ETM does not automatically assume changes in future costs for CCUS technologies, such as cost development curves. You can also set the cost price for captured biogenics CO<sub>2</sub> here. This way, biomass-fired power plants can sell captured biogenic CO<sub>2</sub> which in turn will lower their marginal costs.

## CCUS graph
You can find more (advanced) information about the CCUS related CO<sub>2</sub> flows in their scenario by opening the 'CCUS graph' in the [Visuals](https://energytransitionmodel.com/scenario/data/data_visuals/ccus-graph) section. This is a visual representation of the calculation engine of the ETM. It shows all the carbon sources and destinations taken into account by the model, as well as any 'transformations' in between (such as capture potentials).

![CCUS graph](/img/docs/ccus-graph.png)

The CCUS graph is linked with the [energy graph](energy-calculations) and information is exchanged between the two graphs. In many cases, the 'origin' of a carbon source lies within the energy graph. For example, the amount of CO<sub>2</sub> produced by a coal power plant (node: `energy_power_combined_cycle_ccs_coal_co2` in the CCUS graph) depends on the installed capacity and full load hours of that plant calculated by the energy graph (corresponding node: ` energy_power_combined_cycle_ccs_coal` in the energy graph). Vice versa, information calculated in the CCUS graph can be relevant for the energy graph. Capturing CO<sub>2</sub> in the CCUS graph, for example, leads to additional electricity and heat demand in the energy graph.

By double clicking on any of the 'nodes' in the CCUS graph, a separate pages opens up with more detailed information, such as its 'counter-part' in the energy graph. See the [Molecules](../contrib/molecules.md) page in the Contributors section of the documentation for more details.
