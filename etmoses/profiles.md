# Profiles used for network calculation

ETMoses relies on the use of time profiles to describe both the load that technologies exert on the network as well as the financial properties of the network over time. Profiles are currently provided with a time resolution of 15 minutes, but the calculation is versatile enough to deal with different time resolutions.

The profiles heavily determine how meaningful the results from ETMoses are. Users can upload and use their own profiles. In addition, Quintel has researched and modeled various profiles that are available to all users. In the sections below, the sources and modeling approach behind these profiles are described. The section below follow the same structure as the list of all available profiles that can be found on the [ETMoses website](http://beta.moses.et-model.com/load_profiles).

## Load Profiles

### Technology profiles

#### Base load

Within ETMoses, base load profiles are used to describe the load exerted to the network by all technologies within a household or building other than heat pumps or electric vehicles for which we use separate profiles. We distinguish two types of base load: inflexible and flexible. As the name suggests, the inflexible part cannot be moved in time or changed at all, because the technologies or appliances that cause this load (e.g. electric heaters and kitchen tools) need to be switched on at that time. The flexible profile contains the loads caused by washing machines, dish washers and dryers. The flexible load can be postponed by at most `3` hours (in the case of individual load profiles) or decreased to `0` (in the case of aggregated load profiles).

##### Individual

###### households

The individual load profiles for households have been based on measured smart meter data that is downloaded from the [Liander website](https://www.liander.nl/over-liander/innovatie/open-data/data) (under `Slimme meter -> Levering).

These load profiles are processed in order to obtain a inflexible and flexible profile. 


###### buildings

No profiles have been researched or generated for individual buildings yet.

##### Aggregated

###### households
Base-load profile EDSN type E1A 26 Mar 16:50

###### buildings
Base-load profile EDSN type E3A 26 Mar 16:51

#### Electric vehicles


This script generates 33 different EV availability profiles for 11 different 
drivers and 3 different charging powers. We assume that each driver uses his 
car to commute to work on workdays and to go to other activities on both 
weekend days. The commute to work follows the same pattern every workday
(i.e. the same departure and arrival times and distance travelled). In order 
to avoid the charging to start on exactly the same time every workday, we add
a random time to the departure and arrival times in the interval [-30, 30]
minutes. We do the same for weekend days. For weekend days we pick a random
trip from the other data. Both the work and othe data come from table D.1 in
the thesis of Remco Verzijlbergh. Finally we take into account (public) 
holidays and sick leave by assuming that the EV stays at home for about 18% 
of the work days, selected randomly.

The availability profiles are used to determine the absolute minimum charge
that needs to be present in the car battery to have enough "fuel" to run the
next trip. The remaining battery volume could be used to store electricity 
(and use it later). From the required charge for the next trip and the 
charging rate, we calculate when the car has to start charging.

The availability is expressed as a percentage of the battery volume.

#### Heat pumps

##### Hot water
This script can be used to generate typical domestic hot water (DHW) profiles
for a period of one year and time steps of 15 minutes. The script is based in
great part on Realistic Domestic Hot-Water Profiles in Different Time Scales,
Jordan (2001). This study assumes a daily average DHW use of 200 liters and
distinguishes four types of DHW consumption, each with an associated volume
and average daily occurence:

- type A: short load (1 liter per event, 28 occurences per day)
- type B: medium load (6 liter per event, 12 occurences per day)
- type C: bath (140 liter per event, 0.143 occurences per day (once a week))
- type D: shower (40 liter per event, 2 occurences per day)

According to Jordan (2001), the duration of each of these types is shorter 
than 15 minutes (i.e. the time resolution of our simulation). Hence we 
decided to only model the probability that an event occurs within each 15 
minute time step and assign the entire volume of that event to that 15 minute
bin. The probability of each type of event varies throughout the year (i.e.
slightly more DHW consumption in winter), throughout the week (more in the
weekend) and throughout the day (no DHW consumption during the night).

The script returns two types of profiles:
- use profiles: randomly generated profiles with a time resolution of 15. To 
 match the needs of ETMoses these exported profiles are scaled to the maximal
 storage volume of the boiler used in ETM for P2H
- availability profiles: the profiles indicate how full the boiler has to be
 in order to meet future demands. The profiles are derived from the use
 profile by and are also expressed as a fraction of the maximal storage volume

##### Space heating
This script generates load profiles for heat pumps based on a temperature profile and some simple characteristics of the house.

#### Solar PV

Solar PV - Arnhem 26 Mar 13:16

#### Deprecated

#### Miscellaneous



## Financial profiles

#### Financial Profiles
day and night tariff 15 Jul 14:17