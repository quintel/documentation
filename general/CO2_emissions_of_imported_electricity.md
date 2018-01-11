# **CO<sub>2</sub> emissions of imported electricity**

## **Introduction**
When a country or region has a (temporal) higher electricity demand than production electricity needs to be imported from neighbouring countries or regions. 

In many cases the imported electricity also causes CO<sub>2</sub> emissions due to production, transportation, and other life cycle relate emissions. 


## **Default settings**

The default setting for imported electricity is the Dutch electricity mix: 527 gCO<sub>2</sub>/kWh or 146,39 gCO<sub>2</sub>/MJ (<a href="#ref">CBS, 2015</a>). The CBS (National statistical office) has chosen the 'integral method' to calculate the CO2 emissions of the electricity mix. 

The reason to choose the Dutch average is that most datasets of the ETM are regional datasets of the Netherlands. These regions do import mostly electricity from the Dutch grid, which mostly exists of the Dutch electricy mix. In the ETM the user can overwrite this default setting, both for the present and the future situation.

## **Table with optional values**

We offer you two tables to support your choice. Table 1 shows country specific values, and Table 2 shows carrier-technology specific values. 

**Country specific values**
The European Environment Agency offers an overview of all European Union countries and their gCO<sub>2</sub> emission per kWh. On their website you can select a specific country and you can select the average of all the 28 European Union member states in from 1990 til 2014 (<a href="#ref">EEA, 2017</a>). Table 1 shows an overwiew of 2014 data.


Member State		| gCO<sub>2</sub> emissions / kWh
------------- | -------------
European Union (28 countries)| 275.9 
Austria			| 60.1
Belgium			| 211.5
Bulgaria			| 370.1
Croatia			| 136.7
Cyprus				| 683.6
Czech Republic	| 375.8
Denmark			| 	166.6
Estonia			| 762.2
Finland			| 106.4
France				| 34.8
Germany			| 	424.9
Greece				| 829.9
Hungary			| 206.6
Ireland			| 455.6
Italy				| 229.2
Latvia				| 95.4
Liechtenstein		| 	None
Lithuania			| 102.7
Luxembourg		| 268.2
Malta				| 715.3
Netherlands		| 451.4
Poland				| 670.6
Portugal			| 359.5
Romania			| 208.5
Slovakia			| 89
Slovenia			| 178.3
Spain				| 304
Sweden				| 10.5
United Kingdom	| 388.8


Table 1: Table with optional 2014-values by country, from: (<a href="#ref">EEA, 2017</a>)


**Carrier-technology specific values**
<p>
Table 2 shows the CO2 emissions of some carrier-technology combinations.
  
![](../images/20180111_carrier-technology_co2_emissions.png)

<p>
  
Table 2: with carrier-technology dependent CO<sub>2</sub> emissions / kWh, from: (<a href="#ref">Turkoni et al., 2013</a>). Note: this is data from a Life Cycle Assessment and has a larger scope than the emissions at the production plant only. 

<a name="ref"></a>

**References**
----------
- EEA, 2017: https://www.eea.europa.eu/data-and-maps/daviz/co2-emission-intensity-3#tab-googlechartid_chart_11_filters=%7B%22rowFilters%22%3A%7B%7D%3B%22columnFilters%22%3A%7B%22pre_config_ugeo%22%3A%5B%22European%20Union%20(28%20countries)%22%5D%7D%7D 

- CBS, 2015: https://www.cbs.nl/nl-nl/achtergrond/2017/06/rendementen-en-co2-emissie-elektriciteitsproductie-2015

- Turconi et al., 2013: Life cycle assessment (LCA) of electricity generation
technologies: Overview, comparability and limitations. Renewable and Sustainable Energy Reviews, 28, 555-565. DOI: 10.1016/j.rser.2013.08.013 , see: https://refman.energytransitionmodel.com/publications/2078 
