---
title: Introduction
---
## What are the scenario-tools?
The scenario-tools are a small collection of tools written in Python that allow ETM users to
communicate to the ETM without accessing the web-interface. Input and output data is all
in CSV format for easy incorporation in Excel workflows.

You can download or clone the tools from [our Github](https://github.com/quintel/scenario-tools).

To run the tools a Python installation is required, but working the tool requires no prior knowlegde
of that programming language.

With the tool you can:
- [Download scenario results and query e.g. dashboard items](retrieving-data.md)
- [Create or update scenario slider settings and custom curves](creating-and-updating.md)
- [Compare scenario results for varying individual or combined slider settings](slider-comparison.md)
- [Create a template of a scenario which you can use to create new sceanrios](creating-templates.md)
- [Create a regional overview combining multiple scenarios](regional-overview.md)

## Input and output
The scenario-tools read input data, such as slider settings or requested downloads, from several CSVs
that you must supply. This section gives a quick overview of what to expect.

By default, and when you first look at the tool after downloading it, the `input` and `output` folders are located in the `data` folder. The tool will read and write to the files in these folders when you run it. If you want the input data to be read from another location on your computer,
or the output data to be written to another folder, you can change this in the [settings](advanced-settings.md#configuring-the-tool). Please note that the tool will still expect the input file names to stay the same.

### Input
:::info Dummy data in the input files
All input files contain dummy data, to give you an actual example of how the data should be presented. Make sure to clear the dummy data from the files when you start using the tool.
:::

Each functionality of the tool requires its own input CSVs. The neccesary files for each function will be
described on the dedicate pages.

Here is a list of the files that can be encountered in the input folder:
 * `scenario_list.csv` - Contains general information about the scenarios, such as the region and target year
 * `scenario_settings.csv` - Contains the ETM slider values for each of the scenarios specified in `scenario_list.csv`
 * `queries.csv` - Contains a list of queries (scenario outcomes) you would like to retrieve for each scenario.
 * `data_downloads.csv` - Contains a list of data exports you would like to retrieve for each scenario.
 * `template_list.csv` -  Contains a list of scenario templates specified by its scenario ID
 * `regional_overview.csv` -  Contains a list of scenarios of different areas that will make up the region to be overviewed
 * `slider_comparison_settings.csv` - Contains sets of start and future slider values and queries you would like to retrieve per slider set.

In addition, you may add CSV files containing custom supply, demand and price [curves](creating-and-updating#curves) to the `input/curves` folder.

### Output
The scripts create/update/query the scenarios in the Energy Transition Model and print the corresponding URLs in the terminal. In addition, depending on the tools of scenario-tools that are used, the following is added to the `data/output` folder:

 * A `scenario_outcomes.csv` file containing the query outcomes for all scenarios, including a column containing the values for the present year and the unit of each query
 * Sub folders for each scenario `short_name` containing the data exports
 * A `slider_comparison_results.csv` containing the query outcomes per slider set as specified in `slider_comparison_settings.csv`

## Getting started

Make sure you have [Python 3](https://www.python.org/downloads/) installed. Then, install all required libraries by opening a terminal/command-prompt window in the `scenario-tools` folder (or navigate to this folder in the terminal using `cd "path/to/scenario-tools-folder"`). All following examples of running the tool
expect you to be in this folder.

#### Using pipenv
It is recommended (but not required) that you use [`pipenv`](https://pipenv.pypa.io/en/latest/) for running these tools. When using `pipenv`
it will create a virtual environment for you. A virtual environment helps with keeping the libaries you install here separate of your global libraries (in
other words your `scenario-tools` will be in a stable and isolated environment and are thus less likely to break when updating things elswhere on your computer)
and this one comes with some nice shortcuts for running the tools.

You can instal `pipenv` with `pip` or `pip3` if you don't have it installed yet.
```
pip3 install pipenv
```

Then you can create a new environment and install all the libraries in one go by running:
```
pipenv install
```

#### Using basic Python
Alternatively, if you do **not** want to use `pipenv` you can also install the requirements globally by running:
```
pip3 install -r requirements.txt
```
