---
title: Introduction
---
## What is pyetm?
pyetm is a package written in Python that allows ETM users to interact with the ETM via the API. The
package is designed to be a modular tool that advanced users can incorporate into their workflows.

You can clone the pyetm from [our Github](https://github.com/quintel/pyetm). The package is also
available via pip like any other python package - install it and use it in your project!
```
pip install pyetm
```

To run the tools a Python installation is required, however many of the actions require very little
programming experience, and we've given examples of the workflows in the examples folder. #TODO link examples section


With pyetm you can:
- [Download scenario results and queries e.g. dashboard items](reporting.md)
- [Create or update scenario slider settings and custom curves](creating-and-updating.md)


## Getting started
Make sure you have [Python 3](https://www.python.org/downloads/) installed. Then, install all required libraries by opening a terminal/command-prompt window in the `pyetm` folder (or navigate to this folder in the terminal using `cd "path/to/scenario-tools-folder"`). All following examples of running the tool expect you to be in this folder.

#### Using pipenv
It is recommended (but not required) that you use [`pipenv`](https://pipenv.pypa.io/en/latest/) for running these tools. When using `pipenv`
it will create a virtual environment for you. A virtual environment helps with keeping the libraries you install here separate of your global libraries (in
other words your `scenario-tools` will be in a stable and isolated environment and are thus less likely to break when updating things elsewhere on your computer)
and this one comes with some nice shortcuts for running the tools.

You can install `pipenv` with `pip` or `pip3` if you don't have it installed yet.
```
pip3 install pipenv
```

Then you can create a new environment and install all the libraries in one go by running:
```
pipenv install
```
