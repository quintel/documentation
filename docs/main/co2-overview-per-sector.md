---
title: Overview of emissions per sector chart
sidebar_label: Emissions per sector chart
---

This article explains the following chart:
![](/img/docs/co2-emissions-chart.png)

:::info Scope of the CO<sub>2</sub> emissions chart
This chart does **not** include other greenhouse gas emissions apart from CO<sub>2</sub>. It also only covers **part** of the non-energetic CO<sub>2</sub> emissions. See the breakdown below for more information.
:::

In the ETM emissions from different sectors are taken into account to calculate the total emissions in your scenario. Every sector has a different scope when it comes to which emissions are taken into account and which are not. This page explains how this scope is defined in the ETM per sector.

## Emissions per sector
The following is included per category:

|  **Category**   | **Scope**  |
|---|---|
| 1990 CO<sub>2</sub> emissions | Includes all energetic CO<sub>2</sub> emissions and fertilizer feedstock emissions. Other greenhouse gases and non-energetic CO<sub>2</sub> are excluded. 1990 emissions of international transport can be included optionally and are displayed as a separate series. See [1990 emissions](#1990-emissions)
| Net CO<sub>2</sub> emissions | Shows the total net CO<sub>2</sub> emissions. If a scenario contains [negative emissions](co2-negative-emissions.md), the red line can be lower than the highest bar as the line shows the sum of both positive and negative emission sectors.
| Households | Includes all energetic CO<sub>2</sub> related to final energy demand in the households sector. Emissions associated with the production of electricity, hydrogen and district heating are assigned to this sector based on how much of each carrier is used. For electricity, local production of solar PV is incorporated in the [emission factor](co2-emission-factors.md) of electricity. Biomass emissions are excluded by default.
| Buildings | See households.
| National transport | See households. Does not include international transport.
| International transport | Includes all energetic CO<sub>2</sub> related to final energy demand in the international transportation sector. By default, this energy demand (and hence the emissions) are considered out of scope. This assumption can be changed in the model.
| Agriculture | See households.
| Other | Includes all energetic CO<sub>2</sub> related to final energy demand in the other demand sector.
| Industry | Includes all energetic CO<sub>2</sub> related to final energy demand in the industry sector, including emissions related to the production of electricity, hydrogen and steam. Feedstock emissions are excluded. Captured emissions (using [carbon capture technologies](co2-ccus.md)) in the industry sector are subtracted.
| Energy | Emissions related to the production of power, hydrogen, heat and steam are *__not__* included here, as these are assigned to the sectors in which these carriers are used. This category does include emissions related to: <ul><li>own energy use of the power sector</li><li>unused heat for heat networks</li><li>the production of synthetic kerosene and methanol</li><li>energy use of Direct Air Capture. The CO<sub>2</sub> captured from the ambient air is subtracted from this category</li><li>energy use of CO<sub>2</sub> storage</li></ul>
| Non-energetic emissions | Includes emissions related to: <ul><li>feedstock use in the fertilizer industry</li><li>the CO<sub>2</sub> emitted during production of hydrogen and ammonia for non-energetic final demand</li></ul>
| Delayed emissions | Includes emissions related to:<ul><li>CO<sub>2</sub> utilised in the 'other' category of the [carbon utilisation section](https://pro.energytransitionmodel.com/scenario/emissions/ccus/utilisation-and-storage-of-co2)</li></ul>
