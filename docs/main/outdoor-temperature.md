---
title: "Advanced: Outdoor temperature"
---

The ETM allows users to explore the impact of changes in outdoor temperature on energy demand using the temperature slider in the weather conditions section.

![Temperature slider](/img/docs/20200526_temperature_slider.png)

Alternatively, users can select an historic 'weather year': a consistent set of weather data that impacts full load hours and production curves of weather-dependent power sources such as wind turbines and solar PV, as well as temperature-dependent demand curves such as heating in households. Choosing a weather year automatically changes the average outdoor temperature to the average of the selected year. This feature is only available for (regions in) The Netherlands.

Outdoor temperature impacts heating and cooling demand in households, buildings and agriculture. A lower average temperature leads to a higher heating demand and a lower cooling demand in those sectors. Conversely, a higher average temperature decreases heating demand and increases cooling demand.

## Impact on heating demand
The ETM assumes that space heating demand in households, buildings and agriculture is temperature-dependent, as well as cooling demand in households and buildings (see [below](#impact-on-cooling-demand)).  Other energy applications, such as hot water, appliances, transportation and industrial processes are assumed to be temperature *in*dependent.

The temperature dependent demand is assumed to increase by 15.1% per degree C below the average. This relationship is assumed to be linear and works both ways: a 1 degree C increase leads to a 15.1% lower demand.

Below, the sources and assumptions behind these numbers are explained in detail.

### Degree days
The impact of the average outdoor temperature on heating demand is based on research by the Task Force Monitoring L-Gas Market Conversion and the Dutch gas TSO Gasunie Transport Services. The latter regularly publish a so-called 'degree days equation' that links degree days to gas demand.

A degree day is defined (in this context) as a fall of one degree below an average effective outdoor temperature of 14°C. For example, if the average effective outdoor temperature is 8°C on a certain day, this day counts as 6 degree days. On average, the number of degree days per year is 2300 in The Netherlands.

The average _effective_ temperature is defined as the daily average outdoor temperature (in °C) minus two-thirds of the daily average outdoor wind speed (in m/s).

For the 'gas year' 2019/2020 the estimated relationship between degree days and gas demand is as follows:

`Gas demand [bcm] = 26.163 + 0.0105 * number of degree days` ([source, p.6](https://refman.energytransitionmodel.com/publications/2116))

This means that 26.163 bcm (billion cubic metres of natural gas) is temperature independent. For each degree day, total gas demand goes up by 0.0105 bcm.

:::note
Please note that this equation is about the demand for low-caloric gas (L-gas) in The Netherlands, as well as parts of Belgium, France and Germany.
:::

### Degree days and average temperature
Based on historic weather data for The Netherlands, we have estimated that there is a (roughly) linear relationship between the number of degree days in a year and the average yearly temperature. A 1°C increase in temperature decreases the number of degree days by 289 ([source](https://refman.energytransitionmodel.com/publications/2117)).

![Average temperature and degree days](/img/docs/20200526_temperature_degree_days.png)

### Temperature dependent demand
For the year 2019/2020, research by the IEA, ENTSOG and the Dutch Ministry of Economic Affairs shows that Dutch L-gas demand is expected to increase by 15.9% in a 'cold year' compared to a year with average weather conditions ([source, p.29](https://refman.energytransitionmodel.com/publications/2113)). A cold year has around 615 more degree days or a 2.15°C lower average temperature (`615 / 289 = 2.15`). Assuming a linear relationship (as the degree day formula above does), this is a 7.4% increase per degree C below average.


For the year 2017, the temperature dependent L-gas demand is around 49% of total L-gas demand in The Netherlands ([source, p.24](https://refman.energytransitionmodel.com/publications/2114)):
 * Total L-gas demand is 25.2 bcm
 * Households, buildings and agriculture make up 15.7 bcm of this
 * Around 2 bcm is used for cooking, hot water and appliances (temperature independent)
 * Around 1.4 bcm is used for electricity generation in agricultural CHPs (temperature independent) ([source, p.18](https://refman.energytransitionmodel.com/publications/2115))
 * This leaves 12.3 bcm out of 25.2 bcm temperature dependent demand

 Given the estimated 7.4% increase of total L-gas demand per degree C below average, this means that the temperature dependent part of L-gas demand increases by 15.1% per degree C below average (`0.074 / 0.49 = 15.1%`).


## Impact on cooling demand
A temperature change not only impacts heating demand, but cooling demand in households and buildings as well. A higher average temperature leads to a higher cooling demand.

As opposed to heating, the relationship between cooling and temperature is not linear. The ETM assumes the following relationship:

<code>cool_factor = 1.0 + 0.5669449x + 0.1598105x<sup>2</sup> + 0.0253755x<sup>3</sup> + 0.00163210x<sup>4</sup></code> (where x is the change in temperature in degrees C)

The useful demand for cooling is multiplied with this cool factor.

This formula has been derived using a degree day approach [source](http://en.wikipedia.org/wiki/Degree_day).
To translate a temperature change into a change in useful demand, it is assumed that people will cool their homes when the outdoor temperature rises above 23 °C. The change in useful demand cooling is directly related to a change in degree-days. Figure 1 below shows the temperature measurements in degrees centigrade. Also plotted are the threshold temperatures above which we assume cooling is required (circled area above the green line).

![](/img/docs/Degree_days_shaded.png)
*Figure 1: Temperature curve in the Bilt for 2010*

To calculate degree-days for a given temperature threshold, the area between the threshold temperature and the curve is integrated. For cooling this is the area **above** the 23 degree threshold (green line) and **below** the curve. Shifting the whole curve up (for increasing outdoor temperatures) or down (for decreasing outdoor temperatures) changes the area above this line and thus the degree-days.
