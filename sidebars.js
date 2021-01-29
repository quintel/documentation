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
      items: ["main/starting-or-exploring", "main/interface", "main/developing-your"],
    },
    {
      type: "category",
      label: "2. Detailed documentation",
      collapsed: false,
      items: [
        {
          Dashboard: [
            "main/dashboard",
            "main/primary-energy",
            {
              Emissions: [
              "main/co2-main-principles",
              "main/general-emissions",
              "main/co2-overview-per-sector",
              "main/co2-emission-factors",
              "main/co2-1990-emissions",
              "main/co2-emissions-import-export",
              "main/co2-biomass",
              "main/co2-negative-emissions",
              ],
            },
            "main/import-calculations",
            "main/cost-dashboard",
            "main/renewability",
          ],
        }, 
        {
          Demand: [
            "main/demand",
            "main/appliances-labelling",
          ],
        },
        {
          Supply: [
            "main/supply",
            "main/balancing-demand",
            "main/hydrogen",
            "main/co2-ccus",
          ],
        },
        {
          Flexibility: [
            "main/flexibility",
            {
              Electricity: [
              "main/dynamic-demand-curve",
              "main/import-export",
              "main/loss-of-load-expectation",
              "main/network",
              "main/storage",
              ],
            },
            {
              Heat: [
              "main/heat-networks",
              "main/heat-pumps",
              "main/insulation",
              "main/residual-heat-industry",
              ],
            },
            "main/curves",
            "main/weather-conditions",
            "main/outdoor-temperature",
          ],
        },
        {
          Costs: [
            "main/cost-main-principles",
            "main/merit-order",
            "main/cost-overview-per-sector",
            "main/heat-and-electricity-cost",
            "main/cost-wacc",
            "main/heat-infrastructure-costs",
            "main/costs-imported-electricity",
          ],
        },
                {
          Results: [
            "main/factsheet",
          ],
        },
      ],
    },
    {
      type: "category",
      label: "3. Data Sources",
      collapsed: true,
      items: [
        "main/data-sources-local",
      ],
    },
    {
      type: "category",
      label: "4. Modelling Principles",
      collapsed: true,
      items: [
        "main/energy-calculations",
        "main/useful-demand",
        "contrib/molecules",
      ],
    },
    {
      type: "category",
      label: "5. For Contributors",
      collapsed: true,
      items: [
        "contrib/intro",
        "contrib/fever",
        "contrib/waste-outputs",
      ],
    },
    {
      type: "category",
      label: "6. API Reference",
      collapsed: true,
      items: ["api/intro"],
    },
  ],
};