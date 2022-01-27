---
title: Battery forecasting
sidebar_label: Forecasting
---

In the Energy Transition Model, electric batteries will charge and discharge whenever it is cost-effective for them to do so. These batteries are governed by a willingness-to-pay – the price they are willing to pay to store electricity – and a willingness-to-access – the price they are willing to accept for discharging stored energy.

While this ensures that batteries will not charge and discharge in such a way as would result in a loss, fixed prices can be inflexible and unrealistic. For example, setting a price suitable for winter months when prices tend to be higher, may result in less behavior which is less suitable for the summer months.

Batteries have an optional forecasting option. When enabled, the battery is no longer controlled by the market price of electricity, but will instead forecast the electricity load for the year and decide when to charge and discharge accordingly.

In this mode, the goal of a battery is to flatten the residual load curve as much as possible. This also _generally_ increases the profitability of the battery.

<div class="bordered-image">
  <img src="/img/docs/battery-forecasting/toggle.png" alt="A toggle switch with two options 'Off' and 'On' that enables forecasting. The switch is turned on." />
</div>

:::info Residual load curves
The residual load curve is the sum of demand in each hour, minus the sum of supply from must-run and volatile producers. This results in a curve describing the "residual load" for each hour in the year.

Whenever the value for an hour is positive, electricity demand is not fully satisfied by must-run and volatile producers, with dispatchable/flexible sources needed to meet demand. If the value is negative, this indicates a surplus of energy.

See [Costs → Merit Order → Implementation](merit-order.md/#implementation) for more details.
:::

## Algorithm

The forecasing algorithm matches an hour of high residual load with an hour of low or negative load from the preceeding 72-hours. It causes the battery to charge when load is low and discharge the same amount when load is high. This has the effect of flattening the residual load curve, reducing peaks in favor of a more constant curve.

The algorithm accounts for the input and output capacity, the total volume, and the efficiency of the battery.

### Example

#### Selecting charge and discharge hours

Here we have a curve which varies gradually from a minimum value of 1 up to a maximum of 6. The algorithm selects hour 8 (orange) as the hour of highest load, and finds the hour of lowest load (green).

<div style={{ textAlign: "center" }}>
  <img src="/img/docs/battery-forecasting/before.png" alt="A chart showing load gradually falling from 3 to 1, rising to 6, then falling back to 2." />
</div>

#### Placing a charge

The battery is told to charge in hour 3 and discharge in hour 8. This has the effect of flattening the residual load curve slightly. As residual load is often highly correlated to the market price for electricity, it's likely that the battery operator will make a profit from this cycle.

<div style={{ textAlign: "center" }}>
  <img src="/img/docs/battery-forecasting/after.png" alt="A chart showing load falling from 3 to 2, rising to 5, then falling to 2. The curve has been slightly flattened." />
</div>

#### Iterating

The algorithm continues selecting high and low hours until the battery is at full capacity in each hour or, more often, there are no opportunities to flatten the curve further without a high likelihood of incurring losses.

<div style={{ textAlign: "center" }}>
  <img src="/img/docs/battery-forecasting/finished.png" alt="A chart that shows a constant load of 3, rising to 4, then falling to 2. The curve has been significantly flattened." />
</div>

<div style={{ textAlign: "center" }}>
  <img src="/img/docs/battery-forecasting/finished-load-and-volume.png" alt="A chart showing the volume stored in the battery rising from 0 to 4 as it charages, then back to 0 as it discharges. The battery load is shown varying between 0 and 2 as it charges, then between 0 and -2 as it discharges." />
</div>

## FAQ

#### Why is the charge/discharge cycle limited to a 72-hours?

After selecting an hour of high load, the algorithm looks for an opportunity to charge in the 72-hour period before the high load. This limit serves several purposes:

1. In some kinds of batteries, storing energy for too long is likely to incur losses; energy in the battery slowly decays.
2. While holding energy in storage for long periods of time may be realistic for some storage systems (pumped hydro), it is not realisitic for smaller-scale battery technologies such as household batteries.
3. Longer cycles increase calculation time and would result in your scenario becoming sluggish when you make changes.

In our experiments, we found that periods longer than 72-hours quickly resulted in diminishing returns. Profits from batteries did not increase significantly, while calculation time increased unnacceptably.

Note that this does not mean that the battery must _fully_ charge and discharge every 72-hours. Rather, any amount of energy charged in one hour – which may be a fraction of the battery capacity or volume – must be discharged within 3 days.

#### What are the specifications for batteries in the ETM?

To view the specifications for a battery technology, click the (?) icon next to the slider, then "Technical and financial properties". This will show you a screen summarizing the total installed capacity and volume, efficiency, and costs of the technology.

<div class="bordered-image">
  <img src="/img/docs/battery-forecasting/properties.png" alt="A screenshot from the ETM showing a question mark button which shows slider information, and a 'Technical and financial properties' button which shows detailed information about the battery" />
</div>

## References

* [Practical operation strategies for pumped hydroelectric energy storage (PHES) utilising electricity price arbitrage](https://doi.org/10.1016/j.enpol.2011.04.032). Energy Policy, 39(7), 4189–4196.
