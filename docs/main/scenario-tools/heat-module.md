---
title: Heat module
---

## How does it work?
The ETM allows for the uploading of 15 types of heat demand profiles for households. This submodule can
generate these for you based on thermostat and weather data. When the `heat_demand` column was
filled in for the scenario in the [`scenario_list` file](creating-and-updating#scenario_listcsv),
these profiles will be created and uploaded when you create or update a scenario with the tool.

## Setting up the modules input files
You can supply a custom subfolder in the `input/curves` folder which contains either heat demand curves, or ways to generate these heat demand curves:

  1. **Supply your own heat demand curves** In this subfolder, supply csv profiles (summing to 1/3600) for all combinations of the following house types and insulation levels: *"terraced_houses", "corner_houses", "semi_detached_houses", "apartments", "detached_houses"* and *"low", "medium", "high"*. The names of the csv files should look like *insulation_apartments_low*. All 15 files should be present. Or;
  2. **Generate heat demand curves** To generate your own heat demand profiles and upload them, three input csv files should be present in the subfolder:
     - temperature: The outside temperature in degrees C for all 8760 hours of the year;
     - irradiation: The irradiation in J/cm2 for all 8760 hours of the year;
     - thermostat: A csv with three columns (*low, medium, high*), with thermostat settings for  24 hours.

  The generated curves will be written to the subfolder, and can be inspected and reused.

The tool will checkout your subfolder and decide for itself which of the two paths to follow. If the 15 profiles are there, these will be used. If the three input files are present, new curves will be generated.

