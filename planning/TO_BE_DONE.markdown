# To be done

From the modeling meeting, here we will try to maintain a list of most pressing
issues.

## Current most pressing debts

### High

1. Input Excel
* Data sets

### Medium

1. Households and building insulations: destroy and rebuild in gqueries/inputs
   in [ETSource], and research data.
* Households: Merging hot water and space heating devices 
* Input statements clean up
* Charts and gqueries clean up
    * Charts should be made consistent
    * Gqueries should be put in clear folder structure
    * Gqueries should be robust to changing graph (make use of uniquely and 
    centrally defined converter groups)
    * Gqueries should be re-used as much as possible
    * Gqueries should use the same (clean) syntax
* Simplify `co2_free`, `part_ets`, `energetic`/`non_energetic`
* Remaining CHP cleanup: variable O&M costs and profiles.
* Coupling carrier replacement (Embedded Graphs)

### Low

1. Space heating demand buildings (research of technologies used etc.)
* Clean up etengine back-end information (and display)
* Devices/appliances Labels should be removed
* Time curves (possibly cleaned up with flex max?)
* Industry: Cokes production does not follow demand
* Converter names without carrier
* the `undefined` carrier
* Plant dataset, 'state of the art'
* Heat representation in ETM


## Wishes

1. Flex max (which seems to be a very complex issue)
   * constraining by infrastructure
   * contrainting by availability
   * follows foreign demand
   * priorities
   * period between now and future and affects total reserves
* ETSource Object Mapper
* Division of Node / Converter
* Simpler way to make charts (possibly without gqueries)

[input_excel][http://github.com/quintel/input_excel]
[ETSource][http://github.com/quintel/etsource]
