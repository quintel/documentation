---
title: From data to scenario
---

Every ETM scenario starts from a description of a real energy system in a real year: the Netherlands in 2023, Germany in 2019, a municipality, a province. This page explains where that starting point comes from and what it means for your scenario.

## One dataset per region

The ETM contains datasets for more than 400 regions: European countries, the Netherlands and its municipalities, provinces and RES-regions, and a number of other areas. A dataset is a complete, quantified snapshot of a region's energy system in a particular *start year*: how much energy each sector used, which technologies supplied it, what capacity of power plants, wind and solar was installed, and what was imported and exported.

When you [create a scenario](../user_manual/starting-scenario.md), you pick a region and thereby a dataset. The dataset fills the *present* version of the [energy graph](introduction.md) and becomes the fixed reference point that your future scenario is compared against.

## Where the numbers come from

Datasets are not entered by hand; they are built through a documented, repeatable process:

- **Country datasets** are based primarily on national energy balances — the official statistics that record how much of each energy carrier a country produced, converted, imported and consumed. For European countries these come from Eurostat and the IEA. On top of the energy balance, a series of analyses divides sector totals over technologies: how much of households' gas use goes to space heating versus hot water, which power plants make up the installed capacity, and so on. These analyses, including their sources, are public — see the [ETDataset repository](https://github.com/quintel/etdataset-public).
- **Dutch municipalities, provinces and RES-regions** are based on regional statistics, principally Klimaatmonitor, supplemented with building registries and emissions data. The [regional data page](../data-sources-local.md) describes the sources and assumptions per sector, and larger regions are built up by combining municipalities.
- **Technology properties** — the cost, efficiency and lifetime of a heat pump, a wind turbine or a power plant — are researched separately per technology and shared by all regions, so that scenarios for different regions are comparable. Each technology has its own public source analysis in ETDataset.

Not every number a dataset needs is directly available in statistics. Where data is missing, it is estimated from related figures — and those estimates are documented in the same analyses. The model then completes the picture itself: from the data that is provided, it calculates all remaining energy flows in the graph so that everything adds up to a consistent whole.

## Start years and dataset versions

Statistics are published with delay, and building a reliable dataset takes research time. A region's dataset therefore has a start year a few years in the past — for the Netherlands, for example, 2023. Older start years often remain available so that existing scenarios keep working; the web interface offers the most recent one.

This has a practical consequence: your scenario describes the transition *from the start year* to your chosen end year. Anything that happened after the start year — a new wind farm, a closed coal plant — is not in the starting data, but you can add it with sliders.

## Checking the data for your region

You do not have to take the starting data on faith:

- The **[ETM Data Manager](https://data.energytransitionmodel.com/)** lets you select any region and inspect the data behind it, sector by sector.
- The **[data sources pages](../data-sources-regions.md)** describe which regions exist and which sources are used.
- For Dutch regions, users with local knowledge can propose corrections; datasets are maintained and improved over time.

:::info For modellers and developers
How datasets are constructed, and how to create or update one, is described in the [ETDataset repository](https://github.com/quintel/etdataset-public) and the [contributor documentation](/contrib/intro).
:::
