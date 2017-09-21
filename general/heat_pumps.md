# Heat pumps

In 2017 improvements to the way heat pumps are modelled in the ETM have been implemented. These improvements include temperature dependency of the COP of heat pumps air and hybrid heat pumps and the addition of buffers for hot water and space heating. For hybrid heat pumps (HHP) the user can use sliders that determine when the HHP switches to gas. 

## Temperature dependency of COP
Heat pumps extract heat from air (HHP and heat pump air) or water (heat pump ground). The coefficient of performance (COP) is influenced by the temperature of the source from which heat is extracted. 

### Space heating - Heat pump air

**Space heating**

The temperature dependency of the COP of heat pumps air is based on research done by ECN and used by Ecofys in their report "Systeemkosten van warmte voor woningen" (<a href="#ref">Ecofys, 2015</a>).

The equation used is:

`  COP(T) = 3.25 + 0.0875 T     		(1)`

Where T is the ambient temperature.

![](../images/20170921_COP_space.png)

**Hot water**

The temperature dependency of the COP of heat pumps air is also based on research done by ECN and used by Ecofys in their report "Systeemkosten van warmte voor woningen" (<a href="#ref">Ecofys, 2015</a>).

The equation used is:

`  COP(T) = 1.86 + 0.043 T     		(2)`

Where T is the ambient temperature.

![](../images/20170921_COP_water.png)


More information about the sources behind specifications of heat pump ground can be found here: [Documentation heat pump air - space heating](https://github.com/quintel/etdataset/blob/master/nodes_source_analyses/households/households_space_heater_heatpump_air_water_electricity.converter.xlsx) and here: [Documentation heat pump air - hot water](https://github.com/quintel/etdataset/blob/master/nodes_source_analyses/households/households_water_heater_heatpump_air_water_electricity.converter.xlsx).

### Space heating - Hybrid heat pumps
For temperature dependency of COP of HHP's the same parameters are used as for heat pump air.

More information about the sources behind specifications of hybrid heat pumps ground can be found here: [Documentation hybrid heat pump - space heating](https://github.com/quintel/etdataset/blob/master/nodes_source_analyses/households/households_space_heater_hybrid_heatpump_air_water_electricity.converter.xlsx), and here: [Documentation hybrid heat pump - hot water](https://github.com/quintel/etdataset/blob/master/nodes_source_analyses/households/households_water_heater_hybrid_heatpump_air_water_electricity.converter.xlsx)



**Threshold-COP**

The COP of (hybrid) heat pumps is dependent of ambient temperature. When COP is low is can be desirable (for example for financial reasons) to only use the gas part of the hybrid heat pump. 
<p>
The default threshold COP represents using the electric part of the hybrid heat pump maximally for space heating and using gas for hot water. 

An other option is to *optimize the HHP financially* for the user. With the following assumptions:

- Gas price 0.065 euro/kWh
- Electricity price 0.22 euro/kWh
- Gas efficiency hot water = 0.9
- Gas efficiency space heating = 1.067,

this leads to cut off COP's of:

- Cut-off COP hot water = 3.05
- Cut-off COP space heating = 3.61 `


### Space heating - Heat pump ground
The COP of heat pump ground is independent of the ambient temperature. The temperature of the reservoir in the ground from which the heat pump extracts heat is considered constant.

More information about the sources behind specifications of heat pump ground can be found here: [Documentation heat pump ground - space heating](https://github.com/quintel/etdataset/blob/master/nodes_source_analyses/households/households_space_heater_heatpump_ground_water_electricity.converter.xlsx)

## Buffers
In the ETM all heat pumps have the option to install buffer for space heating and a buffer for hot water. 

The default settings of these buffers represent a common setup of heat pumps in households. However, in the future these buffers might also be used to store larger amounts of heat. 

### Heat pump air and heat pump ground
Currently most heat pumps (air) are installed without a buffer for space heating. Most heat pumps (air) require a buffer to prevent unnecessarily frequent on and off switching of the compressors. In the default settings of the ETM the buffer for hot water takes care of this.

In the current situation the hot water buffer represents a tank of 100 liter (which is typical for a Dutch household) and has a storage capacity of 5 kWh.

In the future buffers can also be used to store larger amounts of heat.

### Hybrid heat pump
Most hybrid heat pumps are self-regulating. They don't need a buffer to protect the compressor.

With the default settings the hybrid heat pump supplies hot water with gas. In that case a buffer for hot water is not needed.
By lowering the threshold COP the electric part of the hybrid heat pump can also supply hot water. In that case it is advised to install a buffer for hot water (typically 5 kWh).

## References
- Ecofys, 2015: [Systeemkosten van warmte voor woningen](https://refman.energytransitionmodel.com/publications/2063)

