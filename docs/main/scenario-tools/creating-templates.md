---
title: Create a scenario template
---
## How does it work?
It's also possible to adopt the settings of an existing scenario, which we then call a scenario template.

The script will create a `template_settings.csv` file in the `output/` folder. This file provides an overview of all slider settings for each scenario template. To adopt the values, open the `adopt_template_settings.xlsx` file located in the `data` folder and copy paste the entire sheet into the `template_settings` sheet. In the `adopter` sheet you can choose which scenario template should be used by specifying the template scenario ID. Also, you can choose which scenario settings to adopt by specifying TRUE or FALSE for each input key. By default, all settings are adopted except for the ones representing a capacity (in MW). When you're done, replace the [`input/scenario_settings.csv`](creating-and-updating#scenariosettingscsv) by the sheet `scenario_settings` from the Excel file. You can then use these settings to [create or update a scenario](creating-and-updating).

## Setting up the input CSV files
For running this part of the tool only one input CSV file is needed: the one that specifies from which
scenarios you want to create a template.

### template_list.csv
The `template_list.csv` file contains the following columns:

 * **id**. Here you can specify the ETM scenario ID of the scenario template.
 * **title**. Here you can add a title for the template which is also displayed in the template settings output file.

## Running the tool
You can run the template script in your console with the following commands.

With `pipenv`:
```
pipenv run get_template_settings
```

Or with basic Python:
```
python get_template_settings.py
```
