---
title: Weather conditions
---

For all datasets the average temperature and full load hours of wind turbines and solar PV can be adjusted. For The Netherlands it is possible to select one of three weather years with extreme weather conditions to explore the effect of these conditions. Below these features are explained.

## Temperature

Users can adjust the average temperature. The outdoor temperature slider sets the temperature with respect to the start year. This change in average temperature results in a change in heating and cooling demand in households, buildings and agriculture.

The impact of a temperature change on energy demand is based on a 'degree days' formula defined by the Dutch gas TSO Gasunie Transport Services. More information can be found [here](outdoor-temperature.md).

## Full load hours

The default full load hours (FLH) in the ETM are based on currently installed technologies. Because of technological developments it is likely that future wind turbines and solar PV may produce more electricity per installed capacity than today. FLH's can also vary regionally.

Changing the FLH's results in a change in annual produced electricity and shape of the production curves. For wind turbines the peaks will become broader and flatter with increasing full load hours as the turbine spends more time running at higher capacity. For solar the default curve is interpolated with a curve for Spain, a country with high (1361) FLH for solar PV. Take a look at the "Electricity production per hour" chart to see the effect of your changes on the production profiles.

The production profiles can be downloaded as CSV files in the **Data export** section of the ETM: Results → Data export → Merit order price → Load curves.

![](/img/docs/download_load_curves.png)
*Figure 2: Production curves can be downloaded in the Data export-section of the ETM*

## Weather conditions

:::warning Netherlands-only
This feature is currently only available for (regions in) The Netherlands.
:::

The Netherlands have experienced extreme-cold periods in the past, as well as periods with little wind and sun. This may happen again in the future, and low temperatures may negatively affect the ability for air and hybrid heat pumps to satisfy demand. Besides that, a lack of wind and sun may negatively affect the electricity production from wind and solar power. To explore these effects for a scenario for (a region within) the Netherlands a year with extreme weather conditions can be selected.

The temperature, heat demand and production curves for all weather years can be downloaded from [ETSource](https://github.com/quintel/etsource/tree/master/datasets/nl/curves/weather). The file `weather_properties.csv` provides FLH for every technology and average temperature with respect to the base year.

The ETM contains hourly demand and production curves. The methods to create curves for weather years differ from the standard methods. Below we explain those differences. More information about the default curves can be found on [ETDataset](https://github.com/quintel/etdataset-public/tree/master/curves).

### Wind

The default wind production curves which are based on measured production data provided by the Open Power System Data platform (read more about [wind curves](https://github.com/quintel/etdataset-public/blob/master/curves/supply/wind/README.md)) are not available for the weather years (1987, 1997, 2004). That is why we use measured wind data and convert that to production. Detailed documentation on sources and methods used to created wind curves for the weather years can be found on
[ETDataset](https://github.com/quintel/etdataset-public/tree/master/curves/supply/wind/script/weather_years).

### Solar PV

The default solar PV production curves which are based on measured production data provided by the Open Power System Data platform (read more about [solar curves](https://github.com/quintel/etdataset-public/blob/master/curves/supply/solar/README.md)) are not available for the weather years (1987, 1997, 2004).

For weather years we use measured irradiation data (Source: [KNMI](https://projects.knmi.nl/klimatologie/uurgegevens/selectie.cgi)). The shape of the curve equals the shape of irradiation data. Full load hours for solar PV are based on the total solar irradiation of the weather year. FLH of the weather year are determined using information about total solar irradiation and FLH of the reference year 2015. More information can be found on [ETDataset](https://github.com/quintel/etdataset/tree/master/curves/supply/solar/script/weather_years).

### Temperature

Just as for default setting for weather years, temperature curves are based on measured data from The Bilt. (Source: [KNMI](https://projects.knmi.nl/klimatologie/uurgegevens/selectie.cgi)). For each weather year the average temperature is compared with the average temperature of the default year. If a user selects a weather year this value is used to set the temperature slider. This has an impact on the energy demand for heating and cooling in households, buildings and agriculture. For more information, see the [outdoor temperature](outdoor-temperature.md) section.

### Space heating

Weather years use the [standard method](https://github.com/quintel/etdataset-public/tree/master/curves/demand/households/space_heating) to construct space heating curves.

## Discussion

Feedback on the weather years is very welcome! If you have a comment or a suggestion please let us know, you can:

* [Open an issue in ETDataset](https://github.com/quintel/etdataset-public/issues/new) and assign a team member of Quintel, e.g.:
  * [Chael Kruip](https://github.com/chaelkruip)
  * [Dorine van der Vlies](https://github.com/dorinevandervlies)
  * [Marlieke Verweij](https://github.com/marliekeverweij)
  * [Roos de Kok](https://github.com/redekok)
* [Contact us directly](https://energytransitionmodel.com/contact).
