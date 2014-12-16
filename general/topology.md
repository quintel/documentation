# Network calculations for testing grounds

The recently added [testing ground functionality](testing_ground.md) alows the user to scale down a national ETM scenario to the size of a typical pilot project. In this section we describe new functionality that let's you

* specify the network topology on local testing ground level
* choose the capacities of network components
* attach producing and consuming technologies to the network
* calculate load/used capacity for the components of the network

## Specifying the network topology

On the level of a typical testing ground, the network consists of one or several medium-voltage (MV) nets which support several low-voltage (LV) nets (see Figure 1 below for an example of a network topology).

![image](https://raw.githubusercontent.com/quintel/documentation/master/images/network.png "The network topology interface")

The high-voltage (HV) net is assumed to lie outside of the testing ground and serves as a source/sink for demand/supply of electricity for the testing ground as a whole.

### The network topology interface

For applications in local testing grounds, the MV- and LV networks are most relevant. The HV network is included in the local testing ground only as a connection for the MV network(s) and cannot be further configured. The topology of the local network can be specified by editing a simple nested textfile (YML format). Within this framework it is possible to define:

* the number of MV networks in the testing ground
* the number of LV networks connected to the MV networks
* The number of direct connections to the MV net (for wind-turbines or larger CHP)

An example of a simple network in YML format is given below:

```
---
- name: "High Voltage #1"
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

![image](https://raw.githubusercontent.com/quintel/documentation/master/images/basic_topology.png)

## Specifying the network components

The capacities (and possibly other properties) of transformers between MV and LV networks can be specified by double clicking them and changing their attributes.

**WE ARE STILL DECIDING HOW THIS WILL WORK**

## Connecting technologies to the network

After the characteristics of the network have been specified, you can connect the various technologies in the testing ground to the network by editing the **connection matrix**. This matrix lists all technologies in rows and their technical properties and connections to the network in columns:

|technology|capacity|efficiency|connection|...|
|---|---|---|---|---|
|heat pump 1| 2.5 kW| 4.0  | Low Voltage #1  |   |
|heat pump 2| 3.0 kW| 4.5  | Low Voltage #2  |   |
|solar panel 1| 1.5 kWp| 1.0 | Low Voltage #2  |   |
|...   |   |   |   |   |

Note that the technical properties of the technologies are given by the ETM. Admin users can change technical properties but this may result in local scenario's that cannot be translated back to the national ETM.

## Calculating load

Now that you have connected all producing and consuming technologies to the network, the load on the network components can be calculated. The ETM provides two options:

* Use **four predifined moments** (winter day, winter evening, summer day, summer evening) for which the typical peak demand/production for the available technologies has been determined.
* Use **time-series with arbitrary time-resolution** to describe demand/production for the available technologies. These profiles typically contain hourly values for the whole year.

## Results

After the load calculation finishes, the maximum load on the components of the network can be inspected.
