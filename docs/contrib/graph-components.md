---
title: Graph components
---

Energy flows in the ETM are modelled using a [directed graph structure](https://en.wikipedia.org/wiki/Graph_theory).

Graphs are collections of **Nodes**, which we typically use to represent the transformation of energy from one form to another, or technologies. Nodes are connected to other nodes by **Edges**, which we typically use to represent the flow of energy between nodes.

<div className="images-row">
  <figure>
    <img src="/img/docs/contrib/graph-components/simple-graph.png" alt="A graph with two nodes and one edge" />
    <figcaption className="image-title">A simple graph in which energy flows from right to left, from the supplier (or "parent") to the consumer ("child").</figcaption>
  </figure>
</div>

## Carriers

A "carrier" can be thought of as a _type_ of energy. For example, coal, electricity, wind, and gas are all different energy carriers. Each carrier has a collection of attributes which describe whether it is a sustainable source of energy, the CO2 emissions per MJ, [and more](https://github.com/quintel/atlas/blob/master/lib/atlas/carrier.rb).

## Nodes

Nodes are extremely versatile. They can represent a single technology type or industrial process or can be used more abstractly to combine energy flows from multiple sources to easily query the graph.

For example, the [`transport_car_using_electricity`](https://engine.energytransitionmodel.com/inspect/_/graphs/energy/nodes/transport_car_using_electricity) node represents electric cars used for transport. This sends energy into a [`transport_useful_demand_cars`](https://engine.energytransitionmodel.com/inspect/_/graphs/energy/nodes/transport_useful_demand_cars) node which does not have a real-world counterpart. Instead, it is used to represent the total demand for car-based transport in the graph. Car demand then feeds into [`transport_useful_demand_passenger_kms`](https://engine.energytransitionmodel.com/inspect/_/graphs/energy/nodes/transport_useful_demand_passenger_kms) which represents the total passenger kilometers travelled by all transport methods, including bicycles, busses, cars, and more.

### Node attributes

Each node is described by a document in [ETSource](https://github.com/quintel/etsource) containing attributes which configure how the node behaves in calculations. The full list of permitted attributes is defined in Atlas, in [`node.rb`](https://github.com/quintel/atlas/blob/master/lib/atlas/node.rb) and [`energy_node.rb`](https://github.com/quintel/atlas/blob/master/lib/atlas/energy_node.rb).

Many attributes are self-explanatory, such as `initial_investment` and `technical_lifetime`. This section explains the attributes whose function is less obvious from their name.

#### use

Describes how the energy entering the node is used: `energetic` (the energy is converted or consumed as energy), `non_energetic` (the carrier is used as a feedstock, for example oil used to make plastics), or `undefined` (for abstract nodes which have no real-world counterpart).

Non-energetic nodes typically also belong to the `non_energetic_use` group and carry a `free_co2_factor` of 1.0, so that carbon which ends up locked inside products is not counted as an emission. The [recursive calculations](recursive-methods) for primary demand and CO<sub>2</sub> stop at such nodes.

```
- use = energetic
```

#### free_co2_factor

The proportion of the CO<sub>2</sub> emissions of the node's input which is considered "free", meaning it is not emitted to the atmosphere. The real-world counterpart is carbon which remains locked inside a product (for example in the chemical industry) or emissions which are accounted for elsewhere.

In ETEngine, the [recursive CO<sub>2</sub> calculation](recursive-methods) reduces the emissions attributed to the node's primary demand by this factor: the CO<sub>2</sub> per MJ of each input carrier is multiplied by `(1 - free_co2_factor)`. A node with a factor of `1.0` stops the recursion entirely and contributes zero emissions. The factor is also applied when calculating the CO<sub>2</sub> costs of the node, so that no CO<sub>2</sub> price is paid over the "free" share.

```
- free_co2_factor = 0.85
```

#### takes_part_in_ets

Indicates whether the node must pay for its emissions through the European Emissions Trading System (`1.0` = yes, `0.0` = no).

In ETEngine this value is used as a multiplier in the CO<sub>2</sub> cost calculation: the node's emissions per MJ of input are multiplied by the area's CO<sub>2</sub> price, by `takes_part_in_ets`, and by `(1 - free_co2_factor)`. Setting it to `0.0` therefore removes all CO<sub>2</sub> costs from the node's total and marginal costs; when the attribute is not set, a value of `1.0` is assumed.

```
- takes_part_in_ets = 1.0
```

#### land_use_per_unit

The land used by a single unit of the technology, in km².

In ETEngine, the node's `total_land_use` is calculated as `number_of_units * land_use_per_unit`. This is queried by gqueries to report, for example, the area used by onshore wind turbines or solar PV in land use charts.

```
- land_use_per_unit = 0.0201
```

#### sustainability_share

The share of the node's energy which is considered sustainable. This is normally only set on [primary energy demand](recursive-methods) nodes or other "dead end" nodes on the right of the graph, where energy enters the model.

Usually the sustainable share of energy is determined by the `sustainable` attribute of the output carriers of the node; setting `sustainability_share` on the node overrides the carrier value. ETEngine then calculates the sustainability share of every other node recursively, as the weighted sum of the shares of its suppliers, and uses it to split primary demand into sustainable and fossil parts (`primary_demand_of_sustainable` and `primary_demand_of_fossil`) for the renewability metrics on the dashboard. Atlas requires this attribute on `primary_energy_demand` nodes when one or more of their output carriers does not define a `sustainable` value.

```
- sustainability_share = 1.0
```

#### waste_outputs

A list of output carriers which should be treated as free waste byproducts of the node's main conversion, such as waste heat from a power plant.

When calculating the fuel and CO<sub>2</sub> costs of a node, ETEngine normally assumes all outputs contribute to those costs. Carriers listed in `waste_outputs` are excluded: the costs are attributed only to the remaining ("costable") outputs, which lowers the marginal cost of the main product. See [Waste outputs and costable factor](waste-outputs) for a full explanation.

```
- waste_outputs = [steam_hot_water]
```

#### Deprecated attributes

The following attributes may still appear in node documents, but are no longer used in any calculation:

- `energy_balance_group` — was intended to group nodes which draw from the same categories of the energy balance when constructing datasets. It is still declared in Atlas, but no node document sets it and no code reads it.
- `forecasting_error` — was used in old security-of-supply calculations to account for errors in forecasting the output of variable renewables.
- `part_load_operating_point` — the point, as a share of nominal capacity, at which a plant typically operates when running at part load. Together with `part_load_efficiency_penalty` it was intended to model reduced efficiency in old security-of-supply calculations.
- `part_load_efficiency_penalty` — the efficiency loss incurred per unit of deviation below the part-load operating point. See `part_load_operating_point`.

## Edges

Edges allow us to move energy from one node to another. The ETM uses a _directed_ graph, which means that the edges have a direction; energy flows in one direction through the edge. In the example at the top of the page, energy flows from Node 1 to Node 2 through the edge, but not from Node 2 to Node 1.

Edges are also associated with a carrier, for example electricity.

<div className="images-row">
  <figure>
    <img src="/img/docs/contrib/graph-components/electricity-edge.png" alt="A graph with two nodes and an electricity edge" />
    <figcaption className="image-title">Electricity flows from Node 1 to Node 2</figcaption>
  </figure>
</div>

An edge can only have one carrier, but a node can have multiple edges with different carriers. For example, a node might have an edge for electricity, and another edge for gas.

<div className="images-row">
  <figure>
    <img src="/img/docs/contrib/graph-components/multiple-carriers.png" alt="A graph with three nodes and electricity and gas edges" />
    <figcaption className="image-title">Node 1 outputs both electricity and gas to different consumers</figcaption>
  </figure>
</div>

### Edge shares

Edges have a `share`, which describes what proportion of the energy of a node is received through the edge. For example, a node might have two electricity edges.

<div className="images-row">
  <figure>
    <img src="/img/docs/contrib/graph-components/edge-shares.png" alt="A graph with three nodes and two electricity edges" />
    <figcaption className="image-title">75% of the energy in Node 1 is supplied by Node 2, and 25% by Node 3</figcaption>
  </figure>
</div>

### Edge types

In the ETSource document for an edge, you will assign a `type` attribute.

#### Share edges

Share edges allow you to directly define [the share of an edge](#edge-shares). In the ETSource document, you will set this with the `child_share` attribute (the proportion of the consumer node's demand which is supplied through the edge) or the `parent_share` attribute (the proportion of the supplier node's output which is sent through the edge). In ETEngine the share is simply called `share` for historical reasons.

```
- type = share
- child_share = 0.75
```

Share edges are the most common type used in the ETM.

#### Flexible edge

Flexible edges are similar to share edges, except that you don't need to explicitly define the share. Instead, because the shares on a node should always sum to 1.0, a flexible edge share will be set to the remaining share after all other edges have been assigned.

```
- type = flexible
```

<div className="images-row">
  <figure>
    <img src="/img/docs/contrib/graph-components/flexible-edge.png" alt="A graph with a flexible edge" />
    <figcaption className="image-title">As in the previous example, Node 1 receives 75% of its energy from Node 2. As the Node 3 edge is flexible, its share is set dynamically to 1.0 - 0.75 = 0.25.</figcaption>
  </figure>
</div>

#### Constant edges

Constant edges are used extremely infrequently and allow the (ab)use of the `share` document attribute to instead set a specific amount of energy carried through the edge.

```
- type = constant
- child_share = 100.0
```

The edge will carry exactly 100 MJ of energy. Constant edges are often used without specifying the `share`, in which case the edge will carry the full amount of energy from the consumer node.

#### Dependent edges

Dependent edges are a legacy feature, and behave the same as a [constant edge](#constant-edges) without a `share` (i.e. they carry the full amount of energy from the consumer node).

```
- type = dependent
```

#### Inversed flexible edges

Whereas most edges in the graph are calculated from left to right (the "child" node to the "parent"), inversed flexible edges do the opposite. Inversed edges are used to carry _excess_ energy away from a node to a different consumer.

<div className="images-row">
  <figure>
    <img src="/img/docs/contrib/graph-components/inversed-flexible.png" alt="A graph with three nodes and two electricity edges" />
    <figcaption className="image-title">75% of the supplier's energy is given by the Consumer, with the remaining 25% sent to the Excess node.</figcaption>
  </figure>
</div>

### Reversed edges

While most edges in the graph are calculated from left to right (the "child" node to the "parent"), reversed edges do the opposite. Reversed edges are used to move energy from the right to the left.

```
- type = share
- reversed = true
```

When a share is assigned to this edge, it will refer to the share of the _producer_ node, rather than the consumer node.

### Special edge attributes

Edges can have certain extra attributes that will influence calculations, mostly
necessary for [Recursive methods](recursive-methods).

#### Circular
Adding the attribute `circular` to an edge will help `Turbine` order the nodes correctly for calculation. Edges with circular set to true will be ignored
for recursive methods to combat circularity.

```
- circular = true
```

Circular edges are for example used for some edges from [generic transformation nodes](https://github.com/quintel/etsource/blob/master/graphs/energy/nodes/energy/energy_chemical_refineries_transformation_external_coupling_node.ad) for external model coupling. As a downside of the ignored circular edges, this could for example result in inaccurately calculated primary demand and primary CO<sub>2</sub> emissions.

#### Treat as loss
Some edges should be seen as loss edges, but are required to have a certain carrier other than loss
in order for hourly balancing to work. An example is unused heat in heat networks.
The [edge](https://github.com/quintel/etsource/blob/master/graphs/energy/edges/energy/energy_production_aggregator_ht_steam_hot_water-energy_heat_unused_ht_steam_hot_water%40steam_hot_water.ad)
going to the unused heat node should have steam hot water as carrier, but [should be
treated like loss](recursive-methods#with-and-without-losses) for primary demand and CO<sub>2</sub> calculations in the recursive methods.
This can be achieved with the `treat_as_loss` attribute.

```
- treat_as_loss = true
```

## Slots

So far, when describing shares we have only discussed examples that use one carrier. However, a node can have multiple edges with different carriers. For example, a node might have an edge for electricity, and another edge for gas.

**Edges shares describe the share of the carrier, rather than the share of all the demand on a node.**

<div className="images-row">
  <figure>
    <img src="/img/docs/contrib/graph-components/carrier-edge-shares.png" alt="" />
  </figure>
</div>

The above example may be confusing: how can both edges have a share of 1.0? The answer is that each edge takes 100% of the energy of its carrier. The electricity edge carries 100% of the electricity, and the gas edge carries 100% of the gas.

<div className="images-row">
  <figure>
    <img src="/img/docs/contrib/graph-components/carrier-edge-shares-2.png" alt="" />
  </figure>
</div>

This example shows the situation more clearly. The electricity edge still has a share of 1.0 and carries 100% of the electricity, but the gas edges have shares of 0.75 and 0.25; one carries 75% of the gas, and the other 25%.

However, this example presents another problem: even though we know the proportion of each carrier that passes through each edge, we don't know the proportion of gas to electricity. This is where slots come in.

In ETEngine, nodes have input and output slots which correspond with the input and output edges and carriers. A node with electricity and gas input edges will have an electricity input slot and a gas input slot. A node with an outgoing heat edge will have a heat output slot.

<div className="images-row">
  <figure>
    <img src="/img/docs/contrib/graph-components/slots.png" alt="" />
  </figure>
</div>

Like edges, each slot also has a `share` which describes the proportion of the node's total demand which is carried by the slot.

In ETSource, the shares of the slots are set with `input` and `output` attributes:

```
- input.electricity = 0.6
- input.gas = 0.4
- output.heat = 1.0
```

In ETEngine, these shares can be queried with `conversion` attributes on the node:

```ruby
V(Consumer, electricity_input_conversion) # => 0.6
V(Consumer, gas_input_conversion)         # => 0.4
V(Consumer, heat_output_conversion)       # => 1.0
```
