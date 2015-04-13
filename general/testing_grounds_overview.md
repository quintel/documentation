# Local testing ground scenarios

Together with Alliander, "testing ground"-specific functionality has been added to the Energy Transition Model (ETM). A new testing ground scenario begins with the design of a national scenario in the ETM which provides the (inter)national context.
Subsequently, the national scenario can be scaled to the size of the testing ground and loaded into the new functionality wherein detailed, time-resolved calculations can be carried out. Lastly, the testing ground scenario can be scaled up to national size again and merged with other scenario's in the ETM to explore the impact on the national level.

In more detail the steps for testing ground analysis with the Energy Transition Model are as follows:

## Step 1) Create a national scenario

Create (or load) a scenario in the professional version of the ETM. This scenario sets the (inter)national stage for your testing ground. See the [documentation for the professional interface of the ETM](https://github.com/quintel/documentation#documentation-for-users) for details.

## Step 2) Scale the national scenario to testing ground size

Scale your national scenario to the size of the testing ground using the [scaling interface](https://github.com/quintel/documentation#testing-ground). You can exclude the industry, agriculture and energy sector from your testing ground. After the scenario is scaled, you can continue to edit your testing ground scenario by adding, for example, more electric vehicles and solar panels.

## Step 3) Specify the electricity network

Specify the electricity network for your testing ground (or use the default) using the [testing ground interface](http://ivy.et-engine.com/). Here you can define the structure of the electricity network and the capacities of its components. For instance, if you want to model every household in your testing ground as a separate connection to the network, you will have to specify these connections here.

## Step 4) Connect the testing ground scenario to the network

Connect the households and technologies in your testing ground scenario to the network by specifying which end-point of the network 'holds' which households and/or technologies. The application will make a suggestion for you which you can edit manually. Note that the application assigns load profiles to your technologies and base-load profiles to your households. You can view and edit these profiles in the [profile interface].

## Step 5) Calculate load on the network

The load calculation interface (see image) shows you what the load on each of the components of your network is for each timestep in the calculation (usually every hour in the year).
![image](https://raw.githubusercontent.com/quintel/documentation/master/images/20150410_load_chart.png)

## Step 6) Scale the testing ground scenario up to national size

Scale your testing ground scenario to national size by pressing the "creat national scenario" button:
![image](https://raw.githubusercontent.com/quintel/documentation/master/images/20150413_button.png)

When scaling your testing ground scenario up to national size, the changes in number of households, solar PV panels, heat pumps and electric vehicles are translated to slider settings in the ETM interface. Optionally excluded sectors are re-introduced from the original national scenario.

## Step 7) Merge testing ground scenario with a national scenario

In the "scenario merging interface" (see image below), one or several scenario's can be merged. For each scenario, a weighting factor can be specified which determines in which ratio the scenario's will be 'mixed'. Specify equal weights for two the national and the testing ground scenario, for example, to mix them with a 50/50 ratio.
![image](https://raw.githubusercontent.com/quintel/documentation/master/images/20150413_merge.png)