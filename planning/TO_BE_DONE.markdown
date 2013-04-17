# To be done

From the modeling meeting, here we will try to maintain a list of most pressing
issues.

## Current most pressing debts

### High

1. Input Excel
* Data sets
* Input statements clean up

### Medium

1. CHP clean up: technical specifications (issues present on [input_excel]
* Households and building insulations: destroy and rebuild in gqueries/inputs
   in [ETSource], and research data.
* Clean up etengine back-end information (and display)
* Simplify `co2_free`, `part_ets`, `energetic`/`non_energetic`

### Low

1. Space heater demand buildings
* Households: Merging hot water and space heating devices 
* Devices/appliances Labels should be removed
* Time curves (possibly cleaned up with flex max?)
* Industry: Cokes production does not follow demand
* Coupling carrier replacement
* Converter names without carrier
* the `undefined` carrier
* Plant dataset, 'state of the art'


## Wishes

1. Flex max (which seems to be a very complex issue)
   * constraining by infrastructure
   * contrainting by availability
   * follows foreign demand
   * priorities
   * period between now and future and affects total reserves
2. ETSource Object Mapper
3. Division of Node / Converter


[input_excel][http://github.com/quintel/input_excel]
[ETSource][http://github.com/quintel/etsource]
