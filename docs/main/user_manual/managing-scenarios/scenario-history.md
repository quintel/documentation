---
title: Scenario history
---

The ETM tracks history for saved scenarios. When a saved scenario is opened, changes are made, and those changes are saved, it is added as a new scenario version to the scenario history. This history can be viewed in [My Scenarios](my-scenarios-menu). The history includes for each scenario version: the date, the user that saved the changes (relevant when there are multiple users working on a scenario), and, optionally, an added description for the saved changes.

:::info Model versions and scenario versions
The **scenario versions** in the scenario history are different from the **[Model versions](../model-versions.md)**. Each scenario is made in a specific version of the model, but each scenario can have different versions in its history.
:::

The following actions can be taken in the history overview:
- **Open a specific scenario version**: click on a specific version to open the scenario as it was at that point in the history.
- **Edit the description of a scenario version**: edit the description for a specific version to explain why or which changes were made.
- **Restore an older scenario version**: restore the scenario to a specific version in the history. This means that changes applied after this scenario version will be lost. This action is irreversible. A warning pop-up will appear as an extra precaution for this action.

### Roles and rights
Depending on the user's role in a particular scenario (see also [Roles](scenario-manage-access#roles)), they have different rights concerning the history. This is shown in the following table.

| Role | Viewer | Collaborator | Owner |
| :--- | :---: | :---: | :---: |
| Open a scenario version |  | ✓ | ✓ |
| Edit description of a scenario version |  | ✓ | ✓ |
| Restore an older scenario version |  |  | ✓ |
