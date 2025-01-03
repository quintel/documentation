---
title: Heat demand profiles
---

import useBaseUrl from '@docusaurus/useBaseUrl'

The ETM generates heat demand profiles in the households sector for four different residence types (_apartments_, _terraced houses_, _detached houses_ and _semi-detached houses_) and for three levels of insulation (_low_, _medium_, _high_). These profiles are generated for country datasets based on default country-specific input data (for instance outside temperature, irradiance), but can also be generated through the [Weather years](/main/scenario-tools/weather-years-module) module of the [Scenario-tools](/main/scenario-tools/introduction). 

The ETM generates the following 12 heat demand profiles in the households sector:
```
weather/insulation_terraced_houses_high
weather/insulation_terraced_houses_medium
weather/insulation_terraced_houses_low
weather/insulation_apartments_high
weather/insulation_apartments_medium
weather/insulation_apartments_low
weather/insulation_semi_detached_houses_high
weather/insulation_semi_detached_houses_medium
weather/insulation_semi_detached_houses_low
weather/insulation_detached_houses_high
weather/insulation_detached_houses_medium
weather/insulation_detached_houses_low
```

The underlying script that generates the heat demand profiles is [`weather_years_profile_generator.py`](https://github.com/quintel/scenario-tools/blob/master/helpers/heat_demand/weather_years_profile_generator.py). Generally, the heat demand curves per residence type and insulation level are generated in the follwing three steps:
1. Heat demand curve per residence
2. Smoothing of curve to neighbourhood level
3. Normalization to sum to 1/3600

## 1. Heat demand curve per residence
Heat demand curves are first generated for one residence, per residence type and insulation level. 

### Inputs
The inputs in this step are subdivided into **generic** and **country-specific** inputs. 

#### Generic inputs
The generic inputs are defined in [`config.py`](https://github.com/quintel/scenario-tools/blob/master/helpers/heat_demand/config.py). These values of these inputs are defined by Quintel and cannot be changed by users (when generating the curves using the weather year module of scenario-tools). The generic inputs consist of:
- **R-values**: thermal resistence per residence type per insulation level [m^2 K / W]
- **Residence surface area**: surface are per residence type [m^2]
- **Behaviour fitting numbers**: fitting values per residence type per insulation level. These values were once determined to reconstruct and fit heat demand curves from ECN with the heat profile generator. The used script to determine these fitting numbers can be found [here](https://github.com/quintel/etdataset-public/blob/master/curves/demand/households/space_heating/script/old/fitting.py).
- **Window surface area**: assumptions in window surface area per residence type [m^2]
- **Residence circumference dimensions**: generic assumptions in residence circumference including wall thickness [m]
- **Miscellaneous parameters**: such as concrete density and specific heat capacity, unit conversion factors

:::warning Behaviour fitting numbers
The behaviour fitting numbers are once generated to fit the results of the heat demand curves generator script with curves from EBN. Since the EBN curves represent heat demand curves typical for the Netherlands and of a specific weather year, it is questionable to apply these behaviour fitting numbers to other country datasets or to other weather years. In future improvements of the heat demand curves generator, the use of the behaviour fitting numbers will therefore be reviewed and potentially dropped in the future. 
:::

#### Country-specific inputs
Country-specific inputs consist of inputs that can be different per country. The settings are specified in CSV files which can also be provided by users. They consist of:
- **Outside temperature**: a CSV with 8760 rows containing the outside temperature for each hour of the year [degrees C]
- **Irriadance**: a CSV with 8760 rows containing the solar irradiance for each hour of the year [J/cm^2]
- **Thermostat settings**: a CSV three columns and 24 rows, containing inside thermostat settings per insulation level _low_, _medium_, _high_ and for each hour of the day [degrees C]

### Methods





<div style={{ textAlign: "center" }}>
  <img
    alt="Park diagram showing a producer connected to a battery, output, and curtailment"
    src={useBaseUrl("/img/docs/contrib/always-on-battery-park.png")}
  />
</div>

## Setting up a battery park

### Graph structure

A battery park requires five nodes to be added to the graph:

1. **Producer**: This represents wind turbines, solar panels, etc, which produce electricity according to a profile.
2. **Battery**: When the producer outputs more energy than can be delivered to the HV network, the excess is provided to the battery.
3. **Curtailment**: Energy is diverted here when the battery cannot store all the energy.
4. **Output**: The producer and battery send energy to the output node before it is delivered to the grid.
5. **Wasted storage**: Energy that decays in the battery, or is remaining at the end of the year, is directed into the wasted storage node.

All edges between nodes are reversed share edges, except that from the battery to wasted storage which should be `inversed_flexible`.

<div style={{ textAlign: "center" }}>
  <img
    alt=""
    src={useBaseUrl("/img/docs/contrib/always-on-battery-park-edges.png")}
  />
</div>

The "Wasted storage" node does not need to be unique to the battery park; many parks may share the same node.

<div style={{ textAlign: "center" }}>
  <img
    alt="Diagram showing two battery parks sharing a wasted storage node"
    src={useBaseUrl("/img/docs/contrib/always-on-battery-park-shared.png")}
  />
</div>

### Producer node

The producer requires the following `merit_order` attributes:

* `group`: The name of the profile to be used to shape the hourly load from the producer.
* `level`: The level at which the technology appears in the electricity network.
* `type`: Always set to `producer`.
* `subtype`: Always set to `always_on_battery_park`.
* `relations.curtailment`: The key of the curtailment node.
* `relations.output`: The key of the output node.
* `relations.storage`: The key of the storage/battery node.

All attributes are required.

**For example:**

```
- merit_order.group = dynamic: wind_inland
- merit_order.level = hv
- merit_order.relations.curtailment = park_curtailment
- merit_order.relations.output = park_output
- merit_order.relations.storage = park_storage
- merit_order.subtype = always_on_battery_park
- merit_order.type = producer
```

### Storage node

The storage node requires a `storage` attribute:

* `volume`: The volume of the battery in MWh. May be zero. *(Required)*
* `cost_per_mwh`: The cost per MWh of installed storage volume. *(Optional)*
* `decay`: The percentage of stored energy that decays each hour. Defaults to zero. *(Optional)*

**For example:**

```
- storage.cost_per_mwh = 3.4
- storage.decay = 2.57202e-03
- storage.volume = 8400.0
```

### Output node

The output node must have an `electricity_output_capacity` attribute which specifies how much energy can flow between it and the HV network each hour (in MW):

```
- electricity_output_capacity = 10
```

## Outputs

The following data can be expected after the merit order has run.

### Producer node

* `demand`: the total amount of electricity produced annually, including energy which is curtailed
* `electricity_output_curve` the hourly electricity output from the producer, including curtailment

### Battery node

* `demand`: the total amount of electricity that flows through the battery in a year
* `electricity_input_curve`: the hourly electricity input to the battery
* `electricity_output_curve`: the hourly electricity output from the battery
* `storage_curve`: a curve showing how much energy is stored in the battery for each hour in the year

### Output node

* `demand`: the total amount of electricity delivered to the HV network by the park
* `electricity_output_curve`: the hourly electricity which flows out from the output (and therefore from the producer and battery combined)

### Curtailment node

* `demand`: the total amount of curtailed energy from the producer
* `electricity_input_curve`: describing how much energy is curtailed in each hour

### Wasted storage

* `demand`: the total amount of electricity from the battery which remains unused at the end of the year, or which decays while stored

## Updating values with GQL

#### Change the amount of storage

```
UPDATE(
  V(storage_node_key, storage),
  volume,
  USER_INPUT()
)
```

Alternatively, you may choose to set a non-zero volume in the node file and change the storage node's `number_of_units` attribute.

#### Change the capacity of the output to network connection

```ruby
UPDATE(
  V(output_node_key),
  electricity_output_capacity,
  USER_INPUT()
)
```
