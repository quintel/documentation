---
title: Writing documentation
---

When adding new features to the ETM, documenation should be written so that users understand how to use the new feature, and fellow modellers and developers understand how it works as well. Note that the [guidelines for writing texts](./authoring-texts.md) should be followed when writing documentation.

## Getting started

Documentation is split into three sections:

* **For users.** These are aimed at those who visit the ETM, and should explain how to use the website, providing details on how features work from *the perspective of a visitor*. These documents are located in [docs/main](https://github.com/quintel/documentation/tree/master/docs/main).

* **For contributors.** These docs are aimed at Quintel employees as well as outside modelers and developers who may wish to contribute. This sections should contain descriptions of *how features are implemented* and guides for using them in ETSource. These documents can be found at [docs/contrib](https://github.com/quintel/documentation/tree/master/docs/contrib).

* **API reference.** This section is aimed at the growing number of users who wish to interact with the ETM directly through the JSON API, rather than the website.  These documents can be found at [docs/api](https://github.com/quintel/documentation/tree/master/docs/api). API endpoint parameters are defined in JavaScript at [data/api](https://github.com/quintel/documentation/tree/master/data/api).

## Authoring documentation

All documentation is written in Markdown. For an overview of supported features, see the [Docusaurus docs](https://v2.docusaurus.io/docs/markdown-features/). Markdown file names should be **all lowercase** with **spaces replaced with dashes**.

### Titles and YAML

The start of your document must contain YAML front-matter with *at least* a title attribute:

```markdown
---
title: My first document!
---

Document contents start here. No need to add the page title; Docusaurus
will use the above `title` attribute.
```

If your document title is quite long and will not fit neatly on the sidebar, consider adding a shorter label to be used only on the sidebar:

```markdown
---
title: My second document, whose title is clearly too long
sidebar_label: Second document
---

Content here.
```

### Linking to other documents

Use [Markdown links](https://www.markdownguide.org/basic-syntax#links) to link to another document. These should be relative to the current document: include the ".md" suffix as this will allow the documents to be navigated on GitHub. See [Docusaurus → Referencing other documents](https://v2.docusaurus.io/docs/markdown-features/#referencing-other-documents).

```markdown title="Linking to 'docs/main/cost-calculations.md' from 'contrib/hi.md'"
[My link text](../main/cost-calculations.md)
```

### Linking to headers and sections

To link to a section in the same document, you must find the header you wish to link to, then convert all characters to lowercase and swap spaces for dashes. The string is then prefixed with a "`#`".

```markdown title="Linking to the 'Electricity production' header"
[My link text](#electricity-production)
```

To link to a section in another document, start with the link to the other document then add the header link:


```markdown title="Linking to 'Electricity production' on 'Cost calculations'"
[My link text](../cost-calculations.md#electricity-production)
```

:::warning Caution when changing headers!
As section IDs are automatically generated from the header text, changing the title of a section in a Markdown document will break any existing links to that header. Be sure to search for the outdated references and update them as necessary: `git grep "my-old-title"`
:::

### Using images

Images can be added to [static/img/docs](https://github.com/quintel/documentation/tree/master/static/img/docs) and should be referenced [using Markdown](https://www.markdownguide.org/basic-syntax#images-1) from the **absolute** web root when published, i.e., prefixed with a "/" and without the "static/":

```markdown
![My image alt. text](/img/docs/total_capacity.jpg)
```

:::info Image compression
Please compress images with a tool like [ImageOptim](https://imageoptim.com/mac) prior to committing.
:::

### Adding to the sidebar

Documents do not automatically appear in the sidebar. Instead, they must be added to the [sidebar.js in the project root](https://github.com/quintel/documentation/blob/master/sidebars.js). This file contains the definitions for three sidebars:

* `mainSidebar` used by the "For Users" section.
* `contribSidebar` used by the "For Contributors" section.
* `apiSidebar` used by the "API Reference" section.

Find the category most appropriate for your document (or add a new one), then add the path of the file minus the "docs/" prefix and ".md" suffix to the `items` list. For example, if adding a document located at <kbd>docs/main/new-costs.md</kbd>, which you wish to appear below the "Cost calculations" document, add the following line to the "Costs" category:

```js {7}
{
  type: "category",
  label: 'Costs',
  items: [
    'main/costs',
    'main/cost-calculations',
    'main/new-costs',
    'main/costs-imported-electricity',
    'main/heat-and-electricity-cost',
    'main/heat-infrastructure-costs',
  ],
},
```

### Algolia search

All documents are indexed by [Algolia DocSearch](https://docsearch.algolia.com/) once per day; you do not need to do anything. It may take up to 24 hours for your changes to be reflected in the index.

## Pushing your changes

Editing documents does not require you to install anything. You may edit and push changes to the Markdown files, with the website being built and deployed automatically when pushed to the `master` branch.

:::info Previewing changes
Make your changes on a separate branch and create a pull request on GitHub. [Netlify](https://www.netlify.com/) will shortly thereafter comment on your PR with a preview of the website. Alternatively, [install the prerequisites for Docusaurus](https://github.com/quintel/documentation/tree/master#installation) on your machine and run `yarn start`.
:::
