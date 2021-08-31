---
id: custom-curves
title: Custom scenario curves
sidebar_label: Custom scenario curves
---

import endpointData from '@site/data/api/custom-curves';
import ApiEndpoint from '@site/src/components/ApiEndpoint';

Curves are used extensively within the ETM to control the behavior of various technologies. Most these curves vary depending on the region selected for a scenario, while others are generated dynamically based on choices made by the end-user.

In some cases it's possible for a user to upload a custom curve, which will be used instead of the defaults. For example, uploading a curve to change the price of imported electricity changes when it is profitable to import electricity rather than generating it domestically.

## The Curve object

Endpoints which provide data about a curve (or curves), will return the following information:

* `key` - the [curve key](#curve-keys).
* `type` - the [curve type](#curve-type).
* `name` - the name of the original file uploaded.
* `size` - size of the original file in bytes.
* `overrides` – a list of input keys which are non-functional when a file is attached.
* `date` - the date the file was uploaded.
* `stats` - an object containing some useful statistics about the curve:
  * `length` – number of values contained in the curve.
  * `mean` - the mean value of the curve.
  * `min` - the minimum value of the curve.
  * `min_at` - the index of the minimum value.
  * `max` - the maximum value of the curve.
  * `max_at` - the index of the maximum value.
  * `full_load_hours` - describes [the FLH](/main/merit-order/#full-load-hours) of the curve.

Note that which `stats` keys are included vary depending on the curve `type`.

### Curve keys

The API allows you to customise a number of curves used by the model's hourly calculations, such as interconnector price curves, capacity curves, and demand profiles. The full range of allowed keys and curve types can be found [in this configuration file](https://github.com/quintel/etsource/blob/production/config/user_curves.yml). Each key in the YAML document matches a curve `key` accepted by the API. For example:

* `electric_buses`
* `interconnector_1_price`
* `weather/wind_offshore_baseline`

### Curve types

The curve type is part of the API response which describes the way the uploaded curve will be processed prior to use in a scenario.

* `generic` – Uploaded curves of this type will be validated to ensure that the curve contains 8,760 numeric values, but no other processing is performed and these curves are stored as provided.
* `price` – Donates that the curve is a price curve. The provided file should contain 8,760 numeric values representing euros and cents, without any currency formatting. You may also provide an exported price curve from the Energy Transition Model (a comma-separated file with a "price" column). Each hourly value is rounded to the nearest cent.
* `profile` – The curve is a load profile and should contain 8,760 numeric values. The values themselves are not important as the curve will be normalized by the model to represent the shape of demand.
* `temperature` – These curves describe 8,760 hourly temperature values in °C. No formatting should be present in uploaded files.

## Get all custom curves

Fetches a listing of all custom curves attached to the scenario. A scenario with no custom curves will return an empty array. To get the data for a single curve, see the [Get a custom curve](#get-a-custom-curve) endpoint.

<ApiEndpoint data={endpointData.index} />

```http title="Example request"
GET /api/v3/scenarios/0/custom_curves HTTP/2
Host: engine.energytransitionmodel.com
Accept: application/json
```

```http title="Example response"
HTTP/2 200 OK
Content-Type: application/json; charset=utf-8

[
  {
    "key": "interconnector_1_price",
    "type": "price",
    "attached": true,
    "overrides": [],
    "name": "my_electricity_price.csv",
    "size": 52516,
    "date": "2020-04-21T18:57:03.000Z",
    "stats": {
      "length": 8760,
      "mean": 30.110389269406394,
      "min": 24.17,
      "min_at": 23,
      "max": 35,
      "max_at": 441
    }
  }
]
```

#### `include_unattached` parameter

An optional `include_unattached` parameter can be provided with a truthy value to return a list of all custom curves supported by the API, including those which are not attached to the scenario.

```http title="Example request"
GET /api/v3/scenarios/0/custom_curves?include_unattached=true HTTP/2
Host: engine.energytransitionmodel.com
Accept: application/json
```

```http title="Example response"
HTTP/2 200 OK
Content-Type: application/json; charset=utf-8

[
  {
    "key": "interconnector_1_price",
    "type": "price",
    "attached": true,
    "overrides": [],
    "name": "my_electricity_price.csv",
    "size": 52516,
    "date": "2020-04-21T18:57:03.000Z",
    "stats": {
      "length": 8760,
      "mean": 30.110389269406394,
      "min": 24.17,
      "min_at": 23,
      "max": 35,
      "max_at": 441
    }
  },
  {
    "key": "interconnector_2_price",
    "type": "price",
    "attached": false,
    "overrides": []
  },
  {
    "key": "interconnector_3_price",
    "type": "price",
    "attached": false,
    "overrides": []
  }
]
```

#### `include_internal` parameter

Some curves may be customised which are not normally included in the list of custom curves. This is because they are intended for internal use or for advanced users only. These curves are often not documented and may have dependencies on one another (such as household insulation).

Sending the `include_internal` parameter will result in these curves appearing in the list of available curves.

```http title="Example request"
GET /api/v3/scenarios/0/custom_curves?include_internal=true HTTP/2
Host: engine.energytransitionmodel.com
Accept: application/json
```

```http title="Example response"
HTTP/2 200 OK
Content-Type: application/json; charset=utf-8

[
  {
    "key": "weather/insulation_corner_houses_high",
    "type": "profile",
    "attached": false,
    "overrides": [],
    "internal": true
  }
]
```

:::info
The Energy Transition Model can make no guarantees about the validity of your scenario results when customising internal curves.
:::

## Get a custom curve

Retrieves information about a single attached curve. To get the data for all attached curves, see the [Get all custom curves](#get-all-custom-curves) endpoint.

<ApiEndpoint data={endpointData.show} />

```http title="Example request"
GET /api/v3/scenarios/0/custom_curves/interconnector_1_price HTTP/2
Host: engine.energytransitionmodel.com
Accept: application/json
```

```http title="Example response"
HTTP/2 200 OK
Content-Type: application/json; charset=utf-8

{
  "key": "interconnector_1_price",
  "type": "price",
  "attached": true,
  "overrides": [],
  "name": "my_electricity_price.csv",
  "size": 52516,
  "date": "2020-04-21T18:57:03.000Z",
  "stats": {
    "length": 8760,
    "mean": 30.110389269406394,
    "min": 24.17,
    "min_at": 23,
    "max": 35,
    "max_at": 441
  }
}
```

## Upload a custom curve

Uploads a custom curve using `multipart/form-data` content.

The uploaded file must be plain text containing 8,760 numeric values, each on a separate line. Should the file have fewer or more than 8,760 values - or contain values which are not numbers - the request will be rejected.

<ApiEndpoint data={endpointData.update} />

```http title="Example request"
PUT /api/v3/scenarios/0/custom_curves/interconnector_1_price HTTP/2
Host: engine.energytransitionmodel.com
Accept: application/json
Content-Length: 79182
Content-Type: multipart/form-data; boundary=d39be313adf6549a

--d39be313adf6549a
Content-Disposition: form-data; name="file"; filename="my_electricity_price.csv"
Content-Type: application/octet-stream

45.4669
21.4558
...
29.8927
20.4441
--d39be313adf6549a--
```

```http title="Example response"
HTTP/2 200 OK
Content-Type: application/json; charset=utf-8

{
  "key": "interconnector_1_price",
  "type": "price",
  "attached": true,
  "overrides": [],
  "name": "my_electricity_price.csv",
  "size": 52516,
  "date": "2020-04-22T16:06:01.000Z",
  "stats": {
    "length": 8760,
    "mean": 30.110389269406394,
    "min": 24.17,
    "min_at": 23,
    "max": 35.0,
    "max_at": 441
  }
}
```

```bash title="Example cURL request"
curl \
  -F file=@my_electricity_price.csv \
  -X PUT \
  https://engine.energytransitionmodel.com/api/v3/scenarios/0/custom_curves/interconnector_1_price
```

## Delete a custom curve

Removes the uploaded curve of the named key.

<ApiEndpoint data={endpointData.destroy} />

```http title="Example request"
DELETE /api/v3/scenarios/0/custom_curves/interconnector_1_price HTTP/2
Host: engine.energytransitionmodel.com
```

```http title="Example response"
HTTP/2 204 No Content
```
