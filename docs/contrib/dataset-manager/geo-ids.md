---
title: Geo IDs
---

Every dataset in the dataset manager is identified by a `geo_id`. This ID is used, among other things, to
assign a [parent dataset](./data-migrations.md#parent-datasets) and to target datasets in a
[data migration](./data-migrations.md).

### Geo ID vs. area label

A `geo_id` (e.g. `AT`) is not the same as an **area label** (e.g. `AT_austria`), even though both show up
throughout the docs and codebase. The area label is the `geo_id` with the dataset's lowercase, underscore-separated
name appended, concatenated with an underscore: `{geo_id}_{name}`. It's the area label, not the bare `geo_id`,
that's used to set a [parent dataset](./data-migrations.md#parent-datasets) or to populate `area_code` in the API.

Each of the examples below shows the `geo_id` and the resulting area label.

The Netherlands is treated as the implicit default country, so Dutch provinces, municipalities and RES
regions get no country prefix (e.g. `GM0363`, not `NLGM0363`). Subnational datasets for any other country
do get that country's two-letter code prefixed to their `geo_id` (e.g. `BEGM11002` for a Belgian municipality).

### Countries

Country datasets use the plain two-letter ISO country code as their `geo_id`. For example:

* `AT` – `AT_austria`
* `IE` – `IE_ireland`

### Provinces

Dutch provinces use the pattern `PV{xx}`, where `{xx}` is the official two-digit
[CBS provincie code](https://www.cbs.nl/nl-nl/dossier/nederland-regionaal/geografische-data/cbs-gebiedsindelingen)
for that province. For example:

* `PV20` – Groningen
* `PV25` – Gelderland

### Municipalities

Dutch municipal datasets use the pattern `GM{nnnn}`, where `{nnnn}` is the official, four-digit
[CBS gemeentecode](https://www.cbs.nl/nl-nl/dossier/nederland-regionaal/geografische-data/cbs-gebiedsindelingen). For example:

* `GM0014` – Groningen
* `GM0363` – Amsterdam

Municipalities outside the Netherlands follow the same `GM{...}` pattern, prefixed with that country's
two-letter code and using that country's own official municipality code instead of the CBS gemeentecode.
Belgium is currently the only other country with municipal datasets: `BEGM{nnnnn}`, where `{nnnnn}` is the
official, five-digit [NIS/REFNIS code](https://statbel.fgov.be/en/open-data/code-refnis) for that municipality.
This code is itself made up of the province (1st digit), the administrative arrondissement within that
province (2nd digit), and a unique sequence number for the municipality within that arrondissement
(last 3 digits). For example:

* `BEGM11002` – Antwerpen
* `BEGM35013` – Oostende

### RES regions

RES regions only exist for the Netherlands. RES stands for "Regionale Energiestrategie". Current RES region datasets use the prefix `ES`
(not `RES`), followed by a two-digit number corresponding to the
[official CBS RES-region code](https://www.cbs.nl/nl-nl/dossier/nederland-regionaal/geografische-data/cbs-gebiedsindelingen):
`ES{xx}`. For example:

* `ES01` – Groningen
* `ES25` – Hart van Brabant

### Subregions

Subregions currently only exist for the Netherlands as well. They follow the pattern `RG{parent_geo_id}{xx}_{name}`, where `{parent_geo_id}` is the `geo_id` of the
parent dataset (typically a province) and `{xx}` is a two-digit sequence number distinguishing the subregion
from its siblings. The `{name}` is a lowercase, underscore-separated slug of the subregion's name, so the
`geo_id` and area label are one and the same here. For example:

* `RGPV2501_kop_van_de_veluwe` – Kop van de Veluwe
* `RGPV2903_bevelanden` – Bevelanden
