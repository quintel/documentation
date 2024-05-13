const scenarioIdParam = {
    name: "scenario_id",
    type: "number",
    description: "the scenario ID",
  };

  export default {
    show: {
      endpoint: "/api/v3/scenarios/{scenario_id}/version",
      method: "GET",
      path_parameters: [scenarioIdParam],
      token: { scopes: ["scenarios:read"], type: "optional-owned" },
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
      token: { scopes: ["scenarios:write"] },
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
      token: { scopes: ["scenarios:write"] },
    },
    index: {
      endpoint: "/api/v3/scenarios/versions",
      method: "GET",
      parameters: [
        {
          name: "scenarios",
          type: "list",
          description: "the scenario id's of the requested scenarios",
        },
      ],
      token: { scopes: ["scenarios:read"], type: "optional-owned" },
    },
  };
