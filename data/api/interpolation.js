const scenarioIdParam = {
  name: "id",
  type: "number",
  description: "the ID of the scenario to interpolate from (the endpoint scenario)",
};

export default {
  interpolate: {
    endpoint: "/api/v3/scenarios/{id}/interpolate",
    method: "POST",
    path_parameters: [scenarioIdParam],
    parameters: [
      {
        name: "end_year",
        type: "number",
        description:
          "the target year for the interpolated scenario. Must be after the endpoint scenario's start year and before its end year. When using <code>start_scenario_id</code>, must fall between the start scenario's end year and the endpoint scenario's end year",
        required: true,
      },
      {
        name: "start_scenario_id",
        type: "number",
        description:
          "the ID of a scenario whose input values are used as the interpolation starting point. Must have the same area code and start year as the endpoint scenario, and an earlier end year",
        required: false,
      },
    ],
    token: { scopes: ["scenarios:read"], type: "optional" },
  },

  interpolate_collection: {
    endpoint: "/api/v3/scenarios/interpolate",
    method: "POST",
    parameters: [
      {
        name: "scenario_ids",
        type: "array of numbers",
        description:
          "array of scenario IDs to use as interpolation sources. All scenarios must have the same area code and start year",
        required: true,
      },
      {
        name: "end_years",
        type: "array of numbers",
        description:
          "array of target years for the interpolated scenarios. Each year must be after the scenarios' start year and before the latest scenario's end year",
        required: true,
      },
    ],
    token: { scopes: ["scenarios:read"], type: "optional" },
  },
};
