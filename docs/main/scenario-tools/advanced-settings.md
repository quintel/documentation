---
title: Advanced settings
---

## Configuring the tool

You can find different kinds of settings in the configuration file `config/settings.yml` including:
input/output folder settings, settings for [when you run the model locally](#etm-environments), and
CSV settings.

To adjust these settings please create a new file (or copy the `settings.yml`) and name it
`local.settings.yml`. In this new file you can update any of the settings with your personal ones.

Here is a quick overview of the possible settings and their default values:

| Setting | What does it do? | Default value |
| --- | --- | --- |
| `personal_etm_token` | Token to identify you to the ETM to access your personal scenarios. [Learn more..](/main/scenario-tools/identifying-yourself)| Blank |
| `proxy_servers` | URLs to the proxy servers you are using. [Learn more..](/main/scenario-tools/using-proxies)| Blank |
| `input_file_folder` | Location of the main input files, this can be a full path to anywhere on your computer. | `data/input`|
| `input_curves_folder` | Location of where the curve files you wish to use are stored, this can be a full path to anywhere on your computer. | `data/input/curves`|
| `output_file_folder` | Location of where all output files should be written to by the tools. Again, this can be a full path to any folder on your computer. | `data/output` |
|`local_engine_url`| The url to ETEngine that should be used when you use the `local` option in the tools. | `http://localhost:3000/api/v3` |
|`local_model_url`| The url to ETModel that should be used when you use the `local` option in the tools. | `http://localhost:3001` |
| `csv_separator` | The separator your CSV files are using. Some European computers use ';' instead of ','. | , |
| `decimal_separator` | The decimal separator your CSV files are using. Some national conventions use ',' instead of '.'. | . |

## ETM environments
The ETM has live, stable and beta environments. The scenario-tools connects to the live environment by
default, however if you wish to connect to a stable version or beta (to test more experimental features),
you may update the endpoint through the tool to use these environments.
 You can also run the ETM locally, check the [contributors section](/contrib/intro) for more info.

When running any of the scripts in the scenario-tools, you can add the arguments `beta` or `local`
to create or query scenarios on the ETM [beta server](https://beta-pro.energytransitionmodel.com/)
or your local machine. The latter assumes your local engine runs at `localhost:3000` and local
model at `localhost:4000`, but you can change this in your `local.settings.yml`. If you would like to update
your endpoint to reference and interact with a stable version, you can also do this in your `local.settings.yml`.

Some example commands:

```
pipenv run scenario_from_csv beta
```
or
```
python scenario_from_csv.py local
```
