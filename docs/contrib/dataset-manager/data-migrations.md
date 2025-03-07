---
title: Data migrations
---

Datasets in the manager frequently need to be updated to reflect changes in real-world circumstances, our data sources, or the structure of the ETM. This can be done with a data migration.

## Creating a data migration

In the ETLocal (dataset manager) directory run:

```shell
bundle exec rails generate data_migration some_name
```

In place of "some_name" provide a short descriptive name for your migration; typically a couple of words will suffice. Please use underscores instead of spaces. This will generate the scaffolding for a data migration.

```shell
bundle exec rails generate data_migration add_perpetual_motion_plants
#    create  db/migrate/20210916140539_add_perpetual_motion_plants.rb
#    create  db/migrate/20210916140539_add_perpetual_motion_plants/data.csv
#    create  db/migrate/20210916140539_add_perpetual_motion_plants/commits.yml
```

This action created three files:

1. A Ruby on Rails ActiveRecord migration. It's unlikely you'll have to change anything in this file.
2. A sample CSV file containing the data to be updated.
3. A sample commits YAML file which tells the migration which fields are to be updated.

### Data CSV file

The data CSV file has one mandatory column: `geo_id`. This specifies the unique ID for each dataset to be updated. Naturally, a CSV with no other columns serves no purpose – nothing will happen when you run the migration. Add additional columns to the CSV for the attributes which you want to change.

For example, when the following migration is run, datasets identified by the geo IDs "XX0042" and "XX1337" will be updated with new values for `analysis_year` and `number_of_residences`.

```csv
geo_id,analysis_year,number_of_residences
XX0042,2019,11000
XX1337,2019,12000
```


### Commits YAML file

The YAML file allows you to split the data update into multiple commits. This is useful when you have one data file but wish to show multiple updates to the dataset – for example, one commit to update the industry sector and another to update transport.

Open the "commits.yml" file to find instructions on adding commits and specifying which data should be updated.

### Adding new datasets

The migration file which ends with ".rb" generally does not need to be edited. However, this will be necessary if you wish to add new datasets. In that case, open the migration file and see the documentation for the `create_missing_datasets: true` option. If you use this option be sure that your CSV file contains all the attributes needed to create a fully functional dataset.

## Running the migration

```sh
bundle exec rails db:migrate
```

## Errors

Running the migration will raise an error if:

* **Your commits YAML names fields that don't exist in the CSV file**.

  Check the CSV file to ensure you've added all the data. Adding the missing columns to the data CSV or removing the unknown fields from the commits YAML should cause the migration should run successfully.

* **The data CSV file contains columns that aren't specified in the commits YAML file**.

  If the CSV contains fields which you haven't used, an error is raised. In this case, the columns aren't needed for the migration to run but could be an indication that you've forgotten to include them in the commits YAML.
