# Hydrogen 

There is a growing interest in using hydrogen as energy carrier; for heat production, for electricity production, as transport fuel or as feedstock. Hydrogen could be the solution to bridge the growing imbalance between energy demand and supply due to the increased production of solar and wind electrcity. Eventually hydrogen could replace the need for fossil fuels. In the ETM we have modelled hydrogen production, demand and storage, which are described in detail below. 

The implementation of hydrogen in the ETM was commissioned and supervised by Gasunie, GasTerra and Energie Beheer Nederland.

## Hydrogen production

Several hydrogen production routes are implemented in the ETM:

1. **Steam methane reforming (SMR)** = 'grey hydrogen'
2. **Steam methane reforming with CCS** = 'blue hydrogen'
3. **Biomass gasification**
4. **Dedicated H<sub>2</sub> production by offshore wind parks** = 'green hydrogen'
5. **Dedicated H<sub>2</sub> production by solar pv parks** = 'green hydrogen'
6. **H2 production from excess electricity** = 'green hydrogen'

The first three production route are very straightforward; these technologies produce hydrogen with some output-share and 

## Hydrogen demand



## Hydrogen storage

To be able to discover the impact of hydrogen storage on the energy system, we have chosen to model time-resolved hydrogen storage in the ETM. 

### Working principle

The first step is to look at total hydrogen demand and supply per year in a scenario. If demand > supply, we need import to make up for the deficit. If supply > demand, we will need export to get rid of the excess. 

We assume that both import and export have a flat profile, so every hour the same amount of hydrogen will be imported or exported. This means that we can add an import production profile (equal to deficit / 8760 every hour) and an export demand profile (equal to excess / 8760 every hour) to the ETM before starting the hourly H2 calculation.

Doing so ensures that total yearly demand and supply are balanced. We will use storage to make sure that this is also the case on an hourly basis.

This network calculation is commissioned and supervised by Gasunie, GasTerra and Energie Beheer Nederland.

## Hydrogen transport