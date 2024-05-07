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
        {
          "Managing your saved scenarios": [
            "main/managing-scenarios/my-scenarios-menu",
            "main/managing-scenarios/scenario-management",
            "main/managing-scenarios/scenario-access-management",
            "main/managing-scenarios/scenario-version-history"            
          ]
        },        
        "main/developing-your"
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
          Supply: ["main/supply", "main/balancing-demand", "main/hydrogen", "main/biomass"],
        },
        {
          Flexibility: [
            "main/flexibility",
            {
              Electricity: [
                "main/electricity-conversion",
                "main/electricity-storage",
                "main/dynamic-demand-curve",
                "main/battery-forecasting",
                "main/loss-of-load-expectation",
                "main/network",
              ],
            },
            {
              Heat: ["main/heat-networks", "main/heat-pumps", "main/residual-heat-industry"],
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
      type: "category",
      label: "5. Scenario-tools",
      collapsed: true,
      items: [
        "main/scenario-tools/introduction",
        "main/scenario-tools/retrieving-data",
        "main/scenario-tools/identifying-yourself",
        "main/scenario-tools/using-proxies",
        "main/scenario-tools/creating-and-updating",
        "main/scenario-tools/slider-comparison",
        "main/scenario-tools/creating-templates",
        "main/scenario-tools/regional-overview",
        "main/scenario-tools/heat-module",
        "main/scenario-tools/advanced-settings",
      ],
    },
    {
      type: "link",
      label: "6. For Contributors",
      href: "/contrib/intro",
    },
    {
      type: "link",
      label: "7. API Reference",
      href: "/api/intro",
    },
    {
      type: "category",
      label: "8. External Models",
      collapsed: true,
      items: ["main/external-coupling"],
    },
  ],
  contribSidebar: [
    { type: "link", href: "/", label: "← Documentation home" },
    {
      type: "category",
      label: "For Contributors",
      collapsed: false,
      items: ["contrib/intro", "contrib/running-with-docker"],
    },
    {
      type: "category",
      label: "Model features",
      collapsed: false,
      items: [
        "contrib/graph-components",
        "contrib/inputs",
        "contrib/molecules",
        "contrib/waste-outputs",
        "contrib/gql"
      ],
    },
    {
      type: "category",
      label: "Hourly calculations",
      collapsed: false,
      items: [
        "contrib/always-on-battery-parks",
        "contrib/fever",
        "contrib/load-shifting",
        "contrib/user-curves",
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
      items: [
        "contrib/authoring-docs",
        "contrib/authoring-gqueries"
      ]
    },
    {
      type: "category",
      label: "Managing scenarios",
      collapsed: false,
      items: ["contrib/cloning-scenarios"],
    },
  ],
  apiSidebar: [
    { type: "link", href: "/", label: "← Documentation home" },
    {
      type: "category",
      label: "API Reference",
      collapsed: false,
      items: ["api/intro", "api/authentication", "api/changelog"],
    },
    {
      type: "category",
      label: "Scenario Endpoints",
      collapsed: false,
      items: [
        "api/scenarios",
        "api/custom-curves",
        "api/flexibility-order",
        "api/forecast-storage-order",
        "api/heat-network-order",
        "api/inputs",
        "api/nodes",
        "api/merit",
        "api/exports",
        "api/gqueries",
      ],
    },
    {
      type: "category",
      label: "Other Endpoints",
      collapsed: false,
      items: ["api/areas", "api/saved-scenarios", "api/transition-paths"],
    },
  ],
};
