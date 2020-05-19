module.exports = {
  mainSidebar: [
    {
      type: "doc",
      id: "main/intro",
    },
    {
      type: "link",
      label: "Technical Documentation",
      href: "/techdocs/intro"
    },
    {
      type: "link",
      label: "Data Sources",
      href: "/data/intro"
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
  techdocsSidebar: [
    { type: "link", href: "/", label: "← Documentation home" },
    {
      type: "doc",
      id: "techdocs/intro",
    },
    {
      type: "category",
      label: "The ETM Interface",
      items: [
        'techdocs/interface',
        'techdocs/dashboard',
        'techdocs/documentation',
        'techdocs/factsheet',
        'techdocs/nomenclature',
        'techdocs/res-comparison',
      ],
    },
    {
      type: "category",
      label: 'Carbon Emissions',
      items: [
        'techdocs/co2-calculations',
        'techdocs/co2-biomass',
        'techdocs/co2-emissions-of-imported-electricity',
      ],
    },
    {
      type: "category",
      label: 'Costs',
      items: [
        'techdocs/cost-main-principles',
        'techdocs/cost-annual-chart',
        'techdocs/cost-overview-per-sector',
        'techdocs/heat-and-electricity-cost',
        'techdocs/cost-wacc',
        'techdocs/heat-infrastructure-costs',
        'techdocs/costs-imported-electricity',
      ],
    },
    {
      type: "category",
      label: 'Supply and Demand',
      items: [
        'techdocs/demand',
        'techdocs/supply',
        'techdocs/appliances-labelling',
        'techdocs/biomass',
        'techdocs/electricity-backup',
        'techdocs/employment',
        'techdocs/primary-energy',
        'techdocs/renewability',
        'techdocs/useful-demand',
        'techdocs/weather-conditions',
      ],
    },
    {
      type: "category",
      label: 'Hourly Calculations',
      items: [
        'techdocs/merit-order',
        'techdocs/curves',
        'techdocs/dynamic-demand-curve',
        'techdocs/flexibility',
        'techdocs/hydrogen',
        'techdocs/import-calculations',
        'techdocs/import-export',
        'techdocs/loss-of-load-expectation',
        'techdocs/network',
        'techdocs/storage',
      ],
    },
    {
      type: "category",
      label: 'Heat',
      items: [
        'techdocs/heat-networks',
        'techdocs/heat-pumps',
        'techdocs/insulation',
        'techdocs/residual-heat-industry',
      ],
    },
  ],
  dataSidebar: [
    { type: "link", href: "/", label: "← Documentation home" },
    {
      type: "doc",
      id: "data/intro",
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
