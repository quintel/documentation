---
title: Liquid fuels and feedstock
---

### Introduction

The ETM can model various processes for producing liquid fuels and feedstock, ranging from conventional oil refining to advanced synthetic fuel production. These processes convert different types of feedstock (including crude oil, biomass, waste streams, hydrogen and CO₂) into transportation fuels and chemical feedstocks such as diesel, kerosene, methanol and naphtha. The processes for liquid fuels and feedstock production can be set in the [liquid fuels and feedstock](https://energytransitionmodel.com/scenario/supply/fuel_production/overview) section of the ETM. 

The various processes have specific feedstock input and output products. For some processes, different feedstock routes can be set (such as for Fischer-Tropsch), which affects the output products from the process.

This page provides an overview of the modelled liquid fuel production processes, the possible feedstock input routes, fuel outputs and remarks on important modeling considerations.

### Overview of processes
In the table below, the various production processes for liquid fuel and feedstock production are summarised. Note that remarks are provided about how the processes are modelled. The slider texts in the [liquid fuels and feedstock](https://energytransitionmodel.com/scenario/supply/fuel_production/overview) section give more information about modelling considerations and technical and financial specifications of each process. 

| Proces | Feedstock input | Fuel output | Additional remarks|
|--------|------------|--------------|-------------------|
| **Oil refineries** | Crude oil | Diesel, gasoline, LPG, kerosene, heavy fuel oil (HFO), naphtha, other oil products, refinery gas | Output fractions based on refinery archetype if no refinery in start year |
| **Fischer-Tropsch** | Hydrogen, electricity, CO<sub>2</sub> | Kerosene (main product), naphtha |Exception: no diesel output (causes incalculable circularity in the model). Kerosene/naphta output increased proportionally.|
| | Non-biogenic waste | Kerosene (main product), diesel, naphtha | CO<sub>2</sub> emissions captured by default |
| | Biogenic waste | Biokerosene (main product), biodiesel, bionaphtha | CO<sub>2</sub> emissions captured by default|
| | Dry biomass | Biokerosene (main product), biodiesel, bionaphtha | CO<sub>2</sub> emissions captured by default|
| **Methanol synthesis** | Hydrogen, electricity, CO<sub>2</sub> | Methanol | - |
|  | Non-biogenic waste | Methanol | CO<sub>2</sub> emissions captured by default |
| | Biogenic waste | Biomethanol | CO<sub>2</sub> emissions captured by default|
| | Dry biomass | Biomethanol | CO<sub>2</sub> emissions captured by default|
| **Pyrolysis oil fractionation** | Pyrolysis oil (non-biogenic), hydrogen | Diesel, gasoline | - |
| **Pyrolysis bio-oil fractionation** | Pyrolysis bio-oil (biogenic), hydrogen | Biodiesel, bioethanol* | *Actual output is biogasoline but modeled as bioethanol|
| **Hydrotreatment to HVO (biokerosene)** | Oily biomass, hydrogen, network gas | Biokerosene (main product), bionaphtha | Other smaller output fractions not modeled; biokerosene/bionaphtha output increased proportionally instead |
| **Hydrotreatment to HVO (biodiesel)** | Oily biomass, hydrogen | Biodiesel (main product), bionaphtha | ther smaller output fractions not modeled; biokerosene/bionaphtha output increased proportionally instead |
| **Bio-ethanol fermentation** | Wet biomass, network gas | Bio-ethanol | output of DDG not modeled, but considered as loss |
| **Bio-ethanol-to-jet** | Bio-ethanol, hydrogen | Biokerosene (main product), biodiesel | Biogasoline also produced but not modeled; biokerosene & biodiesel fractions increased proportionally |
| **Methanol-to-jet** | Methanol, hydrogen | Kerosene (main product), gasoline | Light gases mixture by-product not modeled; kerosene & gasoline fractions increased proportionally |
| **Biomethanol-to-jet** | Biomethanol, hydrogen | Biokerosene (main product), bio-ethanol* | *Actual output is biogasoline but modeled as bioethanol; light gases by-product not modeled; kerosene & gasoline fractions increased proportionally |
