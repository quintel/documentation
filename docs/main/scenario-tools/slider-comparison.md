---
title: Slider comparison analysis
---

## How does it work?
The slider comparison analysis allows you to analyse the impact of individual or a set of sliders on specified queries (outcomes), such as CO<sub>2</sub> emission reduction or annual costs. To use this tool, you have to create a scenario by adding a name, area and end year to the [`scenario_list`](#scenario_listcsv). Furthermore, the [`slider_comparison_settings`](#slider_comparison_settingscsv) should contain names of the relevant sliders for your scenario and the queries of which you would like to obtain the slider impact. This tool generates a [`slider_comparison_results`](#slider_comparison_resultscsv) CSV file with outcomes on the requested queries. 

## Setting up the CSV input files
To do a slider comparison analysis you can edit two CSV files in the input folder. The [`scenario_list`](#scenario_listcsv) file contains general information about your scenario, such as the region and target year. Secondly, the [`slider_comparison_settings`](#slider_comparison_settingscsv) file contains the ETM slider values and queries for your scenario as specified in `scenario_list.csv`. 

:::info CSV settings
Please note that the scenario-tools use a default CSV separator and decimal separator for reading and exporting CSV files as provided in [settings](advanced-settings.md#configuring-the-tool). If you want to change the default separator in accordance with your local CSV settings, please follow the instructions on the settings page. 
:::

### scenario_list.csv
In `scenario_list.csv` you can create a row for the scenario you wish to process. The CSV contains the columns specified below. In order to do a slider comparison analysis, the columns that at least should be filled in are **short_name**, **area_code** and **end_year**. Some columns should be left empty as specified below since these are not considered in the slider comparison analysis (however, these columns could be used for other tools of the scenario-tools collection). 
 * **short_name**. Here you can specify an identifier for each scenario.
 * **title**. Scenario title. This is displayed in the ETM front-end.
 * **area_code**. Scenario region. A full list of available area codes can be found on [Github](https://github.com/quintel/etsource/tree/production/datasets).
 * **end_year**. The target year / year of interest of each scenario.
 * **description**. Scenario description. This is displayed in the model’s front-end.
 * **id**. Should be left empty if you want to create a new scenario. If you want to update an existing scenario, you can specify its ID here.
 * **keep_compatible**. True or False. Is False by default if left empty. Determines whether the scenario should be updated automatically if we make changes to the model; keeping your scenario compatible with future versions of the ETM, see [forward compatibility](/api/scenarios#forward-compatibility)).
 * **heat_network_order**. This column will be ignored in the current version of the slider comparison analysis and should be left empty. 
 * **curve_file**. This column will be ignored in the current version of the slider comparison analysis and should be left empty. 
 * **heat_demand**. This column will be ignored in the current version of the slider comparison analysis and should be left empty. 

:::warning Keep compatible
Not keeping your scenario compatible with newer model versions can cause the model to break or lead to unforeseen outcomes for your scenarios.
:::

### slider_comparison_settings.csv
The `slider_comparison_settings.csv` file contains the slider settings of your scenario and the queries for which you would like to obtain the impact of slider settings. The first column contains a chosen name for the set of sliders you want to analyse. The second column contains the slider names of your set. A set could either contain multiple sliders or just an individual slider. A list of all slider keys can be found [here](https://energytransitionmodel.com/saved_scenarios/16707.csv) (CSV file).

In the example below, the set name
__set_space_heating_hot_water__ contains the sliders __households_heater_hybrid_hydrogen_heatpump_air_water_electricity_share__ and __households_heater_heatpump_ground_water_electricity_share__. The set name __households_heater_heatpump_air_water_electricity_share__ contains only one slider, which has the same slider name __households_heater_heatpump_air_water_electricity_share__. 

For each slider a slider start and future value can be set. The slider will inherit its default value if the value cell is left empty. Sliders missing from the set will also inherit their default value. In the example below, the slider in set __households_heater_heatpump_air_water_electricity_share__ has a start value equal to the default value and a future value of __15__ (%). For the set __set_space_heating_hot_water__, the slider __households_heater_heatpump_air_water_electricity_share__ has start value equal to the default value and future value __15__ (%). The slider __households_heater_district_heating_ht_steam_hot_water_share__ has start value __2__ (%) and future value __20__ (%). 

Finally, the last column `output_gquery` contains the name of the query of which you want to obtain the impact of the slider start and future value. A query is a small ‘request’ for information on a specific topic. For example, each item in the ETM’s dashboard is a query (e.g. ‘total annual costs’, ‘total CO<sub>2</sub> reduction’). Similarly, each series of a chart in the ETM is a query (e.g. ‘electricity demand for households space heating’, ‘gas demand for households space heating’). A list of all available queries can be found on [Github](https://github.com/quintel/etsource/tree/production/gqueries).

In the example below, the primary CO<sub>2</sub> emissions of the households sector are obtained with __primary_co2_of_households__. If you would like to obtain more queries, these entries should be added in separate rows, together with the relevant slider settings. 

*Example file:*

| set_name  | slider_name   | slider_start_value   |    slider_future_value   |    output_gquery
|---|---|---|---|---|
| households_heater_heatpump_air_water_electricity_share  | households_heater_heatpump_air_water_electricity_share  |   |   15   |   primary_co2_of_households
| set_space_heating_hot_water  | households_heater_heatpump_air_water_electricity_share  |   |  15   |  primary_co2_of_households
| set_space_heating_hot_water  | households_heater_district_heating_ht_steam_hot_water_share  | 2 |  20   |  primary_co2_of_households

## slider_comparison_results.csv
The slider comparison analysis generates the output CSV `[YYYYMMDD]_slider_comparison_settings_[SCENARIO_NAME].csv` with the outcomes of the slider settings on the requested queries. This file will be provided in the output folder. The first and second column of the CSV provide respectively the set and query names as provided in `slider_comparison_settings.csv`. The third column provides the unit of the query outcome. The last two columns provide the query outcomes for respectively the start and future slider values as specified in `slider_comparison_settings.csv`. 

In the example below, the primary CO<sub>2</sub> emissions of households for set __households_heater_heatpump_air_water_electricity_share__ was 0.138 MT with the slider start value and 0.137 MT with the slider future value. In the second row, the combined result are provided for the start and future slider values of the set __set_space_heating_hot_water__ (containing two slider settings as defined in `slider_comparison_settings.csv`). 

*Example file:*

| set_name  | output_gquery   | unit   |    result_start_value   |    result_future_value
|---|---|---|---|---|
| households_heater_heatpump_air_water_electricity_share  | primary_co2_of_households  |  mt  |   0.138   |   0.137
| set_space_heating_hot_water  | primary_co2_of_households  |  mt |  0.137   |  0.143

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
pipenv run slider_comparison_analysis
```

With basic Python:
```
python slider_comparison_analysis.py
```

When the tool is finished, it provides a link to your scenario in the ETM with a scenario ID. If you want to do multiple slider comparison analyses for this scenario, you can provide the scenario ID in [`scenario_list.csv`](#scenario_listcsv) under **id**.

:::info Resetting a slider to its standard value
If you want to perform multiple analyses for the same scenario, note that the scenario is still set according to the slider settings under **slider_future_value** of the last set in `slider_comparison_settings.csv`. If it is desirable for these slider settings to be set to their default value in a new slider analysis, they must be included in the first set of your new or altered `slider_comparison_settings.csv`. This can be done by including the slider names in the first set and leaving the fields __slider_start_value__ and __slider_future_value__ empty.
