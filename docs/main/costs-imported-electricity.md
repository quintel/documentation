---
title: Costs of imported electricity
---

When a country or region has a (temporary) higher electricity demand than production, electricity needs to be imported from neighbouring countries or regions. You can change this in the Flexibility > Import/Export > ['Interconnector 1'](https://pro.energytransitionmodel.com/scenario/flexibility/electricity_import_export/interconnector-1) sub-section. This page shortly explains how the ETM deals with the cost of imported electricity and how you can adjust these settings. 

## Default settings

By default, the ETM takes into account a single, fixed price for imported electricity that remains stable throughout the year. You can change this price with a slider in the Costs section. Alternatively, you can upload a price curve which defines the cost of imports for each hour in a typical year.

## Uploaded price curves

If you choose to upload a price curve file, the "Costs of imported electricity" slider will be disabled and no longer has any effect on your scenario. You may click "Revert to default curve" at any time to remove the uploaded curve and re-enable the slider.

Your file should be formatted as a CSV file with 8,760 numeric values – representing the hourly price in euros and cents per MWh (€/MWh) – with each value on a separate line. For example:

```
23.64
32.71
32.65
32.71
30.89
etc
```

Before uploading, please ensure the file has a ".csv" file extension then visit the Flexibility > Import/Export > ['Interconnector 1'](https://pro.energytransitionmodel.com/scenario/flexibility/electricity_import_export/interconnector-1) page and click "Upload a custom curve". The price in each hour will be rounded to the nearest whole cent.

_Source:[European Commission, 2016: Quarterly Report on European Electricity Markets](https://ec.europa.eu/energy/sites/ener/files/documents/quarterly_report_on_european_electricity_markets_q4_2015-q1_2016.pdf); ([cached](https://refman.energytransitionmodel.com/publications/2079))_

:::caution Must-run interconnectors
Please note that it is possible to set an interconnector to a must-run producer/consumer via external coupling.
To ensure that the interconnector will ential the must-run behavior, the price of the interconnector is in this case set to 0.0 €/MWh. 
For more information about how must-run producers and consumers are handled in the electricity module see [Merit order algorithm](merit-order.md#merit-order-algorithm)
:::