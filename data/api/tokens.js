export default {
  info: {
    endpoint: "/oauth/tokens/info",
    method: "GET",
  },
  userinfo: {
    endpoint: "/oauth/userinfo",
    method: "GET",
    token: { scopes: ["openid"] },
  },
};
