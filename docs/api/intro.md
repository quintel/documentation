---
id: intro
title: Introduction to the API
sidebar_title: Introduction to the API
---

import { BetaBadge, StableBadge, LatestBadge } from '@site/src/components/EnvBadge';

## Versioning

The ETM API has two versions, v3 and v4. Within a version we seek not to change the public API in a way that would break clients, but it's nonetheless constantly in development.

* **[API v4](v4/overview.md)** is served by MyETM, with one endpoint for latest and every stable version. Its paths are prefixed with `/api/v4`.
* **[API v3](v3/overview.md)** is served by the engine that calculates each scenario, with its own endpoint for latest and for each stable version. Its paths are prefixed with `/api/v3`.

API v4 aims to replace API v3, so start new work with v4. API v3 keeps working alongside it for now.

## Environments

The ETM is available in three environments: latest, stable versions, and beta. You should default to using latest unless you have a specific reason to use a stable version or beta.

<table className="no-stripe">
  <thead>
    <tr>
      <th>Environment</th>
      <th>Endpoint</th>
      <th>Git branch</th>
    </tr>
  </thead>
  <tbody>
    <tr>
      <td><LatestBadge nolink /></td>
      <td><code>my.energytransitionmodel.com/api/v4</code><br /><code>engine.energytransitionmodel.com/api/v3</code></td>
      <td><code>production</code></td>
    </tr>
    <tr>
      <td><StableBadge nolink /></td>
      <td><code>my.energytransitionmodel.com/api/v4</code><br /><code>version_tag.engine.energytransitionmodel.com/api/v3</code></td>
      <td><code>version branch</code></td>
    </tr>
    <tr>
      <td><BetaBadge nolink /></td>
      <td><code>beta.my.energytransitionmodel.com/api/v4</code><br /><code>beta.engine.energytransitionmodel.com/api/v3</code></td>
      <td><code>master</code></td>
    </tr>
  </tbody>
</table>

#### Latest

This is the standard version of the ETM. Features are generally complete, well-tested, and ready to be used by the general public. We aim for latest to be available 24-hours a day and 365-days a year, except during occasional, short periods while we perform updates.

We keep [owned scenarios](scenarios.md#authentication) created on latest for as long as they are in use. Scenarios left unused for a long time may eventually be removed. We also reserve the right to retire scenarios whose dataset is being retired.

#### **Stable Versions**

Stable versions are not continuously developed. If you need consistent and reproducible results, using a stable version is recommended. However, these versions do not include the latest improvements made to the ETM. For more details, see [Model Versions](../main/user_manual/model-versions#expiration-date).

In API v4, a scenario on a stable version is reached through the same endpoint as one on latest: its version decides which engine calculates it. In API v3, each stable version has its own endpoint, as the [API v3 overview](v3/overview.md#endpoints) describes.

The stable versions have an [expiration date](../main/user_manual/model-versions#expiration-date). After this expiration date, the version is retired and all scenarios will be deleted.


#### Beta

Beta is used to test new features before they are ready for the general public. While this means you can get access to cutting-edge features earlier, results from beta are subject to change. Scenarios made on beta cannot be transferred to latest or a stable version, and vice-versa. Your settings and user account do not carry over to beta; you need to create a separate account.

We have no plans to delete scenarios from beta, but we reserve the right to do so including owned scenarios.

Beta may occasionally be unavailable.
