const idParam = {
  name: "id",
  type: "number",
  description: "the ID of the collection path",
};

export default {
  index: {
    endpoint: "/api/v3/collections",
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
    endpoint: "/api/v3/collections/{id}",
    method: "GET",
    path_parameters: [idParam],
    token: { scopes: ["scenarios:read"] },
  },
  create: {
    endpoint: "/api/v3/collections",
    method: "POST",
    parameters: [
      {
        name: "title",
        type: "string",
        description: "what to call the collection (required)",
        required: true,
      },
      {
        name: "scenario_ids",
        type: "[]number",
        description:
          "the IDs of the underlying scenarios (required); at least one is required between scenarios and saved_scenario",
        required: true,
      },
      {
        name: "saved_scenario_ids",
        type: "[]number",
        description:
          "the IDs of the underlying saved scenarios; at least one is required between scenarios and saved_scenarios",
        required: true,
      },
    ],
    token: { scopes: ["scenarios:read", "scenarios:write"] },
  },
  update: {
    endpoint: "/api/v3/collections/{id}",
    method: "PUT",
    path_parameters: [idParam],
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
    endpoint: "/api/v3/collections/{id}",
    method: "DELETE",
    path_parameters: [idParam],
    token: { scopes: ["scenarios:read", "scenarios:delete"] },
  },
};
