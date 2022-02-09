const scenarioIdParam = {
  name: "scenario_id",
  type: "number",
  description: "the scenario ID",
};

export default {
  show: {
    endpoint: "/api/v3/scenarios/{scenario_id}/nodes/{node_key}",
    method: "GET",
    path_parameters: [
      scenarioIdParam,
      {
        name: "node_key",
        type: "string",
        description: "the node key whose data you want to retrieve",
      },
    ],
  },
};
