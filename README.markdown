# The Energy Transition Model

The [Energy Transition Model](http://www.energytransitionmodel.com) (ETM) 
is an interactive tool for energy modeling. It allows you to create and explore 
scenario's for the energy future of various countries. 
The ETM brings the facts and tools to capture your vision for the future!

![ETM interfaces](https://f.cloud.github.com/assets/1303760/1742063/e35852d2-63f1-11e3-8ade-484d65a4302f.png)

## We are open source!

All functionality of the ETM can be used free of charge and the 
[ETModel code](https://github.com/quintel/etmodel) (other repositories 
will follow shortly) is publicly
available on GitHub under the 
[MIT licence](https://github.com/quintel/etmodel/blob/master/LICENSE.txt).


## Parts of the ETM

The ETM consist of many parts, all with their own specific documentation and 
user manuals.
The main goal of this document is to provide you with the information you are 
looking for.
Whether you are a user, a contributer, an energy expert or a developer, 
the links below should get you started right away!

* [Documentation for users](#users_doc): 
If you want to **use** the ETM for a workshop, a strategy session or your own
amusement.
* [Documentation for contributers](#contr_doc): If you 
want to **change, extend, re-design** or **re-use** any part of the ETM.

## <a name="users_doc"></a>Documentation for users

The [Energy Transition Model](http://www.energytransitionmodel.com) has 
three main interfaces:

* The [Energy Game](http://etflex.et-model.com/): lets you explore the 
energy future of the Netherlands in a fun, visual way.
* The [Professional interface](http://pro.et-model.com/): over 300 sliders, 
100+ charts and tables and much, much more. The starting point for a detailed
energy scenario for various countries and end-years.
* The [Energy Mixer](http://mixer.et-model.com/): a questionaire type of 
interface that creates a scenario based on your answers.

From here on, we will focus on the professional interface.

![](http://f.cl.ly/items/291h3S0g3E2U3L1T0Z2H/Screen%20Shot%202013-12-10%20at%2013.38.35.png)

The professional inteface allows you to influence all the main aspects of the 
energy system:

* Targets: set goals for your scenario and see if you can reach them. 
Targets can be set for CO2 reduction, renewability, total cost, max import etc.
* Demand: what happens to energy consumption in the future? 
* Supply: which technologies will we use to produce heat and electricity 
in the future?
* Costs: specify what you think will happen to the costs of carriers and 
technologies. Setting the costs provides the canvas on which your scenario is
painted. 
NOTE: these costs do not include taxes or subsidies and are, 
therefore, less dependent on governement influences than prices.

### Basics of the Professional interface 

#### Interacting with the ETM

You can interact with the ETM trough **sliders**:

![Active slider with share](https://f.cloud.github.com/assets/1303760/1733125/deb716b8-632f-11e3-97bd-032db6dfe9b9.png)

Sliders can be moved by either 
* **dragging** the slider itself (using the mouse)
* **clicking** the minus and plus signs that appear when the mouse hovers over a 
slider
* **typing** directly into the value box (click once on the value to activate)

You receive feedback about the changes your choices bring about through the 
dashboard and the charts. Both dashboard and charts can be changed to show the 
information that you are interested in.

#### Start-year and end-year

At any time, the ETM contains information about **two** scenarios:

* The **start-scenario**: this scenario is fixed and is used to calculate how much 
your choices for the future affect things like CO2 emissions.
* The **future scenario**: this scenario is initially identical to the 
start-scenario but will reflect the changes you make in the ETM. 
The philosophy of the ETM is: if you don't change anything, 
the future will be equal to the present.

#### <a name="energy_calc"></a>The energy calculation

**Energy** is the 'common currency' of the ETM. When you change a slider, 
you effectively change the energy flow in the ETM. This energy flow can be 
represented as a **graph** such as shown below:

![Simplified version of the Graph that is at the core of the ETM](http://wiki.quintel.com/images/7/78/Graph.jpg)

The **nodes** are represented by **converters** who convert or 
transport energy (possibly with loss). The **edges** (the connections) are the 
energy flows which are characterized by **volume** (in Mega Joule) and 
**carrier type** (such as coal, electricity, useable_heat etc.).

The ETM is **demand driven** meaning that moving a slider in the demand sector, 
the graph is traverse from left to right. From 'useful demand' (heating, 
hot water, car-kilometers) to 'primary demand' (the extraction of gas, import 
of coal etc.)

More information on the calculation methods of the ETM can be found on our
[wiki](http://wiki.quintel.com/index.php/Documentation)

## <a name="contr_doc"></a>Documentation for contributers

The [Energy Transition Model](http://www.energytransitionmodel.com) consists of 
a centrally hosted [computation engine](https://github.com/quintel/etengine) 
that can be accessed by three web-interfaces and an 
[API](http://et-model.com/api). The interfaces are 

* The [Energy Game](http://etflex.et-model.com/) hosted on 
[github.com/quintel/etflex](https://github.com/quintel/etflex)
* The [Professional interface](http://pro.et-model.com/) hosted on 
[github.com/quintel/etmodel](https://github.com/quintel/etmodel)
* The [Energy Mixer](http://mixer.et-model.com/) hosted on [github.com/quintel/energymixer](https://github.com/quintel/energymixer)

### Under the hood: Structure of the code

The different parts of the ETM can be schematically represented as shown below:

![](http://f.cl.ly/items/2a1x0m062V2N310k2p40/Screen%20Shot%202013-12-13%20at%2013.17.18.png)

The user can interact with ETModel (through the professional interface), 
ETFlex (the game interface) and Mixer (the questionaire interface). 

## Where to start?

* Go to [Start with data](#start_data) if you are interested in 
improving the existing data or want to create your own country.
* Go to [Start with code](#start_code) if you want to build on the ETM 
code.

## <a name="start_data"></a> Start with data

The dataflow of the ETM starts with the energy 
balance of a country (or a group of countries as in the EU version of the 
model).
We currently use the [IEA](http://www.iea.org/) energy balances because they 
are available for all countries, in the same format and can be bought online.
The energy balance is a matrix of numbers that describe the energy flows of a 
country broken down in carrier (along on axis) and sectors, applications etc. (
along the other axis)

Apart from the energy balance, the ETM needs information about the current state of
affairs in the country you want to model in the ETM. Such information includes 
(amongst others) the number of inhabitants and the fraction of LED lamps.
We call this type of information 'assumptions'.

The energy balance, together with the assumptions will be forged into a dataset 
that can initialize the ETM. This process is done in the Dataset Analysis which 
can be found in the 
[ETDataset repository](https://github.com/quintel/etdataset).

## <a name="start_code"></a> Start with code

Depending on which part of the model you want to work on, the repositories that
hold the relevant code are as folows:

* [ETEngine](https://github.com/quintel/etengine): the computational engine. 
Contains all methods to traverse the [energy graph](#energy_calc), methods 
for interaction with the graph (e.g., gqueries) etc.
* [ETModel](http://pro.et-model.com/): the front-end code, charts, translations.
* [ETSource](https://github.com/quintel/etsource): gqueries, input-statements 
the data that defines the graph structure and content.
* [Merit](https://github.com/quintel/merit): stand-alone merit order calculator
which is used as a gem by ETEngine.
* [Atlas](https://github.com/quintel/atlas): functions to initialize the graph.
* [Refinery](https://github.com/quintel/refinery): graph traversal algorithms 
used to initialize the graph. Refinery is used as a gem by Atlas.

Each repository has its own specific documentation in the 
README.md locatedin the root directory.