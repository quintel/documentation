---
title: API Changelog
sidebar_label: Changelog
---

While we endeavour not to change the API in a backwards-incompatible way, this is not always possible. This page contains a history of changes to the API.

:::info Release dates
All changes described on this page, including those with a date in the future, will already be live on our staging server. Upcoming changes will be released to the production server on the specified date. See [Introduction to the API → Environments](intro.md#environments) for more information.
:::

### 1st February 2022

* Scenarios marked as `protected` are now read-only. Changes to a protected scenario are not permitted and will be rejected with a 403 Forbidden response. [**Read more →**](scenario-basics.md#protected-scenarios)
* Inputs may now contain a `disabled_by` attribute which lists other input keys in an array. The input will be disabled if any of the specified inputs have a value provided by the user. [**Read more →**](inputs.md#mutually-exclusive-inputs)
* Old node endpoints `/api/v3/converters` and `/api/v3/converters/{node_id}` have been removed. [You can still access this data by first creating a scenario](nodes.md).
