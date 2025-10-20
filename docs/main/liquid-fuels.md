---
title: Liquid fuels and feedstock
---

### Introduction

The ETM can model various processes for producing liquid fuels and feedstocks, ranging from conventional oil refining to advanced synthetic fuel production. These processes convert different types of feedstock (including crude oil, biomass, waste streams, hydrogen, and CO₂) into transportation fuels and chemical feedstocks such as diesel, kerosene, methanol, and naphtha.

The model includes both established technologies like oil refineries and bio-ethanol fermentation, as well as emerging technologies such as Fischer-Tropsch synthesis, hydrotreatment of vegetable oils (HVO), and various fuel-to-jet conversion processes. Each process has specific input requirements and output product distributions that affect the overall energy system.

This page provides an overview of the modelled liquid fuel production processes, their feedstock inputs, fuel outputs, and important modeling considerations.

### Overview of processes

| Proces | Feedstock input | Fuel output | Additional remarks|
|--------|------------|--------------|-------------------|
| **Oil refineries** | Crude oil | Diesel, gasoline, LPG, kerosene, heavy fuel oil (HFO), naphtha, other oil products, refinery gas | Output fractions based on refinery archetype if no refinery in start year |
| **Fischer-Tropsch** | Hydrogen, electricity, CO<sub>2</sub> | Kerosene (main), naphtha | No diesel output (causes circularity); kerosene/naphtha fractions increased proportionally |
| | Non-biogenic waste | Kerosene (main), diesel, naphtha | CO<sub>2</sub> emissions captured by default |
| | Biogenic waste | Biokerosene (main), biodiesel, bionaphtha | CO<sub>2</sub> emissions captured by default; captured emissions are counted as negative emissions |
| | Dry biomass | Biokerosene (main), biodiesel, bionaphtha | CO<sub>2</sub> emissions captured by default; captured emissions are counted as negative emissions |
| **Methanol synthesis** | Hydrogen, electricity, CO<sub>2</sub> | Methanol | - |
|  | Non-biogenic waste | Methanol | CO<sub>2</sub> emissions captured by default |
| | Biogenic waste | Biomethanol | CO<sub>2</sub> emissions captured by default; captured emissions are counted as negative emissions |
| | Dry biomass | Biomethanol | CO<sub>2</sub> emissions captured by default; captured emissions are couned as negative emissions |
| **Pyrolysis oil fractionation** | Pyrolysis oil (non-biogenic), hydrogen | Diesel, gasoline | Local pyrolysis oil production from non-biogenic waste can be substituted by import |
| **Pyrolysis bio-oil fractionation** | Pyrolysis bio-oil (biogenic), hydrogen | Biodiesel, bioethanol* | *Actual output is biogasoline but modeled as bioethanol; local production can be substituted by import |
| **Hydrotreatment to HVO (biokerosene)** | Oily biomass, hydrogen, network gas | Biokerosene (main), bionaphtha | Other smaller output fractions not modeled |
| **Hydrotreatment to HVO (biodiesel)** | Oily biomass, hydrogen | Biodiesel (main), bionaphtha | ther smaller output fractions not modeled|
| **Bio-ethanol fermentation** | Wet biomass, network gas | Bio-ethanol | Distillers' dried grains (DDG) output not modeled, considered as loss |
| **Bio-ethanol-to-jet** | Bio-ethanol, hydrogen | Biokerosene (main), biodiesel | Biogasoline also produced but not modeled; biokerosene & biodiesel fractions increased proportionally |
| **Methanol-to-jet** | Methanol, hydrogen | Kerosene (main), gasoline | Light gases mixture by-product not modeled; kerosene & gasoline fractions increased proportionally |
| **Biomethanol-to-jet** | Biomethanol, hydrogen | Biokerosene (main), bio-ethanol* | *Actual output is biogasoline but modeled as bioethanol; light gases by-product not modeled; kerosene & gasoline fractions increased proportionally |

