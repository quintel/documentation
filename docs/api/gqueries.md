---
title: Gqueries
---

import endpointData from '@site/data/api/gqueries';
import ApiEndpoint from '@site/src/components/ApiEndpoint';
import UpcomingFeature from '@site/src/components/UpcomingFeature';

Via the Gqueries endpoint, all gqueries can be collected.
Please note that with this endpoint only the gqueries can be collected, not the values of these gqueries in scenarios.

For more information about Gqueries please visit [Writing gqueries](../contrib/authoring-gqueries.md).

## Collecting gqueries.

One can filter the gqueries by adding labels to the endpoint.

For instance, the queries the graph 'Buildings heating demand' is made up from two queries. these queries can be found in the folder `gqueries/general/output_series/vertical_stacked_bar_270_buildings_heating_demand`. Please note that the API collects **ALL** queries in the folder.


<ApiEndpoint data={endpointData.gqeuries} />

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
