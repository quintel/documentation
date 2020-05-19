module.exports = {
  title: 'Energy Transition Model',
  tagline: 'ETM documentation',
  url: 'https://docs.energytransitionmodel.com',
  baseUrl: '/',
  favicon: 'img/logo.svg',
  organizationName: 'quintel', // Usually your GitHub org/user name.
  projectName: 'documentation', // Usually your repo name.
  themeConfig: {
    sidebarCollapsible: false,
    prism: {
      theme: require('prism-react-renderer/themes/github'),
      additionalLanguages: ['http'],
    },
    navbar: {
      title: 'Energy Transition Model',
      logo: {
        alt: 'Logo',
        src: 'img/logo.svg',
      },
      links: [
        {
          label: 'For Users',
          activeBasePath: '/main',
          position: 'left',
          items: [
            {
              label: 'User Manual',
              href: '#',
              activeBasePath: '/main',
            },
            {
              label: 'Technical Documentation',
              href: '#'
            },
            {
              label: 'Data Sources',
              href: '#'
            },
          ]
        },
        {
          to: '/contrib/intro',
          label: 'For Contributors',
          activeBasePath: '/contrib',
          position: 'left',
        },
        {
          to: '/api/intro',
          label: 'API Reference',
          activeBasePath: '/api',
          position: 'left',
        },
      ],
    },
    footer: {
      style: 'dark',
      links: [
        {
          title: 'Learn',
          items: [
            {
              label: 'For end-users',
              to: '/main',
            },
            {
              label: 'For contributors',
              to: '/contrib',
            },
            {
              label: 'For developers and API users',
              to: '/api',
            },
          ],
        },
        {
          title: 'Us',
          items: [
            {
              label: 'Energy Transition Model',
              href: 'https://energytransitionmodel.com',
            },
            {
              label: 'Quintel Intelligence',
              href: 'https://quintel.com',
            },
          ],
        },
        {
          title: 'Social',
          items: [
            {
              label: 'GitHub',
              href: 'https://github.com/quintel',
            },
            {
              label: 'Twitter',
              href: 'https://twitter.com/ETM_Quintel',
            },
          ],
        },
      ],
      copyright: `Copyright © ${new Date().getFullYear()} Quintel Intelligence`,
    },
    algolia: {
      apiKey: '9fe615263d52073aca054075b329ebd5',
      indexName: 'energytransitionmodel',
    },
    disableDarkMode: true,
  },
  presets: [
    [
      '@docusaurus/preset-classic',
      {
        docs: {
          routeBasePath: '/',
          sidebarPath: require.resolve('./sidebars.js'),
        },
        theme: {
          customCss: require.resolve('./src/css/custom.css'),
        },
      },
    ],
  ],
};
