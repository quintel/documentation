---
title: Flexibility
---

Natural patterns like seasons (yearly), the variations in weather (weekly), day and night and our rhythm of waking up, going to work, coming home, etc. cause both the need for energy and the availability of energy to fluctuate. Flexibility is about balancing energy supply and demand on all of these timescales. In the ETM you have the ability to choose and adjust how you deal with these fluctuations in the ['Flexibility'](https://pro.energytransitionmodel.com/scenario/flexibility/flexibility_overview/what-is-flexibility) section. On this page, concepts relevant for understanding flexibility are defined.

## Flexibility for different types of energy fluctuations
A first distinction to make when looking into flexibility, is to decide whether it is required for longer or for shorter timescales. For longer timescales, the amount or **volume** of energy supplied or used is more interesting. For shorter timescales, the ability to produce or use a certain amount of energy is more interesting. This is called **capacity**. For a typical energy system fluctuations occur on both timescales, and enough flexibility should be provided for both volume and capacity.

Some forms of flexibility are more suited to process large (fluctuations in) volumes of energy, others are more suitable for large fluctuations in capacity. Only some are suited to both. Some examples are:

_Suitable for large (fluctuations in) volume_
* Imports/exports of gas/hydrogen
* Power-to-gas: hydrogen production from electricity
* Storage of gas/hydrogen
* Seasonal storage of heat

_Suitable for large or sudden (fluctuations in) capacity_
* Storage in lithium-ion batteries
* Dispatchable power and heat plants
* Demand side response

_Suitable for both volume and capacity_
* Imports/exports of electricity
* Power-to-heat: heat production from electricity (with heat storage)
* Curtailment of renewable electricity production
* Large-scale electricity storage: pumped hydro storage

## Definitions of flexible and inflexible supply and demand
The different forms of flexibility listed above indicate that there are also types of supply and demand that are **inflexible**. In the ETM this distinction between inflexible and flexible supply and inflexible (or *baseload*) and flexible demand is explained in the section about ['Hourly inflexible supply and demand'](https://pro.energytransitionmodel.com/scenario/flexibility/flexibility_overview/hourly-inflexible-supply-and-demand):

* Inflexible supply: this is the energy produced by technologies that cannot be regulated easily by humans or that run continuously based on cost considerations. Wind and solar are good examples of technologies that cannot be regulated by humans. They do show variable behaviour (volatile changes due to environmental effects) but they for instance do not follow hourly electricity prices. They are therefore called inflexible. Nuclear power plants are an example of power plants that can be adjusted to run continuously based on cost considerations. These kind of plants are called must-run.
* Flexible supply: this energy production typically *does* follow man-made rules (such as hourly electricity prices) and includes so-called *dispatchable plants* like gas-fired power plants.
* Inflexible (or *baseload*) demand: this type of energy consumption is considered fixed because it cannot be regulated easily. This for example includes industrial processes that need to run continuously, or consumption that does not respond to hourly electricity prices such as individual households. Most of the final electricity demand of sectors falls into this category.
* Flexible demand: this is energy consumption that can be increased, reduced, or shifted in time if needed.

Note that technologies can be classified as flexible for one energy carrier, but as inflexible for another. This distinction is relevant for conversion technologies, such as power-to-heat. When the electricity price is low, power-to-heat technologies will consume electricity to produce heat. From the perspective of the electricity energy carrier, power-to-heat is therefore considered a flexible technology because it follows market rules of the electricity system. From the perspective of the heat energy carrier however, power-to-heat is considered an inflexible technology because the heat network has to accept the demand as is.

*Note: the classification of technologies as flexible or inflexible, is based on their representation in the ETM. Some technologies that may be flexible in reality, can be modelled in such a way that they are considered inflexible by the ETM. For example, the import of natural gas can be considered flexible in reality, but in the ETM it is represented by a flat curve and therefore seen as inflexible.*

## The need for flexibility
In the ETM, we have made selection of charts available that can give you insight in the need for flexibility in the energy system. These charts are intended to give you a sense of the mismatch between supply and demand on various timescales, for the energy carriers electricity, gas, hydrogen, and heat for district heating. These charts are accompanied by explanatory texts that build your understanding of the need for flexibility in a logical order. If you are interested in exploring the need for flexibility in your scenario, we therefore recommend starting at the ['Overview'](https://pro.energytransitionmodel.com/scenario/flexibility/flexibility_overview/what-is-flexibility).

Keep in mind that the definitions used to classify flexible and inflexible technologies described above, affect what is shown in the charts. In the paragraph below you can find a complete overview of which technologies are flexible, and which are inflexible, for the four energy carriers defined above.

## Categorization of flexible and inflexible technologies
### Electricity

See the [Flexibility → Electricity storage](https://pro.energytransitionmodel.com/scenario/flexibility/flexibility_storage/electricity-storage) and [Flexibility → Electricity conversion](https://pro.energytransitionmodel.com/scenario/flexibility/flexibility_conversion/conversion-by-flexible-demand-technologies) sections of the model.

#### Supply

* Inflexible:
  * Must-run / volatile: wind turbines, solar panels, hydro power, must-run nuclear plants
* Flexible:
  * Dispatchable power plants
  * Batteries discharging: household batteries, vehicle-to-grid, large-scale batteries, etc.
  * Import

#### Demand

* Inflexible (baseload):
  * Final electricity demand in sectors
  * Must-run heat pumps / boilers for district heating
* Flexible:
  * Batteries charging: household batteries, vehicle-to-grid, large-scale batteries etc.
  * Conversion: power-to-hydrogen, power-to-heat (for industry or district heating)
  * Curtailment
  * Export

Flexible demand technologies are governed by a "willingness to pay": a maximum price they are willing to pay to consume electricity. Whenever the spot price of electricity exceeds this threshold, the they will stop consuming electricity. See [our documentation on electricity storage](electricity-storage.md#price-based-behaviour) for more information.

### Gas

#### Supply

* Inflexible:
  * Production green gas and LNG (flat curve)
  * Extraction natural gas (flat curve)
  * Import of propane (flat curve)
  * Import of natural gas (flat curve; constant import of gas to balance yearly production of gas)
* Flexible:
  * Gas from storage (in the ETM, gas is automatically buffered throughout the year)

#### Demand

* Inflexible (baseload):
  * Final gas demand in sectors
  * Gas used in dispatchable power plants and heat boilers for district heating
  * Baseload export of green gas (flat curve; constant export of gas to model transitflows)
  * Baseload export of natural gas (flat curve; constant export of gas to model transitflows)
  * Backup export of natural gas (flat curve; constant export of gas to balance yearly production of gas)
  * Distribution losses
* Flexible:
  * Gas entering storage (in the ETM, gas is automatically buffered throughout the year)

### Hydrogen

See the [Supply → Hydrogen](https://pro.energytransitionmodel.com/scenario/supply/hydrogen/hydrogen-production) section of the model.

#### Supply

* Inflexible:
  * Must-run / volatile: dedicated offshore wind turbine or solar PV plant for H2, steam methane reforming, biomass gasification
  * Import of hydrogen (flat curve; constant import of hydrogen to balance yearly production of hydrogen)
  * Hydrogen produced by power-to-gas
* Flexible:
  * Hydrogen from storage (in the ETM, hydrogen is automatically buffered throughout the year)

#### Demand

* Inflexible (baseload):
  * Final hydrogen demand in sectors
  * Hydrogen used in dispatchable power plants and heat boilers for district heating
  * Export of hydrogen (flat curve; constant export of hydrogen to balance yearly production of gas)
  * Distribution losses
* Flexible:
  * Hydrogen entering storage (in the ETM, gas is automatically buffered throughout the year)
  * Export of hydrogen (backup)

### Heat for district heating

See the [Supply → District heating](https://pro.energytransitionmodel.com/scenario/supply/heat/heat-sources) section of the model.

#### Supply

* Inflexible:
  * Must-run / volatile: solar thermal, residual heat from industry, geothermal heat
  * Heat produced by power-to-heat
  * Heat produced by CHPs
  * Import of heat (flat curve)
* Flexible:
  * Dispatchable heat sources: collective heat pump, hydrogen heater, etc.
  * Heat from seasonal storage

#### Demand

* Inflexible (baseload):
  * Final heat demand in sectors
  * Heat demand for Direct Air Capture
  * Distribution losses
* Flexible:
  * Heat entering seasonal storage
  * Heat surplus (wasted)
