export default {
  exports: {
    endpoint: "/api/v3/scenarios/{id}/{key}.csv",
    method: "GET"
  },
  curves: {
    endpoint: "/api/v3/scenarios/{id}/curves/{key}.csv",
    method: "GET"
  },
};
