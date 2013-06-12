### Profile specifications - how to make a 'good' profile for volatile participants

#### Purpose 
Collecting and documenting knowledge on how to build profiles for wind, solar, hydro etc. 
#### How to make a profile

**Research Data**. A profile should be based on actual measurement data. For volatile participants, this is usually the energy carrier that is exploited by the converter, e.g. wind speeds, light intensities, water flow. 
If possible, data from different locations (but the same year) is combined. The wind profiles that we use in the ETM are based on about 4 measurement curves. Combining more curves leads to more smooth and less peaked profiles. A smoother profile will also be characterized by more full load hours. 
(Note: do not average that data yet). 

**Convert primary energy into el. output**. For each dataset, calculate the electricity output of the converter. This is done by applying conversion laws and efficiencies  (including for example, cut-in, cut-out speeds in case of wind, or peak-power in case of solar cells). 

**Average power output**: Now, the electricity output can be averaged. (We average over distributed power generation output, not over distributed wind speeds or river flow). 

**Normalize**: The averaged profile is normalized vertically so that the area under the profile is equal to 1/3600. Normalization is a hard constraint, it should be double-checked before a profile is included in the model. 
Normalization ensures that the participant will produce the correct amount of MWh/year in merit order. This annual energy output is given by research data (effective capacity/unit and full load hours) and the user choices (number of units). 

**Save as Windows-CSV**: If the profile should be readable for the et-engine, it has to be saved in a CSV file that has windows-style newline commands. In Excel, you need to save the profile as "Windows Comma Separated (.csv)". 

##### The profile *"should"* also reflect the Full Load Hours of the participant 
A profile has an intrinsic full load hour characteristic that is described by 
*Full Load Hours (profile) = Total(profile) / Max(profile)*. 
It might conflict with the ETM dataset: If wind turbines with a nameplate capacity of 3 GW are installed, it should not happen that the merit order will run them at 5 GW in certain hours of the year. (this can be caused by the shape of the profile. Especially at little full load hours, the peaks may exceed installed generation capacity)
This problem can only be avoided if the full load hours of the ETM and the profile match (see below). 
Unfortunately, the FLH(profile) can only be changed by *messing around* with the research data: A profile is made from measurements and converted into electric output by a physical law. Officially, there is no 'freedom' of shaping the profile so that the peaks match the maximum allowed power production. 
This is the reason why, for example, the hub height is changed in the wind profile generation. Technically, the wind speeds are scaled down by lowering the hub height, but there is no other way of making the full load hours fit. 

***FLH(profile) = FLH(ETM)***
The maximum power output of the respective participant matches exactly to the installed capacity. 

***FLH(profile) > FLH(ETM)***
This means that the participant always runs below nameplate capacity (e.g. solar PV in the Netherlands).

***FLH(profile) < FLH(ETM)***
The merit order will calculate a max power generation that is above the installed capacity. 

##### Reasoning of why any profile should reflect the Full Load Hours of the participant
*Full Load Hours (ETM)* is a figure defined in the ETM dataset
*Full Load Hours (profile)* is determined only by the shape of the profile: 
*Full Load Hours (profile) = Total(profile) / max(profile)*.        **[1]**

###### Claim: The hourly power output can never surpass the installed nameplate capacity!
This translates into: 

*Number of Units * Effective Capacity ≧ Max(profile) * 3600 * Number of Units * Effective Capacity * Full Load Hours (ETM)*.         **[2]**

The left side of the equation is the installed nameplate capacity. The right side of the equation is the maximum power output that can occur in the merit order 'load calculation'. Both sides equate to the unit of MW. 

[2]--> *1 ≧ Max(profile) * 3600 * Full Load Hours (ETM)*

with [1] and Total(profile) = 1/3600, this becomes

[2]--> *Full Load Hours (profile) * 3600 * max(profile) ≧ Max(profile) * 3600 * Full Load Hours (ETM)*

--> *Full Load Hours (profile) ≧ Full Load Hours (ETM)*

This means that the Full Load Hours specified in ETM may never exceed the Full Load Hours of the profile (can easily happen for wind and even buildings_CHP). Of course, *Full Load Hours (profile) > Full Load Hours (ETM)* is possible. It just means that the participant always runs below nameplate capacity (e.g. solar PV in the Netherlands).
