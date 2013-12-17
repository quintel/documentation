This wiki page documents information about the loss of load dashboard item.

Introduction
------------

The loss of load calculation was deployed in December 2011. The calculation for the Netherlands has been verified by TenneT and the versions for other countries are in a more preliminary phase.

The calculation shows the probability that available electricity production capacity is less than the expected demand. Such a calculation is an important consideration when planning a power system and similar, but more elaborate, versions of this calculation are always conducted by the Transmission System Operators of a country ([TenneT, 2012](http://www.tennet.eu/nl/nl/over-tennet/nieuws-pers-publicaties/publicaties/technische-publicaties/rapport-monitoring-leveringszekerheid-2011-2027.html)).

With this calculation in the ETM, users can see whether they have a sufficiently reliable electricity production system that can meet the expected demand at all times of the year. This calculation confronts users with the importance of having backup capacity if they build scenarios with significant shares of volatile energy technologies.

In the ETM
----------

![screenshot of the loss of load popup](blackout_risk_popup.jpg "screenshot of the loss of load popup")

The loss of load dashboard item can be accessed via the flexible dashboard by clicking 'Change' on the bottom right corner of the Energy Transition Model interface. If the calculation is selected, the loss of load probability is seen in the middle of the dashboard. This percentage is the probability that production capacity is less than demand by comparing the peak electricity demand and the installed electricity production capacity. By clicking on the dashboard item reveals a popup showing a chart with three values for both the present and the future year. In the chart the three things shown are:

-   Peak electricity demand - This is the largest power demand expected to occur in a year. In this figure the maximum positive variability of demand is also included, giving an absolute peak.
-   Reliable capacity - The reliable capacity is electricity production capacity that can be counted on at all times and/or periods of the year. Volatile energy technologies such as solar PV and wind turbines have a limited, to zero, contribution to the reliable capacity (often referred to as capacity credit. See below).
-   Unreliable capacity - Unreliable capacity is electricity production capacity that cannot be guaranteed at all times and/or periods of the year. Production by solar PV and wind turbines fall into this category.

The sum of the reliable and unreliable production capacity is equal to the total installed capacity.

If the peak electricity demand is less than the reliable capacity the loss of load probability increases. To decrease the loss of load probability, reliable capacity needs to be installed. Favorable options are technologies such as: gas CCGTs, large CHPs, hydro plants, etc.

Calculation
-----------

![illustrative sketch of loss of load calculation](Security_of_supply_normal_distribution.jpg "illustrative sketch of loss of load calculation")

Calculating the loss of load probability is done using the following parameters:

-   Total yearly electricity demand in TWh - Taken from the ETM based on user decisions.
-   Load factor of yearly electricity demand as a % - Value of 68% used for the Netherlands [(CIEP, 2011)](http://refman.et-model.com/publications/1666)
-   Unpredictability of electricity demand as a % - Taken as 8%
-   Installed electricity production capacity in MW - Taken from the ETM based on user decisions.
-   Availability of all types of electricity production plants as a % - Value varying between 85-99% depending on the power plant taken from various sources.
-   Capacity credit of volatile energy technologies as a % - For wind turbines 14-20% is used and for solar panels 0% is used.

With the above parameters the calculation is carried out in the ETM assuming that that the variability in electricity production and electricity supply are normally distributed. Assuming a normal distribution it is possible to calculate the likelihood that the peak electricity demand is lower than the available electricity production. This is illustrated in the figure at the left. Please note that in the figure the security of supply is shown by the striped region, the loss of load probability is the complement of this.

The calculation of the above parameters is further described below:

### Capacity credit

Capacity credit is a term used to define a power plants contribution to reliable capacity. A solar PV installation for example has a capacity credit of 0% because it is fact that there will be time when there is no sun and hence no electricity production. Power plants and technologies such as pumped storage hydro power on the other hand have a capacity credit of 100%. The output of these technologies is controlled and hence their contribution to capacity is 100%.

Wind turbines have a capacity credit of approximately 30%. This implies that for every 1MW of wind power installed 0.3MW reliable capacity is provided. This assumption relies on the fact that there are numerous wind turbines and that these are geographically distributed over a large area. Under these assumptions it has been shown that there never is a moment in time when their is absolutely no power from wind. For small numbers of wind turbines the capacity credit is less than 30% and is 0% for a single turbine [(IEA, 2009)](http://refman.et-model.com/publications/1664).

Because of calculation limitations however it has been assumed in the ETM that all wind turbines have a capacity credit of 14-20%, the effect of this on the loss of load results are minor.

### Peak electricity demand

The peak electricity demand is calculated assuming that there is a correlation between the total yearly electricity demand in TWh and peak electricity demand in GW. This unit correlating these two values is called the load factor. For the Netherlands the load factor is found to be approximately 68%.

### Reliable production capacity

The reliable electricity production capacity is sum of the product of installed capacity, availability, and capacity credit of all power plants.

### Loss of load probability

The loss of load probability is calculated assuming a normal distribution in variations of supply and demand, and by knowing the peak electricity demand, the available production capacity, and the variability.
