module.exports = {
  title: "Energy Transition Model",
  tagline: "ETM documentation",
  url: "https://docs.energytransitionmodel.com",
  baseUrl: "/",
  favicon: "img/favicon.svg",
  organizationName: "quintel", // Usually your GitHub org/user name.
  projectName: "documentation", // Usually your repo name.
  themeConfig: {
    prism: {
      theme: require("prism-react-renderer").themes.github,
      additionalLanguages: ["http", "bash", "python", "ruby"],
    },
    colorMode: {
      disableSwitch: true,
    },
    navbar: {
      title: "Energy Transition Model",
      logo: {
        alt: "Logo",
        src: "img/etm-logo.svg",
      },
      items: [
        {
          href: "https://energytransitionmodel.com/",
          label: "To the ETM →",
          position: "right",
          className: "navbar__link--etm-button",
        },
      ],
    },
    footer: {
      style: "dark",
      links: [
        {
          title: "About Us",
          items: [
            {
              label: "Quintel",
              href: "https://quintel.com",
            },
            {
              label: "Energy Transition Model",
              href: "https://energytransitionmodel.com",
            },
            {
              label: "GitHub",
              href: "https://github.com/quintel",
            },
          ],
        },
      ],
      copyright: `Copyright © ${new Date().getFullYear()} Quintel`,
    },
  },
  themes: [
    [
      "@easyops-cn/docusaurus-search-local",
      {
        // Docs are served from the site root, see `routeBasePath` below.
        docsRouteBasePath: "/",
        indexBlog: false,
        hashed: true,
        highlightSearchTermsOnTargetPage: true,
        searchResultLimits: 10,
      },
    ],
  ],
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
        googleAnalytics: {
          trackingID: "UA-112913764-5",
          anonymizeIP: true,
        },
      },
    ],
  ],
};
