---
title: Creating and updating scenarios
---

## How does it work?
Next to retrieving data from existing scenarios, the tools also allow you to create or update scenarios
based on your data. When you add a name, area and end year to the [`scenario_list`](#scenario_listcsv), but
no ID, a new scenario will be created for you and the ID will be filled in automatically when running the
tools.

Next to that, you can include slider settings for each scenario, custom curves, a heat network order
and settings for heat demand curves.

## Setting up the CSV input files
To create and update ETM scenarios you can edit two CSV files in the input folder. The [`scenario_list`](#scenario_listcsv) CSV contains general information about the scenarios, such as the region and target year. And secondly, the [`scenario_settings`](#scenario_settingscsv) file contains the ETM slider values for each of the scenarios specified in `scenario_list.csv`.

Moreover, you can supply custom demand, supply and price curves for your scenarios in the [`input/curves`](#curves) folder.

### scenario_list.csv
In the `scenario_list.csv` file you can create a row for each scenario you wish to process. The CSV contains the following columns:
 * **short_name**. Here you can specify an identifier for each scenario. NOTE: short_names must be unique!
 * **title**. Scenario title. This is displayed in the ETM front-end.
 * **area_code**. Scenario region. A full list of available area codes can be found on [Github](https://github.com/quintel/etsource/tree/production/datasets).
 * **end_year**. The target year / year of interest of each scenario.
 * **description**. Scenario description. This is displayed in the model’s front-end.
 * **id**. Should be left empty if you want to create a new scenario. The ID will be filled in automatically when the scenario is created. If you want to update an existing scenario, you can specify its ID here.
 * **keep_compatible**. True or False. Is False by default if left empty. Determines whether the scenario should be updated automatically if we make changes to the model; keeping your scenario compatible with future versions of the ETM, see [forward compatibility](/api/scenarios#forward-compatibility).
 * **curve_file**. The name of a CSV file containing custom hourly profiles. For example interconnector price curves, solar production curves or industry heat demand curves. The CSV file should be placed in the `input/curves` folder.
 * **heat_demand**. *Optional - expert feature.* The name of the folder inside `input/curves` that contains either heat demand profiles, or the input files necessary to generate new profiles. See [weather years module](weather-years-module) (previously named: heat module) for more information on this functionality.

:::warning Keep compatible
Not keeping your scenario compatible with newer model versions can cause the model to break or lead to unforeseen outcomes for your scenarios.
:::

### scenario_settings.csv
The `scenario_settings.csv` file contains the slider settings of your scenarios. The first column contains the keys of all sliders (‘inputs’) that will be set. If a slider is missing from this list, it will inherit the default value. The default value is the value the slider is on when starting a new scenario. The other columns contain the scenario `short_names` (specified in `scenario_list.csv`) and the corresponding slider values. A list of all slider keys can be found on [Github](https://github.com/quintel/etsource/tree/master/inputs).

*Example file:*

| input  | scenario_short_name_1   | scenario_short_name_2   |
|---|---|---|
| households_number_of_residences  | 40000  | 37000  |
| transport_useful_demand_passenger_kms  | -1.5  | 2.3  |
| transport_vehicle_using_electricity_efficiency  | reset  | 1.2  |

:::info Resetting a slider to its standard value
If you want to remove an input from the list of inputs in your scenario, put __reset__ instead of
a value. This will reset the slider to its standard value.
:::

### curves
In the `input/curves` folder you can add custom demand, supply, price, availability and temperature curves to use in your scenarios. These curves can be used to overwrite the default ETM [profiles](https://docs.energytransitionmodel.com/main/curves#modifying-profiles). In the `scenario_list.csv` file you specify for each scenario which CSV curve file to use by adding the file name to the `curve_file` column.

Each file should look as follows:
 * The first row of each column should contain the key of the category you want to upload a custom curve for. A full ist of available keys can be found on [Github](https://github.com/quintel/etsource/blob/production/config/user_curves.yml). Example: *interconnector_1_price*
 * Row 2-8761 should contain the hourly values (one for each hour per year). Read de documentation about [modifiable profiles](https://docs.energytransitionmodel.com/main/curves#modifying-profiles) for more details on the value requirements per profile type.  
 * You can add multiple columns to customize multiple profiles
 * You can add multiple CSV files in case you want to use different profiles for different scenarios

 *Example file:*

| interconnector_1_price  | industry_chemicals_heat |
|---|---|
| 23.4 | 0.023
| 30.4 | 0.021
| 31.2 | 0.034
| 9.8 | 0.045
| ... | ...


### Heat network orders
In the file `heat_network_order.csv` it is possible to specify the three heat network orders for your scenario. In each cell of the csv, you specify the order by separating the different sources with a space "` `". The full list of technologies can be found on [Github](https://github.com/quintel/etsource/blob/production/config) (see `heat_network_order_xx.yml`).

You may omit heat sources from the order, however note that they will be added in by the ETM automatically in the default order. For example, if the default order is `a,b,c,d`, and your request provides an order of `c,b`, the resulting heat network order will be `c,b,a,d`.

If you don't specify an order, it will not be sent to the ETM. In the example below, only the MT order will be updated.

*Example file*

| order  | scenario_short_name_1 | ...
|---|---| --- |
| heat_network_order_lt | | ...
| heat_network_order_mt | energy_heat_burner_mt_coal energy_heat_burner_mt_hydrogen energy_heat_network_storage_mt_steam_hot_water | ...
| heat_network_order_ht| | ...



## Running the tool

:::info Automatic data retrieval
Please mind that the data retrieval step is run
automatically after creating or updating the scenarios. You can clear the rows in the data retrieval
files for [results](retrieving-data#queriescsv) and [data downloads](retrieving-data#datadownloadscsv)
if you don't want this behaviour.
:::

The tool can be run with the following commands.

With `pipenv` you can run:
```
pipenv run scenario_from_csv
```

With basic Python:
```
python scenario_from_csv.py
```
