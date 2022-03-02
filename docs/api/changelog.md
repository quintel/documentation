---
title: API Changelog
sidebar_label: Changelog
---

import { DynamicBadge } from '@site/src/components/EnvBadge';

While we endeavour not to change the API in a backwards-incompatible way, this is not always possible. This page contains a history of changes to the API.

:::info Release dates
All changes described on this page, including those with a date in the future, will already be live on our staging server. Upcoming changes will be released to the production server on the specified date. See [Introduction to the API → Environments](intro.md#environments) for more information.
:::

### 5th April 2022 <DynamicBadge prodDate="2022-04-05" />

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

### 1st February 2022 <DynamicBadge prodDate="2022-02-01" />

* Scenarios marked as `protected` are now read-only. Changes to a protected scenario are not permitted and will be rejected with a 403 Forbidden response. [**Read more →**](scenario-basics.md#protected-scenarios)
* Inputs may now contain a `disabled_by` attribute which lists other input keys in an array. The input will be disabled if any of the specified inputs have a value provided by the user. [**Read more →**](inputs.md#mutually-exclusive-inputs)
* Old node endpoints `/api/v3/converters` and `/api/v3/converters/{node_id}` have been removed. [You can still access this data by first creating a scenario](nodes.md).
