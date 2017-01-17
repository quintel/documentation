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

# Testing a local dataset

## Through ETModel + ETEngine

Testing a local dataset would go through running ETModel - and ETEngine
alongside with it - locally. You can than select your newly created dataset
from the select box and create a new scenario with it.
select your newly created dataset


# Editing a local dataset

## Which inputs can I edit?

In theory all inputs that are in the `etsource/inputs/` folder can be used as an initializer
input to manipulate certain properties of the graph. These properties for example can be
the number of units or the demand of a certain node. For the sake of consistency and to apply
an arbitrary guideline; the initializer inputs will live inside of `etsource/inputs/initializer_inputs`.

## How do I apply these initializer inputs?

## Format of an initializer input

## Validation and conflicts


TODO:
- Verify with JB if it's possible to create a template for xls.
