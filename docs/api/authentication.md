---
title: Authentication
---

import endpointData from '@site/data/api/tokens';
import ApiEndpoint from '@site/src/components/ApiEndpoint';
import UpcomingFeature from '@site/src/components/UpcomingFeature';
import { BetaBadge, StableBadge, LatestBadge } from '@site/src/components/EnvBadge';

<UpcomingFeature release="2023.01" />

## Personal access tokens

The ETM API uses personal access tokens (also called "API keys") to authenticate requests. The same token works for API v4 and API v3. You can add and remove these keys [**from your settings page**](https://my.energytransitionmodel.com/identity/tokens).

These keys provide access to your account and scenarios, so be sure only to share them with trusted applications. It's highly recommended that you create a new token for each application, rather than reusing the same token in many places. There is no limit to how many you can create.

Authentication with the API is with a bearer token. See: [Using your access token](#using-your-access-token).

### Creating an access token

Access tokens may be created on [**your ETM settings page**](https://my.energytransitionmodel.com/identity/tokens). A token lasts 7, 30, 60, 90 days, or one year, as you choose. After you create your token, the full token string will only be shown for a short period. Be sure to copy it somewhere secure as it will not be shown again.

:::info I've lost my token!
If you lose your token, head to your [access tokens](https://my.energytransitionmodel.com/identity/tokens) page, revoke the token so that it can no longer be used to access your account, and then create a new token.
:::

### Permissions

When you create a token, you choose one of three permission levels:

| Permission | Scopes | In API v4, the token can |
| --- | --- | --- |
| Read | `scenarios:read` | Read your scenarios and collections, and the scenarios shared with you |
| Read and write | `scenarios:read`, `scenarios:write` | Also create scenarios and collections, and change and save the scenarios you are a collaborator or owner of |
| Read, write and delete | `scenarios:read`, `scenarios:write`, `scenarios:delete` | Also delete the scenarios and collections you own, and manage who has access to your scenarios |

Every token also carries the `openid` scope, which lets it [ask who it belongs to](#get-information-about-the-current-user), and the `public` scope, which grants nothing more. A token never does more than your role on a scenario allows: a token that may delete still cannot change a scenario you can only view.

### Using your access token

Whenever you call the API, include [an `Authorization` header](https://developer.mozilla.org/en-US/docs/Web/HTTP/Headers/Authorization) with the `Bearer` token type. For example:

```sh
curl https://my.energytransitionmodel.com/api/v4/saved_scenarios \
  -H "Authorization: Bearer etm_xcNxTaX8KLr5LkGs93sRWnGfhyAUDPWPqKVGe1RL73GJUnfQ"
```

```http
GET /api/v4/saved_scenarios HTTP/2
Host: my.energytransitionmodel.com
Accept: application/json
Authorization: Bearer etm_xcNxTaX8KLr5LkGs93sRWnGfhyAUDPWPqKVGe1RL73GJUnfQ
```

API v3 takes the same header:

```sh
curl https://engine.energytransitionmodel.com/api/v3/scenarios \
  -H "Authorization: Bearer etm_xcNxTaX8KLr5LkGs93sRWnGfhyAUDPWPqKVGe1RL73GJUnfQ"
```

#### Tokens are environment-specific

- <LatestBadge /> tokens can be used on latest and on every stable version.
- <BetaBadge /> tokens are valid only on beta.

## Using the API without authentication

### In API v4

Without a token, you can read public scenarios, including through their engine endpoints such as their inputs, and collections whose scenarios are all public. Everything else needs a token: listing your scenarios, creating one, and every change. Without one, MyETM's own endpoints answer `401` with `unauthenticated`, and engine endpoints refuse in the engine's own format.

### In API v3

In API v3, a scenario is the state an engine calculates, not a saved scenario, and it does not appear among your scenarios in MyETM. You can create one without a token: it then has no owner, so anyone can read and change it. One you create with a token belongs to you: others cannot change it, and you can make it private. See [scenario authentication](scenarios.md#authentication).


## Get information about a token

You can get information about a token by calling MyETM with the token itself. This is useful for verifying that a token is valid, and for getting the expiry time for the token.

<ApiEndpoint data={endpointData.info} />

```http title="Request"
GET /oauth/token/info HTTP/2
Host: my.energytransitionmodel.com
Accept: application/json
Authorization: Bearer etm_xcNxTaX8KLr5LkGs93sRWnGfhyAUDPWPqKVGe1RL73GJUnfQ
```

```json title="Response"
{
  "resource_owner_id": 123,
  "scope": [
    "openid",
    "public",
    "scenarios:read",
    "scenarios:write",
    "scenarios:delete"
  ],
  "expires_in": 2589760,
  "application": {
    "uid": null
  },
  "created_at": 1672679356
}
```

## Get information about the current user

If you're writing a script which uses the API, you may want to know the unique identifier for the user who owns the token. You can get this information by calling MyETM with the token. It needs the `openid` scope, which every personal access token carries.

<ApiEndpoint data={endpointData.userinfo} />

```http title="Request"
GET /oauth/userinfo HTTP/2
Host: my.energytransitionmodel.com
Accept: application/json
Authorization: Bearer etm_xcNxTaX8KLr5LkGs93sRWnGfhyAUDPWPqKVGe1RL73GJUnfQ
```

```json title="Response"
{
  "sub": "123"
}
```

The response holds the user's unique identifier, `sub`, and nothing else.
