---
title: Available regions
---

This page describes what types of regions are offered in the ETM and whether they are available in the front-end  dropdown, or only in the backend (through the [API](api/intro.md)).

1. **Offical geographical regions are offered in the front-end**  
Regions that are part of official geographical classifications can be offered both in the front-end and in the backend. For example, a country, a municipality, but also NUTS-regions or RES-regions can be offered in the front-end. See the [CBS gebiedsindelingen](https://www.cbs.nl/nl-nl/dossier/nederland-regionaal/geografische-data/cbs-gebiedsindelingen) for official classifications in the Netherlands. Regions are not offered in the front-end beyond the municipality level.

2. **Different regions are only offered in the front-end if they are MECE or can be incorporated in existing tooling**  
For example, Northern Ireland is MECE (Mutually Exclusive, Collectively Exhaustive) with Great Britain (alternatively, with England, Wales and Scotland). Another example is the BUCH-region, which consists of the Dutch municipalities Bergen, Uitgeest, Castricum and Heiloo. This region can be offered in the front-end because it can easily be constructed with the same tool as provinces and RES-regions: by amalgamating municipalities.

3. **Only the most recent base year of a region is offered in the front-end**  
If multiple base years are available for the same region in the backend, only the version with most recent base year is offered in the front-end. For example, for the Netherlands, only the 2019 version is shown in the front-end. The 2015 version is only available through the API.

4. **Consistent base years should be available both horizontally and vertically** (at least in the backend)  
Horizontally meaning for instance between provinces, vertically meaning for instance between a province and its municipalities. In practice, this would mean that if the Dutch municipalities in the ETM are updated to 2022, a version should be available for the Netherlands for 2022. Dutch provinces and RES-regions should then be updated to 2022 as well (vertical consistency). However, if a version for the Netherlands is available for 2022, the 2019 version cannot be retired until all European countries are updated to 2022 as well (horizontal consistency).

5. **The backend might offer additional regions that diverge from the previous conditions**  
This should only be the case when structural maintenance budget is available to maintain these and when an expiration date is provided.
