# Storage project plan 

This is an organic project planning document for the Storage Project in the ETM.

## Project Management

* Management responsible: AW
* Executive responsible: CK

## Roles and resources

RD will be responsible for the bulk of the research. Supervised by AW.
CK will be responsible for project management and technical supervision of RD.
CK will be responsible for queries, inputs, chars, slides and sliders.
DS will be responsible for implementation of functionality in Ruby.

## Time budget

* Planned: 70 days 
* Used: 49.73 (80% of which by interns) (RD has registered
  most of his hours under "Energy Storage (time-resolved)" since Oct 2012 
* Planned running time: 01-02-2013 to 01-04-2013 DOES THIS MAKE SENSE?

## Scope

This project concerns the implementation of storage, conversion and curtailement
of electricity in the ETM. 
The ETM will give the user the option of dealing with excess production of 
electricity in one of the following ways:

1. Export
* Storage
* Conversion (e.g. into gas or heat)
* Curtailment (discarding electricity, equivalent to turning off production)

The user will be able to use the Merit Order module without storage. But needs 
to use the Merit Order module to be able to use storage.

This project is not concerned with the graduation project of RD, although it 
has overlap with, and benefits from his research for the University of Utrecht.

The scope of the project is further limited to the specifications found on
[https://github.com/quintel/documentation/blob/master/modules/merit_order/
Storage%20Project%20within%20Merit%20Order.markdown]

## Deliverables MANY THINGS TO DECIDE ON!

* A comprehensive study of storage/conversion options.

* A 'Storage' slide where the user has options of dealing with excess 
electricity production. IT IS UNCLEAR WHAT THIS SLIDE CONTAINS: A RADIO BUTTON 
WITH THESE OPTIONS?

1. Export
* Store
* Convert to heat
* Convert to gas
* Curtail

We might also coniseder an implementation where the user can choose between

1. Export
* Store/Convert
* Curtail

and we choose a sensible **order** for the storage and conversion to be used.

* A slider for the total volume of storage facilties? This may also take the 
form of a market penetration of course. NOT CLEAR YET!

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
