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

* `energy_flow` - Returns a CSV file containing the energetic inputs and outputs of every node in the graph of the future scenario year.
* `energy_flow_present` - Returns a CSV file containing the energetic inputs and outputs of every node in the graph of the present dataset year.
* `molecule_flow` - Returns a CSV file containing the flow of molecules through the molecule graph.
* `sankey` – Creates a CSV by reading the `sankey` configuration file from ETSource.
* `storage_parameters` - Creates a CSV by reading the `storage` configuration file from ETSource.
* `costs_parameters` - Returns a CSV file containing the cost parameters of nodes belonging to costs groups.
* `direct_emissions_present` - Returns a CSV file containing the direct emissions by node in the present scenario year.
* `direct_emissions_future` - Returns a CSV file containing the direct emissions by node in the future scenario year.
* `electricity_capacities` - Returns a CSV file with the installed and peak capacity per participant in the electricity merit order.
* `district_heating_capacities` - Returns a CSV file with the installed and peak capacity per participant in the district heating network merit order.
* `hydrogen_capacities` - Returns a CSV file with the installed and peak capacity per hydrogen participant.
* `network_gas_capacities` - Returns a CSV file with the installed and peak capacity per network gas participant.


## Get annual data

Sending a GET request for a `csv` file with one of the keys specified above to a scenario will serialize the specified `csv` for you. For example for `sankey`:

<ApiEndpoint data={endpointData.exports} />

```http title="Example request"
GET /api/v3/scenarios/0/sankey.csv HTTP/2
Host: engine.energytransitionmodel.com
Accept: text/csv
```

```csv title="Example response"
Group,Carrier,...
Primary demand,Electricity,...
...
```

## Hourly data

Endpoints that can be used to retrieve hourly data are based on the following data keys:

* `electricity_profiles` - Downloads the load on each participant in the electricity merit order.
* `electricity_price` - Downloads the hourly price of electricity according to the merit order.
* `district_heating_profiles` - Downloads the load on each participant in the district heating network merit order as a CSV.
* `agriculture_heat` - Downloads the load on each participant in the agriculture heat merit order as a CSV.
* `household_heat` – Downloads the supply and demand of heat in households, including deficits and surpluses due to buffering and time-shifting.
* `buildings_heat` - Downloads the supply and demand of heat in buildings, including deficits and surpluses due to buffering and time-shifting.
* `hydrogen_profiles` - Downloads the total demand and supply for hydrogen, with additional columns for the storage demand and supply.
* `hydrogen_integral_cost` - Downloads the levelised costs, production costs per MWh and hourly production curve per hydrogen production technology.
* `network_gas_profiles` - Downloads the total demand and supply for network gas, with additional columns for the storage demand and supply.
* `residual_load` - Downloads the residual loads of various carriers.


## Get hourly data

Sending a GET request for a `csv` file with one of the keys specified above to a scenario will serialize the specified `csv` for you. For example for `hydrogen`:

<ApiEndpoint data={endpointData.curves} />

```http title="Example request"
GET /api/v3/scenarios/0/curves/hydrogen_profiles.csv HTTP/2
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

## Discovering available outputs

Rather than hard-coding the keys listed above, clients can discover the available annual
and hourly outputs at runtime. This lets a new export or curve appear without a client
release. Both endpoints return JSON, require no scenario, and need no authentication.

* `GET /api/v3/curves/metadata` - lists the available hourly outputs under `hourly_outputs`.
  Each entry has a `name`, a `type` (e.g. `merit_curve`, `price_curve`, `fever_curve`) and a `description`.
* `GET /api/v3/exports/metadata` - lists the available annual exports under `annual_exports`.
  Each entry has a `name` and a `description`.

A name returned under `annual_exports` is downloaded from the annual data endpoint
(`/api/v3/scenarios/{id}/{key}.csv`); a name returned under `hourly_outputs` is downloaded
from the hourly data endpoint (`/api/v3/scenarios/{id}/curves/{key}.csv`).

```http title="Example request"
GET /api/v3/exports/metadata HTTP/2
Host: engine.energytransitionmodel.com
Accept: application/json
```

```json title="Example response"
{
  "annual_exports": [
    { "name": "energy_flow", "description": "Energy flows by carrier (future year)" },
    { "name": "electricity_capacities", "description": "Installed/peak capacity per participant in the electricity merit order" }
  ]
}
```

```json title="Example response (curves/metadata)"
{
  "hourly_outputs": [
    { "name": "electricity_profiles", "type": "merit_curve", "description": "Load on each participant in the electricity merit order" }
  ]
}
```
