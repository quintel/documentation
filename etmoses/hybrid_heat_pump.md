# Hybrid heat pumps

## Modeling

Hybrid heat pumps consist of two distinct technologies which both produce hot water

* A heat pump which consumes electricity
* A boiler which consumes gas

### Space heating versus domestic hot water production

In the Energy transition model (ETM), the hybrid heat pump is split up into its two main functions: space heating and making domestic hot water. The main reason for this is that the same technology often performs very differently when heating a home then it does when producing hot water for showering (e.g, different coefficient of performance (COP) and full load hours). So, the ETM has two versions of each technology that can perform both tasks.

For consistency, ETMoses also treats the production of domestic hot water and space heating as two separate processes. This is modeled as follows.


### Buffers

Each household generally has **two** buffers that contain heat: one for space heating and one for domestic hot water consumption. 
The buffers are linked to a profile which describes how much energy is extracted from the buffer in every time step. One or more technologies can be attached to a buffer to fulfil its demand.

The buffers are characterized by the following specifications:

| Buffer | Max temp. | lower thermostat temp |Profiles | Allowed technologies |
|---|---|---|---|---|
|Space heating|60|30|heating demand|space heating technologies|
|Domestic hot water|90|35|hot water demand|hot water technologies|

See the specification document about buffers for more detail.

### Coefficient of Performance

In real life, the COP of the heat pump part of a HHP depends both on the temperature of the source (outside) and the temperature of the water which is produced. For reasons of transparancy and simplicity we model the HHP with fixed COP. We assume that the heat pump adds a constant amount of heat per unit time to its heat buffer. We choose the COP to represent its use when producing heat at temperatures relevant for space heating and hot water use respectively. 

The numbers are taken from the 'gelijkwaardigheidsverklaring' by TNO for the Elga HHP produced by Techneco:

| Use | Output temp |COP | % of energy from heat pump part |
|---|---|---|---|
|Space heating|45|4.615|80|
|Domestic hot water|60|4.137|77|

The last column describes the year-round percentage of the heat (volume) produced by the heat pump part of the HHP. In the ETM, this percentage is card-coded in the bahviour of the HHP. In ETMoses, however, this simplification is not satisfactory for several reasons mentioned below.

## Behaviour

Because the hybrid heat pump consists of two technologies, we must specify which technologies provides which part of the demand at each time of the year.

### Basic behaviour

In real life, the HHP works roughly like this: the heat pump part does as much as the work as possible because it is the most efficient technology under most circumstances. The following reasons will make the boiler part take over from the heat pump:

* The capacity (kW) of the heat pump is insufficient to satisfy the demand. This could happen if someone would try to heat his house to very high temperature very fast. First the buffer gets depleted and after that the heat pump is not powerful enough to heat the water to the desired temperature fast enough. The boiler kicks in to save the day.
* The temperature of the demanded water is higher than what the heat pump can efficiently make. The COP of heat pumps will go down if the temperature of the requested water is above roughly 45 degrees. What happens in this case is that the heat pump will provide water of 45 degrees and the boiler will heat it to 60 degrees, ready for showering etc. NOTE: this extra heating happens not in the buffer itself but between the buffer and the shower!
* The outdoor temperature is too low for the heat pump to work efficiently. As mentioned in the text above, the COP of the heat pump will dramatically decrease when the source temperature is too low. Although we do not model the COP as being dynamic, we will add a strategy to make the HHP switch to gas-boiler when the outside temperature is below a certain threshold value (see next section).

#### Complication

**NOTE**: *Currently, ETMoses only keeps track of the energy content of buffers and has no notion of temperature of the water in those buffers. Moreover, technologies simply add energy to buffers and have no notion of temperature either.* 

See [etmoses/issues/606](https://github.com/quintel/etmoses/issues/606).

#### Solution

It seems necessary to give heating technologies, buffers and demand profiles a temperature property (see spcification of buffers document and discussion in See [etmoses/issues/606](https://github.com/quintel/etmoses/issues/606).)

### Strategies

The hybrid heat pump (both of them) are subject to several strategies:

* The boiler takes over if the network (one or multiple parent nodes) is congested
* The boiler takes over if the source-temperature (outside) is lower than a certain threshold value at which the COP of the heat pump would become too low. 


## Sources

Currently, specifications for the hybrid heat pump are taken from:'gelijkwaardigheidsverklaring' by TNO for the Elga HHP produced by Techneco.
