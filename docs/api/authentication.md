---
title: Authentication
---

Without authentication, your use of the API results in scenarios that can be both viewed *and changed* by anyone. [Creating an ETM account](https://engine.energytransitionmodel.com/identity/sign_up) will allow you create scenarios that belong to you, where you can strictly control who can view your data, and prevent others from making changes.

The ETM API uses personal access tokens (also called "API keys") to authenticate requests. These keys provide access to your account and scenarios, so be sure only to share them with trusted application. It's highly recommended that you create a new token for each application, rather than reusing the same token in many places. There is no limit to how many tokens you can create.

Authentication with the API is with a bearer token. See: [Using your access token](#using-your-access-token).

When you create a scenario using a token, it will be linked with your user account. This means that by default:

* Anyone will be able to *read* the scenario
* Only you will be able to *change* the scenario
* Only you will be able to *delete* the scenario

If you prefer your scenario to be private, so that only you can read it, see the documentation on [private scenarios](scenario-basics.md#private-scenarios).

## Creating an access token

Access tokens [may be created through your ETM profile](https://engine.energytransitionmodel.com/identity/tokens). When creating a token, you need to choose;

- **When the token should expire:** Token can be set to expire after some days or months. This helps keep your account secure. Although it is not recommended, you can also set the token to never expire.
- **What permissions to grant:** When providing the token to other applications, set the minimum amount of permissions needed to do the job. You can choose to allow a token to only read your scenarios, to create new scenarios, and to change or delete existing scenarios.

After you create your token, the full token string will only be shown for a short period. Be sure to copy it somewhere secure as it will not be shown again.

:::info I've lost my token!
If you lose your token, head to your [access tokens](https://engine.energytransitionmodel.com/identity/tokens) page, revoke the token so that it can no longer be used to access your account, and then create a new token.
:::

## Using your access token

Whenever you call the API, include [an `Authorization` header](https://developer.mozilla.org/en-US/docs/Web/HTTP/Headers/Authorization) with the `Bearer` token type. For example:

```sh
curl https://engine/energytransitionmodel.com \
  -H "Authorization: Bearer etm_xcNxTaX8KLr5LkGs93sRWnGfhyAUDPWPqKVGe1RL73GJUnfQ"
```

```http
GET /api/v3/scenarios/12345 HTTP/2
Host: engine.energytransitionmodel.com
Accept: application/json
Authorization: Bearer etm_xcNxTaX8KLr5LkGs93sRWnGfhyAUDPWPqKVGe1RL73GJUnfQ
```
