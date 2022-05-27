const scenarioIdParam = {
  name: "scenario_id",
  type: "number",
  description: "the scenario ID",
};

export default {
  index: {
    endpoint: "/api/v3/scenarios/{scenario_id}/merit",
    method: "GET",
    path_parameters: [
      scenarioIdParam
    ],
  },
};
