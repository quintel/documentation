---
title: Annual and hourly calculations
---

The ETM answers two different kinds of question. *"How much natural gas does my scenario use in 2050?"* is a question about a whole year. *"Is there enough electricity on a cold, windless January evening?"* is a question about a single hour. The model therefore calculates on two levels: annual energy flows for the entire system, and an hour-by-hour simulation for the parts of the system where timing matters.

## The annual calculation

The [energy graph](introduction.md) works with yearly totals: every flow between nodes is an amount of energy per year. This annual view covers the *entire* energy system — every sector, every carrier — and produces most of the headline results: total energy demand, CO₂ emissions, costs, the share of renewables.

Yearly totals are enough for many parts of the system. A car uses the same amount of fuel per year regardless of when it is driven; a factory's yearly gas consumption tells you what you need to know about its emissions.

## Why hours matter

For electricity and heat, yearly totals hide the real challenge. Solar panels produce nothing at night; heat demand peaks in winter; wind comes and goes. A scenario can have more than enough wind and solar *over the year* and still face shortages on dark, still evenings — or produce more power on sunny afternoons than anyone can use.

To capture this, the ETM simulates parts of the system for all **8,760 hours of the year**:

- **Electricity**: all demand and supply, including flexible technologies such as batteries, interconnectors with neighbouring countries and electrolysers.
- **Heat**: space heating in houses and buildings hour by hour — including how insulation and heat storage carry warmth from one hour to the next — and district heating networks.
- **Hydrogen and gas**: hourly balancing of production, consumption and seasonal storage.

The hourly simulations use realistic patterns — called *profiles* or *curves* — for things the model cannot choose: sunshine, wind, outdoor temperature, and the daily rhythm of household electricity use. These profiles come from measured weather and consumption data for your region, and you can test your scenario against different historical [weather years](../weather-conditions.md), including cold, dark winters. See the [profiles documentation](../profiles.md) for the full list.

## How the electricity market is simulated

For every hour, the model must decide which power plants run. It does this the way the real electricity market does, using the **merit order**: cheapest first.

1. Production that costs (almost) nothing to run — solar, wind, hydro — is used first, whenever the weather provides it.
2. The remaining demand is met by dispatchable plants — gas, coal, nuclear, biomass — in order of their running costs, until demand is met.
3. The running cost of the most expensive plant needed in that hour sets the **electricity price** for that hour.

Flexible technologies react to these hourly prices. Batteries charge when electricity is cheap and abundant, and sell it back when it is scarce and expensive. Electrolysers make hydrogen from cheap surplus power. Interconnectors import when neighbours are cheaper and export when they are more expensive. If supply still exceeds demand in some hour, the surplus is *curtailed* — thrown away — and if demand cannot be met, the model reports a shortage.

The result is a realistic hourly picture of prices, imports and exports, storage behaviour and curtailment. The [merit order documentation](../merit-order.md) describes this in more detail.

## The two levels feed each other

The annual and hourly calculations are not separate models — they exchange results:

- The annual calculation tells the hourly simulation what to work with: total electricity demand, installed capacities, the heating technologies in houses.
- The hourly simulation reports back how the year actually played out: how many hours each power plant ran, how much solar and wind power was curtailed, how much electricity was imported and exported, and what it all cost.

Those outcomes then shape the annual results you see. A gas plant that the merit order rarely needs will show high costs per unit of electricity produced; a scenario with much more solar than storage will show rising curtailment instead of rising useful production. This interplay is what makes ETM results more than bookkeeping: your scenario is tested against the hours in which it must actually work.

:::info For modellers and developers
The hourly calculations are performed by open-source calculation engines — [Merit](https://github.com/quintel/merit) for electricity and [Fever](https://github.com/quintel/fever) for space heating. The [contributor documentation](/contrib/intro) describes how they are configured.
:::
