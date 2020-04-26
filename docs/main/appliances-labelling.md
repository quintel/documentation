---
title: Appliances labelling
---

Energy consumption labelling is used to determine how energy efficient household appliances are. The energy labels typically range from class A+++ to class D with  A+++ being the most efficient class and D the least efficient class. The European Union (EU) established an energy consumption labelling scheme for household appliances and it is necessary for all  manufactures to include an energy label with their appliances. The energy label can define the energy efficiency class to a colour code associated with a letter (from A+++ to D).

The ETM allows the user to increase or decrease the energy efficiency level of several types of appliances. These changes in efficiencies are matched to an energy class for each type of appliance with the maximum increase in efficiency corresponding to class A+++ and the maximum efficiency decrease corresponding to  class D.

This page discusses the methods used to determine the relation between energy labels and efficiency improvement and the data underlying the modeling.

## Modeling

![Labelling slide.](/img/docs/labelling_slide.png)

The data on the current energy class of the household appliances in the Netherlands shows that it is different for each appliance. The starting point of the slider refers to the current energy class of the appliance and the icon above the slider can specify the energy class. The user can change the energy class of the appliance according to how efficient it will be in the future.

The energy class of each appliance can be determined with the  Energy Efficiency Index (EEI), which is based on the annual energy consumption of the appliance.

A more detailed description of the EEI of each appliance is described below.

### Dish washer

The table below presents the EEI of each energy label of Dish washers.

![Dish washer labelling.](/img/docs/Dishwasher_labelling.png)

The label also contains information on:

-   the energy consumption in kWh /cycle
-   the washing cycle efficiency class
-   the drying cycle efficiency class
-   the capacity as a number of place settings
-   the water consumption in litres per cycle
-   noise in dB(A)

### Fridge/Freezer

The table below presents the EEI of each energy label of Fridges/Freezers.

![Fridge/Freezer labelling.](/img/docs/Fridge_Freezer_labelling.png)

The label also contains information on:

-   the annual energy consumption in kWh/year
-   the capacity of fresh foods in litres for refrigerators and combined appliances
-   the capacity of frozen foods in litres for freezers and combined appliances
-   the noise in dB(A)

### Washing machine

The table below presents the EEI of each energy label of Washing machines.

![Washing machine labelling.](/img/docs/Washing_machine_labelling.png)

The label also contains information on:

-   the annual energy consumption in kWh/year
-   the annual water consumption in litres
-   the capacity for the standard 60 °C cotton programme at full load or the standard 40 °C cotton programme at full load, whichever is the lower, in kg
-   the spin-drying efficiency class
-   the noise during the washing and spinning phases, for the standard 60 °C cotton programme at full load, in dB(A)

### Dryer

The table below presents the EEI of each energy label of Dryers.

![Dryer labelling.](/img/docs/Dryer_labelling.png)

The label also contains information on:

-   the annual energy consumption, based on 160 drying cycles of the standard cotton programme at full and partial load, and the consumption of the low-power modes, in kWh/year
-   the type of household tumble drier (air-vented, condenser or gas-fired)
-   the cycle time corresponding to the standard cotton programme at full load, in minutes
-    the capacity for the standard cotton programme at full load, in kg
-   the noise during the drying phase, for the standard cotton programme at full load, in dB(A)

### Television

The table below presents the EEI of each energy label of Televisions.

![Television labelling.](/img/docs/Television_labelling.png)

The label also contains information on:

-   the on-mode power consumption in Watts
-   the annual on-mode energy consumption, in kWh/year
-   the visible screen diagonal in inches and centimetres

### Vacuum cleaner

The energy labelling of the vacuum cleaners can be determined from the maximum kWh/year, which is presented in the table below.

![Vacuum cleaner labelling.](/img/docs/vacuum_cleaner_labelling.png)

The label also contains information on:

-   the annual energy consumption in kWh/year
-   the cleaning performance
-   the dust re-emission in mg/m3

The data on the energy consumption labelling of appliances and the current energy labelling in the Netherlands are based on the following publicly available literature:

-   [http://www.natuurenmilieu.nl/media/998797/factsheet_energy_label.pdf](http://www.natuurenmilieu.nl/media/998797/factsheet_energy_label.pdf)
-   [http://www.topten.eu/uploads/File/deliverables_max/D3.2%20Update_CriteriaPaper_Tumbledriers_final.pdf](http://www.topten.eu/uploads/File/deliverables_max/D3.2%20Update_CriteriaPaper_Tumbledriers_final.pdf)
-   [http://www.topten.eu/uploads/File/Vacuum%20cleaners_Policy%20Recommendations_Aug_13.pdf](http://www.topten.eu/uploads/File/Vacuum%20cleaners_Policy%20Recommendations_Aug_13.pdf)

and the following websites:

-   [http://eur-lex.europa.eu/legal-content/EN/ALL/?uri=CELEX:32010R1060](http://eur-lex.europa.eu/legal-content/EN/ALL/?uri=CELEX:32010R1060)
-   [http://eur-lex.europa.eu/legal-content/EN/ALL/?uri=CELEX:32010R1061](http://eur-lex.europa.eu/legal-content/EN/ALL/?uri=CELEX:32010R1061)
-   [http://eur-lex.europa.eu/legal-content/EN/TXT/PDF/?uri=CELEX:32010R1062&qid=1395837474289&from=EN](http://eur-lex.europa.eu/legal-content/EN/TXT/PDF/?uri=CELEX:32010R1062&qid=1395837474289&from=EN)
-    [http://www.top10energyefficiency.org.uk/dishwashers](http://www.top10energyefficiency.org.uk/dishwashers)


The limits of the annual energy consumption in each energy class are based on the EEI. The relation between the EEI and the energy label is not linear; therefore the EEI needed to be adjusted. The EEI adjusted was calculated with the linearization method and the results are shown in the graph below. With the linearization method a straight line was drawn in order to define the new values for the EEI adjusted. The EEI adjusted is used instead of the EEI in order to be able to be used the same icon with the energy classes for all the appliances in the ETM, as the steps from the one energy class to another are equal on the icon.


![EEI adjusted.](/img/docs/EEI_adjusted.png)


The EEI adjusted for the current energy class of each appliance is used as the starting point in order to calculate the energy efficiency change from the current energy class to another. The energy efficiency change of the appliance is linked with the annual energy consumption of the appliance. The change of the one energy class to another can be calculated with the following equation

![Energy efficiency equation.](/img/docs/energy_efficiency_equation.png)

where the Δ% refers to the change of the annual energy consumption of the appliance and the EEIn refers to the EEI adjusted of the current energy class. The maximum value of the % change of each appliance is the change of the annual energy consumption in order to reach the most efficiency energy class (A+++) and the minimum value is the change of the annual energy consumption in order to reach the least efficiency energy class (D).

All the appliances have an energy class range from A+++ to D, except from the dryers. The least energy efficiency class for the dryers is C. For the simplicity of the calculations, it is assumed that the energy class range for the dryers is also from A+++ to D.

A more detailed description of the % energy efficiency change of the appliances is shown in the table below.


|Min. %|Current energy label| Max. % |
|---------|-----|---------------------|
|Dish washer|-34%|A|35%|
|Fridge / Freezer|-132%|A+|66%|
|Washing machine|-56%|A+|28%|
|Dryer|-36%|B|69%|
|Television|-93%|A|92%|
|Vacuum cleaner|-15%|C|75%|



