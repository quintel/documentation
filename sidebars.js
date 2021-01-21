module.exports = {
  mainSidebar: [
    {
      type: "doc",
      id: "main/intro",
    },
    {
      type: "category",
      label: "The ETM Interface",
      collapsed: false,
      items: ["main/interface", "main/dashboard", "main/documentation"],
    },
    {
      type: "category",
      label: "Carbon Emissions",
      collapsed: false,
      items: [
        "main/co2-main-principles",
        "main/co2-overview-per-sector",
        "main/co2-emission-factors",
        "main/co2-1990-emissions",
        "main/co2-emissions-import-export",
        "main/co2-biomass",
        "main/co2-ccus",
        "main/co2-negative-emissions",
      ],
    },
    {
      type: "category",
      label: "Costs",
      collapsed: false,
      items: [
        "main/cost-main-principles",
        "main/cost-annual-chart",
        "main/cost-overview-per-sector",
        {
          Advanced: [
            "main/heat-and-electricity-cost",
            "main/cost-wacc",
            "main/heat-infrastructure-costs",
            "main/costs-imported-electricity",
          ],
        },
      ],
    },
    {
      type: "category",
      label: "Supply and Demand",
      collapsed: false,
      items: [
        "main/demand",
        "main/supply",
        "main/appliances-labelling",
        "main/biomass",
        "main/electricity-backup",
        "main/employment",
        "main/primary-energy",
        "main/renewability",
        "main/useful-demand",
        "main/weather-conditions",
        {
          Advanced: ["main/outdoor-temperature"],
        },
      ],
    },
    {
      type: "category",
      label: "Hourly Calculations",
      collapsed: false,
      items: [
        "main/merit-order",
        "main/curves",
        "main/dynamic-demand-curve",
        "main/flexibility",
        "main/hydrogen",
        "main/import-calculations",
        "main/import-export",
        "main/loss-of-load-expectation",
        "main/network",
        "main/storage",
      ],
    },
    {
      type: "category",
      label: "Heat",
      collapsed: false,
      items: [
        "main/heat-networks",
        "main/heat-pumps",
        "main/insulation",
        "main/residual-heat-industry",
      ],
    },
    {
      type: "category",
      label: "Data",
      items: ["main/data-sources-local"],
    },
    {
      type: "category",
      label: "Misc",
      items: ["main/factsheet"],
    },
    {
      type: "link",
      label: "For Contributors",
      href: "/contrib/intro",
    },
    {
      type: "link",
      label: "API Reference",
      href: "/api/intro",
    },
  ],
  contribSidebar: [
    { type: "link", href: "/", label: "← Documentation home" },
    {
      type: "category",
      label: "For Contributors",
      collapsed: false,
      items: [
        "contrib/intro",
        "contrib/fever",
        "contrib/molecules",
        "contrib/waste-outputs",
      ],
    },
    {
      type: "category",
      label: "Adding new features",
      collapsed: false,
      items: ["contrib/authoring-docs"],
    },
  ],
  apiSidebar: [
    { type: "link", href: "/", label: "← Documentation home" },
    {
      type: "category",
      label: "API Reference",
      collapsed: false,
      items: ["api/intro"],
    },
    {
      type: "category",
      label: "Endpoints",
      collapsed: false,
      items: [
        "api/custom-curves",
        "api/flexibility-order",
        "api/heat-network-order",
      ],
    },
  ],
};
