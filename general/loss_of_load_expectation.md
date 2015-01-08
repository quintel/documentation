# Loss of load expectation


## Introduction


The loss of load calculation received a major update in January 2015. The calculation returns the loss of load expectation (LOLE), i.e. the expected number of hours per year that a country's electricity production park cannot meet its demand. The result is displayed in a dashboard item that can be accessed by clicking on *change* in the dashboard and selecting *Loss of load expectation*. Like all dashboard items, the loss of load expectation is shown for the end year of the scenario.

The LOLE is an important consideration when planning a power system and similar, but more elaborate, versions of this calculation are conducted by the Transmission System Operators of a country (see e.g. [TenneT, 2012](http://www.tennet.eu/nl/nl/over-tennet/nieuws-pers-publicaties/publicaties/technische-publicaties/rapport-monitoring-leveringszekerheid-2011-2027.html) (Dutch)). A nonzero LOLE does not necessarily results in blackouts as electricity can be extracted from storage or imported from neighbouring countries. TenneT's brief allows a LOLE of 4 hours/year, but each country may have slightly different standards.

By displaying the LOLE in the ETM, users can see whether they have sufficiently dispatchable electricity production that can meet the expected demand at all times of the year. This calculation confronts users with the importance of having backup capacity if they build scenarios with significant shares of volatile energy technologies.


##In the ETM

![screenshot of the loss of load popup](../images/LOLE_popup.png "screenshot of the loss of load popup")

The loss of load dashboard item can be accessed via the flexible dashboard by clicking **change** on the bottom right corner of the Energy Transition Model interface. If this item is selected, the loss of load expectation is seen in the middle of the dashboard. The displayed number is the expected number of hours per year that the country's electricity production capacity cannot meet its demand. Clicking on the dashboard item reveals a popup showing a chart with the following items for both the present and the future year:

- Peak power demand - This is the largest power demand expected to occur in a year.
- Dispatchable production capacity - The dispatchable capacity is electricity production capacity that can be switched on at will and can be counted on at all times during the year.
- Volatile capacity - Volatile capacity is electricity production capacity that cannot be guaranteed at all times. All solar PV electricity production, wind electricity production capacity and hydro river production capacity falls into this category.

The sum of the dispatchable and volatile production capacity is equal to the total installed capacity.

The Energy Transition Model contains typical hourly production profiles for volatile electricity producers. This volatile electricity production is subtracted from the hourly electricity demand and the peak electricity demand is determined. This peak electricity demand is compared to the available dispatchable production capacity. If the peak demand exceeds the dispatchable capacity, the loss of load expectation increases. To decrease the loss of load expectation, reliable capacity needs to be installed or the demand needs to be reduced.


### Calculation

Several methods exist for calculating the loss of load expectation. Since we like to keep the calculation time of the Energy Transition Model low, we opted for a basic approach, for which we use the following data:

- Country specific hourly load profiles - see [this section](#demand_profile) for the sources of these profiles
- Total yearly electricity demand - taken from the ETM based on user decisions
- Installed electricity production capacity for all electricity producers - taken from the ETM based on user decisions
- Availability of all electricity producers - taken from the ETM, several sources

In short, the calculation consists of the following steps.

1. Scale the demand profile according to the total electricity demand in the scenario
2. Scale the production profile of volatile electricity sources according to their installed capacity
3. Subtract the volatile production from the demand profile; this results in a residual demand profile
4. Calculate dispatchable production capacity
5. Compare the residual demand profile and the dispatchable production capacity and determine LOLE

These three steps are explained in detail below.

### [Scale the demand profile](id:demand_profile)

One of the main assumptions in our approach to calculating the LOLE is that the shape of the hourly load profiles stays the same while going from the present year to the future year. Hourly load profiles for the present year are readily available from multiple sources. We use different sources for different countries:

- **The Netherlands**. We use the load profile as used in the merit order calculation (see [here](https://github.com/quintel/merit/tree/master/load_profiles/nl) for these load profiles).
- **Europe**. This load profiles is identical to the one used for the merit order calculation. Details on how it is created can be found [here](https://github.com/quintel/etdataset/blob/master/source_analyses/eu/2011/12_merit_order/data/total%20demand/total%20demand%20source%20analysis.md).
- **Germany**. The German load profile is taken from the same data source as the European load profile.

Many parameters affect the shape of the hourly load profiles, e.g. the demand profiles for specific technologies and human behaviour. As we do not have data on this yet, we decided to leave the shape of the load profiles the same. We do, however, scale the load profile such that the area underneath it is equal to the total yearly electricity demand.

### Scale the volatile production profiles

In the Energy Transition Model the following type of electricity production is considered volatile:

- Wind turbines (inland, coastal and offshore)
- Solar PV (in households, buildings and solar PV plants)
- Solar CSP
- Hydro river

The ETM contains typical production profiles for all these types of volatile electricity producers. To determine the volatile electricity production in a specific scenario, these production profiles are scaled by installed capacity in that scenario.

### Subtract volatile production from demand profile

Volatile electricity cannot be relied on at all times, but when it is available it will be used. We model this is the ETM by subtracting all volatile electricity production profiles from the demand profile. The result is a residual load profile.


### Calculate dispatchable production capacity

Not all electricity production can be relied on at all times. We distinguish dispatchable and volatile electricity supply. Dispatchable production capacity can be relied on at all times, except for when a plant is down for maintainance. We take this into account by researching an `availability` for all plants. The dispatchable production capacity is then defined as

`dispatchable_production_capacity = installed_capacity * availability`.
 
The total dispatchable production capacity is simply the sum of the dispatchable production capacity for all dispatchable producers.

### Determine LOLE

The residual hourly load profile consists of 8760 data points, representing the residual average hourly load for each hour of the year. We compare each of these 8760 hours to the dispatchable production capacity that was calculated above, and determine at how many of these hours the load exceeds the dispatchable production capacity. This number of hours is defined as the LOLE. The figure below shows a graphical representation of the LOLE calculation. For clarity, the load profile has been represented as a histogram (red). The reliable production capacity is shown as a green line. In this particular case, the LOLE is equal to zero as none of the events in the histogram are to the right of the green line.

![graphical representation of the LOLE calculation](../images/LOLE_calculation.png "graphical representation of the LOLE calculation")

## Discussion

The following aspects of the current LOLE implementation can be improved on and should be subject of further study.

- The LOLE calulation does not take into account ramping times of electricity producers.
- An alternative method to calculate the LOLE is described by [ofgem](https://www.ofgem.gov.uk/publications-and-updates/electricity-capacity-assessment-report-2013). This method is based on convolution of the load profile and generation profiles of conventional generation and typical electricity generation distribution of wind turbines. This method could be extended to include solar PV. We have tried this method, but concluded that the calculation time is too high to include it in the model.
- The shape of the hourly load profile should be depended on the technologies that have been installed in the ETM. If, for example, The Netherlands would switch from heating the majority of its residences with gas-fired condensing combi boilers to heating with electric heaters, this would have an effect on the hourly electricity load profile. Incoorporating this in the ETM is a major effort as typical hourly demand and production profiles need to be researched for all converters in the ETM. Hence we decided to keep the shape of the hourly load profiles the same in going from the start year to the end year of the scenario.


## References

- Rapport Monitoring leveringszekerheid 2011-2027 ([TenneT, 2012](http://www.tennet.eu/nl/nl/over-tennet/nieuws-pers-publicaties/publicaties/technische-publicaties/rapport-monitoring-leveringszekerheid-2011-2027.html)) (Dutch)
- IEA Wind Task 25 ([IEA, 2009](http://refman.et-model.com/publications/1664))
- Reconsidering the Capacity Credit ([Wilton, 2013](http://refman.et-model.com/publications/1847))
