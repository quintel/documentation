---
title: Flexibility order
---

import endpointData from '@site/data/api/flexibility-order';
import ApiEndpoint from '@site/src/components/ApiEndpoint';

Each scenario has a flexibility order. This defines the order of preference by which excess electricity is assigned to "flexibility" technologies such as power-to-power batteries, power-to-heat in industry, etc.

## The FlexibilityOrder object

A FlexibilityOrder is an object containing only one key – `order` – which is an array of string keys identifying each group of flexibility technologies.

* `order` - an array of technology group keys as strings

## Get a flexibility order

Fetches the flexibility order for a chosen scenario.

<ApiEndpoint data={endpointData.show} />

```http title="Example request"
GET /api/v3/scenarios/0/flexibility_order HTTP/2
Host: engine.energytransitionmodel.com
Accept: application/json
```

```json title="Example response"
{
  "order": [
    "household_batteries",
    "mv_batteries",
    "electric_vehicle",
    "opac",
    "pumped_storage",
    "power_to_gas",
    "power_to_heat_industry",
    "power_to_heat_district_heating_boiler",
    "power_to_heat_district_heating_heatpump",
    "export"
  ]
}
```

## Update a flexibility order

Updates the flexibility order with the provided JSON body.

You may omit technology groups from the order, however note that they will be added in by the API automatically in the default order. For example, if the default order is `a,b,c,d`, and your request provides an order of `c,b`, the resulting flexibility order will be `c,b,a,d`.

Currently, the JSON containing the order must be wrapped inside another object under the `flexibility_order` key. [This will change in the future](https://github.com/quintel/etengine/issues/1109).

<ApiEndpoint data={endpointData.update} />

```http title="Example request"
PUT /api/v3/scenarios/0/flexibility_order HTTP/2
Host: engine.energytransitionmodel.com
Accept: application/json

{
  "flexibility_order": {
    "order": [
      "mv_batteries",
      "electric_vehicle",
      "pumped_storage",
      "household_batteries",
      "power_to_heat_district_heating_boiler",
      "power_to_heat_district_heating_heatpump",
      "opac",
      "power_to_gas",
      "power_to_heat_industry",
      "export"
    ]
  }
}
```

```json title="Example response"
{
  "order": [
    "mv_batteries",
    "electric_vehicle",
    "pumped_storage",
    "household_batteries",
    "power_to_heat_district_heating_boiler",
    "power_to_heat_district_heating_heatpump",
    "opac",
    "power_to_gas",
    "power_to_heat_industry",
    "export"
  ]
}
```
