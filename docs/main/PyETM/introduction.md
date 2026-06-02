---
title: PyETM
---

## What is PyETM?

PyETM is a Python package that provides a set of tools for interacting with the Energy Transition Model's API. It's designed to be a modular tool that advanced users can incorporate into their scenario workflows, making it easier to manage scenarios, run bulk queries, and export data through code.

---

## What can you do with PyETM?

PyETM enables you to:

- **Manage scenarios**: create, update, and manage ETM scenarios through code.
- **Run bulk queries**: query multiple GQueries across multiple scenarios in one go.
- **Custom profiles**: upload and manage custom hourly profiles.
- **Export data**: export scenario data in various formats.
- **Automate workflows**: integrate ETM into your scripts or other workflows, like:
  - **Excel**: load scenarios from Excel files, update them, and export results.
  - **Jupyter Notebook**: load scenarios from Jupyter Notebooks, update them, and export results.

---

## Installation

Install PyETM from PyPI:

```bash
pip install pyetm
```

**Requirements**: Python 3.12 or later

---

## Getting started

The quickest way to get started is with the interactive setup:

```bash
pyetm init
```

This will guide you through configuration and create an input template. You can then run scenarios from Excel:

```bash
pyetm run inputs/input.xlsx
```

For comprehensive documentation, tutorials, and API reference, visit:

### [PyETM Documentation](https://quintel.github.io/pyetm/)

The full documentation includes:
- [Installation guide](https://quintel.github.io/pyetm/getting-started/installation/)
- [Quick start tutorial](https://quintel.github.io/pyetm/getting-started/quickstart/)
- [User guides](https://quintel.github.io/pyetm/user-guide/) for all features
- [API reference](https://quintel.github.io/pyetm/api/)
- [Contributing guide](https://quintel.github.io/pyetm/contributing/guide/)

---

## Need help?

Issues and feature requests can be added to the [GitHub](https://github.com/quintel/pyetm/issues) repository.
