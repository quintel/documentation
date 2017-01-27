Local datasets
==============

# How to create a local dataset?

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

Also - as you can see - there's a button called `Create local dataset`. When
that button is pressed than a new dataset will be created through the indirect
use of `rake scale DERIVED_DATASET=#{ name_of_dataset } FULL_DATASET=#{ full_dataset }
NUMBER_OF_RESIDENCES=#{ number_of_residences }`. Through this job 2 unique
files will be created relevant to the local dataset inside of `etsource`.
These files will be named `graph.yml` and `#{ derived_dataset }.ad`. Other files
like `time_curves` will be copied over and scaled in the new dataset folder.
The way it will look inside of ETSource is:

```bash
datasets/ameland
├── ameland.derived_dataset.ad
├── graph.yml
└── time_curves
    ├── energy_distribution_woody_biomass_time_curve.csv
    ├── energy_extraction_coal_time_curve.csv
    ├── energy_extraction_crude_oil_time_curve.csv
    ├── energy_extraction_lignite_time_curve.csv
    ├── energy_extraction_natural_gas_time_curve.csv
    └── energy_extraction_uranium_oxide_time_curve.csv
```

Also at the click of that button another file is created inside of `etdataset`.
Called `#{ derived_dataset }.xls` in here you can read the attributes from the
`#{ derived_dataset }.ad` that lives inside of `etsource`. You can edit and
update values off the `#{ derived_dataset }.ad` file.

----

# Testing a local dataset

## Through ETModel + ETEngine

Testing a local dataset would go through running ETModel - and ETEngine
alongside with it - locally. You can than select your newly created dataset
from the select box and create a new scenario with it.


-----

# Editing a local dataset

## Which inputs can I edit?

In theory all inputs that are in the `etsource/inputs/` folder can be used as an initializer
input to manipulate certain properties of the graph. These properties for example can be
the number of units or the demand of a certain node. For the sake of consistency and to apply
an arbitrary guideline; the initializer inputs will live inside of `etsource/inputs/initializer_inputs`.

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
- share_group = test_heating_households
- unit = %

# Optional
- priority = 0
```

Keep in mind that the `share_group` should be unique per group of initializer inputs.

Not all values for a share group need to be set. In the example image above only the `households_space_heater_coal_share` was set to 10%. ETEngine knows how to balance this out succesfully. 

### Demands of a node

```ruby
# Example update the demand of energy production bio oil
- query = UPDATE(V(energy_production_bio_oil), demand, USER_INPUT())
- unit = #

# Optional
- priority = 0
```

### `number_of_units` of a certain node

```ruby
# Example update the number_of_units of energy production bio oil
- query = UPDATE(V(energy_production_bio_oil), number_of_units, USER_INPUT())
- unit = #

# Optional
- priority = 0
```

### `child_share` or `parent_share` of an edge

## How do I apply these initializer inputs?

`- init.<name-of-input> = <value>`

## Format of an initializer input

The only mandatory key inside of an initializer input is the `query` key. In there you'd specify a GQL to update a certain part of the graph.

## Validation and conflicts


TODO:
- Verify with JB if it's possible to create a template for xls.
