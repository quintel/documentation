# ETM Documentation

This repository contains the source for the [ETM Docs website](https://docs.energytransitionmodel.com). It's built using Docusaurus 2; please see [Installation](#installation) for instructions on getting up-and-running.

## Adding documentation

[![Netlify Status](https://api.netlify.com/api/v1/badges/9e5b10b2-ba1d-4843-a609-c3e43031f58f/deploy-status)](https://app.netlify.com/projects/etm-docs/deploys)

Please see [the published documentation](https://docs.energytransitionmodel.com/contrib/authoring-docs) for details on how to add, change, and remove documents ([in-repo link](https://github.com/quintel/documentation/blob/docusaurus/docs/contrib/authoring-docs.md)).

## Installation

If you wish to preview the site locally, you should [start by installing Yarn](https://yarnpkg.com/getting-started/install). Then running `yarn` will install the dependencies.

```
$ yarn
```

### Local Development

```
$ yarn start   # use -p <port> to change default port
```

This command starts a local development server and open up a browser window. Most changes are reflected live without having to restart the server.

### Build

```
$ yarn build
```

This command generates static content into the `build` directory and can be served using any static contents hosting service.

#### Testing search locally

The site **search** functionality is not available under `yarn start`; it only works against a production build. You can preview a production build by running the following command after `yarn build`:

```
$ npx docusaurus serve   # use --port <port> to change default port
```

### Deployment

Deployment happens automatically when your changes are pushed to the master branch.
