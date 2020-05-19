module.exports = {
  mainSidebar: [
    {
      type: "doc",
      id: "main/intro",
    },
    {
      type: "link",
      label: "Technical Documentation",
      href: "/main/tech/intro"
    },
    {
      type: "link",
      label: "Data Sources",
      href: "/main/data/intro"
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
  techSidebar: [
    { type: "link", href: "/", label: "← Documentation home" },
    {
      type: "doc",
      id: "main/tech/intro",
    },
    {
      type: "category",
      label: "The ETM Interface",
      items: [
        'main/tech/interface',
        'main/tech/dashboard',
        'main/tech/documentation',
        'main/tech/factsheet',
        'main/tech/nomenclature',
        'main/tech/res-comparison',
      ],
    },
    {
      type: "category",
      label: 'Carbon Emissions',
      items: [
        'main/tech/co2-calculations',
        'main/tech/co2-biomass',
        'main/tech/co2-emissions-of-imported-electricity',
      ],
    },
    {
      type: "category",
      label: 'Costs',
      items: [
        'main/tech/cost-main-principles',
        'main/tech/cost-annual-chart',
        'main/tech/cost-overview-per-sector',
        'main/tech/heat-and-electricity-cost',
        'main/tech/cost-wacc',
        'main/tech/heat-infrastructure-costs',
        'main/tech/costs-imported-electricity',
      ],
    },
    {
      type: "category",
      label: 'Supply and Demand',
      items: [
        'main/tech/demand',
        'main/tech/supply',
        'main/tech/appliances-labelling',
        'main/tech/biomass',
        'main/tech/electricity-backup',
        'main/tech/employment',
        'main/tech/primary-energy',
        'main/tech/renewability',
        'main/tech/useful-demand',
        'main/tech/weather-conditions',
      ],
    },
    {
      type: "category",
      label: 'Hourly Calculations',
      items: [
        'main/tech/merit-order',
        'main/tech/curves',
        'main/tech/dynamic-demand-curve',
        'main/tech/flexibility',
        'main/tech/hydrogen',
        'main/tech/import-calculations',
        'main/tech/import-export',
        'main/tech/loss-of-load-expectation',
        'main/tech/network',
        'main/tech/storage',
      ],
    },
    {
      type: "category",
      label: 'Heat',
      items: [
        'main/tech/heat-networks',
        'main/tech/heat-pumps',
        'main/tech/insulation',
        'main/tech/residual-heat-industry',
      ],
    },
  ],
  dataSidebar: [
    { type: "link", href: "/", label: "← Documentation home" },
    {
      type: "doc",
      id: "main/data/intro",
    },
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
    {
      type: "category",
      label: 'Adding new features',
      items: [
        'contrib/authoring-docs',
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
            'api/flexibility-order',
            'api/heat-network-order',
          ],
        },
      ],
    },
  ],
};
