const idParam = {
  name: "id",
  type: "number",
  description: "the ID of the collection path",
};

export default {
  index: {
    endpoint: "/api/v3/collections",
    method: "GET",
    token: { scopes: ["scenarios:read"] },
  },
  show: {
    endpoint: "/api/v3/collections/{id}",
    method: "GET",
    path_parameters: [idParam],
    token: { scopes: ["scenarios:read"] },
  },
  create: {
    endpoint: "/api/v3/collections",
    method: "POST",
    parameters: [
      {
        name: "title",
        type: "string",
        description: "what to call the collection",
        required: true,
      },
      {
        name: "scenario_ids",
        type: "[]number",
        description:
          "the IDs of the underlying scenarios (Requirement based on <code>interpolation</code>)",
        required: false,
      },
      {
        name: "saved_scenario_ids",
        type: "[]number",
        description:
          "the IDs of the underlying saved scenarios (Requirement based on <code>interpolation</code>)",
        required: false,
      },
      {
        name: "interpolation", // While this is now possible I'm not sure is recomended as it does not generate a transition path
        type: "boolean",
        description:
          `<strong>true</strong> for a transition path; in which case the following is required:<br>
          <ul>
            <li>Exactly one <code>saved_scenario_ids</code></li>
            <li>At least one <code>scenario_ids</code></li>
          </ul>
          <br>
          <strong>false</strong> for an ordinary collection; in which case the follwing is required:<br>
          <ul>
            <li>At least one <code>scenario_ids</code> or <code>saved_scenario_ids</code></li>
          </ul>`,
        required: false,
      },
    ],
    token: { scopes: ["scenarios:read", "scenarios:write"] },
  },
  update: {
    endpoint: "/api/v3/collections/{id}",
    method: "PUT",
    path_parameters: [idParam],
    parameters: [
      {
        name: "title",
        type: "string",
        description: "what to call the collection",
      },
      {
        name: "scenario_ids",
        type: "[]number",
        description:
          "the IDs of the underlying scenarios",
      },
      {
        name: "saved_scenario_ids",
        type: "[]number",
        description:
          "the IDs of the underlying saved scenarios",
      },
      {
        name: "discarded",
        type: "boolean",
        description:
          "whether the collection should be in the owner's trash",
      },
    ],
    token: { scopes: ["scenarios:read", "scenarios:write"] },
  },
  destroy: {
    endpoint: "/api/v3/collections/{id}",
    method: "DELETE",
    path_parameters: [idParam],
    token: { scopes: ["scenarios:read", "scenarios:write", "scenarios:delete"] },
  },
};
