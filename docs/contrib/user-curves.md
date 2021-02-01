---
id: user-curves
title: User-uploaded curves
---

Advanced users of the ETM are allowed to upload custom curves, which will be used in place of those stored in ETSource.

## Defining a custom curve

An ETSource configuration file – [config/user_curves.csv](https://github.com/quintel/etsource/blob/user-curves/config/user_curves.yml) – defines which curves may be customized by visitors. Each custom CSV is listed as it would be in a merit order configuration, with any settings needed to instruct ETEngine how to process the uploads.

Keys are set as they would appear in a merit order configuration without the ".csv" suffix.

* **agriculture_electricity** – Allows visitors to upload a profile which overrides the ETSource agriculture_electricity.csv file.
* **weather/air_temperature** – Allows visitors to upload a profile which overrides the air_temperature.csv weather curve. User-uploaded weather curves will always override those in ETSource, regardless of which weather year is chosen in ETModel. The onus is therefore on the user to ensure that their curves are logically consistent (for example, that household heating demand curves are consistent with air temperature).

Each custom curve requires the curve key and a type:

```yaml
interconnector_1_price:
  type: price

households_hot_water:
  type: profile
```

Changes to the configuration should be immediately reflected in ETModel's curve upload form.

![](/img/docs/user-curve-upload.png)

## Types

The `type` attribute instructs ETEngine how to process the file uploaded by visitors.

### `type: generic`

ETEngine will assert that the curve has 8,760 numeric values, but will do no further processing.

### `type: price`

Price curves will contain 8,760 numeric values, treated as euros and cents. ETEngine will round each value to the nearest cent. Visitors may optionally upload an exported ETM price CSV which contains a "price" column.

ETModel will show a summary of the curve with information about the minimum, maximum, and mean values.

### `type: profile`

Profiles contain 8,760 numeric values which define the *shape* (not amount) of demand. These curves are normalized by ETEngine such that the resulting curve sums to 1/3600. This retains the shape of the curve provide by the user so that it may be used within hourly calculations in Causality.

### `type: temperature`

A curve containing 8,760 numerical values, each one a temperature in °C. No rounding or normalization is performed. The uploaded curve should contain numerical values without any units or extra formatting.

ETModel will show a summary of the curve with information about the minimum, maximum, and mean values.

## Setting input values

Sometimes an uploaded curve needs to be able to set one or more inputs. For example, an air temperature curve will set the value of the outdoor temperature input. This process is known as [reducing](https://en.wikipedia.org/wiki/Fold_(higher-order_function)): a curve of many numerical values is reduced to a single value which may be used as an input.

Setting an input value requires additional configuration:

```yaml
offshore_wind:
  type: profile
  reduce:
    as: full_load_hours
    sets: flh_of_energy_power_wind_turbine_offshore
```

The `reduce` config takes two keys:

* `as` – Tells ETEngine how to reduce the curve to a single value.
* `sets` – Tells ETEngine the input key or keys which should be set.

There are several available reducers which may be configured using the `as` attribute.

* `as: full_load_hours` – Converts a profile to the number of full load hours represented by the curve.
* `as: temperature` – Calculates the mean temperature of the user curve and returns the difference from the mean of the default curve. For example, if the default air temperature curve has a mean of 11.5°C and the user curve has a mean of 12.1°C, this will set an input value of +0.6°C.

The `sets` attribute defines one or more inputs which will be set to the reduced curve value. The corresponding sliders in ETModel will be disabled. The input value will be removed if the user later removes their custom curve.

## Limitations

Users may only upload curves which exist as a CSV in ETSource. For example, customising [the buildings_cooling.csv file](https://github.com/quintel/etsource/blob/master/datasets/nl/curves/buildings_cooling.csv) is allowed, as is [the air_temperature.csv weather curve](https://github.com/quintel/etsource/blob/master/datasets/nl/curves/weather/default/air_temperature.csv), but changing a dynamic profile (such as "dynamic: ev_demand") is not.

To change a dynamic curve, the visitor must upload custom versions of the underlying profiles and set slider settings to their preferences. Dynamic curves and their underlying profiles are [configured in ETSource](https://github.com/quintel/etsource/blob/master/config/dynamic_curves.yml).

## Examples

#### A simple price curve:

```yaml
interconnector_1_price:
  type: price
```

#### A profile which doesn't set any inputs:

```yaml
households_hot_water:
  type: profile
```

#### Customising the solar_thermal weather profile:

```yaml
weather/solar_thermal:
  type: profile
```

#### A profile which calculates the full load hours and sets the value to an input

```yaml
offshore_wind:
  type: profile
  reduce:
    as: full_load_hours
    sets: flh_of_energy_power_wind_turbine_offshore
```

#### A profile which calculates the full load hours and sets the value to three inputs

```yaml
theoretical_energy:
  type: profile
  reduce:
    as: full_load_hours
    sets:
      - flh_of_technology_1
      - flh_of_technology_2
      - flh_of_technology_3
```
