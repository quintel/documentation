---
title: Carbon emissions from imported electricity
sidebar_label: Emissions from imported electricity
---

## Introduction
When a country or region has a (temporal) higher electricity demand than production electricity needs to be imported from neighbouring countries or regions.

In many cases the imported electricity also causes CO<sub>2</sub> emissions due to production, transportation, and other life cycle relate emissions.

## Default settings

The default setting for imported electricity is the Dutch electricity mix: 527 gCO<sub>2</sub>/kWh or 146,39 gCO<sub>2</sub>/MJ ([CBS, 2015](#references)). The CBS (National statistical office) has chosen the 'integral method' to calculate the CO2 emissions of the electricity mix.

The reason to choose the Dutch average is that most datasets of the ETM are regional datasets of the Netherlands. These regions do import mostly electricity from the Dutch grid, which mostly exists of the Dutch electricity mix. In the ETM the user can overwrite this default setting, both for the present and the future situation.

## Table with optional values

We offer you two tables to support your choice. Table 1 shows country specific values, and Table 2 shows carrier-technology specific values.

### Country specific values

The European Environment Agency offers an overview of all European Union countries and their gCO<sub>2</sub> emission per kWh. On their website you can select a specific country and you can select the average of all the 28 European Union member states in from 1990 til 2014 ([EEA, 2018](#references)). Table 1 shows an overview of 2015 data.

Member State		| gCO<sub>2</sub> emissions / kWh
------------- | -------------
European Union (28 countries)| 314.4
Austria			| 97.2
Belgium			| 224.3
Bulgaria			| 492.8
Croatia			| 212.4
Cyprus				| 675.4
Czech Republic	| 507.5
Denmark			| 	144.1
Estonia			| 850.8
Finland			| 108.6
France				| 52
Germany			| 	446.4
Greece				| 701.6
Hungary			| 276.5
Ireland			| 432
Italy				| 275.5
Latvia				| 127.8
Liechtenstein		| 	None
Lithuania			| 58.6
Luxembourg		| 292.7
Malta				| 686.9
Netherlands		| 525.1
Poland				| 787.3
Portugal			| 396.1
Romania			| 342.9
Slovakia			| 139.3
Slovenia			| 256.2
Spain				| 318.2
Sweden				| 12.1
United Kingdom	| 351


Table 1: Table with optional 2015-values by country, from: ([EEA, 2018](#references))


**Carrier-technology specific values**

Table 2 shows the CO2 emissions of some carrier-technology combinations.

![](/img/docs/20180111_carrier-technology_co2_emissions.png)

Table 2: with carrier-technology dependent CO<sub>2</sub> emissions / kWh, from: ([Turkoni et al., 2013](#references)). Note: this is data from a Life Cycle Assessment and has a larger scope than the emissions at the production plant only.

## References

- [EEA, 2018](https://www.eea.europa.eu/data-and-maps/daviz/co2-emission-intensity-5#tab-googlechartid_chart_11_filters=%7B%22rowFilters%22%3A%7B%7D%3B%22columnFilters%22%3A%7B%22pre_config_ugeo%22%3A%5B%22European%20Union%20(current%20composition)%22%5D%7D%7D)
- [CBS, 2015](https://www.cbs.nl/nl-nl/achtergrond/2017/06/rendementen-en-co2-emissie-elektriciteitsproductie-2015)
- [Turconi et al., 2013: Life cycle assessment (LCA) of electricity generation
technologies](https://refman.energytransitionmodel.com/publications/2078): Overview, comparability and limitations. Renewable and Sustainable Energy Reviews, 28, 555-565. DOI: 10.1016/j.rser.2013.08.013.
