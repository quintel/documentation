## Stable version release 2027
A new stable version of the Energy Transition Model will be released on 10 December. This version is intended for use throughout 2027. A stable version is a frozen copy of the model: its assumptions and calculations remain unchanged after the release date, so any change in scenario outcomes results only from changes made to the scenario itself.

After release, the stable version will not receive improvements or bug fixes to the calculation model, or the front-end. The regular, `#latest`, version of the ETM will continue to be updated as usual.

The current stable version, `#stable.2025.01`, will remain available after the release, and scenarios created in it will not be affected. The upcoming stable version will include all additions and improvements made to the model since then. See <a href="https://docs.energytransitionmodel.com/main/user_manual/model-versions" target="_blank">Model versions</a> for more information about the differences between the existing model versions.

Once the new stable version is online, it will be possible to create new scenarios in that version of the model.
It is also possible to move existing work to the stable version.
See <a href="https://docs.energytransitionmodel.com/main/user_manual/move-scenarios-between-versions" target="_blank">Move scenarios between versions: a step-by-step manual</a> for detailed instructions.

### Retired datasets
With the release of the new stable version, the following datasets will be retired from `#latest`. These datasets are outdated and will no longer be updated:

| Dataset | Area code |
|:---|:---|
| Netherlands (2015) | `nl` |
| European Union (2011) | `eu` |
| Singapore | `SG_singapore` |
| Oostende | `BEGM35013_oostende` |
| Turnhout | `BEGM13040_turnhout` |

After the release, these datasets will only be available in the new stable version and not on latest. We will move all **saved scenarios** that use one of these datasets to the new stable version, so you do not have to do anything for those.

**Save your scenarios before 10 December.** Only saved scenarios will be moved. Unclaimed sessions, in other words, scenarios you have opened but never saved _to your account_ will not be included. If you are working on an unsaved scenario based on one of these datasets and want to keep it, make sure to save it before 10 December.

### Downtime on 10 December
The ETM will be unavailable for a short period on 10 December, most likely at the end of the day. The exact time will be announced in advance. During this time we will move the scenarios mentioned above to the new stable version. Taking the model offline makes sure that no scenarios are changed while they are being moved, so the moved scenarios are exactly the same as the originals.

In case you do not want to miss any information concerning the new stable version, and other updates to the ETM, sign up for the technical newsletter via your [profile settings](https://my.energytransitionmodel.com/identity/profile). The newsletter is sent whenever the model is updated and includes a changelog of changed inputs and gqueries. This can be especially useful when moving scenarios between versions.
