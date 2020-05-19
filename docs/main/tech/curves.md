---
title: Curves
---

The ETM uses hourly curves to model (electricity, hydrogen and gas) demand and supply.
The hourly demand/supply is determined using the annual demand/supply and a curve.

![Hourly hydrogen demand chart](/img/docs/20181002_hydrogen_demand.png)

*Example of hourly demand - hydrogen demand*

In 2019 we made an inventory of all curves available and updated all ETM-curves and their documentation. This project was carried out in close collaboration with the modelling community. On the 3th of July we closed the project with a mini-symposium. In this mini-symposium we shared our findings, struggles and discussed possibilities of further improvement of curves used in energy modelling.

## Overview of curves

We define demand curves, supply curves and time curves. The tables below show a brief overview of the sources and methods currently used.

### Demand

|Sector|Sub-sector|Source|Method|Comment|
|---|---|---|---|---|
|**Households**|Space heating|TNO|TNO curves fitted to temperature and irradiance which enables to generate curves for all years. Curves have been smoothed to show the average load of a cluster of 300 houses rather than an individual house. This results in lower and more realistic total demand peaks.|Update with TNO heat loss calculation when data becomes available|
||Hot water|[Jordan (2001)](https://refman.energytransitionmodel.com/publications/2065)|Distribution function based on average Dutch household|-|
||Cooling|[NEDU](https://www.nedu.nl/documenten/verbruiksprofielen/)|E1A curve|[Argumentation of method](https://github.com/quintel/etdataset-public/tree/master/curves/demand/households/cooling), update with TNO heat loss calculation when data becomes available|
||Appliances|[NEDU](https://www.nedu.nl/documenten/verbruiksprofielen/)|E1A curve|-|
|**Buildings**|Space heating|[NEDU](https://www.nedu.nl/documenten/verbruiksprofielen/)|G2A|Update with TNO heat loss calculation when data becomes available|
||Cooling|[NEDU](https://www.nedu.nl/documenten/verbruiksprofielen/)|E3A curve|[Argumentation of method](https://github.com/quintel/etdataset-public/tree/master/curves/demand/buildings/cooling), update with TNO heat loss calculation when data becomes available
||Appliances|[NEDU](https://www.nedu.nl/documenten/verbruiksprofielen/)|E3A curve|-|
|**Transport**|Electric vehicles|[Movares](https://refman.energytransitionmodel.com/publications/2055) and [ELaad]((https://www.livinglabsmartcharging.nl/nl/praktijk/slim-laden-voorkomt-overbelasting1-energienetwerk))|Profiles available: <br/>**Movares**: week and weekend days for <br/> 1) charging everywhere <br/> 2) charging at home <br/> 3) fast charging. <br/> **ELaad**: repeating average day for <br/>4) smart charging <br/>5) regular charging<br/>Default curve for cars is charging everywhere.|-|
||Passenger trains, trams/metro, electric bicycle, motorcycles|[Movares](https://refman.energytransitionmodel.com/publications/2055)|Charging everywhere|Aim to update with measured data (Pro Rail)|
||Electric busses, electric trucks, freight trains|[Movares](https://refman.energytransitionmodel.com/publications/2055)|Charging at home (curve peaks during night)|Update when specific data becomes available|
||Hydrogen trucks, hydrogen busses, hydrogen cars|-|Flat curve|-|-|
|**Industry**|All sectors except "other"|-|Flat curve||
||Other|Gasterra|G2C profile|-|-|
|**Agriculture**|Electricity|-|Flat curve|-|
||Heat|-|Flat curve|Update when specific data becomes available|

### Supply

|Sector|Source|Method|
|---|---|---|
|Solar PV|["Open Power System Data platform"](https://data.open-power-system-data.org) |Profile from measured data, adjusted to match country specific full load hours|
|Solar Thermal|["KNMI"](https://knmy.readthedocs.io/en/latest/) |Profile from measured data, adjusted to solar-thermal behaviour|
|Wind|["Open Power System Data platform"](https://data.open-power-system-data.org)|Profile from measured data, adjusted to match country specific full load hours|
|Other|River|Flat curve||
|Dispatchable technologies||Production determined by [merit order](/merit-order)|

For NL2015 the OPSD data is incomplete (< 98% of data points available) Hence, different sources (SoDa: Solar Radiation Data for PV and Ecofys data for wind) have been used to generate this curve.

### Time curves
Time curves define how the national production of energy carriers changes over the years (up to 2040)

They are documented in on ETDataset in the source analyses of the specific datasets. [Example for The Netherlands - 2015](https://github.com/quintel/etdataset/blob/master/source_analyses/nl/2015/3_primary_production/3_primary_produciton_source_analysis.md)

For the Netherlands the time curves are based on:

* Natural Gas: [this GasUnie letter](https://www.rijksoverheid.nl/ministeries/ministerie-van-economische-zaken-en-klimaat/documenten/brieven/2019/01/31/brief-gasunie-over-raming-benodigd-groningenvolume) (31-01-2019).
* Crude oil: [NLOG](https://www.nlog.nl/sites/default/files/jaarverslag%20delfstoffen%20en%20aardwarmt%20in%20nederland%20-%202017.pdf).
* Other carriers: The Primes reference scenario in [EC 2016 Trends to 2050 - Reference Scenario 2016](https://refman.energytransitionmodel.com/publications/2096).

For all other countries the time curves are based on the Primes reference scenario 2016.

## Details

[ETDataset - curves](https://github.com/quintel/etdataset-public/tree/master/curves) contains all raw data, scripts and further explanations.

## Discussion
Feedback on the curves we use is very welcome!
If you have a comment or a better source please let us know, you can:

* [Open an issue in ETDataset](https://github.com/quintel/etdataset-public/issues/new) and assign a team member of Quintel:
  * [Chael Kruip](https://github.com/Chaelkruip)
  * [Dorine van der Vlies](https://github.com/Dorinevandervlies)
  * [Marlieke Verweij](https://github.com/marliekeverweij)
  * [Roos de Kok](https://github.com/Redekok)
* E-mail us: [info@energytransitionmodel.com](info@energytransitionmodel.com)
