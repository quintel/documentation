---
title: Always-on battery parks
---

import useBaseUrl from '@docusaurus/useBaseUrl'

Always-on battery parks represent some kind of always-on electricity producer which is connected to the HV network via a capacity-limited interconnect. When the output of the producer exceeds the capacity of the interconnect, the energy is instead diverted into a battery. When the battery also has insufficient capacity – or no volume remaining – the electricity is curtailed.

<div style={{ textAlign: "center" }}>
  <img
    alt="Park diagram showing a producer connected to a battery, output, and curtailment"
    src={useBaseUrl("/img/docs/contrib/always-on-battery-park.png")}
  />
</div>

## Setting up a battery park

### Graph structure

A battery park requires five nodes to be added to the graph:

1. **Producer**: This represents wind turbines, solar panels, etc, which produce electricity according to a profile.
2. **Battery**: When the producer outputs more energy than can be delivered to the HV network, the excess is provided to the battery.
3. **Curtailment**: Energy is diverted here when the battery cannot store all the energy.
4. **Output**: The producer and battery send energy to the output node before it is delivered to the grid.
5. **Wasted storage**: Energy that decays in the battery, or is remaining at the end of the year, is directed into the wasted storage node.

All edges between nodes are reversed share edges, except that from the battery to wasted storage which should be `inversed_flexible`.

The "Wasted storage" node does not need to be unique to the battery park; many parks may share the same node.

<div style={{ textAlign: "center" }}>
  <img
    alt="Diagram showing two battery parks sharing a wasted storage node"
    src={useBaseUrl("/img/docs/contrib/always-on-battery-park-shared.png")}
  />
</div>

### Producer node

The producer requires the following `merit_order` attributes:

* `group`: The name of the profile to be used to shape the hourly load from the producer.
* `level`: The level at which the technology appears in the electricity network.
* `type`: Always set to `producer`.
* `subtype`: Always set to `always_on_battery_park`.
* `relations.curtailment`: The key of the curtailment node.
* `relations.output`: The key of the output node.
* `relations.storage`: The key of the storage/battery node.

All attributes are required.

**For example:**

```
- merit_order.group = dynamic: wind_inland
- merit_order.level = hv
- merit_order.relations.curtailment = park_curtailment
- merit_order.relations.output = park_output
- merit_order.relations.storage = park_storage
- merit_order.subtype = always_on_battery_park
- merit_order.type = producer
```

### Storage node

The storage node requires a `storage` attribute:

* `volume`: The volume of the battery in MWh. May be zero. *(Required)*
* `cost_per_mwh`: The cost per MWh of installed storage volume. *(Optional)*
* `decay`: The percentage of stored energy that decays each hour. Defaults to zero. *(Optional)*

**For example:**

```
- storage.cost_per_mwh = 3.4
- storage.decay = 2.57202e-03
- storage.volume = 8400.0
```

### Output node

The output node must have an `electricity_output_capacity` attribute which specifies how much energy can flow between it and the HV network each hour (in MW):

```
- electricity_output_capacity = 10
```

## Outputs

The following data can be expected after the merit order has run.

### Producer node

* `demand`: the total amount of electricity produced annually, including energy which is curtailed
* `electricity_output_curve` the hourly electricity output from the producer, including curtailment

### Battery node

* `demand`: the total amount of electricity that flows through the battery in a year
* `electricity_input_curve`: the hourly electricity input to the battery
* `electricity_output_curve`: the hourly electricity output from the battery
* `storage_curve`: a curve showing how much energy is stored in the battery for each hour in the year

### Output node

* `demand`: the total amount of electricity delivered to the HV network by the park
* `electricity_input_curve`: the hourly electricity which flows into the output (and therefore from the producer and battery combined)

### Curtailment node

* `demand`: the total amount of curtailed energy from the producer
* `electricity_input_curve`: describing how much energy is curtailed in each hour

### Wasted storage

* `demand`: the total amount of electricity from the battery which remains unused at the end of the year, or which decays while stored

## Updating values with GQL

#### Change the amount of storage

```
UPDATE(
  V(storage_node_key, storage),
  volume,
  USER_INPUT()
)
```

Alternatively, you may choose to set a non-zero volume in the node file and change the storage node's `number_of_units` attribute.

#### Change the capacity of the output to network connection

```ruby
UPDATE(
  V(output_node_key),
  electricity_output_capacity,
  USER_INPUT()
)
```
