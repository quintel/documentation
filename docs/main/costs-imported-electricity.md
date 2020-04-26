---
title: Costs of imported electricity
---

## Introduction
When a country or region has a (temporal) higher electricity demand than production electricity needs to be imported from neighbouring countries or regions.

The imported electricity has also created costs in this neighbouring country or region.

## Default settings

The default setting for the costs of imported electricity is the average costs of Central West European (CWE) electricity mix: 35 €/MWh or 3.5 ct/KWh. This is a rough estimate from the Quarterly Report on European Electricity Markets
(<a href="#ref">European Commission, 2016</a>).

The reason to choose the CWE average of 2015 is that most datasets of the ETM are 2015 datasets and that the electricity market is a European market. Also the market prices fluctuate a lot, however the do seem to average around 35 €/MWh in 2015. In the ETM the user can overwrite this default setting for the future situation.

## Uploaded price curves

Instead of setting a constant price for imported electricity, you may upload a price curve which defines the cost of imports for each hour in a typical year. If you choose to upload a file the "Costs of imported electricity" slider will be disabled and no longer has any effect on your scenario. You may click "Revert to default curve" at any time to remove the uploaded curve and re-enable the slider.

Your file should be formatted as a CSV file with 8,760 numeric values – representing the hourly price in euros and cents per MWh (€/MWh) – with each value on a separate line. For example:

```
23.64
32.71
32.65
32.71
30.89
etc
```

Before uploading, please ensure the file has a ".csv" file extension then visit the "Costs of imported electricity" page and click "Upload a custom curve". The price in each hour will be rounded to the nearest whole cent.

## Chart with optional values

We offer you a chart to support your choice. Chart 1 shows the monthly electricity prices at the CWE market.

CWE montly electricity prices

Chart 1 shows the CO2 emissions of some carrier-technology combinations.

![](/img/docs/20180221_trading_prices_central_western_europe.png)

Chart 1: Monthly electricity volumes and prices at the Central Western European market between January 2013 and March 2016 (European Commission, 2016)

References
----------

- [European Commission, 2016: Quarterly Report on European Electricity Markets](https://ec.europa.eu/energy/sites/ener/files/documents/quarterly_report_on_european_electricity_markets_q4_2015-q1_2016.pdf); ([cached](https://refman.energytransitionmodel.com/publications/2079))
