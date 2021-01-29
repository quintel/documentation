---
id: waste-outputs
title: Waste outputs and costable factor
---

Some nodes in the model convert energy from one carrier to another, while also outputting waste energy; a byproduct of the main conversion. This waste energy may be unwanted and unused, or may be directed elsewhere for use in another node.

For example, a gas power plant may take gas as input, while outputting electricity as its main conversion. However, the process of producing electricity also produces waste heat. This heat may be used in a heat network.

The calculation of marginal costs of a node is based on:

1. The cost of the energy inputs,
2. The cost of CO<sub>2</sub> emissions,
3. The variable operation and maintenance costs.

The first two are based on the inputs to the node and assume that *all* of the node outputs contribute to that cost.

The above gas plant has the following outputs:

* Electricity: 45%
* Loss: 15%
* Steam / Hot water: 30%

... and costs:

* Input carrier costs: €10
* CO<sub>2</sub> costs: €10
* Operation and maintenance costs: €10

The marginal costs of this plant will be €30. However, if the heat is waste – a free byproduct of the conversion of gas to electricity – it should not be be considered when calculating the costs. It is therefore possible to declare that a node has one or more waste outputs: carriers which will be ignored when calculating carrier and CO<sub>2</sub> costs.

:::note
In ETEngine the `marginal_costs` method returns the cost of generating one more unit of electricity, so the real marginal costs returned will be €66.67 (€30 / 0.45).
:::

If we now configure the steam / hot water output as waste, the model will calculate costs based only on the electricity output and the portion of loss which can be attributed to electricity. 60% of the loss is due to electricity production (45 / (45 + 30)). The "costable energy factor" of this node is 0.54:

* Electricity: 45% = 0.45
* Loss: 9% = 0.9
* Steam / Hot water: 0% = 0.0

The resulting individual costs are:

* Input carrier costs: €5.40
* CO<sub>2</sub> costs: €5.40
* Operation and maintenance costs: €10.00

The final marginal cost is therefore €20.80. This can have a dramatic effect on the ordering of plants in a merit order.

### How to use

To configure a waste output on a node, add the following line to the node document, replacing "steam_hot_water" with the name of the waste carrier:

```
- waste_outputs = [steam_hot_water]
```

A node may have multiple waste output carriers, separated by a comma:

```
- waste_outputs = [steam_hot_water, useable_heat]
```

Do not include `loss` as a waste output. It will be treated specially, with the model ignoring the share of loss which is attributed to the waste outputs.

ETSource will verify that the output carriers exist on the node. Create the outputs by connecting one or more output edges to another node, or by declaring the output slots explicitly in the node document:

```
- output.electricity = 0.45
- output.heat = 0.3
- output.loss = 0.15
```

### Effects

Use of `waste_outputs` affects:

* `CO<sub>2</sub>_emissions_costs_per_typical_input`
* `weighted_carrier_cost_per_mj`

... components of `marginal_costs` but does not affect total costs of the plant (no effect on `variable_costs`, `fuel_costs` etc).
