---
title: Load shifting in Merit
---

Demand side response can be enabled in the electricity merit order using load shifting. When in use, a load shifting node will output energy at a pre-set price point, and attempt to recover that energy later in the year when the price falls.

Load shifting is energy neutral throughout the year. Energy produced by shifting will be reclaimed later in the year. Should the simulation get close to the end of the year, the load shifting component will begin placing an inflexible consumption load in order to reclaim energy regardless of the market price.

## Implementation

Load shifting can be thought of as storage in reverse. Storage consumes energy and holds it in a reserve to be discharged later. Load shifting outputs energy immediately, internally storing a deficit which it will try to reclaim later by consuming.

### Demand sources

Load shifting is typically used within a sector or sub-sector, in order to shift some of that sector's demand to the future. To ensure that only the demand of this sector is shifted, the demand sources must be specified when configuring load shifting.

For example, if the node will shift the demand from "node_one" and "node_two", the demand source configuration will be:

```
- merit_order.demand_source = [node_one, node_two]
```

Both "node_one" and "node_two" must participate as consumers within the merit order. ETSource tests will verify that this is the case, but ETEngine will not.

<div className="images-row">
  <figure>
    <figcaption className="image-title">Demand for node_one</figcaption>
    <img src="/img/docs/contrib/load-shifting/demand-node_one.png" alt="Chart showing the hourly load of node_one" />
  </figure>
  <figure>
    <figcaption className="image-title">Demand for node_one</figcaption>
    <img src="/img/docs/contrib/load-shifting/demand-node_two.png" alt="Chart showing the hourly load of node_two" />
  </figure>
</div>

The load curves of each of the nodes will be summed to create a combined curve:

<figure style={{ textAlign: "center" }}>
  <figcaption className="image-title">Summed load</figcaption>
  <img src="/img/docs/contrib/load-shifting/demand-summed.png" alt="Chart showing that the load of node_one in each hour has been added with that of node_two" />
</figure>

### Capacity

From the summed curve it is possible to find the peak load of the demand sources.

<figure style={{ textAlign: "center" }}>
  <img src="/img/docs/contrib/load-shifting/demand-peak.png" alt="Chart of the summed load, with the peak load of 14 MW highlighted" />
</figure>

The peak load is multiplied by the `availability` of the load shifting node to set the input and output capacity of the merit order participant. For example, if the peak load is **14 MW** and the availability is set to **0.25 (25%)**, the capacity of the load shifting participant is set to **3.5 MW** (14 MW ⨉ 0.25).

:::caution Availability
If in the node file the `availability` attribute is set to zero, no load shifting will occur! Don't forget to set an `availability` in the input used to enable load shifting.
:::

### Deficit capacity

Load shifting may have an optional limit on how much deficit can be stored. This allows a user to allow only a certain amount of load to be shifted before the deficit must be reduced by consuming.

Since the capacity of the participant is set dynamically based on the demand source peak load, **the deficit capacity is expressed in hours.** For example, setting the capacity to 5 allows five times the output capacity to be shifted before the limit is reached. Decreasing the demand will only become available again, once some of the deficit has been compensated.

In this example, the load shifting reaches its cap of 10 MWh and cannot shift any more load until the deficit is reduced:

<figure style={{ textAlign: "center" }}>
  <img src="/img/docs/contrib/load-shifting/deficit-cap.png" alt="Deficit rises to the cap of 10 MWH and then falls" />
</figure>

### Constraints

The output of energy from load shifting has three constraints:

* **Output capacity**: The maximum hourly output in MW. This value is also used to set the input capacity.
* **Demand source load**: The node must specify at least one other merit order consumer node which provides a demand curve. This ensures that the amount of load shifted never exceeds the amount demanded by the sources.
* **Deficit capacity**: An optional limit on how much deficit can be stored at one time. For example, when set to 100 MWh, this means that up to 100 MWh can be shifted, but the deficit must be reduced by consuming energy before any more load can be shifted.

## Configuring load shifting

### Graph structure

As load shifting is energy-neutral, there is no need for the node to be connected to any others in the graph. However, connecting the node may allow others to more easily understand how load shifting works.

<div style={{ textAlign: "center" }}>
  <img src="/img/docs/contrib/load-shifting/graph.png" alt="" />
</div>

Merit will set the demand of the load shifting node. The following edge attributes are required:

#### Load shifting ← Final demand

* `type`: share
* `reversed`: false
* `child_share`: 1.0

#### After shifting ← Load shifting

* `type`: share
* `reversed`: true
* `parent_share`: 1.0

#### After shifting ← Final demand

* `type`: flexible
* `reversed`: false

With this arrangement, the energy which is shifted during the year will be diverted through the load shifting node.

### Merit order attributes

* `type`: must be set to "flex"
* `subtype`: must be set to "load_shifting"
* `level`: may be set to "omit" to ignore the effects of load shifting on the electricity network, or "lv", "mv", or "hv" if you want shifting to affect the network calculation and charts.
* `demand_source`: must be present with the name of at least one node whose demand is shifted. These nodes must themselves be consumers in the merit order.
* `load_shifting_hours`: an optional upper can on how much deficit can be stored at once. If omitted, the deficit capacity limit is disabled. See [Deficit capacity](#deficit-capacity).

### Price attributes

* `marginal_costs`: the price above which load shifting will become active, producing energy with the aim of shifting demand to later hours.
* `max_consumption_price`: determines the price below which load shifting will attempt to consume energy to balance its deficit. Defaults to `marginal_costs` when not set.

### Units and availability

* `number_of_units`: used to enable and disable load shifting. This should be set to zero in the node file, and can be set to 1.0 with an input to enable load shifting.
* `availability`: sets how much load can be shifted in each hour. See [Capacity](#capacity).

### Example

```
- groups = [preset_demand]

- merit_order.type = flex
- merit_order.subtype = load_shifting
- merit_order.level = omit
- merit_order.demand_source = [node_a, node_b, node_c]
- merit_order.load_shifting_hours = 72

- marginal_costs = 48.0
- max_consumption_price = 48.0

- availability = 0.0
- number_of_units = 0.0

~ demand = 0.0
```

## Updating values with inputs

#### Setting load shifting availability

```ruby
EACH(
  UPDATE(V(load_shifting_node), availability, USER_INPUT()),
  UPDATE(V(load_shifting_node), number_of_units, 1.0),
)
```

#### Setting deficit capacity

```ruby
UPDATE(V(load_shifting_node, merit_order), load_shifting_hours, USER_INPUT())
```

## Querying load shifting

Regardless of whether the load shifting node is connected to the rest of the graph, you will be able to query the following attributes from the node:

* `demand`: The total amount of energy which is load shifted during the year.
* `electricity_output_curve`: A load curve indicating when the load shifting node outputs energy, shifting it to the future.
* `electricity_input_curve`: A load curve indicating when the load shifting node consumes energy, reclaiming the deficit from load shifted in earlier hours.

:::caution Load curves
The load curves on the demand sources will not be changed as a result of load shifting; they will still show the load as if load shifting had not occurred.
:::
