---
title: Inputs
---

Inputs are the means by which visitors to the ETM, and users of the API, set values within their scenario. These may include variables such as the number of residences, share of heating technologies, cost of energy, and many others.

### Priority

The `priority` attribute assigns a numeric priority to an input, which determines the order in which ETEngine executes the inputs in a scenario.

**A higher number means the input is executed earlier.** An input with `priority = 2` runs before one with `priority = 1`, which runs before one with `priority = 0`. If `priority` is not specified in ETSource, the input gets a priority of 0. When two inputs have the same priority, they are executed in alphabetical order of their key.

```
- priority = 1
```

Priority is useful in two situations:

**1. One input reads a value that another input sets.**
Give the input which _sets_ the value the higher priority, so that it runs first. The input which _reads_ the value then sees the user's value rather than the default.

**2. Two inputs set the same attribute.**
Because the inputs are applied one after another, the input executed _last_ overwrites the earlier one. That is the input with the **lower** priority. If you need a particular input to determine the final value, give it the _lower_ priority.

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
