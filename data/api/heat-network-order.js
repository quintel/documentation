const scenarioIdParam = {
  name: "scenario_id",
  type: "number",
  description: "the scenario ID the heat network order belongs to"
};

export default {
  "show": {
    "endpoint": "/api/v3/scenarios/{scenario_id}/heat_network_order",
    "method": "GET",
    "path_parameters": [scenarioIdParam]
  },

  "update": {
    "endpoint": "/api/v3/scenarios/{scenario_id}/heat_network_order",
    "method": "PUT",
    "path_parameters": [scenarioIdParam],
    "parameters": [
      {
        "name": "heat_network_order",
        "type": "object",
        "description": "the <a href='#the-heatnetworkorder-object'>HeatNetworkOrder object</a>"
      }
    ]
  }
}
