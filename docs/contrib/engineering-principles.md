---
title: Engineering principles
---

These principles set a shared standard for how the Energy Transition Model is built and maintained.

## 1. Write code that anyone can contribute to

*Contributability.* The codebase should not depend on knowledge held by a single person. Niche technologies and patterns require an explicit, documented justification. The more specialised the choice, the higher the bar.

## 2. Favour simple, replaceable components

*Simplicity and modularity.* Prefer a general solution over a specialised one, and keep components loosely coupled so they can be swapped without cascading changes. A well-supported open-source library is preferable to bespoke code.

## 3. Build with engineering rigour

*Reliability and testability.* Predictable behaviour is established through tests: unit tests for code-level confidence and integration tests for system reliability.

## 4. Make decisions traceable

*Traceability.* Code should record why it exists, not only how it works. A change should be traceable from a slider interaction, through the backend logic, to the underlying data.

## 5. Build observability into what we ship

*Observability.* Systems are designed to be inspected and explained at runtime: query logs expose backend behaviour, server-level monitoring supports detection and diagnosis, and front-end visibility surfaces unexpected behaviour rather than hiding it.

## 6. Design a clean interface for modellers, not a black box

*Usability.* The ETSource boundary is a maintained interface. Robust, general methods belong in ETEngine rather than offloaded as complexity in ETSource. Modellers are involved early when a change affects that boundary.

## 7. Optimise for perceived speed

*Performance.* Interactive use depends on fast feedback. Performance work targets where the user experiences delay and prioritises the exploration-feedback loop over raw computation speed.
