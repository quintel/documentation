---
title: Useful, final and primary energy
---

The same energy system can be described with very different numbers, depending on where you measure. A household's warm living room, the gas that its boiler burned, and the gas that was extracted to deliver it are three different amounts of energy. The ETM uses all three perspectives, and knowing them explains most of the numbers you will encounter.

## The three perspectives

**Useful demand** is the service people actually need, expressed as energy: a home heated to 20 °C, hot water, light, kilometres driven. This is where the ETM's [demand-driven calculation](introduction.md) starts.

**Final demand** is the energy that consumers buy to provide those services: the gas, electricity, petrol or district heat that passes the meter. This is what national statistics record, and what most energy bills and policy targets are based on.

**Primary demand** is the energy originally taken from nature before any conversion: crude oil before it is refined, gas before it is burned in a power station, the wind that turns a turbine. It measures the total claim your scenario makes on energy resources.

The differences between the three are conversion losses and efficiencies. A condensing gas boiler turns roughly one unit of final energy (gas) into one unit of useful heat. A conventional power plant needs about two units of primary energy (fuel) to deliver one unit of final electricity. A heat pump turns one unit of final electricity into three or four units of useful heat, drawing the difference from the outside air or ground.

## Why the ETM starts from useful demand

Useful demand is the perspective that makes future scenarios comparable. The need it describes — a warm house — stays the same whether it is met by a gas boiler, a heat pump or a district heating network. By fixing the need and letting you change the technologies, the ETM can show what each choice means for final energy, primary energy, emissions and costs.

A simplified example: suppose statistics say households used 820 MJ of gas and 125 MJ of electricity for heating. Statistics do not record the useful heat this delivered — so the model calculates it from the technologies in use and their efficiencies:

!['Useful' heat demand](/img/docs/Useful_demand.png)

In this example, 75% of homes use gas heaters, 10% electric heaters, 10% heat pumps and 5% micro-CHPs. Working through their efficiencies, the 945 MJ that consumers bought turns out to deliver 1,000 MJ of useful heat (heat pumps contribute more heat than the electricity they consume, by drawing ambient warmth from outdoors).

Once useful demand is known, "what if?" questions become straightforward. Replace the gas heaters with heat pumps and the same 1,000 MJ of warmth requires far less final energy — and the model calculates precisely how much less, and what that means upstream.

In the model you can change useful demand itself as well: better insulation reduces the heat a home needs; more kilometres driven increases the useful demand for transport.

## How primary energy is counted

Adding up primary energy requires a convention for renewables and nuclear: what is the "original" energy of wind, sunshine or uranium? The ETM follows the international convention used by the IEA and Eurostat (the *physical energy content* method):

- For **combustible fuels** — coal, oil, gas, biomass, waste — primary energy is the energy content of the fuel itself.
- For **wind, solar panels and hydro power**, the electricity produced *is* the primary energy: 1 unit of wind electricity counts as 1 unit of primary energy.
- For **nuclear, geothermal and solar heat**, the heat produced counts as the primary energy form.

One consequence is worth remembering: replacing fossil power plants with wind and solar makes primary energy demand *fall faster than* final demand, because the conversion losses of burning fuel disappear from the books. A large drop in primary energy in your scenario is therefore often a sign of electrification and renewables, not necessarily of energy savings by consumers.

The dashboard's energy-use indicator and several charts are based on primary energy — see the [primary demand documentation](../primary-energy.md) for how the dashboard item is defined exactly. The [renewables share](../renewability.md) is calculated from final demand, following the European convention.
