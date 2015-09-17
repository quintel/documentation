# Profiles used for network calculation

ETMoses relies on the use of time profiles to describe both the load that technologies exert on the network as well as the financial properties of the network over time. Profiles are currently provided with a time resolution of 15 minutes, but the calculation is versatile enough to deal with different time resolutions.

The profiles heavily determine how meaningful the results from ETMoses are. Users can upload and use their own profiles. In addition, Quintel has researched and modeled various profiles that are available to all users. In the sections below, the sources and modeling approach behind these profiles are described. The section below follow the same structure as the list of all available profiles that can be found on the [ETMoses website](http://beta.moses.et-model.com/load_profiles).

## Load Profiles

### Technology profiles

#### Base load

Within ETMoses, base load profiles are used to describe the load exerted to the network by all technologies within a household or building other than heat pumps or electric vehicles for which we use separate profiles. We distinguish two types of base load: inflexible and flexible. As the name suggests, the inflexible part cannot be moved in time or changed at all, because the technologies or appliances that cause this load (e.g. electric heaters and kitchen tools) need to be switched on at that time. The flexible profile contains the loads caused by washing machines, dish washers and dryers. The flexible load can be postponed by at most 3 hours (in the case of individual load profiles) or decreased to 0 (in the case of aggregated load profiles).

##### Individual

###### households

The individual load profiles for households have been based on measured smart meter data that is downloaded from the [Liander website](https://www.liander.nl/over-liander/innovatie/open-data/data) (under `Slimme meter -> Levering).

The smart meter load profiles are processed in order to obtain an inflexible and flexible profile. The script that is used for this processing is available on [GitHub](https://github.com/quintel/etmoses/blob/master/scripts/base_load/anonimous_smart_meter_profiles.py).

###### buildings

No profiles have been researched or generated for individual buildings yet.

##### Aggregated

###### households
We use Energie Data Services Nederland (EDSN) profiles of type E1x and E2x as aggregated households load profiles. The profiles have been downloaded from the [NEDU website](http://nedu.nl/portfolio/verbruiksprofielen/). We use 2013 profiles.

###### buildings
We use Energie Data Services Nederland (EDSN) profiles of type E3x and E4x as aggregated buildings load profiles. The profiles have been downloaded from the [NEDU website](http://nedu.nl/portfolio/verbruiksprofielen/). We use 2013 profiles.

#### Electric vehicles

As we could not find any reliable, measured load profiles for electric vehicles (EV), we generated several load profiles ourselves. We drew inspiration from the report [Laadstrategie elektrisch wegvervoer (Movares, 2013)](https://movares.nl/project/laadstrategie-elektrisch-rijden-wegvervoer/).

Instead of load profiles which describe the load exerted on the network by EV, we generate so called 'availability profiles'. These profiles describe the minimum charge that needs to be present in the battery of the EV as well as when the EV is connected to a power outlet for (dis)charging. This information is used to determine when the EV needs to start charging as well as if the battery in the EV can be used to store excess electricity produced by solar PV or to discharge when electricity is required locally, e.g. in the house that the EV is connected to.

We generated 11 different EV availability profiles for 11 different drivers. We assume that each driver uses his car to commute to work on workdays and to go to other activities on both 
weekend days. The commute to work follows the same pattern every workday (i.e. the same departure and arrival times and distance travelled). In order to avoid the charging to start on exactly the same time every workday, we add a random time to the departure and arrival times in the interval [-30, 30] minutes. We do the same for weekend days. For weekend days we pick a random trip from a list of 14 'other' activities. Both the work and othe data come from table D.1 in the [PhD thesis of Remco Verzijlbergh (2013)](http://repository.tudelft.nl/view/ir/uuid%3A47c8faa7-94de-40fe-8be7-fccec6ee07bb/). Finally we take into account (public) 
holidays and sick leave by assuming that the EV stays at home for about 18% of the work days, selected randomly.

The script assumes a charging power of 3.7 kW. Depending on the required charge the script works out when charging needs to start in order to fulfill future demand.

The availability profiles are used to determine the absolute minimum charge that needs to be present in the car battery to have enough "fuel" to run the next trip. The remaining battery volume could be used to store electricity (and use it later). From the required charge for the next trip and the charging rate, we calculate when the car has to start charging.

The availability is expressed as a percentage of the battery volume (i.e. 25 kWh).

#### Heat pumps

##### Hot water

As we could not find any reliable, measured load profiles for heat pumps, we generated several load profiles ourselves.

In ETMoses, heat pumps for how water are considered to always have a buffer tank. The heat pump is used to store energy in the tank by heating up the water in it. Hot water consumption extracts energy (i.e. heat) from the tank.

Like with EV, the profiles for heat pumps are used to describe more than just the instantaneous load exerted on the network by heat pumps. In fact heat pumps are described by two profiles: a use profile describing the instanteneous hot water demand (expressed as a fraction of the maximum amount of energy that can be stored in the tank) and an availability profile describing how much energy needs to be stored in the tank to fulfill future demand. If the tank does not contain enough energy to meet the demand, we assume that a (non-electric) back-up burner will meet the remaining demand.

We generate typical domestic hot water (DHW) profiles for a period of one year and time steps of 15 minutes. The script is based in great part on Realistic Domestic Hot-Water Profiles in Different Time Scales, Jordan (2001)](http://sel.me.wisc.edu/trnsys/trnlib/iea-shc-task26/iea-shc-task26-load-profiles-description-jordan.pdf). This study assumes a daily average DHW use of 200 liters and distinguishes four types of DHW consumption, each with an associated volume and average daily occurence:

- type A: short load (1 liter per event, 28 occurences per day)
- type B: medium load (6 liter per event, 12 occurences per day)
- type C: bath (140 liter per event, 0.143 occurences per day (once a week))
- type D: shower (40 liter per event, 2 occurences per day)

According to Jordan (2001), the duration of each of these types is shorter than 15 minutes (i.e. the time resolution of our simulation). Hence we decided to only model the probability that an event occurs within each 15 minute time step and assign the entire volume of that event to that 15 minute bin. The probability of each type of event varies throughout the year (i.e. slightly more DHW consumption in winter), throughout the week (more in the
weekend) and throughout the day (e.g. no DHW consumption during the night). We calculate the overall probability that events of all four types occur at a specific 15 minutes time window. From these probability functions we generate random DHW patterns.

The script returns two types of profiles:

- use profiles: randomly generated profiles with a time resolution of 15. To match the needs of ETMoses these exported profiles are scaled to the maximal storage volume of the boiler used in ETM for P2H
- availability profiles: the profiles indicate how full the boiler has to be in order to meet future demands. The profiles are derived from the use profile by and are also expressed as a fraction of the maximal storage volume

##### Space heating

As we could not find any reliable, measured load profiles for heat pumps, we generated several load profiles ourselves. This script generates load profiles for heat pumps based on the outdoor temperature profile measured in De Bilt and downloaded from the [KNMI website](http://www.knmi.nl/nederland-nu/klimatologie/uurgegevens), the solar irradiance in Maastricht, also downloaded from the [SoDa website](http://www.soda-is.com/eng/services/services_radiation_free_eng.php) and some simple characteristics of the house like thermostat temperature, surface areas and insulation values. The temperature and solar data for 2013 have been used.

#### Solar PV

The solar PV load profiles have been downloaded from the [SoDa website](http://www.soda-is.com/eng/services/services_radiation_free_eng.php) for the year 2013. To match the needs of ETMoses these profiles have been scaled such that their peak load is equal to 1.

#### Deprecated

No description available.

#### Miscellaneous

No description available.

#### Power-to-heat

Power-to-heat is implemented in ETMoses as a small electric boiler (~100 liter) before an existing condensing combi boiler. The water in the electric boiler can be heated with excess (or cheap) electricity, effectively preheating the water that goes into the combi boiler and leaving less heating to be done for the combi boiler. This reduces the gas consumption.

In order to describe how much energy is drawn from the boiler, ETMoses contains use profiles. These profiles have been constructed in the same way as the use profiles for heat pumps for hot water (see detailed description above).


## Financial profiles

#### Financial Profiles

No description available.