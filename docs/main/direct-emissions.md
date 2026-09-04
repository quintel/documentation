---
title: Direct emissions
---

The direct emissions method determines the greenhouse gas emissions of a scenario at the point where emissions are released. This method is available as an additional method alongside the default emissions method based on [primary demand](co2-main-principles#modelling-principles). This page explains the method principles and how it is implemented in the model.

:::warning Beta release
The direct emissions method is currently in beta release. This means that it is being implemented incrementally and is subject to further improvement and refinement. New charts and sliders for setting other GHG emissions will be added to the model soon. Read more about how the method is currently implemented [here](#method-implementation).

In the near future, the role of the direct emissions method with respect to the primary emissions method will be reviewed and further improved.
:::

## Principles
The direct emissions method determines the emissions in a scenario based on where the emissions actually occur. The method generally follows IPCC guidelines for accounting emissions. The main principles of the method are:

* Energetic CO2 emissions are dynamically calculated based on the modelled energy supply and demand flows. Most non-energetic CO2 emissions and other greenhouse gas emissions are not dynamically calculated but are given as input for a scenario. For more information on dynamically and statically modelled emissions, go to [this page](co2-main-principles#emission-categories).
* The dynamically calculated CO2 emissions for a technology are determined based on the difference between incoming CO2 via input carriers and CO2 utilisation, and outgoing CO2 via output carriers and CO2 capture. The incoming and outgoing CO2 via input and output carriers is fixed CO2 that is determined based on the emission factor of the carrier. See the diagram and calculation example below.
* Following IPCC guidelines, biogenic CO2 emissions are excluded from the emissions totals. Captured biogenic CO2 is included in determining emissions totals.
* CO2 emissions are allocated to the sector where the emissions actually occur. Captured CO2 is deducted from the sector where it is captured. This is where the ETM [deviates from IPCC guidelines](#deviation-from-ipcc-guidelines).

![](/img/docs/direct_emissions_co2_flows.png)

:::info Calculation example
The coal-fired power plant consumes `100 MJ` coal. Taking the emission factor of `0.0945 kg CO2/MJ` for coal, the resulting CO2 emissions at the power plant are `100 MJ * 0.0945 kg CO2/MJ = 9.45 kg CO2`, which are allocated to the energy sector.
:::

### Deviation from IPCC guidelines
Due to the modelling structure of the ETM, the allocation of captured and used CO2 emissions in the ETM deviates from the IPCC guidelines.

The ETM deducts captured CO2 emissions from the sector where these emissions are captured. If this CO2 is then used and released in the short term (for example used for the production of synthetic fuels and combusted in an aircraft), the ETM allocates these emissions to the sector where the CO2 is emitted.

From [IPCC, 2019 Refinement](https://www.energy.gov/sites/default/files/2021-12/UN%20IPCC,%202019%20Refinement.pdf):

> *Where CO2 emissions are captured from industrial processes or large combustion sources, captured emissions should be allocated to the sector generating the CO2 unless it can be shown that the CO2 is stored in properly monitored geological storage sites [...]*

This means that according to IPCC guidelines, the released CO2 emissions from combustion of the synthetic fuel should be allocated to the sector where the CO2 was originally captured. See the calculation example below for the differences in allocation.

:::info Calculation example
A coal-fired power plant in the energy sector produces `100 kg CO2`, of which `80 kg CO2` is captured and `20 kg CO2` is emitted. The captured CO2 is used for synthetic kerosene production, which is later combusted in an aircraft, leading to `80 kg` of emitted CO2.

**Allocation ETM**: the energy sector emits `20 kg CO2`, the transport sector emits `80 kg CO2`.
**Allocation IPCC**: the energy sector emits `100 kg CO2`, the transport sector emits `0 kg CO2`.
:::

## Method implementation
Currently, the direct emissions method is implemented as an additional method alongside the default primary emissions method. This [page](../contrib/direct-emissions-method.md) gives more technical details on how the direct emissions are calculated in the model. The results of the direct emissions method can be viewed via a detailed data export, charts and two dashboard items.

### Data export
The detailed [data export](https://energytransitionmodel.com/scenario/data/data_export/yearly-direct-greenhouse-gas-emissions) provides a complete overview of all emissions in a scenario for the start year and future year. All technologies where emissions can occur are included, as well as other greenhouse gas emissions that are not dynamically calculated. The emissions are categorised by **ETM sector** and **subsector**, as well as by [IPCC CRT category](#mapping_of_etm_sectors_to_ipcc_categories) and [Klimaattafel category](klimaattafels).

The following emission results, expressed in kg CO2-eq, are included in the data export:
* **CO2 production**: fossil CO2 generated, before CO2 capture.
* **CO2 capture**: fossil and biogenic CO2 captured.
* **Other GHG emissions**: total non-CO2 emissions.
* **Total GHG emissions**: net total GHG emissions, calculated as `CO2 production - CO2 capture + Other GHG emissions`.

### Dashboard items
Two dashboard items are available for the direct emissions results:

* **Direct total GHG emissions relative to 1990**: shows the reduction in total GHG emissions compared to 1990.
* **Direct total GHG emissions**: shows the total GHG emissions in the future year.

The dashboard items include indirect emissions and LULUCF emissions. Emissions from international transport are included if the scenario is set to include demand from [international transport](https://energytransitionmodel.com/scenario/demand/transport_international_transport/international-transport).

### Chart
There are three charts available that show direct emissions results for 1990, the start year and future year:

* **Direct total GHG emissions**: shows the emissions per ETM sector.
* **Direct total GHG emissions per IPCC category**: shows the emissions per IPCC CRT category.
* **Direct total GHG emissions per Klimaattafel category**: shows the emissions per Klimaattafel category.

Similar to the dashboard items, the charts include indirect emissions and LULUCF emissions, and include emissions from international transport if configured as such in the scenario. Go to this [page](https://github.com/quintel/etdataset-public/tree/master/tools/emissions/README.md) for more information on how the emission data for 1990 is retrieved and mapped.

![](/img/docs/direct_emissions_chart_total_ghg_emissions.png)

## Mapping of ETM sectors to IPCC categories
The IPCC categories are a standard classification to report direct emissions in Europe.
The table below maps ETM sectors to their corresponding IPCC categories, described by IPCC CRT code.


|  **ETM sector**  | **IPCC CRT code** |
|---|---|
| Households | 1.A.4.b |
| Buildings | 1.A.4.a |
| Industry | 1.A.1.b \| 1.A.2 \| 1.B.2.a.iv \| 2 excl. 2.B.8.a and 2.B.10.a |
| Transport | 1.A.3 excl. 1.A.3.e |
| Energy | 1.A.1.a \| 1.A.1.c \| 1.B excl. 1.B.2.a.iv \| 1.C \| 2.B.8.a \| 2.B.10.a |
| International transport | 1.D.1 |
| Agriculture | 1.A.4.c \| 3 |
| Other | 1.A.3.e \| 1.A.5 \| ind_CO2 |
| LULUCF | 4 |
| Waste | 5 |


## Klimaattafels
Klimaattafels is a direct-emissions categorisation widely used in the Netherlands, and should therefore only be applied to Dutch datasets.

The Klimaattafel categories in the ETM match the official Klimaattafel categories with a few exeptions. These exceptions are described in the following table. Where relevant, the IPCC CRT code under which such emissions are reported is also stated.



|  **Klimaattafel in ETM**  | **Exceptions** |
|---|---|
| Industrie | Incl. paraffin and fireworks *(CRT code 2.D and 2.G)*<br/>Incl. lubricants and urea *(CRT code 2.D)*<br/>Incl. fugitive emissions *(CRT code 1.B)*<br/>Excl. electricity and heat production from waste plants *(CRT code 1.A.1.a)* |
| Elektriciteit | Incl. electricity and heat production from waste plants *(CRT code 1.A.1.a)*<br/>Incl. CCUS *(CRT code 1.C)*<br/>Incl. pipeline transport *(CRT code 1.A.3.e)* |
| Mobiliteit | Incl. military emissions *(CRT code 1.A.5)*<br/>Excl. lubricants and urea *(CRT code 2.D)* |
| Gebouwde omgeving | Excl. fireworks and paraffin for households *(CRT code 2.D and 2.G)* |
| Landbouw | - |
| Landgebruik | Sometimes this category is combined into "Landbouw en landgebruik", but is often treated separately. |
| Internationaal transport | Not an official Klimaattafel category but created in the ETM to account for international transport |
| Indirecte emissies | Officially these emissions are allocated across all Klimaattafel categories, but in the ETM it is added as a separate Klimaattafel category |
