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

    update: {
      endpoint: "/api/v3/scenarios/{scenario_id}/version",
      method: "PUT",
      path_parameters: [scenarioIdParam],
      parameters: [
        {
          name: "description",
          type: "string",
          description: "a short description of the tagged version",
        },
      ],
      token: { scopes: ["scenarios:delete"] },
    },
    create: {
      endpoint: "/api/v3/scenarios/{scenario_id}/version",
      method: "POST",
      path_parameters: [scenarioIdParam],
      parameters: [
        {
          name: "description",
          type: "string",
          description: "a short description of the tagged version",
        },
      ],
      token: { scopes: ["scenarios:delete"] },
    },
  };
