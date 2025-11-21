# Jupyter Notebooks

This guide explains the two main example notebooks included with PyETM and how to use them effectively
for scenario analysis and data manipulation.

---

## Overview

The PyETM package includes two comprehensive Jupyter notebooks that demonstrate different ways of
working with scenarios via the API:

1. **`scenarios_with_excel.ipynb`** - Complete workflow from Excel input to API interaction
2. **`scenarios_with_packer.ipynb`** - Programmatic scenario management and data export

Both notebooks are designed to help you understand PyETM's capabilities and provide starting points
for your own workflows.

---

## 1. Scenarios with Excel Notebook

Notebook: `scenarios_with_excel.ipynb`

### Purpose
This notebook demonstrates the complete end-to-end workflow for working with ETM scenarios using Excel
as the primary interface. It shows how to load existing scenarios, create new ones, and export results
back to Excel format.

### Key Functionalities

#### Excel-Based Scenario Management
- **Load scenarios from Excel**: Import scenario configurations, inputs, and metadata from structured Excel files
- **Create new scenarios**: Automatically create scenarios in the ETM based on Excel specifications
- **Update existing scenarios**: Modify loaded scenarios with new inputs and parameters

#### Data Exploration and Analysis
- **Scenario metadata inspection**: View and analyze scenario properties (title, ID, area, end year, version)
- **Input parameter analysis**: Examine user inputs, defaults, min/max values, and permitted values
- **Coupling relationships**: Explore interdependent input parameters
- **Sortable data**: Access and analyze merit order and priority queue data
- **Custom curves**: View and manipulate time-series data and custom profiles
- **Query results**: Access calculated outputs and model results
- **Warning system**: Identify and troubleshoot scenario issues

#### Export Capabilities
- **Comprehensive Excel export**: Generate detailed Excel workbooks with all scenario data
- **Separate export files**: Automatically create additional files for complex data (e.g., exports by carrier type)
- **Configurable output**: Control which data types are included in exports

### Typical Use Cases
- **Batch scenario processing**: Work with multiple scenarios simultaneously
- **Data validation**: Verify scenario configurations before API submission
- **Results analysis**: Export and analyze scenario outcomes in familiar Excel format
- **Template-based workflow**: Use Excel templates for consistent scenario creation

### Getting Started
1. Place your Excel input file in the `inputs` folder (use `example_input_excel.xlsx` as a template)
2. Configure scenario IDs for scenarios you own
3. Run through the notebook cells to see the complete workflow
4. Specify where to export your 'outputs'.

**Note:** The exports and curves contribute to longer processing times. If you are only interested in updating inputs
then exclude them from your outputs.

### About the Excel
Specify scenario inputs with one scenario on each row.
In the MAIN sheet:
- short_name: The short name you can use to specify slider settings for the scenario. The short name
will also show up in PyETM as the identifier for your scenario.
- scenario_id: If you are loading an existing scenario from the ETM, specify the id here.
- template: This field is not yet implemented.
- title: The title of your scenario. This will be set in the metadata of the scenario.
- description: The description of your scenario. This will be set in the metadata of the scenario.
- area_code: If you are creating a scenario, this field is required. Determines the base area for your
scenario.
- end_year: If you are creating a scenario, this field is required. Determines the end year for your
scenario.
- private: Defaults to false. Set to true if you don't want others to access your scenario.
- custom_curves: Specify the name of the tab where you have put the custom curves for upload. Can be left blank.
- sortables: Specify the name of the tab where you have put the sortables for upload. Can be left blank.

In the EXPORT_CONFIG sheet:
Set each of the options to TRUE or FALSE depending on if you want them to be included in the export to excel.

---

## 2. Scenarios with packer (Development-Focused)

Notebook: `scenarios_with_packer.ipynb`

### Purpose
This notebook provides a more programmatic approach to scenario management, focusing on bulk operations
and data manipulation using Python code rather than Excel interfaces.

### Key Functionalities

#### Programmatic Scenario Management
- **Bulk loading**: Load multiple scenarios by ID in a single operation
- **Batch creation**: Create multiple scenarios with different parameters programmatically
- **Scenario collections**: Manage groups of scenarios as unified collections

#### Data Processing with ScenarioPacker
- **Unified data structure**: Convert all scenario data into pandas DataFrames for analysis
- **Flexible data views**: Access different aspects of scenario data (inputs, curves, sortables, exports)
- **Column customization**: Choose specific data columns for focused analysis
- **Export control**: Fine-tune what data gets included in Excel exports

#### Developer-Oriented Features
- **Direct API interaction**: Work directly with PyETM's programmatic interfaces
- **Data transformation**: Leverage pandas for advanced data manipulation
- **Batch processing**: Efficiently handle large numbers of scenarios
- **Custom analysis workflows**: Build specialized analysis pipelines

### ScenarioPacker Capabilities
The `ScenarioPacker` class is the central tool in this notebook, providing:

- **`inputs()`**: Access input parameters with customizable column selection
- **`custom_curves()`**: Retrieve time-series and profile data
- **`sortables()`**: Get merit order and queue data
- **`exports()`**: Access output carrier data
- **`to_excel()`**: Export with granular control over included data types

### Typical Use Cases
- **Large-scale analysis**: Process many scenarios efficiently
- **Custom data pipelines**: Build specialized analysis workflows
- **API integration**: Integrate PyETM into larger analyses
- **Performance optimization**: Handle large datasets with optimized data structures

### Getting Started
1. Modify the scenario IDs in the loading examples to use scenarios you own
2. Experiment with different `create_params` for scenario creation
3. Explore the `ScenarioPacker` methods to understand data access patterns
4. Try different export configurations to see how they affect output files

---


### Use `scenarios_with_excel.ipynb` when:
You prefer working with Excel for scenario configuration or want to create/update batches of
scenarios via Excel.

### Use `scenarios_with_packer.ipynb` when:
You want to understand the core PyETM development functionalities so you can use the package in
your own development project and take advantage of the API tools.
