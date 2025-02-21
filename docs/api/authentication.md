---
title: Authentication
---

import endpointData from '@site/data/api/tokens';
import ApiEndpoint from '@site/src/components/ApiEndpoint';
import UpcomingFeature from '@site/src/components/UpcomingFeature';
import { StagingBadge, StableBadge, ProductionBadge } from '@site/src/components/EnvBadge';

<UpcomingFeature release="2023.01" />

## Personal access tokens

:::info Token Expiry Update
Previously, tokens could be created without an expiration date. This feature has been deprecated, and tokens can now have a maximum lifespan of one year.
:::

The ETM API uses personal access tokens (also called "API keys") to authenticate requests. You can add and remove these keys [**from your settings page**](https://my.energytransitionmodel.com/identity/tokens).

These keys provide access to your account and scenarios, so be sure only to share them with trusted applications. It's highly recommended that you create a new token for each application, rather than reusing the same token in many places. There is no limit to how many you can create.

Authentication with the API is with a bearer token. See: [Using your access token](#using-your-access-token).

### Creating an access token

Access tokens may be created on [**your ETM settings page**](https://my.energytransitionmodel.com/identity/tokens). After you create your token, the full token string will only be shown for a short period. Be sure to copy it somewhere secure as it will not be shown again.

:::info I've lost my token!
If you lose your token, head to your [access tokens](https://my.energytransitionmodel.com/identity/tokens) page, revoke the token so that it can no longer be used to access your account, and then create a new token.
:::

### Using your access token

Whenever you call the API, include [an `Authorization` header](https://developer.mozilla.org/en-US/docs/Web/HTTP/Headers/Authorization) with the `Bearer` token type. For example:

```sh
curl https://engine.energytransitionmodel.com/api/v3/scenarios \
  -H "Authorization: Bearer etm_xcNxTaX8KLr5LkGs93sRWnGfhyAUDPWPqKVGe1RL73GJUnfQ"
```

```http
GET /api/v3/scenarios HTTP/2
Host: engine.energytransitionmodel.com
Accept: application/json
Authorization: Bearer etm_xcNxTaX8KLr5LkGs93sRWnGfhyAUDPWPqKVGe1RL73GJUnfQ...
```

#### Tokens are environment-specific

- <ProductionBadge /> tokens can be used in both the production and stable environments.
- <StagingBadge /> tokens are valid only in the staging environment.

## Using the API without authentication

Without authentication, your use of the API results in scenarios that are considered "unowned" and can be both viewed *and changed* by anyone. [Creating an ETM account](https://my.energytransitionmodel.com/identity/sign_up) will allow you create scenarios that belong to you, where you can strictly control who can view your data, and prevent others from making changes.


## Get information about a token

You can get information about a token by calling the API with the token itself. This is useful for verifying that a token is valid, and for getting the expiry time for the token.

<ApiEndpoint data={endpointData.info} />

```http title="Request"
GET /oauth/token/info HTTP/2
Host: engine.energytransitionmodel.com
Accept: application/json
Authorization: Bearer etm_xcNxTaX8KLr5LkGs93sRWnGfhyAUDPWPqKVGe1RL73GJUnfQ
```

```json title="Response"
{
  "resource_owner_id": 123,
  "scope": [
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

If you're writing a script which uses the API, you may want to know the unique identifier for the user who owns the token. You can get this information by calling the API with the token.

<ApiEndpoint data={endpointData.userinfo} />

```http title="Request"
GET /oauth/userinfo HTTP/2
Host: engine.energytransitionmodel.com
Accept: application/json
Authorization: Bearer etm_xcNxTaX8KLr5LkGs93sRWnGfhyAUDPWPqKVGe1RL73GJUnfQ
```

```json title="Response"
{
  "sub": "123"
}
```

With only the `openid` scope, the response includes only the unique identifier (`sub`) for the user. If the token also contains the `profile` and/or the `email` scopes, additional information is included:

```json title="Response with extra scopes"
{
  "sub": "123",
  "email": "john.doe@example.com",
  "name": "John Doe"
}
```
