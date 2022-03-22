---
title: Running the ETM with Docker
---

import { DynamicBadge } from '@site/src/components/EnvBadge';

The Energy Transition model consists of three parts:

* **ETEngine**: The main calculation system and API.
* **ETModel**: The front-end, which allows you to create scenarios through a user-interface with sliders.
* **ETSource**: A repository containing our source data. This is needed for ETEngine to function.

ETEngine and ETModel are both configured to run with [Docker](https://www.docker.com/) (via Docker Compose), minimising the amount of effort needed to install dependencies and libraries. This guide will assume that you already have Docker installed and configured.

Docker is supported from the 2022.04 (<DynamicBadge prodDate="2022-04-05" stagDate="2022-03-02" />) release onwards.

## Clone the repositories

Clone the repositories using Git. All three should have the same parent directory:

```bash
git clone https://github.com/quintel/etengine.git
git clone https://github.com/quintel/etmodel.git
git clone https://github.com/quintel/etsource.git
```

This will create a structure like so:

```
├─ parent_dir
│  ├─ etmodel
│  ├─ etsource
│  └─ etengine
```

ETSource also requires a password to decrypt some datasets whose data we are not authorised to redistribute. It is likely this requirement will be removed in the near future.

Create a file called `.password` in the ETSource directory containing the password. The password itself can be found in the "Quintel → Shared" 1Password vault.

```
├─ parent_dir
│  ├─ etengine
│  └─ etsource
│     ├─ .password   # <- password goes here
│     ├─ carriers
│     ├─ config
│     ├─ datasets
│     ├─ ...
```

## ETModel

#### Build the ETModel image:

```bash
docker-compose build
```

#### Install dependencies and seed the database:

```bash
docker-compose run --rm web bash -c 'bin/rails db:drop && bin/setup'
```

This command drops any existing ETModel database; be sure only to run this during the initial setup! This step will also provide you with an e-mail address and password for an administrator account.

When the application is updated you may easily install new dependencies by running `bin/setup`:

```bash
docker-compose run --rm web bin/setup
```

This command is idempotent and may by run at any time whenever needed.

#### Set the API URL (optional)

By default, ETModel will send requests to the beta (staging) version of ETEngine. This is used for testing purposes and is more frequently updated than the live (production) version.

To provide a custom ETEngine address, create `config/settings.local.yml` specifying the protocol (http or https) and host:

```yaml
api_url: https://etengine.test
```

:::info Run ETEngine locally
To run the entire model – including ETEngine and ETSource – on your own machine, ETModel must be told where to find the ETEngine API. You must first find your machine's local/private IP address. This address must be accessible both by your browser and from within the ETModel Docker container. To get your IP address, run:

```zsh
ipconfig getifaddr en0   # on macOS
hostname -I              # on Linux
ipconfig                 # on Windows
```

Alternatively, follow these guides for [macOS](https://www.hellotech.com/guide/for/how-to-find-ip-address-on-mac), [Ubuntu](https://help.ubuntu.com/stable/ubuntu-help/net-findip.html.en), or [Windows](https://support.microsoft.com/en-au/windows/find-your-ip-address-in-windows-f21a9bbc-c582-55cd-35e0-73431160a1b9).

Create a file called `config/settings.local.yml` containing:

```yaml
api_url: http://YOUR_IP_ADDRESS:3000
```
:::

:::warning Use matching branches or tags!
When running ETEngine locally, be sure to use the same branch or tag for ETModel, ETEngine, and ETSource. You are likely to encounter errors if you fail to do so.

For example, if you want to run the latest version, all three should be set to the `master` branch. To run the current "stable" version of the ETM, set them to the `production` branch. If you wish to run a specific production release they should all use the same tag. For example, to use the March 2022 release:

```bash
cd ../etengine && git checkout 2022.03
cd ../etsource && git checkout 2022.03
cd ../etmodel  && git checkout 2022.03
```
:::

#### Launch the containers:

```
docker-compose up
```

After starting application will become available at [http://localhost:3001](http://localhost:3001) after a few seconds. This is indicated by the message "Listening on ...".

## ETEngine

#### Change to the ETEngine directory

```bash
cd etengine
```

#### Build the Docker images

```bash
docker-compose build
```

#### Install dependencies and seed the database

```bash
docker-compose run --rm web bash -c 'bin/rails db:drop && bin/setup'
```

The command drops any existing ETEngine database; be sure only to run this during the initial setup! This step will also provide you with an e-mail address and password for an administrator account.

When the application is updated you may easily install new dependencies by running `bin/setup`:

```bash
docker-compose run --rm web bin/setup
```

This command is idempotent and may by run at any time whenever needed.

#### Launch the containers

```bash
docker-compose up
```

After starting application will become available at [http://localhost:3000](http://localhost:3000) after a few seconds. This is indicated by the message "Listening on ...".

Before the application can start serving scenarios, it must calculate the default dataset (Netherlands). This process will begin the first time a scenario is requested and will take several seconds. Signing in to the administrator account will also begin the calculation. Please be patient! Further requests to ETEngine will happen much faster.
