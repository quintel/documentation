# Buffers


Each household generally has **two** buffers that contain heat: one for space heating and one for domestic hot water consumption. 
The buffers are linked to a demand/use profile which describes how much energy is requested by the household in every time step. This heat can be fulfilled by the buffer and/or other heating technologies. One or more technologies can be attached to a buffer to 'charge' it. The instantaneous temperature of the buffer can vary between T_min and T_max and is called "T_buffer".

The buffers are characterized by the following specifications:

| Buffer |Size| T_min |T_max | T_low | T_high |Profiles | Allowed technologies |
|---|---|---|---|---|---|---|---|
|Space heating|100 liter *|15|60 |30 *|40|heating demand|space heating technologies|
|Domestic hot water|100 liter *|15|90 |35 *|50|hot water demand|hot water technologies|

\* attributes that the user should be able to adjust, defaults are shown.  

* **Size**: the physical size of the tank in liters. The water never leaves the buffer, only heat is extracted from it by a heat exchange unit (not modelled).
* **T_min**: The minimum temperature provides the lower limit for the energy content. If the buffer is at this temperature, no more energy can be extracted.
* **T_max**: The maximum temperature determines how much energy can be stored in the buffer once the size is fixed. The energy content is given by (T_max - T_min) * size * 0.0011626 where the last number is the specific heat of water ([see Wikipedia](https://en.wikipedia.org/wiki/Heat_capacity)).
* **T_low**: the temperature below which the technologies that feed the buffer switch on. This is needed because otherwise those technologies would react every time a small amount of heat is extracted from the buffer which is not realistic.
* **T_high**: the temperature above which the technologies that feed the buffer switch off. This is needed because otherwise those technologies could heat to a higher temperature than is actually needed.

Besides these variables we need thre more to describe the state of the water that flows through the heat exchanger and extracts heat from the buffer

* **E_ex**t: the extracted heat from the buffer
* **T_ext_average**: the **average** heat of the extracted water 
* **V_ext**: the volume of water that passes through the heat exchanger
* **V_cons**: the volume of water consumed by the demanding entity (this does not have to be the same as V_ext because in the case of mixing, the extracted volume is later mixed with cold water to make the V_cons)

## Profiles for buffers (space heating and hot water)

Buffers must be associated with profiles which describe the demand. Profiles describing space heating demand and hot water demand are characterized by 35040 values which are normalized such that the suface area under their 'curve' is 1/4. If the curves are later 'scaled' with the yearly demand for heat (in kWh), the resulting curve represents the instantaneous heat demand in kW for each 15 minute interval of the year.

Profiles also are characterised by a temperature (T_demand): that of the water thats is required to fulfill the demand. This temperature is fixed throughout the year. Currently we will fix these temperatures to 50 degrees for hot water and 35 degrees for space heating. Later, they can become flexible. 

## Technologies 

There are various technologies which can fill the buffer **or** heat the water to higher temperatures **after** it leaves the buffer. This is often needed as the buffer may cool down because heat is extracted from it and T_buffer falls below T_low.
Technologies are also characterised by an output temperature which determines their fitness for either the purpose of either filling the buffer or 'boosting' the water to higher temperatures between the buffer and its use (e.g., shower, tap)

The following is a first attempt at classification of heating technologies.

### Space heating

The buffer for space heating is heated by buffering technologies to 40 degrees.

|Technology|Output Temperature|Buffering|Boosting|Comments|
|---|---|---|---|---|
|households_space_heater_heatpump_air_water_electricity|15-95?|yes|no||
|households_space_heater_heatpump_ground_water_electricity|15-95?|yes|no||
|households_space_heater_hybrid_heatpump_air_water_electricity|15-95?|yes|no|the e-part|
|households_space_heater_hybrid_heatpump_air_water_gas|15-95?|no|yes|the gas-part|
|households_space_heater_network_gas|60?|no|yes||
|households_space_heater_combined_network_gas|60?|no|yes||
|households_space_heater_electricity|15 - 95?|yes?|yes|currently not inculded!|

The output temparatures of the above technologies are not well researched and therefore uncertain! The important part is if they are higher than T_high, they only have to be treated 'energetically' (i.e., without keeping track of their temperature, see below in the "Rules" section).

### Hot water

The buffer for hot water is heated by buffering technologies to 50 degrees.

|Technology|Output Temperature|Buffering|Boosting|Comments|
|---|---|---|---|---|
|households_water_heater_heatpump_air_water_electricity|15-95?|yes|no||
|households_water_heater_heatpump_ground_water_electricity|15-95?|yes|no||
|households_water_heater_hybrid_heatpump_air_water_electricity|15-95?|yes|no|the e-part|
|households_water_heater_hybrid_heatpump_air_water_gas|15-95?|no|yes|the gas-part|
|households_water_heater_network_gas|60?|no|yes||
|households_water_heater_combined_network_gas|60?|no|yes||
|households_water_heater_electricity|15-95?|yes?|yes|currently not inculded!|
|households_flexibility_p2h_electricity|15-95?|yes|no||


The output temparatures of the above technologies are not well researched and therefore uncertain!

## Rules

The following rules for behaviour of the technologies that work together to satisfy a demand hold:

1. If T_demand is higher than that of the buffer, additional technologies with an output temperature equal to or larger than T_demand are needed. They 'boost' the temperature of the water 'after' the buffer. If no such technologies are available, part of the demand will not be satisfied.
* If T_demand is lower than the temperature of the buffer or the technology which has boosted the temperature, only that energy is delivered by the technology (or the buffer) which is sufficient to reach T_demand. This is in fact a representation of the real situation where water that is too hot for the actual use is mixed with cold water to get the right volume of water with the right temperature. We call this the 'mixing regime' (see below).
* Technologies that fill up the buffer only start producing if T_buffer < T_low. 
* Technologies that fill up the buffer stop producing if T_buffer > T_high. 

## Mathematical relations

### Relations between volume, temperature and energy

The main relation between the energy (kWh) of a volume (liters) of water and its temperature (degrees Celsius) is:

```
E = C0 * V * (T - Tmin), 									(I)
```
where 

* V is the volume (liters)
* T is the temperature (degrees Celsius)
* T_min is the minimum temperature (in practice that of cold water, degrees Celsius)
* C0 is the heat capacity (specific heat) of water which is roughly 0.0011626 kWh / (liter * degree)

For a buffer with volume **V_b** and initial temperature **T_i**, the temperature drops if a volume **V_ext** of water is being heated by passing it through a heat exchanger inside the buffer. The final temperature **T_f** of the buffer (if not actively heated) is given by

```
T_f = T_min + (T_i - T_min) * Exp[ - (V_ext / V_b)],			(II)
```
where 

* T_min is the minimum temperature again

To find the volume of water that is needs to be heated (V_d), we can use Equation (I):

```
V_d = E_d / (T_d * C0),											(III)

```
where

* E_d is the heat demand in kWh
* T_d is the temperature of the heat demand (degrees Celsius)

### Other relations

The 'capacity' of the demand (in kW) is given numerically by the demand profile but the 'capacity' of the heat extracted by the water passing through the heat exchanger, C_d, can be expressed in physical variables as:

```
C_d(T_b) = C0 * (T_b - T_min) * (dV_d / dt),							(IV)
```
where the last part describes the flow speed of water (V_d).

The (heat-output) capacity of the heat pump can similarly be written as:

```
C_hp = C0 * deltaT * (dV_hp / dt),								(V)
```
where deltaT the temperature 'jump' made by the heat pump. This is the increase in temperature that the heat pump realises for the volume of water it heats.

## Regimes
There are four 'regimes' for the buffer that should be treated separately and in a specific order:

### The 'mixing' regime
Whenever the temperature of the buffer is higher than that of the demand (T_b > T_d), the water from the buffer heats the water in the heat exchanger (the demand water) which is then mixed with cold water to reach the correct temperature for showering etc.

If we are in this regime for the whole time-step, we can simplify all calculations because we only have to keep track of the exchange of energy.  The reason is that as long as T_b > T_d, the exact temperature of the buffer is irrelevant because there is not need to 'boost' it afterwards.

NOTE: If we are in this regime only part of the time-step, we need to take into account that not the total V_d needs to be heated by the buffer (some of V_d is mixed cold water which we don't model explicitly). 

In this regime we make the following simplifying assumption:

* the flow of water in the heat exchanger is adjusted to result in a constant heat (energy) exchange. This is realistic in the sense that the temperature and pressure of the water that come out of the shower remain constant. If, instead, We would keep the flow speed of the water through the heat exchange constant, the amount of cold water that needs to be mixed in declines over time and so would the pressure of the resulting flow of demanded water at T_d.

### The 'cooling' regime
When T_b < T_d and the buffer is cooling down from a temperature higher than T_low, the buffer only cools down and the temperature evolution is given by (II).

We assume the flow of water through the heat exchange to be constant. 

### The 'heating/cooling' regime
When T_b =< T_low, the heat pump starts heating the buffer. At the same time, the buffer is cooled down by the heat exchanger. This regime can lead to very complex behaviour. For example: the temperature of a small buffer drops below T_low and the heat pump very quickly heats it back up T_high. After which the buffer cools down again to T_b < T_low and the cycle repeats. This might happen several times inside a time step.

We apply the following simplification: 

* If C_hp > C_d(T_low), the buffer is kept constant at T_low, this results in a situation where all energy given to the water passing through the heat exchanger is delivered by the heat pump. 
* If C_hp < C_d(T_low), the temperature evolution of the buffer is calculated analytically.

### The 'heating' regime
The heat pump heats the buffer and no heat is extracted.

## Regimes within the time step  

Within a regular 15 minute time step (dt_15), the regimes described above follow each other. Not every regime is 'visited' in any time step. We now turn to calculating how much time each regime takes and what the E_ext, V_ext and T_ext are for each sub-step. We will also keep track of V_d (the volume of water that still needs to be heated), T_b (the instantaneous buffer temperature) and other relevant variables such as the remainder of the time, dt_left.

![Regimes](./regimes.png)

**Fig: 1**: *The different regimes for an example where T_d = 40. NOTE: the pure heating regime is not shown because it spans the same parameter space as the cooling/heating regime.*

### The 'mixing' regime
If T_b > T_d at the onset of the time step, we enter the mixing regime. If T_b < T_d, we enter the 'cooling' regime or the 'heating/cooling' regime (see below).

The time spent in the mixing regime depends on which happens first:

1. The total demand is satisfied (all kWh are accounted for)
* T_b drops below T_d

To check if case 1 applies, we must calculate how much energy can be extracted from the buffer (currently at T_i) before its temperature reaches T_d:

```
E(T_i - T_d) = C0 * V_b * (T_i - T_d)
```
**If** E(T_i - T_d) >= E_d we are done! 

This means that there is enough energy in the buffer **at a temperature higher than T_d** to fulfill all heat demand. 

Final state variables:

* E_ext = E_d
* V_ext = E_ext / (C0 * T_d)
* E_d = 0
* V_d = 0
* E_b = E_b - E_d
* T_b = E_b / (C0 * V_b) = T_d
* dt_left = 0

NOTE: It could be that T_d < T_low. In that case we will also have a heating regime. This will not happen normally and we might even prevent the user to set T_low > T_d as this does not make any practical sense.

If E(T_i - T_d) < E_d, we need to find out when (at what time) T_b == T_d. To do this we can use that during the whole time step, the capacity of the demand (the rate at which energy is consumed) is given by the demand profile. (NOTE: this is quite an arbitrary measure for that rate at which to extract heat. In reality this rate is limited by the rate at which the heat exchanger can efficiently heat a volume of water per unit time that passes through it. We can include such a physical capacity later without to much extra work.)

```
dt_mix = E(T_i - T_d) / C_d.
```
So, within dt_mix, the heat exchanger has given off E(T_i - T_d).

Final state variables:

* E_ext = E(T_i - T_d)
* V_cons = E_ext / (C0 * T_d) 
* V_d = V_d - V_cons
* E_d = E_d - E_ext (the remainder of the energy demand)
* E_b = E_b - E_ext
* T_b = E_b / (V_b * C0) = T_d
* dt_left = dt_15 - dt_mix
<!---* T_ext_average = E_ext / (C0 * V_ext)-->
<!---* V_ext = V_cons * (T_d - T_min) / (T_ext_average - T_min)-->

We go to the next regime.

### The 'cooling' regime
If T_b < T_d, we enter the cooling regime. 
If T_b < T_low, we immediately enter the 'heating/cooling' regime (see below).

So, if T_low < T_b < T_d, the water running through the heat exchanger cools the buffer with a constant flow of water (we assume this for simplicity) which is equal to V_d / dt_left. This stops when one of the following thing happens:

1. T_b == T_low
* All remaining water (V_d) has been heated to T_b (which varies!)

Because (2.) takes all of dt_left (by definition), we can check if T_b == T_low at any time within this time step

The cooling of the buffer in the 'cooling' regime is given by Eq. (II) so we can solve for which volume V' (the volume where T_f == T_low):

```
T_min + (T_i - T_min) * Exp[ - (V' / V_b)] = T_low,
```
which can be expressed as:

```
V' = V_b * Log((T_i - T_min) / (T_low - T_min)).
```
Here, 'Log' is the natural logarithm. Limiting cases of the equation are as follows:

* If T_i == T_min, V' = 0
* If T_i is infinitely high, V' is infinite as well (this is not a very instructive limit though)

#### Case 1: T_low is not reached
If V' > V_d, we never reach T_low and the rest of the time is spent in this regime.

T_f is given by Eq. (II) with V_d in the exponent:

```
T_f = T_min + (T_i - T_min) * Exp[ - (V_d / V_b)].
```
The energy extracted from the buffer is given by:

```
E_ext = C0 * V_b (T_i - T_f)
```
and

```
T_ext_average = E_ext / (C0 * V_d).
```

Because T_ext < T_d, we need a 'boosting' technology to boost the temperature of the water from the heat exchanger to T_d. This extra energy E_boost is given by:

```
E_boost = C0 * V_d * (T_d - T_ext_average).
```

Final state variables:

* E_ext = C0 * V_b (T_i - T_f)
* T_ext_average = E_ext / (C0 * V_d)
* V_ext = V_d
* V_d = V_d - V_ext = 0
* E_d = E_d - E_ext - E_boost = 0
* E_b = E_b - E_ext
* T_b = E_b / (V_b * C0)
* dt_left = dt_15 - dt_mix - dt_cool = 0

#### Case 2: T_low is reached
If V' < V_d, we do reach T_low and we need to go to calculate how much of our time we spend cooling. The time at which T_low is reached is given by

```
dt_cool = dt_left * V' / V_d,
```
which follows because we assume all V_d to pass through the heat exchanger in dt_left.

T_f is again given by Eq. (II) but now with V' in the exponent:

```
T_f = T_min + (T_i - T_min) * Exp[ - (V' / V_b)].
```
The energy extracted from the buffer is (again) given by:

```
E_ext = C0 * V_b (T_i - T_f)
```
and

```
T_ext_average = E_ext / (C0 * V').
```

Because T_ext < T_d, we need a 'boosting' technology to boost the temperature of the water from the heat exchanger to T_d. This extra energy E_boost is given by:

```
E_boost = C0 * V' * (T_d - T_ext_average).
```

Final state variables:

* E_ext = C0 * V_b (T_i - T_f)
* T_ext_average = E_ext / (C0 * V')
* V_ext = V'
* V_d = V_d - V_ext
* E_d = E_d - E_ext - E_boost = C0 * V_d * T_d
* E_b = E_b - E_ext
* T_b = E_b / (V_b * C0)
* dt_left = dt_15 - dt_mix - dt_cool

We now proceed to the next regime.

### The 'heating/cooling' regime

We enter this regime with T_i = T_low. Again we assume that T_d > T_low.
If we enter this regime with V_d > 0, we are going to spend the rest of the time step (the duration of dt_left) here. This means that we are going to pass water through the heat exchanger at a rate

```
dV_d / dt = V_d / dt_left.
```

Because the buffer is simultaneously heated and cooled, calculating T_b regime is less straightforward than in the previous regimes (see discussion above in the 'Regimes' section).
The evolution of T_b is given by the difference of the rate at which heat is added to the buffer (C_hp) and extracted (C_d) from it:

```
dT_b / dt = C_hp - C_d(Tb).
```
Note that C_d is a function of T_b (see (IV)). 


#### Case 1: C_hp > C_d

In this case, the heat pump is able to match the rate at which the heat exchanger extracts heat from the buffer. We assume that the temperature is kept constant at T_low (we could also choose T_high but this would complicate things). The extracted energy is now given by

```
E_ext = C_d(T_low) * dt_left.
```

The 'booster' technology should add more energy to reach the desired temperature:

```
E_boost = C0 * V_d * (T_d - T_low)
```

Final state variables:

* E_ext = C_d(T_low) * dt_left
* T_ext_average = E_ext / (C0 * V_d)
* V_ext = Vd
* V_d = V_d - V_ext = 0
* E_boost = C0 * V_d * (T_d - T_low)
* E_d = E_d - E_ext - E_boost = 0
* E_b = E_b
* T_b = E_b / (V_b * C0) = T_low
* dt_left = 0


#### Case 1: C_hp < C_d

Now the heat pump is not strong enough to keep the buffer at T_low. Because the capacity of demand C_d depends on the temperature (the lower T_b, the smaller the amount of heat that the exchanger can extract per unit time), there will be a temperature T_eq where the buffer would be in equilibrium after an infinite amount of time. Because this temperature is never reached, we calculate the temperature at the end of the time-step instead.

T_b as a function of time is given by:

```
T_b(t) = X + (T_i - X - T_min) * Exp(- R_d t / V_b) + T_min,
```
where

```
X = deltaT * R_hp / R_d,
```

and (R_hp = dV_hp/dt) and (R_d= dV_d/dt) are the rates at which the heat pump pumps water and the heat exchanger processes water respectively. Again we can use:

```
dV_d / dt = V_d / dt_left.
```

These equations gives us T_f after we substitute t = dt_left and T_i = T_low.

The energy extracted from the system is now the sum of what the buffer and the heat pump have delivered:

```
E_ext = C0 * V_b * (T_i - T_f) + C_hp * dt_left.
```

To find T_ext_average, we need to average T_b(t) over the duration of this regime:

```
T_ext_average = Integrate[T_b(t), {t, 0, dt_left}] / dt_left,
```

which evaluates to:

```
T_ext_average = X - T_min - V_b / V_d * (T_i - X - T_min) * (Exp[- R_d * dt_left / V_b] - 1).
```

The booster energy is:

```
E_boost = C0 * V_d * (T_d - T_ext_average)
```

Final state variables:

* E_ext = C0 * V_b * (T_i - T_f) + C_hp * dt_left
* T_ext_average = X - T_min - V_b / V_d * (T_i - X - T_min) * (Exp[- R_d * dt_left / V_b] - 1)
* V_ext = Vd
* V_d = V_d - V_ext = 0
* E_boost = C0 * V_d * (T_d - T_ext_average)
* E_d = E_d - E_ext - E_boost = 0
* E_b = C0 * V_b * (T_f - T_min)
* T_b = T_f
* dt_left = 0


### The 'heating' regime
We enter this regime whenever the demand has been fulfilled or if there has been no demand in this time step but T_b < T_low from the previous time step. Only the heat pump works to heat the buffer up to T_high. This may or may not succeed depending on the capacity of the heat pump and the time left in the time step, dt_left.

The heat added to the buffer:

```
E_added = C0 * deltaT * (dV_hp / dt) * dt_left = C_hp * dt_left
```

This raises the temperature to T_f:

```
T_f = T_i + E_added / (C0 * V_b)
```

or T_high if T_f > T_high.

Final state variables:

* E_b = E_b + E_added
* T_b = E_b / (V_b * C0)
* dt_left = 0

This concludes the time step.

## Warnings

The following situation should lead to a warning to the user:

* If there is no technology available that can produce the desired temperature (if T_demand > T_technology for all technologies)
* If part of the heat demand is not fulfilled (perhaps the heat demand and the heat production could be displayed in a plot)


## Example #1: E_d < E_b (T_b - T_low), T_d < T_low

In this example, the heat demand is less than what is contained in the part of the buffer which can be extracted without the temperature dropping below T_low. Also, the temperature of the demanded water is lower than T_low. This results in a situation where the buffer does not need to be filled in the time-step and there is no need for a 'boost' of the temperature. We only have the 'mixing' regime.

#### Setup:
* Domestic hot water buffer with size = 100 liters, T_min = 15, T_max = 90, T_low = 35, T_high = 50 (this leads to 8.7195 kWh storage volume)
* Connected to buffer: heat pump with capacity = 2 kW
* Connected 'to/after' buffer: gas burner with capacity = 80 kW, T_output = 80
* Hot water demand with T_d = 30 and E_d = 1.0 kWh

#### What happens:
* The buffer has been filled (by the heat pump) to 50 degrees (and thus contains 4.07 kWh)
* 1.74 kWh can be extracted from the buffer without reaching T_low (=35)
* Demand is 1.0 kWh at 30 degrees (T_d)
* At the temperature of 30 this amounts to 57.34 liter of water
* The buffer will not cool down below 35 in this time-step.
* The water from the buffer is warmer than that of the demand for the whole time-step.
* The 57.34 liter of water will simply extract E_d = 1.0 kWh from the buffer
* To heat the 57.34 liters to the desired temperature (30), will cool the buffer to 41.40 degrees
* The heat pump does nothing.


## Example #2: E_d < E_b (T_b - T_low), T_d > T_low

In this example, the heat demand is less than what is contained in the part of the buffer which can be extracted without the temperature dropping below T_low. The temperature of the demanded water (T_d) is higher than T_low, however.

#### Setup:
* Domestic hot water buffer with size = 100 liters, T_min = 15, T_max = 90, T_low = 35, T_high = 50 (this leads to 8.7195 kWh storage volume)
* Connected to buffer: heat pump with capacity = 2 kW
* Connected 'to/after' buffer: gas burner with capacity = 80 kW, T_output = 80
* Hot water demand with T_d = 50 and E_d = 1.0 kWh

