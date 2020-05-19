---
title: Dashboard
---

The dashboard in the Energy Transition Model is the overview at the bottom of the page, which contains information on the most essential performance indicators of the scenario. The user can click on each of the indicators in the dashboard to get a pop-up with detailed information on each of the subjects. This page explains both the number indicator and the pop-up window.

As of November 2011 the dynamic dashboard has been introduced. Users can now customize the dashboard they see in the model by clicking 'Change' at the bottom right of the dashboard.

![A screenshot of the dashboard, which supplies information on a number of performance indicators of your scenario.](/img/docs/Dashboard.jpg)

Energy use
----------

*Main article: [Primary energy](/primary-energy)*

The chart shows the total primary energy consumption resulting from the total final consumption. This includes primary consumption that results from final non-energy consumption. It does not include primary consumption that results from exports. (This also means that the losses which are typically incurred in the conversion sector are only included for the part of the inland final consumption, not for the exports)

For more information on the primary energy calculation click [here](/primary-energy).

CO<sub>2</sub> emissions
------------------------

*Main article: [CO<sub>2</sub> calculations](/co2-calculations)*

The percentage shows the change in CO<sub>2</sub> emissions between 1990 and the scenario year. The chart shows the CO<sub>2</sub> emissions in 1990, in the current year and in the scenario year. The target CO<sub>2</sub> emissions is set by the user in the section "goals - sustainability targets".

CO<sub>2</sub> emissions shown here are the total *energetic* CO<sub>2</sub> emissions resulting from the total final *energy* consumption. This does not include CO<sub>2</sub> emissions from final non-energy consumption, fugitive emissions, industrial process, solvent and other product use, agriculture, LULUCF, and other. It also does not include CO<sub>2</sub> emissions resulting from exports. The CO<sub>2</sub> emission reduction of CO<sub>2</sub> capture and storage is taken into account.

![Energy import in the dashboard](/img/docs/Import_chart.jpg)

The 1990 value is taken from the [area data file](https://github.com/quintel/etsource/blob/master/datasets/nl/nl.ad). The values for the current year and the scenario year are calculated. For more information on the CO<sub>2</sub> emission calculation click [here](/co2-calculations).

Energy imports
--------------

*Main article: [Import calculations](/import-calculations)*

The percentage is the net amount of imported primary energy (imports - exports) divided by the total primary consumption. The total primary consumption includes the conversion losses incurred from generation of electricity that is exported. (this approach is sometimes called the 'territorial' approach, as opposed to the 'final consumption' approach)

The chart shows the net imported amount (net export is negative) of each primary energy carrier and the sum of all carriers in a waterfall type chart. The left chart is for the current year, and the right chart is for the scenario year.

Cost
----

*Main article: [Cost calculations](/cost-calculations)*

The number shows the total yearly cost of energy supply in your region in the scenario.

The chart shows the these costs both for the current situation (left) and the scenario (right). It also shows the contribution to the costs from the supply of heat, supply of electricity, supply of transport fuels, and the supply of non-energetically used fuels (for example feedstock in the chemical industry, or oil used as lubricant in the transport sector).

The value is in current year's euros. It includes the costs of the primary energy carriers and the costs of all the plants that produce electricity and / or heat. Click [here](/cost-calculations) for more information on the cost calculation.

Costs per household
-------------------

*Main article: [Cost calculations](/cost-calculations)*

The number shows the total yearly cost of energy supply divided by the number of households.

The chart shows the these costs both for the current situation (left) and the scenario (right). It also shows the contribution to the costs from the supply of heat, supply of electricity, supply of transport fuels, and the supply of non-energetically used fuels (for example feedstock in the chemical industry, or oil used as lubricant in the transport sector).

The value is in current year's euros. It includes the costs of the primary energy carriers and the costs of all the plants that produce electricity and / or heat. Click [here](/cost-calculations) for more information on the cost calculation.

Bio-footprint
-------------

*Main article: [Footprint calculations](/documentation#biofootprint-calculations)*

The number shows how much arable land you need to grow the biomass used in your scenario expressed in multiples of your region's total *arable land* area (taken from area data). Biomass includes solid biomass, biofuels (liquid), and biogasses (including green gas).

The graphic shows the necessary arable land for both the current year, and the scenario, by blue pictures of your region. Be aware that 1 blue picture of your region means that you need 1 times the *arable land* area of your region, **not** 1 times the total area of your region to grow the biomass.

For more information on the calculation of the bio-footprint click [here](documentation.md#biofootprint_calculations).

Renewables
----------

*Main article: [Renewables](/renewability)*

The number shows the percentage of final *energy* consumption that is supplied by renewable sources in the scenario.

The chart shows this percentage both for the current situation and the scenario. The percentage for the current situation is also calculated by the ETM. This percentage may be slightly different from the number in official statistics due to a different definition or due to necessary simplifications in the ETM. The main article [renewables](/renewability) provides more information on these differences.

Renewable electricity
---------------------

*Main article: [Renewables](/renewability)*

The number shows the percentage of final *electricity* consumption that is renewably produced. The calculation uses the definition as used by the European Commission (Directive [2009/28/EC](http://eur-lex.europa.eu/LexUriServ/LexUriServ.do?uri=Oj:L:2009:140:0016:0062:en:PDF)). Also see the main article for more information.

The chart shows this percentage both for the current situation and the scenario. The percentage for the current situation is also calculated by the ETM. This percentage may be slightly different from the number in official statistics due to a different definition or due to necessary simplifications in the ETM. The main article [renewables](/renewability) provides more information on these differences.

Loss of load
------------

*Main article: [Electricity backup](/electricity-backup)*

The loss of load dashboard item shows the probability that electricity production capacity is less than expected demand. The loss of load probability is calculated by comparing the peak electricity demand of a country with the installed capacity. In this calculation, consideration is also given for the variability of volatile electricity production (i.e. Solar PV and wind turbines).

The pop-up shows the peak electricity demand as well as the installed electricity production capacity. The installed capacity is split into reliable and unreliable capacity. Unreliable capacity is that from volatile energy sources which is not available at all times of the day and/or year. To avoid a non-zero loss of load probability it is important that there is sufficient reliable capacity to meet the peak electricity demand, for example by adding gas CCGTs to function as backup for volatile electricity production.
