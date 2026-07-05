---
id: intro
title: The unified dataset pipeline
---

The ETM's national datasets are produced by two historically separate
pipelines: the **Analysis Manager** (13 Excel workbooks, producing the Dutch
full datasets such as nl2023) and the **Energy Balance Generator** (a Python
CLI producing enriched Eurostat balances for the other European countries,
consumed live by ETLocal). Both are being replaced by a single
**Python + Dagster** pipeline in the [etdataset
repository](https://github.com/quintel/etdataset), as part of milestone 2 of
the Datasets action plan.

## Why one pipeline

The two pipelines solve the same problem — turn a statistical energy balance
plus research assumptions into ETM-ready data — with different tools,
different content choices, and different levels of detail. That duplication
is the root of two problems the action plan targets: **misalignments** with
international energy-balance standards (each pipeline diverges in its own
way), and a **maintenance burden** (every improvement must be made twice).
The port brings both pipelines into one *asset vocabulary* first, so that
every divergence becomes a visible, decidable difference between two
implementations of the same named step — and can then be converged one
theme at a time.

## Status and where things live

| What | Where |
|---|---|
| Increment plan, decision register (D1–D9) | `etdataset/datasets_roadmap/milestone2_increment_plan.md` |
| Prioritised misalignments (milestone 1 deliverable) | `etdataset/datasets_roadmap/dataset-misalignments.md` |
| AM ↔ EBG choice matrix (the convergence work list) | `etdataset/datasets_roadmap/pipeline_choice_matrix.md` |
| The ported code (assets, sector logic, parity tests) | `etdataset/src/etm_data/` + `etdataset/tests/parity/` |
| Findings & progress log (workbook bugs, EBG quirks) | `etdataset/src/etm_data/PROGRESS.md` |
| **Team docs: review guide, bridges, hands-on lab** | `etdataset/documentation/unified_pipeline/` |

As of July 2026: all 13 AM analyses and the EBG's active Eurostat chain are
ported, with byte-level parity against the published outputs (the remaining
gaps — private IEA inputs, the world route, the disabled plant converters —
are explicitly catalogued, not hidden).

## The safety net: parity

The port's core discipline is **port blind, decide later**: existing
behaviour is reproduced exactly, including known bugs, which are marked in
code and catalogued. Published output files are the oracle; parity tests
assert byte-identical reproduction. Content improvements (fixing
misalignments) happen *after* both pipelines share one vocabulary, as
explicit, stakeholder-reviewed decisions — never silently during a rewrite.

## Where to start, per background

- **You know the EBG or the workbooks** → start with the bridge documents in
  `etdataset/documentation/unified_pipeline/` (they map every concept you
  know to its new home), then the review guide.
- **You are new to the pipelines** → read [Dagster concepts, grounded in our
  code](dagster-concepts) next, then do the hands-on lab with a colleague.
- **You are reviewing the port** → the review guide in
  `etdataset/documentation/unified_pipeline/review_guide.md` walks every
  claim with copy-pasteable verification steps.
