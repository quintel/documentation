---
title: Coupling external models
---

Complementary external models can be coupled to the ETM, with the aim to generate insights that might not be achieved with each model on its own. For example, the ETM has no explicit geographical allocation of technical components. The ETM could therefore be coupled to a model that is strongly geographically oriented, in order to evaluate the spatial effects of the system interactions from the ETM.

## Coupling external inputs
One way to couple an external model is to implement specific outcomes from the model in the ETM. This can be done by using dedicated external coupling inputs, that bypass the sliders presented in the ETM front-end. These external coupling inputs can be set by through the [API](/api/scenarios#scenario-couplings).

Standard ETM inputs may have a `disabled_by_couplings` attribute. For example, the inputs in the [Paper](https://energytransitionmodel.com/scenario/demand/industry/paper) industry have `[external_model_industry, industry_other_paper]` assigned to this attribute.

<div class="bordered-image">
  <img src="/img/docs/external-coupling/standard_paper_industry.png" alt="A screenshot from the ETM showing the standard ETM paper industry before coupling" />
</div>

External coupling inputs then have the attribute `coupling_groups`. For example, an external coupling input can have the groups `[external_model_industry, industry_other_paper]`.

When an external coupling input is set through the API, its coupling groups will be activated. The standard ETM inputs that are disabled by these coupling groups are deactivated and swapped in the front-end for the external coupling inputs in the group.

<div class="bordered-image">
  <img src="/img/docs/external-coupling/coupled_paper_industry.png" alt="A screenshot from the ETM showing the coupled ETM paper industry" />
</div>

By clicking on the "coupled" icon, that indicates that a slider is set by an external coupling inputs, users can view the coupling groups.

<div class="bordered-image">
  <img src="/img/docs/external-coupling/coupling_groups_paper_industry.png" alt="A screenshot from the ETM showing the standard ETM paper industry modelling before coupling" />
</div>

## Managing coupled models

### Active coupled models
When external coupling inputs are set for a specific model, the coupled model is activated by default. This means that the standard ETM inputs that are disabled by those coupling inputs are inactive.

### Inactive coupled models
In the "Coupled Model Settings", the active coupled external model can be managed. Using the toggle for each coupled external model, the coupling can be deactivated. This means that the external coupling inputs will become inactive and the standard ETM inputs will be reactivated. This action is reversible: the inactive coupled external model can be reactived.

### Uncoupled models
In the "Coupled Model Settings", the coupled external models can also be permanently uncoupled by checking the box "Uncouple permanently". This action is irreversible: all external coupling inputs are permanently removed from the scenario.

<div class="bordered-image">
  <img src="/img/docs/external-coupling/coupling_check_box.png" alt="A screenshot from the ETM showing the settings for coupled external models" />
</div>

