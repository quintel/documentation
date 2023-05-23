---
title: Coupling external models
---

Complementary external models can be coupled to the ETM, with the aim to generate insights that might not be achieved with each model on its own. For example, the ETM has no explicit geographical allocation of technical components. The ETM could therefore be coupled to a model that is strongly geographically oriented, in order to evaluate the spatial effects of the system interactions from the ETM.

## Implementation

### Coupling external inputs
One way to couple an external model is to implement specific outcomes from the model in the ETM. This can be done by using dedicated external coupling inputs, that bypass the sliders presented in the ETM front-end.

For example, a dedicated model might make in-depth calculations for the steel industry, producing final demand for the steel industry as its output. This model then overwrites the final demand for steel and deactivates the sliders presented in [Demand → Steel](https://energytransitionmodel.com/scenario/demand/industry/steel).

<div class="bordered-image">
  <img src="/img/docs/external-coupling/sliders.png" alt="A screenshot from the ETM showing deactivated coupled sliders in the steel sector after coupling to an external model" />
</div>

### Uncoupling the scenario
While an external model is coupled, the sliders that are deactivated can no longer be used. Therefore, if you want to explore the scenario, you can choose to uncouple the external scenario. This re-enables interaction with the front-end.

<div class="bordered-image">
  <img src="/img/docs/external-coupling/uncoupled-sliders.png" alt="A screenshot from the ETM showing re-enabled sliders in the steel sector after uncoupling from an external model" />
</div>

By uncoupling you reset the scenario back to any previous slider settings that were set by the scenario creator before the external coupling was made.

:::info Uncoupling to previous slider settings
At the moment it is not possible to recouple an uncoupled scenario from the ETM front-end, so returning to the coupled scenario requires you to save a coupled version as backup.

:::
