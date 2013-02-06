# Storage project plan 

This is an organic project planning document for the Storage Project in the ETM.

## Questions

* What do we do with electricity to gas conversion? Does it get fed back into
  the graph? If yes, we have a lot of dependencies! (e.g. capacity of installed
  converters, green gas, gas prices, etc., etc.)
* When the user moves the slider of e.g. capacity of batteries, what does he expect?
  - changing costs? if yes: how are we going to include costs of batteries etc.?
* How should the user choose for the different options of treatment? By setting 
a potential? 
  - This would mean a capacity (in Watt) for conversion channels and a capacity 
  (in Watt) and a volume (MJ) available for power-to-power storage.
* Will we use heat demand curves to model the capacity for power-to-heat 
storage?
  - Richard has data for this.
  - Feels a bit over-engineered for the ETM though.
* What will be the order of power-to-power, power-to-heat and power-to-gas?
  - It would make sense to give power-to-power precedence over the conversion 
  options because of limited availability and exergy arguments. TRUE AW & RD?

## Project Management

* Management responsible: AW
* Executive responsible: CK

## Roles and resources

* RD will be responsible for the bulk of the research. Supervised by AW.
* CK will be responsible for project management and technical supervision of RD.
* CK will be responsible for queries, inputs, chars, slides and sliders.
* DS will be responsible for implementation of functionality in Ruby.

## Priority

This project is less urgent than 

1. Watt Nu?!
* SER

The project could possibly run parallel with the 'Input Tool' project as this 
does not require CKs full attention.

## Time budget

* Planned: 70 days 
* Used: 49.73 (80% of which by interns) (RD has registered
  most of his hours under "Energy Storage (time-resolved)" since Oct 2012 
* Planned running time: 01-03-2013 to 01-05-2013 DOES THIS MAKE SENSE? It would 
make sense to do this when Richard is still here.

## Scope

This project concerns the implementation of storage, conversion and curtailment
of **excess** electricity in the ETM. 
The following routes will be incorporated into the ETM/Merit Order model: 

1. Export
* Storage
  * storage in Electric Vehicle Batteries
  * storage in utility sized battery storage 
* Conversion 
  * power - to - heat
  * power - to - gas
* Curtailment (discarding electricity, equivalent to turning off production)

The user will be able to use the Merit Order module without storage. But needs 
to use the Merit Order module to be able to use storage.

This project is not concerned with the graduation project of RD, although it 
has overlap with, and benefits from his research for the University of Utrecht.

The triggers for charging and discharging 

The scope of the project is further limited to the specifications found on
[https://github.com/quintel/documentation/blob/master/modules/merit_order/
Storage%20Project%20within%20Merit%20Order.markdown]

## Deliverables

* A comprehensive study of storage/conversion options. For technology characterization, see https://github.com/quintel/documentation/blob/master/modules/merit_order/technology%20characterization.markdown

* A 'Storage' slide where the user has options of dealing with excess 
electricity production. Most likely we will give the user the option to set 
a **potential** for the different options

1. Export (interconnector capacity in MW)
* Store - car/central storage (charging rate in MW and charge volume in MJ)
* Convert to heat (capacity in MW)
* Convert to gas (capacity in MW)
* Curtail

NOTE: for electric cars, the potential (charge volume) is set by the market 
share of electric cars in the transport sector.

* Chart(s) to go with the slide mentioned above. WE HAVE TO DECIDE WHAT TO SHOW.
One could think about a bezier curve with excess electricity production broken 
down into:

1. Exported
* Stored
* Converted to heat
* Converted to gas
* Curtailed

* Documentation
* Tests
* Project monitoring statistics

* MORE?

## Time estimates per deliverable/action

* Consensus of front-end functionality:           1 day (JK, AW, DS, CK)

* Research: 20 days (70% done by RD?) RICHARD, PLEASE REFINE THIS
 * Finding out which technologies are available:  10 days
 * Technical specs of viable technologies:        10 days

* Modeling of simple storage:                     10 days (95% done RD and CK)
 * Mathematica model of storage:                  7 days
 * Mathematica analysis of curtailment curve:     2 days
 * Getting data from Merit:                       1 day

* Writing specifications:                         3 days (30% done RD and CK)

* Implementation in Merit: 10 days (0 % done DS) DENNIS, IS THIS REALISTIC?
 * Writing tests:                                 4 days
 * Writing code in Merit:                         3 days
 * Writing code in ETE:                           1 day
 * Testing code:                                  2 days

* Weekly progress meetings (8 meetings):          4 days (DS, AW, RD, CK)

* Project monitoring:                             2 days (CK, AW)

* Validation:                                     2 days (RD, AW with experts)

* Documentation:                                  4 days (RD and CK)
