---
title: Regional overview
---

## How does it work?
When you have multiple scenarios of different adjoining areas (e.g. municipalities, or EU countries)
that form a region together, this part of the scenario-tools allows you to create an overview of them.
An overview consists of a CSV containing the different areas as columns and detailed information on
for example final demand and the supply mix as rows. There is also one column where the results of each
area are combined into a regional value.

The overview will appear in the `output` folder as a CSV.

## Setting up the input CSV files
Creating the regional overview only requires the `regional_overview` csv file to be filled in.

### regional_overview.csv
In this CSV the scenario IDs and area names of the scenarios that should be part of the overview
are listed. This is the only information needed.

## Running the tool
You can run the regional overview with the following commands.

With `pipenv`:
```
pipenv run regional_overview
```

With basic Python:
```
python scripts/regional_overview.py
```
