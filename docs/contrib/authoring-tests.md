---
title: Writing tests
---

Testing is of key importance in model development, with the ETM we use our test-suite to ensure that errornous model are indentified swiftly. The test-suite consists of the tests we perform, and the testing tools we use to perform those tests.

## Testing vision for test-suite

To effectively integrate the test suite within our development tools, we have established an ideal testing vision. The test suite should adhere to the following criteria:

- **Reliability**: Tests are up-to-date and trustworthy, prompting developers to act on failures.

- **Completeness**: Automated tests cover all aspects of the model and incorporate various settings, thereby notifying modelers of any unintended or incorrect behavior. Additionally, modelers can test all features themselves using the manual test toolset.

- **Accessibility**: Tests help pinpoint errors and guide modelers directly to the core of the problem, making it easier to address.

- **Efficiency**: Tests are designed to run efficiently, with smaller tests executed daily and more exhaustive tests conducted on a weekly or monthly basis.

- **Relevance**: Every test must be relevant and necessary, thus having a legitimate reason for inclusion in the test suite. Tests that no longer fulfill these criteria should be removed.

- **Maintainability**: The test suite must be easy to update and maintain.

In summary, our vision for the test suite is to create a professional, mature, and **reliable** tool that **comprehensively** and **efficiently** tests the ETM with **relevant**, **accessible**, and **maintainable** tests. It actively aids developers in identifying issues and advancing the ETM.

The testing-tools that are mainly used in model development are:

- **Mechanical Turk**
Mechanical turk tests are run on a daily basis. These tests check whether expected model outcomesare produced. These tests can be set up in two ways:

1. Using a blank scenario in which the script makes modifications.
2. Using a set of predetermined scenario's, typically those with a high number of inputs.
  The core calculations and outcomes of the model can be tested using the mechanical turk.

Proposed Improvements for Mechanical Turk Tests:

1. Add Tests for Balancing Graphs: Ensure core aspects like supply and demand balancing are covered, and therefore enhancing to the **Completeness** of the test-suite.
2. Update Queries Automatically: Write scripts to update test queries when graph queries are updated.
• For example, create a script for ‘mekko_of_hydrogen_network.yml’ to split and test demand and supply queries, ensuring they balance to zero in various scenarios. This improves to the **Maintainability**, **Reliability** & **Completeness**.
3. Expand Scenario Collection: Test the model under diverse and updated inputs, including different regions with unique characteristics. This enhances to the **Efficiency** and **Completeness**, since the tests cover multiple scenario's at once.
4. Remove Unnecessary Tests: Eliminate tests that cover only small fractions of the model, enhancing maintainability and efficiency. This improves the **Relevance**, **Maintainability**, and **Reliability**.
5. Update Outdated but Useful Tests: Ensure all tests are reliable and current. This enhances the **Relevance**, **Maintainability**, and **Reliability**.
6. Add Tests for Hourly and Yearly Calculations: Verify that calculations are consistent and accurate. This enhances  the **Completeness**
7. Update the documentation of the Mechanical turk tests: Write a concise description of each tests. This is an improvement of the **Accessibility**.


- **GQL-sandbox**
The GQL-sandbox is the place to test the GQL-queries.
A good understanding and maintenance of GQL is needed in developing our modeling tool and testset.

- **Semaphore spec**
The semaphore specs are run each time a commit is pushed to their respective repository. These test (among other things) check the files within the code base whether they follow the expected outline.

- **Atlas rake debug**
The Atlas rake debug command is used to verify whether changes to the graph are executed correctly.
