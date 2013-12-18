# Supply

Introduction
------------

The Supply tab covers the central production of both electricity and heat, as well as transport fuel. Sliders for decentralized electricity and heat producing options are shown, but cannot be set here as they can be set in the Demand section where the actual production takes place. A chart on the right shows from what sources electricity, heat or transport fuels are obtained. The following areas are covered:

-   Electricity
-   Renewable electricity
-   Fossil heat
-   Renewable heat
-   Transport fuels
-   Other fuels
-   Fuel chain emissions

Supply/Demand Balance
---------------------

Having determined energy consumption in the [Demand](demand.md) section, the user has the opportunity to specify how electricity and heat production should take place. Of course, supply and demand of electricity must be in balance. The ETM assure this balance exists, by importing any shortages or exporting surpluses. Electricity is easily imported or exported via interconnection capacity on the grid. As there are few options for electricity storage and no options for just dumping electricity, it is important to maintain the electricity balance.
 Heat on the other hand, can be and is often dumped. Too much heat production will just lead to waste in the ETM, whereas a surplus of electricity will lead to exports. In the households and buildings sectors the heat demand and supply are automatically balanced in the model by adjusting the supply of heat to the demand. This is achieved by linking the local demand for heat to decentral heat producing technologies.
The only exception is the district heating option, which is connected to the central heat network, where several heat sources can supply heat at the same time, so a direct link between demand and supply is not possible.
In the other sectors demand and supply are not automatically linked. If there is a shortage of heat the model will show a "Heat network remainder" slider which shows the user he has to produce more heat in some way to balance the heat demand and supply in the model. Heat in the model is exchanged between sectors and only if the heat produced in all sectors together is lower than the demand does a shortage exist. If the total heat produced in all sectors is higher than the demand a surplus of heat exists and this excess heat is dumped.

Electricity
-----------

Options are many different kinds of coal, gas and oil-fired plants, with or without Carbon Capture and Storage (CCS), and nuclear plants. Large scale combined Heat and Power (CHP) can also be chosen here.

Renewable electricity
---------------------

Options are biomass, wind, hydro electric, geothermal, solar and waste-fired power.

Fossil heat
-----------

Options are Combined Heat and Power (CHP) plants and dedicated heat plants. The CHPs cannot actually be built here as they can be built under Electricity (see above).

Renewable heat
--------------

Options are Biomass, geothermal and ambient heat and solar.

Transport fuels
---------------

The user can choose to what extent the transport fuel mix should consist of the bio-alternative for each fuel type.

Other fuels
-----------

The user can choose to what extent natural gas and coal used should consist of green gas or bio-coal respectively.

Fuel chain emissions
--------------------

The user can choose what countries or regions of origin fuels should be imported from. Depending on the mix of origins, the user sees the resulting greenhouse gas emissions during the full life cycle of these fuels. The fuel life cycle is divided into: 1. Extraction 2. Processing 3. Transportation and 4. Conversion. The user can choose to have the ETM use these life cycle greenhouse gas emissions instead of the CO<sub>2</sub> emissions from combustion/conversion only.
This allows the user to compare life cycle emissions for different electricity generation technologies, for example.
