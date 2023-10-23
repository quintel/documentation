const scenarioIdParam = {
  name: "scenario_id",
  type: "number",
  description: "the scenario ID the heat network order belongs to",
};

export default {
  show: {
    endpoint: "/api/v3/scenarios/{scenario_id}/heat_network_order",
    method: "GET",
    path_parameters: [scenarioIdParam],
    parameters: [
      {
        name: "subtype",
        type: "string",
        description: "temperature level, one of `lt`, `mt` or `ht`"
      }
    ],
    token: { scopes: ["scenarios:read"], type: "optional" },
  },

  update: {
    endpoint: "/api/v3/scenarios/{scenario_id}/heat_network_order",
    method: "PUT",
    path_parameters: [scenarioIdParam],
    parameters: [
      {
        name: "subtype",
        type: "string",
        description: "temperature level, one of `lt`, `mt` or `ht`",
      },
      {
        name: "order",
        type: "array",
        description: "the <a href='#the-heatnetworkorder-object'>HeatNetworkOrder order</a>",
      },
    ],
    token: { scopes: ["scenarios:write"], type: "optional-owned" },
  },
};
