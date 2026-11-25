---
title: API v4 overview
sidebar_label: Overview
---

API v4 is served by MyETM. Its paths are prefixed with `/api/v4`.

## Endpoints

Latest and every stable version share one endpoint, and beta has its own. Both are listed under [Environments](../intro.md#environments).

## Scenarios, snapshots and versions

* **Scenario** – what you save, share, list and put in collections: a title, a description, its users and its privacy. You address it by its ID, as `/api/v4/saved_scenarios/{id}`.
* **Snapshot** – an earlier state of a scenario. Saving a scenario keeps the state you were working on as a snapshot in its [history](../../main/user_manual/managing-scenarios/scenario-history.md).
* **Version** – the model a scenario is calculated with, named by its tag: `latest`, `beta`, or the tag of a stable version. See [model versions](../../main/user_manual/model-versions.md).

The API v3 pages call a scenario a *saved scenario*, and use *scenario* for the state an engine calculates. API v4 shows the ID of that state as a scenario's `scenario_id`. It changes every time the scenario is saved; the scenario's own `id` does not.

## How a scenario's ID reaches its engine

Every scenario belongs to one version, and every version has its own engine. You address a scenario by its ID alone:

```plaintext
https://my.energytransitionmodel.com/api/v4/saved_scenarios/123/inputs
```

MyETM looks up scenario 123, finds its version and its current `scenario_id`, and passes the call on to that version's engine as a call on `/api/v3/scenarios/{scenario_id}/inputs`. You never need the engine's endpoint or the `scenario_id` yourself: a scenario on a stable version is reached through the same endpoint as one on `latest`, and when the scenario is saved its calls move on to its new `scenario_id` while its ID stays the same.

## Two kinds of endpoint

* **MyETM's own endpoints** – scenarios, their users, their snapshots, and collections. These answer in [the v4 format](#the-v4-format) below.
* **Engine endpoints** – every other path under a scenario, such as `inputs`, `custom_curves` or `curves/hydrogen_profiles.csv`, is passed on to the scenario's engine, and answered as the engine answers it. When MyETM refuses the call, or the engine does not answer, the answer is in the v4 format.

You can have 4 calls to engine endpoints open at once for each token, or for each address when you send no token, and 16 for each address in all. A call beyond that answers `429 Too Many Requests`.

## The v4 format

### Requests

A body names its resource, such as `saved_scenario` or `collection`, and holds its members inside:

```json
{ "saved_scenario": { "title": "My scenario" } }
```

A member the endpoint does not accept is refused with `param_invalid`, rather than ignored. The exceptions are the read-only members a resource shows, such as `id`, `created_at`, `updated_at` and `discarded_at`, which are ignored, so you can send back what you fetched.

A list holds at most 100 items, whether it is a member, such as a collection's `saved_scenario_ids`, or a whole batch.

### Data

A response holds either `data` or `errors`, never both. A resource, or a list of them, sits under `data`, with anything about the response as a whole under `meta`:

```json
{
  "data": {
    "id": 123,
    "title": "My scenario",
    "description": null,
    "scenario_id": 98765,
    "area_code": "nl2023",
    "end_year": 2050,
    "version": "latest",
    "private": false,
    "discarded_at": null,
    "created_at": "2026-11-25T10:00:00.000Z",
    "updated_at": "2026-11-25T10:00:00.000Z"
  },
  "meta": {}
}
```

Deleting answers `204 No Content`, with no body.

### Pagination

A list of resources is paginated. Pass `page`, from 1, and `limit` in the query string. `limit` is 25 when not given, and at most 100: a larger one is lowered to 100. `meta.pagination` says where you are:

```json
{
  "data": [{ "id": 123 }, { "id": 124 }],
  "meta": {
    "pagination": { "page": 1, "limit": 25, "pages": 3, "count": 61 }
  }
}
```

* `page` – the page you are on
* `limit` – the items per page
* `pages` – how many pages there are
* `count` – how many items there are in all

### Batches

An endpoint that takes a list of items, such as adding users to a scenario, answers `207 Multi-Status`. Each item gets its own result, in the order you sent them, and `meta.batch` counts them:

```json
{
  "data": [
    {
      "status": "ok",
      "data": { "email": "anna@example.com", "role": "scenario_viewer", "pending": false }
    },
    {
      "status": "error",
      "code": "validation_failed",
      "detail": "This user already has access to this scenario",
      "source": { "pointer": "/saved_scenario_users/1" }
    }
  ],
  "meta": { "batch": { "succeeded": 1, "failed": 1, "total": 2 } }
}
```

### Errors

A refused call answers with a list of errors. Each has the HTTP `status`, a machine-readable `code`, a `detail` for people and, when the error is about something you sent, a `source.pointer` naming it:

```json
{
  "errors": [
    {
      "status": 422,
      "code": "validation_failed",
      "detail": "is missing",
      "source": { "pointer": "/saved_scenario/title" }
    }
  ]
}
```

To tell errors apart in your own code, check the `code`. It does not change, whereas the `detail` text may, and several codes share a status, such as `not_found` and `scenario_not_found`. These are all the codes:

| Code | Status | Meaning |
| --- | --- | --- |
| `param_missing` | 400 | A required member is absent |
| `param_invalid` | 400 | A member has the wrong shape, or the endpoint does not accept it |
| `parse_error` | 400 | The body is not valid JSON |
| `unauthenticated` | 401 | No usable token: none was sent, or it was revoked or has expired. A private scenario asked for without a token also answers this |
| `forbidden` | 403 | Your token or your role does not allow this call, or the path is not passed on to the engine |
| `not_found` | 404 | The resource does not exist, or you cannot see it |
| `scenario_not_found` | 404 | The scenario does not exist |
| `scenario_discarded` | 409 | The scenario is in the [trash](../../main/user_manual/managing-scenarios/my-scenarios-menu.md#trash); restore it first |
| `validation_failed` | 422 | A member's value is not accepted; `source.pointer` names it |
| `too_many_requests` | 429 | You already have the most calls to engine endpoints open at once |
| `internal_error` | 500 | Something went wrong in the ETM |
| `upstream_error` | 502 | MyETM could not complete the call on the engine |
| `engine_unavailable` | 502 | The engine did not answer a call to an engine endpoint in time |

A `401` also carries a `WWW-Authenticate: Bearer realm="api"` header.
