---
title: Negative emissions
---
The ETM supports so-called 'negative' emissions. Negative emissions arise when more CO<sub>2</sub> is drawn from the ambient air than is added to it. In the ETM, there are two ways to bring about negative emissions:

1. By applying carbon capture to processes using biomass. This is possible for:
    * Coal-fired power plants with biomass co-firing
    * Gas-fired power plants using green gas
    * Hydrogen production with biomass gasification technology
    * Direct use of biomass in industry, for both feedstock and combustion
    * Biomass-fired power plants, both dispatchable and must-run

2. By using Direct Air Capture

You can make assumptions about this in the Emissions > ['CCUS'](https://pro.energytransitionmodel.com/scenario/emissions/ccus/capture-of-co2)

Below, both routes are explained in more detail.

## Negative emissions from biomass
Using biomass to extract bioenergy, for example for the production of electricity and hydrogen, and subsequently capturing and storing the CO<sub>2</sub> emissions released in this process may result in a net decrease in atmospheric CO<sub>2</sub> levels. This is typically referred to as BECCS: bio-energy with carbon capture and storage.

The reasoning behind BECCS is as follows: Biomass grows by drawing CO<sub>2</sub> from the atmosphere. Extracting bioenergy from biomass releases this CO<sub>2</sub> again. However, when this CO<sub>2</sub> is captured and stored, CO<sub>2</sub> initially extracted from the atmosphere does not re-enter the atmosphere, leading to net decrease in atmospheric CO<sub>2</sub> levels.

The [IPCC](https://doi.org/10.1111%2Fgcbb.12514) estimates the global potential of negative emissions from BECCS between 0 to 22 gigatonnes per year.

## Negative emissions from Direct Air Capture
Direct Air Capture (DAC) is a process of capturing CO<sub>2</sub> directly from the ambient air using electricity. If the electricity used is renewable, storing the captured CO<sub>2</sub> can lead to a net decrease in atmospheric CO<sub>2</sub> levels. The captured CO<sub>2</sub> can also be used for the production of carbon neutral fuels.

Direct Air Capture is a promising technology to bring down global CO<sub>2</sub> levels in the atmosphere. However, it is also an energy intensive process. Since CO<sub>2</sub> in the ambient air is 'available' everywhere in the world, DAC capacity is likely to be installed in areas that will have very low (renewable) power costs.

## Bookkeeping
Negative emissions are incorporated in the CO<sub>2</sub> calculation in the following way:
* Negative emissions arising from the production of electricity or hydrogen are incorporated in the [emission factor](co2-emission-factors.md) of these carriers. Since the ETM allocates CO<sub>2</sub> to the sectors in which energy is _used_, this means that all sectors using electricity or hydrogen 'benefit' from these negative emissions. Using more electricity or hydrogen may result in lower or even net negative sector emissions.
* CO<sub>2</sub> captured by Direct Air Capture is deducted from the Energy sector.
