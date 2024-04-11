---
title: Writing gqueries
---

Gqueries are in fact stored [GQL](gql.md) (Graph Query Languague) procedures that have a key. If a user for example wants to know the total CO<sub>2</sub> emissions of an area, they can request ETEngine for the gquery `total_co2_emissions` and do not have to worry about the underlying intricacies. An overview of all gqueries can be found in [this folder](https://github.com/quintel/etsource/tree/master/gqueries).

## Guidelines

- An overview of available GQL functions can be found in the [GQL](gql.md) section.
- Base gqueries are added in the `general` folder on [Github](https://github.com/quintel/etsource/tree/master/gqueries/general).
- Other gqueries, for example gqueries used in `output_elements`, should refer to base gqueries when possible.
- Base gqueries have a consistent set of base units, for example `kg` for **emissions**, `MW` for **capacity** and `MJ` for **energy**.
- Base gqueries have a consistent nomenclature: for example **type**, **subtype**, **sector**, **subsector**, **carrier**.
- Base gqueries should have a description.
- To enhance readability, the preferred indentation style for gqueries is first to indent with 4 spaces, followed by an additional 2 spaces for each subsequent level (see the example below).

Example for `final_demand_energetic_industry_steel_wood_pellets`:
```
# Energetic final demand of the 'coal' carrier group in industry steel sector.

- query =
    SUM(
      V(
        FILTER(
          FILTER(
            INTERSECTION(EG(final_demand),EG(appliances_households)
            ),
            "coal? || coal_gas? || cokes? || lignite?"
          ),
          "energetic?"
        ),
        value
      )
    )
- unit = PJ
```
