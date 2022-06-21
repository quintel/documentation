---
title: API Changelog
sidebar_label: Changelog
---

import { ReleaseBadge, ProductionBadge, StagingBadge, UnreleasedBadge } from '@site/src/components/EnvBadge';

While we endeavour not to change the API in a backwards-incompatible way, this is not always possible. This page contains a history of changes to the API.

<dl>
  <dt><ProductionBadge nolink /></dt>
  <dd>
    These changes are live in both production and staging environments.
  </dd>

  <dt style={{ marginTop: '1rem' }}><StagingBadge nolink /></dt>
  <dd>
    Changes marked with this badge are already live in the staging environment, but have not yet been released in the production environment. The date represents when the change will become available in production.
  </dd>


  <dt style={{ marginTop: '1rem' }}><UnreleasedBadge nolink /></dt>
  <dd>
    These changes are not yet available in either environment, but are included to warn of an upcoming change to the API.
  </dd>
</dl>

To learn more about our environments, see the [introduction to the API](intro.md#environments).

### 2nd August 2022 <ReleaseBadge name="2022.08" />

* Scenario `title` and `description` attributes are no longer supported and will have no effect if provided. Use scenario metadata if you wish to set a title or description for your scenario. See [5th April 2022](#5th-april-2022-) for more information.

### 3rd May 2022 <ReleaseBadge name="2022.05" />

* The scenario `protected` attribute is deprecated and has been split into two separate attributes: [`read_only`](scenario-basics#read-only-scenarios) and [`keep_compatible`](scenario-basics.md#forward-compatibility). The `protected` attribute continues to be supported as an alias of `read_only`, and scenarios marked as `protected` will behave as they did before.

### 5th April 2022 <ReleaseBadge name="2022.04" />

* Scenarios should no longer be given a `title` or `description` attribute. If you wish to store such data with your scenarios, please use [the scenario metadata](scenario-basics.md#metadata).

  ```json
  {
    "scenario": {
      "metadata": {
        "title": "My scenario"
      }
    }
  }
  ```

  For the moment, `title` and `description` continue to be supported, and will result in the corresponding metadata keys being set. This feature will be removed later in May 2022.

  ```http title="Example request"
  PUT /api/v3/scenarios/12345 HTTP/2
  Host: engine.energytransitionmodel.com
  Accept: application/json

  {
    "scenario": {
      "title": "My scenario",
      "description": "A description"
    },
    "detailed": true
  }
  ```

  ```json title="Example response"
  {
    "id": 12345,
    // ...
    "title": "My scenario",
    "description": "A description"
    "metadata": {
      "title": "My scenario",
      "description": "A description"
    }
  }
  ```

### 1st February 2022 <ReleaseBadge name="2022.02" />

* Scenarios marked as `protected` are now read-only. Changes to a protected scenario are not permitted and will be rejected with a 403 Forbidden response. [**Read more →**](scenario-basics.md#protected-scenarios)
* Inputs may now contain a `disabled_by` attribute which lists other input keys in an array. The input will be disabled if any of the specified inputs have a value provided by the user. [**Read more →**](inputs.md#mutually-exclusive-inputs)
* Old node endpoints `/api/v3/converters` and `/api/v3/converters/{node_id}` have been removed. [You can still access this data by first creating a scenario](nodes.md).
