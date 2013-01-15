# Industry

Currently, only the metal sector has been implemented.

## Debt: coupling carrier

The biggest **technical** debt in the metal subsector is the *coupling carrier*
which was added to the graph and Etengine to deal with the requirement that two
converters should *both* be increased/decreased when one is updated by the
user. This is needed for the industry, because the same metal factory has some
energy use in it, and transformation processes. These cannot be combined in a 
single converter, since that would lead to the loss of information and 
circularities.

### Current fall out

* Refinery should ignore the `coupling carrier` when calculating 
* ETengine has quite a few exceptions with this coupling carrier, that is
  `destroyable` (has to be further specified exactly what).

### Possible solutions

For the long term, we think that the idea of an *Embedded Graph* can deal with
this situation, where two or more converters are elements of a 'group'. When e.g.
the number of units of the group is updated: all the elements of the group are
updated as well.

For the short term, there is no good alternative to the current situation.
* Using inputs would be very cumbersome if not impossible
* Using the ETengine to handle this exception would be even more obscure.

Therefore, we **strongly** recommend to invest in a first version of the
'Embedded graph` before expanding the industry sector or any other sector that
has similar requirements.

#### Example

Suppose we have a *steel plant*, with two converters *A* and *B*:

```
                STEEL FACTORY
   +--------------------------------------+
   |      A                 B             |
   |     +--------+        +--------+     |
   |     |        |        |        |     |
<--|<----+        |<-------|        |<----|<--
   |     |        |        |        |     |
   |     +--------+        +--------+     |
   |                                      |
   +--------------------------------------+
```

Suppose we:
* Tell `Steel Factory` to increase the `number_of_units` from 1 to 10
* Then A and B should be scaled with a certain factor, e.g.:
  * A was 1 and becomes 10
  * B was 2 and becomes 20

Note: Mark den Heijer has included a more extensive and realistic example
in the Industry docmentation.

#### Possible future extensions

In addition to this, we can also for example ask the `Steel factory` for its
`output_capacity`, its `co2_emissions`, `final_energy_demand` etcetera, 
which would have the added benefit of making a lot of statistical converters 
rendundant and could open up new possibilities.

Caution is needed not to overuse or abuse this new pattern.

We should also think about rendundance with respect to defining properties.
(e.g. what determines output capacity: the elements or the collection?)
