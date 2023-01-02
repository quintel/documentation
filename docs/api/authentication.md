---
title: Authentication
---

import UpcomingFeature from '@site/src/components/UpcomingFeature';

<UpcomingFeature release="2023.01" />

## Personal access tokens

The ETM API uses personal access tokens (also called "API keys") to authenticate requests. You can add and remove these keys [**from your settings page**](https://engine.energytransitionmodel.com/identity/tokens).

These keys provide access to your account and scenarios, so be sure only to share them with trusted applications. It's highly recommended that you create a new token for each application, rather than reusing the same token in many places. There is no limit to how many you can create.


Authentication with the API is with a bearer token. See: [Using your access token](#using-your-access-token).

### Creating an access token

Access tokens may be created on [**your ETM settings page**](https://engine.energytransitionmodel.com/identity/tokens). After you create your token, the full token string will only be shown for a short period. Be sure to copy it somewhere secure as it will not be shown again.

:::info I've lost my token!
If you lose your token, head to your [access tokens](https://engine.energytransitionmodel.com/identity/tokens) page, revoke the token so that it can no longer be used to access your account, and then create a new token.
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
Authorization: Bearer etm_xcNxTaX8KLr5LkGs93sRWnGfhyAUDPWPqKVGe1RL73GJUnfQ
```

## Using the API without authentication

Without authentication, your use of the API results in scenarios that are considered "unowned" and can be both viewed *and changed* by anyone. [Creating an ETM account](https://engine.energytransitionmodel.com/identity/sign_up) will allow you create scenarios that belong to you, where you can strictly control who can view your data, and prevent others from making changes.
