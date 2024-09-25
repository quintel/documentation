---
title: Weather Years module
---

## How does it work?
The ETM allows for the uploading of 20 types of weather demand and capacity profiles. This includes
12 demand profiles for households, as well as demand profiles for building and agriculture and capacity profiles for
various forms of electricity production.
This submodule can generate these profiles based on weather data.
The `heat_demand` column in the [`scenario_list` file](creating-and-updating#scenario_listcsv) determines
where the base data or profiles for that scenario can be found. This can be customised per scenario, so
you can update multiple scenarios with different profiles at the same time.

## Setting up the input files
You should supply a custom subfolder (as determined in the heat_demand column) in the `input/curves`
folder. Curves can either be supplied directly, prepended by "weather\_", or the curves will be generated
based on input files.

To generate you own weather demand profiles and upload them directly, five input csv files
should be present in the subfolder:
      - temperature: The outside temperature in degrees C for all 8760 hours of the year.
      - irradiation: The irradiation in J/cm2 for all 8760 hours of the year.
      - thermostat: A csv with three columns (*low, medium, high*), with thermostat settings for  24 hours.
      - G2A_parameters: A csv with three columns (*reference, slope, constant*) and values for all 8760 hours of the year.
      - wind_speed: A csv with values in m/s for wind speed for all 8760 hours of the year.

Please note the tool is only capable of generating the following weather curves based on this input data:
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

If you choose to supply some files directly, rather than generating them, make sure to place those files in the same
input folder specified in the *heat_demand* column, and prepend the name of the key of the curve with 'weather_'. For
example, if you want to upload a capacity profile for weather/wind_offshore_baseline, you should upload
a curve into the input folder named *weather_wind_offshore_baseline*. The following weather curves can only uploaded
in this manner:
      - weather/air_temperature
      - weather/wind_offshore_baseline
      - weather/wind_coastal_baseline
      - weather/wind_inland_baseline
      - weather/solar_pv_profile_1
      - weather/solar_thermal

The exported curves will be written to an output subfolder, named according to the *short_name* supplied in your scenario list file.

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
