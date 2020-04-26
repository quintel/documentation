module.exports = {
  mainSidebar: [
    {
      type: "doc",
      id: "intro",
    },
    {
      type: "category",
      label: "The ETM Interface",
      items: [
        'interface',
        'dashboard',
        'documentation',
        'factsheet',
        'nomenclature',
        'res-comparison',
      ],
    },
    {
      type: "category",
      label: 'Carbon Emissions',
      items: [
        'co2-calculations',
        'co2-biomass',
        'co2-emissions-of-imported-electricity',
      ],
    },
    {
      type: "category",
      label: 'Costs',
      items: [
        'costs',
        'cost-calculations',
        'costs-imported-electricity',
        'heat-and-electricity-cost',
        'heat-infrastructure-costs',
      ],
    },
    {
      type: "category",
      label: 'Supply and Demand',
      items: [
        'demand',
        'supply',
        'appliances-labelling',
        'biomass',
        'electricity-backup',
        'employment',
        'primary-energy',
        'renewability',
        'useful-demand',
        'weather-conditions',
      ],
    },
    {
      type: "category",
      label: 'Hourly Calculations',
      items: [
        'merit-order',
        'curves',
        'dynamic-demand-curve',
        'flexibility',
        'hydrogen',
        'import-calculations',
        'import-export',
        'loss-of-load-expectation',
        'network',
        'storage',
      ],
    },
    {
      type: "category",
      label: 'Heat',
      items: [
        'heat-networks',
        'heat-pumps',
        'insulation',
        'residual-heat-industry',
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
