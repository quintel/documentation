---
id: interpolation
title: Scenario Interpolation
sidebar_label: Scenario Interpolation
---

import endpointData from '@site/data/api/interpolation';
import ApiEndpoint from '@site/src/components/ApiEndpoint';

Scenario interpolation allows you to create new scenarios with input values calculated by linearly interpolating between existing scenarios. This is useful when you need intermediate scenarios between key milestone years in an energy transition plan.

:::warning Scaled scenarios
Scaled scenarios cannot be used in an interpolation.
:::

## How the interpolation works

The method is **strictly linear**. For every eligible input, the interpolated value is:

```
interpolated = start + (source − start) / total_years × elapsed_years
```

| Term | Meaning |
| -- | -- |
| `start_year` | The area's analysis year (e.g. 2011 for NL), *or* the `end_year` of an optional start scenario |
| `total_years` | `source_scenario.end_year − start_year` |
| `elapsed_years` | `target_year − start_year` |
| `start` | The baseline value for the input (see below) |
| `source` | The value the user set in the source scenario |

**Baseline value (`start`) is taken from:**

1. The corresponding value in the *start scenario*, if one is provided; or
2. The input's default initial value for that area and start year, unaffected by any user edits.

---

### Which inputs are interpolated

Due to the nature of the interpolation the only eligible inputs for interpolation are **numeric inputs**.

**Percentage inputs** fall into the numeric category and are interpolated as plain numbers. A slider that ranges from 0 to 100 is treated as the number `0`–`100`; no special normalisation or re-scaling is applied. The interpolated value may land anywhere along that range proportionally to the elapsed time fraction.

---

### What is copied but not interpolated

The following non-numeric inputs are copied as-is:

* **Enums**: Selectors to choose between distinct modes.
* **Booleans**: On/Off flags that enable or disable calculations or technologies.

The following parts of a scenario:

* **User curves**: Time series data is year-agnostic and they are transferred as-is (e.g. custom load profiles, price curves, interconnector profiles…).
* **Orders:** Priority lists have no year dimension (e.g. Heat-network order, forecast-storage order, and households space-heating producer order…).
* **Active couplings:** Scenario coupling configuration is preserved unchanged.

## Single scenario interpolation

Creates a new scenario with input values interpolated from the endpoint scenario. This is useful when you want to create a single intermediate scenario between two points in time.

<ApiEndpoint data={endpointData.interpolate} />

### Without a start scenario

When no `start_scenario_id` is provided, the interpolation uses the endpoint scenario's start year as the starting point, with the default input values for that year.

```http title="Example request"
POST /api/v3/scenarios/22222/interpolate HTTP/2
Host: engine.energytransitionmodel.com
Accept: application/json
Authorization: Bearer YOUR_TOKEN

{
  "end_year": 2040
}
```

```json title="Example response"
{
  "id": 123456,
  "area_code": "nl2023",
  "start_year": 2023,
  "end_year": 2040,
  "url": "https://engine.energytransitionmodel.com/api/v3/scenarios/123456",
  "user_values": {
    "buildings_insulation_level": 40.3,
    "capacity_of_energy_power_hydro_river": 39.0
  },
  ...
}
```

### With a start scenario

When a `start_scenario_id` is provided, the interpolation uses that scenario's input values as the starting point. This allows you to interpolate between two existing scenarios.

```http title="Example request"
POST /api/v3/scenarios/22222/interpolate HTTP/2
Host: engine.energytransitionmodel.com
Accept: application/json
Authorization: Bearer YOUR_TOKEN

{
  "start_scenario_id": 11111,
  "end_year": 2040
}
```

## Batch interpolation

Creates multiple interpolated scenarios in a single request. This endpoint is particularly useful when you need scenarios for multiple intermediate years between multiple existing scenarios that may represent energy transition milestones.

<ApiEndpoint data={endpointData.interpolate_collection} />

For each target year, the batch interpolation automatically selects the two scenarios whose end years surround it and interpolates between them. If a target year falls before the first scenario's end year, it interpolates from the start year instead.

```http title="Example request"
POST /api/v3/scenarios/interpolate HTTP/2
Host: engine.energytransitionmodel.com
Accept: application/json
Authorization: Bearer YOUR_TOKEN

{
  "scenario_ids": [11111, 22222, 33333],
  "end_years": [2025, 2035, 2045]
}
```

```json title="Example response"
[
  {
    "id": 123456,
    "area_code": "nl2023",
    "start_year": 2023,
    "end_year": 2025,
    "user_values": { ... },
    ...
  },
  {
    "id": 123457,
    "area_code": "nl2023",
    "start_year": 2023,
    "end_year": 2035,
    "user_values": { ... },
    ...
  },
  {
    "id": 123458,
    "area_code": "nl2023",
    "start_year": 2023,
    "end_year": 2045,
    "user_values": { ... },
    ...
  }
]
```

### Examples

Suppose you have three scenarios representing your energy transition milestones:
- Scenario A (ID: 11111) with end_year 2030
- Scenario B (ID: 22222) with end_year 2040
- Scenario C (ID: 33333) with end_year 2050

To create intermediate scenarios for years 2025, 2035, and 2045:

```json
{
  "scenario_ids": [11111, 22222, 33333],
  "end_years": [2025, 2035, 2045]
}
```

This will create:
- A 2025 scenario interpolated between the start year and end year of scenario A (2030)
- A 2035 scenario interpolated between the end years of scenario A (2030) and scenario B (2040)
- A 2045 scenario interpolated between the end years of scenario B (2040) and scenario C (2050)

You can also use a single scenario to create multiple intermediate scenarios. For example, using only scenario C:

```json
{
  "scenario_ids": [33333],
  "end_years": [2025, 2035, 2045]
}
```

This will create three scenarios, all interpolated between scenario C's start year and its end year (2050).
