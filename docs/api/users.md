---
id: users
title: Scenario Users
sidebar_label: Scenario Users
---

import endpointData from '@site/data/api/users';
import ApiEndpoint from '@site/src/components/ApiEndpoint';

Users can be given access to either individual scenarios, or to saved scenarios and all their underlying scenarios. This endpoint manages users on regular scenarios. For managing users on saved scenarios, see [Managing saved scenario users](/api/saved-scenarios#managing-saved-scenario-users). To understand the difference between scenarios and saved scenarios, see [Scenarios vs Saved Scenarios](/api/saved-scenarios#scenarios-vs-saved-scenarios).

## The user object

The user object consist of the following two fields:

* `name` - The username of the user, when the user is registered to the energy transition model. OR
* `email` - If the user is not yet registered to the energy transition model.
* `role` - The role the user has within the scenario.

There are three different types of roles, a detailed description can be found [here](/main/user_manual/managing-scenarios/scenario-manage-access).

* `scenario_owner` - An owner of the scenario, can add other users and has all rights (read/write/destroy).
* `scenario_collaborator` - A collaborator to the scenario, has rights to read and update the scenario.
* `scenario_viewer` - A user that can view the contents of the scenario, even if it is marked as private.

## Batch requests

All user actions can be done in batches: adding or changing multiple users in one request. Each user is processed independently. The response will contain a JSON array of successfully processed users. When one or more users fail, the response will be `422` and contain the following:

* `success` - The users that were successfully processed.
* `errors` - The users that were not successful, with error details.

:::info Partial success persistence
When a bulk operation returns partial success, the successful changes **are persisted** to the database. Only the failed operations need to be retried.
:::

## Get the users for a scenario

Only a scenario owner can access this information.
Sending a GET request for the users coupled to a scenario:

<ApiEndpoint data={endpointData.index} />

```http title="Example request"
GET /api/v3/scenarios/0/users HTTP/2
Host: engine.energytransitionmodel.com
Accept: application/json
Authorization: Bearer YOUR_TOKEN
```

```json title="Example response"

[
  {
    "user_id": 1,
    "name": "David",
    "role": "scenario_collaborator"
  },
  {
    "user_id": 20,
    "name": "Emma",
    "role": "scenario_owner"
  }
],

```

## Add a user to a scenario

It is possible to add multiple users to the scenario at once.
When one of the creations fails, the response returns a `422` with success and errors.

<ApiEndpoint data={endpointData.create} />

```http title="Example request"
POST /api/v3/scenarios/0/users HTTP/2
Host: engine.energytransitionmodel.com
Accept: application/json
Authorization: Bearer YOUR_TOKEN

{
  "scenario_users": [
    {
      "user_email": "john@our_company.com",
      "role": "scenario_collaborator"
    },
  ]

}
```

```json title="Example response"
[
  {
    "user_id": 2,
    "name": "John",
    "role": "scenario_collaborator"
  },
],
```

## Update a user's role

To change their role the user has to be identified by either: their `user_id`, their coupling id `id`, or their email `user_email`.
Sending a PUT request for coupled users.


<ApiEndpoint data={endpointData.update} />

```http title="Example request"
PUT /api/v3/scenarios/0/users HTTP/2
Host: engine.energytransitionmodel.com
Accept: application/json
Authorization: Bearer YOUR_TOKEN

{
  "scenario_users": [
    {
      "user_email": "john@our_company.com",
      "role": "scenario_viewer"
    },
  ]

}
```

```json title="Example response"
[
  {
    "user_id": 2,
    "name": "John",
    "role": "scenario_viewer"
  },
],
```

## Remove a user from a scenario

To remove a user, the user has to be identified by either: their `user_id`, their coupling id `id`, or their email `user_email`.
Sending a DELETE request for coupled users.

<ApiEndpoint data={endpointData.destroy} />

```http title="Example request"
DELETE /api/v3/scenarios/0/users HTTP/2
Host: engine.energytransitionmodel.com
Accept: application/json
Authorization: Bearer YOUR_TOKEN

{
  "scenario_users": [
    {
      "user_email": "john@our_company.com",
    },
  ]

}
```

```json title="Example response"
[
  {
    "user_id": 2,
    "name": "John",
    "role": "scenario_viewer"
  },
],
```

## Remove all users from a scenario

Remove all users except owners from a scenario in a single request.

<ApiEndpoint data={endpointData.destroyAll} />

```http title="Example request"
DELETE /api/v3/scenarios/0/users/destroy_all HTTP/2
Host: engine.energytransitionmodel.com
Accept: application/json
Authorization: Bearer YOUR_TOKEN
```

```json title="Example response"
{
  "message": "All users except owners have been removed"
}
```
