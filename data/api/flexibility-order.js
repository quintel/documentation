const scenarioIdParam = {
  name: "scenario_id",
  type: "number",
  description: "the scenario ID the flexibility order belongs to",
};

export default {
  show: {
    endpoint: "/api/v3/scenarios/{scenario_id}/flexibility_order",
    method: "GET",
    path_parameters: [scenarioIdParam],
    token: { scopes: ["scenarios:read"], type: "optional" },
  },

  update: {
    endpoint: "/api/v3/scenarios/{scenario_id}/flexibility_order",
    method: "PUT",
    path_parameters: [scenarioIdParam],
    parameters: [
      {
        name: "flexibility_order",
        type: "object",
        description: "the <a href='#the-flexibilityorder-object'>FlexibilityOrder object</a>",
      },
    ],
    token: { scopes: ["scenarios:write"], type: "optional-owned" },
  },
};
