const scenarioIdParam = {
  name: "scenario_id",
  type: "number",
  description: "the scenario ID the custom curve belongs to",
};

const curveTypeParam = {
  name: "curve_key",
  type: "string",
  description: 'see <a href="#curve-keys">curve keys</a>',
};

export default {
  index: {
    endpoint: "/api/v3/scenarios/{scenario_id}/custom_curves",
    method: "GET",
    path_parameters: [
      {
        name: "scenario_id",
        type: "number",
        description: "the scenario ID the custom curves belong to",
      },
    ],
    parameters: [
      {
        name: "include_internal",
        type: "boolean",
        description: 'see <a href="#include_internal-parameter">include_internal parameter</a>',
      },
      {
        name: "include_unattached",
        type: "boolean",
        description: 'see <a href="#include_unattached-parameter">include_unattached parameter</a>',
      },
    ],
    token: { scopes: ["scenarios:read"], type: "optional" },
  },
  show: {
    endpoint: "/api/v3/scenarios/{scenario_id}/custom_curves/{curve_key}",
    method: "GET",
    path_parameters: [scenarioIdParam, curveTypeParam],
    token: { scopes: ["scenarios:read"], type: "optional" },
  },
  update: {
    endpoint: "/api/v3/scenarios/{scenario_id}/custom_curves/{curve_key}",
    method: "PUT",
    path_parameters: [scenarioIdParam, curveTypeParam],
    parameters: [
      {
        name: "file",
        type: "binary",
        description: "data of the curve to be attached to the sceanrio",
      },
    ],
    token: { scopes: ["scenarios:wite"], type: "optional-owned" },
  },
  destroy: {
    endpoint: "/api/v3/scenarios/{scenario_id}/custom_curves/{curve_key}",
    method: "DELETE",
    path_parameters: [scenarioIdParam, curveTypeParam],
    token: { scopes: ["scenarios:write"], type: "optional-owned" },
  },
};
