# Technical specifications

General

## Electric vehicles

I suggest to use the same parameters to describe the EV battery as for the P2P battery (see https://github.com/quintel/etdataset/issues/596)

`- storage_volume = 25 kWh` (appears to be an average size EV battery)
`- input_capacity = 3.7 kW` (i.e. for charging, 230 V * 16 A)
`- output_capacity = 3.7 kW` (i.e. for discharging)
`- initial_investment = 0 EUR` (you bought the EV for a different reason)
`- standby_loss = 0.4 W`
`- charging_efficiency = 0.85` (this is rather low compared to Tesla's promise of 92% round trip efficiency)
`- discharging_efficiency = 0.89`
`- cycles = 500`

## Heat pumps

blabla

## Battery

blabla

## P2H

While discussing with John, I realised that the most feasible way to implement P2H for hot water is to add a small electric boiler (~100 liter) before an existing condensing combi boiler. The water in the electric boiler can be heated with excess (or cheap) electricity, effectively preheating the water that goes into the combi boiler and leaving less heating to be done for the combi boiler. This reduces the gas consumption.

I have searched the web for electric boilers and found [this one](http://www.elektrischeboiler.eu/lemet-elektrische-boiler/Elektrische-boiler-100-Liter-Horizontaal-Lemet-Greenline) to be quite representative.

In addition to the electric boiler, you also need some control electronics to drive it. These electronics cost around EUR 50,-

I believe that the most important parameters for our implementation of P2H in the ETM are:

`- input_capacity = 2 kW`
`- storage_volume = 9.3 kWh` (heating 100 liters of water from 15 to 95 degrees celsius)
`- output.useable_heat = 0.95`
`- initial_investment = 260 EUR` (EUR 210,- for the boiler and EUR 50,- for the electronics)
`- technical_lifetime = 15 years` (taken from `households_water_heater_resistive_electricity.converter`)
`- standby_loss = 40 W` (taken from http://www.warmtepomp-info.nl/gerelateerd/tapwaterkosten/, validated on other sources)

## P2G

I have read a lot about P2G and spoken to Albert van der Molen (Stedin) and Jan Bozelie (Alliander) about it. I also found two good overview studies ([DNV KEMA (2013)](http://www.dnv.com/binaries/dnv%20kema%20%282013%29%20-%20systems%20analyses%20power%20to%20gas%20-%20technology%20review_tcm4-567461.pdf) and [Smolenka (2011)](http://www.now-gmbh.de/fileadmin/user_upload/RE_Publikationen_NEU_2013/Publikationen_NIP/NOW-Studie-Wasserelektrolyse-2011.pdf))

P2G systems come in many different sizes, each having their own specific application. For now, we decided to implement only one size of system. The first decision to make is if we are adding a methanisation step. This only makes sense if there is a source of CO<sub>2</sub> available which in the Netherlands is only the case in industrial areas (e.g. the Maasvlakte and the Eemshaven). For the testing grounds such source might not be available and @ChaelKruip and I decided not to add the methanisation step.

Next, two technologies are commercially available: alkaline electrolysis and Proton Exchange Membrane (PEM) electrolysis. By comparing paragraph 2.2.2 and 2.3.3 of Smolinka (2011), I concluded that PEM systems are more suitable for our application (i.e. converting excess electricity from RES-E peaks into gas) as PEM systems can deal with loads between 0 - 100 % of their peak load, while alkaline systems are limited to 40 - 100 % of their peak load.

Finally, Albert pointed us to the [Siemens Silyzer 100](http://www.industry.siemens.com/topics/global/en/pem-electrolyzer/silyzer/silyzer-systems/Pages/silyzer-systeme1105-9496.aspx), a commercially available system that is capable of producing up to 4 kg of H<sub>2</sub> per hour (i.e. 45 Nm<sup>3</sup> / hour). This system is quite close to Scenario A in Table 5-3 from Smolinka (2011) and I think this is good source for the attributes of the P2G technology in the ETM. I will verify these numbers with Siemens.

`- input_capacity = 135 kW`(calculated as 30 Nm<sup>3</sup> * 4.5 kWh / Nm<sup>3</sup>)
`- conversion_efficiency = 4.5 kWh / Nm<sup>3</sup>)`
`- calorific_value_hydrogen = 3.54 kWh / Nm<sup>3</sup> (HHV)`
`- initial_investment = 323180 EUR` (Table 5-3 and `input_capacity`)
`- cost_of_installing = 32318 EUR` (Table 5-3)
`- technical_lifetime = 15 years` (from Table 5-2, 10-20 years)
`- availability = 0.91` (from DNV KEMA (2013)

(All tables mentioned are from Smolinka (2011).)

The `conversion_efficiency` of the system changes significantly with the produced H<sub>2</sub> volume (~ 30 %, see Figure 2-4 (Smolinka (2011)). Would it be feasible to implement this (linear) relation, @ChaelKruip ?

The 'cold start' time for such a PEM P2G system is less than 10 minutes. Since this is shorter than the time resolution of the testing grounds calculations, I would suggest to keep the conversion efficiency independent of the time that the P2G system runs.

Finally for comparison, Jan told me about a 5 kW P2G (hydrogen) system that you can buy for EUR 80.000,-, which is a fair bit more expensive than the system above.

## P2P battery

I discussed battery storage with Jan Bozelie (Alliander). He suggested that 10 kWh systems ar currently the norm. I have searched the web for commercial-off the-shelf technologies and found [this one](http://www.wholesalesolar.com/backup/4400-watt-home-battery-backup-system.html). What I like about it is that it includes all necessary accessories and it's basically plug-and-play.

From reading the documentation, I think that the following attributes are relevant to describe P2P:

`- storage_volume = 9.6 kWh`
`- input_capacity = 1.26 kW` (i.e. for charging)
`- output_capacity = 4.4 kW` (i.e. for discharging)
`- initial_investment = 6000 EUR` (i.e. the equivalent of USD 6,790.00)
`- standby_loss = 0.4 W` (from [the specs of the batteries](http://pdf.wholesalesolar.com/battery-folder/UPG/ubgc2.pdf?_ga=1.232326173.34896705.1429799368): the batteries loose 9% of their charge per 3 months (and 18 % per 6 months and 36 % per year, so linear), i.e. a standby loss of 0.4 W
`- charging_efficiency = 0.85` (this is rather low compared to Tesla's promise of 92% round trip efficiency)
`- discharging_efficiency = 0.89`
`- cycles = 500` (i.e. the number of cycles before it has to be replaced, this is highly dependent on the depth of discharge, 500 seems to be a good average judging from [the spec sheet](http://pdf.wholesalesolar.com/battery-folder/UPG/ubgc2.pdf?_ga=1.232326173.34896705.1429799368).)