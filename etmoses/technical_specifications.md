# Technical specifications

In order to calculate the impact of several technologies with high electricity demand, these technologies are described by [profiles](profiles.md) as well as technological specifications. The latter are subject of this document.

## P2P battery

Experts that 10 kWh systems ar currently the norm. One commercial-off the-shelf system is provided [here](http://www.wholesalesolar.com/backup/4400-watt-home-battery-backup-system.html). This sytem includes all necessary accessories and is basically plug-and-play.

From the documentation, we derived the following specifications that are relevant to describe a P2P battery system in ETMoses:

- storage_volume = 9.6 kWh
- input_capacity = 1.26 kW (i.e. for charging)
- output_capacity = 4.4 kW (i.e. for discharging)
- initial_investment = 6000 EUR (i.e. the equivalent of USD 6,790.00)
- standby_loss = 0.4 W (from [the specs of the batteries](http://pdf.wholesalesolar.com/battery-folder/UPG/ubgc2.pdf?_ga=1.232326173.34896705.1429799368): the batteries loose 9% of their charge per 3 months (and 18 % per 6 months and 36 % per year, so linear), i.e. a standby loss of 0.4 W
- charging_efficiency = 0.85
- discharging_efficiency = 0.89
- cycles = 500 (i.e. the number of cycles before it has to be replaced, this is highly dependent on the depth of discharge, 500 seems to be a good average judging from [the spec sheet](http://pdf.wholesalesolar.com/battery-folder/UPG/ubgc2.pdf?_ga=1.232326173.34896705.1429799368).)

## Electric vehicles

We decided to use the same parameters for the battery in the EV as for the P2P battery. In addition, we took some values from the EV documentation in the Energy Transition Model (see [the EV node source analysis](https://github.com/quintel/etdataset/blob/master/nodes_source_analyses/transport/transport_car_using_electricity.converter.xlsx)).

- storage_volume = 25 kWh (appears to be an average size EV battery)
- input_capacity = 3.7 kW (i.e. for charging, 230 V * 16 A)
- output_capacity = 3.7 kW (i.e. for discharging)
- initial_investment = 0 EUR (you bought the EV for a different reason)
- standby_loss = 0.4 W
- charging_efficiency = 0.85 (this is rather low compared to Tesla's promise of 92% round trip efficiency)
- discharging_efficiency = 0.89
- cycles = 500

## Heat pumps

The specifications of heat pumps have been researched extensively in the context of the Energy Transition Model. In ETMoses we use the same specifications. Below are the links to the sources of the heat pumps.

- [Heat pump for space heating (air)](https://github.com/quintel/etdataset/blob/master/nodes_source_analyses/households/households_space_heater_heatpump_air_water_electricity.converter.xlsx)
- [Heat pump for space heating (ground)](https://github.com/quintel/etdataset/blob/master/nodes_source_analyses/households/households_space_heater_heatpump_ground_water_electricity.converter.xlsx)
- [Heat pump for hot water (air)](https://github.com/quintel/etdataset/blob/master/nodes_source_analyses/households/households_water_heater_heatpump_air_water_electricity.converter.xlsx)
- [Heat pump for hot water (ground)](https://github.com/quintel/etdataset/blob/master/nodes_source_analyses/households/households_water_heater_heatpump_ground_water_electricity.converter.xlsx)


## P2H

The most feasible way to implement P2H for hot water is to add a small electric boiler (~100 liter) before an existing condensing combi boiler. The water in the electric boiler can be heated with excess (or cheap) electricity, effectively preheating the water that goes into the combi boiler and leaving less heating to be done for the combi boiler. This reduces the gas consumption.

We searched the web for electric boilers and found [this one](http://www.elektrischeboiler.eu/lemet-elektrische-boiler/Elektrische-boiler-100-Liter-Horizontaal-Lemet-Greenline) to be quite representative.

In addition to the electric boiler, you also need some control electronics to drive it. These electronics cost around EUR 50,-

The most important parameters for our implementation of P2H in the ETM are:

- input_capacity = 2 kW
- storage_volume = 9.3 kWh (heating 100 liters of water from 15 to 95 degrees celsius)
- output.useable_heat = 0.95
- initial_investment = 260 EUR (EUR 210,- for the boiler and EUR 50,- for the electronics)
- technical_lifetime = 15 years (taken from [the electric water heater node](https://github.com/quintel/etsource/blob/master/nodes/households/households_water_heater_resistive_electricity.converter.ad))
- standby_loss = 40 W` (taken from http://www.warmtepomp-info.nl/gerelateerd/tapwaterkosten/, validated on other sources)

## P2G

Most of the P2G specificantions are based on two good overview studies ([DNV KEMA (2013)](http://www.dnv.com/binaries/dnv%20kema%20%282013%29%20-%20systems%20analyses%20power%20to%20gas%20-%20technology%20review_tcm4-567461.pdf) and [Smolenka (2011)](http://www.now-gmbh.de/fileadmin/user_upload/RE_Publikationen_NEU_2013/Publikationen_NIP/NOW-Studie-Wasserelektrolyse-2011.pdf))

P2G systems come in many different sizes, each having their own specific application. For now, we decided to implement only one size of system. The first decision to make is if we are adding a methanisation step. This only makes sense if there is a source of CO<sub>2</sub> available which in the Netherlands is only the case in industrial areas (e.g. the Maasvlakte and the Eemshaven). For the testing grounds such source might not be available and @ChaelKruip and I decided not to add the methanisation step.

Next, two technologies are commercially available: alkaline electrolysis and Proton Exchange Membrane (PEM) electrolysis. By comparing paragraph 2.2.2 and 2.3.3 of Smolinka (2011), I concluded that PEM systems are more suitable for our application (i.e. converting excess electricity from RES-E peaks into gas) as PEM systems can deal with loads between 0 - 100 % of their peak load, while alkaline systems are limited to 40 - 100 % of their peak load.

Finally we found the [Siemens Silyzer 100](http://www.industry.siemens.com/topics/global/en/pem-electrolyzer/silyzer/silyzer-systems/Pages/silyzer-systeme1105-9496.aspx), a commercially available system that is capable of producing up to 4 kg of H<sub>2</sub> per hour (i.e. 45 Nm<sup>3</sup> / hour). This system is quite close to Scenario A in Table 5-3 from Smolinka (2011) and I think this is good source for the attributes of the P2G technology in the ETM. I will verify these numbers with Siemens.

- input_capacity = 135 kW (calculated as 30 Nm<sup>3</sup> * 4.5 kWh / Nm<sup>3</sup>)
- conversion_efficiency = 4.5 kWh / Nm<sup>3</sup>)
- calorific_value_hydrogen = 3.54 kWh / Nm<sup>3</sup> (HHV)
- initial_investment = 323180 EUR (Table 5-3 and input_capacity)
- cost_of_installing = 32318 EUR (Table 5-3)
- technical_lifetime = 15 years (from Table 5-2, 10-20 years)
- availability = 0.91 (from DNV KEMA (2013)

(All tables mentioned are from Smolinka (2011).)

The conversion_efficiency of the system changes significantly with the produced H<sub>2</sub> volume (~ 30 %, see Figure 2-4 (Smolinka (2011)). We could consider implementing this relation int the ETM.

The 'cold start' time for such a PEM P2G system is less than 10 minutes. Since this is shorter than the time resolution of the testing grounds calculations, I would suggest to keep the conversion efficiency independent of the time that the P2G system runs.