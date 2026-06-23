---
id: intro
title: Contributing to the ETM
---

This section provides documentation to Quintel employees, and outside modellers and developers who may wish to contribute to the ETM.

## Contribution principles

The ETM is built and maintained according to the principles listed below. These should be adhered to when contributing to the model.

### 1. Contributability

The codebase should not depend on knowledge held by a single person. Niche technologies and patterns require an explicit, documented justification. The more specialised the choice, the higher the bar.

### 2. Simplicity and modularity

Prefer a general solution over a specialised one, and keep components loosely coupled so they can be swapped without cascading changes. A well-supported open-source library is preferable to bespoke code.

### 3. Reliability and testability

Predictable behaviour is established through tests: unit tests for code-level confidence and integration tests for system reliability.

### 4. Traceability

Code should record why it exists, not only how it works. A change should be traceable from a slider interaction, through the backend logic, to the underlying data.

### 5. Observability

Systems are designed to be inspected and explained at runtime: query logs expose backend behaviour, server-level monitoring supports detection and diagnosis, and front-end visibility surfaces unexpected behaviour rather than hiding it.

### 6. Usability

The ETSource boundary is a maintained interface. Robust, general methods belong in ETEngine rather than offloaded as complexity in ETSource. Modellers are involved early when a change affects that boundary.

### 7. Performance

Interactive use depends on fast feedback. Performance work targets where the user experiences delay and prioritises the exploration-feedback loop over raw computation speed.
