---
title: Writing What's new
---

The [What's new](https://energytransitionmodel.com/whats-new) page of the ETM describes the new features and bug fixes that have come with each monthly deploy. A guideline is presented here on how to write texts for the What's new, what features and bug fixes to include and the recommended structure for writing this. Note that the [guidelines for writing texts](./authoring-texts.md) should be followed as a basis when writing the What's new.

## General guidelines

### What's new structure
A section in the What's new is composed of the following categories:
* **New features**: describes new or updated functionalities of the model, such as new technologies, sliders, charts and downloads. 
* **Bug fixes**: describes the bugs that have been fixed. This section is more technical than the New features and are less relevant for the general user. This section is collapsed by default. 
* **Technical changelog**: a CSV file containing information about changes made to inputs (sliders). This section is collapsed by default.

### Style and format
In addition to the [guidelines for writing texts](./authoring-texts.md), it is particularly important that the What's new text activates users to try out the new features themselves. This should be done by using an activating tone and referring to specific sections in the model (including hyperlink) where users can try out the new features. Furthermore, note that the content of the What's new is written in concise bullets.

### When to write a What's new
A new section of the What's new is generally written with each monthly deploy. If there is a deploy with no relevant changes to notify the users about, it can be decided to not write a What's new for that specific deploy. 

### When to include a new feature or bug fix
New features and bug fixes should only be included in the What's new if it is relevant for users to know about these changes. It is important to consider this thoroughly to ensure that the What's new remains concise and reader-friendly. Generally, the following guidelines can be followed in this consideration:
* Newly added sliders, technologies or user output should be included in the What's new.
* Changes to the model should be included if this could result in different scenario inputs or outcomes of existing scenarios, for example when existing modelling is changed (such as inputs or calculation modules) or when existing datasets are updated. 
* Changes that are more technical and where users are not going to experience any changes, should not be included in the What's new.

## Recommended structure
The recommended structure for writing about **New features** and **Bug fixes**, including good examples, is presented in this section. 

### New features
* The new or changed feature should be described in one sentence
* Bullets can be used if found necessary to provide more details about the new or changed feature, but make sure it remains concise
* Refer to sections in the ETM or to the documentation in the text using hyperlinks

:::info Example of a good new feature description
* New setup of the “My Scenarios” and “My Account” pages
  * A [central environment](https://my.energytransitionmodel.com/) is introduced to manage saved scenarios, Collections, and account settings
  * Use this to:
    * Manage and share saved scenarios
    * Generate Personal Access Tokens
    * Update personal information
:::

### Bug fixes
* Describe the involved bug
* Describe the implications of this bug in a way that users understand what went wrong or what modelling results were wrongly calculated
* Describe how it is fixed and, if relevant, if this fix affects other components
* If relevant, refer to sections in the ETM in the text using hyperlinks

:::info Example of a good bug fix description
* An issue in the [curtailment settings](https://energytransitionmodel.com/scenario/flexibility/flexibility_net_load/curtailment-solar-pv) for solar PV led to the wrong calculation of the peak production before curtailment. This issue is fixed, the correct peak production before curtailment is given. The production after curtailment remains unaffected.
:::
