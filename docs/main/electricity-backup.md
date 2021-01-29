---
title: Electricity backup
---

This page documents information about the "flexibility of electricity production" project. This project was completed in cooperation with GasTerra in the period June 2011 through March 2012 and consists of two parts: the loss of load calculation and the flexibility of electricity backup calculation. In the ETM, the calculations are found [here](http://pro.et-model.com/scenario/supply/electricity_backup/security-of-supply#security-of-supply). The loss of load calculation received a major update in 2014 and detailed information can be found [here](loss-of-load-expectation).

## Introduction

The calculations in this part of the ETM were implemented to communicate the limitations of volatile electricity production in contributing to security of supply and the necessity for backup when building scenarios with large shares of technologies such as wind turbines and solar PV panels. The calculation consists of two parts: the loss of load calculation and the flexibility of electricity backup calculation.

Details on the loss of load calculation can be found [here](loss-of-load-expectation.md).

The flexibility of electricity backup calculation offers a comparison between fossil fuel technologies in terms of their ability to serve as backup for volatile electricity production. The comparison is made by considering only the costs and CO<sub>2</sub> emissions exclusive to providing backup for volatile electricity production.

On this page an explanation is given about the project.

## Useful definitions

* Unreliable electricity production capacity – Capacity that cannot always be counted on due to unpredictability and (unexpected) maintenance requirements. Unreliable capacity includes most volatile electricity production (solar PV and wind) as well as the average expected unavailability of fossil fuel power plants.
* Reliable electricity production capacity – As opposed to unreliable capacity, reliable capacity is the fraction of the total production capacity that can be deemed reliable. This includes the majority of the fossil fuel production capacity (with exclusion for the unavailability) and some volatile electricity production capacity (depending on the capacity credit).
* Additional capacity – Backup capacity for long periods of no wind/sun.
* Reserve capacity – Capacity dedicated to dealing with fluctuations due to forecasting errors on short time scales (less than 1 hour).


## Flexibility of electricity backup

### Introduction

The flexibility of electricity backup calculation was completed in March 2012 and will be deployed to the live ETM in July 2012.

The flexibility of electricity backup calculation offers a comparison between fossil fuel technologies in terms of their ability to serve as backup for volatile electricity production. The comparison is made by considering only the costs and CO<sub>2</sub> emissions exclusive to providing backup for volatile electricity production.

### In the ETM

![Screenshot of scatter plot showing comparison of backup options](/img/docs/Flexibility_scatter_plot.jpg)

The backup for volatile electricity production module is found under the sidebar item “electricity backup” under the tab “supply”. It consists of a scatter plot comparing different electricity backup options based on the additional costs and emissions that would be incurred on top of the costs and emissions of volatile electricity production. Figure 2 shows a screenshot of the scatter plot. For example, based on the figure it is seen that a Gas CCGT plant had additional costs of approximately 5 EUR/MWhe and emissions of 23 kgCO<sub>2</sub>/MWhe. Some important things to understand about the values expressed in the scatter plot:

* Everything is expressed per MWhe of the volatile electricity production. For example: an offshore wind turbine has levelised electricity costs of approximately 165 EUR/MWhe, on top of this an additional 5 EUR are required for the costs of the backup when using as Gas CCGT.

* The additional costs and emissions values are only those costs and emissions associated with the backup. For example: backup reserve capacity does more than only provide reserves, it also provides useful electricity. The costs associated with this useful electricity are disregarded. A Gas CCGT working at optimal efficiency produces electricity at costs of approximately 50 EUR/MWhe. When working to provide backup capacity, the Gas CCGT does not operate optimally and the electricity generation costs increase to 55 EUR/MWhe. Only the difference, 5 EUR/MWhe, is taken into account for the additional costs of backup capacity. This also applies for the CO<sub>2</sub> emissions. (note: this 5 EUR/MWhe difference is not the same as the 5 EUR/MWhe that is seen in the chart as more than only reserve costs are taken into account. The first value is in MWhe of the Gas CCGT power plant itself and the value in the chart is in MWhe of the volatile electricity production, that these two are the same is therefore only a coincidence.)

### Calculation

Details about the calculation can be found in the project documentation in the [ETM reference manager](http://refman.et-model.com/publications/1705). The details are excluded here because of formatting limitations.

## Literature

* Meray, N., 2011. Wind and Gas: Back-up or Back-out, “That is the Question”.
* UK Energy Research Center (UKERC), 2006. The Costs and Impacts of Intermittency.
* Vourinen, A., 2009. Planning of Optimal Power Systems.
* Strbac, G., et al., 2006. Impact of wind generation on the operation and development of the UK electricity systems
