const scenarioIdParam = {
  name: "id",
  type: "number",
  description: "the ID of the scenario",
};

export default {
  index: {
    endpoint: "/api/v3/scenarios",
    method: "GET",
    path_parameters: [
      {
        name: "page",
        type: "number",
        description: "the page number to fetch",
      },
      {
        name: "limit",
        type: "number",
        description: "the number of items per page",
      },
    ],
  },
  show: {
    endpoint: "/api/v3/scenarios/{id}",
    method: "GET",
    path_parameters: [scenarioIdParam],
  },
  create: {
    endpoint: "/api/v3/scenarios",
    method: "POST",
  },
  update: {
    endpoint: "/api/v3/scenarios/{id}",
    method: "PUT",
    path_parameters: [scenarioIdParam],
  },
};
