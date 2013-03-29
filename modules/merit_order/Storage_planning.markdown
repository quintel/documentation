# Storage project plan 

This is an organic project planning document for the Storage Project in the ETM.

## Questions

* What do we do with electricity to H2 gas conversion? Does it get fed back into
  the graph? If yes, we have the following dependencies:
  - The gas in the network becomes 'greener' impacting the renewability
  - The gas has different CO2 properties (impacting marginal costs of plants)
  - The gas may have a different price! AW PLEASE COMMENT
* If we convert power to heat, we need less heating in HHs -> demand lower. This
circularity will lead to overproduction of the dispatchables (especially if we 
have electric heating)! 
* Are the above dependencies bad?
* Do you need a certain heating technology to use power to heat?
  - The first circularity will change the costs of plants (and thus possibly the
  MO).
  - The second circularity screws with the balance of supply and demand and is 
  potentially quite serious.
* When the user moves the slider of e.g. number/capacity of batteries, what does
 he expect?
  - changing costs? if yes: how are we going to include costs of batteries etc.?
  - More generally, how do we deal with a technology that does not realy
  participate in the graph but has sliders in the front-end. We need to reserve
  resources to think about a good solution here.
* How should the user choose for the different options of treatment? 
  - This could be a capacity (in Watt) for conversion channels and a capacity 
  (in Watt) and a volume (MJ) available for power-to-power storage.
* Will we use heat demand curves to model the capacity for power-to-heat 
storage? This means **doing it time-resolved**.
  - Richard has data for this.
  - Feels a bit over-engineered for the ETM though. AW PLEASE COMMENT
* How do we deal with the limitation on 'performance improvements through 
multi-threading' imposed by the sequential nature of P2P storage?
  - Is this a deal-breaker? Then P2P storage and Import/Export are not possible.

## Project Management

* Management responsible: AW
* Executive responsible: CK

## Roles and resources

* RD will be responsible for the bulk of the research. Supervised by AW.
* CK will be responsible for project management and technical supervision of RD.
* CK will be responsible for queries, inputs, chars, slides and sliders.
* DS will be responsible for implementation of functionality in Ruby and changes
to the ETE.

## Priority

This project is less urgent than 

1. Watt Nu?!
* SER
* ETflex2

The project could possibly run parallel with the 'Input Tool' project as this 
does not require CKs full attention.

## Time budget

* Planned: 117 days 
* Reserved in budget: 70 days 
* Used: 49.73 (80% of which by interns) (RD has registered
  most of his hours under "Energy Storage (time-resolved)" since Oct 2012 
* Planned running time: 01-06-2013 to 01-08-2013 DOES THIS MAKE SENSE?
make sense to do this when Richard is still here.

## Scope

This project concerns the implementation of storage, conversion and curtailment
of **excess** electricity in the ETM. 
The following routes will be incorporated into the ETM/Merit Order model: 

1. Export
* Storage
  * storage in utility sized batteries (P2P, cars may be added later)
* Conversion 
  * power - to - heat (P2H)
  * power - to - gas (P2G)
* Curtailment (discarding electricity, equivalent to turning off production)

The user will be able to use the Merit Order module without storage. But needs 
to use the Merit Order module to be able to use storage.

This project is not concerned with the graduation project of RD, although it 
has overlap with, and benefits from his research for the University of Utrecht.

The triggers for charging and discharging are **onset of negative** and 
**onset of positive** residual demand respectively.

* The order of storage and conversion technologies is P2P, P2H, P2G. This is 
motivated by the availability of the methods, and their exergy. RD PLEASE 
COMMENT

More pecifications can be found on
[https://github.com/quintel/documentation/blob/master/modules/merit_order/
Storage%20Project%20within%20Merit%20Order.markdown]

## Deliverables

* A comprehensive study of storage/conversion options. 
  For an overiew of availalbe storage technologies, see https://github.com/quintel/documentation/blob/master/modules/merit_order/technology%20characterization.markdown
* A 'Storage' slide where the user has options of dealing with excess 
electricity production. Most likely we will give the user the option to set 
a **potential** for the different options
  1. Export (interconnector capacity in MW)
  * P2P - central storage (charging rate in MW and charge volume in MJ)
  * Convert to heat (capacity in MW)
  * Convert to gas (capacity in MW)
  * Curtail

NOTE: for electric cars, the potential (charge volume) is set by the market 
share of electric cars in the transport sector.

* The following paramters have to be determined for each implementation
   * nominal capacity (MW)
   * full load hours ? (will be determined by merit order module. Do we need default FLH?)
   * availability
   * eff. output of nominal capacity
   * intial investment
   * lifetime
   * cost for installing
   * fixed operation and maintenance cost per year
   * variable operation and maintenance cost per full load hour
   * employment
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

* Consensus of front-end functionality:           2 days (JK, AW, DS, CK)

* Research: 20 days (70% done by RD?) RICHARD, PLEASE REFINE THIS
 * Finding out which technologies are available:  10 days
 * Technical specs of viable technologies:        10 days

* Modeling of simple storage:                     10 days (95% done RD and CK)
 * Mathematica model of storage:                  7 days
 * Mathematica analysis of curtailment curve:     2 days
 * Getting data from Merit:                       1 day

* Designing new functionality                     10 days (CK, DS, RD)
 * How to 'embed' a P2P converter in the graph?   5 days
 * How to model a conversion unit (P2H, P2G)      5 days

* Writing specifications:                         3 days (30% done RD and CK)

* Implementation in Merit: 20 days (0 % done DS) DENNIS, IS THIS REALISTIC?
 * Writing tests:                                 4 days
 * Writing code in Merit:                         3 days
 * Writing code in ETE:                           10 days
 * Testing code:                                  4 days

* Implemenation in ETM                            11 days (CK)
 * P2H impact on HHs heat and hot water demand    4 days
 * P2G impact on the gas network                  2 days
 * P2P in graph                                   2 days
 * storage slider                                 1 day
 * sliders                                        1 day
 * chart                                          1 day

* Weekly progress meetings (8 meetings):          4 days (DS, AW, RD, CK)

* Project monitoring:                             2 days (CK, AW)

* Validation:                                     2 days (RD, AW with experts)

* Documentation:                                  4 days (RD and CK)
