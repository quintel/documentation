module.exports = {
  title: "Energy Transition Model",
  tagline: "ETM documentation",
  url: "https://docs.energytransitionmodel.com",
  baseUrl: "/",
  favicon: "img/logo.svg",
  organizationName: "quintel", // Usually your GitHub org/user name.
  projectName: "documentation", // Usually your repo name.
  themeConfig: {
    prism: {
      theme: require("prism-react-renderer/themes/github"),
      additionalLanguages: ["http"],
    },
    colorMode: {
      disableSwitch: true,
    },
    navbar: {
      title: "Energy Transition Model",
      logo: {
        alt: "Logo",
        src: "img/logo.svg",
      },
    },
    footer: {
      style: "dark",
      links: [
        {
          title: "About Us",
          items: [
            {
              label: "Energy Transition Model",
              href: "https://energytransitionmodel.com",
            },
            {
              label: "Quintel Intelligence",
              href: "https://quintel.com",
            },
          ],
        },
        {
          title: "Social",
          items: [
            {
              label: "GitHub",
              href: "https://github.com/quintel",
            },
            {
              label: "Twitter",
              href: "https://twitter.com/ETM_Quintel",
            },
          ],
        },
      ],
      copyright: `Copyright © ${new Date().getFullYear()} Quintel`,
    },
    algolia: {
      apiKey: "9fe615263d52073aca054075b329ebd5",
      indexName: "energytransitionmodel",
    },
    googleAnalytics: {
      trackingID: "UA-112913764-5",
      anonymizeIP: true,
    },
  },
  presets: [
    [
      "@docusaurus/preset-classic",
      {
        docs: {
          routeBasePath: "/",
          sidebarCollapsible: true,
          sidebarPath: require.resolve("./sidebars.js"),
        },
        theme: {
          customCss: require.resolve("./src/css/custom.css"),
        },
      },
    ],
  ],
};
