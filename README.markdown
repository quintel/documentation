# The Energy Transition Model

The [Energy Transition Model](http://www.energytransitionmodel.com) (ETM) 
is an interactive tool for energy modeling. It allows you to create and explore scenario's for the energy 
future of various countries. The ETM provides the facts and the interfaces; all you have to provide is a vision on the energy future!

![ETM landing page](https://f.cloud.github.com/assets/1303760/1733256/55a38776-6334-11e3-89ee-9f29fde6f179.png)


## We are open source!

All functionality of the ETM can be used free of charge and the 
[code](https://github.com/quintel/etmodel) is publicly
available on GitHub under the 
[MIT licence](https://github.com/quintel/etmodel/blob/master/LICENSE.txt).


## Parts of the ETM

The ETM consist of many parts, all with their own specific documentation and 
user manuals.
The main goal of this document is to provide you with the information you are 
looking for.
Whether you are a user, a contributer, an energy expert or a developer, 
the links below should get you started right away!

* [Documentation for users](## Documentation for users): 
If you want to **use** the ETM for a workshop, a strategy session or your own
amusement.
* [Documentation for contributers](## Documentation for contributers): If you 
want to change, extend, re-design or re-use any part of the ETM.

## Documentation for users

The [Energy Transition Model](http://www.energytransitionmodel.com) has 
three main interfaces:

* The [Energy Game](http://etflex.et-model.com/): lets you explore the 
energy future of the Netherlands in a fun, visual way.
* The [Professional interface](http://pro.et-model.com/): over 300 sliders, 
100+ charts and tables and much, much more. The starting point for a detailed
energy scenario for various countries and end-years.
* The [Energy Mixer](http://mixer.et-model.com/): a questionaire type of 
interface that creates a scenario based on your answers.

From here on, we will focus on the professional interface as it is 
underlying all other interfaces and the main product.


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

You can interact with the ETM trough **sliders**:

![Active slider with share](https://f.cloud.github.com/assets/1303760/1733125/deb716b8-632f-11e3-97bd-032db6dfe9b9.png)
Sliders can be moved by either 
* dragging the slider itself (using the mouse)
* clicking the minus and plus signs that appear when the mouse hovers over a 
slider
* typing directly into the value box (click once on the value to activate)

You receive feedback about the changes your choices bring about through the 
dashboard and the charts.



## Documentation for contributers

The [Energy Transition Model](http://www.energytransitionmodel.com) consists of 
a centrally hosted [computation engine](https://github.com/quintel/etengine) 
that can be accessed by three web-interfaces and an API. The interfaces are 

* The [Energy Game](http://etflex.et-model.com/) hosted on 
[github.com/quintel/etflex](https://github.com/quintel/etflex)
* The [Professional interface](http://pro.et-model.com/) hosted on 
[github.com/quintel/etmodel](https://github.com/quintel/etmodel)
* The [Energy Mixer](http://mixer.et-model.com/) hosted on [github.com/quintel/energymixer](https://github.com/quintel/energymixer)

### Under the hood: Structure of the code

The different parts of the ETM can be schematically represented as shown below



                                                                             +--------------+
                                                                             |              |
                                                                             |              |
                                                                        +---->   ETModel    +-------> user
                                                                        |    |              |
                                                                        |    |              |
                                                                        |    +--+-+---------+
                                                                        |       | |
                                                                        |       | |
                                                                        |       | |
    +----------------+     +----------------+     +----------------+    |       | |    +--------------+
    |                |     |                |     |                |    |       | |    |              |
    |                |     |                |     |                |    |       | |    |              |
    |   ETDataset    +----->    ETSource    +----->  ETEngine      +----+       | +---->   ETFlex     +---> user
    |                |     |                |     |                |            |      |              |
    |                |     |                |     |                |            |      |              |
    +----------------+     +----------------+     +----------------+            |      +--------------+
                                                                                |
                                                                                |
                                                                                |      +--------------+
                                                                                |      |              |
                                                                                |      |              |
                                                                                +------>    Mixer     +---> user
                                                                                       |              |
                                                                                       |              |
                                                                                       +--------------+
The user can interact with ETModel (through the professional interface), 
ETFlex (the game interface) and Mixer (the questionaire interface). ETFlex and 
Mixer both use the slider objects that are defined within ETModel which does the
actual communication to ETEngine.

## Where to start?

* Go to [Start with data](## Start with data) if you are interested in 
improving the existing data or want to create your own country.
* Go to [Start with code](## Start with code) if you want to build on the ETM 
code.

## Start with data

## Start with code
