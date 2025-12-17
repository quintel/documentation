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
    token: { scopes: ["scenarios:read"] },
  },
  show: {
    endpoint: "/api/v3/scenarios/{id}",
    method: "GET",
    path_parameters: [scenarioIdParam],
    token: { scopes: ["scenarios:read"], type: "optional" },
  },
  create: {
    endpoint: "/api/v3/scenarios",
    method: "POST",
    token: { scopes: ["scenarios:read"], type: "optional" },
  },
  interpolate: {
    endpoint: "/api/v3/scenarios/{id}/interpolate",
    method: "POST",
    path_parameters: [scenarioIdParam],
    parameters: [
      {
        name: "start_scenario_id",
        type: "number",
        description:
          "the ID of the scenario whose input values are used as the interpolation starting point, if provided. Must match the endpoint scenario’s start year and area code",
        required: false,
      },
      {
        name: "end_year",
        type: "number",
        description:
          `end year of the scenario (interpolation target year)<br>
          <ul>
            <li>Must fall between the endpoint scenario’s start and end years when <code>start_scenario_id</code> is <strong>not</strong> provided</li>
            <li>Must fall between the start scenario and the endpoint scenario end years when <code>start_scenario_id</code> is provided</li>
          </ul>`,
        required: true,
      },
    ],
    token: { scopes: ["scenarios:read"], type: "optional" },
  },
  update: {
    endpoint: "/api/v3/scenarios/{id}",
    method: "PUT",
    path_parameters: [scenarioIdParam],
    token: { scopes: ["scenarios:read"], type: "optional-owned" },
  },
  destroy: {
    endpoint: "/api/v3/scenarios/{id}",
    method: "DELETE",
    path_parameters: [scenarioIdParam],
    token: { scopes: ["scenarios:read", "scenarios:delete"] },
  },
  uncouple: {
    endpoint: "/api/v3/scenarios/{id}/uncouple",
    method: "POST",
    path_parameters: [scenarioIdParam],
    token: { scopes: ["scenarios:delete"] },
  },
  couple: {
    endpoint: "/api/v3/scenarios/{id}/couple",
    method: "POST",
    path_parameters: [scenarioIdParam],
    token: { scopes: ["scenarios:delete"] },
  },
};
