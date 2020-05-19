---
title: "Advanced: Cost of capital"
---

The ETM calculates the cost of capital for installed assets in the energy system, such as power plants, energy infrastructure and heating technologies. As all costs in the ETM are expressed in real terms (i.e. no inflation), the WACC is in real terms as well. All technologies in the ETM are grouped into four 'risk categories': Households, Power infrastructure, Mature technologies and Immature technologies. For each of these categories a different default WACC is used, which can be changed by the user in the Costs section of the model. A more detailed specification of the categories can be found below:

* Households (real WACC: 2%). This category includes:
  * Heating and cooling technologies such as boilers, heat pumps etc.
  * Insulation costs
  * Solar PV and solar thermal
  * Household batteries
* Power grid (real WACC: 3%). This category includes:
  * HV, MV and LV infrastructure
  * Transformers
  * Interconnection capacity
  * Off-shore grid

* Commercial / mature technologies (real WACC: 4%). This category includes:
  * Heating and cooling technologies in the services sector, agriculture and industry
  * Power plants and CHPs (except nuclear and hydrogen)
  * Solar farms, wind turbines, hydro power
  * Steam methane reforming
  * District heating infrastructure
* New / immature technologies (real WACC: 7%). This category includes:
  * Carbon Capture & Storage
  * Electrolysis
  * Hydrogen infrastructure and power plants
  * Seasonal storage of heat
  * Gasification of wet biomass
  * Various flexibility options such as power-to-hydrogen, power-to-kerosene and underground pumped hydro storage
  * Nuclear power plants

_Sources:_

The risk categories and (default) WACC percentages per category have been assessed in close cooperation with experts from ING Group, Alliander, Berenschot and Kalavasta. In addition, the following reports and articles have been consulted:

* [Dutch Authority for Consumers and Markets](https://www.acm.nl/sites/default/files/old_publication/publicaties/15617_wacc-report-final.pdf)
* [PBL Netherlands Environmental Assessment Agency](https://www.pbl.nl/sites/default/files/rest/cms/publicaties/pbl-2018-conceptadvies-basisbedragen-algemeen-sde-plus-2019_3300.pdf)
* [KPMG](https://assets.kpmg/content/dam/kpmg/ch/pdf/cost-of-capital-study-2018.pdf)
* [Financial Times](https://www.ft.com/content/f9a96304-e980-11e8-885c-e64da4c0f981)

Please note that some of these reports refer to _nominal_ WACCs which have to be corrected for inflation.
