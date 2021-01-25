---
title: "For contributors"
---

The Energy Transition Model consists of a centrally hosted calculation engine that can be accessed by two main web-interfaces and an API. The interfaces are:
* The Energy Game (source code).
* The Professional interface (source code).
* The Mobile Game (source code) (this app is not connected to the main calculation engine, but uses pre-calculated, cached data).

## Where to start? 
Start with data if you want to know what data or publications were used for the Energy Transition Model. You can also start here if you are interested in improving the existing data or want to create your own country.

Start with code if you want to build on the ETM code.

### Start with datas
The data-flow of the ETM starts with the energy balance of a country (or a group of countries as in the EU version of the model). We currently use the IEA energy balances because they are available for all countries, in the same format and can be bought online. The energy balance is a matrix of numbers that describe the energy flows of a country broken down in carrier (along one axis) and sectors, applications etc (along the other axis).

Apart from the energy balance, the ETM needs information about the current state of affairs in the country you want to model in the ETM. Such information includes (amongst others) the number of inhabitants and the fraction of LED lamps. We call this type of information 'assumptions'.

The energy balance, together with the assumptions will be forged into a dataset that can initialize the ETM. This process is done in the Dataset Analysis which can be found in the ETDataset repository.

A different kind of assumptions we have made are the technical and financial parameters such as 'efficiency' or 'operating and maintenance costs' for all the technologies and energy carriers used in the model. Each technology's attributes are based on our research of publicly available sources as much as possible. Most technological assumptions are not country-specific, but global. All these can also be found in the ETDataset repository.
s
For more information on where to find all this information, please refer to the specific documentation in the README.md located in the root directory. You will see this by scrolling down after clicking the link to the ETDataset repository.

### Start with code
Depending on which part of the model you want to work on, the repositories that hold the relevant code are as follows:

* ETEngine: The computational engine. Contains all methods to traverse the energy graph, methods for interaction with the graph (e.g., gqueries) etc.
* ETModel: The front-end code, charts, translations which make up the professional interface.
* ETSource: Qqueries, input statements, the data that defines the graph structure and content.
* Merit: Stand-alone merit order calculator which is used as a gem by ETEngine to calculate hourly electricity and heat network loads.
* Fever: Calculates hourly heat loads for households and buildings.
* Atlas: Functions to configure and initialize the graph, and its related datasets.
* Refinery: Graph structure, energy flow calculation, and traversal algorithms used to initialize the graph.

Each repository has its own specific documentation in the README.md located in the root directory.


