# To be done

From the modeling meeting, here we will try to maintain a list of most pressing
issues.

## Current most pressing debts

### High

1. Loss of load probability calculation
* Network properties (analysis and research is not maintainable / validatable)


### Medium

1. Input statements clean up
* Simplify `co2_free`, `part_ets`, `energetic`/`non_energetic`
* Coupling carrier replacement (Embedded Graphs)


### Low

1. Space heating demand buildings (research of technologies used etc.)
* Re-model the way solar thermal heaters and heatpump add-ons are modeled
* Clean up etengine back-end information (and display)
* Devices/appliances Labels should be removed
* Time curves (possibly cleaned up with flex max?)
* Industry: Cokes production does not follow demand
* Remaining CHP cleanup: profiles.
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
* Simpler way to make charts (possibly without gqueries)

[ETSource][http://github.com/quintel/etsource]
