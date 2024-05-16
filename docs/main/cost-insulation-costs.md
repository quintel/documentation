---
title: Insulation costs
---

There are no dedicated sliders in the ETM to set the level of insulation for the housing or the building stock. Instead, users can lower the typical heat demand of a house or building category (see the [Heat in the built environment](heat-built-environment) section). The corresponding reduction in typical heat demand compared to the starting year is interpreted as an increase in the level of insulation.

In line with the greenfield approach for costs, the ETM only assumes costs for investments required in the future. Insulation costs are therefore added when the typical heat demand is reduced compared to the current situation; if not, then the insulation costs are zero. Increases in typical heat demand do not lead to a change in costs.

## Households
The insulation costs for houses are based on the Ecofys report ['De systeemkosten van warmte voor woningen (2015)'](https://refman.energytransitionmodel.com/publications/2063). This report distinguishes three levels of insulation – low, medium, and high – and specifies the investment costs for transitioning from one level to another. The table below shows the insulation costs for existing housing stock of different categories. The ETM uses the 2020 costs for the four different housing types.

#### Insulation costs in euros excluding VAT
|  **Housing type**  | **Insulation costs from low to medium in €/residence**  | **Insulation from medium to high in €/residence** |
|---|---|---|
| Apartments | 5800 | 12000 |
| Detached houses | 14200 | 35200 |
| Semi-detached houses | 10300 | 24800 |
| Terraced houses | 7200 | 16000 |

To arrive at insulation costs, the three levels of insulation have been mapped to typical heat demand levels. This mapping is based on the relation between the Dutch energy performance indicators and the annual primary fossil energy consumption BENG 2 (see [Lente-akkoord.nl](https://www.lente-akkoord.nl/nieuws/planning-regeling-energielabels)).

#### Insulation level mapping to typical heat demand
|    | **Insulation level low in kwh/m<sup>2</sup>**  | **Insulation level medium in kwh/m<sup>2</sup>** | **Insulation level high in kwh/m<sup>2</sup>** |
|---|---|---|---|
| Typical useful demand | 118 | 220 | 403 |

Typical useful demand per insulation level and typical costs to transfer to a higher insulation level is combined to define two insulation cost categories for every housing type: high and low. These levels determine insulation costs in €/(kWh/m<sup>2</sup>).

The total insulation costs per house is determined by multiplying the heat demand reduction per insulation category with the amount of insulation in that category.

The total insulation costs for a housing category are calculated by multiplying the insulation costs per residence by the total number of residences in that category.


#### Insulation costs mapping example for terraced houses
![Insulation costs example for apartments](/img/docs/insulation_costs_example_chart.png)

_Example_: 1000 terraced houses with a typical heat demand of 350 kWh/m<sup>2</sup> are insulated to a typical heat demand of 100 kWh/m<sup>2</sup>. The insulation costs amount to:
* Insulation in category "low": (350 kWh/m<sup>2</sup> - 220 kWh/m<sup>2</sup>) x 39 €/(kWh/m<sup>2</sup>)= €5,070
* Insulation in category "high": (220 kWh/m<sup>2</sup> - 100 kWh/m<sup>2</sup>) x 157 €/(kWh/m<sup>2</sup>)= €18,840
* Total per residence: €23,910
* *Total insulation costs: €23,910,000*

For new housing stock, insulation costs are only incurred when the typical heat demand is further reduced compared to the default value. In that case, the insulation costs are calculated using the higher costs category. For new terraced houses, for example, that would be €157 per kWh / further typical heat demand reduction.

## Buildings
The insulation costs for buildings follow the same procedure as described above for households. The costs figure for buildings are based on the tussenwoning figures from the Ecofys report, i.e.:

|   | **Insulation costs from low to medium in €/(kWh/m<sup>2</sup>)**  | **Insulation from medium to high in €/(kWh/m<sup>2</sup>)** |
|---|---|---|
| Existing building stock | 39 | 157 |

For new building stock insulation costs of €157/(kWh/m<sup>2</sup>) is used for additional insulation.