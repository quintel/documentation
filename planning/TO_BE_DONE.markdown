# To be done

From the modeling meeting, here we will try to maintain a list of most pressing
issues.

## Current most pressing debts

### High

1. Coupling carrier
2. Input Excel
3. Data sets
4. Input statements clean up

### Medium

1. Households: Merging hot water and space heating devices 
2. Households and building insulations: destroy and rebuild in gqueries/inputs
   in [ETSource], and research data.
3. Simplify `co2_free`, `part_ets`, `energetic`/`non_energetic`

### Low

1. Space heater demand buildings
2. CHP clean up: technical specifications (issues present on [input_excel]
3. Devices/appliances Labels should be removed
4. Time curves (possibly cleaned up with flex max?)A
5. Industry: Cokes production does not follow demand
6. Converter names without carrier
7. the `undefined` carrier
8. Plant dataset, 'state of the art'

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
