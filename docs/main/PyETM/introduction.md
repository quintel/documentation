---
title: Introduction
---
## What is PyETM?
PyETM is a package written in Python that allows ETM users to interact with the ETM via the API. The
package is designed to be a modular tool that advanced users can incorporate into their workflows.

You can clone the PyETM from [our Github](https://github.com/quintel/PyETM). The package is also
available via pip like any other python package - install it and use it in your project!
```
pip install pyetm
```

**Requirements:** Python 3.12 or higher is required.

The package includes example Jupyter notebooks in the `examples/` directory that demonstrate common workflows. Many actions require minimal programming experience.


With PyETM you can:
- [Use premade Jupyter notebooks to interface with scenarios directly or via Excel](notebooks.md)
- [Develop your own python tooling for working with scenarios](contributor-docs.md)

## Version Status

PyETM is currently in **beta/pre-release**. While the core functionality is stable and tested, the package API may evolve as we gather feedback and add features.

You can find the latest releases and pre-releases on PyPI: [https://pypi.org/project/pyetm/#history](https://pypi.org/project/pyetm/#history)

To install a specific version:
```bash
# Install latest (including pre-releases)
pip install --pre pyetm

# Install a specific version
pip install pyetm==2.0.0b9
```

The ETM API itself is stable, so your workflows will remain reliable even as the PyETM package interface improves.

## Getting started

Make sure you have [Python 3.12+](https://www.python.org/downloads/) installed.

### Installation
```bash
pip install pyetm
```

### Initial Setup
Create a `.env` configuration file and example files:
```bash
pyetm init
```

This creates:
- `.env` template file for your API credentials
- `examples/` directory with sample input files and notebooks

## Configuration

Edit the `.env` file created by `pyetm init`:

```bash
# Your ETM API token (required)
ETM_API_TOKEN=your.token.here

# Environment (default: pro)
ENVIRONMENT=pro

# Optional: Logging level
LOG_LEVEL=INFO
```

**Environment Options:**
- `pro` (default): Production environment
- `beta`: Staging environment
- `local`: Local development environment
- `YYYY-MM`: Stable tagged environment (e.g., `2025-01`)

For advanced configuration options (custom BASE_URL, proxy settings, CSV formatting), see the [contributor documentation](contributor-docs.md).

## Next Steps

### Using the Notebooks
The `examples/` directory contains Jupyter notebooks demonstrating PyETM workflows:
- `basic_features.ipynb` - Core functionality and Excel workflows
- `advanced_features.ipynb` - Batch operations and advanced features

See the [notebooks documentation](notebooks.md) for detailed guides.

### Building Your Own Tools
If you want to develop custom applications with PyETM, see the [contributor documentation](contributor-docs.md) for API details and development setup.
