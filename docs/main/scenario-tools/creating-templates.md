---
title: Create a scenario template
---
## How does it work?
It's possible to adopt the settings of an existing scenario, which we then call a scenario template. First, the settings of existing scenarios are obtained with the [get_template_settings](#running-the-get_template_settings-tool) tool. Subsequently, these settings can be adopted with the [scenario_from_csv](creating-and-updating#scenariosettingscsv) tool. 

## Obtain scenario settings
By running the tool, the script will create a `template_settings.csv` file in the `output/` folder. This file provides an overview of all slider settings for each scenario template as provided in the [template list](#template_listcsv) file. 

In addition, it is also possible to obtain balanced slider settings, custom orders (e.g. hydrogen supply and demand orders, heat network orders) and custom uploaded curves of the template scenarios. When the balanced slider settings and heat network orders are obtained, these are provided in respectively  `output/template_settings_balanced_values.csv` and `output/orders/heat_network_orders.csv` containing the relevant output for all scenarios. Custom orders other than the heat network orders are provided in `output/orders` in a separate CSV per scenario. Similarly, custom curves are provided in `output/curves` in a separate CSV per scenario.

### Setting up the input CSV file
For running this part of the tool only one input CSV file is needed: the one that specifies from which
scenarios you want to create a template.

#### template_list.csv
The `template_list.csv` file contains the following columns:

 * **id**. Here you can specify the ETM scenario ID of the scenario template.
 * **title**. Here you can add a title for the template which is also displayed in the template settings output file.

## Adopt obtained scenario settings
The obtained scenario settings can be adopted by preparing the required input CSVs for the `scenario_from_csv` tool. This [page](creating-and-updating) explains more about the configuration of the required CSVs. Below, the steps to go from the `get_template_settings` output to the required input CSVs are described. 

### Adopt slider values
There are two methods to configure the required CSV file for adopting the obtained slider values. If all obtained slider values of all scenarios can be adopted, you can open the `template_settings.csv` output file, remove the second row (where scenario ids are listed) and write 'input' in the first cell of the first row. This way, the format equals that of `scenario_settings.csv` (also see the correct configuration of this file [here](creating-and-updating#scenario_settingscsv)). Then, the `template_settings.csv` file can be copied to the `input/` folder and renamed to `scenario_settings.csv` (overwrite the existing file). 

 If you want to explicitely specify which slider values of which scenarios (from `template_settings.csv`) to adopt, open the `adopt_template_settings.xlsx` file located in the `data` folder and copy paste the entire sheet into the `template_settings` sheet. In the `adopter` sheet you can choose which scenario template should be used by specifying the template scenario ID. Also, you can choose which scenario settings to adopt by specifying TRUE or FALSE for each input key. By default, all settings are adopted except for the ones representing a capacity (in MW). When you're done, replace the [`input/scenario_settings.csv`](creating-and-updating#scenariosettingscsv) by the sheet `scenario_settings` from the Excel file. 
 
### Adopt heat network orders and custom curves
If the heat network orders and custom curves of the template scenarios are also obtained, it is possible to adopt these as well. To set the heat network orders, the file `output/orders/heat_network_orders.csv` can be copied to the `input` folder (overwrite existing file). 

To adopt the custom curves, copy the curves of the desired scenarios in `output/curves` to `input/curves`. Additionally, provide the custom curve CSV file name (exlcuding the '.csv' extension) in the `input/scenario_list.csv` under the column `curve_file`. 

Consult the [create or update a scenario](creating-and-updating) page for more information on the configuration of the CSV files and on instructions of running the tool. 

:::info Limitations
Currently, it is not yet possible to set the custom orders (other than the heat network orders) or balanced slider values with the `scenario_from_csv` tool.
:::


## Running the get_template_settings tool
As mentioned before, it is possible to only obtain the scenario slider values or to also obtain the balanced slider values, custom orders and custom curves. 

### Obtain slider values
To only obtain the scenario slider values, run the following command in your console:

With `pipenv`:
```
pipenv run get_template_settings
```

Or with basic Python:
```
python get_template_settings.py
```

### Obtain balanced values, orders and curves
If you also want to obtain balanced values, custom orders and custom curves, add `complete` to the command as shown below. The slider values will also be obtained with this command. 

With `pipenv`:
```
pipenv run get_template_settings complete
```

Or with basic Python:
```
python get_template_settings.py complete
```
