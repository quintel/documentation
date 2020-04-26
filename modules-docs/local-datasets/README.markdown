Local datasets
==============

## How to create a local dataset?

From ETSource run

`rake scale NUMBER_OF_RESIDENCES=x DERIVED_DATASET=name FULL_DATASET=name`

## How to create a local dataset from etdataset?

**NOTE: This is currently not how it works but how it hopefully will work (unless somebody has a better vision)**

In `etdataset` there's a file called `local_dataset.xls`. This will serve as
a template for future local datasets. Inside that xls file are two fields.

A name
A number of residences like:

<table>
  <thead>
    <tr>
      <td></td>
      <td>A</td>
      <td>B</td>
    </tr>
  </thead>
  <tbody>
    <tr>
      <td>1</td>
      <td>Name:</td>
      <td>Number of residences:</td>
      <td>Dataset:</td>
    </tr>
    <tr>
      <td>2</td>
      <td>""</td>
      <td>0</td>
      <td>[ Select box with national datasets ]</td>
    </tr>
    <tr>
      <td>3</td>
      <td>[ Create local dataset ]</td>
      <td></td>
    </tr>
  </tbody>
</table>

Also - as you can see - there's a button called `Create local dataset`. When that button is pressed than a new dataset will be created through the indirect use of `rake scale DERIVED_DATASET=#{ name_of_dataset } FULL_DATASET=#{ full_dataset } NUMBER_OF_RESIDENCES=#{ number_of_residences }`. Through this job 2 unique files will be created relevant to the local dataset inside of `etsource`. These files will be named `graph.yml` and `#{ derived_dataset }.ad`. Other files like `time_curves` will be copied over and scaled in the new dataset folder.

Also at the click of that button another file is created inside of `etdataset`. Called `#{ derived_dataset }.xls` in here you can read the attributes from the `#{ derived_dataset }.ad` that lives inside of `etsource`. You can edit and update values off the `#{ derived_dataset }.ad` file.

----

## Contents of a local dataset

The structure of a local dataset is described [here](#file-structure-of-a-local-dataset). The main contents of a local datasets are the `#{ derived_dataset }.ad` and the `graph.yml`. 

- `#{ derived_dataset }`.ad contains a dataset with a similar structure to a full dataset.
- `graph.yml` contains the energy graph. A snippet of the graph can be found [here](#snippet-of-graphyml-contents).
  - Ensures that the `DerivedDataset` is immune to accidental changes caused by changes to its `base_dataset`
  - It is already scaled down
    - *Exception:* The node attributes `typical_input_capacity` and `electricity_output_capacity` are not scaled down - neither in the graph nor later (this is consistent with the old ETE scenario scaling)
      Reference: [quintel/etengine#901](https://github.com/quintel/etengine/issues/901#issuecomment-274062242)


----

## Testing a local dataset

### Through ETModel + ETEngine

Testing a local dataset would go through running ETModel - and ETEngine alongside with it - locally. You can than select your newly created dataset from the select box and create a new scenario with it.

-----

## Editing a local dataset

### Which inputs can I edit?

In theory all inputs that are in the `etsource/inputs/` folder can be used as an initializer input to manipulate certain properties of the graph. These properties for example can be the number of units or the demand of a certain node. For the sake of consistency and to apply an arbitrary guideline; the initializer inputs will live inside of `etsource/inputs/initializer_inputs`.

There are a few types of `initializer inputs` you can create: 

### General rules and conventions

1. An initializer input must be treated as any input and therefor must have a unique filename within the `inputs` folder.
2. The `update_period` of an initializer input is not needed and neither should it be used in the filename to avoid confusion. <sup>*1<sup>.
3. There should be a `USER_INPUT()` present in the `query` key of an initializer input.

[1] = The update period of an initializer input is implictly always set to both, which means that for the present and the future graph the value should be set. If that's not the case than that is a bug.

### Share groups

Share groups always consist of a set of `initializer inputs` in which you can set a group of sliders: 

![sliders](http://i.imgur.com/54k18GK.png)

The syntax of the share is as follows:

```ruby
# Example update the share of a households_space_heater_combined_network_gas
- query = UPDATE(LINK(households_space_heater_combined_network_gas,households_useful_demand_for_space_heating_after_insulation_and_solar_heater), share, DIVIDE(USER_INPUT(),100))

# Optional
- priority = 0
- update_type = '% | factor'
- share_group = ''
```

Keep in mind that the `share_group` should be unique per group of initializer inputs.

All values for a share group need to be set and add up to 100%.

### Demands of a node

```ruby
# Example update the demand of energy production bio oil
- query = UPDATE(V(energy_production_bio_oil), demand, USER_INPUT())

# Optional
- priority = 0
```

### `number_of_units` of a certain node

```ruby
# Example update the number_of_units of energy production bio oil
- query = UPDATE(V(energy_production_bio_oil), number_of_units, USER_INPUT())

# Optional
- priority = 0
```

### `child_share` or `parent_share` of an edge

To be specified

## How do I apply these initializer inputs?

`- init.<name-of-input> = <value>`

## Format of an initializer input

The only mandatory key inside of an initializer input is the `query` key. In there you'd specify a GQL to update a certain part of the graph.

## Validation and conflicts

To validate an initializer input and a derived dataset you can run the following command from ETSource:

`rspec spec/validate_spec.rb`

There are certain don'ts for editing a local dataset. Here's a list:

- Don't change the `interconnector_capacity` of a dataset. The reason for this is that this attribute is used inside the exported `graph.yml` and changing that value will result in the fact that nothing will update or change in your scenario.
- Don't change the `number_of_residences` for that same reason. 
- Don't use intializer inputs to change area attributes
- Don't update the `scaling` attributes. The `has_*` attributes are blank and they should stay that way, editing them won't result in any changes. If you do however feel like changing `has_industry` use the `has_industry` attribute from the `.ad` file. 


---

## Attachments

### File structure of a local dataset

```bash

# output of `tree datasets/test`

datasets/test
├── fce
│   ├── bio_ethanol.yml
│   ├── biodiesel.yml
│   ├── coal.yml
│   ├── crude_oil.yml
│   ├── greengas.yml
│   ├── lng.yml
│   ├── natural_gas.yml
│   ├── uranium_oxide.yml
│   └── wood_pellets.yml
├── graph.yml
├── load_profiles
│   ├── agriculture_chp.csv
│   ├── buildings_chp.csv
│   ├── dhw_normalized.csv
│   ├── industry_chp.csv
│   ├── readme.md
│   ├── river.csv
│   ├── solar_pv.csv
│   ├── total_demand.csv
│   ├── wind_coastal.csv
│   ├── wind_inland.csv
│   └── wind_offshore.csv
├── network
│   ├── network_hv_mv_trafo_distribution.csv
│   ├── network_lv_net_distribution.csv
│   ├── network_mv_d_net_distribution.csv
│   ├── network_mv_lv_trafo_distribution.csv
│   └── network_mv_t_net_distribution.csv
├── test.derived.ad
└── time_curves
    ├── energy_distribution_woody_biomass_time_curve.csv
    ├── energy_extraction_coal_time_curve.csv
    ├── energy_extraction_crude_oil_time_curve.csv
    ├── energy_extraction_lignite_time_curve.csv
    ├── energy_extraction_natural_gas_time_curve.csv
    └── energy_extraction_uranium_oxide_time_curve.csv

4 directories, 33 files
```

## Snippet of `graph.yml` contents

```yaml
---
:nodes:
  :agriculture_burner_crude_oil:
    :in:
      :crude_oil: {}
    :out:
      :useable_heat:
        :share: !ruby/object:Rational
          denominator: 1000000000000000
          numerator: 788659793814433
      :loss:
        :type: :elastic
:edges:
  :agriculture_burner_crude_oil-agriculture_useful_demand_useable_heat@useable_heat:
    :parent_share:
    :child_share:
    :demand:
    :reversed: false
    :priority:
```
