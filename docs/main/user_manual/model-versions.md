---
id: model-versions
title: Model versions
sidebar_label: Model versions
---

When navigating to the Energy Transition Model, by default, you are directed to the **latest** version of the model. The latest version is generally updated on a monthly basis, ensuring that the model includes the latest features and bug fixes.

Additionally, there are **stable** versions of the model. These versions are created by freezing the latest version at a given time. Stable versions are created much less frequently than the latest version of the model is updated.

:::info Model versions and scenario versions
The **[Scenario versions](managing-scenarios/scenario-history.md)** in the scenario history are different from the **Model versions**. Each scenario is made in a specific version of the model, but each scenario can have different versions in its history.
:::

## Current versions

There is always only one **latest** version, but there may be multiple **stable** versions of the model. Stable versions are labelled first with the year in which the version was released, and then with a version number: `#YEAR-NN`.

| Version | Release date | Updated | Link |
|:---|:---|:---|:---|
| `#latest` | - | Monthly | [energytransitionmodel.com](https://energytransitionmodel.com/) |
| `#2025-01` | February 2025| - | [2025-01.energytransitionmodel.com](https://2025-01.energytransitionmodel.com/) |

## Functionalities

This table gives an overview of the functionalities of the latest version, compared to stable versions.

| Functionality | latest | stable |
|:---|:---:|:---:|
| Scenario management: creating, updating, deleting etc. | ✓ | ✓ |
| Scenario migrations | ✓ |   |
| Security improvements | ✓ | ✓ |
| Bug fixes | ✓ | * |
| New model features  | ✓ |   |
| Front-end changes: visual improvements, new charts etc. | ✓ |   |
| Dataset changes: new, updated, deleted datasets etc.  | ✓ |   |

The **latest** version is under continuous development. If you want the latest bug fixes, model features and charts, it is recommended to make scenarios on that version.

:::info Scenario migrations in the latest version
To make sure that scenarios keep working when the latest version of the model is updated, or to minimize changes in outputs, **scenario migrations** can be applied. This means that it is not guaranteed that inputs and outputs for scenarios on the latest version stay the same.
:::

The goal of **stable** versions is to have stable model input and outputs. If you want to use scenarios to report specific settings or outcomes of the model, it is recommended to make those scenarios on a stable version.

:::info Bug fixes in stable versions
By default, bug fixes are not applied to stable versions of the model, as this may change inputs and outputs. Under very strict conditions, an exception can be made. Any stable version bug fixes will be announced ahead of time. See [Communication](#communication).
:::

## Frequency and timing

By default, a new stable version is released **every year**, in the beginning of the **first quarter**. Additional stable versions may be created, under specific conditions, and will be announced ahead of time, see also [Communication](#communication).

## Expiration date

By default, stable versions are maintained for **four** years. After this time period, both the stable version and the scenarios on that version are deleted. If you want to keep your scenario, you have to move it to a newer version, see also [Move scenarios between versions](#move-scenarios-between-versions).

## Communication

Updates concerning stable versions are announced through the **Technical Newsletter**. You can sign up for this newsletter in your account settings. The newsletter includes a monthly **Changelog** for the latest version of the model. Combined, the monthly changelogs between two stable version releases indicate the overall changes between two stable versions.

## Version selection

In the **front-end**, you can find the version you are working on next to the model logo in the navbar. By clicking on the version, it expands into a dropdown showing all available versions, allowing you to switch to a different version.

- For version control via the **scenario-tools**, see [ETM environments](../scenario-tools/advanced-settings#etm-environments).
- For version control via the **API**, see [Environments](../../api/intro#environments).

## Scenario management with versions

### Scenario version labels

When you work in a specific version of the model and save your scenario, that scenario will be marked with a version tag (see [Current versions](#current-versions)). This version tag is visible in My Scenarios (see [My Scenarios menu](managing-scenarios/my-scenarios-menu)).

### Scenario changes when a stable version is released

When a stable version is created, there will be no changes to your saved scenarios. By default, all scenarios will stay on the version in which they were created. If scenario is created on `latest`, it will stay on `latest`.

### Move scenarios between versions

If you want to a move a scenario between versions, for example from `latest` to `2025-01`, you have to do this manually. The inputs from the existing scenario can be extracted, for example using the API or the scenario tools. A new scenario can then be created in the desired version the model. The inputs can then be set in the new scenario.

:::warning Handling differences in inputs between versions
Moving inputs between versions may not always be directly possible. The more time has passed between the versions, the more likely it is that some inputs will have been added, changed or deleted. Using the Changelog discussed in [Communication](#communication), you can determine how inputs should be corrected for the scenario in the different version to still work.
:::
