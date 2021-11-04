module.exports = {
  mainSidebar: [
    {
      type: "doc",
      id: "main/intro",
    },
    {
      type: "category",
      label: "1. User Manual",
      collapsed: false,
      items: [
        "main/starting-or-exploring",
        "main/interface",
        "main/developing-your",
      ],
    },
    {
      type: "category",
      label: "2. Detailed information",
      collapsed: false,
      items: [
        {
          Dashboard: [
            "main/dashboard",
            "main/primary-energy",
            "main/import-calculations",
            "main/cost-dashboard",
            "main/renewability",
          ],
        },
        {
          Demand: ["main/demand", "main/insulation"],
        },
        {
          Supply: [
            "main/supply",
            "main/balancing-demand",
            "main/hydrogen",
            "main/biomass",
          ],
        },
        {
          Flexibility: [
            "main/flexibility",
            {
              Electricity: [
                "main/excess-electricity",
                "main/dynamic-demand-curve",
                "main/loss-of-load-expectation",
                "main/network",
              ],
            },
            {
              Heat: [
                "main/heat-networks",
                "main/heat-pumps",
                "main/residual-heat-industry",
              ],
            },
            "main/curves",
            "main/weather-conditions",
            "main/outdoor-temperature",
          ],
        },
        {
          Emissions: [
            "main/co2-main-principles",
            "main/co2-emission-factors",
            "main/greenhouse-gases",
            "main/co2-1990-emissions",
            "main/co2-emissions-import-export",
            "main/co2-biomass",
            "main/co2-ccus",
            "main/co2-negative-emissions",
            "main/co2-overview-per-sector",
            "main/emissions-footprint",
          ],
        },
        {
          Costs: [
            "main/cost-main-principles",
            "main/merit-order",
            "main/cost-overview-per-sector",
            "main/cost-methods",
            "main/cost-wacc",
            "main/heat-infrastructure-costs",
            "main/costs-imported-electricity",
          ],
        },
        {
          Results: ["main/factsheet"],
        },
      ],
    },
    {
      type: "category",
      label: "3. Data Sources",
      collapsed: true,
      items: ["main/data-sources-local"],
    },
    {
      type: "category",
      label: "4. Modelling Principles",
      collapsed: true,
      items: ["main/energy-calculations", "main/useful-demand"],
    },
    {
      type: "link",
      label: "5. For Contributors",
      href: "/contrib/intro",
    },
    {
      type: "link",
      label: "6. API Reference",
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
        "contrib/always-on-battery-parks",
        "contrib/fever",
        "contrib/molecules",
        "contrib/user-curves",
        "contrib/waste-outputs",
      ],
    },
    {
      type: "category",
      label: "Charts",
      collapsed: false,
      items: ["contrib/charts/category-bar"],
    },
    {
      type: "category",
      label: "Dataset manager",
      collapsed: false,
      items: ["contrib/dataset-manager/data-migrations"],
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
        "api/scenario-basics",
        "api/custom-curves",
        "api/flexibility-order",
        "api/heat-network-order",
      ],
    },
  ],
};
