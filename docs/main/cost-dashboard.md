---
title: Costs (dashboard)
---

This page explains the different categories that comprise the total annual costs displayed in the dashboard.  

## Total annual costs
The yearly total cost indicator is broken down into ten categories: [heat](#heat), [electricity](#electricity), [hydrogen](#hydrogen), [transport fuels](#transport-fuels), [non-energetic fuels (feedstock)](#non-energetic-fuels), [energy infrastructure](#infrastructure), [insulation](#insulation), [flexibility](#flexibility), [vehicles](#vehicles) and [carbon capture, utilisation and storage (CCUS)](#carbon-capture-utilisation-and-storage-ccus).

### Heat
This category includes depreciation costs, costs of capital, operation and maintenance costs, and fuel costs for all heating and cooling technologies, in all sectors (e.g. households heating appliances, industrial burners etc.). In addition, [district heating network costs](heat-infrastructure-costs.md) are included.

_Note: CHPs are included in the Electricity category.
Fuel costs of heating technologies using electricity or hydrogen are not included. These costs are taken into account in the [Electricity](#electricity) and [Hydrogen](#hydrogen) sections._

### Electricity
Similar to the heat category, this includes all costs related to electricity production, including CHPs. In addition, costs of imported electricity are taken into account.

_Note: The ETM does not compute revenues from electricity export._

### Hydrogen
Similar to heat and electricity, this includes all costs related to hydrogen production. In addition, costs of imported hydrogen, hydrogen infrastructure costs and hydrogen storage costs are taken into account.

_Note: The ETM does not compute revenues from hydrogen export._

### Transport fuels
Fuel costs are based the final demand of the transportation sector and the given energy carriers costs. This does not include the transport systems themselves (such as cars, train and planes). This category also includes the costs of natural gas and oil transportation losses. Fuel costs for hydrogen cars and electric cars are included in the Electricity and Hydrogen categories.

### Non-energetic fuels
Besides the energetic use of fuels, fuels are also used non-energetically (e.g. feedstock in industry). This calculation determines the costs based on the final demand of non-energetic use of fuels in all sectors. Multiplied with the given energy carriers costs, this results in the total costs for non-energetic fuels.

_Note: Hydrogen feedstock is included in the [Hydrogen](#hydrogen) category._

### Infrastructure
The network cost include annual investment and maintenance costs for both the power grid and (natural) gas network. These costs are only calculated for selected regions. For more information on the electricity network, see [this](network.md)

_Note: Hydrogen and district heating infrastructure costs are included in the [Hydrogen](#hydrogen) and [Heat](#heat) categories._

### Insulation
This category includes costs for insulation in the households and buildings sector. 

_Checkout: the [insulation page](insulation.md) for more information._

### Flexibility
This category includes costs related to flexibility options such as batteries and power-to-heat. Electricity input costs are not taken into account: all costs related to electricity production are included in the [Electricity](#electricity) category.

_Note: Costs for batteries in electric vehicles are not included as these batteries are not primarily used for flex. If desired, users can include costs for EV with a slider (see Vehicles).
Costs for power-to-hydrogen are included in the [Hydrogen](#hydrogen) category._

### Vehicles
This category includes (additional) investment costs in electric cars and hydrogen cars. By default, these costs are zero. You can change this if desired.

### Carbon capture, utilisation and storage (CCUS)
This category includes depreciation costs, costs of capital, operation and maintenance costs for:
* carbon capture technologies (in industry, energy sector, DAC)
* sequestration of CO<sub>2</sub>
* utilisation of CO<sub>2</sub> (production of synthetic methanol, kerosene)
* transport of CO<sub>2</sub> (via pipelines, ships)

_Note: Energy costs (fuel costs) for CO<sub>2</sub> capture, sequestration, transport and storage are included in the Electricity (e.g. compression) and Hydrogen (e.g. feedstock input for synthetic methanol or kerosene) series._
