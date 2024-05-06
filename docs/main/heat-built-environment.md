---
title: Heat in the built environment
---
Insulation can be used to bring down the amount of heating we need for our houses while staying comfortable. The ETM allows you to alter the heat demand for various types of residences and buildings (Commercial and Public Services buildings, shortly CaPS) separately in the Demand > ['Household'](https://energytransitionmodel.com/scenario/demand/households/overview) or ['Buildings'](https://energytransitionmodel.com/scenario/demand/buildings/overview) sections. This page discusses the modeling methods used for the implementation of heat demand in the ETM and the data that underlies the modeling.

## Building stock
### Households
The ETM distinguishes four housing types:
* Apartments
* Detached houses
* Semi-detached houses (optional)
* Terraced houses

Note: the semi-detached housing type is optional and currently mainly available for the Netherlands and regions within the Netherlands. 

Within each of these types the housing stock is additionally split into construction periods:
* Before 1945
* 1945 – 1964
* 1965 – 1984
* 1984 – 2005
* 2005 to present (see explanation below)
* New residences (see explanation below)

Note: “present” represents the starting year of the simulated scenario, which differs per region. “New residences” are residences which are built in the simulated future year, which is determined by the user.

The sources used for the existing housing stock data can be found in the [ETM dataset manager](https://data.energytransitionmodel.com/).


### Buildings
The building stock within the buildings sector is used to provide a wide range of services, from hospitals, to offices or swimming pools, making it difficult to capture the sector in a limited number of categories. Therefore, no different building type are distinguished.

There is limited reliable data available about construction periods for buildings. Therefore, the building stock is split into only two categories:
* Existing buildings
* New buildings (see explanation below)

Note: “new buildings” are buildings which are built in the simulated future year, which is determined by the user.

The sources used for the existing building stock data can be found in the [ETM dataset manager](https://data.energytransitionmodel.com/).

## Heat demand
### Space heating
It is important to distinguish between the starting year data and the simulated future year situation.

For the **starting year**, the heat demand for space heating follows from the region’s dataset. The sources for these data can be found in the ETM dataset manager (link toevoegen).

For the **simulated future year**, the ETM uses the typical heat demand sliders to recalculate the heat demand for space heating. The typical heat demand in the ETM reflects the average insulation level of a house or building category and is expressed in kWh/m2. The source for the typical heat demands in the starting year can also be found in the ETM dataset manager.

![](/img/docs/20240506_typical_heat_demand_sliders.png)

The ETM uses these sliders in two different ways:
1. For *existing housing/building stock*, the slider value is used to scale the heat demand for space heating from the start year. In other words, adjusting the slider value results in a relative change of heat demand for space heating compared to its starting value. 
_Example: In the image above, the typical heat demand for apartments built between 1985-2004 has a starting value of 155 kWh/m2. Reducing the typical heat demand to 124 kWh/m2 (a reduction of 20%) means that the heat demand for space heating is decreased by 20% in the simulated future year._

2. For new housing/building stock, the actual slider value is used to calculate the future heat demand for space heating, based on an average surface area per newly built unit.
_Example: In the image above, the typical heat demand for space heating for new apartments is set at 65 kWh/m2. The starting value of number of new residences is set to 0 by definition. If the number of new residences is set at 100,000, the heat demand for space heating increases by 100,000 apartments x 65 kWh/m2 x 84 m2/apartment._

Please note that crucially, the **typical heat demand slider values _cannot_ be used to calculate the useful heat demand for existing building stock**. There are two reasons for this:
1. The starting year values for the typical heat demand values are typically not derived from the actual heat demand for space heating data. In fact, they are often derived from different sourced entirely.
2. As mentioned above, the future year values of the typical heat demand sliders are only used as a scaling factor. Unlike for new residences/buildings, the actual slider value is not used to calculate heat demand in the future year.

Additionally, the typical heat demand sliders are used to calculate insulation costs. See the ['Costs'](cost-insulation-costs) section for details on this topic.

### Hot water
The demand for hot water is only defined for households. Residences of all housing types and build years are assumed to have the same hot water demand, since it is assumed to depend mostly on human behavior. The behavioral impact on hot water demand can be altered using the corresponding slider under the ['Development of demand'](https://energytransitionmodel.com/scenario/demand/households/development-of-demand) section.

### Solar thermal panels
Solar thermal panels in households are only used to meet hot water demand. They can be used to meet up to 100% of demand using the corresponding slider. The remaining demand is then met using the specified mix of technologies for space heating and hot water.

Solar thermal panels in buildings are used to meet space heating demand, but only up to 13% of demand. The remaining demand is then met using the specified mix of technologies for space heating.

### Technologies for space heating and hot water
---Aanvullen na uitleg Mathijs---

![](/img/docs/20240506_number_of_residences_per_space_heating_technology.png)

![](/img/docs/20240506_deficits_in_space_heating_per_residence_type_and_construction_period.png)