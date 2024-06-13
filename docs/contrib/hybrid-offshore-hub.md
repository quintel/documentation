---
title: Hybrid offshore hub
---

import useBaseUrl from '@docusaurus/useBaseUrl'

Please note: General documentation concerning hybrid offshore wind can be found in the [Hybrid offshore wind](../main/hybrid-offshore-wind) documentation. This documention is focused on the configuration and hourly calculations of hyrbid offshore wind in the ETM.

Hybrid offshore hubs represent an offshore renewable electricity production facility combined with an electrolyser for hydrogen production. It is connected to the mainland power grid via a subnautical power cable. The electrolyser is connected to the mainland hydrogen network via a subnautical pipeline. 

## Configuration of hybrid offshore hub

### Nodes
A hybrid offshore hub in the ETM requires 6 nodes:

1. **Producer**: This represents renewable electricity production (e.g. wind farm or solar farm) which produce electricity according to a production profile. At the moment, the ETM only incorporates a hybrid offshore hub based with renewable electricity production from offshore wind farms. 
2. **Electrolyser**: Depending on the WTP of the electrolyser and the capacity of the electrolyser,power cable and producer, hydrogen production will take place. 
3. **Curtailment**: Energy is diverted here when the electrolyser cannot use all generated energy due to its capacity constraints, and when onshore electricity demand is too low. 
4. **Cable offshore-onshore**: The producer transports electricity to the cable node so it can be transported to the onshore power grid.
5. **Cable onshore-offshore**: This cable transports electricity from the onshore power grid to the offshore electrolyser. This cable will be deployed when the WTP of the electrolyser is higher than the national electricity price and when there is still undeployed electrolyser capacity available. In reality, this cable is the same cable as the cable offshore-onshore (and therefore has the same specs), but is added as a seperate node for modelling purposes. 
6. **Hydrogen offshore pipeline**: Hydrogen that is produced by the electrolyser will be transported to the onshore hydrogen network by this node. 

### Edges
The edge-types of the edges between the nodes can be found in the picture below.
As can be seen in the legend, a 'dashed' edge has the 'reversed' attribute set to true. 

<div style={{ textAlign: "center" }}>
  <img
    alt="Park diagram showing a producer connected to a battery, output, and curtailment"
    src={useBaseUrl("/img/docs/contrib/hybrid-offshore-hub/hybrid-offshore-hub.png")}
    static
  />
</div>

For more information about edge-types please visit the [Graph components](graph-components) documentation. Some of the configured edge-types are further explained here:

* __Producer > Electrolyser: constant.__ Through the constant edge a specific amount of energy is set through this edge. The model uses this characteristic to sum all electricity that has flown from the producer to the electrolyser in each hour of the year. 
* __Producer > Curtailment: reversed share.__ With the reversed share the model sets the annual demand of the curtailment node equal to the sum of curtailed energy for each hour of the year, at the same time when the amount through the edge from Producer to Electrolyser is set.
* __Producer > Cable from offshore network: inversed_flexible.__ The remaining produced energy from the Producer is subsequently allocated to the cable with the inversed_flexible edge. 
* __Cable > Electrolyser: flexible.__ When the electrolyser node does not yet meet its yearly demand it is given by the merit module, cable node will deliver this deficit through the flexible edge. 

## Node attributes
### Producer node

The producer requires the following `merit_order` attributes:

* `group`: The name of the profile to be used to shape the hourly load from the producer.
* `level`: The level at which the technology appears in the electricity network.
* `type`: Always set to `producer`.
* `subtype`: Always set to `hybrid_offshore`.
* `relations.curtailment`: The key of the curtailment node.
* `relations.output`: The key of the output cable node.
* `relations.input`: The key of the input cable node.
* `relations.converter`: The key of the converter node (in this case the electrolyser).

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

### Electrolyser node (converter)

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

In addition for the electrolyser, `hydrogen` merit attributes are required:

* `group`: The name of the profile to be used to shape the hourly load from the producer.
* `type`: Always set to `producer`.
* `subtype`: Always set to `must_run`.

**For example:**

```
- hydrogen.group = self: electricity_input_curve
- hydrogen.subtype = must_run
- hydrogen.type = producer
```

### Cable from offshore and cable to offshore nodes

For both cable nodes, the node must have an `electricity_output_capacity` attribute which specifies how much energy can flow between this node and the HV network each hour (in MW). It also needs a specified `number_of_units`, the calculations in the merit module concerning hybrid offshore wind hubs rely on this attribute.

```
- electricity_output_capacity = 500
- number_of_units = 1
```

## Outputs

The following data can be expected after the merit order has run.

#### Producer node
* `demand`: the total amount of electricity produced annually, including curtailed electricity
* `electricity_output_curve`: the hourly electricity output from the producer, including curtailed electricity

#### Electrolyser node (converter)
* `demand`: the total annual amount of energy that flows through the node
* `electricity_input_curve`: the hourly electricity input to the converter node
* `hydrogen_output_curve`: the hourly hydrogen output from the converter node

#### Output node (cable from offshore network)
* `demand`: the total annual amount of electricity that flows through the node
* `electricity_input_curve`: the hourly electricity input into the cable (originating from the producer node)

#### Input node (cable to offshore network)
* `demand`: the total annual amount of electricity that flows through the node
* `electricity_output_curve`: the hourly electricity output of the cable (which flows to the converter node)

#### Curtailment node
* `demand`: the total annual amount of curtailed energy from the producer
* `electricity_input_curve`: the hourly curtailed electricity input (originating from the producer node)

## Updating values with GQL
The ETM currently provides user inputs that update the `number_of_units` of the producer node and the electrolyser (converter) node. For the power cable nodes, the `electricity_output_capacity` can be set. 

#### Change the capacity of the producer
In the ETM, the total installed capacity of the producer node can be set. This input will update the `number_of_units` of the producer based on the typical input capacity of one producer unit:

```ruby
UPDATE(
  V(producer_key),
  number_of_units,
  USER_INPUT() / V(electrolyser_key, typical_input_capacity)
)
```

#### Change the capacity of the electrolyser
In the ETM, the relative installed capacity of the electrolyser can be set compared to the installed capacity of the producer node. With this setting the total installed capacity of the electrolyser can be calculated and subsequently the total `number_of_units` of the electrolyser is updated:

```ruby
UPDATE(
  V(electrolyser_key),
  number_of_units,
  DIVIDE(
    PRODUCT(
      USER_INPUT(),
      V(producer_key, "number_of_units * typical_input_capacity")
    ),
    V(electrolyser_key, typical_input_capacity)
  )
)
```

#### Change the capacity of the power cable
Similar to the electrolyser node, the electricity input capacity of the cable nodes can be set through a relative capacity compared to the installed capacity of the producer node. By correcting for the `electricity_output_conversion`, the `electricity_output_capacity` is calculated and updated. Note that the total installed output capacity of the cable nodes is set directly via the `electricity_output_capacity` attribute (so the `number_of_units` is not applied or updated here). Both nodes need to be updated with the same value since in reality this is the same cable with bi-directional functionality.

```ruby
EACH(
  UPDATE(
    V(from_offshore_key),
    electricity_output_capacity,
    PRODUCT(
      USER_INPUT() * V(producer_key, "number_of_units * typical_input_capacity"),
      V(from_offshore_key, electricity_output_conversion)
    )
  ),
  UPDATE(
    V(to_offshore_key),
    electricity_output_capacity,
    PRODUCT(
      USER_INPUT() * V(producer_key, "number_of_units * typical_input_capacity"),
      V(to_offshore_key, electricity_output_conversion)
    )
  )
)
```