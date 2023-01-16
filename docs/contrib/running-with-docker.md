---
title: Running the ETM with Docker
---

import { DynamicBadge } from '@site/src/components/EnvBadge';

The Energy Transition model consists of three parts:

* **ETEngine**: The main calculation system and API.
* **ETModel**: The front-end, which allows you to create scenarios through a user-interface with sliders.
* **ETSource**: A repository containing our source data. This is needed for ETEngine to function.

ETEngine and ETModel are both configured to run with [Docker](https://www.docker.com/) (via Docker Compose), minimising the amount of effort needed to install dependencies and libraries. This guide will assume that you already have Docker installed and configured.

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

:::info Encrypted datasets for Quintel staff
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

This password is not available to members of the public, and as such some legacy datasets will be unavailable:

- `de`, use `DE_germany` instead
- `dk`, use `DK_denmark` instead
- `eu`, use `EU27_european_union_27_countries` instead
- `nl` (2015), use `nl2019` instead
- `nl2016`, use `nl2019` instead
- `nl2017`, use `nl2019` instead
- `nl2018`, use `nl2019` instead
:::

## ETEngine

#### Change to the ETEngine directory

```bash
cd etengine
```

#### Build the ETEngine Docker images

```bash
docker-compose build
```

#### Configure ETEngine

Create a file called `config/settings.local.yml` containing:

```yaml
etmodel_uri: http://localhost:3001
```

Change the ETModel URI if you will run it at a different location.

#### Install ETEngine dependencies and seed the database

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

#### Running in production

When running ETEngine in a production environment, there are several additional requirements:

* A `SECRET_KEY_BASE` environment variable must be set. This secret is used to sign cookies and other sensitive data. It should be a random string. Generate a string locally with:

  ```bash
  bundle exec rails secret
  ```

* Set a `WEB_CONCURRENCY` environment variable to the number of processes you wish to run. This is typically equal to the number of CPU cores available.

* `MAILER_SMTP_SETTINGS` and `MAILER_HOST` must be set to use e-mail features. See the [Rails documentation](https://guides.rubyonrails.org/action_mailer_basics.html#action-mailer-configuration) for more information.

* The application container must have ETSource mounted as a volume, and the `ETSOURCE_PATH` environment variable must be set to the path of the mounted volume. This is required for the application to be able to read the datasets.

* An `OPENID_ISSUER` environment variable must be set to the URL the application.

* [An RSA keypair must be generated](https://en.wikibooks.org/wiki/Cryptography/Generate_a_keypair_using_OpenSSL) and the private key mounted in the application volume at `/app/tmp/openid.key`. Failure to do this will result in a new key being generated each time the container starts.

## ETModel

#### Build the ETModel image

```bash
docker-compose build
```
#### Connect to ETEngine

By default, ETModel will send requests to the beta (staging) version of ETEngine. However, connecting to the official versions of the ETM requires authentication which is only available to ETM staff members. If you are not a staff member, you [must run ETEngine for yourself](#etengine).

After setting up ETEngine, sign in to [the administrator account](#install-etengine-dependencies-and-seed-the-database). Scroll down to "Your applications" and create a new "ETModel (Local)" application. ETEngine will now provide you with a configuration containing the ETEngine URL, client ID and secret. Copy this configuration into ETModel's `config/settings.local.yml`.

:::warning Use matching branches or tags!
When running ETEngine locally, be sure to use the same branch or tag for ETModel, ETEngine, and ETSource. You are likely to encounter errors if you fail to do so.

For example, if you want to run the latest version, all three should be set to the `master` branch. To run the current "stable" version of the ETM, set them to the `production` branch. If you wish to run a specific production release they should all use the same tag. For example, to use the March 2022 release:

```bash
cd ../etengine && git checkout 2022.03
cd ../etsource && git checkout 2022.03
cd ../etmodel  && git checkout 2022.03
```
:::

#### Install ETModel dependencies and seed the database

```bash
docker-compose run --rm web bash -c 'bin/rails db:drop && bin/setup'
```

This command drops any existing ETModel database; be sure only to run this during the initial setup! This step will also provide you with an e-mail address and password for an administrator account.

When the application is updated you may easily install new dependencies by running `bin/setup`:

```bash
docker-compose run --rm web bin/setup
```

This command is idempotent and may by run at any time whenever needed.

#### Launch the containers

```
docker-compose up
```

After starting application will become available at [http://localhost:3001](http://localhost:3001) after a few seconds. This is indicated by the message "Listening on ...".
