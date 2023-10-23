---
title:  Industrial residual heat
---

There is a lot of heat available in industry that currently goes to waste. Using this residual heat as a source for heat networks could be an interesting way to reduce emissions. 

The ETM allows you to specify the amount of residual heat (in PJ) that the industry as a whole provides to heat networks. You can manually set the amount of heat delivered to each temperature level (high-temperature, medium-temperature and low-temperature) in the Supply > ['District Heating'](https://pro.energytransitionmodel.com/scenario/supply/heat/heat-sources) section within the ETM.

![](/img/docs/residual_heat_district_heating_slider.png)

## Determining residual heat potential

Although the upper limit of the residual heat sliders is quite high, in reality the residual heat needs to be delivered by one or more sectors of industry. The ETM calculates the potentially available residual heat for the following industries:

-   Chemical industry
-   Refineries
-   Fertilizer industry
-   ICT
-   Hydrogen conversion of electricity via power-to-gas

The above sectors are chosen because of their high residual heat potential compared to other sectors and/or because these sectors are similarly modelled in the ETM.

### Chemical industry, refineries and fertilizer industry

The available residual heat from chemical industry, refineries and fertilizer industry is determined for each region based on the report [Potentiëlen, besparing, alternatieven (ECN, 2011)](https://publicaties.ecn.nl/ECN-E--11-058). In this report for different sectors the residual heat availability is depicted.

![dfa](/img/docs/residual_heat_industry_ECN_report_table.png)

Several types of residual heat are distinguished in the report. However, the ETM adds up all available types and only shows the total potential of residual heat.

### ICT

The potential of residual heat from data-centers is calculated with the same method that [Berenschot](https://www.berenschot.nl/actueel/2018/november/410-kton-CO<sub>2</sub>-besparing/) used determining the residual heat potential of Dutch data-centers.

## Modelling principals

Residual heat in the ETM originates from the useful demand nodes. The demand of the 'useful demand' nodes for each industry sub sector gives a good approximation of the available residual heat that currently goes 'unused'. This useful demand may change in the future, depending on you choices in a scenario regarding industry size, efficiencies etc. Based on the reports above the potential shares of residual heat were determined as follows: (the calculation can be found [here](https://refman.energytransitionmodel.com/publications/2108))

|                                   | Chemical industry | Refineries       | Fertilizer industry | ICT                     |
|-----------------------------------|-------------------|------------------|---------------------|-------------------------|
|                                   | % of heat demand  | % of heat demand | % of heat demand    | % of electricity demand |
| Residual heat from flue gasses    | 11%               | 18%              | 3%                  |                         |
| Residual heat from processes      | 16%               | 29%              | 4%                  |                         |
| Residual heat from servers        |                   |                  |                     | 77%                     |
|**Total available residual heat**  | **27%**           | **47%**          | **7%**              | **77%**                 |
| Heat that cannot be recovered     | 73%               | 53%              | 94%                 | 23%                     |