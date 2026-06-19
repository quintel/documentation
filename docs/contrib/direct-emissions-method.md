---
title: Direct emissions method
---

The direct emissions method determines the greenhouse gas emissions of a scenario at the point where emissions are released. Go to [direct emissions](../main/direct-emissions.md) for more information about the general principles of this method. The current page gives the technical background of how the direct emissions method works. 

## Technical principles
The direct emissions method distinguishes methods for determining CO2 flows for **energy nodes**, as well as methods to determine reporting greenhouse gas emissions (CO2, other GHG and total GHG) calculated for both **energy nodes** and **molecule nodes**. These different methods are further explained below. 

Note that all of the direct emissions methods are only calculated for energy and molecule nodes that have the `emissions` group specified. All emissions are calculated in `kg CO2eq`.

## CO2 flow methods
The ingoing and outgoing CO2 flows depicted in the diagram below are calculated for **energy nodes**. The method calculates these flows for both fossil and biogenic CO2. These flows are the building blocks for calculating the reporting greenhouse gas emissions. The following subsections explain how each of the flows, indicated with letters A-E, are calculated. The method keys for querying the respective CO2 flow on nodes are provided as well.

![](/img/docs/direct_emissions_co2_flows_letters.png)
***Figure**. Incoming and outgoing CO2 flows of a technology.*

### CO2 content input carriers (A) 
This flow represents ingoing CO2 embedded in input carriers. The flow is calculated for each ingoing edge, multiplying the demand of that edge with the carrier's emission factor. 

```
A = Σ( input_edge.demand × carrier.co2_per_mj )
``` 
Method keys:  
`direct_co2_input_content_carriers_fossil`  
`direct_co2_input_content_carriers_biogenic`


### CO2 utilisation (B)
This flow represents used CO2 on the node, for example for production of synthetic transport fuels. The required CO2 is determined based on the useful output of a node multiplied with `co2_utilisation_per_mj`. Note that this is the only flow that is not calculated for biogenic CO2 as the ETM only has processes where non-biogenic carriers are produced from CO2 utilisation. 

```
B = Σ( edge.output ) × node.co2_utilisation_per_mj 
```
Method key:  
`direct_co2_input_utilisation_fossil`

### CO2 content output carriers (C)
This flow represents outgoing CO2 embedded in output carriers. The flow is calculated for each outgoing edge, multiplying the energy flow with the carrier's emission factor. 

```
C = Σ( output_edge.demand × carrier.co2_per_mj )
```
Method key:  
`direct_co2_output_content_carriers_fossil`  
`direct_co2_output_content_carriers_biogenic`

### CO2 capture (D)
This flow represents the amount of captured CO2 on the node. The flow is determined based on the gross produced CO2 and the `ccs_capture_rate` specified for that node. The gross produced CO2 is the difference between ingoing CO2 (embedded in input carriers `A` and CO2 utilisation `B`) and outgoing CO2 embedded in output carriers `C`.

```
co2_production = A + B - C
D = co2_production * ccs_capture_rate
```
Method keys:  
`direct_co2_output_production_capture_fossil`  
`direct_co2_output_production_capture_biogenic`

### CO2 emissions (E)
This flow represents the actual emitted CO2 and is the difference between the ingoing and outgoing CO2 flows described above. 

```
E = (A + B) - (C + D)
```
Method keys:  
`direct_co2_output_production_emissions_fossil`  
`direct_co2_output_production_emissions_biogenic`

## Reporting emission methods
The reporting greenhouse gas emission methods represent the relevant emissions that are typically reported by countries. These methods are used in the various user output for the direct emissions method (for example the data export). Note that these methods are queryable on both *energy nodes* and *molecule nodes*, but have a different implementation for these node types, which is further explained below.

Four reporting emission methods are distinguished (inlcuding method key for querying the method):
* CO2 production - `direct_reporting_emissions_co2_production`
* CO2 capture - `direct_reporting_emissions_co2_capture`
* Other GHG emissions - `direct_reporting_emissions_other_ghg_emissions`
* Total GHG emissions - `direct_reporting_emissions_total_ghg_emissions`

### CO2 production
This represents the gross produced fossil CO2, before potential CO2 capture. 

#### Energy node implementation
It is determined from ingoing fossil CO2 (A + B) minus outgoing fossil CO2 embedded in output carriers (C). See the equation including the reporting method key below. 

```
direct_reporting_emissions_co2_production = 
  direct_co2_input_content_carriers_fossil + 
  direct_co2_input_utilisation_fossil -
  direct_co2_output_content_carriers_fossil
```
#### Molecule node implementation
There are molecule nodes that represent statically modelled CO2 emissions in the ETM by reading these CO2 flows from the dataset-specific `emissions.csv`. The method determines CO2 production based on the flow going through such nodes that have input of `co2`.

### CO2 capture
This represents the capture of both **fossil** and **biogenic** CO2.

#### Energy node implementation
Summing fossil and biogenic captured CO2:

```
direct_reporting_emissions_co2_capture = 
  direct_co2_output_production_capture_fossil + 
  direct_co2_output_production_capture_biogenic
```

#### Molecule node implementation
It takes the CO2 demand of molecule nodes with group `ccus_captured`. Effectively, this means captured CO2 in industry (which is not modelled on the energy nodes), direct air capture and LULUCF CO2 removal are included. 

### Other GHG emissions
This flow represents other GHG emissions (for example CH4 and N2O), expressed in kg CO2-eq. It only has an implementation for molecule nodes as other GHG emissions are not dynamically calculated (note: it is queryable on energy nodes but always gives back zero). The method determines other GHG emissions based on the molecule nodes that have input of `other_ghg`, which is only the case for molecule nodes that read static emissions data from the `emissions.csv` file. 

### Total GHG emissions
This flow represents the total reporting GHG emissions. It is composed of the total gross CO2 production minus captured CO2 (which gives actual CO2 emitted) plus other GHG emissions. The implementation is the same for both energy and molecule nodes. 

```
direct_reporting_emissions_total_ghg_emissions = 
  direct_reporting_emissions_co2_production -
  direct_reporting_emissions_co2_capture +
  direct_reporting_emissions_other_ghg_emissions
```

## Complete list of method keys
Below is the complete list of the method keys already provided in the text above. 

*CO2 flow methods - fossil*:
```
direct_co2_input_content_carriers_fossil
direct_co2_input_utilisation_fossil
direct_co2_output_content_carriers_fossil
direct_co2_output_production_capture_fossil
direct_co2_output_production_emissions_fossil
```

*CO2 flow methods - biogenic*:
```
direct_co2_input_content_carriers_biogenic
direct_co2_output_content_carriers_biogenic
direct_co2_output_production_capture_biogenic
direct_co2_output_production_emissions_biogenic
```

*Reporting emission methods*:
```
direct_reporting_emissions_co2_production
direct_reporting_emissions_co2_capture
direct_reporting_emissions_other_ghg_emissions
direct_reporting_emissions_total_ghg_emissions
```
