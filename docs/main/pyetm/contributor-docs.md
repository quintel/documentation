# How to develop with PyETM

This guide shows how to embed **pyetm** into your own tooling.

---
## 1. Installation & Environment

```bash
pip install pyetm
# or
poetry add pyetm
```

Python 3.12+ is required.

## 2. Configuration & Credentials

The package loads settings from `config.env` at the project root *and* environment
variables (env vars always win). Required:

- `ETM_API_TOKEN` – Your API token (format: `etm_<JWT>` or `etm_beta_<JWT>`)
- Optional: `BASE_URL` or set `environment` to `pro | beta | local | YYYY-MM`

Minimal setup:
```bash
export ETM_API_TOKEN="etm_<jwt_here>"
```

Programmatic override:
```python
from pyetm.config.settings import AppConfig
config = AppConfig(etm_api_token="etm_...", environment="beta")
```

## 3. Creating and Manipulating Scenarios

```python
from pyetm import Scenario

# Create from an area/region code; additional kwargs depend on upstream API
scenario = Scenario.create(region=205, end_year=2050)

# Update ETM inputs (example)
scenario.update_inputs({
    "buildings_solar_pv_solar_radiation": 0.55,
    "transport_car_using_electricity_share": 0.43,
})

# Reset specified inputs to defaults
scenario.reset_inputs(["buildings_solar_pv_solar_radiation"])

# Access metadata
print(scenario.metadata)
```

Sortables and custom curves can also be manipulated; see source in
`pyetm/models/scenario.py` for available methods (`update_sortables`, `update_custom_curves`, etc.).

## 4. Batch Operations with ScenarioPacker

`ScenarioPacker` aggregates multiple scenarios and associated artefacts.

```python
from pyetm.models import Scenario, ScenarioPacker

scen_a = Scenario.create(region=205, end_year=2035)
scen_b = Scenario.create(region=205, end_year=2050)

packer = ScenarioPacker()
packer.add(scen_a, scen_b)
packer.add_queries(["total_co2_emissions", "electricity_demand"])

# DataFrames directly
inputs_dataframe = packer.inputs()
queries_dataframe = packer.gquery_results()
sortables_dataframe = packer.sortables()
curves_dataframe = packer.custom_curves()
exports_dataframe = packer.exports()

# Excel export (more flags available)
packer.to_excel("outputs/scenarios.xlsx", include_input_details=True)
```

### Why a Packer?
- Creates uniform multi-indexed dataframes for the Scenario submodels
- Central switch (`ExportConfig`) to include/exclude dataset types

## 5. Querying & Accessing Results

Add queries *before* executing a query run:
```python
packer.add_queries(["primary_demand_of_final_demand_electricity"])
```

Per-scenario queries can also be added via the scenario’s internal query pack when exposed. For now,
packer-level addition is the high-level route.

After exporting, `packer.gquery_results()` returns a DataFrame with scenarios as columns.

## 6. Excel Round‑Trips

You can rehydrate a packer from an Excel file you exported earlier without accessing the API:
```python
from pyetm.models import ScenarioPacker
restored = ScenarioPacker.from_excel("outputs/scenarios.xlsx")
```
What is restored:
- Scenario metadata (region, end_year, etc.)
- Inputs / queries / configuration (where encoded)
- Optional custom curves & sortables if present

Caveats:
- The API is still the source of truth; values may have changed upstream since export
- Tokens are not embedded; environment must be configured again

## 7. Using ExportConfig

Attach to one scenario and its flags cascade:
```python
from pyetm.models.export_config import ExportConfig
scen_a.set_export_config(ExportConfig(
    include_inputs=True,
    include_exports=True,
    include_gqueries=True,
))
packer.add(scen_a)
packer.to_excel("outputs/full.xlsx")
```
`to_excel()` arguments always override resolved defaults.

---
Feel free to open issues for additional integration features or clarifications.
