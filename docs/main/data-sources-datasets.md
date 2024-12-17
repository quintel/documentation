---
title: Available datasets
---

This page describes what types of datasets are offered in the ETM and whether they are available in the front-end dataset selection dropdown, or only in the backend (with the [API](api/intro.md)).

1. **Datasets are offered in the front-end for official geographical regions**  
Datasets that are part of official geographical classifications can be offered both in the front-end and in the backend. For example, a country, a municipality, but also NUTS-regions or RES-region can be offered in the front-end. See the [CBS gebiedsindelingen](https://www.cbs.nl/nl-nl/dossier/nederland-regionaal/geografische-data/cbs-gebiedsindelingen) for classifications in the Netherlands. Datasets are not offered in the front-end with a geographical resolution higher than the municipality level.

2. **Divergent datasets are offered in the front-end only if they are MECE or can be incorporated in existing dataset pipelines**  
For example, Northern Ireland is MECE (Mutually Exclusive, Collectively Exhaustive) with Great Britain (alternatively, with England, Wales and Scotland). Another example is the BUCH-region, which consists of the Dutch municipalities Bergen, Uitgeest, Castricum and Heiloo. This dataset can be offered in the front-end because it can easily be constructed with the same dataet pipeline as provinces and RES-regions: by amalgamating municipalities.

3. **Only the most recent base year of a dataset is offered in the front-end**  
If multiple base years are available for the same region in the backend, only the dataset with most recent base year is offered in the front-end. For example, for the Netherlands, only the 2019 dataset is shown in the front-end. The 2015 dataset is only available through the API.

4. **Consistent base years should be available both horizontally and vertically** (at least in the backend)  
Horizontally meaning for instance between provinces, vertically meaning for instance between a province and its municipalities. In practice, this would mean that if the Dutch municipal datasets are updated to 2022, the dataset for the Netherlands should be available for 2022 and provinces and RES regions should be updated to 2022 as well (vertical consistency). However, if the dataset for the Netherlands for 2022 is available, the 2019 dataset cannot be retired until the European datasets are updated to 2022 as well (horizontal consistency).

5. **The backend might offer additional datasets that diverge from the previous conditions**  
This should only be the case when structural maintenance budget is available to maintain these datsets and when an expiration date is provided.
