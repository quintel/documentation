---
title: Regionale data in het ETM
---

Hieronder staat een overzicht van de gebruikte bronnen voor de omzetting van Klimaatmonitor naar het Energietransitiemodel.

| Huishoudens  | Bron  | Opmerking  | KM code(s) | KM onderwerp(en) |
|---|---|---|---|---|
|  ***Eindverbruik***  |  |  |  |  |
|  Aardgas | Klimaatmonitor  | Let op het ETM gebruikt de niet-temperatuurgecorrigeerde data  | gaswoningen | Totaal gasgebruik woningen |
|  Elektriciteit | Klimaatmonitor  | Inclusief 'zonnestroom gebruik achter de meter woningen'   | el_woningen_incl_zonachtermeter | Totaal elektriciteitsgebruik woningen (incl. zonnestroom achter de meter)|
|  Collectieve warmte | Klimaatmonitor  | 'Stadswarmte woningen (niet-temperatuurgecorrigeerd)'  | warmwontier2 | Stadswarmte woningen (schatting, tier 2) |
|  Biomassa | Klimaatmonitor  | 'Houtkachels woningen' en 'Houtskool') | houtwontj + houtskool | Houtkachels woningen hern. warmte, Houtskool hern. warmte (tier 1)|
||
|  ***Opwek***   | |  |
|  Zon | Klimaatmonitor (bewerking) | 'Zonnestroom (tier 1)'. We splitsen dit uit naar zon op dak voor huishoudens, zon op dak voor bedrijven en zonneparken op basis van 'Vermogen geregistreerde zonnepanelen woningen/bedrijven/veld- of drijvende opstelling') |

| Gebouwen (utiliteitsbouw)  | Bron  | Opmerking  |KM code(s) | KM onderwerp(en) |
|---|---|---|---|---|
|  ***Eindverbruik***   |  |  |  |  |
|  Aardgas | Klimaatmonitor  | Som van publieke en commerciële dienstverlening  |   gascomdv + gaspubldv | Gasgebruik Commerciële Dienstverlening, Gasgebruik Publieke Dienstverlening |
|  Elektriciteit | Klimaatmonitor (bewerking)  | Som van publieke en commerciële dienstverlening, met een aantal bewerkingen: <ul><li>Inclusief 'zonnestroom gebruik achter de meter'</li><li>We schatten het verbruik van elektrische laadpalen o.b.v het aantal elektrische voertuigen in een regio. Dit verbruik trekken we af van de dienstensector en tellen we op bij de transportsector.</li><li>Hetzelfde doen we voor treinen, trams en metro's op basis van het aantal (trein)reizigers per gemeente/regio</li><li>Het verbruik van de ICT-sector (SBI J) verplaatsen we naar de industrie</li></ul> De reden voor deze bewerkingen is dat het ETM zo nauwkeurig mogelijk in kaart probeert te brengen met welk doel energie uiteindelijk gebruikt wordt. Zodat de gebruiker vervolgens aannames kan doen in het model over hoe dit in de toekomst gaat veranderen. Laadpalen vallen statitisch gezien onder de dienstensector, maar voorzien in een mobiliteitsbehoefte.   | elpubldv + elcomdv - elektrpers - ovintrein - ovinovov - energie_j | Elektriciteitsgebruik Publieke Dienstverlening, Elektriciteitsgebruik Commerciële Dienstverlening, Aantal geregistreerde elektrische personenauto's (FEV en PHEV), Gereisde kilometers trein, Gereisde kilometers bus/tram/metro,  Energiegebruik Informatie en communicatie (SBI J)|
|  Collectieve warmte | Klimaatmonitor  | O.a. 'WKO utiliteitsbouw'. Zie [warmte] (#warmte)   |  |  |
|  Biomassa | Klimaatmonitor  | Zie [warmte] (#warmte) |    |  |
||||
|  ***Opwek***   | |  |   |  |
|  Zon | Klimaatmonitor (bewerking)  | Zie huishoudens  |     |  |

| Transport  | Bron  | Opmerking  | KM code(s) | KM onderwerp(en) |
|---|---|---|---|---|
|  ***Eindverbruik***   |  |  |  |  |
|  Diesel (wegverkeer) | Klimaatmonitor  | 'Energiegebruik wegverkeer totaal (diesel, benzine, LPG en aardgas)' en 'energiegebruik mobiele werktuigen'. Dit is inclusief verbruik op snelwegen. We splitsen deze gegevens uit naar energiedrager (diesel, bezine, LPG en aardgas) op basis van de door Klimaatmonitor gerapporteerde CO<sub>2</sub>-uitstoot van diesel-, benzine-, LPG- en aardgasvoertuigen in een regio. Voor diesel en benzine houden we rekening met bijmening van biobrandstoffen ('biobrandstoffengebruik in wegverkeer' en 'biobrandstoffengebruik mobiele werktuigen')  | energie_wegverk_tot + energie_mobwerk| Energiegebruik wegverkeer totaal (diesel, benzine, LPG en aardgas), Energiegebruik mobiele werktuigen (diesel, benzine en LPG) |
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
| Aantal fietskilometers | Quintel / Klimaatmonitor| Geen informatie beschikbaar op gemeenteniveau. We verdelen het totaal aantal fietskilometers in Nederland (Klimaatmonitor) onder op basis van het aantal inwoners per gemeente. We nemen aan dat 16% van deze kilometers met een elektrische fiets afgelegd worden ([Nederlands gemiddelde 2017] (https://fietsberaad.nl/Kennisbank/Elektrische-fiets-goed-voor-2-procent-van-alle-rit)).| ovinfiets | Gereisde kilometers fiets |

| Landbouw  | Bron  | Opmerking  | KM code(s) | KM onderwerp(en) |
|---|---|---|---|---|
|  ***Eindverbruik***   |  |  |  |  |
|  Aardgas | Klimaatmonitor (bewerking o.b.v. Emissieregistratie) | 'Gas geleverd aan landbouw, bosbouw en visserij (SBI A)'. Klimaatmonitor maakt geen onderscheid tussen eindgebruik en gasgebruik van WKK’s. Dit is met name relevant voor regio's met veel glastuinbouw. [Emissieregistratie] (http://emissieregistratie.nl/erpubliek/bumper.nl.aspx) heeft hier CO<sub>2</sub>-gegevens over ('Aardgasverbruik landbouw (WKK)' en 'niet-WKK'). Op basis hiervan splitsen wij het gasgebruik uit. Het gas dat naar WKK’s gaat, tellen we niet als eindgebruik maar komt in het ETM terug als eindgebruik voor (collectieve) warmte en elektriciteit.  | vbrzg_a | Gas geleverd aan Landbouw, bosbouw en visserij (SBI A) |
|  Elektriciteit | Klimaatmonitor (bewerking)  | 'Elektriciteitsgebruik landbouw, bosbouw en visserij (SBI A)'. We verhogen dit getal met elektriciteit uit gas-WKK's (zie boven).  | vbrze_a | Elektriciteit geleverd aan Landbouw, bosbouw en visserij (SBI A) |
|  (Collectieve) warmte | Klimaatmonitor (bewerking) | Optelling van 'Geothermie warmte (diepe bodemenergie)' en warmte uit gas-WKK's (zie boven).   |  geothermtj   | Geothermie warmte (diepe bodemenergie) (tier 2/3) |

| Industrie  | Bron  | Opmerking  | KM code(s) | KM onderwerp(en) |
|---|---|---|---|---|
|  ***Eindverbruik***   |  |  |     |  |
|  Aardgas | Klimaatmonitor (bewerking o.b.v. Emissieregistratie) | Optelling van 'Gas geleverd aan industrie (SBI C)', 'Gasgebruik winning van delfstoffen (SBI B)', 'Gasgebruik Winning en distr. van water; afval- en afvalwaterbeheer en sanering (SBI E)' en 'Gasgebruik Bouwnijverheid (SBI F) '. <br />Het ETM deelt de industrie op in 10 verschillende subsectoren zoals metaal, chemie, voedsel etc. Wij schatten het gasgebruik per subsector door de bovenstaande optelling onder te verdelen naar rato van de CO<sub>2</sub>-uitstoot per subsector. Bijvoorbeeld: Als de voedselindustrie 40% van de CO<sub>2</sub>-emissies uitstoot van de gehele industrie in een gemeente dan kennen wij in die gemeente 40% van het gasverbruik toe aan de voedselsector.| vbrzg_btot, vbrzg_ctot,vbrzg_etot,vbrzg_ftot | Gas geleverd aan industrie (SBI C), Gasgebruik winning van delfstoffen (SBI B), Gasgebruik Winning en distr. van water; afval- en afvalwaterbeheer en sanering (SBI E), Gasgebruik Bouwnijverheid (SBI F) |
|  Elektriciteit | Klimaatmonitor (bewerking o.b.v. Emissieregistratie)  | Vergelijkbaar met aardgas, met als verschil dat we hier ook 'Elektriciteitsgebruik Informatie en Communicatie (SBI J)' meenemen. In Klimaatmonitor hoort dit verbruik bij de dienstensector. | vbrze_b, vbrze_c,vbrze_e,vbrze_f,vbrze_j |Elektriciteit geleverd aan industrie (SBI C), Elektriciteitsgebruik winning van delfstoffen (SBI B), Elektriciteitsgebruik Winning en distr. van water; afval- en afvalwaterbeheer en sanering (SBI E), Elektriciteitsgebruik Bouwnijverheid (SBI F) , Elektriciteitsgebruik Informatie en Communicatie (SBI J) |
|  (Collectieve) warmte, olie, kolen en feedstock | Geen gegevens m.u.v. staal, aluminium, kunstmest en raffinage | In sommige industrieën worden naast aardgas en elektriciteit ook andere energiedragers gebruikt, zoals olie, kolen en stoom. Klimaatmonitor heeft hier geen regionale gegevens over. Wij nemen deze energie daarom standaard niet mee, maar kunnen dit desgewenst wel bijschatten op basis van landelijke gegevens. Voor de staal-, aluminium- en kunstmestindustrie en de raffinagesector doen wij standaard *wel* bijschattingen, omdat de verbruiken van deze (grootschalige) industrie goed is te bepalen aan de hand van de Nederlandse energiebalans.  |   |  |

| Energiesector | Bron  | Opmerking  | KM code(s) | KM onderwerp(en) |
|---|---|---|---|---|
|  ***Verbruik***   |  |  |     |  |
|  Elektriciteit | Klimaatmonitor | 'Elektriciteitsgebruik Productie en distr. elektriciteit, gas, stoom en gekoelde lucht (SBI D)' | vbrze_d | Elektriciteitsgebruik Productie en distr. elektriciteit, gas, stoom en gekoelde lucht (SBI D) |
| Netverliezen (elektriciteit) | Quintel | Bijschatting Quintel o.b.v. landelijk gemiddelde. Deze energie wordt niet als eindverbruik gerekend en is daarom geen onderdeel van het 'totaal energiegebruik/eindverbruik' van een regio.  |  |
|  Aardgas | Geen gegevens  | Klimaatmonitor heeft geen gegevens over het gasgebruik in de energiesector, zoals voor de productie van stoom voor de industrie.  |   |  |
||
| ***Productie*** | | |  |  |
| Wind | Klimaatmonitor |   | windtjbrutnorm | Wind op land hern. elektriciteit genormaliseerd (tier 1/2) |
| Zon | Klimaatmonitor | 'Zonnestroom (tier 1)'. Uitsplitsing naar zon op dak voor huishoudens, zon op dak voor overige gebouwen en zonnevelden gebeurt op basis van (bekende) vermogens die Klimaatmonitor rapporteert. | zonpvtj | Zonnestroom (tier 1) |
| Waterkracht | Klimaatmonitor | 'Hern. nelet| watertjbrutnorm | Waterkracht hern. elektriciteit genormaliseerd (tier 1)|

| Overig | Bron  | Opmerking  | KM code(s) | KM onderwerp(en) |
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
| Emissies 1990 | Emissieregistratie | 'CO<sub>2</sub>-uitstoot incl. elektriciteitsgebruik' |   |  |
| Emissies van 'overige broeikasgassen' (methaan e.d.) voor gebouwde omgeving, transport, industrie en landbouw | Emissieregistratie | |  |  |
||
| ***Potenties*** | | |  |  |
| Zon op dak voor huishoudens en gebouwen | Diverse bronnen | Afhankelijk van beschikbare data. Het ETM rekent met netto geschikt dakoppervlak: het aantal m<sub>2</sub> dat volledig bedekt kan worden met zonnepanelen.  |  |
| Biomassastromen | TNO | Zie [onze documentatie](https://github.com/quintel/documentation/blob/master/general/biomass.md) voor een uitgebreide uitleg van de schatting van de biomassapotentie per regio.  |  |



# Warmte

Het ETM maakt ook een inschatting van het 'nuttig gebruik' per sector. Bijvoorbeeld: Hoeveel van het eindgebruik aardgas van huishoudens wordt gebruikt voor ruimteverwarming, hoeveel voor warm water en hoeveel voor koken?

TO DO:
Aanbodkant
Uitleg warmte
Uitleg bijschattingen/filling the blanks
Verwijzing ETLocal
Contactgegevens
FAQ: zware industrie, warmte, help telt niet op
