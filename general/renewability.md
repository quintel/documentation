The ETM calculates the renewable share of all energy flows in the model on the basis of the output. For example: if in a country the 75 PJ of electricity is supplied as follows: 50 PJ from an efficient natural gas powerplant which requires 100 PJ gas input, and 25 PJ from an inefficient biogas powerplant which requires 100 PJ biogas input, then the renewable share of the electricity supplied is 25 / 75 = 33%. By taking the proper sum of energy flows the renewable share of any desired part of the energy system can be calculated.

NOTE: EU renewable energy targets are defined in terms of final energy use. This means renewable heat and electricity are weighted equally when calculating the renewable percentage.

Uranium / nuclear heat is counted as non-renewable.

### Dashboard calculation

Since January 2012 there are two renewable dashboard item: Renewables (energy) and Renewable electricity. The calculation method of the two are not identical, the calculation method of each is explained below. Both dashboard items have a chart showing the percentage renewable energy or electricity for both the current situation and the future scenario.

#### Renewables

The number in the [dashboard](dashboard.md) shows the percentage of final *energy* consumption that is supplied by renewable sources in the scenario. Non-energy consumption of carriers is not included in this calculation. The final consumption does **not** include transmission and distribution losses. It does include energy sector own use (= consumption in the conversion sector) as this is currently included in the industry sector in the ETM. Ambient heat input into heatpumps (both supplying monetized heat and non-monetized heat) is counted as renewable final energy consumption. Heat captured by solar thermal panels for space heating and hot water is **not** counted as renewable final energy consumption. Nevertheless the renewable percentage typically increases a bit with increasing penetration of solar thermal panels because they reduce the amount of final energy consumption which is typically mostly fossil in the current situation. (Note: if the preferred definition of renewable share is different then the dashboard calculation can be adapted).

#### Renewable electricity

The renewable electricity percentage is calculated by using the definition of the European Comission, according to Directive [2009/28/EC](http://eur-lex.europa.eu/LexUriServ/LexUriServ.do?uri=Oj:L:2009:140:0016:0062:en:PDF). This definition divides the amount of renewable electricity production by the gross final electricity demand. Gross final electricity demand according to the definition of the EC includes energy sector own use of electricity and transmission losses. For the Netherlands the ETM calculates without the electricity, CHP and heat plants' own use of electricity, as this is not included in gross final consumption in Dutch national statistics [see this document](http://refman.et-model.com/publications/1562).

The calculation implies that the renewable electricity percentage can be greater than 100% if, for example, the electricity production is significantly higher than the demand.

### Different definitions of renewable share

The renewable percentage that the ETM calculates may be different from the number that is published by official statistics. The main reason is that different organizations use different definitions for calculating a renewable percentage. (Source: Hernieuwbare energie in Nederland - 2009, Centraal Bureau voor de Statistiek (in Dutch) [1](http://refman.et-model.com/publications/1582))

-   IEA & Eurostat: Primary energy method (also called input method) where the renewable share is calculated on the basis of primary energy input including non-energy consumption.
-   CBS (Dutch national statistics bureau): Substitution method (primary energy) where the renewable share is calculated on the basis of primary energy including non-energy consumption, but the amount of primary energy for renewables is determined on the basis of what amount of fossil fuel they replace. This results in larger amounts of primary energy for solar and wind and lower amounts for relatively inefficienct biomass and waste electricity generation stations.
-   European Commission: Gross final energy consumption (excluding non-energy consumption) where the renewable share is calculated on the basis of the final energy consumption including the consumption of electric­ity and heat by the energy branch for electricity and heat pro­duction and including losses of electricity and heat in distribution and transmission. (Source: Directive of the European Parliament and of the Council of 23 April 2009 on the promotion of the use of energy from renewable sources and amending and subsequently repealing Directives 2001/77/EC and 2003/30/EC. [2](http://eur-lex.europa.eu/LexUriServ/LexUriServ.do?uri=OJ:L:2009:140:0016:0062:en:PDF))

The definition used by the ETM is similar, but not the same, as that of the European Commission. Apart from these differences in the main definitions there are also differences in details such as, for example, biogenic waste. In addition the ETM contains simplifications such as, for example, that all biomass usage in the final demand sectors is assumed to be wood pellets (except in the transport sector).
