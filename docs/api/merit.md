---
id: merit
title: Merit configuration
---

import endpointData from '@site/data/api/merit';
import ApiEndpoint from '@site/src/components/ApiEndpoint';

When querying future values of your scenario, the full energy graph is calculated to create your
response. These calculations include setting up the electricity supply and demand merit order and subsequently clearing the electricity market for every hour in the year. The ETM uses a separate gem called [`merit`](https://github.com/quintel/merit) that performs these hourly
calculations and clears the market. You can read more about its workings [here](/main/merit-order).

The `merit` gem can be installed and used as a stand-alone feature in any other project. If you wish to initialize your own
version of the `merit` gem with data from an ETM scenario, you can use the following endpoint to
extract the configuration the ETM merit order is initialized with.

## The merit config object

The endpoint which provides information about the merit configuration will return the following two
objects:

* `curves` - an object containing all the curves used by the participants. Each curve is a key value pair, with the value being a list of 8760 data points.
* `participants` - a list of all participants in the merit order for this scenario.

Each participant is an object containing all details neccesary to initialize the merit order with. All
participants contain the following data:

* `key` - the identifier of the participant.
* `type` - which merit class the participant should be. You can find the different participant and flex classes [in the gem](https://github.com/quintel/merit/tree/master/lib/merit).
* `curve` - the key of the curve that the participant uses, to be found in the `curves` object. Is null if the participant has no curve. A curve is usually a load profile, except for interconnectors, where the curve is the price curve.

For dispatchables the following data is included:
* `marginal_costs` - in euros / MWh
* `output_capacity_per_unit` - in MW
* `number_of_units` - number
* `availability` - value between 0 and 1
* `fixed_costs_per_unit` - in euros / unit
* `fixed_om_costs_per_unit` - in euros / unit
* `full_load_hours` - *only when the participant contains a curve*, value between 0 and 8670

The flexible participants include the following data:
* `marginal_costs` - in euros / MWh
* `input_capacity_per_unit` - in MW
* `output_capacity_per_unit` - in MW
* `number_of_units` - number
* `volume_per_unit` - *only for types of storage*, in MWh
* `input_efficiency` - *only for types of storage*, value between 0 and 1
* `output_efficiency` - *only for types of storage*, value between 0 and 1
* `reserve_class` - *only for types of storage*, type of reserve to use, either `reserve`, or [`simple_reserve`](https://github.com/quintel/merit/blob/master/lib/merit/flex/simple_reserve.rb)
* `decay` - *only for types of storage*, curve

And the users (consumers) contain:
* `total_consumption` - *only for types of total consumption*, in MJ
* `load_curve` - *optional*, curve
* `consumption_share` - *only for types of consumption loss*, value between 0 and 1

## Get the merit config for your scenario

Fetches the merit config for the scenario

<ApiEndpoint data={endpointData.index} />

```http title="Example request"
GET /api/v3/scenarios/12345/merit HTTP/2
Host: engine.energytransitionmodel.com
Accept: application/json
```

```json title="Example response"
{
  "curves": {
    "energy_power_solar_pv_solar_radiation.dynamic: solar_pv": [..],
    "flat": [..]
  },
  "participants": [
    {
      "curve": "energy_power_solar_pv_solar_radiation.dynamic: solar_pv",
      "type": "volatile",
      "key": "energy_power_solar_pv_solar_radiation",
      "marginal_costs": 0,
      "output_capacity_per_unit": 28.23529411764706,
      "number_of_units": 1224.9916666666666,
      "availability": 0.98,
      "fixed_costs_per_unit": null,
      "fixed_om_costs_per_unit": null,
      "full_load_hours": 867
    },
    {
      "curve": "flat",
      "type": "must_run",
      "key": "energy_chp_coal_gas",
      "marginal_costs": 149.72613137608266,
      "output_capacity_per_unit": 148.21415840878325,
      "number_of_units": 0.6402278815033505,
      "availability": 0.9,
      "fixed_costs_per_unit": null,
      "fixed_om_costs_per_unit": null,
      "full_load_hours": 6354.38233269404
    },
    ..
  ]
}
```

## The `include_curves` parameter
If you don't want the large `curves` object to be included with the repsonse, you can opt out by
setting the `include_curves` parameter to `false`. Please note that without the curves you will not
be able to initialise Merit. However, if you just need information on all the participants, this
parameter can be useful.
