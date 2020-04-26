module.exports = {
  mainSidebar: [
    {
      type: "doc",
      id: "main/intro",
    },
    {
      type: "category",
      label: "The ETM Interface",
      items: [
        'main/interface',
        'main/dashboard',
        'main/documentation',
        'main/factsheet',
        'main/nomenclature',
        'main/res-comparison',
      ],
    },
    {
      type: "category",
      label: 'Carbon Emissions',
      items: [
        'main/co2-calculations',
        'main/co2-biomass',
        'main/co2-emissions-of-imported-electricity',
      ],
    },
    {
      type: "category",
      label: 'Costs',
      items: [
        'main/costs',
        'main/cost-calculations',
        'main/costs-imported-electricity',
        'main/heat-and-electricity-cost',
        'main/heat-infrastructure-costs',
      ],
    },
    {
      type: "category",
      label: 'Supply and Demand',
      items: [
        'main/demand',
        'main/supply',
        'main/appliances-labelling',
        'main/biomass',
        'main/electricity-backup',
        'main/employment',
        'main/primary-energy',
        'main/renewability',
        'main/useful-demand',
        'main/weather-conditions',
      ],
    },
    {
      type: "category",
      label: 'Hourly Calculations',
      items: [
        'main/merit-order',
        'main/curves',
        'main/dynamic-demand-curve',
        'main/flexibility',
        'main/hydrogen',
        'main/import-calculations',
        'main/import-export',
        'main/loss-of-load-expectation',
        'main/network',
        'main/storage',
      ],
    },
    {
      type: "category",
      label: 'Heat',
      items: [
        'main/heat-networks',
        'main/heat-pumps',
        'main/insulation',
        'main/residual-heat-industry',
      ],
    },
    {
      type: "link",
      label: "For Contributors",
      href: "/contrib/intro"
    },
    {
      type: "link",
      label: "API Reference",
      href: "/api/intro"
    }
  ],
  contribSidebar: [
    { type: "link", href: "/", label: "← Documentation home" },
    {
      type: "category",
      label: "For Contributors",
      items: [
        'contrib/intro',
        'contrib/fever',
        'contrib/waste-outputs',
      ],
    },
  ],
  apiSidebar: [
    { type: "link", href: "/", label: "← Documentation home" },
    {
      type: "category",
      label: "API Reference",
      items: [
        'api/intro',
        {
          type: 'category',
          label: 'Endpoints',
          items: [
            'api/custom-curves',
          ],
        },
      ],
    },
  ],
};
