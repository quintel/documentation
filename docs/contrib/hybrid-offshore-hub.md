---
title: Hybrid offshore hub
---

import useBaseUrl from '@docusaurus/useBaseUrl'

Please note: General documentation concerning hybrid offshore wind parks can be found in the ['Hybrid offshore wind'](../main/hybrid-offshore-wind) documentation. This documention is focused on the technical specifications of the offshore wind park.

Hybrid offshore hubs represent an offshore renewable electricity production facility with an electrolyser next to it. It is connected to the mainland powergrid via an subnautical power cable. The electrolyser is connected to the mainland hydrogen network via a subnautical pipeline. The idea is that all electricity that can't be transported via the powercable to the mainland will be consumed by the electrolyser. Next to this, power can be transported to the offshore hub via this cable when the willingness to pay of the electrolyser is lower than the mainland electricity price. 



## Configuration of hybrid offshore hub

A hybrid offshore hub requires 6 nodes:

1. **Producer**: This represents renewable electricity production (e.g. wind turbines, solar panels, etc) which produce electricity according to a profile. At the moment, the ETM only incorporates a hybrid offshore hub based on wind production at the moment. 
2. **Electrolyser**: Based on the wtp of the electrolyser, the capacity of the cable, the capacity of the producer, and the capacity of the electrolyser, hydrogen production will take place. See the description of the offshore electrolyser below for more information.
3. **Curtailment**: Energy is diverted here when the electrolyser cannot use all the produced energy, and when demand is not high enough.
4. **Cable offshore-onshore**: The producer sends energy to the cable node so it can be delivered to the grid.
5. **Cable onshore-offshore**: In times with no electricity production by the producer, the electrolyser might still demand electricity. For this situation, a second node to represent the cable is added. 
6. **Hydrogen offshore pipeline**: Hydrogen that is produced by the electrolyser will be transported to the hydrogen network by this node. 

The edge-types of the edges between the nodes can be found in the picture underneath:
As can be seen in the legend, a 'dashed' edge has the 'reversed' attribute set to true. 

<div style={{ textAlign: "center" }}>
  <img
    alt="Park diagram showing a producer connected to a battery, output, and curtailment"
    src={useBaseUrl("/img/docs/contrib/hybrid-offshore-hub/hybrid-offshore-hub.png")}
    static
  />
</div>

The egde-types of the edges can seem counter-intuitive, for more information about edge-types please visit the ['Graph components'](graph-components) documentation.

At first glance, it seems counter intuitive that the edge between the producer & curtailment is a reversed share and not flexible. You could argue that all electricity that can't be consumed by the cable and the electrolyser must be curtailed, and that therefore one the edge to curtailment is flexible.

Moreover, it seems unusual that the edge between the producer and the cable from offshore is inversed_flexible, since you would expect that the cable would set the demand from the producer. Finally, there is the 'Constant' edge between the Producer and the Electrolyser. This edge-type is used very little in the graph.

In this edge lies the core of the edge type deviations within the offshore hub. As can be seen in the documentation concerning Graph components, a constant edge can set a specific amount of energy through the egde. The model uses this characteristic to sum up all electricity that has flown from the producer to the electrolyser. At the same time, it sets the demand of the curtailment node equal to the curtailed energy. This is why this edge is a reversed share. All energy that is left from the producer than flows to the cable, which is why this is edge is a reversed flexible. When the electrolyser node does not yet meet it's yearly demand it is given by the merit module, the node needs to fill up it's energy intake with energy from the cable node. This edge is therefore flexible.




### Producer node

The producer requires the following `merit_order` attributes:

* `group`: The name of the profile to be used to shape the hourly load from the producer.
* `level`: The level at which the technology appears in the electricity network.
* `type`: Always set to `producer`.
* `subtype`: Always set to `hybrid_offshore`.
* `relations.curtailment`: The key of the curtailment node.
* `relations.output`: The key of the output cable node.
* `relations.input`: The key of the input cable node.
* `relations.converter`: The key of the converter node.

All attributes are required.

**For example:**

```
- merit_order.group = dynamic: wind_offshore
- merit_order.level = hv
- merit_order.type = producer
- merit_order.subtype = hybrid_offshore
- merit_order.relations.curtailment = energy_power_hybrid_curtailed_electricity
- merit_order.relations.output = energy_power_hybrid_from_offshore_network_electricity
- merit_order.relations.input = energy_power_hybrid_to_offshore_network_electricity
- merit_order.relations.converter = energy_hydrogen_hybrid_electrolysis_wind_electricity
```

### Electrolyser node

The electrolyser node requires the following `merit_order` attributes:

* `level`: The level at which the technology appears in the electricity network.
* `type`: Always set to `flex`.
* `subtype`: Always set to `satisfied_demand`.
* `relations.input`: The key of the consumer node.
* `max_consumption_price`: The maximal cost per MWh electricity that the electrolyser is willing to pay.


**For example:**

```
- merit_order.level = hv
- merit_order.subtype = satisfied_demand
- merit_order.type = flex
- merit_order.relations.input = energy_power_hybrid_wind_turbine_offshore
- max_consumption_price = 30.0
```

In addition, `hydrogen` attributes are required:

* `group`: The name of the profile to be used to shape the hourly load from the producer.
* `type`: Always set to `producer`.
* `subtype`: Always set to `must_run`.

**For example:**

```
- hydrogen.group = self: electricity_input_curve
- hydrogen.subtype = must_run
- hydrogen.type = producer
```

### Cable from offshore

The output node must have an `electricity_output_capacity` attribute which specifies how much energy can flow between it and the HV network each hour (in MW). It also needs a specified `number_of_units`, the calculations in the merit module concerning hybrid offshore wind hubs relie on this attribute.

```
- electricity_output_capacity = 10
- number_of_units = 1
```


### Cable to offshore

The output node must have an `electricity_output_capacity` attribute which specifies how much energy can flow between it and the HV network each hour (in MW). It also needs a specified `number_of_units`, the calculations in the merit module concerning hybrid offshore wind hubs relie on this attribute.

```
- electricity_output_capacity = 10
- number_of_units = 1
```

## Outputs

The following data can be expected after the merit order has run.

### Producer node

* `demand`: the total amount of electricity produced annually, including energy which is curtailed
* `electricity_output_curve` the hourly electricity output from the producer, including curtailment

### Converted node

* `demand`: the total amount of electricity that flows through the battery in a year
* `electricity_input_curve`: the hourly electricity input to the battery
* `hydrogen_output_curve`: the hourly electricity output from the battery

### Output node

* `demand`: the total amount of electricity delivered to the HV network by the park
* `electricity_output_curve`: the hourly electricity which flows out from the output (and therefore from the producer and battery combined)

### input node

* `demand`: the total amount of electricity delivered to the HV network by the park
* `electricity_output_curve`: the hourly electricity which flows out from the output (and therefore from the producer and battery combined)

### Curtailment node

* `demand`: the total amount of curtailed energy from the producer
* `electricity_input_curve`: describing how much energy is curtailed in each hour



## Updating values with GQL

#### Change the capacity of the cable

The capacity of the cable is set via the output capacity. This is because the costs of the cable are not calculated via standard units, but by it's cost group.

```ruby
EACH(
UPDATE(
  V(from_offshore_key),
  electricity_output_capacity,
  USER_INPUT()
),
UPDATE(
  V(to_offshore_key),
  electricity_output_capacity,
  USER_INPUT()
)
)
```

Both nodes need to be set, since in reality each node represents only one way of the two-way cable.


#### Change the capacity of the electrolyser
The capacity of the electrolyser is set via it's number of units, since the costs are specified per unit.

```ruby

UPDATE(
  V(electrolyser_key),
  number_of_units,
  USER_INPUT() / V(electrolyser_key,typical_input_capacity)
)
```

#### Change the capacity of the producer
The capacity of the producer is also set via the number of units:

```ruby

UPDATE(
  V(electrolyser_key),
  number_of_units,
  USER_INPUT() / V(electrolyser_key,typical_input_capacity)
)