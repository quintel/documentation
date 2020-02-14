# Industrial residual heat

There's a lot of heat available in industry that currently goes to waste. Using this residual heat as a source for heat networks could be an interesting way to reduce emissions. In the ETM it is now possible to re-use residual heat from the sectors below:

-   Chemical industry
-   Refineries
-   Fertilizer industry
-   ICT

The above sectors are chosen because of their high residual heat potential compared to other sectors and/or because these sectors are similarly modelled in the ETM.

User can choose with [sliders](https://beta-pro.energytransitionmodel.com/scenario/supply/heat/heat-sources) what part of available heat they want to re-use in heat networks.

![](../images/residual_heat_industry_sliders.png)

## Determinig available residual heat 

### Chemical industry, refineries and fertilizer industry

The available residual heat from chemical industry, refineries and fertilizer industry is determined for each region based on the report [Potentiëlen, besparing, alternatieven (ECN, 2011)](https://publicaties.ecn.nl/ECN-E--11-058). In this report for different sectors the residual heat availability is depicted. 

![dfa](../images/residual_heat_industry_ECN_report_table.png)

Several types of residual heat are distinguished in the report. We have chosen to only model two types in the ETM: heat from flue gasses and heat from processes.

### ICT

The potential of residual heat from datacenters is calculated with the same method that [Berenschot](https://www.berenschot.nl/actueel/2018/november/410-kton-co2-besparing/) used determining the residual heat potential of Dutch datacenters.

## Modelling principals

Residual heat in the ETM originates from the useful demand nodes. The demand of the 'useful demand' nodes for each industry sub sector gives a good approximation of the available residual heat that currently goes 'unused'. This useful demand may change in the future, depending on the user's choices in a scenario regarding industry size, efficiencies etc. Based on the reports above we have determined potential shares of residual heat (the calculation can be found [here](https://refman.energytransitionmodel.com/publications/2108))

|                                | Chemical industry | Refineries       | Fertilizer industry | ICT                     |
|--------------------------------|-------------------|------------------|---------------------|-------------------------|
|                                | % of heat demand  | % of heat demand | % of heat demand    | % of electricity demand |
| Residual heat from flue gasses | 11%               | 18%              | 3%                  |                         |
| Residual heat from processes   | 16%               | 29%              | 4%                  |                         |
| Residual heat from servers     |                   |                  |                     | 77%                     |
| Heat that cannot be recoverd   | 73%               | 53%              | 94%                 | 23%                     |
