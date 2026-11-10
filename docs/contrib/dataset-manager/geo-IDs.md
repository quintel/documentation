---
title: Geo IDs
---

Every dataset in the dataset manager is identified by a `geo_id`. This ID is used, among other things, to
assign a [parent dataset](./data-migrations.md#parent-datasets) and to target datasets in a
[data migration](./data-migrations.md). The format of the `geo_id` depends on the type of area the dataset
represents. `geo_id`s are always uppercase.

The conventions below for provinces, municipalities, (RES) regions and subregions are specific to Dutch
areas and are based on official CBS codes. Areas in other countries don't follow these conventions and may
use a different `geo_id` scheme of their own.

#### Countries

Country datasets use the plain two-letter ISO country code as their `geo_id`. For example:

* `NL` – the Netherlands
* `IE` – Ireland

#### Provinces

Provinces use the pattern `PV{xx}`, where `{xx}` is the official two-digit
[CBS provincie code](https://www.cbs.nl/nl-nl/dossier/nederland-regionaal/geografische-data/cbs-gebiedsindelingen) 
for that province. The number does **not** represent a year or dataset version; it 
stays the same even when the dataset is updated. For example:

* `PV20` – Groningen
* `PV25` – Gelderland

#### Municipalities

Municipality (gemeente) datasets use the pattern `GM{nnnn}`, where `{nnnn}` is the official, four-digit 
[CBS gemeentecode](https://www.cbs.nl/nl-nl/dossier/nederland-regionaal/geografische-data/cbs-gebiedsindelingen). For example:

* `GM0014` – Groningen
* `GM0363` – Amsterdam

#### (RES) regions

RES stands for "Regionale Energiestrategie". Despite that, current RES region datasets use the prefix `ES` 
(not `RES`), followed by a two-digit number corresponding to the
[official CBS RES-region code](https://www.cbs.nl/nl-nl/dossier/nederland-regionaal/geografische-data/cbs-gebiedsindelingen): 
`ES{xx}`. For example:

* `ES01` – Groningen
* `ES25` – Hart van Brabant

:::warning Deprecated RES prefix
Older datasets may still use the deprecated prefix `RES{xx}` (e.g. `RES08` for Groningen). Following the 2023
RES-region reboundary, the regions were renumbered, so the same sequence number can refer to a **different**
region under the old `RES` prefix than it does under the current `ES` prefix. Always use the `ES` prefix for
new datasets, and don't assume an `RES` and an `ES` ID with the same number refer to the same area.
:::

#### Subregions

Subregions follow the pattern `RG{parent_geo_id}{xx}_{name}`, where `{parent_geo_id}` is the `geo_id` of the
parent dataset (typically a province) and `{xx}` is a two-digit sequence number distinguishing the subregion
from its siblings. The `{name}` is a lowercase, underscore-separated slug of the subregion's name. For example:

* `RGPV2501_kop_van_de_veluwe` – a subregion of `PV25` (Gelderland)
* `RGPV2903_bevelanden` – a subregion of `PV29` (Zeeland)

:::warning Deprecated subregion format
Some older subregions instead use a two-letter province abbreviation in place of the full province `geo_id`, 
for example `RGGL01` (Achterhoek, parent Gelderland) or `RGNH08` (BUCH-regio, parent Noord-Holland). This is 
a deprecated naming scheme; new subregions should always use the full parent `geo_id` as described above.
:::
