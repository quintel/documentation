---
title: PyETM
---

## What is PyETM?

PyETM is a Python package that provides a set of tools for interacting with the Energy Transition Model's API. It's designed to be a modular tool that advanced users can incorporate into their scenario workflows, making it easier to manage scenarios, run bulk queries, and export data programmatically.

## What can you do with PyETM?

PyETM enables you to:

- **Manage scenarios** — Create, update, and manage ETM scenarios programmatically
- **Run bulk queries** — Query multiple GQueries across scenarios efficiently
- **Work with Excel** — Load scenarios from Excel files, update them, and export results
- **Custom curves** — Upload and manage custom electricity and heat profiles
- **Export data** — Export scenario data in various formats
- **Automate workflows** — Integrate ETM into your scripts or automations

---

## Installation

Install PyETM from PyPI:

```bash
pip install pyetm
```

**Requirements**: Python 3.12 or later

---

## Getting Started

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

## Need Help?

- **Issues**: [GitHub Issues](https://github.com/quintel/pyetm/issues)
- **Repository**: [github.com/quintel/pyetm](https://github.com/quintel/pyetm)
