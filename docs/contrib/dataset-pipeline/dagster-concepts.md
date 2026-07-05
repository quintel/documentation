---
id: dagster-concepts
title: Dagster concepts, grounded in our code
---

Nobody on the team needs to *learn Dagster* in the abstract. The pipeline
uses five of its concepts, and every one of them replaces something you
already know from the old pipelines. All examples below are real code from
`etdataset/src/etm_data/`.

## 1. Asset — a named piece of data, produced by a function

An asset is one data product (a table, a file set) plus the function that
computes it. The old pipelines had these too — they were just implicit: "the
enriched balance", "the transport exports". Dagster makes each one a named,
inspectable node:

```python
@asset(partitions_def=ebg_region_year, group_name="staging")
def energy_balance_enriched(
    eurostat_energy_balance_raw: pd.DataFrame,   # ← dependency
    ebg_conversion_parameters: dict,             # ← dependency
):
    balance = ebg_industry.enrich(eurostat_energy_balance_raw,
                                  ebg_conversion_parameters)
    ...
```

Note the crucial convention: **the function's parameter names are asset
names**. That is the whole wiring — there is no workflow file, no run-order
README. Dagster reads the signatures and infers the graph. When you see the
asset graph in the UI, you are looking at the function signatures of
`assets.py` and `ebg_assets.py`, nothing more.

Equally important: the asset function is a *thin wrapper*. The actual logic
(`enrich`, or a whole workbook's worth of formulas in `sectors/transport.py`)
is plain pandas with no Dagster imports — testable with pytest alone, and
portable to any other orchestrator if we ever change our minds.

## 2. Partition — "which region, which year"

Every asset is parameterised by (region, year). `nl|2023` is one partition of
the AM assets; `AT|2019` one of the EBG assets. Materializing one partition
is the old "run the pipeline for Austria"; materializing all partitions of an
asset (a **backfill**) is the old "update all countries" — except it is a
built-in operation instead of a shell loop, and the results are tracked per
partition.

## 3. Materialize — run the function, store the result

"Materialize" = compute an asset for a partition and store the output.
Selecting `+etlocal_energy_balance_export` (note the `+`) means "this asset
and everything upstream of it" — the equivalent of the old full CLI run:

```bash
dagster asset materialize -m etm_data.definitions \
  --select '+etlocal_energy_balance_export' --partition 'AT|2019'
```

Without the `+`, upstream assets are *not* re-run; their stored outputs are
loaded. This is what makes "re-run only the transport analysis" a one-liner
instead of a workbook session.

## 4. Asset check — the red/green cells, automated

The Analysis Manager's Dashboard had red/green validation cells; the EBG had
console warnings that vanished when the terminal closed. Both became **asset
checks**: functions that run with the asset and record pass/fail plus
metadata, visible per run and per partition in the UI. Examples:
`share_tables_sum_to_one` (every share table must distribute exactly 100%),
`ebg_enrichment_conserves_energy` (every subsector split must conserve
energy against its audit row).

## 5. Definitions — the single entry point

`src/etm_data/definitions.py` lists every asset and check the pipeline
serves. `dagster dev` loads it and gives you the control room at
`localhost:3000` — the replacement for `analysis_manager.xlsm` and for the
EBG's four CLI scripts. If it's not in `definitions.py`, it doesn't exist.

## What we deliberately did *not* adopt

Dagster has many more features (schedules, sensors, IO managers, cloud
deployment). The port uses none of them yet. The design principle — argued in
the pipeline modernisation briefs in `etdataset/documentation/` — is that the
*structure* (small named steps, explicit DAG, region/year as parameters,
logic in version-controlled Python) matters more than the tool. Dagster is
the working hypothesis, ratified as decision D1 in the increment plan; the
orchestrator-free `sectors/` and `staging/` modules are the insurance policy.

## Try it

Fifteen minutes, from the etdataset root:

```bash
pip install -e ".[dev]"
dagster dev          # open localhost:3000, find the asset graph
```

Then do the [hands-on lab](https://github.com/quintel/etdataset/blob/master/documentation/unified_pipeline/hands_on_lab.md)
with a colleague — it takes the team from "looking at the graph" to "adding
your own asset check" in five exercises.
