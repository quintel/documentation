# Cost calculations

The Energy Transition Model calculates the total cost of the yearly energy supply for the region. The total cost is broken down in five categories: heat, electricity, fuels, non-energetic fuels, and network costs.

-   The costs for electricity includes costs for the fuel, operation and maintenance, financing costs and costs for CO2 emission credits if applicable.

-   The costs for heat producing devices are calculated in the same fashion as those of electricity producing devices. This calculation therefore also entails costs for the fuel, operation and maintenance, financing costs and costs for CO2 emission credits if applicable.

-   The energetic fuel costs are based the final demand of the transportation sector and the given energy carriers costs, and refinery costs.

-   The non-energetic fuel costs are calculated with the final demand of non-energetic fuels and the given energy carriers costs.

-   The network cost include the annual maintenance costs for both the electricity as the gas network, but also account for additional costs that have to be made in case the network has to be improved due to choices for specific technologies which may affect the infrastructure requirements.

The costs are all expressed in current years Euros. Inflation is not taken into account, however, the cost of capital is taken into account (with a Weighted Average Cost of Capital (WACC) of 10% for power plants and industrial devices, 4% for household appliances and 6% for other sectors. All costs are without taxes, subsidies, levies etcetera. Most importantly the model calculates *cost* of energy, not the *prices* of energy for specific stakeholders.

Electricity production
----------------------

*Main article: [ Electricity and heat production costs](heat_and_electricity_cost.md)*

The costs of electricity production are a simple sum of all electricity producing devices in the scenario (eg. power plants, solar panels, CHPs). Per electricity producing unit, the total costs are calculated. This calculation includes costs for fuel, operation and maintenance, financing costs and costs for CO<sub>2</sub> emission credits if applicable. The same calculation is used for both electricity and heat costs, which is explained in more detail [here](heat_and_electricity_cost.md).

The total electricity produced in these converters is usually not an exact match with the demand of electricity in the scenario. When importing electricity, the costs are set to the average local production costs of electricity. In other words: imported electricity costs the same as locally produced electricity. Possible revenues of exported electricity are not taken into account. If your production exceeds your demand, the costs of the resulting excess of electricity are counted towards the total.

Heat production
---------------

*Main article: [ Electricity and heat production costs](heat_and_electricity_cost.md)*

Just like the costs for electricity production, the calculation for heat producing devices (eg. households heating appliances, industrial burners etc.) include costs for fuel, operation and maintenance, financing costs and costs for CO<sub>2</sub> emission credits if applicable. More details on this calculation are explained [here](heat_and_electricity_cost.md).

It is assumed that the total heat produced in the converters corresponds with the use of heat in the scenario, and no heat is imported or exported.

Next to the costs for the production heat, costs for insulation of buildings are added in the total as well. These costs are based on average costs of insulation the in the Netherlands.

Energetic fuels
---------------

The costs categorized under "fuels" show the total costs that are made yearly to provide the energy needed for fuels, in the industry, agriculture and transport sector. This does not include the transport systems themselves (such as cars, train and planes).

The costs of fuels for the energy sector consist of costs of grid losses and costs of production of fuels (refinery) needed in the transport sector. The costs of these losses are based on the given energy carriers costs calculated here, and the production on fuels costs are calculated using the difference between the price of crude oil and the production cost of the transport fuels. These are calculated on a cost basis, so without taking taxes into account.

The price of crude oil that is used is the WTI ([source](http://www.oil-price.net)). The production costs of oil products is based on data from the [European oil bulletin](http://ec.europa.eu/energy/observatory/oil/bulletin_en.htm).

Non-energetic fuels
-------------------

Besides the energetic use of fuels, fuels are also used non-energetically. This calculation determines the costs based on the final demand of non-energetic use of fuels in all sectors. Multiplied with the given energy carriers costs, this results in the total costs for non-energetic fuels.

Network
-------

*Main article: [Network calculations](network.md)*

The network costs are currently only calculated in the Netherlands, because this calculation requires a lot country-specific data which have only been collected in the Netherlands. These costs include the annual maintenance costs for both the electricity as the gas network, and account for additional costs that have to be made in case the network has to be improved due to choices for specific technologies which may affect the infrastructure requirements.
