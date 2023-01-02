const scenarioIdParam = {
  name: "id",
  type: "number",
  description: "the ID of the saved scenario",
};

export default {
  index: {
    endpoint: "/api/v3/saved_scenarios",
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
    endpoint: "/api/v3/saved_scenarios/{id}",
    method: "GET",
    path_parameters: [scenarioIdParam],
    token: { scopes: ["scenarios:read"] },
  },
  create: {
    endpoint: "/api/v3/saved_scenarios",
    method: "POST",
    parameters: [
      {
        name: "scenario_id",
        type: "integer",
        description: "the ID of the underlying scenario (required)",
        required: true,
      },
      {
        name: "title",
        type: "string",
        description: "what to call the saved scenario (required)",
        required: true,
      },
      {
        name: "description",
        type: "string",
        description: "an optional description for the saved scenario",
      },
      {
        name: "private",
        type: "boolean",
        description: "whether the scenario can be viewed only by the owner",
      },
    ],
    token: { scopes: ["scenarios:read", "scenarios:write"] },
  },
  update: {
    endpoint: "/api/v3/saved_scenarios/{id}",
    method: "PUT",
    path_parameters: [scenarioIdParam],
    parameters: [
      {
        name: "scenario_id",
        type: "integer",
        description: "the ID of the underlying scenario (required)",
      },
      {
        name: "title",
        type: "string",
        description: "what to call the saved scenario (required)",
      },
      {
        name: "description",
        type: "string",
        description: "an optional description for the saved scenario",
      },
      {
        name: "private",
        type: "boolean",
        description: "whether the scenario can be viewed only by the owner",
      },
      {
        name: "discarded",
        type: "boolean",
        description: "whether the scenario should be in the owner's trash",
      },
    ],
    token: { scopes: ["scenarios:read", "scenarios:write"] },
  },
  destroy: {
    endpoint: "/api/v3/saved_scenarios/{id}",
    method: "DELETE",
    path_parameters: [scenarioIdParam],
    token: { scopes: ["scenarios:read", "scenarios:delete"] },
  },
};
