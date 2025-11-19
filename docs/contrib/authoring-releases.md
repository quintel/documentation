---
title: Writing releases
---

The [Releases](../main/releases.mdx) page of the ETM describes the new features and bug fixes that come with each release. A guideline is presented here on how to write texts for releases, what features and bug fixes to include and the recommended structure for writing them. The [guidelines for writing texts](./authoring-texts.md) should be followed as a basis when writing texts for the releases.

_Note that technical documentation on creating new release files for the Releases page can be found [here](https://github.com/quintel/documentation/tree/master/static/releases/how_to_update_releases.md)._

## Guidelines

### Structure
A release text can consists of the following categories:
* **New features**: describes new or updated functionalities of the model, such as new technologies, sliders, charts and downloads.
* **Bug fixes**: describes the bugs that have been fixed. This section is more technical and less relevant for the general user.
* **Technical changelog**: a CSV file containing information about changes made to inputs (sliders).

Furthermore, there is an **upcoming** section that briefly describes in bullets what changes can be expected in upcoming releases. 

### When to include a new feature or bug fix
New features and bug fixes should only be included in the release if they are relevant for users to know about these changes:
* New sliders, technologies or user output should be included.
* Changes to the model should be included if this could result in different scenario inputs or outcomes of existing scenarios, for example when existing modelling is changed (such as inputs or calculation modules) or when existing datasets are updated.
* Changes that are purely technical and where users are not going to experience any changes, should not be included in the release.

### Style and format
In addition to the [guidelines for writing texts](./authoring-texts.md), it is important that the release text encourages users to try out the new features themselves. This should be done by using an activating tone and referring to specific sections in the model (including hyperlink) where users can try out the new features. Furthermore, note that the content of the releases is written in concise bullet points.

#### New features
* Small new features: describe each new feature in one or two sentences. Sub-bullet points can be used if necessary to provide more details about the new or changed feature, but make sure it remains concise.
* Large new features: use a separate header under new features to describe the new feature and use sub-bullets to provide more details. Preferably, insert an image related to the new feature (for example a chart, table or screenshot of new sliders). 
* Refer to sections in the ETM or to the documentation in the text using hyperlinks.

#### Bug fixes
* Describe the bug and its implications in a way that users understand what went wrong or what modelling results were wrongly calculated
* Describe how it is fixed and, if relevant, whether this fix affects other components
* If relevant, refer to sections in the ETM in the text using hyperlinks

## Example
Below, an example text of a release is shown, containing new features, a bug fix and a link to the technical changelog. The example is provided in Markdown, the language in which the releases are written. 

```markdown
### New features

  * New setup of the “My Scenarios” and “My Account” pages
  * A [central environment](https://my.energytransitionmodel.com/) is introduced to manage saved scenarios, Collections, and account settings
  * Use this to:
    * Manage and share saved scenarios
    * Generate Personal Access Tokens
    * Update personal information

### Bug fixes

  * An issue in the [curtailment settings](https://energytransitionmodel.com/scenario/flexibility/flexibility_net_load/curtailment-solar-pv) for solar PV led to the wrong calculation of the peak production before curtailment. This issue has been fixed, the correct peak production before curtailment is given. The production after curtailment remains unaffected.

### Technical changelog

  * <a href="/img/releases/changelog/202508_changelog_inputs.csv" download>202508_changelog_inputs.csv</a>
```
