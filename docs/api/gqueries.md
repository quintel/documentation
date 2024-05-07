---
title: Gqueries
---

import endpointData from '@site/data/api/gqueries';
import ApiEndpoint from '@site/src/components/ApiEndpoint';
import UpcomingFeature from '@site/src/components/UpcomingFeature';

The API allows you to retrieve a detailed listing of all the gqueries available, their unit, description and labels.

:::info Gqueries
For more information about gqueries see [Writing gqueries](../contrib/authoring-gqueries.md).
:::

## The Gqueries object

Endpoints which provide information about inputs will return the following information:

* `key` - The name of the query as found on [ETSource](https://github.com/quintel/etsource/tree/master/gqueries).
* `unit` - Indicates the unit of the value that is returned with a gquery. For example "MJ", "%".
* `description` - Gives additional information about the gquery. "null" if no description is given.
* `labels` - Each folder in the path of the gquery location on [ETSource](https://github.com/quintel/etsource/tree/master/gqueries) is marked as a label. For example, the gquery final_demand_of_ambient_in_households_appliances_energetic with the path "gqueries/general/final_demand/households/appliances_households/final_demand_of_ambient_in_households_appliances_energetic.gql", will be assigned the labels "general", "final_demand", "households" and "appliances_households".

## Collecting gqueries.

Fetches a list of all the gqueries available that have the specificed labels. If no labels are specified, all gqueries will be returned. Note: the gqueries do not return any values for a specific scenario.

<ApiEndpoint data={endpointData.gqueries} />

```http title="Example request"
GET /api/v3/gqueries HTTP/2
Host: engine.energytransitionmodel.com
Accept: application/json

{
  "labels":
    [
      "area"
    ]
}
```

```json title="Example response"
[
  {
    "key": "area_used_for_coastal_wind",
    "unit": "km2",
    "description": null,
    "labels": [
      "gqueries",
      "general",
      "area"
    ]
  },
  {
    "key": "area_used_for_offshore_wind",
    "unit": "km2",
    "description": null,
    "labels": [
      "gqueries",
      "general",
      "area"
    ]
  },
  {
    "key": "area_used_for_onshore_wind",
    "unit": "km2",
    "description": null,
    "labels": [
      "gqueries",
      "general",
      "area"
    ]
  },
  {
    "key": "areable_land",
    "unit": "km2",
    "description": "total_areable_land_in_dataset",
    "labels": [
      "gqueries",
      "general",
      "area"
    ]
  },
  {
    "key": "bio_footprint",
    "unit": "factor",
    "description": null,
    "labels": [
      "gqueries",
      "general",
      "area"
    ]
  }
]
```
