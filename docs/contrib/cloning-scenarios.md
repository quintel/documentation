---
title: Cloning scenarios between environments
---

From time to time it can be convenient to copy certain scenarios from one environment to another. For this reason the scenario-cloner bash script exists. This script can clone one or more scenario(s) from `production` to `staging` to run further tests on for example, or to your local `development` enviroment for investigation or debugging purposes, or any other purpose. Because the script levarages the ETEngine API endpoints anonymously, it is only able to clone public scenarios. 

The [script](https://github.com/quintel/etengine/tree/master/scripts/scenario-cloner.sh) is located in the [scripts directory](https://github.com/quintel/etengine/tree/master/scripts) of our [etengine repository](https://github.com/quintel/etengine).

**Pro-tip**: The script can also be used to conveniently duplicate a scenario within the same environment. Just use the same enviroment as the source and target (e.g.: `prod` -> `prod`).

## Requirements

In order to run the script you need to have the following two tools installed:
- `curl`: to perform HTTP requests towards the different environments.
  - On macOS install through `homebrew` by running: `brew install curl`
  - On Debian/Ubuntu linux install by running: `sudo apt install curl`
- `jq`: to parse requests that respond with `JSON`-formatted data.
  - On macOS install through `homebrew` by running: `brew install jq`
  - On Debian/Ubuntu linux install by running: `sudo apt install jq`

## Using the script

The script can be used in two ways:

1. Starting the script without any arguments will launch it in interactive mode. The script will then ask what the source and target environments should be and what the ids are for the scenarios to be cloned:
```bash
$ bash scenario_cloner.sh
Environment to import from: prod, beta or dev? (default: prod): prod
Environment to export to: prod, beta, or dev? (default: dev): beta
Id(s) for scenario(s) to transfer? (separate multiple ids by comma): 1,2,3
```

2. Starting the script with arguments:
  - The first argument is the name of the source enviroment,
  - The second argument is the name of the target enviroment,
  - The third argument are the scenario ids, separated by commas (no spaces)
```bash
# Clone scenarios with ids 1, 2 and 3 from production to staging:
$ bash scripts/scenario_cloner.sh prod staging 1,2,3
# Or 'p' for production, 'b' for beta (= staging)
$ bash scripts/scenario_cloner.sh p b 1,2,3
# Or from production to local (= development) :
$ bash scripts/scenario_cloner.sh prod local 1,2,3
# All of the above does the same :)
```

## Further notes

If it turns out to be much requested, functionality to clone private scenarios can be added later by requesting you to log in as a user with the proper access rights.
