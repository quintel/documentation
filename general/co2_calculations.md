# CO<sub>2</sub> calculations

The model calculates CO<sub>2</sub> emissions for the current year and the scenario year. The CO<sub>2</sub> emission for the year 1990 is a fixed number taken from `area data`.

The CO<sub>2</sub> calculations are used to determine the amount of CO<sub>2</sub> that is emitted in the area. This calculation is based on the area's primary demand, and uses the emission factors of energy carriers to determine the total CO<sub>2</sub> that is emitted from the energy carriers. The total CO<sub>2</sub> emission of these carriers determines the total CO<sub>2</sub>-emission of the area.

There are two cases in which the calculation has an exception:

-   **CO<sub>2</sub> Capture and Storage**

Some converters can capture and store CO<sub>2</sub>, preventing it's emission. The percentage of this capture is stored as a converter attribute.

-   **Non energetic energy use**

Some of the energy used in areas is not used in an energetic fashion, emitting CO<sub>2</sub>, but non-energetic, where the CO<sub>2</sub> is maintained in a product. Plastic production is an example where the oil is not emitting its CO<sub>2</sub>, as the carbon is in part 'stored' in the plastic itself. Of course both the energy required in the production process, and the incineration of the plastic both are processes in which CO<sub>2</sub> is emitted.

General calculation method
--------------------------

The model calculates CO<sub>2</sub> emissions associated with the energy output of a specific converter in a bottom-up fashion: Each converter 'asks' the converter one level higher what the CO<sub>2</sub> emission of that converter's energy output is and takes his share. This process continues until it reaches the primary converters, where the CO<sub>2</sub> emission is calculated on the basis of the energy carriers and emission factors. In this process CO<sub>2</sub> emission related to distribution and conversion losses etc. is included.

The emission factors for energy carriers depend on the mix of origins for those carriers. For example, coal from different regions of origin has different carbon content and hence emission factors differ. The mix of origin is set to the current mix for a country. For the Netherlands, the future mix can be changed by the user in the 'Fuel chain emissions' section under [Supply](supply.md). The default emission factors can be found in the table below.

The emission factor for imported electricity is assumed to be the same as the regional average. (This assumption is expected to change in the near future).

For converters that have CO<sub>2</sub> capture and storage (CCS) abilities, the associated CO<sub>2</sub> emissions of its energy output are reduced by the capture factor. The capture factor of CCS technologies in the model is 85%.

Because the CO<sub>2</sub> emission calculation is based on energy flows, the model calculates only *energetic* CO<sub>2</sub> emissions. This does not include CO<sub>2</sub> emissions from final non-energy consumption, fugitive emissions, industrial process, solvent and other product use, agriculture, LULUCF (Land Use, Land Use Change, and Forestry), and other. For more information on these definitions click [here](http://www.eea.europa.eu/publications/emep-eea-emission-inventory-guidebook-2009/part-b-sectoral-guidance-chapters).

| Energy Carrier | Emission factor | Source |
|----------------|-----------------|--------|
|  | *kg CO<sub>2</sub> per MJ* |  |
| Coal | 0.094533555 |  |
| Lignite | 0.1012 |  |
| Crude oil | 0.073281826 | |
| Natural gas | 0.056060597 | |
| Uranium (nuclear energy) | 0 | |
| Waste (independent of biogenic share) | 0 | |
| Biomass (solid, liquid, and gaseous) | 0 | |
| Renewable electricity (wind, solar etc.) | 0 | |
| Renewable heat (Ambient heat, solar thermal, geothermal) | 0 | |
| Imported electricity | Average of current region | |

Note: Steam & hot water (monetized heat) is not a primary energy carrier, it is always produced from some other form and cannot be imported.

### Dashboard CO<sub>2</sub> calculation

In the [dashboard](dashboard.md) CO<sub>2</sub> calculation we calculate the CO<sub>2</sub> emission associated with all final energy consumption in the area. Therefore these numbers do not include CO<sub>2</sub> emission from the conversion sector within the area that is associated with exported energy (currently only electricity). CO<sub>2</sub> that is emited outside the area to produce electricity that is final energy consumption in the area is included. This calculation principle is commonly called **insert name of principle here**

### Table "CO<sub>2</sub> emissions with im- or export"

This table can be loaded anywhere in the ETM by clicking 'change' in any chart and selecting it from the list. It shows the following for 1990, 2010 and the future year 20xx:

-   The emission including emission for exported electricity (actuals)
-   The emission for exported electricity (difference, export is negative)
-   The emission for supplying only the inland final consumption (With im- and export)

Technical data
--------------

-   The amount of [carbon capture and storage](http://en.wikipedia.org/wiki/Carbon_capture_and_storage) (CCS) for every converter is stored in attribute CO2\_free. Currently the value is 100% for all non-energetic consumption, 85% for all CCS power plants, and 0% for everything else.

-   For each converter the ETM can calculate specifically how much CO<sub>2</sub> is emitted in the scenario.

This makes use of the method "weighted\_carrier\_co2\_per\_mj" which is calculated for each converter.
