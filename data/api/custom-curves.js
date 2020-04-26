const scenarioIdParam = {
  name: "scenario_id",
  type: "number",
  description: "the scenario ID the custom curve belongs to"
};

const curveTypeParam = {
  name: "curve_type",
  type: "string",
  description: 'see <a href="#curve-types">curve types</a>'
};

export default {
  "index": {
    "endpoint": "/api/v3/scenarios/{scenario_id}/custom_curves",
    "method": "GET",
    "path_parameters": [
      {
        "name": "scenario_id",
        "type": "number",
        "description": "the scenario ID the custom curves belong to"
      }
    ]
  },
  "show": {
    "endpoint": "/api/v3/scenarios/{scenario_id}/custom_curves/{curve_type}",
    "method": "GET",
    "path_parameters": [scenarioIdParam, curveTypeParam]
  },
  "update": {
    "endpoint": "/api/v3/scenarios/{scenario_id}/custom_curves/{curve_type}",
    "method": "PUT",
    "path_parameters": [scenarioIdParam, curveTypeParam],
    "parameters": [
      {
        name: "file",
        type: "binary",
        description: "data of the curve to be attached to the sceanrio"
      }
    ]
  },
  "destroy": {
    "endpoint": "/api/v3/scenarios/{scenario_id}/custom_curves/{curve_type}",
    "method": "DELETE",
    "path_parameters": [scenarioIdParam, curveTypeParam]
  }
}
