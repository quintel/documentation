---
title: Inputs
---

Inputs are the means by which visitors to the ETM, and users of the API, set values within their scenario. These may include variables such as the number of residences, share of heating technologies, cost of energy, and many others.

### Priority

The `priority` attribute can be used to assign a numeric priority; this determines the order in which inputs are executed by ETEngine. Inputs with a higher priority are executed first. If two inputs modify the same value in the graph, the lower-priority input – which is executed second – will be the one which sets the final value.

This is a useful feature when one input sets a value which may be _read_ by another; ensure that the first input has a higher priority than the second to ensure that the second input reads the user value, rather than the default.

The default priority is 0.

### Share groups

When a collection of inputs must sum to 100%, use a share group. This is a common need when describing technology shares (such as the proportion of gasoline, diesel, and electric vehicles).

```
- share_group = transport_car_tech
```

All inputs with the same `share_group` value will be placed in a group, with their values expected to sum to 100. ETModel will enable this by reducing or increasing a second slider whenever the user changes a value. API users can opt in to "autobalancing" behavior, whereby the other inputs in the group which don't have an explicitly value set, have their values changed to ensure the group sums to 100.

### Mutually-exclusive inputs

It is sometimes necessary for an input to become disabled when the user provides a value for another input. These are called mutually-exclusive. To configure this, set the `disabled_by` attribute on the input:

```
- disabled_by = some_other_input
```

In this example, the input will become disabled if the user provides a value for the input whose key is "some_other_input". A disabled slider will not be movable in ETModel, and any value the user previously set for the input will be ignored by ETEngine.

It is possible to specify more than one key for `disabled_by`:

```
- disabled_by = [input_one, input_two]
```

In this case, the input will be disabled if *either* of the inputs called "input_one" or "input_two" have a custom value provided by the user.
