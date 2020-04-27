---
title: Flexibility
---

Wind turbines and solar panels are subject to volatile natural patterns. The electricity that they produce might therefore not always be used to match demand directly. This mismatch will lead to excess electricity, in particular in scenarios with large amounts of volatile production capacity. To prevent curtailment of this excess electricity, the ETM contains several flexibility technologies that can make good use of it.

## Implementation in merit order module

As described in [the merit order documentation](/merit-order), the merit order module of the ETM calculates the hourly electricity mix based on the demand for electricity and the installed capacities and marginal costs of the electricity producing technologies. The merit order module distinguishes three types of electricity producers: volatile, must-run and dispatchable producers. The latter can be switched on or off depending on the demand for electricity. The first two, however, will produce electricity based on volatile natural patterns or based on heat demand and are therefore not coupled to the electricity demand. For scenario's with large installed capacities of volatile and must-run producers, electricity production might exceed demand. The merit order module keeps track of the amount of excess electricity at each hour and lets the user decide what to do with this electricity. The various flexibility options are described below.

## Flexibility options

### Order of flexibility options

The ETM contains several technologies to deal with excess electricity. The user can decide which of these options to use first, second and so on, by changing the order of the options in the flexibility options selector. Curtailment is always the last resort and hence locked in the last position. The flexibility options are modelled such that excess electricity is first used by the technology that is position 1. Once the full capacity of the technology is reached or its entire volume is filled (in case of batteries), any remaining excess electricity will be used by the technology in position 2 and so on.

![Figure 1: Flexibility options selector](/img/docs/20160809-screenshot-flex-options.png)

### Storage in batteries

A home battery that can be used to store excess electricity. The user can set the percentage of households that is equipped with such battery. The specs of these batteries are documented in its [node source analysis](https://github.com/quintel/etdataset-public/blob/master/nodes_source_analyses/households/households_flexibility_p2p_electricity.converter.xlsx). The electricity that is stored in the home battery will be supplied back to the grid as soon as the excess electricity event has ended.

### Storage in electric vehicles

The user can set the percentage of his car battery storage volume that can be used to store excess electricity. In order for this to have any effect, the user first needs to include electric vehicles in his scenario. The specs of these electric vehicles are described in their [node source analysis](https://github.com/quintel/etdataset-public/blob/master/nodes_source_analyses/transport/transport_car_using_electricity.converter.xlsx). The electricity that is stored in the electric vehicles will be supplied back to the grid as soon as the excess electricity event has ended.

### Conversion to heat

Converting excess electricity into heat is easy. At times of excess electricity supply, an electric boiler can be used to (pre-)heat water for hot water consumption. If the volume of the boiler is selected appropriately, the boiler will on average be emptied once a day, leaving it ready to convert more excess electricity. The user can set the percentage of households that is equipped with a power-to-heat boiler. And the end of a merit order run, the heat generated by power-to-heat for the entire year will be subtracted from the heat demand that needs to be fulfilled by the other heating technologies. The specs of power-to-heat are described in a [node source analysis](https://github.com/quintel/etdataset-public/blob/master/nodes_source_analyses/households/households_flexibility_p2h_electricity.converter.xlsx).

### Conversion to gas

Excess electricity can be used to produce hydrogen in an electrolysis process. In the ETM, the hydrogen produced by power-to-gas will be used in the transport sector, provided that you have included hydrogen cars in your scenario. Any excess hydrogen will be exported. The user can set the percentage of hydrogen cars in the car technology slide and review the origin of the hydrogen used by these cars in the hydrogen production slide. The user can decide how many power-to-gas plants to built; their specs are documented in a [node source analysis](https://github.com/quintel/etdataset-public/blob/master/nodes_source_analyses/energy/energy_flexibility_p2g_electricity.converter.xlsx).

### Export

Excess electricity can be exported to neighbouring countries through the interconnectors between these countries. The capacity of these interconnectors is limited and can be adjusted by the user. Also, at times of excess electricity, the neighbouring countries will most likely also have to deal with this excess electricity. Hence the user can squeeze the available interconnector capacity to avoid overestimating the amount of electricity that can be exported.

### Curtailment
Any remaining excess electricity will be curtailed by switching off the wind turbines and solar panels. Curtailment is always the last resort.

## Output

To provide insight in the results of the merit order calculation regarding the flexibility options, two charts and a table are provided in the ETM. The first chart shows the hourly use of excess electricity. The second show the annual use of this excess electricity.

![Figure 2: Merit Order hourly flexibility chart](/img/docs/20160810-screenshot-hourly-flex.png)

![Figure 3: Merit Order use of excess electricity chart](/img/docs/20160810-screenshot-excess-el.png)

Finally a table is available to provide insight in the available capacities and volumes of the flexibility technologies as well as, again, their annual usage.

![Figure 4: Merit Order flexibility options table](/img/docs/20160810-screenshot-flex-options.png)