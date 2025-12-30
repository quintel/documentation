const scenarioIdParam = {
  name: "id",
  type: "number",
  description: "the ID of the scenario",
};

export default {
  index: {
    endpoint: "/api/v3/scenarios",
    method: "GET",
    path_parameters: [
      {
        name: "page",
        type: "number",
        description: "the page number to fetch",
      },
      {
        name: "limit",
        type: "number",
        description: "the number of items per page",
      },
    ],
    token: { scopes: ["scenarios:read"] },
  },
  show: {
    endpoint: "/api/v3/scenarios/{id}",
    method: "GET",
    path_parameters: [scenarioIdParam],
    token: { scopes: ["scenarios:read"], type: "optional" },
  },
  create: {
    endpoint: "/api/v3/scenarios",
    method: "POST",
    token: { scopes: ["scenarios:read"], type: "optional" },
  },
  update: {
    endpoint: "/api/v3/scenarios/{id}",
    method: "PUT",
    path_parameters: [scenarioIdParam],
    token: { scopes: ["scenarios:read"], type: "optional-owned" },
  },
  destroy: {
    endpoint: "/api/v3/scenarios/{id}",
    method: "DELETE",
    path_parameters: [scenarioIdParam],
    token: { scopes: ["scenarios:read", "scenarios:delete"] },
  },
  uncouple: {
    endpoint: "/api/v3/scenarios/{id}/uncouple",
    method: "POST",
    path_parameters: [scenarioIdParam],
    token: { scopes: ["scenarios:delete"] },
  },
  couple: {
    endpoint: "/api/v3/scenarios/{id}/couple",
    method: "POST",
    path_parameters: [scenarioIdParam],
    token: { scopes: ["scenarios:delete"] },
  },
};
