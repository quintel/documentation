---
title: Inputs
---

import endpointData from '@site/data/api/inputs';
import ApiEndpoint from '@site/src/components/ApiEndpoint';
import UpcomingFeature from '@site/src/components/UpcomingFeature';

Scenarios inputs describe the values chosen by a user when customising their scenario. Inputs may be used to change the number of households, the balance of energy supply, turn on and off some features of the model, and much more. The ETM contains more than 700 inputs.

The API allows you to retrieve a detailed listing of all the inputs available for a scenario, their minimum and maximum allowed values, units, and other useful information.

:::info Setting inputs for a scenario
For a description of how to set input values for a scenario, see [Set sliders in a scenario](/api/scenarios#set-sliders-in-a-scenario)
:::

## The Input object

Endpoints which provide information about inputs will return the following information:

* `default` - The initial value of the input in a blank scenario. If the scenario is [based on parent scenario](https://docs.energytransitionmodel.com/api/scenarios#create-a-scenario-based-on-another-scenario), this will be the value of the input in the parent. You can change this by supplying the [`defaults`](#specifying-the-defaults) parameter.
* `disabled` - Indicates if the input is disabled; if so, a value may not be set.
* `disabled_by` - Appears only when this input would be disabled if another has a value.
* `coupling_groups` - Appears only when this input has a `disabled_by`. Indicates if the disabling input is part of a coupling.
* `max` - The maximum permitted value for the input.
* `min` - The minimum permitted value for the input.
* `share_group` - Indicates that the input belongs to the named group. All inputs within the group must have a value which sums to 100. This features is frequently used when you need to set the balance of various technologies (such as the proportion of gasoline, diesel, and electric vehicles).
* `unit` - Indicates the name of the unit in which values are specified. For example "MJ", "%".
* `user` - The value set for the input by a user. Omitted if no value has been set.

Do not rely on the above list being exhaustive: other keys may be present in rare situations, however these are for internal use only.

## Mutually-exclusive inputs

While the vast majority of inputs may be used together, a small number are incompatible with one another because they update the same thing, or their updates would conflict in some way. These inputs are called mutually-exclusive.

Mutually-exclusive inputs can be identified through the API by the `disabled_by` attribute:

```json
{
  "min": 0.0,
  "max": 100.0,
  "default": 10.0,
  "unit": "%",
  "disabled_by": ["one", "two"]
}
```

In this example, if either the "one" or "two" inputs have a value, the input represented by the JSON will be disabled.

<UpcomingFeature release="2023.06" />

Sometimes one of the disabling inputs is part of [a coupling with another model](/api/scenarios#scenario-couplings).
Together with the `disabled_by` attribute the field `coupling_groups` will appear to show if the
disabling input was part of a coupling. For now this is Boolean value.

## Get all inputs for a scenario

Fetches a list of all inputs available to the scenario

<ApiEndpoint data={endpointData.index} />

```http title="Example request"
GET /api/v3/scenarios/0/inputs HTTP/2
Host: engine.energytransitionmodel.com
Accept: application/json
```

```http title="Example response"
{
  "transport_car_using_diesel_mix_share":{
    "min":0.0,
    "max":100.0,
    "default":24.250388708759342,
    "unit": "%",
    "share_group": "transport_car_tech"
  },
  "transport_car_using_electricity_share":{
    "min":0.0,
    "max":100.0,
    "default":0.896427147907238,
    "unit": "%",
    "share_group": "transport_car_tech"
  },
  "transport_car_using_gasoline_mix_share":{
    "min":0.0,
    "max":100.0,
    "default":70.85334695042516,
    "unit": "%",
    "share_group": "transport_car_tech"
  }
}
```

### Specifying the defaults

When requesting the inputs from a scenario that has a parent scenario, the default values of each input show the value of the parent. If you wish to see the default values of the dataset instead, you can supply the `defaults` parameter to the request. This parameter has two possible values:

* `parent` - this is the standard behaviour of using the values of the parent scenario
* `original` - shows the original default values of the dataset instead

<ApiEndpoint data={endpointData.index} />

```http title="Example request"
GET /api/v3/scenarios/0/inputs HTTP/2
Host: engine.energytransitionmodel.com
Accept: application/json

{
  "defaults": "original"
}
```

```http title="Example response"
{
  "transport_car_using_diesel_mix_share":{
    "min":0.0,
    "max":100.0,
    "default":24.250388708759342,
    "unit": "%",
    "share_group": "transport_car_tech"
  },
  "transport_car_using_electricity_share":{
    "min":0.0,
    "max":100.0,
    "default":0.452618882211923,
    "unit": "%",
    "share_group": "transport_car_tech"
  },
  "transport_car_using_gasoline_mix_share":{
    "min":0.0,
    "max":100.0,
    "default":70.85334695042516,
    "unit": "%",
    "share_group": "transport_car_tech"
  }
}
```

## Get one input for a scenario

When you only require data for a single input, this endpoint will reduce the amount of data transferred.

<ApiEndpoint data={endpointData.show} />

```http title="Example request"
GET /api/v3/scenarios/0/inputs/transport_car_using_diesel_mix_share HTTP/2
Host: engine.energytransitionmodel.com
Accept: application/json
```

```http title="Example response"
{
  "min": 0.0,
  "max": 100.0,
  "default": 24.250388708759342,
  "unit": "%",
  "share_group": "transport_car_tech"
}
```
