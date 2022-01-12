export default {
  index: {
    endpoint: "/api/v3/scenarios/{scenario_id}/inputs",
    method: "GET",
    path_parameters: [
      {
        name: "scenario_id",
        type: "number",
        description: "the scenario ID",
      },
    ],
  },
  show: {
    endpoint: "/api/v3/scenarios/{scenario_id}/inputs/{input_key}",
    method: "GET",
    path_parameters: [
      {
        name: "scenario_id",
        type: "number",
        description: "the scenario ID",
      },
      {
        name: "input_key",
        type: "string",
        description: "the name of the input",
      },
    ],
  },
};
