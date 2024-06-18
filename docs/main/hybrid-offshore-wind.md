---
title: Hybrid offshore wind
---

The hybrid offshore wind system consists of the following components:
-   Hybrid offshore wind turbines
-	Offshore electrolyser
-	Offshore electricity cable (transport from hybrid offshore wind turbines to HV network, as well as from HV network to the offshore electrolyser)
-	Offshore hydrogen pipeline (transport of hydrogen from offshore electrolyser to onshore hydrogen network)

The electricity output of the hybrid offshore wind turbines can be set in the [Wind turbines](https://energytransitionmodel.com/scenario/supply/electricity_renewable/wind-turbines) section. The relative capacities (in percentage) of the offshore electrolyser and electricity cable can be set in the [Flexibility](https://energytransitionmodel.com/scenario/flexibility/flexibility_net_load/hybrid-offshore-wind-components) section. The bar chart below can be consulted to immediality see the absolute installed capacities of the relevant components. 

<div className="images-row">
  <figure>
    <img 
        src="/img/docs/20240618_hybrid_offshore_wind_installed capacities.png" alt="Hybrid offshore wind capacity" width= '700' />
  </figure>
</div>

The behaviour of the different components is explained below. For detailed information on the technical configuration and method of hourly calculations, see the [Hybrid offshore hub](/contrib/hybrid-offshore-hub) page.

## Behaviour of components

### Wind turbine
Electricity produced by the hybrid offshore windturbines can either be transported to the HV network or to the offshore electrolyser for hydrogen production. The produced electricity that can be transported to the HV network is constrained by the installed capacity of the electricity cable and produced electricity that can be delivered to the electrolyser is constrained by the input capacity of the electrolyser. Produced electricity that cannot be transported over the electricity cable to the HV network due to capacity constraints will always be provided to the electrolyser (to the extent that the electrolyser's capacity allows). 

In case of excess electricity production, meaning when the capacity of the electrolyser is fully exploited and either the capacity of the electricity cable is fully exploited or onshore electricity demand is relatively low, excess production will be curtailed. However, if there is still unused capacity from the electrolyser, excess electricity production will always be provided to the electrolyser until fully exploited if this avoids curtailment of electricity.

### Electrolyser
The electrolyser is price-regulated, meaning that hydrogen will be produced when the electricity price is lower than the willingness to pay (WTP) of the electrolyser. The WTP can be set in the [Flexibility](https://energytransitionmodel.com/scenario/flexibility/flexibility_net_load/hybrid-offshore-wind-components) section. Also see [Willingness to pay](electricity-conversion#willingness-to-pay) for more information on this principe. The electricity input and hydrogen output are constrained by the electrolyser's capacity.

As described above, the electrolyser will always receive produced electricity from the hybrid offshore wind turbines that could otherwise not be transported to the HV network due to capacity constraints of the electricity cable. This behaviour is regardless of the electricity price.

The electrolyser will produce hydrogen when the electricity price is lower than the WTP of the electrolyser. Electricity for hydrogen production will first be received from the hybrid offshore wind turbine when there is remaining production. If there is still unexploited electrolyser capacity, electricity will be obtained from the onshore HV network for hydrogen production.

### Electricity cable
The offshore electricity cable allows for transport of electricity from the hybrid offshore wind turbine to the HV network, as well as transport from the HV network to the offshore electrolyser. For modelling purposes, this cable is modelled in the ETM as two units (offshore to onshore, onshore to offshore) with the same specifications. In reality, this would actually be one cable that allows bi-directional transport of electricity. The ETM assumes that no transport losses occur from electricity transport through the offshore cable. 

### Hydrogen pipeline
The offshore pipeline transports hydrogen from the offshore electrolyser to the onshore hydrogen pipeline network. The ETM assumes that new pipelines will be used (rather than refurbished natural gas pipelines) and assumes that no transport losses occur. 

## Energy flows
To get an overview of the results in annual energy flows between the components of the hybrid offshore wind system, there is a Sankey chart that visualises these energy flows: 

<div className="images-row">
  <figure>
    <img 
        src="/img/docs/20240618_hybrid_offshore_wind_energy_flows.png" alt="Hybrid offshore wind sankey" width='700'/>
  </figure>
</div>
