const scenarioIdParam = {
  name: "scenario_id",
  type: "number",
  description: "the scenario ID",
};

export default {
  index: {
    endpoint: "/api/v3/scenarios/{scenario_id}/users",
    method: "GET",
    path_parameters: [scenarioIdParam],
    token: { scopes: ["scenarios:delete"] },
  },

  create: {
    endpoint: "/api/v3/scenarios/{scenario_id}/users",
    method: "POST",
    path_parameters: [scenarioIdParam],
    parameters: [
      {
        name: "scenario_users",
        type: "array",
        description: "array of user objects to add",
      },
    ],
    token: { scopes: ["scenarios:delete"] },
  },

  update: {
    endpoint: "/api/v3/scenarios/{scenario_id}/users",
    method: "PUT",
    path_parameters: [scenarioIdParam],
    parameters: [
      {
        name: "scenario_users",
        type: "array",
        description: "array of user objects to update",
      },
    ],
    token: { scopes: ["scenarios:delete"] },
  },

  destroy: {
    endpoint: "/api/v3/scenarios/{scenario_id}/users",
    method: "DELETE",
    path_parameters: [scenarioIdParam],
    parameters: [
      {
        name: "scenario_users",
        type: "array",
        description: "array of user objects to remove",
      },
    ],
    token: { scopes: ["scenarios:delete"] },
  },

  destroyAll: {
    endpoint: "/api/v3/scenarios/{scenario_id}/users/destroy_all",
    method: "DELETE",
    path_parameters: [scenarioIdParam],
    token: { scopes: ["scenarios:delete"] },
  },
};
