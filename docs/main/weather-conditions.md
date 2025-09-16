---
title: Weather conditions
---

For all datasets the average temperature and full load hours of wind turbines and solar PV can be adjusted in the [Weather conditions](https://pro.energytransitionmodel.com/scenario/flexibility/flexibility_weather/temperature-and-full-load-hours) section. For the Netherlands it is possible to select one of three weather years with extreme weather conditions to explore the effect of these conditions. On this page these features are explained.

## Temperature

You can adjust the average temperature in your scenario. The outdoor temperature slider sets the temperature with respect to the start year. This change in average temperature results in a change in heating and cooling demand in households, buildings and agriculture.

:::info Source
The impact of a temperature change on energy demand is based on a 'degree days' formula defined by the Dutch gas TSO Gasunie Transport Services. More information can be found [here](outdoor-temperature.md).
:::

## Full load hours

The default full load hours (FLH) in the ETM are based on currently installed technologies. Because of technological developments it is likely that future wind turbines and solar PV may produce more electricity per installed capacity than today. FLH's can also vary regionally.

Changing the FLH's results in a change in annual produced electricity and shape of the production curves. For wind turbines the peaks will become broader and flatter with increasing full load hours as the turbine spends more time running at higher capacity. For solar the default curve is interpolated with a curve for Spain, a country with high (1361) FLH for solar PV. Take a look at the "Electricity production per hour" chart to see the effect of your changes on the production profiles.

## Weather conditions

:::info Disclaimer
The weather year functionality is currently only available for Dutch regions.
:::

There are four weather year options within the ETM:
- Default
- "Dunkelflaute" during extreme cold winter periods
- Lack of sustainable energy (incl. "Dunkelflaute") and extreme cold days
- Excessive and scarce sustainable energy

The default setting considers actual renewable production curves while the other three weather years consider three different years within the Netherlands in which more extreme weather patterns existed. These different weather patterns have large consequences for renewable energy production curves. Using the weather years you can explore and test your scenario using different extreme but occurring weather patterns. 

### Wind

The default wind production curves which are based on measured production data provided by the Open Power System Data platform (read more about [wind curves](https://github.com/quintel/etdataset-public/blob/master/curves/supply/wind/README.md)) are not available for the weather years (1987, 1997, 2004). That is why we use measured wind data and convert that to production. Detailed documentation on sources and methods used to created wind curves for the weather years can be found on
[ETDataset](https://github.com/quintel/etdataset-public/tree/master/curves/supply/wind/script/weather_years).

### Solar PV

The default solar PV production curves which are based on measured production data provided by the Open Power System Data platform (read more about [solar curves](https://github.com/quintel/etdataset-public/blob/master/curves/supply/solar/README.md)) are not available for the weather years (1987, 1997, 2004).

For weather years we use measured irradiation data (Source: [KNMI](https://dataplatform.knmi.nl/)). The shape of the curve equals the shape of irradiation data. Full load hours for solar PV are based on the total solar irradiation of the weather year. FLH of the weather year are determined using information about total solar irradiation and FLH of the reference year 2015. More information can be found on [ETDataset](https://github.com/quintel/etdataset/tree/master/curves/supply/solar/script/weather_years).

### Temperature
Just as for default setting for weather years, temperature curves are based on measured data from The Bilt. (Source: [KNMI](https://dataplatform.knmi.nl/)). For each weather year the average temperature is compared with the average temperature of the default year. If a user selects a weather year this value is used to set the temperature slider. This has an impact on the energy demand for heating and cooling in households, buildings and agriculture. For more information, see the [outdoor temperature](outdoor-temperature.md) section.

### Space heating

See the [space heating curves](https://github.com/quintel/etdataset-public/tree/master/curves/demand/households/space_heating) for details 
