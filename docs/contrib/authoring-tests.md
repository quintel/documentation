---
title: Writing tests
---

Testing is of key importance in model development. It should help modellers and developers to efficiently identify issues and help solve them.

## Testing criteria

When writing tests, the following criteria should be followed.

- **Reliability**: tests are up-to-date and trustworthy, prompting modellers and developers to act on failures.

- **Completeness**: automated tests cover all aspects of the model and incorporate various settings, thereby notifying modelers of any unintended or incorrect behavior. Additionally, modellers can test all features themselves using the manual test toolset.

- **Accessibility**: tests help pinpoint errors and guide modelers directly to the core of the problem, making it easier to address.

- **Efficiency**: tests are designed to run efficiently, with smaller tests executed daily and more exhaustive tests conducted on a weekly or monthly basis.

- **Relevance**: every test must be relevant and necessary, thus having a legitimate reason for inclusion in the test suite. Tests that no longer fulfill these criteria should be removed.

- **Maintainability**: the test suite must be easy to update and maintain.

## Testing tools

The ETM testing suite consists of a number of tools. Each has a different goals and allows different tests to be run.

### Mechanical Turk

The Mechanical Turk testing tool can be found on [Github](https://github.com/quintel/mechanical_turk). Mechanical Turk tests are run on a daily basis. These tests check whether expected model outcomes are produced. 

Fundamentally, the Mechanical Turk (MT) consists of specs written in Rspec (a testing framework for Ruby, the can be found documentation [here](https://rspec.info/)) that contain inputs used to verify expected scenario outcomes based on queries. All specs are automatically run daily, but you can also run them manually via rspec.


These tests can be set up in 2 ways:

1.	Using a blank scenario in which the script makes modifications: In this approach, you define the region and inputs to build new scenarios within a spec. For example, you might set up a scenario to test the impact of a new policy on energy consumption by specifying relevant parameters and regions. Here is an example of how to build a new scenario:
```
require 'spec_helper'

describe "Transport" do
  before do
    @scenario = Turk::Scenario.new(area_code: "nl", end_year: 2050, inputs: {settings_enable_merit_order: 0})
  end 

  context "E-bikes" do
    describe "Increasing the share of E-bike usage" do
      it "should increase the primary energy demand" do
        @scenario.transport_bicycle_using_electricity_share = 100
        expect(@scenario.primary_demand).to increase
      end
    end
  end
end
```
The spec above checks whether increasing the slider for electricic bicycles  (found [here](https://energytransitionmodel.com/scenario/demand/transport_passenger_transport/bicycle-technology)) increases the primary energy demand in the scenario.

2. Using a set of predetermined scenario's, typically those with a high number of inputs. The following example uses the ii3050v2 scenario's, these can be found under the featured scenario's for 2050 on [https://energytransitionmodel.com/](https://energytransitionmodel.com/), and checks whether the hydrogen demand and supply are balanced for the graph
```
describe 'Hydrogen' do
  Turk::PresetCollection.from_keys(:ii3050v2).each do |scenario|
    context "with scenario #{scenario.original_scenario_id}" do
      it 'Annual demand and supply of hydrogen should match' do
        expect(
          scenario.turk_hydrogen_mekko_supply
        ).to softly_equal(
          scenario.turk_hydrogen_mekko_demand
        )
      end
    end
  end
end
```

Some use-cases for the mechanical turk tests are:
- To calculate if supply and demand are balanced for each carrier.
The ETM is a model that balances energy flows, demand and supply should in principle match.
- Verify the direction of change in outcomes when adjusting a slider.
These tests check whether slider changes would give the results we expect. 
It can be used to check whether model improvements give the expected results. An example is the first example above.
- To verify whether charts that should be balanced are in fact balanced
An example for this is the second code example above.
- To verifiy whether data in the charts is in line with the calculated graph data.
The charts should portray the data calculated in the graph. 
- To check if hourly and yearly calculations match.
The hourly calculations and yearly calculations are done by seperate modules. It is therefore important to check whether these are mathc.

The following functions are used in these tests:

```
increase
```  
Expects an increase for the given value. Returns "True" when the value increases, "False" when it decreases.
```
decrease
```  
Expects an decrease for the given value. Returns "True" when the value decreases, "False" when it increases.
```
not_increase
```  
Does not expect an increase for the given value. Returns "True" when the value decreases or stays the same, "False" when it increases.
```
not_change
```  
Does not expect a change for the given value. Returns "True" when the value the same, "False" when it increases or decreases
```
change
```  
Expect a change for the given value. Returns "True" when the value changes, "False" when it does not.
```
softly_equal
```  
Expect the two given values to equal each other with an error marging of 1.0E-12.
```
sum_to_softly_equal
```  
Expect the sum of the given values to equal the 'sum-value' with an error marging of 1.0E-12.



### GQL-sandbox
The GQL-sandbox is the place to test the GQL-queries.
A good understanding and maintenance of GQL is needed in developing our modeling tool and testset.

### Semaphore spec
The semaphore specs are run each time a commit is pushed to their respective repository. These test (among other things) check the files within the code base whether they follow the expected outline.

### Atlas rake debug
The Atlas rake debug command is used to verify whether changes to the graph are executed correctly.
