---
title: API Changelog
sidebar_label: Changelog
---

While we endeavour not to change the API in a backwards-incompatible way, this is not always possible. This page contains a history of changes to the API.

Changes described on this page will already be live on our staging server, while those with a date in the future will not yet be live on the production server until the specified date.

* **Production:** `engine.energytransitionmodel.com/api/v3`
* **Staging:** `beta.engine.energytransitionmodel.com/api/v3`

### 1st February 2022

* Scenarios marked as `protected` are now read-only. Changes to a protected scenario are not permitted and will be rejected with a 403 Forbidden response. [**Read more →**](scenario-basics.md#protected-scenarios)
* Inputs may now contain a `disabled_by` attribute which lists other input keys in an array. The input will be disabled if any of the specified inputs have a value provided by the user. [**Read more →**](inputs.md#mutually-exclusive-inputs)
