---
title: Forecast storage order
---

import endpointData from '@site/data/api/forecast-storage-order';
import ApiEndpoint from '@site/src/components/ApiEndpoint';
import UpcomingFeature from '@site/src/components/UpcomingFeature';

<UpcomingFeature release="2023.02" />

Each scenario has a forecast storage order. This defines the order of preference by which [forecasting batteries](../main/battery-forecasting.md) are calculated.

## The ForecastStorageOrder object

A ForecastStorageOrder is an object containing only one key – `order` – which is an array of string keys identifying each group of heating technologies.

* `order` - an array of technology group keys as strings

## Get a forecast storage order

Fetches the forecast storage order for a chosen scenario.

<ApiEndpoint data={endpointData.show} />

```http title="Example request"
GET /api/v3/scenarios/0/forecast_storage_order HTTP/2
Host: engine.energytransitionmodel.com
Accept: application/json
```

```json title="Example response"
{
  "order": [
    "energy_flexibility_flow_batteries_electricity",
    "energy_flexibility_hv_opac_electricity",
    "energy_flexibility_mv_batteries_electricity",
    "households_flexibility_p2p_electricity",
    "transport_car_flexibility_p2p_electricity"
  ]
}
```

## Update a forecast storage order

Updates the order with the provided JSON body.

You may omit technologies from the order, however note that they will be added in by the API automatically in the default order. For example, if the default order is `a,b,c,d`, and your request provides an order of `c,b`, the resulting heat network order will be `c,b,a,d`.

<ApiEndpoint data={endpointData.update} />

```http title="Example request"
PUT /api/v3/scenarios/0/forecast_storage_order HTTP/2
Host: engine.energytransitionmodel.com
Accept: application/json

{
  "order": [
    "transport_car_flexibility_p2p_electricity",
    "energy_flexibility_hv_opac_electricity",
    "energy_flexibility_mv_batteries_electricity",
    "households_flexibility_p2p_electricity",
    "energy_flexibility_flow_batteries_electricity"
  ]
}
```

```json title="Example response"
{
  "order": [
    "transport_car_flexibility_p2p_electricity",
    "energy_flexibility_hv_opac_electricity",
    "energy_flexibility_mv_batteries_electricity",
    "households_flexibility_p2p_electricity",
    "energy_flexibility_flow_batteries_electricity"
  ]
}
```
