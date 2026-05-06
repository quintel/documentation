# Jupyter Notebooks

This guide explains the example notebooks included with PyETM and how to use them effectively
for scenario analysis and data manipulation.

---

## Overview

The PyETM package includes example Jupyter notebooks in the `examples/` directory that demonstrate different ways of
working with scenarios via the API:

1. **`basic_features.ipynb`** - Excel workflows, scenario creation, and core functionality
2. **`advanced_features.ipynb`** - Batch operations, interpolation, user management, and ScenarioPacker

Both notebooks are designed to help you understand PyETM's capabilities and provide starting points
for your own workflows. They use helper functions from `examples/example_helpers.py` for setup and logging configuration.

---

## 1. Basic Features Notebook

Notebook: `examples/basic_features.ipynb`

### Purpose
This notebook demonstrates the core PyETM functionality including Excel-based workflows, scenario creation,
copying, querying results, and exporting data. It provides a comprehensive introduction to working with
ETM scenarios programmatically and via Excel.

### Key Functionalities

#### Scenario Management
- **Load scenarios by ID**: Load existing scenarios from MyETM
- **Create new scenarios**: Create scenarios programmatically with specified parameters
- **Copy scenarios**: Duplicate scenarios with or without preset links
- **Create sessions**: Work with transient ETEngine sessions

#### Excel-Based Workflows
- **Read from Excel**: Import scenario configurations from structured Excel files
- **Write to Excel**: Export scenario data, inputs, and results to Excel workbooks
- **Structured data format**: Use the MAIN sheet for scenario definitions and EXPORT_CONFIG for output control

#### Data Access and Analysis
- **Scenario metadata**: View scenario properties (title, ID, area, end year, version)
- **Input parameters**: Access user values, defaults, min/max ranges, and permitted values
- **Couplings**: View interdependent input parameters and external model connections
- **Sortables**: Access merit order and priority queue data
- **Custom curves**: Work with 8760-hour time-series data and custom profiles
- **Gquery results**: Execute queries and retrieve calculated outputs
- **Annual exports**: Access energy flows and production parameters
- **Hourly output curves**: Retrieve 8760-hour calculated time-series

#### Export and Visualization
- **Excel export**: Generate comprehensive workbooks with configurable data types
- **Custom curves visualization**: Plot 8760-hour profiles
- **Logging configuration**: Control output verbosity for batch operations

### Typical Use Cases
- **Learning PyETM**: Understand core functionality through practical examples
- **Excel-based workflows**: Configure and analyze scenarios using Excel
- **Individual scenario analysis**: Deep dive into a single scenario's data
- **Results exploration**: Access and visualize various types of scenario outputs
- **Template creation**: Build Excel templates for consistent scenario configuration

### Getting Started
1. Place your Excel input files in the `examples/inputs/` folder (use `example_input_excel.xlsx` as a template)
2. Configure scenario IDs for scenarios you own or have access to
3. Run through the notebook cells to see the complete workflow
4. Outputs will be saved to `examples/outputs/`

**Note:** Exporting detailed data (curves, hourly outputs, annual exports) increases processing time. If you only need to update inputs or access basic results, exclude these from your export configuration.

### Excel File Structure
Specify scenario inputs with one scenario per row in the MAIN sheet:

**MAIN Sheet Columns:**
- `short_name`: Internal identifier for the scenario (used in PyETM and input specifications)
- `scenario_id`: For loading existing scenarios, specify the MyETM scenario ID
- `template`: Reserved for future use
- `title`: Scenario title (set in metadata)
- `description`: Scenario description (set in metadata)
- `area_code`: Required for new scenarios - determines the base region (e.g., "nl2023")
- `end_year`: Required for new scenarios - determines the end year (e.g., 2050)
- `private`: Boolean (TRUE/FALSE) - set to TRUE to restrict access to your account
- `custom_curves`: Name of the sheet containing custom curve data (optional)
- `sortables`: Name of the sheet containing sortable data (optional)

**EXPORT_CONFIG Sheet:**
Set each option to TRUE or FALSE to control what data is included in Excel exports:
- `include_inputs`: Export input parameter values
- `include_exports`: Export annual energy flows and production data
- `include_gqueries`: Export gquery results
- `include_custom_curves`: Export 8760-hour custom profiles
- `include_hourly_curves`: Export 8760-hour calculated outputs
- `include_sortables`: Export merit order and priority queue data

---

## 2. Advanced Features Notebook

Notebook: `examples/advanced_features.ipynb`

### Purpose
This notebook demonstrates advanced PyETM capabilities including batch operations, scenario interpolation,
user management, and the ScenarioPacker class for efficient multi-scenario data processing.

### Key Functionalities

#### Batch Scenario Operations
- **Bulk loading**: Load multiple scenarios by ID with `load_many()`
- **Batch creation**: Create multiple scenarios with different parameters using `create_many()`
- **Scenario copying**: Duplicate scenarios with `copy()` and `copy_with_preset()`
- **Scenario interpolation**: Create intermediate-year scenarios between two endpoints

#### User Management
- **Add collaborators**: Grant other users access to scenarios with specific roles
- **Update permissions**: Modify user roles (viewer, scenario_viewer, scenario_contributor, scenario_owner)
- **Remove users**: Revoke access for specific users
- **List users**: View all users with access to a scenario

#### ScenarioPacker for Multi-Scenario Analysis
- **Unified data structure**: Aggregate multiple scenarios into pandas DataFrames
- **Flexible data access**: Extract inputs, custom curves, sortables, hourly curves, and annual exports
- **Column customization**: Select specific data columns for focused analysis
- **Batch export**: Export multiple scenarios to a single Excel workbook with multiple sheets
- **Query execution**: Run gqueries across all scenarios and compare results

#### Advanced Data Processing
- **DataFrame integration**: Leverage pandas for advanced data manipulation
- **Comparative analysis**: Compare inputs and outputs across multiple scenarios
- **Custom workflows**: Build specialized analysis pipelines for large-scale studies
- **Logging control**: Configure output verbosity for batch operations

### ScenarioPacker Capabilities
The `ScenarioPacker` class provides efficient multi-scenario data access:

**Data Access Methods:**
- **`inputs(columns=None)`**: Access input parameters across all scenarios, optionally filtering columns
- **`custom_curves(columns=None)`**: Retrieve 8760-hour time-series and profile data
- **`sortables(columns=None)`**: Get merit order and priority queue data
- **`gquery_results()`**: Access query results with scenarios as columns
- **`hourly_output_curves(columns=None)`**: Retrieve 8760-hour calculated outputs
- **`annual_exports(columns=None)`**: Access annual energy flows and production parameters

**Export Methods:**
- **`to_excel(path, include_input_details=False)`**: Export to Excel with configurable detail level
- **`from_excel(path)`**: Restore scenarios and data from previously exported Excel files

**Configuration:**
- Add scenarios with `packer.add(scenario1, scenario2, ...)`
- Add queries with `packer.add_queries([query1, query2, ...])`
- Configure per-scenario exports using `scenario.set_export_config(ExportConfig(...))`

### Typical Use Cases
- **Large-scale comparative studies**: Analyze many scenarios simultaneously
- **Scenario interpolation**: Create transition pathways between different years
- **Collaborative projects**: Manage user access and permissions for shared scenarios
- **Multi-scenario exports**: Generate comprehensive Excel reports with data from multiple scenarios
- **Custom analysis pipelines**: Build specialized workflows leveraging pandas DataFrames
- **Performance optimization**: Handle large datasets efficiently with batch operations

### Getting Started
1. Update scenario IDs in the examples to use scenarios you own or have access to
2. Experiment with `create_many()` parameters to create scenario variations
3. Try the interpolation examples to create intermediate-year scenarios
4. Explore user management features to collaborate with colleagues
5. Use `ScenarioPacker` to aggregate and analyze multiple scenarios
6. Experiment with different export configurations

---

## Choosing the Right Notebook

### Use `basic_features.ipynb` when:
- Learning PyETM for the first time
- Working with individual scenarios
- Using Excel-based configuration workflows
- Exploring a single scenario's data in depth
- Creating template-based scenarios

### Use `advanced_features.ipynb` when:
- Processing multiple scenarios simultaneously
- Creating scenario interpolations across years
- Managing user access and collaboration
- Building custom analysis workflows with pandas
- Developing programmatic tools that use PyETM
- Generating comparative reports across multiple scenarios

---

## Helper Functions

Both notebooks use utilities from `examples/example_helpers.py`:

- **`setup_notebook()`**: Initializes logging and displays configuration info
- **`setup_logging(level)`**: Configures logging verbosity (DEBUG, INFO, WARNING, ERROR, CRITICAL)

These helpers provide consistent setup and make it easier to control output verbosity during batch operations.
