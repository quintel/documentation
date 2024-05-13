---
title: Insulation costs
---

There are no separate sliders available in the ETM to set the level of insulation for housing or building stock. Instead, users can lower the typical heat demand of a house or building category (see the [Heat in the built environment](heat-built-environment) section). The corresponding reduction in typical heat demand compared to the starting year is interpreted as an increase in the level of insulation.

In line with the greenfield approach for costs, the ETM only assumes costs for investments required in the future. Insulation costs are therefore added when the typical heat demand is reduced compared to the current situation; if not, then the insulation costs are zero. Increases in typical heat demand do not lead to a change in costs.

## Households
The insulation costs for houses are based on the Ecofys report ['De systeemkosten van warmte voor woningen (2015)'](https://refman.energytransitionmodel.com/publications/2063). This report distinguishes three levels of insulation – low, medium, and high – and specifies the investment costs for transitioning from one level to another. The table below shows the insulation costs for existing housing stock of different categories. The ETM uses the 2020 costs for the four different housing categories: apartments (_flat_), detached houses (_vrijstaande woning_), semi-detached houses (_twee-onder-een-kapwoning_) and terraced houses (_tussenwoning_).

#### Insulation costs in euros excluding VAT
|  **Housing type**  | **Insulation costs from low > medium in €/residence**  | **Insulation from medium > high in €/residence** |
|---|---|---|
| Apartments | 5800.0 | 12000.0 |
| Detached houses | 14200.0 | 35200.0 |
| Semi-detached houses | 10300.0 | 24800.0 |
| Terraced houses | 7200.0 | 16000.0 |

To arrive at insulation costs, the three levels of insulation have been mapped to typical heat demand levels. This mapping is based on the relation between the Dutch energy performance indicators and the annual primary fossil energy consumption BENG 2 (see [Lente-akkoord.nl](https://www.lente-akkoord.nl/nieuws/planning-regeling-energielabels)).

#### Insulation level mapping to typical heat demand
|    | **Insulation level low**  | **Insulation level medium** | **Insulation level high** |
|---|---|---|---|
| Typical useful demand | 118.0 | 220.0 | 403.0 |

#### Insulation costs mapping example for apartments
![Insulation costs example for apartments](/img/docs/insulation_costs_example_chart.png)

The combination of these data on insulation costs and energy performance indicators has led to two costs categories per typical heat demand reduction: a lower category and a higher category. The costs involved in transitioning from one insulation category to another are divided by the maximum heat demand reduction required.

The total insulation costs for a housing category are then calculated by multiplying the insulation costs per typical heat demand reduction by the total number of residences of that category.

_Example_: 1000 terraced houses with a typical heat demand of 350 kWh/m2 are insulated to a typical heat demand of 100 kWh/m2. The insulation costs then amount to:
* Low: (350 - 220) x 39 = €5,070
* High: (220 - 100) x 157 = €18,840
* Total per residence: €23,910
* *Total insulation costs: €23,910,000*

For new housing stock, insulation costs are only incurred when the typical heat demand is further reduced compared to the default value. In that case, the insulation costs are calculated using the higher costs category. For new terraced houses, for example, that would be €157 per kWh/m2 further typical heat demand reduction.

## Buildings
The insulation costs for buildings follows the same procedure as described above for households. The costs figure for buildings are based on the tussenwoning figures from the Ecofys report, i.e.:
* Existing building stock: lower insulation costs of €39 / (kWh / m2), higher insulation costs of €157 / (kWh / m2);
* New building stock: insulation costs of €157 / (kWh / m2).

