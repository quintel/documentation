---
title: API change log
sidebar_label: Change log
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

### 7th February 2023 <ReleaseBadge name="2023.02" />

* Support for the [forecast storage order](forecast-storage-order.md) has been added. This allows you to control the order in which batteries are calculated [when forecasting is enabled](../main/battery-forecasting.md).
* [It is no longer required to provide a top-level `heat_network_order` attribute](heat-network-order.md#optional-top-level-key) when updating a heat network order.

### 10th January 2023 <ReleaseBadge name="2023.01" />

* [**Authentication has come to the API!**](authentication.md) You can now create personal access tokens for your account. Scenarios will be linked to your account which prevents others from making changes to your data.
* **Scenarios:**
  * API endpoints have been added for [listing](scenarios.md#listing-your-scenarios) and [deleting](scenarios.md#deleting-your-scenarios) your scenarios.
  * Scenarios have a new `private` attribute available to [authenticated](authentication.md) users. This allows you to prevent other API users from viewing your scenario.
  * The scenario `protected` attribute has been removed.
  * The scenario `read_only` attribute has been removed. To prevent others from changing your scenario, please sign up for an account and see the page on [authentication and personal access tokens](authentication.md).
  * The scenario `title` and `description` attributes have been removed. Please use the scenario `metadata` attribute instead. See the change log entry from [5th April 2022](#5th-april-2022-) for more information.
  * An undocumented and unsupported `include_inputs` parameter has been removed from the [scenario endpoint](scenarios.md#get-information-about-a-scenario). The scenario slider settings are still available through the scenarios endpoint using the the `user_values` attribute, or you can fetch the full list of inputs through [the inputs endpoint](inputs.md).
  * The `detailed` parameter has been removed from the [scenario endpoint](scenarios.md#get-information-about-a-scenario). Scenario data will now include all information about the scenario without the need for this parameter.
* [**An API for saved scenarios has been added**](saved-scenarios.md). Saved scenarios allow you show scenarios in your list scenarios in the ETM web application, and more easily share your scenarios with others.
* [**An API for transition paths has been added**](transition-paths.md). Transition paths allow you to work with scenarios across multiple end years and plot their results in a chart.

### 3rd May 2022 <ReleaseBadge name="2022.05" />

* The scenario `protected` attribute is deprecated and has been split into two separate attributes: [`read_only`](scenarios#read-only-scenarios) and [`keep_compatible`](scenarios.md#forward-compatibility). The `protected` attribute continues to be supported as an alias of `read_only`, and scenarios marked as `protected` will behave as they did before.

### 5th April 2022 <ReleaseBadge name="2022.04" />

* Scenarios should no longer be given a `title` or `description` attribute. If you wish to store such data with your scenarios, please use [the scenario metadata](scenarios.md#metadata).

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

* Scenarios marked as `protected` are now read-only. Changes to a protected scenario are not permitted and will be rejected with a 403 Forbidden response. [**Read more →**](scenarios.md#protected-scenarios)
* Inputs may now contain a `disabled_by` attribute which lists other input keys in an array. The input will be disabled if any of the specified inputs have a value provided by the user. [**Read more →**](inputs.md#mutually-exclusive-inputs)
* Old node endpoints `/api/v3/converters` and `/api/v3/converters/{node_id}` have been removed. [You can still access this data by first creating a scenario](nodes.md).
