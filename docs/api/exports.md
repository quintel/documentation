---
id: exports
title: Exports
sidebar_label: Exports
---

import endpointData from '@site/data/api/exports';
import ApiEndpoint from '@site/src/components/ApiEndpoint';

For each scenario it is possible to export data in `csv` format, much like the downloads present in the results tab of the main interface. We support multiple exports for annual data
as well as hourly data.

## Annual data

Endpoints that can be used to retrieve annual data are based on the following data keys:

* `application_demands` - Returns a CSV file containing the primary and final demands of nodes belonging to the application_group group.
* `production_parameters` - Returns a CSV file containing the capacities and costs of some electricity and heat producers.
* `energy_flow` - Returns a CSV file containing the energetic inputs and outputs of every node in the graph.
* `molecule_flow` - Returns a CSV file containing the flow of molecules through the molecule graph.
* `sankey` – Creates a CSV by reading the `sankey` configuration file from ETSource.
* `storage_parameters` - Creates a CSV by reading the `storage` configuration file from ETSource.
* `costs_parameters` - Returns a CSV file containing the cost paramaters of nodes belonging to costs groups.


## Get annual data

Sending a GET request for a `csv` file with one of the keys specified above to a scenario will serialize the speicfied `csv` for you. For example for `application_demands`:

<ApiEndpoint data={endpointData.exports} />

```http title="Example request"
GET /api/v3/scenarios/0/application_demands.csv HTTP/2
Host: engine.energytransitionmodel.com
Accept: text/csv
```

```csv title="Example response"
demand_1,demand_2,...
0,0,...
...
```

## Hourly data

Endpoints that can be used to retrieve hourly data are based on the following data keys:

* `merit_order` -Downloads the load on each participant in the electricity merit order.
* `electricity_price` - Downloads the hourly price of electricity according to the merit order.
* `heat_network` - Downloads the load on each participant in the heat merit order as a CSV.
* `agriculture_heat` - Downloads the load on each participant in the agriculture heat merit order as a CSV.
* `household_heat_curves` – Downloads the supply and demand of heat in households, including deficits and surpluses due to buffering and time-shifting.
* `buildings_heat_curves` - Downloads the supply and demand of heat in buildings, including deficits and surpluses due to buffering and time-shifting.
* `hydrogen` - Downloads the total demand and supply for hydrogen, with additional columns for the storage demand and supply.
* `network_gas` - Downloads the total demand and supply for network gas, with additional columns for the storage demand and supply.
* `residual_load` - Downloads the residual loads of various carriers.


## Get hourly data

Sending a GET request for a `csv` file with one of the keys specified above to a scenario will serialize the speicfied `csv` for you. For example for `hydrogen`:

<ApiEndpoint data={endpointData.curves} />

```http title="Example request"
GET /api/v3/scenarios/0/curves/hydrogen.csv HTTP/2
Host: engine.energytransitionmodel.com
Accept: text/csv
```

```csv title="Example response"
Time,curve_1,curve_2,...
2050-01-01 00:00,0.0,0.0,...
2050-01-01 01:00,0.0,0.0,...
2050-01-01 02:00,0.0,0.0,...
2050-01-01 03:00,0.0,0.0,...
2050-01-01 04:00,0.0,0.0,...
2050-01-01 05:00,0.0,0.0,...
2050-01-01 06:00,0.0,0.0,...
2050-01-01 07:00,0.0,0.0,...
...
```
