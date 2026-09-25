---
title: Writing gqueries
---

Gqueries are in fact stored [GQL](gql.md) (Graph Query Language) procedures that have a key. If a user for example wants to know the total CO<sub>2</sub> emissions of an area, they can request ETEngine for the gquery `total_co2_emissions` and do not have to worry about the underlying intricacies. An overview of all gqueries can be found in [this folder](https://github.com/quintel/etsource/tree/master/gqueries).

## Guidelines

- An overview of available GQL functions can be found in the [GQL](gql.md) section.
- Base gqueries are added in the `general` folder on [Github](https://github.com/quintel/etsource/tree/master/gqueries/general).
- Other gqueries, for example gqueries used in `output_elements`, should refer to base gqueries when possible.
- Base gqueries have a consistent set of base units, for example `kg` for **emissions**, `MW` for **capacity** and `MJ` for **energy**.
- Base gqueries have a consistent nomenclature: for example **type**, **subtype**, **sector**, **subsector**, **carrier**.
- Base gqueries should have a description.

## Styling

### Use (2 spaces) indentation

To enhance readability, the preferred indentation style for gqueries is first to indent with 4 spaces, followed by an additional 2 spaces for each subsequent level (see the example below).

Example for `final_demand_energetic_industry_steel_wood_pellets`:
```
# Energetic final demand of the 'coal' carrier group in households appliances

- query =
    DIVIDE(
      SUM(
        V(
          FILTER(
            FILTER(
              INTERSECTION(EG(final_demand),EG(appliances_households)),
              "coal? || coal_gas? || cokes? || lignite?"
            ),
            "energetic?"
          ),
          value
        )
      ),
      BILLIONS
    )
- unit = PJ
```

#### Ruby specific

Since GQLv3, you can use Ruby syntax to the GQL-statements as well, such as

    1+1
    10 * 0.5 + 10 * 2

You can also use very advanced 'features' of Ruby, such as:

    (1..10).inject :+

Please refrain from doing that (too much), since that *usually* makes
the GQL-statements harder to read.

#### Try to be condense, if possible

In stead of:

    SUM(
      PRODUCT(
        Q(hv_net_delta_capacity_central),
        0.20
      ),
      PRODUCT(
        Q(hv_net_delta_capacity_decentral),
        0.25
      )
    )

Use:

    Q(hv_net_delta_capacity_central) * 0.2 + Q(hv_net_delta_capacity_decentral) * 0.25

#### Use Ruby syntax on one line

In stead of:

    PRODUCT(1,1)

Use:

    1 * 1

#### Use GQL syntax on multiple lines

And In stead of:

    Q(etflex_score_co2)
    +
    Q(etflex_score_costs)
    +
    Q(etflex_score_renewability)

Use:

    SUM(
      Q(etflex_score_co2),
      Q(etflex_score_costs),
      Q(etflex_score_renewability)
    )

#### Use condense statements

In stead of:

    IF(Q(hv_net_capacity_buffer_decentral_check) > 800
    ,
      10
    ,
      20
    )

Use condense GQL-syntax:

    IF((Q(hv_net_capacity_buffer_decentral_check) > 800),
      10,
      20
    )

So, please put the **commas** at the end of a line.

#### Surround operators with spaces

In stead of:

    Q(area_used_for_corn_crops)/AREA(areable_land)*100

Use:

    Q(area_used_for_corn_crops) / AREA(areable_land) * 100
