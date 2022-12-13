---
title: Authentication
---

By default, your use of the API results in scenarios that can be both viewed and changed by anyone. It is highly recommended that you use the API with an access token; this attributes scenarios to your account, allowing you to limit who can view, change, or delete them.

## Creating an access token

Access tokens [may be created through your ETM profile](https://engine.energytransitionmodel.com/identity/tokens). When creating a token, you need to choose;

- **When the token should expire:** Token can be set to expire after some days or months. This helps keep your account secure. Although it is not recommended, you can also set the token to never expire.
- **What permissions to grant:** When providing the token to other applications, set the minimum amount of permissions needed to do the job. You can choose to allow a token to only read your scenarios, to create new scenarios, and to change or delete existing scenarios.

After you create your token, the full token string will only be shown for a short period. Be sure to copy it somewhere secure as it will not be shown again.

:::info I've lost my token!
Oops!
:::

## Using your access token

Whenever you call the API, include [an `Authorization` header](https://developer.mozilla.org/en-US/docs/Web/HTTP/Headers/Authorization) with the `Bearer` token type. For example:

```http
GET /api/v3/scenarios/12345 HTTP/2
Host: engine.energytransitionmodel.com
Accept: application/json
Authorization: Bearer etm_xcNxTaX8KLr5LkGs93sRWnGfhyAUDPWPqKVGe1RL73GJUnfQ
```
