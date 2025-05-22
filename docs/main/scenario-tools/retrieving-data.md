---
title: Retrieving scenario data
---
## How does it work?
With the scenario-tools scenario data can be extracted from the ETM without having to access the
interface and pressing the download button. The only thing you need is the ID of each scenario you
want to extract information from.

There are two main applications: extracting query information (asking questions to the graph), and
automatic downloads. Each of these requires a different CSV file to be configured in your input folder,
but both require you to set up the [scenario_list](#scenario_listcsv) with the correct scenario IDs.

After you run the tool, the results will appear in the output folder. A folder with the `short_name` of
the scenario will be created containing all downloaded files. And a CSV file called `scenario_outcomes`
will be created in the main output folder containing the sceanrio(s) as columns, and the query results as rows.

## Setting up the input CSV files
For both applications, extracting query information and collecting downloads, the [scenario_list](#scenario_listcsv) file should be configured. For extracting queries the [queries](#queriescsv) file
should be set up, and for collecting downloads the names of the downloads should be specified in the
[data_downloads](#data_downloadscsv) file. If you will not be using either the queries or downloads, you
can leave the rows blank.

### scenario_list.csv
Each row in this file represents an ETM scenario. The `scenario_list.csv` file contains a lot of columns, but for the purpose of extracting data all of them can be
left blank except for the following:

 * **short_name**. Here you can specify an identifier for each scenario. NOTE: `short_names` must be unique!
 * **area_code**. Scenario region. A full list of available area codes can be found on [Github](https://github.com/quintel/etsource/tree/production/datasets).
 * **id**. The ETM scenario ID.

### queries.csv
The `queries.csv` file contains a list of queries that will be collected for each scenario. A query is a small ‘request’ for information on a specific topic. For example, each item in the ETM’s dashboard is a query (‘total annual costs’, ‘total CO<sub>2</sub> reduction’). Similarly, each series of a chart in the ETM is a query (‘electricity demand for households space heating’, ‘gas demand for households space heating’ etc.). A list of all available queries can be found on [Github](https://github.com/quintel/etsource/tree/production/gqueries).

*Example file:*

| query  |
|---|
| dashboard_co2_emissions_versus_start_year |
| dashboard_total_costs |
| dashboard_power_shortage_hours |


### data_downloads.csv
The `data_downloads.csv` allows you to specify all [data export](https://pro.energytransitionmodel.com/scenario/data/data_export/energy-flows) CSVs that will be downloaded for each scenario. The file contains two columns. One column for specifying which *annual* data exports you are interested in and one column specifying the *hourly* data exports.

*Example file:*

| annual_data  | hourly_data |
|---|---|
| energy_flow | electricity_price
| application_demands | hydrogen
| production_parameters | heat_network
| | household_heat


## Running the tool

For retrieving data the tool should be run in `query-only` mode.

In query-only mode the scripts will only collect scenario results ([queries](#queriescsv) and [data downloads](#data_downloadscsv)). No changes will be made to existing scenarios, nor will new scenarios be created. The latter means that scenarios in the [`scenario_list.csv`](#scenario_listcsv) without an 'id' will be ignored, as these scenarios have not yet been created.

With `pipenv` run:
```
pipenv run scenario_from_csv query_only
```

With basic Python run:
```
python scenario_from_csv.py query-only
```
