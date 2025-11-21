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

To run the tools a Python installation is required, however many of the actions require very little
programming experience, and we've given examples of the workflows in the examples folder.


With PyETM you can:
- [Use premade Jupyter notebooks to interface with scenarios directly or via Excel](notebooks.md)
- [Develop your own python tooling for working with scenarios](contributor-docs.md)


## Getting started
Make sure you have [Python 3](https://www.python.org/downloads/) installed. Then, install all required libraries by opening a terminal/command-prompt window in the `PyETM` folder (or navigate to this folder in the terminal using `cd "path/to/scenario-tools-folder"`). All following examples of running the tool expect you to be in this folder.


### Poetry
Follow the [official instructions](https://python-poetry.org/docs/#installation):

#### For Mac with brew

Make sure pipx is installed, otherwise use:
```bash
brew install pipx
```

Then:
```bash
pipx install poetry
```

#### Other systems
```bash
curl -sSL https://install.python-poetry.org | python3 -
```

#### Finally
After installation, ensure Poetry is available:
```bash
poetry --version
```


#### Install Dependencies

Navigate to the `PyETM` folder and install all dependencies:
```bash
poetry install
```

This will:
- Create a virtual environment
- Install runtime dependencies
If you want development dependencies (testing, linting, etc.) then append the
"--with dev" flag to the install command.


#### How to use the environment:
You can either:
- Run commands inside Poetry's environment:
  ```bash
  poetry run pytest
  poetry run pyetm
  ```
- Or activate the shell:
  ```bash
  eval $(poetry env activate)
  ```
  Then run you can commands normally (e.g.):
  ```bash
  pytest
  ```

## Configuring Your Settings

You can configure your API token and base URL either with a **config.env** file or environment variables. You can simply set an `environment` and the base URL will be inferred for you.

### Option 1: `config.env` (Recommended)
1. Copy the example file (`example.config.env`) and rename it to `config.env`.
2. Edit `config.env`:
   ```bash
   # Your ETM API token (required)
   ETM_API_TOKEN=your.token.here

   # Environment (default: pro)
   ENVIRONMENT=pro

   # Optional: Override base URL directly
   # BASE_URL=https://engine.energytransitionmodel.com/api/v3

   # Optional: Proxy settings
   # PROXY_SERVERS_HTTP=http://user:pass@proxy.example.com:8080
   # PROXY_SERVERS_HTTPS=http://user:pass@secureproxy.example.com:8080

   # CSV settings (optional)
   CSV_SEPARATOR=,
   DECIMAL_SEPARATOR=.
   ```

Place `config.env` in the project root (`pyetm/` folder).

**Environment Options:**
- `pro` (default): Production environment
- `beta`: Staging environment
- `local`: Local development environment
- `YYYY-MM`: Stable tagged environment (e.g., `2025-01`)

### Option 2: Environment Variables
If you prefer, set these environment variables directly:
```bash
ETM_API_TOKEN=<your token>
ENVIRONMENT=<pro|beta|local|YYYY-MM>
# or provide a direct override instead of ENVIRONMENT
BASE_URL=<api url>
```
