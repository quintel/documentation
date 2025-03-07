---
title: Weather years module
---

## How does it work?
The ETM allows for the uploading of weather demand and capacity profiles. This includes 12 heat demand profiles for households, as well as a heat demand profile for buildings and a heat demand profile for agriculture. This weather years tool (previously named: heat module) can generate these profiles based on weather data. The *heat_demand* column in the [`scenario_list`](creating-and-updating#scenario_listcsv) file determines where the base input data or profiles for that scenario can be found. This can be customised per scenario, so you can update multiple scenarios with different profiles at the same time.

## Setting up the input files
A custom subfolder with name as specified in the *heat_demand* column should be provided in the `input/curves` folder. There is the possibility to either generate [heat demand profiles](#generate-heat-demand-profiles) by supplying required input data to this folder, or to [provide heat demand profiles](#provide-heat-demand-profiles) that only need to be uploaded.

### Generate heat demand profiles
To generate custom weather demand profiles and upload them directly, there are five csv files that can be provided in the subfolder:
* **temperature**: the outside temperature in degrees C for all 8760 hours of the year.
* **irradiation**: the irradiation in J/cm2 for all 8760 hours of the year.
* **thermostat**: a file with three columns (*low, medium, high*), with thermostat settings for 24 hours.
* **G2A_parameters**: a file containing parameters to dertermine the demand profile (G2A profile) for the buildings/services sector. The csv contains three columns (*reference, slope, constant*) and values for all 8760 hours of the year.
* **wind_speed**: wind speed values in m/s for all 8760 hours of the year.

Based on the provided input data, the profiles listed below will be generated. Note that **temperature**, **irradiation** and **thermostat** are required to generate the `weather/insulation_xxx` profiles. To generate the `weather/buildings_heating` and `weather/agriculture_heating` profiles, the **temperature**, **G2A_parameters** and **wind_speed** are required.

Generated curves:
      - weather/insulation_terraced_houses_high
      - weather/insulation_terraced_houses_medium
      - weather/insulation_terraced_houses_low
      - weather/insulation_apartments_high
      - weather/insulation_apartments_medium
      - weather/insulation_apartments_low
      - weather/insulation_semi_detached_houses_high
      - weather/insulation_semi_detached_houses_medium
      - weather/insulation_semi_detached_houses_low
      - weather/insulation_detached_houses_high
      - weather/insulation_detached_houses_medium
      - weather/insulation_detached_houses_low
      - weather/buildings_heating
      - weather/agriculture_heating

The generated curves will automatically uploaded to the ETM scenario. Additionally, the generated curves will be exported to the output folder with structure `output/curves/scenario_short_name`, where short_name refers to the short scenario name as provided in the *short_name* column of your scenario list file.

### Provide heat demand profiles
Instead of generating the above-mentioned profiles it is possible to provide these directly. The profiles should then be provided in the created subfolder in the `input/curves` folder. The name of the provided csv files should be as listed above without *weather/*, for instance *insulation_terraced_houses_high.csv*, *buildings_heating.csv*.

Either all 12 *insulation_xxx* profiles need to be provided, otherwise the tool will try to calculate the profiles from the required input data. Similarly, both the *buildings_heating* and *agriculture_heating* need to be provided and will otherwise be generated.

## Runnning the script
Note that the weather years functionality can be run as part of the `scenario_from_csv` tool or as a separate tool. Consult the documentation of the [`scenario_from_csv`](creating-and-updating) tool if you want to run the weather years functionality as part of this tool.

If you want to run the weather years tool separately, please note that an existing scenario ID needs to be provided in the *scenario_id* column of the `scenario_list` file.

To run the weather years tool separately in `pipenv`, run:
```
pipenv run weather_years
```
Running the script with basic Python instead:
```
python weather_years.py
```
