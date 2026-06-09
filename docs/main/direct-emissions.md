---
title: Direct emissions
---

The direct emissions method determines the greenhouse gas emissions of a scenario at the point where emissions are released. This method is available as an additional method alongside the default emissions method based on [primary demand](co2-main-principles#modelling-principles). This page explains the method principles and how it is implemented in the model.

:::warning Beta release
The direct emissions method is currently in beta release. This means that it is being implemented incrementally and is subject to further improvement and refinement. Complete user output will first be available for national datasets and will later become availbale for regional (Dutch) datasets. Read more about how the method is currently implemented [here](#method-implementation). 

In the near future, the role of the direct emissions method vs. the primary emissions method will be reviewed and further improved.
:::

## Principles
The direct emissions method determines the emissions in a scenario based on where the emissions actually occur. Direct emissions are determined following IPCC guidelines (with an exception explained below). The main principles of the method are:

* Energetic CO2 emissions are dynamically calculated based on the modelled energy supply and demand flows. Most non-energetic CO2 emissions and other greenhouse gas emissions are not dynamically calculated but are given as input for a scenario. For more information on on dynamically and statically modelled emissions, go to [this page](co2-main-principles#emission-categories).
* The dynamically calculated CO2 emissions for a technology are determined based on the difference between incoming CO2 via input carriers and CO2 utilisation, and outgoing CO2 via output carriers and CO2 capture. The incoming and outgoing CO2 via input and output carriers is fixed CO2 that is determined based on the emission factor of the carrier. See the diagram and calculation example below.
* CO2 emissions are allocated to the sector where the emissions actually occur. Captured CO2 is deducted from the sector where it is captured. This is where the ETM [deviates from IPCC guidelines](#deviation-from-ipcc-guidelines).

![](/img/docs/direct_emissions_co2_flows.png)
***Figure**. Incoming and outgoing CO2 flows of a technology.*

:::info Calculation example
The coal-fired power plant consumes `100 MJ` coal. Taking the emission factor of `0.0945 kg CO2/MJ` for coal, the resulting CO2 emissions at the power plant are `100 MJ * 0.0945 kg CO2/MJ = 9.45 kg CO2`, which are allocated to the energy sector.
:::


## Deviation from IPCC guidelines
Due to the modelling structure of the ETM, the allocation of captured and used CO2 emissions in the ETM deviates from the IPCC guidelines.

The ETM deducts captured CO2 emissions from the sector where these emissions are captured. If this CO2 is then used and released in the short term (for example used for the production of synthetic fuels and combusted in an aircraft), the ETM allocates these emissions to the use sector where the CO2 is emitted. 

From [IPCC, 2019 refinement](https://www.energy.gov/sites/default/files/2021-12/UN%20IPCC,%202019%20Refinement.pdf):

> *Where CO2 emissions are captured from industrial processes or large combustion sources, captured emissions should be allocated to the sector generating the CO2 unless it can be shown that the CO2 is stored in properly monitored geological storage sites [...]*

This means that according to IPCC guidelines, the released CO2 emissions from combustion of the synthetic fuel should be allocated to the sector where the CO2 was originally captured. See the calculation example below for the differences in allocation.

:::info Calculation example
A coal-fired power plant in the energy sector produces `100 kg CO2`, of which `80 kg CO2` is captured and `20 kg CO2` is emitted. The captured CO2 is used for synthetic kerosene production, which is later combusted in an aircraft, leading to `80 kg` of emitted CO2. 

**Allocation ETM**: the energy sector emits `20 kg CO2`, the transport sector emits `80 kg CO2`.  
**Allocation IPCC**: the energy sector emits `100 kg CO2`, the transport sector emits `0 kg CO2`. 
:::

The detailed [data export](#method-implementation) will contain the results of emitted, captured and utilised CO2 per technology. With this data, users can do a reallocation of emissions between sectors if desired.

## Method implementation
Currently, the direct emissions method is implemented as an additional method alongside the default primary emissions method. The results of the direct emissions method can be viewed via a detailed [data export](https://energytransitionmodel.com/scenario/data/data_export/yearly-direct-greenhouse-gas-emissions). This data export provides a complete overview of all emissions in a scenario for the start year and future year. All technologies where emissions can occur are included and categorised by ETM sector and subsector. In addition, other greenhouse gas emissions that are not dynamically calculated are also included.

The following emission results, expressed in kg CO2-eq, are included in the data export:
* **CO2 production**: gross produced fossil CO2, before CO2 capture.
* **CO2 capture**: amount of captured fossil and biogenic CO2 emissions.
* **Other GHG emissions**: total non-CO2 emissions.
* **Total GHG emissions**: net total GHG emissions, calculated as `CO2 production - CO2 capture + Other GHG emissions`.
