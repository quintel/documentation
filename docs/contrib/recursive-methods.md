---
title: Recursive methods
---

## What are recursive methods?
Recursive methods traverse a graph from a node/edge backwards through its parents to allocate 'upstream' properties like primary demand, emissions, or costs, to the node/edge.

### With and without losses
Nodes in the graph can have efficiencies attritubed to them, to model conversion or transport losses. Recursive methods can either account for these losses or ignore them, depending on the context.

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
- **Stop conditions:** stops at a dead end, or when reaching a node in the primary_energy_demand (for primary) or bio_resources_demand (for bio) group, depending on the method.
- **Type:** with losses.

```
Industry Electricity Demand (100 MJ total)
│
└── Electricity Generation Mix
    ├── Biomass Plant (60%, efficiency = 50%) → Requires 120 MJ Biomass (60 MJ / 0.5 efficiency)
    │   └── Biomass Supply Node
    └── Solar Plant (40%, efficiency = 100%) → Requires 40 MJ Solar Energy
        └── Solar Supply Node

Total Primary Demand:
- Biomass: 120 MJ (with efficiency losses)
- Solar: 40 MJ (no losses)
```

#### Example queries:
##### Total domestic primary demand (all carriers)
```
V(households_space_heater_network_gas, primary_demand) = 8 billion
```
##### Primary demand of a specific carrier (e.g. “gas”)
```
V(households_space_heater_network_gas, primary_demand_of(:natural_gas)) = 7.9 billion
```
##### Bio resource demand including abroad (all bio)
```
V(agriculture_chp_wood_pellets, demand_of_bio_resources_including_abroad) = 450 thousand
```


### PrimaryCO2 and BioEmissions
- **Goal:** compute total primary CO₂ emissions originating from fossil and bio-based sources, explicitly including potential capture of bio-based CO₂.
- **Stop conditions:** stops at a dead end, or when a node belongs to the primary_energy_demand group (for fossil) or bio_resources_demand group (for bio), or when a node has relevant CO₂ emission or capture values defined.
- **Type:** with losses.

```
Industry CO₂ Emissions (total emissions calculated recursively)
│
└── Energy Source Mix
    ├── Fossil Fuel (70%, emissions factor = 50 kg CO₂/MJ) → 70 MJ * 50 kg CO₂/MJ = 3500 kg CO₂
    │   └── Fossil Fuel Supply (direct emissions)
    └── Bio-based Fuel (30%, emissions factor = 30 kg CO₂/MJ, 60% captured upstream)
        │
        └── Bio Fuel Supply → (30 MJ * 30 kg CO₂/MJ) = 900 kg CO₂ emitted
                              (60% captured = 540 kg captured)
                              Net bio emissions = 360 kg CO₂

Total Emissions:
- Fossil: 3500 kg CO₂ (no capture)
- Bio: 360 kg CO₂ (after upstream capture)
```

#### Example queries:
##### Net fossil emissions minus captured bio emissions
```
V(agriculture_burner_crude_oil, primary_co2_emission) = 22 million
```
##### Total fossil CO₂ emissions (no subtraction of capture)
```
V(agriculture_burner_crude_oil, primary_co2_emission_of_fossil) = 22 million
```
##### Total bio CO₂ emissions (including upstream capture)
```
V(agriculture_burner_crude_oil, primary_co2_emission_of_bio_carriers) = 24 million
```
##### Bio CO₂ captured upstream (can be used to offset net total)
```
V(industry_final_demand_for_chemical_other_electricity, inherited_captured_bio_emissions) = 164 million (in 2050, 0 now)
```

### WeightedCarrier
- **Goal:** calculate the weighted average cost and emissions or potential biogenic CO₂ capture  per MJ based on the proportions of different input carriers to a node.
- **Stop conditions:** stops at a dead end, or a node/edge where cost_per_mj, co2_conversion_per_mj, or potential_co2_conversion_per_mj is defined (depending on the method called).
- **Type:** without losses.

```
Gas Distribution Network (Weighted Carrier Cost per MJ = (10 EUR * 0.5 + 0 EUR * 0.5) = 5 EUR/MJ)
│
└── Input Mix:
    ├── Natural Gas (50%, cost = 10 EUR/MJ)
    └── Green Gas (50%, cost = 0 EUR/MJ)
```

#### Example queries:
##### Weighted average cost of energy input mix (EUR/MJ)
```
V(households_space_heater_network_gas, weighted_carrier_cost_per_mj) = 0.004
```
##### Weighted average CO₂ emissions of input mix (kg CO₂/MJ)
```
V(households_space_heater_network_gas, weighted_carrier_co2_per_mj) = 0.056
```
##### Weighted average potential CO₂ capture of input mix (kg/MJ)
```
V(households_space_heater_network_gas, weighted_carrier_potential_co2_per_mj) = 0.0002
```

### Sustainable
- **Goal:** recursively calculate the sustainability share of energy input to a node by aggregating upstream sustainability.
- **Stop conditions:** stops at nodes with a manually set sustainability_share attribute, or carriers marked as sustainable or dead ends / primary_energy_demand nodes.
- **Type:** with losses.

<div style={{ textAlign: "center" }}>
  <img
    src="/img/docs/contrib/recursive-methods-sustainable.png"
  />
</div>

#### Example queries:
##### Sustainability share (ratio from 0–1)
```
V(energy_torrefaction_wood, sustainability_share) = 0.95
```
