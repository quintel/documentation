---
title: Heat in the built environment
---
This page discusses the methods and data used for modelling space heating and hot water.

## Building stock
The building stock sets the preconditions for heat in the built environment. It determines the amount of heat needed and is also relevant for which heating technologies can be used to meet the heat demand.

### Households (residential)
The ETM distinguishes four housing types:
* Apartments
* Detached houses
* Semi-detached houses (not available for all country datasets in the ETM)
* Terraced houses

Each housing type is then split into construction periods:
* Before 1945
* 1945 – 1964
* 1965 – 1984
* 1984 – 2005
* 2005 to present (where present is the start year of the simulated region)
* New residences (built between the start year and end year)

The sources used for the existing housing stock data can be found in the [ETM Dataset Manager](https://data.energytransitionmodel.com/).

Changes to the housing stock between the start and end year are set as follows in the [Population & housing stock](https://energytransitionmodel.com/scenario/demand/households/population-and-housing-stock) section:
* A single slider sets the **total number of new residences** built between the start and end year.
* Four **share sliders** (one per housing type) distribute the total number of new residences across apartments, detached, semi-detached and terraced houses. These four shares always add up to 100%.
* For each of the five existing construction-period categories, a slider sets the **number of residences demolished** in that category (up to the number of residences present in the start year). This number is distributed across the four housing types in proportion to their share of the existing stock within that period.

### Buildings (non-residential)
The building stock within the buildings sector is used to provide a wide range of services, from hospitals to offices or swimming pools, making it difficult to capture the sector in a limited number of categories. Therefore, no different building types are distinguished.

There is limited reliable data available about construction periods for buildings. Therefore, the building stock is split into only two categories:
* Existing buildings
* New buildings (built between the start year and end year)

The sources used for the existing building stock data can be found in the [ETM Dataset Manager](https://data.energytransitionmodel.com/).

Changes to the building stock are set in the [Building stock](https://energytransitionmodel.com/scenario/demand/buildings/building-stock) section using a slider for the **number of buildings demolished** and a slider for the **number of new buildings**.

## Heat demand

### Insulation
Insulation can be used to reduce the amount of heating needed for houses and buildings. The ETM allows you to reduce the heat demand for space heating in the [Insulation](https://energytransitionmodel.com/scenario/demand/households/insulation) section under Households, and the corresponding [Insulation](https://energytransitionmodel.com/scenario/demand/buildings/insulation) section under Buildings.

For the **start year**, the heat demand for space heating follows from the region's dataset. The sources for these data can be found in the [ETM Dataset Manager](https://data.energytransitionmodel.com/).

For the **future year**, each insulation slider directly sets a **percentage reduction in the typical heat demand** for space heating, relative to its start year (or, for new stock, default new-build) value. Internally, the ETM keeps track of the typical heat demand per housing/building category, expressed in kWh/m<sup>2</sup>. The sliders scale these values down by the percentage entered. The source for the typical heat demands in the starting year can be found in the [ETM Dataset Manager](https://data.energytransitionmodel.com/).

![](/img/docs/20260821_insulation_sliders.png)

Households have six insulation sliders: one per construction-period category. Each slider applies the same percentage reduction to all four housing types within that period simultaneously. Buildings have two insulation sliders: one for existing buildings and one for new buildings.

The ETM uses these sliders in two different ways:
* For **existing** housing/building stock, the percentage reduction is applied to the heat demand for space heating from the start year.
    * _Example:_ setting the "1985 - 2004" insulation slider to 20% reduces the total heat demand for all building types from this construction period by 20%. It also reduces the typical heat demand of all building types by 20%, which is used to calculate insulation costs.

* For **new** housing/building stock, the percentage reduction is applied to a default typical heat demand for newly built residences/buildings, before that value is multiplied by the number of new units and an average surface area per unit to determine the future heat demand for space heating.
    * _Example: the default typical heat demand for space heating for new apartments is 65 kWh/m<sup>2</sup>. Setting the "new residences" insulation slider to 10% reduces this to 58.5 kWh/m<sup>2</sup>. If the number of new apartments is set to 100,000, the heat demand for space heating from new apartments increases by 100,000 apartments x 58.5 kWh/m<sup>2</sup> x 84 m<sup>2</sup>/apartment._

Note that, for existing stock, the typical heat demand and the actual heat demand for space heating are not directly related: the total heat demand is calculated top-down from the region's dataset, while the typical heat demand is only a bottom-up reference value, scaled by the insulation slider. The resulting typical heat demand values are used to calculate insulation costs. See the [Costs](cost-insulation-costs) section for details on this topic. For new stock, the typical heat demand is actually used to calculate the total heat demand.

### Behavioural change in space heating demand
The heat demand for space heating can also be changed due to behaviour, using the corresponding slider under the [Behaviour](https://energytransitionmodel.com/scenario/demand/households/behaviour) section for Households, or the equivalent [Behaviour](https://energytransitionmodel.com/scenario/demand/buildings/behaviour) section for Buildings. This slider sets a percentage change, from -50% to +50%, which is applied uniformly to the heat demand for space heating of all housing types and construction periods, including new stock.

The behaviour slider is applied on top of, and independently from, the insulation sliders: it changes the actual heat demand for space heating for the simulated future year, but does not affect the typical heat demand values used to calculate insulation costs. For example, insulating a housing category by 20% and additionally setting the behaviour slider to +10% results in a heat demand for space heating of 0.8 x 1.1 = 88% of its start year value, but insulation costs are still calculated based on the 20% reduction in typical heat demand alone.

### Hot water
The demand for hot water is only defined for households. Residences of all housing types and build years are assumed to have the same hot water demand, since it is assumed to depend mostly on human behavior. The behavioral impact on hot water demand can be altered using the corresponding slider under the [Behaviour](https://energytransitionmodel.com/scenario/demand/households/behaviour) section.

### Solar thermal panels
Solar thermal panels in households are only used to meet hot water demand. They can be used to meet up to 100% of demand using the corresponding slider. The remaining demand is then met using the specified mix of technologies for space heating and hot water.

Solar thermal panels in buildings are used to meet space heating demand, but only up to 13% of demand. The remaining demand is then met using the specified mix of technologies for space heating.

### Technologies for space heating and hot water
A wide range of technologies is available to meet the space heating and hot water demand. Each slider sets the share of the total housing or building stock that is supplied by a particular technology.
* For **households**, a single technology is assumed to provide both space heating and hot water in a residence.
* For **buildings**, a technology only provides space heating, since the ETM does not specify hot water demand for buildings.

It is not possible to directly specify the technology mix for each housing or building category. Instead, technologies are assigned to housing/building categories through a so-called **merit order**. A prioritized mix of technologies is assigned to housing/building stock first by build year, and for housing stock subsequently by housing type: first apartments, then terraced houses, semi-detached and finally detached houses. This order roughly follows the useful heat demand in increasing order, i.e. new apartments have a lower useful heat demand than detached houses from before 1945. The _consumer order_ is therefore fixed as follows:

| Housing stock |   Building stock   |
|------------------------|----------|
| New apartments             | New buildings        |
| New terraced houses       | Existing buildings |
| New semi-detached houses         |  |
| New detached houses       |   |
| Apartments from 2005 - present |  |
| Terraced houses from 2005 - present |  |
| ... |  |

The prioritized mix of technologies is called the _producer order_. Although it is fixed for buildings, the producer order for space heating in households can be adjusted by the user under the [Households merit order](https://energytransitionmodel.com/scenario/demand/households_heating_order/merit-order) section.

The merit order then works by assigning the first technology in the producer order to the first consumer in the consumer order (i.e. new apartments for households), then to the next consumer, and so on. This process continues until the specified share of residences for the first technology has been reached. The ETM then continues this process with the second technology in the producer order, until ultimately all housing/building stock is assigned a technology based on the specified technology shares.

A chart is available that visualizes the resulting number of residences per space heating technology.

![](/img/docs/20240506_number_of_residences_per_space_heating_technology.png)

Note that a housing category can be matched with more than one heating technology. In the chart above, the housing construction period 1985-2004 is split between air heat pumps and ground heat pumps, whereas newer residences have only been assigned air heat pumps. The reason for this is that the specified share of residences with an air heat pump was reached sometime during the 1985-2004 category, upon which the ETM switched to the next technology in the merit order, that is, ground heat pumps.

### Matching heat demand with supply
The ETM matches demand for space heating and hot water with supply on an hourly basis. It does this for both the **starting year** and the **simulated end year**.
How this proces works for the **starting year** can be found in the section [Built environment heat initialization](../contrib/fever-heat-initialization.md).
Below the process for the **simulated end year** is described.

**Hourly demand** is determined by the combination of annual heat demand and a housing/building category specific heat demand curve. The annual heat demand for water heating is considered separately from that of space heating. The heat demand curve is then applied to convert the annual demand to hourly demand profiles. This results in the following hourly demand profiles:
* **Buildings**: one heat demand profile for buildings;
* **Households water heating**: one water heating demand profile for households;
* **Households space heating**: for each housing type (apartments / terraced / semi-detached / detached), the ETM contains a demand profile for high, medium and low levels of insulation. These are matched with build year categories as follows:
    * _high insulation_: 'new' and '2005-present' residences;
    * _medium insulation_: '1965-1984' and '1985-2004' residences
    * _low insulation_: '1945-1964' and 'before 1945' residences.

The ETM thus contains 12 heat demand profiles in all. See [the ETDataset repository](https://github.com/quintel/etdataset-public/tree/master/curves/demand/) for details on these profiles.

**Hourly supply** is based on the heat capacities of all available heating technologies. The heat capacity of each technology, measured in kW, represents the maximum amount of heat a technology can provide at a given moment. These heat capacities are only user-adjustable for space heating in households, under the [Households merit order](https://energytransitionmodel.com/scenario/demand/households_heating_order/capacities) section.

To **match demand with supply**, the ETM compares the heat demand profile of each housing/building category with the heat capacities of the assigned technologies:
* If supply exceeds demand for an hourly interval, the given technology / technologies have sufficient capacity to provide the required heat.
* If not, the ETM allows for a slight shift in demand through buffering and time shifting. In practice, this means that the ETM can delay demand by four hours.
* If demand then still exceeds supply, a heat deficit is registered.

For households, there is a table available that lists the total annual heat deficits per housing category.

![](/img/docs/20240506_deficits_in_space_heating_per_residence_type_and_construction_period.png)

The table does not specify which technology causes the heat deficits. However, the combination of the table and the number of residences per technology chart gives you an indication of the source of the problem. In the images above, for example, the large deficits in the ‘2005 – present’ build year category indicate that the air heat pump might have insufficient heat capacity.
