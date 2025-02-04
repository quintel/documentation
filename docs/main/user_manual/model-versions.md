---
id: model-versions
title: Model versions
sidebar_label: Model versions
---

The ETM has multiple model versions. On this page you can find documentation explaining how to navigate through these different versions. 

### 1. Different versions of the ETM
In the ETM we make a distinction between the live version, the beta version, and stable versions.
The standard version of the model is the 'live' version.
Next to this we have the 'beta' version of the model. This version is used to test updates of the model. 
New features are first deployed to the beta version of the model.
Each month the changes to beta are deployed to the live version of the model. 
Every 6 months a stable version is released.
The stable version will consist of the state of the live version at the time of creation. 
After it's creation, no changes to the model will be made. This ensures stability of model results.
See the table below for the differences in updates throughout the versions:

| Functionaility   |  beta   | live | stable 
|:---|:---|:---|:---
| New features  | X | X | - |
| Bug fixes | X | X | * |
| Security improvements | X | X | X |
| Visual improvements | X | X | - |
| Dataset changes  | X | X | - |
| Dataset additions | X | X | - |
| Updated to charts and downloads | X | X | - |
| Scenario migrations | X | X | - |

Please note that bug fixes are by default not applied to stable versions.
The risk of allowing any buf fixes is that it can quickly become a slippery slope for allowing all sorts of chnanges. 
Meanwhile, for some bug fixes, a case for application in the stable servers can be made. 
Therefore, we state that by default bug fixes are not applied to stable versions, but bug fix requests can be made and will be judged on a case-by-case basis.
These have the following conditions, regardgless of these conditions Quintel (The developer of the ETM) the right to approve or deny bug fix requests.
- The bug fix doesn’t change the value of any model inputs or outputs, as this would contradict the nature of a stable version.
- The bug fix must be applied to the relevant version and all newer versions, as this avoids the risk of having a patchwork of bug fixes across diﬀerent versions


### 2. Where to find the versions
Users can find the version they are working in next to the model logo in the model-interface.
While clicking on the dropdown, the available versons appear. 

<div class="bordered-image">
  <img src="/img/docs/location_stable_versions.png" alt="" width="830" height="410" />
</div>



### 3. Overview of current model versions

An overview of the current model versions can be found below:

| Version  |  Release date
|:---|:---
| Live | non-applicable | 
| Beta| non-applicable | 



### 4. Moving scenarios between versions

Users are responsible for moving scenarios from the **live** version to a **stable** version:

- A user has created a scenario on live
- A stable version is created by Quintel
- The user is responsible for moving the scenario from live to stable
- By the default, the scenario stays on live
- They can use any tooling (Excel, PyETM, scenario tools, API)
- At that moment, the stable and live version are the same, so 1-on-1 transfer is possible without loss of information or changes to the scenario
- This results in two scenarios, see the figure below:

<div class="bordered-image">
  <img src="/img/docs/scenario_transfer_live_to_stable.png" alt="" width="410" height="205" />
</div>


Users are responsible for moving scenarios from a **stable** version to **live**:
See the following example:
- A user has created a scenario on stable
- The user wants to continue with the scenario on live, to use the latest model features, but stable and live have diverged
- The user is responsible for moving the scenario from stable to live
- They can use any tooling (Excel, PyETM, scenario tools, API)
- The user has to investigate and make the changes themselves to fit the
changed model on live – manual transfer
- This results in two scenarios, see the figure below:

<div class="bordered-image">
  <img src="/img/docs/scenario_transfer_stable_to_live.png" alt="" width="410" height="205" />
</div>

At the moment, the scenarios are not backward compatible. 
This means that newer versions of the model are not able to load scenarios from older versions. 
Users are responsible for the migration of scenarios to different model versions.
Only scenarios that are on the live version are automatically migrated during updates on the live version of the model.


