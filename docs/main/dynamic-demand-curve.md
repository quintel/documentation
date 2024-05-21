---
title: Dynamic electricity demand curve
---

The behaviour of heat pumps and electric vehicles is modelled explicitly and on an hourly scale. The chart 'Electricity demand per hour' gives an overview of the demand and in the Flexibility > [Modify profiles](https://pro.energytransitionmodel.com/scenario/flexibility/curve_upload/upload-curves) section of the ETM you can view the specific demand of heat pumps and electric vehicles. This page explains which profiles were used to model the behaviour of these technologies.

_Checkout: the ['Curves'](curves) infopage for more information._

![](/img/docs/dynamic_electricity_demand.png)

## Scope of implementation

### Included technologies
- Electric vehicles
- Space heating
- Hot water
- Other

## Profiles used

### Electric vehicles

The ETM uses five different profiles to determine the demand of EV’s based on research performed by Movares (Movares, 2013) and Elaad. These five profiles are:

- Charging at home
- Charging everywhere
- Fast charging
- Charging smart (Elaad)
- Charging regular (Elaad)

You can use these profiles to adjust the charging behaviour of electric cars. In all profiles weekend days are considered differently from weekdays. You can find these profiles in the Flexibility section under ‘Net load’> ‘Demand response – electric vehicles’. 

### Hot water

The hot water profile is based in great part on "Realistic Domestic Hot-Water Profiles in Different Time Scales" (Jordan, 2010). This study assumes a daily average DHW use of 200 liters and distinguishes different types of DHW consumption, each with an associated volume and average daily occurrence. The ETM-profile is based on this average volume and daily occurrence.

The hot water profile simulates the average hot water demand. Because this aggregated profile is used the load on the network is modelled well. However, the disadvantage is that the behaviour of hot water technologies is not modelled perfectly with an aggregated profile as the peaks of the demand are higher on an individual level.

### Space heating
For each housing type (apartments / terraced / semi-detached / detached), the ETM contains a demand profile for high, medium and low levels of insulation. These are matched with build year categories as follows:
    * _high insulation_: 'new' and '2005-present' residences;
    * _medium insulation_: '1965-1984' and '1985-2004' residences 
    * _low insulation_: '1945-1964' and 'before 1945' residences. 
In all, the ETM thus contains 12 different heat demand profiles for space heating.

The shape of these demand profile for space heating depends on the housing type and insulation level. For example, a poorly insulated detached house will have a more spikey profile than a well-insulated apartment. 

The space heating profiles used by ETM are based on two types of profiles:
1. heat demand profiles made by ECN and used by Ecofys in their study "Systeemkosten van warmte voor woningen" ([Ecofys, 2015](#references)). 
2. temperature curves based on KNMI measurements in The Bilt ([KNMI, 2017](#references)).

The default temperature curve and corresponding profiles are the same as the base year. In 1987, the Netherlands experienced an exceptional cold snap in the second week of January, which significantly increased the demand for space heating. This may happen again in the future, and low temperatures may negatively affect the ability for air and hybrid heat pumps to satisfy demand. In the ETM “cold snap” can be selected to use the 1987 heat demand and air temperature.

_Sources: other sources used are Ecofys, 2015 ([Systeemkosten van warmte voor woningen](https://refman.energytransitionmodel.com/publications/2063)) and Jordan, 2010 ([Realistic Domestic Hot-Water Profiles in Different Time Scales](https://refman.energytransitionmodel.com/publications/2065))_


