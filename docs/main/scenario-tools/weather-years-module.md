---
title: Weather years module
---

## How does it work?
The ETM allows for the uploading of 20 types of weather demand and capacity profiles. This includes
12 demand profiles for households, as well as demand profiles for buildings and agriculture and capacity profiles for
various forms of electricity production.
This submodule can generate these profiles based on weather data.
The `heat_demand` column in the [`scenario_list` file](creating-and-updating#scenario_listcsv) determines
where the base data or profiles for that scenario can be found. This can be customised per scenario, so
you can update multiple scenarios with different profiles at the same time.

## Setting up the input files
A custom subfolder (as specified in the `heat_demand` column) should be provided in the `input/curves`
folder. Weahter curves can either be [`uploaded directly`](#directly-upload-weather-curves), prepended by "weather\_", or the curves will be [`generated`](#generate-and-upload-curves) based on input files.

### Generate and upload curves
To generate custom weather demand profiles and upload them directly, five input csv files
should be present in the subfolder:
* **temperature**: the outside temperature in degrees C for all 8760 hours of the year.
* **irradiation**: the irradiation in J/cm2 for all 8760 hours of the year.
* **thermostat**: a csv with three columns (*low, medium, high*), with thermostat settings for 24 hours.
* **G2A_parameters**: A csv containing paramaters to dertermine the demand profile (G2A profile) for the buildings/services sector. The csv contains three columns (*reference, slope, constant*) and values for all 8760 hours of the year.
* **wind_speed**: A csv with wind speed values in m/s for all 8760 hours of the year.

Please note the tool is only capable of generating the following 14 weather curves based on this input data:
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

When the abovementioned weather curves are generated, these will automatically uploaded to the ETM scenario. Additionally, the generated curves will be exported to the output folder with structure `output/curves/short_name`, where short_name refers to the short scenario name as provided in the *short_name* column of your scenario list file.


### Directly upload weather curves
If you want to supply weather related curve files directly, rather than generating these by the weather years module, these curve files can be placed in the same input folder specified in the *heat_demand* column of the `scenario_list` file. The curve files specified below can be uploaded this way. Make sure to place the curve in the defined folder with the following naming structure: `weather_wind_offshore_baseline.csv`. The following weather curves can only uploaded in this manner:
      - weather/air_temperature
      - weather/wind_offshore_baseline
      - weather/wind_coastal_baseline
      - weather/wind_inland_baseline
      - weather/solar_pv_profile_1
      - weather/solar_thermal

## Installing and runnning the script
You can instal `pipenv` with `pip` or `pip3` if you don't have it installed yet.
```
pip3 install pipenv
```

Then you can create a new environment and install all the libraries in one go by running:
```
pipenv install
```

Activate your pipenv environment:
```
pipenv shell
```

Run the script:
```
pipenv run weather_years
```

Running the script with basic Python instead:
```
python weather_years.py
```