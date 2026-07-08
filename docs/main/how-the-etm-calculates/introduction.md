---
title: How the ETM calculates
---

The Energy Transition Model looks complex from the outside: over a thousand sliders, hundreds of charts, and results that update the moment you change something. Underneath, the model follows a small number of ideas that are easy to understand. This section explains them in plain language — no programming or modelling background needed.

If you understand these four pages, you will know what the model does with your choices, where its starting data comes from, and what its results do (and do not) mean:

1. **This page** — the energy graph, and what happens when you move a slider.
2. [From data to scenario](from-data-to-scenario.md) — how real statistics for your country or region become the starting point of a scenario.
3. [Annual and hourly calculations](annual-and-hourly-calculations.md) — how the model combines a year-total view of all energy with an hour-by-hour simulation of electricity and heat.
4. [Useful, final and primary energy](useful-final-primary-energy.md) — the three ways of counting energy that explain most of the numbers you see in the model.

## The energy system as a graph

The ETM describes the entire energy system of a country or region as a network — modellers call it a *graph*. The network consists of roughly 1,250 connected **nodes**. Each node represents a recognisable part of the energy system: a technology (wind turbines, gas-fired power plants, heat pumps), a group of consumers (households' demand for hot water, freight transport), or an activity such as importing or extracting fuel.

The connections between nodes carry **energy flows**: so many petajoules of electricity from power plants to households, so much natural gas from import terminals to industrial boilers, and so on. Every flow is labelled with its energy carrier — electricity, natural gas, hydrogen, heat, oil products, biomass, and others.

![A simplified example of an energy graph](/img/docs/Graph.jpg)

Together, the nodes and flows form a complete, closed picture of the energy system: all the energy that is used somewhere must be produced, imported or taken from storage somewhere else. This bookkeeping is what keeps ETM scenarios internally consistent — you cannot create or lose energy by accident.

A second, much smaller network of about 190 nodes tracks *molecules* rather than energy — most importantly CO₂, for [carbon capture, storage and utilisation](../co2-ccus.md). It exchanges information with the energy graph: for instance, how much CO₂ a power plant emits depends on how much that plant runs in the energy graph.

## What happens when you move a slider

Almost every slider in the ETM changes a property of one or more nodes: the number of heat pumps in homes, the installed capacity of offshore wind, the efficiency of a future power plant, the share of electric cars in passenger transport.

When you release a slider, the model recalculates the **whole** graph — every node, every flow — from scratch. This takes a few seconds. The calculation is *demand-driven*: it starts from what people and companies need (a warm home, transport, products from industry) and works step by step towards the supply side, asking at each node how much energy — and which carriers — are required to meet the demand placed on it. At the end of the chain, this determines how much fuel is extracted or imported and how much electricity each type of power plant must produce.

Because the whole system is recalculated every time, a single change can ripple through the entire model. More electric cars means more electricity demand, which means more production from power plants, which — depending on your other choices — can mean more gas consumption, more CO₂, or more curtailed solar power on sunny days. All charts and the dashboard are updated to reflect this.

## Present and future, side by side

Every scenario contains two versions of the graph:

- The **present** graph describes the energy system in your scenario's start year. It is filled with real statistics for your country or region — see [From data to scenario](from-data-to-scenario.md) — and does not change when you move sliders.
- The **future** graph describes the energy system in the scenario's end year (2050, for example). This is the one your sliders act on.

Most results in the ETM are a comparison between these two: the dashboard's CO₂ reduction, the change in energy demand, the difference in yearly costs. When a chart shows "present" and "future" columns, you are looking at the same node in the two versions of the graph.

## Reading the numbers behind the charts

Every chart, dashboard item and downloadable result in the ETM is a *query*: a stored recipe that reads numbers from the graph and combines them — for example, "add up the CO₂ emissions of all nodes in the transport sector". The model contains thousands of these queries. You do not need to know how they work, but it is useful to know that they exist: every number the ETM shows can be traced back to specific nodes and flows in the graph, and from there to [documented data sources](../data-sources-regions.md).

:::info For modellers and developers
The technical counterparts of this page — node types, edge types, calculation rules and the query language — are described in the [contributor documentation](/contrib/graph-components).
:::
