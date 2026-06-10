---
title: Liquid fuels and feedstock
---

## Introduction

The ETM can model various processes for producing liquid fuels and feedstock, ranging from conventional oil refining to advanced synthetic fuel production. These processes convert different types of feedstock (including crude oil, biomass, waste, hydrogen and CO<sub>2</sub>) into transport fuels and chemical feedstocks such as diesel, kerosene, methanol and naphtha. The processes for liquid fuels and feedstock production can be set in the [Liquid fuels and feedstock](https://energytransitionmodel.com/scenario/supply/fuel_production/overview) section of the ETM.

The various processes have specific feedstock input and fuel output. For some processes, different feedstock routes can be set (such as for Fischer-Tropsch and methanol synthesis), which affect the fuel output from the process.

This page provides an overview of the modelled liquid fuel production processes, the possible feedstock input routes, fuel outputs and remarks on important modeling considerations.

## Overview of processes
In the table below, the various production processes for liquid fuel and feedstock production are summarised. Note that additional remarks are provided about how the processes are modelled. The slider texts in the [Liquid fuels and feedstock](https://energytransitionmodel.com/scenario/supply/fuel_production/overview) section give more information about modelling considerations and technical and financial specifications of each process.

| Process | Energy inputs | Energy outputs | Additional remarks|
|--------|------------|--------------|-------------------|
| **Oil refineries** | Crude oil | Diesel, gasoline, LPG, kerosene, heavy fuel oil (HFO), naphtha, other oil products, refinery gas | Output fractions based on refinery archetype if no refinery present in start year |
| **Fischer-Tropsch** | Hydrogen, electricity, CO<sub>2</sub> | Kerosene (main product), gasoline | Output fractions increased proportionally to account for product output not modelled in the ETM |
| | Non-biogenic waste | Kerosene, diesel, naphtha | CO<sub>2</sub> emissions captured by default |
| | Biogenic waste | Biokerosene, biodiesel, bionaphtha | CO<sub>2</sub> emissions captured by default|
| | Dry biomass | Biokerosene, biodiesel, bionaphtha | CO<sub>2</sub> emissions captured by default|
| **Methanol synthesis** | Hydrogen, electricity, CO<sub>2</sub> | Methanol | - |
|  | Non-biogenic waste | Methanol | CO<sub>2</sub> emissions captured by default |
| | Biogenic waste | Biomethanol | CO<sub>2</sub> emissions captured by default|
| | Dry biomass | Biomethanol | CO<sub>2</sub> emissions captured by default|
| **Pyrolysis oil production** | Non-biogenic waste | Pyrolysis oil, heat | Produces the pyrolysis oil used as feedstock for pyrolysis oil fractionation, see section below for details |
| **Pyrolysis bio-oil production** | Biogenic waste | Pyrolysis bio-oil, heat | Produces the pyrolysis bio-oil used as feedstock for pyrolysis bio-oil fractionation, see section below for details |
| | Dry biomass | Pyrolysis bio-oil, heat | Produces the pyrolysis bio-oil used as feedstock for pyrolysis bio-oil fractionation, see section below for details |
| **Pyrolysis oil fractionation** | Pyrolysis oil, hydrogen, heat | Kerosene, naphtha | Required pyrolysis oil is produced by non-biogenic waste by default |
| **Pyrolysis bio-oil fractionation** | Pyrolysis bio-oil, hydrogen, heat | Biokerosene, bionaphtha | Required pyrolysis bio-oil can be produced from dry biomass or biogenic waste |
| **Hydrotreatment to HVO (biokerosene)** | Oily biomass, hydrogen, network gas | Biokerosene (main product), bionaphtha | Output fractions increased proportionally to account for product output not modelled in the ETM |
| **Hydrotreatment to HVO (biodiesel)** | Oily biomass, hydrogen | Biodiesel (main product), bionaphtha | Output fractions increased proportionally to account for product output not modelled in the ETM |
| **Bio-ethanol production** | Wet biomass, network gas | Bio-ethanol | Output of non-energy by-products considered as loss |
| **Bio-ethanol-to-jet** | Bio-ethanol, hydrogen | Biokerosene (main product), biodiesel | Output fractions increased proportionally to account for product output not modelled in the ETM |
| **Methanol-to-jet** | Methanol, hydrogen | Kerosene (main product), naphtha | Output fractions increased proportionally to account for product output not modelled in the ETM |
| **Biomethanol-to-jet** | Biomethanol, hydrogen | Biokerosene (main product), bionaphtha | Output fractions increased proportionally to account for product output not modelled in the ETM |

### Pyrolysis (bio-)oil
The production and subsequent fractionation of pyrolysis (bio-)oil are closely tied together but can change due to import or exports of the pyrolysis (bio-)oil. There are three different use cases, which are described below.

#### Domestic production
By default, if fractionation of pyrolysis (bio-)oil is set in a scenario, the pyrolysis (bio-)oil will be domestically produced. The heat that is generated in the production of the pyrolysis (bio-)oil is then used in the fractionation (see below.)

<div class="bordered-image">
  <img src="/img/docs/pyrolysis-default.png"/>
</div>

#### Import
Instead of domestically produced, the pyrolysis (bio-)oil can be imported and then fractionated. The required heat for fractionation is then provided by a hydrogen burner (see below).

<div class="bordered-image">
  <img src="/img/docs/pyrolysis-import.png"/>
</div>

#### Export
It can also be the case that there is no fractionation but there is production of (bio-)pyrolysis oil for export. In that case the heat that is generated is unused and wasted (see below).

<div class="bordered-image">
  <img src="/img/docs/pyrolysis-export.png"/>
</div>
