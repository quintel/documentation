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

:::warning Removed
The `production_parameters` export has been removed. The per-participant installed
and peak capacities it provided are now available from the hourly capacity curves
(`electricity_capacities`, `hydrogen_capacities`, `network_gas_capacities` and
`heat_network_capacities`) described below.
:::


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
* `electricity_capacities` - Downloads the installed and peak capacity per participant in the electricity merit order.
* `heat_network_profiles` - Downloads the load on each participant in the heat merit order as a CSV.
* `heat_network_capacities` - Downloads the installed and peak capacity per participant in the heat merit order.
* `agriculture_heat` - Downloads the load on each participant in the agriculture heat merit order as a CSV.
* `household_heat` – Downloads the supply and demand of heat in households, including deficits and surpluses due to buffering and time-shifting.
* `buildings_heat` - Downloads the supply and demand of heat in buildings, including deficits and surpluses due to buffering and time-shifting.
* `hydrogen_profiles` - Downloads the total demand and supply for hydrogen, with additional columns for the storage demand and supply.
* `hydrogen_capacities` - Downloads the installed and peak capacity for hydrogen participants.
* `hydrogen_integral_cost` - Downloads the levelised costs, production costs per MWh and hourly production curve per hydrogen production technology.
* `network_gas_profiles` - Downloads the total demand and supply for network gas, with additional columns for the storage demand and supply.
* `network_gas_capacities` - Downloads the installed and peak capacity for network gas participants.
* `residual_load` - Downloads the residual loads of various carriers.

:::note Renamed keys
The hourly curve keys were renamed to use consistent `_profiles` / `_capacities`
suffixes. The previous keys (`merit_order`, `heat_network`, `hydrogen`,
`network_gas`) are deprecated but still resolve to their `_profiles` equivalents
for backwards compatibility.
:::


## Get hourly data

Sending a GET request for a `csv` file with one of the keys specified above to a scenario will serialize the specified `csv` for you. For example for `hydrogen_profiles`:

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

## Discovering available exports and curves

Rather than hard-coding the keys above, clients can discover the available
hourly curves and annual exports at runtime. These endpoints are not
scenario-specific and require no authentication.

```http title="Example request"
GET /api/v3/curves/metadata HTTP/2
Host: engine.energytransitionmodel.com
Accept: application/json
```

```json title="Example response"
{
  "hourly_outputs": [
    {
      "name": "electricity_profiles",
      "type": "merit_curve",
      "description": "Load on each participant in the electricity merit order"
    }
  ]
}
```

The companion endpoint `GET /api/v3/exports/metadata` returns the annual exports
under an `annual_exports` key, with `name` and `description` fields for each.

