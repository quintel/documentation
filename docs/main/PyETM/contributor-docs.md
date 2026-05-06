# How to develop with PyETM

This guide shows how to embed **PyETM** into your own tooling and build custom applications using the PyETM package.

---
## 1. Installation & Environment

### For Package Users
```bash
pip install pyetm
# or
poetry add pyetm
```

**Requirements:** Python 3.12 or higher is required.

**Package Structure:** PyETM is organized under `src/pyetm/` with models, services, clients, and utilities for interacting with the ETM API.

### For Contributors (Development Setup)

If you want to contribute to PyETM or work with the source code:

#### Clone the Repository
```bash
git clone https://github.com/quintel/PyETM.git
cd PyETM
```

#### Install Poetry
Follow the [official instructions](https://python-poetry.org/docs/#installation):

**For Mac with brew:**
```bash
brew install pipx
pipx install poetry
```

**For other systems:**
```bash
curl -sSL https://install.python-poetry.org | python3 -
```

**Verify installation:**
```bash
poetry --version
```

#### Install Dependencies
```bash
# Install runtime dependencies only
poetry install

# Install with development dependencies (testing, linting, etc.)
poetry install --with dev
```

This will:
- Create a virtual environment
- Install all required dependencies
- Set up the package in editable mode

#### Using the Poetry Environment

**Option 1: Run commands with `poetry run`**
```bash
poetry run pytest
poetry run python -m pyetm
poetry run jupyter notebook
```

**Option 2: Activate the shell**
```bash
poetry shell
```
Then run commands normally:
```bash
pytest
python -m pyetm
jupyter notebook
```

## 2. Configuration & Credentials

The package loads settings from a `.env` file at the project root *and* environment
variables (environment variables always override `.env` settings).

**Required:**
- `ETM_API_TOKEN` – Your API token (format: `etm_<JWT>` or `etm_beta_<JWT>`)

**Optional:**
- `ENVIRONMENT` – Target environment: `pro | beta | local | YYYY-MM` (default: `pro`)
- `BASE_URL` – Override URL directly (takes precedence over `ENVIRONMENT`)
- `LOG_LEVEL` – Logging verbosity: `DEBUG | INFO | WARNING | ERROR | CRITICAL` (default: `INFO`)
- `PROXY_SERVERS_HTTP` – HTTP proxy server URL
- `PROXY_SERVERS_HTTPS` – HTTPS proxy server URL
- `CSV_SEPARATOR` – CSV separator character (default: `,`)
- `DECIMAL_SEPARATOR` – Decimal separator for numbers (default: `.`)

**Setup Options:**

Minimal environment variable setup:
```bash
export ETM_API_TOKEN="etm_<jwt_here>"
```

Or use the CLI tool to create a `.env` template:
```bash
pyetm init
```

For contributors working from the cloned repository, copy `example.config.env` to `.env` and edit:
```bash
cp example.config.env .env
# Edit .env with your credentials
```

Programmatic override:
```python
from pyetm.config.settings import AppConfig
config = AppConfig(etm_api_token="etm_...", environment="beta")
```

## 3. Creating and Manipulating Scenarios

### Basic Scenario Operations

```python
from pyetm.models.scenario import Scenario

# Create a new scenario with area code and end year
scenario = Scenario.create(area_code="nl2023", end_year=2050)

# Load an existing scenario by ID
scenario = Scenario.load(scenario_id=12345)

# Copy a scenario
copied = scenario.copy()

# Copy with preset link (for template-based workflows)
preset_copy = scenario.copy_with_preset(preset_scenario_id=67890)

# Update ETM inputs (slider values)
scenario.update_user_values({
    "buildings_solar_pv_solar_radiation": 0.55,
    "transport_car_using_electricity_share": 0.43,
})

# Reset specified inputs to defaults
scenario.reset_inputs(["buildings_solar_pv_solar_radiation"])

# Access metadata
print(scenario.metadata)
```

### Advanced Scenario Features

```python
# Interpolate scenarios between two years
from pyetm.models.scenarios import Scenarios

base_scenario = Scenario.load(12345)
target_scenario = Scenario.load(67890)

# Create intermediate scenarios at specified years
interpolated = Scenarios.interpolate(
    base_scenario=base_scenario,
    target_scenario=target_scenario,
    years=[2030, 2040]
)
```

Sortables and custom curves can also be manipulated; see `src/pyetm/models/scenario.py` for available methods (`update_sortables`, `update_custom_curves`, etc.).

## 4. Batch Operations with ScenarioPacker

`ScenarioPacker` aggregates multiple scenarios and provides unified access to their data.

```python
from pyetm.models.scenario import Scenario
from pyetm.models.scenario_packer import ScenarioPacker

# Create or load multiple scenarios
scen_a = Scenario.create(area_code="nl2023", end_year=2035)
scen_b = Scenario.create(area_code="nl2023", end_year=2050)

packer = ScenarioPacker()
packer.add(scen_a, scen_b)
packer.add_queries(["total_co2_emissions", "electricity_demand"])

# Access data as pandas DataFrames
inputs_df = packer.inputs()                    # Input parameters
queries_df = packer.gquery_results()          # Query results
sortables_df = packer.sortables()             # Merit order data
curves_df = packer.custom_curves()            # 8760-hour custom profiles
hourly_df = packer.hourly_output_curves()     # 8760-hour calculated outputs
exports_df = packer.annual_exports()          # Annual energy flows

# Excel export with control over included data
packer.to_excel("outputs/scenarios.xlsx", include_input_details=True)
```

### Batch Loading and Creation

```python
from pyetm.models.scenarios import Scenarios

# Load multiple scenarios by ID
scenarios = Scenarios.load_many([12345, 67890, 54321])

# Create multiple scenarios with different parameters
create_params = [
    {"area_code": "nl2023", "end_year": 2030, "title": "Scenario 2030"},
    {"area_code": "nl2023", "end_year": 2040, "title": "Scenario 2040"},
    {"area_code": "nl2023", "end_year": 2050, "title": "Scenario 2050"},
]
scenarios = Scenarios.create_many(create_params)
```

### Why Use ScenarioPacker?
- Creates uniform multi-indexed DataFrames across scenario submodels
- Enables comparative analysis across multiple scenarios
- Provides central configuration via `ExportConfig` to include/exclude data types
- Efficient batch export to Excel with multiple sheets

## 5. User Management

PyETM supports collaborative workflows by allowing you to manage user access to scenarios.

```python
# Add a user with a specific role
scenario.add_user(
    user_email="colleague@example.com",
    role="scenario_contributor"
)

# Available roles:
# - "viewer" - Can view scenario in MyETM
# - "scenario_viewer" - Can view scenario details
# - "scenario_contributor" - Can edit scenario
# - "scenario_owner" - Full control over scenario

# Update a user's role
scenario.update_user(
    user_id=123,
    role="scenario_owner"
)

# Remove a user
scenario.remove_user(user_id=123)

# List all users with access
users = scenario.list_users()
```

## 6. Querying & Accessing Results

Add queries to retrieve calculated results:
```python
# Add queries at the packer level
packer.add_queries(["primary_demand_of_final_demand_electricity", "total_co2_emissions"])

# Access results as DataFrame with scenarios as columns
results_df = packer.gquery_results()
```

Individual scenario queries can also be executed; see the example notebooks in `examples/` for patterns.

## 7. Excel

You can load scenarios from Excel files:
```python
from pyetm.models.scenario_packer import ScenarioPacker

restored = ScenarioPacker.from_excel("outputs/scenarios.xlsx")

# Also works with the Scenarios class
from pyetm.models.scenarios import Scenarios
scenarios = Scenarios.from_excel("examples/inputs/scenarios.xlsx")
```

What is loaded:
- Scenario metadata (area_code, end_year, title, description, etc.)
- Input values and configuration (optionally)
- Queries (optionally)
- Custom curves and sortables (optionally)

## 8. Using ExportConfig

Control what data is included in exports at the scenario or packer level:
```python
from pyetm.models.export_config import ExportConfig

# Configure per scenario
scen_a.set_export_config(ExportConfig(
    include_inputs=True,
    include_exports=True,
    include_gqueries=True,
    include_custom_curves=False,  # Exclude to reduce file size
    include_hourly_curves=False,  # Exclude to speed up export
    include_sortables=True,
))

# Add to packer
packer.add(scen_a)
packer.to_excel("outputs/full.xlsx")
```

Arguments to `to_excel()` always override per-scenario ExportConfig settings.

## 9. Logging Configuration

Control output verbosity programmatically or via `.env`:

```python
# Via .env file
LOG_LEVEL=DEBUG  # or INFO, WARNING, ERROR, CRITICAL

# Programmatically
import logging
logging.basicConfig(level=logging.DEBUG)

# In notebooks (using example_helpers)
from examples.example_helpers import setup_logging
setup_logging("INFO")
```

This is particularly useful for debugging batch operations or understanding API interactions.

## 10. Working with Example Notebooks

The `examples/` directory contains comprehensive Jupyter notebooks:

- **`basic_features.ipynb`** - Core functionality and Excel workflows
- **`advanced_features.ipynb`** - Batch operations, interpolation, user management
- **`example_helpers.py`** - Utility functions for notebook setup

To use the notebooks:
1. Clone the repository or run `pyetm init` to get example files
2. Place input Excel files in `examples/inputs/`
3. Outputs will be saved to `examples/outputs/`
4. See the [notebooks documentation](notebooks.md) for detailed guides

---
Feel free to open issues for additional integration features or clarifications.
