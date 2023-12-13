---
title: Overview of costs per sector
---

Below you can find an overview of the different cost components that are taken into account by the ETM per sector. You can use this to gain a better understanding of the cost calculations in the ETM and cost results in your scenario. For more information about CAPEX and OPEX, see [Cost methods](cost-methods.md). 

## Buildings and installations (ex fuel and CCUS)
### Households
|  ***Subject***   | ***Cost components***  |
|---|---|
| Space heating & hot water technologies | CAPEX and OPEX
| Cooling technologies | CAPEX and OPEX
| Heat delivery system | CAPEX and OPEX
| Insulation | CAPEX (special module)
| Solar PV & solar thermal | CAPEX and OPEX
| Appliances, cooking and lighting | No costs 

### Buildings
|  ***Subject***   | ***Cost components***  |
|---|---|
| Space heating technologies | CAPEX and OPEX
| Cooling technologies | CAPEX and OPEX
| Heat delivery system | CAPEX and OPEX
| Insulation | CAPEX _(special module)_
| Solar PV & solar thermal | CAPEX and OPEX
| Appliances, lighting | No costs

### Transport
|  ***Subject***   | ***Cost components***  |
|---|---|
| All vehicles | No costs
| Electric cars and hydrogen cars | (Optional) additional investment costs

### Agriculture
|  ***Subject***   | ***Cost components***  |
|---|---|
| Heating technologies | CAPEX and OPEX
| Appliances | No costs

### Industry
|  ***Subject***   | ***Cost components***  |
|---|---|
| Heating technologies | CAPEX and OPEX
| Appliances | No costs
| Feedstock | No costs

## Storage and conversion (ex fuel and CCUS) 
|  ***Subject***   | ***Cost components***  |
|---|---|
| Power-to-power (p2p) | CAPEX and OPEX of houshold batteries, EV batteries, grid batteries, OPAC and pumped storage
| Power-to-gas (p2g) | CAPEX and OPEX of elektrolyzers
| Power-to-heat (p2h) | CAPEX and OPEX of industrial p2h boilers
| Storage | CAPEX and OPEX of hydrogen and heat

## Energy Infrastructure (ex fuel and CCUS)
|  ***Subject***   | ***Cost components***  |
|---|---|
| Electricity | CAPEX and OPEX per grid level (HV/MV/LV). Including off-shore grid, interconnection and transformers. _(special module)_
| [District heating](heat-infrastructure-costs.md) | CAPEX and OPEX. Distinction between indoor costs, primary and secondary distribution pipelines, exchanger stations and storage costs (per MWh stored). _(special module)_
| Hydrogen | Costs per transported MWh
| Natural gas | Fixed amount of annualised infrastructure cost. This amount is area dependent but does not vary with gas demand in a scenario

## Energy production (ex fuel and CCUS)
|  ***Subject***   | ***Cost components***  |
|---|---|
| Electricity | For each installed power plant, the ETM takes into account investment, CAPEX an OPEX. For imports, a price (curve) can be set in the model. The electricity price per hour follows from the [Merit Order](merit-order.md) calculation
| Heat | For each heater, the ETM takes into account CAPEX an OPEX. 
| Hydrogen | For each installed hydrogen plant, the ETM takes into account CAPEX an OPEX. 

## Carbon capture, utilisation and storage (CCUS)
|  ***Subject***   | ***Cost components***  |
|---|---|
| Capture of CO<sub>2</sub> in industry | CAPEX and OPEX
| Capture of CO<sub>2</sub> in energy sector | CAPEX and OPEX
| Direct Air Capture of CO<sub>2</sub> | CAPEX and OPEX
| Sequestration of CO<sub>2</sub> | CAPEX and OPEX
| Utilisation of captured CO<sub>2</sub> (production of synthetic methanol and kerosene) | CAPEX and OPEX
| CO<sub>2</sub> infrastructure | CAPEX and OPEX


## Energy carriers and import:
|  ***Subject***   | ***Cost components***  |
|---|---|
| All carriers |  All net primary demand of energy carriers. The carrier costs for export are is subtracted from the import costs. For example if gasoline (made in the country) is exported the neccessary imported crude oil costs are substracted from the total crude oil import.
