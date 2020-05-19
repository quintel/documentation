---
title: Dynamic electricity demand curve
---

The behaviour of heat pumps and electric vehicles is modelled explicitly and on an hourly scale. This can be viewed in the "dynamic demand curve" chart. This document explains which profiles were used to model the behaviour of these technologies.

![](/img/docs/20170921_dynamic_demand_curve.png)

## Scope of implementation

### Included technologies
- Electric vehicles
- Space heating
- Hot water
- Other

## Profiles used

### Electric vehicles

The profiles used for demand of EV's are based on research performed by Movares ([Movares, 2013](#references)). The ETM allows selection of three different profiles:

- Charging at home
- Charging everywhere
- Fast charging

In these profiles weekend days differ from week days.

### Hot water

The hot water profiles are based in great part on "Realistic Domestic Hot-Water Profiles in Different Time Scales" (Jordan, 2010). This study assumes a daily average DHW use of 200 liters and distinguishes different types of DHW consumption, each with an associated volume and average daily occurrence. The ETM-profile is based on this average volume and daily occurrence.

The hot water profile simulates the average hot water demand. Because this aggregated profile is used the load on the network is modelled well. However, the disadvantage is that the behaviour of hot water technologies is not modelled perfectly with an aggregated profile as the peaks of the demand are higher on an individual level.

### Space heating

The shape of the demand profile for space heating depends on house type and insulation level. For example a poorly insulated detached house will have a more spikey profile than a well insulated apartment. The ETM takes this into account by basing the average profile on the type and insulation level of the current housing stock. The shape of the demand curve changes when the insulation levels are changed by the user.

The space heating profiles used by ETM are based on profiles made by ECN and used by Ecofys in their study "Systeemkosten van warmte voor woningen" ([Ecofys, 2015](#references)). ECN devised different profiles for 5 types of houses and 3 insulation levels for each type.

**House types:**

* Row house
* Corner house
* Semidetached house
* Apartment
* Detached house

**Insulation levels:**

* Low
* Medium
* High

**Dutch housing stock** ([ABF Research, 2014](#references))

* Row house: 31%
* Corner house: 12%
* Apartment: 30%
* Semidetached house: 12%
* Detached house: 15%

For old houses the minimum slider settings gives the weighed average profile corresponding to low insulation. For new houses, which are currently more insulated than old houses, the minimum slider settings gives the weighed average profile corresponding to medium insulation. For both old and new houses the maximum slider setting gives the weighed average profile corresponding to high insulation.
A slider setting which is between the minimum and the maximum insulation value gives a weighed mix of the profile corresponding to the minimum and the maximum value.

![](/img/docs/20170914_insulation_sliders.png)

:::note
In the ETM the insulation level can be set with sliders. The minimum slider setting corresponds to the current insulation level. The maximum slider setting corresponds to theoretically maximum insulation.
:::

The temperature curves that are used to make the space heating demand curves are based on KNMI measurements in The Bilt ([KNMI, 2017](#references)).

The default temperature curve and corresponding profiles is the same as the base year. In 1987, the Netherlands experienced an exceptional cold snap in the second week of January, which significantly increased the demand for space heating. This may happen again in the future, and low temperatures may negatively affect the ability for air and hybrid heat pumps to satisfy demand. In the ETM “cold snap” can be selected to use the 1987 heat demand and air temperature.

### Other

All other electricity demand is currently shown as one group and is colorless.

## References

* ABF Research, 2014: [Ontwikkelingen op de woningmarkt – Socrates 2013](https://www.rijksoverheid.nl/documenten/rapporten/2014/06/18/ontwikkelingen-op-de-woningmarkt-socrates-2013)
* Ecofys, 2015: [Systeemkosten van warmte voor woningen](https://refman.energytransitionmodel.com/publications/2063)
* Jordan, 2010: [Realistic Domestic Hot-Water Profiles in Different Time Scales](https://refman.energytransitionmodel.com/publications/2065)
* Movares, 2013: [Laadstrategie elektrisch wegvervoer](https://refman.energytransitionmodel.com/publications/2055)
* KNMI, 2017: [Uurgegevens van het weer in Nederland](http://projects.knmi.nl/klimatologie/uurgegevens/selectie.cgi)
