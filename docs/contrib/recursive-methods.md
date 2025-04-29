---
title: Recursive methods
---

## What are recursive methods?
Recursive methods traverse a graph from a node/edge backwards through its parents to allocate 'upstream' properties like primary demand, emissions, or costs, to the node/edge.

### With and without losses
Nodes in the graph can have efficiencies attritubed to them, to model conversion or transport losses. Recursive methods can either account for these losses or ignore them, depending on the context.

- **With losses:** efficiency losses are included at each node, adjusting the propagated value according to these inefficiencies. This is suitable for methods like primary demand, where more primary demand is needed to supply a given final demand node, due to efficiency losses encountered during recursion.
- **Without losses:** efficiency losses are ignored at each node, allowing direct propagation of the value through the graph. This is suitable for methods like weighted costs, where the costs per MJ is retrieved through recursion.

### General stop conditions
Recursive methods need to know when to stop recursing. There are specific stop conditions depending on the recursive module, but in general the conditions fall into these categories:
- Reaching a node marked as a primary source (e.g., primary energy node).
- Encountering a node without parents (dead-end).
- Specific conditions based on the queried attribute (e.g., bio resources node for bio demands).

## Modules

### PrimaryDemand and BioDemand
- **Goal:** calculate the primary energy demand required to fulfill a node’s consumption, either from all sources (PrimaryDemand) or specifically from bio-based resources (BioDemand).
- **Stop conditions:** in general, the methods will stop respectively at the node group `primary_energy_demand` and the node group `bio_resources_demand`.
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

### PrimaryCO2 and BioEmissions
- **Goal:** compute total primary CO₂ emissions originating from fossil and bio-based sources, explicitly including potential capture of bio-based CO₂.
- **Stop conditions:** ...
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

### WeightedCarrier
- **Goal:** calculate the weighted average cost and emissions or potential biogenic CO₂ capture  per MJ based on the proportions of different input carriers to a node.
- **Stop conditions:** ...
- **Type:** without losses.

```
Gas Distribution Network (Weighted Carrier Cost per MJ = (10 EUR * 0.5 + 0 EUR * 0.5) = 5 EUR/MJ)
│
└── Input Mix:
    ├── Natural Gas (50%, cost = 10 EUR/MJ)
    └── Green Gas (50%, cost = 0 EUR/MJ)

```

### Sustainable
- **Goal:** recursively calculate the sustainability share of energy input to a node by aggregating upstream sustainability.
- **Stop conditions:** ...
- **Type:** with losses.

```
Torrefied Biomass Pellets (Sustainability Share = 0.64 = 0.60 * 1 + 0.2 * 0.40)
│
└── Input Mix:
    ├── Wood (60%, sustainable share = 1.0)
    └── Network Gas (40%, sustainable share = 0.2)

```
