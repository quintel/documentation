const scenarioIdParam = {
  name: "scenario_id",
  type: "number",
  description: "the ID of the scenario",
};

export default {
  show: {
    endpoint: "/api/v3/scenarios/{scenario_id}",
    method: "GET",
    path_parameters: [scenarioIdParam],
  },
  create: {
    endpoint: "/api/v3/scenarios",
    method: "POST",
  },
  update: {
    endpoint: "/api/v3/scenarios/{scenario_id}",
    method: "PUT",
    path_parameters: [scenarioIdParam],
  },
}
