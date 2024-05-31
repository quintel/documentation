---
title: Hybrid offshore wind
---

The hybrid offshore wind system consists of the following components:
-   Hybrid offshore wind turbines
-	Offshore electrolyser
-	Offshore electricity cable (transport from hybrid offshore wind turbines to HV network, as well from HV network to the offshore electrolyser)
-	Offshore hydrogen pipeline (transport of hydrogen from offshore electrolyser to onshore hydrogen network)

The electricity output of the hybrid offshore wind turbines can be set in the [Wind turbines](https://energytransitionmodel.com/scenario/supply/electricity_renewable/wind-turbines) section. The relative capacities (in percentage) of the offshore electrolyser and electricity cable can be set in the [Hybrid offshore wind - relative capacities](https://energytransitionmodel.com/scenario/flexibility/flexibility_net_load/hybrid-offshore-wind-relative-capacities) section. This bar chart and connected table can be consulted to quickly see the absolute installed capacities of the relevant components. 

INSERT BAR CHART

The behaviour between the different components are explained below. For detailed information on the method of hourly calculations between the components of hybrid offshore wind, see the ADDPAGE page. 

## Behaviour of components

### Hybrid offshore wind turbine
Electricity produced by the hybrid offshore windturbines can either be transported to the HV network or to the offshore electrolyser for hydrogen production. The produced electricity that can be transported to the HV network is constraint by the installed capacity of the electricity cable and produced electricity that can be delivered to the electrolyser is constrained by the input capacity of the electrolyser. Produced electricity that cannot be transported over the electricity cable to the HV network due to capacity constraints will always be provided to the electrolyser (to the extent that the electrolyser capacity allows). 

In case of excess electricity production, meaning when the capacity of the electrolyser is fully exploited and either the capacity of the electricity cable is fully exploited or onshore electricity demand is relatively low, excess production will be curtailed. However, if there is still unused capacity from the electrolyser, excess electricity production will always be provided to the electrolyser until fully exploited if this avoids curtailment of electricity. 

### Offshore electrolyser
The electrolyser is price-regulated, meaning that hydrogen will be produced when the electricity price is lower than the willingness-to-pay (WTP) of the electrolyser. The WTP can be set in the [Hybrid offshore wind - relative capacities](https://energytransitionmodel.com/scenario/flexibility/flexibility_net_load/hybrid-offshore-wind-relative-capacities) section. The electricity input and hydrogen output are constrained by the electrolyser's capacity. 

As described above, the electrolyser will always receive produced electricity from the hybrid offshore wind turbines that could otherwise not be transported to the HV network due to capacity constraints of the electricity cable. This behaviour is regardless of the electricity price. 

The electrolyser will produce hydrogen when the electricity price is lower than the WTP of the electrolyser. Electricity for hydrogen production will first be received from the hybrid offshore wind turbine when there is remaining production. If there is still unexploited electrolyser capacity, the onshore HV network will provide electricity to the offshore electrolyser for hydrogen production. 

### Offshore electricity cable
The offshore electricity cable allows for transport of electricity from the hybrid offshore wind turbine to the HV network, as well as transport from the HV network to the offshore electrolyser. For modelling purposes, this cable is modelled in the ETM as two units (offshore to onshore, onshore to offshore) with the same specifications. In reality, this would actually be one cable that allows bi-directional transport of electricity. The ETM assumes that transport losses are involved for electricity transport through the offshore cable. 

### Offshore hydrogen pipeline
The offshore pipeline transports hydrogen from the offshore electrolyser to the onshore hydrogen pipeline network. The ETM assumes that new pipelines will be used (rather than refurbished natural gas pipelines) and assumes that no transport losses occur. 

## Energy flows
To get an overview of the results in annual energy flows between the components of the hybrid offshore wind system,there is a Sankey chart that visualises these energy flows: 

INSERT SANKEY
