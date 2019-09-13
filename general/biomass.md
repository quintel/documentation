# Biomass

There is a growing interest in using biomass as energy carrier, for instance for heat production, electricity production, transport fuel or as a feedstock for the chemical industry. However, biomass is often grown at the expense of food crops and stimulates deforestation. Careful consideration is required when using large amounts of biomass. The modelling of biomass streams in the ETM has been updated in 2019 in close collaboration with Gasunie, GasTerra, TKI Nieuw Gas and TNO. TNO has supported this project by researching all required data.

Modelling principals
------------

There are many different biomass resource streams; too many to model each one individually. Therefore we have chosen to distinguish these four biomass categories:
-   **Wet biomass**: residues from the food and beverage industry, agricultural residual streams, sewage sludge, aquatic biomass, cultivated grain products, etc. 
-   **Dry biomass**: residual streams from forestry (tree tops, stumps, bark, branches), recycled waste wood, residual streams from agriculture (straw), and fast-growing bio-energy crops (elephant grass, willow, poplar)
-   **Oil-containing biomass**: rapeseed, sunflower seeds, oil palm, used frying fats. 
-   **Biogenic waste**

TNO researched the potential of each biomass country for each country modelled in the ETM. When biomass demand exceeds this potential, then biomass will be imported from outside the region. For the Netherlands TNO researched the potentials in great detail. The potentials of over 30 biomass streams have been quantified. 

Biomass can be used in different places throughout the model: 
- as green gas in the gas network
- in biomass heaters for (local) heat networks
- as transport fuel: bio-ethanol, biodiesel, bio-LNG and biokerosene
- as co-firing in coal plants
- as biocoal or bio-oil in power plants
- to produce hydrogen through gasification

The conversion from biomass resources into biofuels can be 




Charts

Specs

Input data
------------

The ETM allows users to set maximum biomass potentials for each biomass category. 

### Dutch biomass potential

Tabelletje met totale potentie

Excel toevoegen?!

| Sector                                                                      | Biomassastroom                          | Categorie | Potentie PJ \(droge stof basis\) | Verdeelsleutel van nationale naar gemeentelijke potentie                                  |
|-----------------------------------------------------------------------------|-----------------------------------------|-----------|----------------------------------|---------------------------------------------------------------------------------------|
| Voedings- en genotmiddelenindustrie                                         | Frituur en restvettten                  | vet       | 10\.5                            | Bevolking                                                                             |
|                                                                             | Natte stromen VGI                       | nat       | 6\.5                             | Cultuurgrond \- Blijvend grasland                                                     |
| RWZI/AWZI\-slib                                                             | Slib RWZI                               | nat       | 3\.52                            | Bevolking                                                                             |
|                                                                             | Slib AWZI                               | nat       | 1\.353                           | Cultuurgrond \- Blijvend grasland                                                     |
|                                                                             | Slib verbrand                           | afval     | 3\.39526                         | Bevolking                                                                             |
| Agrarische reststromen                                                      | Drijfmest                               | nat       | 25                               | Melkkoeien  \+ Varkens                                                                |
|                                                                             | Droge mest                              | droog     | 8\.8                             | Melkkoeien  \+ Kippen                                                                 |
|                                                                             | Stro                                    | droog     | 2\.6                             | Granen \(are\)                                                                        |
|                                                                             | natte gewasresten                       | nat       | 11                               | Akkerbouwgroenten                                                                     |
| Groente\-, Fruit\- en Tuinafval & Organische natte Fractie \(GFT en ONF\) | GFT                                     | nat       | 8\.7                             | Bevolking                                                                             |
|                                                                             | ONF in afval \(nat\)                    | nat       | 1\.8                             | Bevolking                                                                             |
|                                                                             | ONF in afval \(afval\)                  | afval     | 3\.6864                          | Bevolking                                                                             |
|                                                                             | Zeefoverloop                            | droog     | 0\.728                           | Bevolking                                                                             |
| Droge biomassa                                                              | Resthout uit houtverwerkende industrie  | droog     | 5\.32                            | Bevolking                                                                             |
|                                                                             | afvalhout                               | droog     | 19\.76                           | Bevolking                                                                             |
|                                                                             | afvalhout particulier                   | droog     | 2                                | Bevolking                                                                             |
|                                                                             | Papierresiduen                          | afval     | 2\.3                             | Bevolking                                                                             |
|                                                                             | Papier in afval                         | afval     | 12                               | Bevolking                                                                             |
| Nederlandse productiebossen                                                 | Productiebos                            | droog     | 3\.2                             | Bos \(ha\)                                                                            |
|                                                                             | Productiebos particulier                | droog     | 4                                | Bevolking                                                                             |
|                                                                             | Korte omloop bomen                      | droog     | 0\.000855                        | Totaal agrarisch terrein                                                              |
|                                                                             | Korte omloop bomen \(bijschatting TNO\) | droog     | 0\.38                            | Totaal agrarisch terrein                                                              |
|                                                                             | Import/onbekend particulier             | droog     | 2                                | Bevolking                                                                             |
| Natuur en landschapsbeheer                                                  | Hout van fruit\- en boomteelt           | droog     | 0\.396                           | Totaal agrarisch terrein                                                              |
|                                                                             | Hout uit landschap                      | droog     | 4\.752                           | Totaal gemeentelijke en waterschapswegen \(km\) \+ Park en plantsoen \(ha\)           |
|                                                                             | Tuin/landbouw/openbaar groen            | droog     | 7                                | Bevolking                                                                             |
|                                                                             | natuurgras\+bermgras                    | nat       | 5                                | Totaal gemeentelijke en waterschapswegen \(km\) \+ Bos \(ha\)                         |
|                                                                             | Heide                                   | droog     | 0\.023375                        | Open droog natuurlijk terrein                                                         |
| Aquatische biomassa                                                         | Riet en andere waterplanten             | nat       | 18                               | Open nat natuurlijk terrein \+ Recreatief binnenwater \+ Overig binnenwater           |
|                                                                             | Microalgen                              | nat       | 1\.5                             | Totaal agrarisch terrein                                                              |
|                                                                             | Zeewier                                 | nat       | 12                               | Bevolking                                                                             |
| Energieteelt                                                                | Totale natte energieteelt               | nat       | 3\.5                             | Totaal agrarisch terrein                                                              |
|                                                                             | Totale droge energieteelt               | droog     | 1\.2                             | Totaal agrarisch terrein                                                              |
|                                                                             | Grassoorten op zoute grond              | nat       | 12                               | Noord Beveland 10% Veere 20% Vlissingen 10% Middelburg 10% Texel 10% Het Hogeland 40% |
