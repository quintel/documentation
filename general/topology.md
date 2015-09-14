# Network calculations for testing grounds

The [testing ground functionality](testing_ground.md) alows the user to scale down a national ETM scenario to the size of a typical pilot project. This scaled scenario can be imported in the testing ground environment of the ETM. In this section we describe new functionality that let's you

* specify the network topology on local testing ground level
* choose the capacities of network components
* attach producing and consuming technologies to the network
* calculate load/used capacity for the components of the network

## Specifying the network topology

On the level of a typical testing ground, the network consists of one or several medium-voltage (MV) nets which support several low-voltage (LV) nets (see Figure 1 below for an example of a network topology).

![image](https://raw.githubusercontent.com/quintel/documentation/master/images/network.png "Example of a network")

The high-voltage (HV) net is assumed to lie outside of the testing ground and serves as a source/sink for demand/supply of electricity for the testing ground as a whole.

### The network topology interface

For applications in local testing grounds, the MV- and LV networks are most relevant. The HV network is included in the local testing ground only as a connection for the MV network(s) and cannot be further configured. The topology of the local network can be specified by editing a simple nested textfile (YML format). Within this framework it is possible to define:

* the number of MV networks in the testing ground
* the number of LV networks connected to the MV networks
* The number of direct connections to the MV net (for wind-turbines or larger CHP)

For details on the syntax of the topology file please consult the [topology syntax page](https://github.com/quintel/documentation#topology_syntax).

An example of a simple network in YML format is given below:

```
---
name: "High Voltage #1"
children:
  - name: "Medium Voltage #1"
    children:
      - name: "MV connection #1"
      - name: "Low Voltage #1"
      - name: "Low Voltage #2"
  - name: "Medium Voltage #2"
    children:
      - name: "Low Voltage #3"
      - name: "Low Voltage #4"
      - name: "Low Voltage #5"
```
The above YML file can be translated into a visual network as seen below:

![image](https://raw.githubusercontent.com/quintel/documentation/master/images/20150409_topology.png)

## Specifying properties of network components

The capacities (and possibly other properties) of transformers between MV and LV networks can be specified by changing their attributes in the network YML:

```
---
name: "High Voltage #1"
children:
  - name: "Medium Voltage #1"
    children:
      - name: "MV connection #1"
      - name: "Low Voltage #1"
      - name: "Low Voltage #2"
  - name: "Medium Voltage #2"
    children:
      - name: "Low Voltage #3"
        capacity: 0.15              <========== SPECIFIES THE CAPACITY ==========<<<
      - name: "Low Voltage #4"
      - name: "Low Voltage #5"

```
### Units
The convention for units is as follows:

* capacity: **kW**
* demand: **kWh**
* investment_costs: **EUR**

## Connecting technologies to the network

After the characteristics of the network have been specified, you can connect the various technologies in the testing ground to the network by editing the **technology matrix**. This matrix lists all technologies in rows and their technical properties and connections to the network in columns:

|technology|connection|capacity [kW]|demand [kWh]|investment [EUR]|load profile|type|...|
|---|---|---|---|---|---|---|---|---|
|heat pump 1| Low Voltage #1  |2.5| |1500| heat_pump_profile_1  | households_space_heater_heatpump_air_water_electricity | |
|base load 1| Low Voltage #2  | |2500.0 |3000|   |base_load| |
|solar panel 1| Low Voltage #2 | -1.5| |2500| solar_pv_profile_2  |households_solar_pv_solar_radiation | |
|...   |   |   |   |  | |

The columns of the technology matrix have the following meaning:

* technology: the name of a technology (or base-load) as it will appear on screen
* connection: the end-point of the network that the technology or base-load is connected to
* capacity: the capacity of the technology. This is used to scale the **load profiles for technologies**. NOTE: for producing technologies, the capacity must be negative
* demand: the yearly demand of the household. This is used to scale the **base-load profiles**
* investment: the investment costs in euros
* load profile: the 'key' of the load (or base-load) profile. Every profile is uniquely identified by its key which can be specified when creating the profile (see below)
* type: the technology in the ETM that a technology corresponds with. This is used to automatically assign the correct load profile from the load-profile library (see below). The base-load profiles use the special key 'base_load'

Note that the technical properties of the technologies are given by the ETM. Admin users can change technical properties but this may result in local scenario's that cannot be translated back to the national ETM.

## Load profiles

Load profiles are used to describe the base-load of households and the behavior of technologies which are modelled explicitly in the testing ground (and are therefore not included in the base-load). These technologies are:

* Solar panels
* Heat pumps
* Electric vehicles

The load profiles for these technologies can be [inspected and downloaded online](http://ivy.et-engine.com/load_profiles). 
These profiles typically contain hourly values for the whole year. If no load profile has been specified, the capacity of a technology will be used to initialize the load.

To associate a load profile with a technology in the technology matrix, three requirements need to be met

* A **capacity** has to be defined. To scale the amplitude of the load profiles, the capacity of the technology in kW is used. Note that for producing technologies (e.g., solar panels) the capacity needs to be provided as a negative number.
* The **key** of the load profile needs to be given. The key is defined when a load profile is first uploaded and is a unique identifier. You can find the key on the info page of a load profile [(see for example the solar profile for Amsterdam)](http://ivy.et-engine.com/load_profiles/225): 
![image](https://raw.githubusercontent.com/quintel/documentation/master/images/load_profile_key.png)
* The **type** of the technology should correspond with the allowed technologies for the selected load profile. This is to prevent errors and to allow for the automatic association of profiles with technologies.

## Calculating load

Now that you have connected all producing and consuming technologies to the network, the load on the network components can be calculated. 

The resulting load-curves for each network component can be inspected by selecting the component in the network with a single mouse-click.

![image](https://raw.githubusercontent.com/quintel/documentation/master/images/20150410_load_chart.png)

Using the bottom panel of the chart, a specific time-window can be selected for closer inspection of the load.

If a capacity has been specified for a component of the network and if the load exceeds that capacity for at least one time-step in the calculation, the component is colored red. The capacity is also shown in the load chart.

![image](https://raw.githubusercontent.com/quintel/documentation/master/images/20150410_load_chart_capacity.png)
