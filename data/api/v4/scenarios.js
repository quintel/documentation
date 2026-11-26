const idParam = {
  name: "id",
  type: "number",
  description: "the scenario ID",
};

export default {
  index: {
    endpoint: "/api/v4/saved_scenarios",
    method: "GET",
    parameters: [
      {
        name: "page",
        type: "number",
        description: "the page to show, from 1",
      },
      {
        name: "limit",
        type: "number",
        description: "how many scenarios to show per page: 25 when not given, at most 100",
      },
    ],
    token: { scopes: ["scenarios:read"] },
  },
  show: {
    endpoint: "/api/v4/saved_scenarios/{id}",
    method: "GET",
    path_parameters: [idParam],
    token: { scopes: ["scenarios:read"], type: "optional" },
  },
  create: {
    endpoint: "/api/v4/saved_scenarios",
    method: "POST",
    parameters: [
      { name: "title", type: "string", required: true, description: "the scenario's title" },
      {
        name: "version",
        type: "string",
        required: true,
        description: "the tag of the model version, such as <code>latest</code>",
      },
      {
        name: "area_code",
        type: "string",
        description: "the area to calculate; required unless you give a <code>source</code>",
      },
      {
        name: "end_year",
        type: "number",
        description:
          "the year to calculate; required unless you give a <code>source</code>, whose end year it then defaults to",
      },
      {
        name: "source",
        type: "number",
        description: "the ID of a scenario to base this one on",
      },
      {
        name: "scenario_id",
        type: "number",
        description: "the ID of a scenario you made through API v3, to keep as this scenario",
      },
      { name: "description", type: "string", description: "a description of the scenario" },
      {
        name: "private",
        type: "boolean",
        description:
          "whether only the scenario's users can see it; defaults to the source's privacy, or else to your privacy setting",
      },
    ],
    token: { scopes: ["scenarios:write"] },
  },
  update: {
    endpoint: "/api/v4/saved_scenarios/{id}",
    method: "PUT",
    path_parameters: [idParam],
    parameters: [
      { name: "title", type: "string", description: "the scenario's title" },
      { name: "description", type: "string", description: "a description of the scenario" },
      { name: "private", type: "boolean", description: "whether only the scenario's users can see it" },
    ],
    token: { scopes: ["scenarios:write"] },
  },
  snapshot: {
    endpoint: "/api/v4/saved_scenarios/{id}/snapshots",
    method: "POST",
    path_parameters: [idParam],
    token: { scopes: ["scenarios:write"] },
  },
  discard: {
    endpoint: "/api/v4/saved_scenarios/{id}/discard",
    method: "PUT",
    path_parameters: [idParam],
    token: { scopes: ["scenarios:delete"] },
  },
  restore: {
    endpoint: "/api/v4/saved_scenarios/{id}/restore",
    method: "PUT",
    path_parameters: [idParam],
    token: { scopes: ["scenarios:delete"] },
  },
  destroy: {
    endpoint: "/api/v4/saved_scenarios/{id}",
    method: "DELETE",
    path_parameters: [idParam],
    token: { scopes: ["scenarios:delete"] },
  },
};
