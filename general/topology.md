# Network calculations for testing grounds

The recently added [testing ground functionality](testing_ground.md) alows the user to scale down a national ETM scenario to the size of a typical pilot project. In this section we describe new functionality that let's you

* specify the network topology on local testing ground level
* choose the capacities of network components
* attach producing and consuming technologies to the network
* calculate load/used capacity for the components of the network

## Specifying the network topology

On the level of a typical testing ground, the network consists of one or several medium-voltage (MV) nets which support several low-voltage (LV) nets (see Figure 1 below for an example of a network topology).

￼![image](../images/network.png =650x "Example of a network topology")

The high-voltage (HV) net is assumed to lie outside of the testing ground and serves as a source/sink for demand/supply of electricity for the testing ground as a whole.

### The network topology interface

For applications in local testing grounds, the MV- and LV networks are most relevant. The HV network is included in the national scenario but left out of the **network topology interface** for the local testing ground. With this interface you can choose

* the number of MV networks in the testing ground
* the number of LV networks connected to the MV networks
* The number of direct connections to the MV net (for wind-turbines or larger CHP)

￼![image](../images/20141209_topology_interface_v1.png =650x "The network topology interface")


## Specifying the network components

The capacities (and possibly other properties) of transformers between MV and LV networks can be specified by double clicking them and changing their attributes.

**WE ARE STILL DECIDING HOW THIS WILL WORK**

## Connecting technologies to the network

After the characteristics of the network have been specified, you can connect the various technologies in the testing ground to the network. 

Until a graphical user interface (GUI) has been developed, this will happen by editing the **connection matrix** which lists all technologies on the vertical axis and all connections on the horizontal axis:

|technology|connection 1|connection 2|connection 3|...|
|---|---|---|---|---|
|heat pump 1| 2.5 kW|   |   |   |
|heat pump 2|   | 3.0 kW  |   |   |
|solar panel 1|   | 1.5 kWp  |   |   |
|...   |   |   |   |   |

Note that the entries in the matrix tell the model what the capacity of the technology is.

## Calculating load

Now that you have connected all producing and consuming technologies to the network, the load on the network components can be calculated. The ETM provides two options:

* Use **four predifined moments** (winter day, winter evening, summer day, summer evening) for which the typical peak demand/production for the available technologies has been determined.
* Use **time-series with arbitrary time-resolution** to describe demand/production for the available technologies. These profiles typically contain hourly values for the whole year.

## Results

After the load calculation finishes, the maximum load on the components of the network can be inspected.