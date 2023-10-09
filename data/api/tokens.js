export default {
  info: {
    endpoint: "/oauth/token/info",
    method: "GET",
  },
  userinfo: {
    endpoint: "/oauth/userinfo",
    method: "GET",
    token: { scopes: ["openid"] },
  },
};
