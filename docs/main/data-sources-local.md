---
title: Regionale data in het ETM
---

_Note: Regional data (ET-local) is currently only available in Dutch, this information is therefore provided in Dutch._

Op deze pagina staat een overzicht van de gebruikte data voor de Nederlandse gemeenten, (RES-)regio's en provincies in het Energietransitiemodel. De standaard databronnen, aannames en methoden staan op deze pagina beschreven. Per regio kan hiervan worden afgeweken op basis van lokale informatie. De actuele stand van zaken per regio is te vinden op de [ETM Data Manager](#data-manager). Deze data wordt door het gehele model gebruikt om het startpunt van een scenario te bepalen.

## Huishoudens
|  | Bron  | Opmerking  | KM code(s) | KM onderwerp(en) |
|---|---|---|---|---|
|  ***Eindgebruik***  |  |  |  |  |
|  Aardgas | Klimaatmonitor  | Let op het ETM gebruikt de niet-temperatuurgecorrigeerde data  | gaswoningen | Totaal gasgebruik woningen |
|  Elektriciteit | Klimaatmonitor  | Inclusief 'zonnestroom gebruik achter de meter woningen'   | el_woningen_incl_zonachtermeter | Totaal elektriciteitsgebruik woningen (incl. zonnestroom achter de meter)|
|  Collectieve warmte | Klimaatmonitor  | 'Stadswarmte woningen (niet-temperatuurgecorrigeerd)'  | warmwontier2 | Stadswarmte woningen (schatting, tier 2) |
|  Biomassa | Klimaatmonitor  | 'Houtkachels woningen' en 'Houtskool') | houtwontj + houtskool | Houtkachels woningen hern. warmte, Houtskool hern. warmte (tier 1)|
||
|  ***Opwek***   | |  |
|  Zon | Klimaatmonitor (bewerking) | 'Zonnestroom (tier 1)'. We splitsen dit uit naar zon op dak voor huishoudens, zon op dak voor bedrijven en zonneparken op basis van 'Vermogen geregistreerde zonnepanelen woningen/bedrijven/veld- of drijvende opstelling') |

## Gebouwen (utiliteitsbouw)
|   | Bron  | Opmerking  |KM code(s) | KM onderwerp(en) |
|---|---|---|---|---|
|  ***Eindgebruik***   |  |  |  |  |
|  Aardgas | Klimaatmonitor  | Som van publieke en commerciële dienstverlening  |   gascomdv + gaspubldv | Gasgebruik Commerciële Dienstverlening, Gasgebruik Publieke Dienstverlening |
|  Elektriciteit | Klimaatmonitor (bewerking)  | Som van publieke en commerciële dienstverlening, met een aantal bewerkingen: <ul><li>Inclusief 'zonnestroom gebruik achter de meter'</li><li>We schatten het verbruik van elektrische laadpalen o.b.v het aantal elektrische voertuigen in een regio. Dit verbruik trekken we af van de dienstensector en tellen we op bij de transportsector.</li><li>Hetzelfde doen we voor treinen, trams en metro's op basis van het aantal (trein)reizigers per gemeente/regio</li><li>Het verbruik van de ICT-sector (SBI J) verplaatsen we naar de industrie</li></ul> De reden voor deze bewerkingen is dat het ETM zo nauwkeurig mogelijk in kaart probeert te brengen met welk doel energie uiteindelijk gebruikt wordt. Zodat de gebruiker vervolgens aannames kan doen in het model over hoe dit in de toekomst gaat veranderen. Laadpalen vallen statitisch gezien onder de dienstensector, maar voorzien in een mobiliteitsbehoefte.   | elpubldv + elcomdv - elektrpers - ovintrein - ovinovov - energie_j | Elektriciteitsgebruik Publieke Dienstverlening, Elektriciteitsgebruik Commerciële Dienstverlening, Aantal geregistreerde elektrische personenauto's (FEV en PHEV), Gereisde kilometers trein, Gereisde kilometers bus/tram/metro,  Energiegebruik Informatie en communicatie (SBI J)|
|  Collectieve warmte | Klimaatmonitor  | O.a. 'WKO utiliteitsbouw'. Zie [warmte](#warmte)   |  |  |
|  Biomassa | Klimaatmonitor  | Zie [warmte](#warmte) |    |  |
||||
|  ***Opwek***   | |  |   |  |
|  Zon | Klimaatmonitor (bewerking)  | Zie huishoudens  |     |  |

## Transport
|  | Bron  | Opmerking  | KM code(s) | KM onderwerp(en) |
|---|---|---|---|---|
|  ***Eindgebruik***   |  |  |  |  |
|  Diesel (wegverkeer) | Klimaatmonitor  | 'Energiegebruik wegverkeer totaal (diesel, benzine, LPG en aardgas)' en 'energiegebruik mobiele werktuigen'. Dit is inclusief verbruik op snelwegen. We splitsen deze gegevens uit naar energiedrager (diesel, bezine, LPG en aardgas) op basis van de door Klimaatmonitor gerapporteerde CO<sub>2</sub>-uitstoot van diesel-, benzine-, LPG- en aardgasvoertuigen in een regio. Voor diesel en benzine houden we rekening met bijmening van biobrandstoffen ('biobrandstoffengebruik in wegverkeer' en 'biobrandstoffengebruik mobiele werktuigen')  | energie_wegverk_tot + energie_mobwerk, bio_verkeertj, bio_mobwerk_tj| Energiegebruik wegverkeer totaal (diesel, benzine, LPG en aardgas), Energiegebruik mobiele werktuigen (diesel, benzine en LPG), Biobrandstoffengebruik in wegverkeer, Biobrandstoffengebruik mobiele werktuigen   |
|  Benzine (wegverkeer) | Klimaatmonitor  | Zie diesel  |  |  |
|  LPG (wegverkeer) | Klimaatmonitor  | Zie diesel  |  |  |
|  Aardgas (wegverkeer) | Klimaatmonitor  | Zie diesel  |  |  |
|  Elektriciteit (wegverkeer) | Quintel / Klimaatmonitor  | Klimaatmonitor heeft geen directe verbruiksdata maar wel het aantal elektrische auto's (FEV en PHEV), bussen, vrachtwagens en bromfietsen per regio. We schatten het elektriciteitsverbruik van deze voertuigen op basis van kentallen (gemiddelde/typisch verbruik per voertuigtype). Bij Klimaatmonitor is dit verbruik onderdeel van het elektriciteitsgebruik van de huishoud/dienstensector. Om dubbeltelling te voorkomen verminderen we daarom het elektriciteitsgebruik van de gebouwen/dienstensector.  | elektrpers, wbelek, bedrautoelek, wbfelek| Aantal geregistreerde elektrische personenauto's (FEV en PHEV), Aantal geregistreerde elektrische bussen, Aantal geregistreerde elektrische bedrijfsauto's, Aantal geregistreerde elektrische bromfietsen (incl. speed pedelecs) |
| Waterstof (wegverkeer) | Quintel / Klimaatmonitor | Net als voor elektriciteit heeft Klimaatmonitor geen verbruiksdata, maar wel het aantal waterstof auto's, bussen en vrachtwagens per regio. We schatten de verbruikte waterstof op basis van kentallen (gemiddelde/typisch verbruik per voertuigtype). | p_auto_h2, b_auto_h2, bus_h2,wbz_h2 | Personenauto's op waterstof (H2), Bedrijfsauto's op waterstof (H2,Bussen op waterstof (H2), Zware bedrijfsauto's op waterstof (H2) |
| Elektriciteit (railverkeer) | Quintel | Geen regionale gegevens beschikbaar. We schatten het regionale verbruik op basis van reizigersaantallen per gemeente. We verminderen het elektriciteitsgebruik in de gebouwen/dienstensector (SBI H - vervoer en opslag) om (mogelijke) dubbeltelling te voorkomen. |  |  |
| Diesel (railverkeer) | Klimaatmonitor | 'Energiegebruik railverkeer (alleen diesel)' | energie_rail  | Energiegebruik railverkeer (alleen diesel) |
| Diesel (scheepvaart) | Klimaatmonitor | 'Energiegebruik zeescheepvaart en visserij' en 'Energiegebruik binnen- en recreatievaart' |  energie_zeevaart + energie_binnenvaart | Energiegebruik zeescheepvaart en visserij (diesel en stookolie), Energiegebruik binnen- en recreatievaart (diesel en benzine) |
||
|  ***Overig***   |  |  |   |  |
| Aantal fietskilometers | Quintel / Klimaatmonitor| Geen informatie beschikbaar op gemeenteniveau. We verdelen het totaal aantal fietskilometers in Nederland (Klimaatmonitor) onder op basis van het aantal inwoners per gemeente. We nemen aan dat 16% van deze kilometers met een elektrische fiets afgelegd worden ([Nederlands gemiddelde 2017](https://fietsberaad.nl/Kennisbank/Elektrische-fiets-goed-voor-2-procent-van-alle-rit)).| ovinfiets | Gereisde kilometers fiets |

## Landbouw
|  | Bron  | Opmerking  | KM code(s) | KM onderwerp(en) |
|---|---|---|---|---|
|  ***Eindgebruik***   |  |  |  |  |
|  Aardgas | Klimaatmonitor (bewerking o.b.v. Emissieregistratie) | 'Gas geleverd aan landbouw, bosbouw en visserij (SBI A)'. Klimaatmonitor maakt geen onderscheid tussen eindgebruik en gasgebruik van WKK’s. Dit is met name relevant voor regio's met veel glastuinbouw. [Emissieregistratie](http://emissieregistratie.nl/erpubliek/bumper.nl.aspx) heeft hier CO<sub>2</sub>-gegevens over ('Aardgasverbruik landbouw (WKK)' en 'niet-WKK'). Op basis hiervan splitsen wij het gasgebruik uit. Het gas dat naar WKK’s gaat, tellen we niet als eindgebruik maar komt in het ETM terug als eindgebruik voor (collectieve) warmte en elektriciteit.  | vbrzg_a | Gas geleverd aan Landbouw, bosbouw en visserij (SBI A) |
|  Elektriciteit | Klimaatmonitor (bewerking)  | 'Elektriciteitsgebruik landbouw, bosbouw en visserij (SBI A)'. We verhogen dit getal met elektriciteit uit gas-WKK's (zie boven).  | vbrze_a | Elektriciteit geleverd aan Landbouw, bosbouw en visserij (SBI A) |
|  (Collectieve) warmte | Klimaatmonitor (bewerking) | Optelling van 'Geothermie warmte (diepe bodemenergie)' en warmte uit gas-WKK's (zie boven).   |  geothermtj   | Geothermie warmte (diepe bodemenergie) (tier 2/3) |

## Industrie
|  | Bron  | Opmerking  | KM code(s) | KM onderwerp(en) |
|---|---|---|---|---|
|  ***Eindgebruik***   |  |  |     |  |
|  Aardgas | Klimaatmonitor (bewerking o.b.v. Emissieregistratie) | Optelling van 'Gas geleverd aan industrie (SBI C)', 'Gasgebruik winning van delfstoffen (SBI B)', 'Gasgebruik Winning en distr. van water; afval- en afvalwaterbeheer en sanering (SBI E)' en 'Gasgebruik Bouwnijverheid (SBI F) '. <br />Het ETM deelt de industrie op in 10 verschillende subsectoren zoals metaal, chemie, voedsel etc. Wij schatten het gasgebruik per subsector door de bovenstaande optelling onder te verdelen naar rato van de CO<sub>2</sub>-uitstoot per subsector. Bijvoorbeeld: Als de voedselindustrie 40% van de CO<sub>2</sub>-emissies uitstoot van de gehele industrie in een gemeente dan kennen wij in die gemeente 40% van het gasverbruik toe aan de voedselsector.| vbrzg_btot, vbrzg_ctot,vbrzg_etot,vbrzg_ftot | Gas geleverd aan industrie (SBI C), Gasgebruik winning van delfstoffen (SBI B), Gasgebruik Winning en distr. van water; afval- en afvalwaterbeheer en sanering (SBI E), Gasgebruik Bouwnijverheid (SBI F) |
|  Elektriciteit | Klimaatmonitor (bewerking o.b.v. Emissieregistratie)  | Vergelijkbaar met aardgas, met als verschil dat we hier ook 'Elektriciteitsgebruik Informatie en Communicatie (SBI J)' meenemen. In Klimaatmonitor hoort dit verbruik bij de dienstensector. | vbrze_b, vbrze_c,vbrze_e,vbrze_f,vbrze_j |Elektriciteit geleverd aan industrie (SBI C), Elektriciteitsgebruik winning van delfstoffen (SBI B), Elektriciteitsgebruik Winning en distr. van water; afval- en afvalwaterbeheer en sanering (SBI E), Elektriciteitsgebruik Bouwnijverheid (SBI F) , Elektriciteitsgebruik Informatie en Communicatie (SBI J) |
|  (Collectieve) warmte, olie, kolen en feedstock | Geen gegevens m.u.v. staal, aluminium, kunstmest en raffinage | In sommige industrieën worden naast aardgas en elektriciteit ook andere energiedragers gebruikt, zoals olie, kolen en stoom. Klimaatmonitor heeft hier geen regionale gegevens over. Wij nemen deze energie daarom standaard niet mee, maar kunnen dit desgewenst wel bijschatten op basis van landelijke gegevens. Voor de staal-, aluminium- en kunstmestindustrie en de raffinagesector doen wij standaard *wel* bijschattingen, omdat de verbruiken van deze (grootschalige) industrie goed is te bepalen aan de hand van de Nederlandse energiebalans.  |   |  |

## Energiesector
| | Bron  | Opmerking  | KM code(s) | KM onderwerp(en) |
|---|---|---|---|---|
|  ***Verbruik***   |  |  |     |  |
|  Elektriciteit | Klimaatmonitor | 'Elektriciteitsgebruik Productie en distr. elektriciteit, gas, stoom en gekoelde lucht (SBI D)' | vbrze_d | Elektriciteitsgebruik Productie en distr. elektriciteit, gas, stoom en gekoelde lucht (SBI D) |
| Netverliezen (elektriciteit) | Quintel | Bijschatting Quintel o.b.v. landelijk gemiddelde. Deze energie wordt niet als eindgebruik gerekend en is daarom geen onderdeel van het 'totaal energiegebruik/eindgebruik' van een regio.  |  |
|  Aardgas | Geen gegevens  | Klimaatmonitor heeft geen gegevens over het gasgebruik in de energiesector, zoals voor de productie van stoom voor de industrie.  |   |  |
||
| ***Productie*** | | |  |  |
| Wind | Klimaatmonitor |   | windtjbrutnorm | Wind op land hern. elektriciteit genormaliseerd (tier 1/2) |
| Zon | Klimaatmonitor | 'Zonnestroom (tier 1)'. Uitsplitsing naar zon op dak voor huishoudens, zon op dak voor overige gebouwen en zonnevelden gebeurt op basis van (bekende) vermogens die Klimaatmonitor rapporteert. | zonpvtj | Zonnestroom (tier 1) |
| Waterkracht | Klimaatmonitor | | watertjbrutnorm | Waterkracht hern. elektriciteit genormaliseerd (tier 1)|
| Warmte | Klimaatmonitor | Zie [warmte](#warmte) | | |

## Overige gegevens
| | Bron  | Opmerking  | KM code(s) | KM onderwerp(en) |
|---|---|---|---|---|
|  ***Geografisch/demografisch***   |  |  |
|  Aantal inwoners | Klimaatmonitor |  | wbbevtot | Bevolking |
|  Aantal huizen per huistype | BAG (bewerking Quintel) | Quintel berekent het aantal rijtjeshuizen, appartementen, vrijstaande huizen en twee-onder-een-kaphuizen op basis van de Basisregistratie Adressen en Gebouwen |  |  |
| Gemiddeld energielabel per huistype | EP-online en RVO (bewerking Quintel) | Quintel berekent het gemiddelde energielabel per huistype op basis van de energielabeldatabase EP-online. Deze database bevat alleen huizen met een definitief energielabel. Voor de huizen zonder definitief label schatten we het energielabel op basis van het huistype en bouwjaar (RVO). |  |  |
| Aantal utiliteitsgebouwen | CBS |  |  |
| Aantal personenauto's | Klimaatmonitor |   | wbnpauto | Personenauto's totaal |
| Landbouwgrond | CBS |  |  |
||
| ***Emissies*** | | |  |  |
| Emissies 1990 | Emissieregistratie (bewerking) | |   |  |
| Niet-energetische emissies en emissies van 'overige' broeikasgassen | Emissieregistratie | Zie [Broeikasgassen](#broeikasgassen)|  |  |
||
| ***Potenties*** | | |  |  |
| Zon op dak voor huishoudens en gebouwen | Diverse bronnen | Afhankelijk van beschikbare data. Het ETM rekent met netto geschikt dakoppervlak: het aantal m<sub>2</sub> dat volledig bedekt kan worden met zonnepanelen.  |  |
| Biomassastromen | TNO | Zie [onze documentatie](biomass.md) voor een uitgebreide uitleg van de schatting van de biomassapotentie per regio.  |  |


## Warmte
De collectieve warmtevraag (vraag van 'warmtenetten') van huishoudens, gebouwen en landbouw wordt afgeleid uit de volgende gegevens op Klimaatmonitor:

* Vraag van stadsverwarming woningen
* Productie van hernieuwbare warmte en warmte uit afvalverbranding (deels fossiel)

De laatste categorie zit aan de aanbodzijde van het energiesysteem. Omdat deze warmte ergens gebruikt wordt, rekent Klimaatmonitor deze productie bij de totale vraag. De productie van deze warmte wordt niet altijd volledig ingevoed op een warmtenet. Warmte kan ook direct gebruikt worden op de plek waar het geproduceerd wordt. Klimaatmonitor onderscheidt 8 bronnen van (hernieuwbare) warmteproductie:

1. Geothermie
2. WKO
3. Warmte uit biogas
4. Houtskoolgebruik in huishoudens
5. Warmte uit afvalverbranding (hernieuwbaar en fossiel)
6. Biomassaketels bij bedrijven
7. Decentrale biomassa-WKK
8. Bijstook van biomassa in elektriciteitscentrales

Klimaatmonitor geeft voor sommige van deze categorieën niet aan in welke sector de geproduceerde warmte gebruikt wordt. In het ETM worden de volgende aannames gedaan:
1. Geothermie wordt gerekend als warmte(net)-vraag in de landbouw, aangezien op dit moment nagenoeg alle geothermieproductie in deze sector plaatsvindt.
2. WKO wordt toegekend aan de gebouwen/dienstensector. In het ETM komt dit terug als warmte(net)-vraag, gevoed door een warmtepomp.
3. Biogas wordt toegekend aan de gebouwen/dienstensector. In het ETM komt dit terug als warmte(net)-vraag, gevoed door een biogas-WKK. In werkelijkheid wordt biogas ook in de landbouw en industrie gebruikt, maar vaak is er onvoldoende informatie om het aandeel van elke sector te bepalen.
4. Houtskool komt in het ETM terug als biomassavraag in de huishoudsector.

Voor categorie 5-8 ligt het iets ingewikkelder. Klimaatmonitor neemt aan dat deze warmte altijd wordt ingevoed op een warmtenet. Aangezien Klimaatmonitor data heeft over de warmtenetvraag van huishoudens, kan het zijn dat de warmteproductie van categorie 5-8 volledig naar de huishoudsector gaat. In het ETM komt dit terug als een warmte(net)-vraag van huishoudens, gevoed door (respectievelijk) afvalverbrandingsinstallaties, biomassaketels en  biomassa-WKK (voor zowel 7 als 8).

Als de warmtenetvraag van huishoudens op Klimaatmonitor _kleiner_ is dan de productie van categorie 5-8, wordt het verschil als warmtevraag van de gebouwen/dienstensector gerekend. Meer informatie hierover kan gevonden worden in de [Rapportage energiegebruik](https://klimaatmonitor.databank.nl/dashboard/dashboard/rapportages/) op Klimaatmonitor, passage over 'Ontdubbeling stadsverwarming woningen en hernieuwbare warmte'.

Voor de landbouw in gemeentes met glastuinbouw rekent het ETM een deel van de gasvraag ook als vraag naar warmte(net), namelijk het deel van het gas dat gebruikt wordt in een WKK. Zie [landbouw](#landbouw).

De reden dat (8), bijstook van biomassa in elektriciteitscentrales, in het ETM terugkomt als biomassa-WKK is omdat Klimaatmonitor alleen data heeft over de hernieuwbare warmte, niet over de fossiele warmte die ook uit de centrale komt.

## Emissies 1990
Zie het aparte artikel over [1990-emissies](co2-1990-emissions.md).

## Broeikasgassen
Het ETM berekent de CO<sub>2</sub>-uitstoot die vrijkomt bij het gebruik van energie ('energetische uitstoot') in een gebied op basis van de energiegebruiken van dat gebied. Voor het heden komt de data over deze energiegebruiken grotendeels van Klimaatmonitor, zoals hierboven beschreven.  Naast deze energetische CO<sub>2</sub>-uitstoot heeft het ETM ook gegevens over drie andere soorten uitstoot van broeikasgassen:
1. Energetische uitstoot van andere broeikasgassen (zoals methaan dat vrijkomt in verwarmingsketels of lachgas in uitlaatgassen)
2. Niet-energetische uitstoot van CO<sub>2</sub> (bijvoorbeeld door het gebruik van grondstoffen in de industrie)
3. Niet-energetische uitstoot van andere broeikasgassen (zoals methaanuitstoot van landbouwdieren en vuilstortplaatsen).

De data voor deze drie soorten uitstoot zijn afkomstig van Emissieregistratie. Emissieregistratie heeft per gemeente uitstootgegevens voor 13 verschillende broeikasgassen en ongeveer 350 verschillende emissieoorzaken. Quintel heeft per combinatie van broeikasgas en emissieoorzaak bepaald of deze emissieoorzaak energetisch of niet-energetisch is. Hiermee kan per gemeente voor de bovenstaande drie soorten uitstoot worden bepaald hoe hoog de uitstoot is.

_Aandachtspunt: De data op gemeenteniveau van Emissieregistratie maakt geen onderscheid tussen emissies die meetellen volgens de richtlijnen van het IPCC en emissies die hiervoor niet meetellen (zoals uitstoot van biomassa of internationale lucht- en zeescheepvaart). Quintel filtert deze laatste emissies uit de data om aan te sluiten bij de IPCC-richtlijnen. Gebruikers kunnen er in het ETM zelf voor kiezen om uitstoot van biomassa en internationaal transport alsnog aan hun scenario toe te voegen._


## Ontbrekende data
Voor sommige regio's ontbreekt data voor een bepaalde sector of drager op Klimaatmonitor. Bijvoorbeeld omdat informatie vertrouwelijk is of herleidbaar naar individuele bedrijven. Quintel doet in dit geval een zo goed mogelijke schatting op basis van informatie die wel beschikbaar is. We proberen de ordegrootte te bepalen van de ontbrekende data. Hiervoor gebruiken we (een combinatie van) de volgende methodes:
* We kijken of data wel beschikbaar is voor eerdere jaren.
* We kijken of data wel beschikbaar is voor een hoger regionaal niveau. Bijvoorbeeld: Voor een gemeente kijken we of er wel gegevens op RES- of provincieniveau zijn. Dit geeft een idee van de grootte van de ontbrekende gemeenten.
* We kijken of data wel beschikbaar is op totaalniveau en voor andere sectoren/dragers. Bijvoorbeeld: Soms is het totaal energiegebruik van een gemeente bekend en het verbruik in een aantal sectoren. Dit geeft een idee van de grootte van de ontbrekende sectoren.

Belangrijk is dat het totale energiegebruik en het totale energiegebruik per hoofdcategorie (elektriciteit, gas & warmte, vervoer) op Klimaatmonitor zoveel mogelijk leidend is.

_Voorbeeld: Volgens Klimaatmonitor is het totale elektriciteitsgebruik in regio X 100 TJ. Voor landbouw en industrie is er geen data gepubliceerd vanwege vertrouwelijkheid, maar deze verbruiken zijn wel verwerkt in het totale elektriciteitsgebruik. Voor de andere sectoren telt het elektriciteitsgebruik op tot 60 TJ. Quintel schat het verbruik van landbouw en industrie met behulp van bovenstaande methodes. Het totaal van landbouw en industrie kan niet hoger zijn dan 40 TJ, omdat anders het totaal van 100 TJ wordt overschreden._

## Data Manager
Uitgebreide informatie over de gebruikte data en bronnen per regio in het ETM is te vinden op de [ETM Data Manager](https://data.energytransitionmodel.com/). Hier kun je een regio selecteren en vervolgens per sector de input-data bekijken.
