---
id: areas
title: Areas and regions
---

import endpointData from '@site/data/api/areas';
import ApiEndpoint from '@site/src/components/ApiEndpoint';

The ETM models several hundred regions, ranging from small neighbourhoods up to entire countries.

## The Area object

Endpoints which provide data about an area will return the following information:

* `area` - the unique key for the area.
* `group` - indicates the type of area, for example country, municipality, neighbourhood.
* `analysis_year` - indicates the year used as the base for all data in the area, shown in the ETM as the start year.
* `useable` - true if new scenarios can be created for this dataset through the ETM front-end. You may create scenarios through the API even when this is false.

The area data contains many other attributes, such as the CO<sub>2</sub> emissions for the region in 1990, the number of households and cars, kilometers of coastline, the land area, and the ETM features supported in the area.

## Get all areas

Fetches a listing of all areas supported by the Energy Transition Model. To get the data for a single area, see the [Get data for an area](#get-data-for-an-area) endpoint.

<ApiEndpoint data={endpointData.index} />

```http title="Example request"
GET /api/v3/areas HTTP/2
Host: engine.energytransitionmodel.com
Accept: application/json
```

```json title="Example response"
[
  {
    "area": "nl",
    "group": "country",
    "analysis_year": 2019,
    "areable_land": 18457.0,
    "co2_emission_1990": 158.7190073,
    "coast_line": 451.0,
    "has_agriculture": true,
    "has_buildings": true,
    "has_coastline": true,
    "has_cold_network": false,
    "has_electricity_storage": true,
    "has_industry": true,
    "has_lignite": false,
    "indirect_emissions_co2": 0.43112829,
    "number_of_apartments": 2773292.0,
    "number_of_buildings": 1147559.0,
    "number_of_cars": 8531000.0,
    "number_of_corner_houses": 1021105.0,
    "number_of_detached_houses": 1026689.0,
    "number_of_inhabitants": 17282163.0,
    "number_of_residences": 7891786.0,
    "number_of_semi_detached_houses": 698150.0,
    "number_of_terraced_houses": 2372550.0,
    "offshore_suitable_for_wind": 30060.0,
    "total_land_area": 33671.0,
    "useable": true
  },
  {
    "area": "de",
    // ...
  }
]
```

## Get data for an area

<ApiEndpoint data={endpointData.show} />

```http title="Example request"
GET /api/v3/areas HTTP/2
Host: engine.energytransitionmodel.com
Accept: application/json
```

```json title="Example response"
{
  "area": "nl",
  "group": "country",
  "analysis_year": 2019,
  "areable_land": 18457.0,
  "co2_emission_1990": 158.7190073,
  "coast_line": 451.0,
  "has_agriculture": true,
  "has_buildings": true,
  "has_coastline": true,
  "has_cold_network": false,
  "has_electricity_storage": true,
  "has_industry": true,
  "has_lignite": false,
  "indirect_emissions_co2": 0.43112829,
  "number_of_apartments": 2773292.0,
  "number_of_buildings": 1147559.0,
  "number_of_cars": 8531000.0,
  "number_of_corner_houses": 1021105.0,
  "number_of_detached_houses": 1026689.0,
  "number_of_inhabitants": 17282163.0,
  "number_of_residences": 7891786.0,
  "number_of_semi_detached_houses": 698150.0,
  "number_of_terraced_houses": 2372550.0,
  "offshore_suitable_for_wind": 30060.0,
  "total_land_area": 33671.0,
  "useable": true
}
```
