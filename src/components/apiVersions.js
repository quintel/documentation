// How API v3 and API v4 address the endpoints under a scenario. API v4 serves the engine's endpoints
// at the scenario's address on MyETM and answers them as the engine does.

export const HOSTS = {
  v3: "engine.energytransitionmodel.com",
  v4: "my.energytransitionmodel.com",
};

export const SCENARIO_PATHS = {
  v3: "/api/v3/scenarios",
  v4: "/api/v4/saved_scenarios",
};

// The part of a path after the scenario's ID. API v4 reaches the scenario itself with a trailing
// slash, because the bare address is MyETM's own scenario endpoint.
export const scenarioSuffix = (api, suffix = "") =>
  api === "v4" && (suffix === "" || suffix.startsWith("?")) ? `/${suffix}` : suffix;

// The full URL of an endpoint under a scenario.
export const scenarioUrl = (api, scenario, suffix = "") =>
  `https://${HOSTS[api]}${SCENARIO_PATHS[api]}/${scenario}${scenarioSuffix(api, suffix)}`;

// API v4 refuses every change made without a token, so its examples of a change always carry one.
export const TOKEN_HEADER = "Authorization: Bearer YOUR_TOKEN";

export const needsToken = (api, method) => api === "v4" && method !== "GET";

const V3_SCENARIO_ENDPOINT = /^\/api\/v3\/scenarios\/\{(scenario_id|id)\}(?=\/|$)/;

// An optional-owned token describes v3's unowned scenarios, which API v4 does not have: reading a
// public scenario needs no token, and every change does.
const v4Token = (token, method) =>
  token?.type === "optional-owned"
    ? { ...token, type: method === "GET" ? "optional" : "required" }
    : token;

// An endpoint's data as API v4 serves it. Endpoints not under a scenario, and every endpoint in
// API v3, are returned unchanged.
export const endpointFor = (data, api) => {
  if (api !== "v4" || !V3_SCENARIO_ENDPOINT.test(data.endpoint)) {
    return data;
  }

  const suffix = data.endpoint.replace(V3_SCENARIO_ENDPOINT, "");

  return {
    ...data,
    endpoint: `${SCENARIO_PATHS.v4}/{id}${scenarioSuffix(api, suffix)}`,
    path_parameters: data.path_parameters?.map((param) =>
      param.name === "scenario_id" ? { ...param, name: "id" } : param
    ),
    token: v4Token(data.token, data.method),
  };
};
