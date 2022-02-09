export default {
  index: {
    endpoint: "/api/v3/areas",
    method: "GET",
  },
  show: {
    endpoint: "/api/v3/areas/{area_code}",
    method: "GET",
    path_parameters: [
      {
        name: "area_code",
        type: "string",
        description: "the name of the area",
      },
    ],
  },
};
