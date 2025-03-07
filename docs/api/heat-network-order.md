---
title: Heat network order
---

import endpointData from '@site/data/api/heat-network-order';
import ApiEndpoint from '@site/src/components/ApiEndpoint';
import { ReleaseBadge } from '@site/src/components/EnvBadge';

As of the [2023.12](changelog.md#5th-december-2023-) <ReleaseBadge name="2023.12" /> release there will be three orders available instead of one. Omit the `subtype` attribute when using the old implementation.

Each scenario has three heat network orders. These define the order of preference by which [dispatchable technologies](../main/heat-networks.md#dispatchable) are used to supply heat to each district heat network. There is a different heat network for low, medium and high temperature heat, each with their own order.

## The HeatNetworkOrder object

A HeatNetworkOrder is an object containing two keys – `order` – which is an array of string keys identifying each group of heating technologies and `subtype` to define for which temperature level the order is to be set.

* `order` - an array of technology group keys as strings
* `subtype` - a string defining the temperature level of the order, must be one of `lt`, `mt` or `ht`

## Get a heat network order

Fetches the heat network order for a chosen scenario.

<ApiEndpoint data={endpointData.show} />

```http title="Example request"
GET /api/v3/scenarios/0/heat_network_order?subtype=mt HTTP/2
Host: engine.energytransitionmodel.com
Accept: application/json
```

```json title="Example response"
{
  "order": [
    "energy_heat_network_storage_mt_steam_hot_water",
    "energy_heat_boiler_mt_electricity",
    "energy_heat_burner_mt_coal",
    "energy_heat_burner_mt_crude_oil",
    "energy_heat_burner_mt_hydrogen",
    "energy_heat_burner_mt_network_gas",
    "energy_heat_burner_mt_waste_mix",
    "energy_heat_burner_mt_wood_pellets",
    "energy_heat_heatpump_water_water_mt_electricity"
  ]
}
```

## Update a heat network order

Updates the heat network order with the provided JSON body.

You may omit technology groups from the order, however note that they will be added in by the API automatically in the default order. For example, if the default order is `a,b,c,d`, and your request provides an order of `c,b`, the resulting heat network order will be `c,b,a,d`.

<ApiEndpoint data={endpointData.update} />

```http title="Example request"
PUT /api/v3/scenarios/0/heat_network_order HTTP/2
Host: engine.energytransitionmodel.com
Accept: application/json

{
  "subtype": "mt",
  "order": [
    "energy_heat_heatpump_water_water_mt_electricity",
    "energy_heat_network_storage_mt_steam_hot_water",
    "energy_heat_boiler_mt_electricity",
    "energy_heat_burner_mt_coal",
    "energy_heat_burner_mt_crude_oil",
    "energy_heat_burner_mt_hydrogen",
    "energy_heat_burner_mt_network_gas",
    "energy_heat_burner_mt_waste_mix",
    "energy_heat_burner_mt_wood_pellets"
  ]
}
```
