---
title: Renewables
---

The following page describes the definitions of renewables used within the ETM as well as the calculation method for the share of renewables and share of renewable electricity. You can choose different types of renewable energy production methods in the Supply > ['Renewable electricity'](https://pro.energytransitionmodel.com/scenario/supply/electricity_renewable/wind-turbines) section in the ETM. 

## Definitions of renewable share
The renewable percentage that the ETM calculates may be different from the number that is published by official statistics. The main reason is that different organizations use different definitions for calculating a renewable percentage. 

-	IEA & Eurostat: Primary energy method (also called input method) where the renewable share is calculated on the basis of primary energy input including non-energy consumption.
-	CBS (Dutch national statistics bureau): Substitution method (primary energy) where the renewable share is calculated on the basis of primary energy including non-energy consumption, but the amount of primary energy for renewables is determined on the basis of what amount of fossil fuel they replace. This results in larger amounts of primary energy for solar and wind and lower amounts for relatively inefficient biomass and waste electricity generation stations.
-	European Commission: Gross final energy consumption (excluding non-energy consumption) where the renewable share is calculated on the basis of the final energy consumption including the consumption of electric¬ity and heat by the energy branch for electricity and heat pro¬duction and including losses of electricity and heat in distribution and transmission. (Source: Directive of the European Parliament and of the Council of 23 April 2009 on the promotion of the use of energy from renewable sources and amending and subsequently repealing Directives 2001/77/EC and 2003/30/EC. 2)

_Source: [Hernieuwbare energie in Nederland - 2009, Centraal Bureau voor de Statistiek](http://refman.et-model.com/publications/1582) (Dutch))_

The definition used by the ETM is similar, but not the same compared to the definition used by the European Commission (biogenic waste is different for example). In addition, the ETM contains simplifications such as the fact that all biomass usage in the final demand sectors is assumed to be wood pellets (except in the transport sector).

## Share of renewable energy
The ETM calculates the renewable share of the final energy consumption in the model on the basis of the output. For example: if a country supplies 75 PJ of electricity using:
-	50 PJ from an efficient natural gas power-plant which requires 100 PJ gas input, and
-	25 PJ from an inefficient biogas power-plant which requires 100 PJ biogas input, ...

... the renewable share of supplied electricity is 25 / 75 = 33%. By taking the proper sum of energy flows the renewable share of any desired part within the energy system can be calculated.

The final consumption used in this calculation does not include transmission and distribution losses. It does include energy sector own use (= consumption in the conversion sector). Non-energy consumption of carriers is also not included in the share of renewable energy calculation. Ambient heat input into heat-pumps (both supplying monetized heat and non-monetized heat) is seen as a renewable source however, heat captured by solar thermal panels for space heating and hot water is not counted as renewable final energy consumption. Nevertheless, the renewable percentage typically increases a bit with increasing penetration of solar thermal panels because they reduce the amount of final energy consumption which is typically mostly fossil in the current situation.

_Note:  EU renewable energy targets are defined in terms of final energy use. This means renewable heat and electricity are weighted equally when calculating the renewable percentage._

## Share of renewable electricity
The renewable electricity percentage is calculated by using the definition of the European Commission, according to Directive 2009/28/EC. This definition divides the amount of renewable electricity production by the gross final electricity demand. Gross final electricity demand according to the definition of the EC includes energy sector own use of electricity and transmission losses. For the Netherlands the ETM calculates without the electricity, CHP and heat plants' own use of electricity, as this is not included in gross final consumption in Dutch national statistics. The calculation implies that the renewable electricity percentage can be greater than 100% if, for example, the electricity production is significantly higher than the demand.

_Source: [Directive Renewables European Comission 2009](http://eur-lex.europa.eu/eli/dir/2009/28/oj)_

_Source: you can find the Dutch national statistics [here](https://refman.energytransitionmodel.com/publications/1562)._