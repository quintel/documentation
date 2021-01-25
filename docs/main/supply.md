---
title: Supply
---

With the Supply section you can try and cover the total energy demand which is set in the Demand section. The Supply section in the ETM covers the centralized production of both electricity and heat, as well as transport fuel. Decentralized production (e.g. of solar electricity) is covered in the Demand section. The following areas are covered:

-   Electricity
-	Renewable electricity
-	District heating
-	Hydrogen
-	Transport fuels
-	Biomass
-	CCUS
-	Fuel production

## Electricity
You can influence the production of electricity by adjusting the amount of coal plants, gas plants, oil plants or nuclear plants. 

## Renewable electricity
In the renewable electricity section you can adjust the amount of (centralized) solar power, wind power, hydro power, biomass plants, waste power, hydrogen plants or geothermal energy available in your scenario area. The maximum amount of available renewable sources for the creation of renewable electricity is not fixed in the ETM. This means you have to decide what is realistic for your specific scenario area. 

## District heating
District heating can be used as heating technology in households, buildings and agriculture. There are roughly two types of heat sources: dispatchable and must-run heat sources. Dispatchable heat sources can be switched on/ off depending on the heat demand at that time, while must-run heat sources supply the heat network regardless of heat demand. For the second type in particular (seasonal) storage of heat is an interesting option. 

_Checkout: the Heat Networks page in the flexibility section for more information._ 

## Hydrogen
In the hydrogen section you can specify how hydrogen is produced in the future. The ETM offers the following options: electrolysis of wind and solar power from wind/solar farms dedicated to hydrogen production; steam methane reforming (with and without carbon capture); gasification of biomass (with and without carbon capture); import from abroad. Furthermore, it is possible to convert excess electricity into hydrogen using 'power-to-gas' (see the power-to-gas slide). You can do this if your scenario has moments where electricity production exceeds demand. Hydrogen for the fertilizer industry can also be produced on-site since this industry currently has large hydrogen production plants (see fertilizer industry). 

## Transport fuels
In the Transport fuels section you can adjust the type of fuel used by road transport, rail transport, domestic navigation, international aviation and international navigation. By adjusting the fuel mixes you can influence the amount of CO2 emissions in the future as well as the amount of land necessary for the production of biofuels. 

## Biomass
In the biomass section you can choose how much biomass should be used as green gass in the gas network or production, or as bio-coal or -oil in energy plants. Furthermore, you can specify the total amount of biomass available in your scenario region by adjusting the sliders in the ‘potential of biomass’ section. Since biomass emissions are officially not considered in the EU you have the possibility to change this in the ‘CO2 emissions of biomass’ section.

## Fuel production
Fuel production is supported by the extraction of energy carriers such as coal or natural gas (‘primary carriers’). These are converted to useful carriers such as electricity or heat. In the fuel production section it is not possible to adjust the production of such energy carriers (yet) due to the complexity of this topic for users. Rather, the annual production of these energy carriers is shown for your specific scenario region to give an insight into this process. 




 








## Supply/Demand Balance

Having determined energy consumption in the [Demand](demand.md) section, the user has the opportunity to specify how electricity and heat production should take place. Of course, supply and demand of electricity must be in balance. The ETM assure this balance exists, by importing any shortages or exporting surpluses. Electricity is easily imported or exported via interconnection capacity on the grid. As there are few options for electricity storage and no options for just dumping electricity, it is important to maintain the electricity balance.

Heat on the other hand, can be and is often dumped. Too much heat production will just lead to waste in the ETM, whereas a surplus of electricity will lead to exports. In the households and buildings sectors the heat demand and supply are automatically balanced in the model by adjusting the supply of heat to the demand. This is achieved by linking the local demand for heat to decentralised heat producing technologies.

The only exception is the district heating option, which is connected to the central heat network, where several heat sources can supply heat at the same time, so a direct link between demand and supply is not possible.

In the other sectors demand and supply are not automatically linked. If there is a shortage of heat the model will show a "Heat network remainder" slider which shows the user he has to produce more heat in some way to balance the heat demand and supply in the model. Heat in the model is exchanged between sectors and only if the heat produced in all sectors together is lower than the demand does a shortage exist. If the total heat produced in all sectors is higher than the demand a surplus of heat exists and this excess heat is dumped.

## Electricity

Options are many different kinds of coal, gas and oil-fired plants, with or without Carbon Capture and Storage (CCS), and nuclear plants. Large scale combined Heat and Power (CHP) can also be chosen here.

### Renewable electricity

Options are biomass, wind, hydro electric, geothermal, solar and waste-fired power.

## Fossil heat

Options are Combined Heat and Power (CHP) plants and dedicated heat plants. The CHPs cannot actually be built here as they can be built under [Electricity](supply.md#electricity).

## Renewable heat

Options are Biomass, geothermal and ambient heat and solar.

## Transport fuels

The user can choose to what extent the transport fuel mix should consist of the bio-alternative for each fuel type.

## Alternative fuels

The user can choose to what extent natural gas and coal used should consist of green gas or bio-coal respectively.

## Fuel chain emissions

The user can choose what countries or regions of origin fuels should be imported from. Depending on the mix of origins, the user sees the resulting greenhouse gas emissions during the full life cycle of these fuels. The fuel life cycle is divided into: 1. Extraction 2. Processing 3. Transportation and 4. Conversion. The user can choose to have the ETM use these life cycle greenhouse gas emissions instead of the CO<sub>2</sub> emissions from combustion/conversion only.
This allows the user to compare life cycle emissions for different electricity generation technologies, for example.

## Electricity backup

Information is given about the security of supply and the backup options. See [Electricity backup](electricity-backup.md) for more information.

## Electricity storage

Information is given about excess electricity and various electricity storage technologies. See [Storage](storage.md) for more information.

## Import/Export

Information is given about the the import and export of electricity.

