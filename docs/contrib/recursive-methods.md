---
title: Recursive methods
---

## What are recursive methods?
Recursive methods traverse a graph from a node/edge backwards through its parents to allocate 'upstream' properties like primary demand, emissions, or costs, to the node/edge.

### With and without losses
Nodes in the graph can have efficiencies attributed to them, to model conversion or transport losses. Recursive methods can either account for these losses or ignore them, depending on the context.

- **With losses:** efficiency losses are included at each node, adjusting the propagated value according to these inefficiencies.
- **Without losses:** efficiency losses are ignored at each node, allowing direct propagation of the value through the graph.

### General stop conditions
Recursive methods need to know when to stop recursing. There are specific stop conditions depending on the recursive module, but in general the conditions fall into these categories:
- Reaching a node marked as a primary source (e.g., primary energy node).
- Encountering a node without parents (dead-end).
- Specific conditions based on the queried attribute (e.g., bio resources node for bio demands).

## Modules

### PrimaryDemand and BioDemand
- **Goal:** calculate the primary energy demand required to fulfill a node’s consumption, either from all sources (PrimaryDemand) or specifically from bio-based resources (BioDemand).
- **Stop conditions:** stops at a dead end, or when reaching a node in the `primary_energy_demand` (for primary) or `bio_resources_demand` (for bio) group, depending on the method.
- **Type:** with losses.

<div style={{ textAlign: "center" }}>
  <img
    src="/img/docs/contrib/recursive-methods/recursive-methods-demand.png"
  />
</div>

#### Example:
```
V(agriculture_final_demand_network_gas, primary_demand) = 100.0 [MJ]

V(agriculture_final_demand_network_gas, primary_demand_of(:natural_gas)) = 50.0 [MJ]

V(agriculture_final_demand_network_gas, demand_of_bio_resources_including_abroad) = 50.0 [MJ]
```


### PrimaryCO2 and BioEmissions
- **Goal:** compute total primary CO₂ emissions originating from fossil or bio-based sources, taking into account capture of fossil or bio-based emissions.
- **Stop conditions:** stops at a dead end, or when a node belongs to the `primary_energy_demand` group (for fossil) or `bio_resources_demand` group (for bio).
- **Type:** with losses.

<div style={{ textAlign: "center" }}>
  <img
    src="/img/docs/contrib/recursive-methods/recursive-methods-emissions.png"
  />
</div>

#### Example:
```
V(agriculture_final_demand_electricity, primary_co2_emission) = 5.0 [kg CO₂]

V(agriculture_final_demand_electricity, primary_co2_emission_of_fossil) = 5.0 [kg CO₂]

V(agriculture_final_demand_electricity, primary_co2_emission_of_bio_carriers) = 7.5 [kg CO₂]
```

### WeightedCarrier
- **Goal:** calculate the weighted average cost and emissions or potential biogenic CO₂ capture per MJ based on the proportions of different input carriers to a node.
- **Stop conditions:** stops at a dead end, or a node/edge where `cost_per_mj`, `co2_conversion_per_mj`, or `potential_co2_conversion_per_mj` is defined (depending on the method called).
- **Type:** without losses.

<div style={{ textAlign: "center" }}>
  <img
    src="/img/docs/contrib/recursive-methods/recursive-methods-weighted-carrier.png"
  />
</div>

#### Example:
```
V(energy_power_combined_cycle_network_gas, weighted_carrier_cost_per_mj) = 0.0075 [EUR/MJ]

V(energy_power_combined_cycle_network_gas, weighted_carrier_co2_per_mj) = 0.025 [kg CO₂/MJ]

V(energy_power_combined_cycle_network_gas, weighted_carrier_potential_co2_per_mj) = 0.030 [kg CO₂/MJ]
```

### Sustainable
- **Goal:** recursively calculate the sustainability share of energy input to a node by aggregating upstream sustainability.
- **Stop conditions:** stops at nodes with a manually set `sustainability_share` attribute, or carriers marked as sustainable or dead ends / primary_energy_demand nodes.
- **Type:** with losses.

<div style={{ textAlign: "center" }}>
  <img
    src="/img/docs/contrib/recursive-methods/recursive-methods-sustainable.png"
  />
</div>

#### Example:
```
V(energy_torrefaction_wood, sustainability_share) = 0.90 [-]
```
