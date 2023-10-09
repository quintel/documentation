---
title: Identifying yourself
---

There are two types of scenarios in the ETM: public and [private](/api/scenarios#private-scenarios)
ones. The `scenario-tools` allow you to communicate with both. However, in order to communicate with
private scenarios you must identify yourself.

Identification to the API happens through a special token linked to your ETM account. You can
generate one via the online interface of the ETM, a detailed description on how to get your token can be
found [here](/api/authentication).

Once you have your token ready open the `config` folder of the `scenario-tools`. Here you will
find a file named `settings.yml`. This file contains all settings for the tool, like input folders
and csv settings. You can read more about this file [here](/main/scenario-tools/advanced-settings).
To include your personal _secret_ settings, create a new file next to it called `local.settings.yml`.
This file will allow you to overwrite any of the settings from the `settings.yml` file with your
personal ones.

In the `local.settings.yml` file you can add a setting with your personal identification token:

```
personal_etm_token: <YOUR_TOKEN>
```

Now when you run the tools, the token will be automatically used to communicate with the ETM on
your behalf.

:::info Different tokens for beta and live
Your token to communicate to the beta version of the ETM is different from the one to communicate
to the live version. Make sure you have the correct one in your local settings file.
:::
