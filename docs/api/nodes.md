---
id: nodes
title: Nodes
---

import endpointData from '@site/data/api/nodes';
import ApiEndpoint from '@site/src/components/ApiEndpoint';

Your scenario is modelled internally as a graph data structure, consisting of hundreds of nodes and edges. While the graph configuration itself is fixed, each of the nodes can be inspected individually.

## The Node object

Endpoints which provide data about a node will return the following information:

* `key` - the unique key for the node.
* `sector` - in which sector the node is found, for example "industry", "households", or "energy".
* `use` - indicates if the node is energetic or non-energetic.
* `presentation_group` - an internal attribute used by the ETM to decide what information to show about a node.
* `data` - a map of all the useful attributes for a node, their units, and descriptions.

A full listing of nodes from the energy graph [can be found in our Github repository](https://github.com/quintel/etsource/tree/master/graphs/energy/nodes). Note that different nodes will have different types of data depending on what makes sense; for example a node which outputs electricity will have an `electricity_output_conversion`, while a gas node will not.

## Get data for a node

<ApiEndpoint data={endpointData.show} />

```http title="Example request"
GET /api/v3/scenarios/12345/nodes/industry_chp_combined_cycle_gas_power_fuelmix HTTP/2
Host: engine.energytransitionmodel.com
Accept: application/json
```

```json title="Example response"
{
  "key": "industry_chp_combined_cycle_gas_power_fuelmix",
  "sector": "industry",
  "use": "energetic",
  "presentation_group": "chps",
  "data": {
    "technical": {
      "total_installed_electricity_capacity": {
        "present": 5443.360123449158,
        "future": 5443.360123449158,
        "unit": "MW",
        "desc": "Installed electrical capacity"
      },
      "electricity_output_conversion": {
        "present": "46.0",
        "future": "46.0",
        "unit": "%",
        "desc": "Electrical efficiency"
      },
      "heat_output_conversion": {
        "present": "42.0",
        "future": "42.0",
        "unit": "%",
        "desc": "Heat efficiency"
      },
      "full_load_hours": {
        "present": 3077.36039626988,
        "future": 7884.000000000617,
        "unit": "hour / year",
        "desc": "Full load hours"
      }
    },
    "cost": {
      "total_investment_over_lifetime_per_mw_electricity": {
        "present": "958583",
        "future": "958583",
        "unit": "EUR / MW",
        "desc": "Investment over lifetime per MW"
      },
      "fixed_operation_and_maintenance_costs_per_mw_electricity": {
        "present": "9129",
        "future": "9129",
        "unit": "EUR / MW / year",
        "desc": "Fixed operation and maintenance costs"
      },
      "variable_operation_and_maintenance_costs_per_full_load_hour": {
        "present": "328",
        "future": "328",
        "unit": "EUR / full load hour",
        "desc": "Variable operation and maintenance costs"
      },
      "wacc": {
        "present": "4.0",
        "future": "4.0",
        "unit": "%",
        "desc": "Weighted average cost of capital"
      },
      "takes_part_in_ets": {
        "present": "true",
        "future": "true",
        "unit": "boolean",
        "desc": "Do emissions have to be paid through the ETS?"
      }
    },
    "other": {
      "technical_lifetime": {
        "present": 30.0,
        "future": 30.0,
        "unit": "years",
        "desc": "Technical lifetime"
      }
    }
  },
  "uses_coal_and_wood_pellets": false
}
```
