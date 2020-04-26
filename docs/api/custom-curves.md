---
id: custom-curves
title: Custom scenario curves
sidebar_label: Custom scenario curves
---

import endpointData from '@site/data/api/custom-curves';
import ApiEndpoint from '@site/src/components/ApiEndpoint';

:::warning Experimental
This feature is currently available only on our experimental "beta" version of the ETM. The exact implementation is still subject to change.
:::

Curves are used extensively within the ETM to control the behavior of some technologies. Some of these vary depending on the region selected for a scenario, while others are generated dynamically based on choices made by the end-user.

In some cases it's possible for a user to upload a custom curve which will be used instead of the defaults. For example, uploading a curve to change the price of imported electricity changes when it is profitable to import electricity rather than generating it domestically.

### Curve data

Endpoints which provide data about a curve (or curves), will return the following information:

* `type` - the [curve type](#curve-types).
* `name` - the name of the original file uploaded.
* `size` - size of the original file in bytes.
* `date` - the date the file was uploaded.
* `stats` - an object containing some useful statistics about the curve:
  * `length` – number of prices contained in the curve.
  * `mean` - the mean value of the curve.
  * `min` - the minimum value of the curve.
  * `min_at` - the index of the minimum value.
  * `max` - the maximum value of the curve.
  * `max_at` - the index of the maximum value.

### Curve types

The API accepts curves describing the hourly price of the six electricity interconnectors. Any endpoint taking a `curve_type` path parameter expects one of these values:

* `interconnector_1_price`
* `interconnector_2_price`
* `interconnector_3_price`
* `interconnector_4_price`
* `interconnector_5_price`
* `interconnector_6_price`

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
    "type": "interconnector_1_price",
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
  "type": "interconnector_1_price",
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
  "type": "interconnector_1_price",
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

Removes the uploaded curve of the named type.

<ApiEndpoint data={endpointData.destroy} />

```http title="Example request"
DELETE /api/v3/scenarios/0/custom_curves/interconnector_1_price HTTP/2
Host: engine.energytransitionmodel.com
```

```http title="Example response"
HTTP/2 204 No Content
```
