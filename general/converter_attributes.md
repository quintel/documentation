# Converter attributes

Every converter has attributes defined, which describe the properties of the converter, so these can be used to make certain calculations. Most of the attributes are made specifically for one type of calculation. The most important calculations are the cost and network calculations.

Cost attributes
---------------

1.  typical\_input\_capacity
2.  economic\_lifetime
3.  full\_load\_hours
4.  output\_share\_electricity
5.  output\_share\_heat
6.  fixed\_operation\_and\_maintenance\_cost\_per\_mw\_input
7.  operation\_and\_maintenance\_cost\_variable
8.  wacc
9.  construction\_time
10. residual\_value\_per\_mw\_input
11. decommissioning\_costs\_per\_mw\_input
12. purchase\_price\_per\_mw\_input
13. installing\_costs\_per\_mw\_input
14. average\_effective\_output\_of\_nominal\_capacity\_over\_lifetime

Network attributes
------------------

1.  network\_capacity\_available\_in\_mw
2.  network\_capacity\_used\_in\_mw
3.  network\_expansion\_costs\_in\_euro\_per\_mw
4.  simult\_sd
5.  simult\_se
6.  simult\_wd
7.  simult\_we
8.  peak\_load\_units\_present
9.  availability
10. variability

||unit|used for|description|
|---|---|---|---|
|typical\_input\_capacity|MW|[Cost calculations](cost_calculations.md)|The amount of input the converter can process.|
|economic\_lifetime|year|[Cost calculations](cost_calculations.md)|The time over which the investments are written off.|
|full\_load\_hours|hour per year|[Cost calculations](cost_calculations.md)|The number of hours the converter runs at full capacity. This may not be the same as the number of operation hours, as it may not always run at full load.|
|fixed\_operation\_and\_maintenance\_cost\_per\_mw\_input|euro per year|[Cost calculations](cost_calculations.md)|The costs for operation & Maintenance calculated back to costs per MW of input capacity.|
|operation\_and\_maintenance\_cost\_variable|euro per full load hour|[Cost calculations](cost_calculations.md)|The costs for operation & Maintenance calculated back to costs per number of hours the converter runs at full capacity.|
|wacc|%|[Cost calculations](cost_calculations.md)|[Weighted average cost of capital](http://en.wikipedia.org/wiki/Weighted_average_cost_of_capital).|
|construction\_time|year|[Cost calculations](cost_calculations.md)|The number of years needed to build/install the converter.|
|residual\_value\_per\_mw\_input|euro/MW|[Cost calculations](cost_calculations.md)|The value of the converter at the end of its economic lifetime.|
|decommissioning\_costs\_per\_mw\_input|euro/MW|[Cost calculations](cost_calculations.md)|The costs required to take the converter out of commission.|
|purchase\_price\_per\_mw\_input|euro/MW|[Cost calculations](cost_calculations.md)|The purchase costs for material and equipment calculated back to costs per MW of input capacity.|
|installing\_costs\_per\_mw\_input|euro/MW|[Cost calculations](cost_calculations.md)|The labor costs of installing the converter calculated back to costs per MW of input capacity.|
|output\_share\_electricity|%|[Cost calculations](cost_calculations.md)|This is defined in the link of the converter, and states how efficient the electricity production is.|
|output\_share\_heat|%|[Cost calculations](cost_calculations.md)|This is defined in the link of the converter, and states how efficient the heat production is.|
|network\_capacity\_available\_in\_mw|MW|[Network\_calculations](network.md)||
|network\_capacity\_used\_in\_mw|MW|[Network\_calculations](network.md)||
|network\_expansion\_costs\_in\_euro\_per\_mw|euro/MW|[Network\_calculations](network.md)||
|simult\_sd|%|[Network\_calculations](network.md)||
|simult\_se|%|[Network\_calculations](network.md)||
|simult\_wd|%|[Network\_calculations](network.md)||
|simult\_we|%|[Network\_calculations](network.md)||
|peak\_load\_units\_present|1.  |[Network\_calculations](network.md)||
|availability|%|[Network\_calculations](network.md)||
|variability||[Network\_calculations](network.md)||

Adding a new Converter attribute
--------------------------------

To add a new converter attribute you must add it to the list of the attributes handled by the xls2yml export script in ETSOURCE/scripts/xls2yml/lib/converter\_exporter.rb and assign it to an attribute group in ETENGINE/app/models/converter\_api.rb
