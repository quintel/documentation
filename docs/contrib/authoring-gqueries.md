---
title: Writing gqueries
---

Graph Query Language (GQL) is case sensitive. Since all GQL-functions are written in caps, this means that all functions **must** be written in caps in order to function. When writing gqueries, the following guidelines should be kept in mind:

- The GQL functions one can use for writing gqeuries can be found on the [GQL](gql) section of this documentation.
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