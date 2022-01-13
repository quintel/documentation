---
title: Heat network order
---

import endpointData from '@site/data/api/heat-network-order';
import ApiEndpoint from '@site/src/components/ApiEndpoint';

Each scenario has a heat network order. This defines the order of preference by which [dispatchable technologies](../main/heat-networks.md#dispatchable) are used to supply heat to the district heat network.

## The HeatNetworkOrder object

A HeatNetworkOrder is an object containing only one key – `order` – which is an array of string keys identifying each group of heating technologies.

* `order` - an array of technology group keys as strings

## Get a heat network order

Fetches the heat network order for a chosen scenario.

<ApiEndpoint data={endpointData.show} />

```http title="Example request"
GET /api/v3/scenarios/0/heat_network_order HTTP/2
Host: engine.energytransitionmodel.com
Accept: application/json
```

```json title="Example response"
{
  "order": [
    "energy_heat_network_storage",
    "energy_heat_burner_waste_mix",
    "energy_heat_heatpump_water_water_electricity",
    "energy_heat_burner_coal",
    "energy_heat_burner_network_gas",
    "energy_heat_burner_wood_pellets",
    "energy_heat_burner_crude_oil",
    "energy_heat_burner_hydrogen"
  ]
}
```

## Update a heat network order

Updates the heat network order with the provided JSON body.

You may omit technology groups from the order, however note that they will be added in by the API automatically in the default order. For example, if the default order is `a,b,c,d`, and your request provides an order of `c,b`, the resulting heat network order will be `c,b,a,d`.

Currently, the JSON containing the order must be wrapped inside another object under the `heat_network_order` key. [This will change in the future](https://github.com/quintel/etengine/issues/1109).

<ApiEndpoint data={endpointData.update} />

```http title="Example request"
PUT /api/v3/scenarios/0/heat_network_order HTTP/2
Host: engine.energytransitionmodel.com
Accept: application/json

{
  "heat_network_order": {
    "order": [
      "energy_heat_burner_hydrogen",
      "energy_heat_burner_coal",
      "energy_heat_burner_network_gas",
      "energy_heat_network_storage",
      "energy_heat_burner_waste_mix",
      "energy_heat_heatpump_water_water_electricity",
      "energy_heat_burner_wood_pellets",
      "energy_heat_burner_crude_oil"
    ]
  }
}
```

```json title="Example response"
{
  "order": [
    "energy_heat_burner_hydrogen",
    "energy_heat_burner_coal",
    "energy_heat_burner_network_gas",
    "energy_heat_network_storage",
    "energy_heat_burner_waste_mix",
    "energy_heat_heatpump_water_water_electricity",
    "energy_heat_burner_wood_pellets",
    "energy_heat_burner_crude_oil"
  ]
}
```
