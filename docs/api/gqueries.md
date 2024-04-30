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




<ApiEndpoint data={endpointData.gqeuries} />

```http title="Example request"
GET /api/v3/gqueries HTTP/2
Host: engine.energytransitionmodel.com
Accept: application/json
```



One can filter the gqueries by adding labels to the endpoint.

For instance, the queries the graph 'Buildings heating demand' is made up from two queries. these queries can be found in the folder 'gqueries/general/output_series/vertical_stacked_bar_270_buildings_heating_demand'. 

If the label is given in the following format:

```http title="Example request"
GET /api/v3/gqueries HTTP/2
Host: engine.energytransitionmodel.com
Accept: application/json
labels = {
  "labels":	
    [ "vertical_stacked_bar_270_buildings_heating_demand"
    ]
}
response = requests.get(ete_url, headers=headers, json=labels)
```
The following response is given:

```json title="Example response"
[{"key":"useful_demand_buildings_future_bar","unit":"PJ","description":null,"labels":["output_elements","output_series","vertical_stacked_bar_270_buildings_heating_demand"]},

{"key":"useful_demand_buildings_present_bar","unit":"PJ","description":null,"labels":["output_elements","output_series","vertical_stacked_bar_270_buildings_heating_demand"]}]
```

Please note that the API collects **ALL** queries in the folder. 



