---
title: Graph query language (GQL)
---

GQL is used to calculate values that are used in the graphs, tables and figures that can be viewed in the model. An overview of all gqueries can be found in [this folder](https://github.com/quintel/etsource/tree/master/gqueries).

## Gqueries

Gqueries are in fact stored GQL procedures that have a key. So that if the user wants to know the total co2 emissions of an area, it can request the ETEngine for gquery `total_co2_emissions` and does not have to worry about the underlying intricacies.

### Writing gqueries

GQL is case sensitive. Since all GQL-functions are written in caps, this means that all functions **must** be written in caps in order to function. When writing gqueries, the following guidelines should be kept in mind:

- Base gqueries are added in the `general` folder on [Github](https://github.com/quintel/etsource/tree/master/gqueries/general).
- Other gqueries, for example gqueries used in `output_elements`, should refer to base gqueries when possible.
- Base gqueries have a consistent set of base units, for example `kg` for **emissions**, `MW` for **capacity** and `MJ` for **energy**.
- Base gqueries have a consistent nomenclature: for example **type**, **subtype**, **sector**, **subsector**, **carrier**.
- Base gqueries should have a description.
- To enhance readability, our preferred indentation style for Gqueries involves initially indenting with 4 spaces, followed by an additional 2 spaces for subsequent levels.

Example for `final_demand_energetic_industry_steel_wood_pellets`:
```
# Energetic final demand of the 'coal' carrier group in industry steel sector.

- query =
    SUM(
      V(
        FILTER(
          FILTER(
            INTERSECTION(EG(final_demand),EG(appliances_households)
            ),
            "coal? || coal_gas? || cokes? || lignite?"
          ),
          "energetic?"
        ),
        value
      )
    )
- unit = PJ
```

##  Functions

### Math functions

The math functions consists of functions that perform mathematical operations or calculations on numerical data. Some example functions are COUNT(), SUM(), DIVIDE() can be found here as well as comparing functions like GREATER() or EQUALS().

#### COUNT(values)

Returns how many values. Removes nil values, but does not remove duplicates. 

```ruby
COUNT(V(foo,bar)) 
=> 2
```

*Multiple LOOKUPS (does not remove duplicates)*

```ruby
COUNT(V(foo,bar), V(foo)) 
=> 3
```

*Duplicates in one LOOKUP (does remove duplicates)*
```ruby
COUNT(V(foo,bar,foo))
=> 2
```

#### NEG(values)

Returns the *first* number as a negative.

```ruby
NEG(2) 
=> -2

NEG(1,2,3)  
=> -1
```

#### AVG(values)
Returns the average of all number (ignores nil values).

```ruby
AVG(1,2)    
=> 1.5

AVG(1,2,3)  
=> 2

AVG(1,nil,nil,2)  
=> 1.5
```

#### SUM
Returns the sum of all numbers (ignores nil values).

```ruby
SUM(1,2) 
=> 3
SUM(1,nil)  
=> 1
```

#### PRODUCT(values)

Multiplies all numbers (ignores nil values).

```ruby
PRODUCT(1,2,3)
=>6 (1*2*3)

PRODUCT(1,nil)
=> 1
```

#### DIVIDE(values)

Divides the first value with the second value.

```ruby
DIVIDE(1,2)
=> 0.5

DIVIDE(1,2,3,4)
=> 0.5 --> only takes the second.
```

#### INVALID_TO_ZERO(keys)

When an invalid value is given, a zero is returned.
```ruby
INVALID_TO_ZERO(nil)
=> 0

INVALID_TO_ZERO(3)
=> 3

INVALID_TO_ZERO([3,3,nil,4])
=> [3,3,0,4]
```

#### MAX(values)

Returns the highest number.

```ruby
MAX(-3,-2,5)
=> 5
```

#### MIN(values)

Returns the lowest number.

```ruby
MIN(-3,-2,5)
=> - 3
```

#### ABS(values)

Returns all given numbers in absolute values.

```ruby
ABS(-3,-2,5)
=> [3,2,5]
```

#### ROUND(value, precision = 0)

Public: Rounds numeric value to a given precision.

```ruby
ROUND(3.334,2)
=> [3.33]
```

#### FLOOR(value, precision = 0)

Returns the largest number less than or equal to numeric value.

```ruby
FLOOR(3.5)
=> 3
```

#### CEIL(value, precision = 0)

Returns the smallest number greater than or equal to numeric value.

```ruby
CEIL(3.5)
=> 4
```

#### SQRT(values)

Returns the square root of the given values.

```ruby
SQRT(4) 
=> [2]

SQRT(4,9) 
=> [2,3]
```

#### LESS(x,y)

Returns true when x is smaller than y. Note: This function only looks at the first two values entered in this function.

```ruby
LESS(1,2) 
=> true

LESS(2,1) 
=> false

LESS(1,2,1)
=> true

LESS(1,2,5)
=> true
```

#### LESS_OR_EQUAL(x,y)

Returns true when x is smaller or equal than y. Note: This function only looks at the first two values entered in this function.

```ruby
LESS_OR_EQUAL(1,2) 
=> true

LESS_OR_EQUAL(1,1) 
=> true

LESS_OR_EQUAL(2,1) 
=> false

LESS_OR_EQUAL(1,2,1)
=> true

LESS_OR_EQUAL(1,2,5)
=> true
```

#### GREATER(x,y)

Returns true when x is greater than y. Note: This function only looks at the first two values entered in this function.

```ruby
GREATER(1,2) 
=> false

GREATER(2,1) 
=> true

GREATER(2,1,1)
=> true

GREATER(2,1,5)
=> true
```

#### GREATER_OR_EQUAL(x,y)
Returns true when x is smaller or equal than y. Note: This function only looks at the first two values entered in this function.

```ruby
GREATER_OR_EQUAL(1,2) 
=> false

GREATER_OR_EQUAL(1,1) 
=> true

GREATER_OR_EQUAL(2,1) 
=> true

GREATER_OR_EQUAL(2,1,1)
=> true

GREATER_OR_EQUAL(2,1,5)
=> true
```

#### EQUALS(x,y)
Returns true when x is equal to y. Note: This function only looks at the first two values entered in this function.

```ruby
EQUALS(1,1) 
=> true

EQUALS(1,2) 
=> false

EQUALS(1,1,5)
=> true
```

#### NOT
Returns true when x is not equal to y. Note: This function only looks at the first two values entered in this function.

```ruby
NOT(1,1) 
=> false

NOT(1,2) 
=> true

NOT(1,1,5)
=> false
```

#### OR(values)
Takes any number of arguments and checks if any of the arguments are true. 
If any are true, the functions returns 'true'. If not, false is returned.
```ruby
OR(true,false) 
=> true --> true is one of the arguments.

OR(false,false)
=> false --> true is not one of the arguments

OR(3,3)
=> false --> true is not one of the arguments
```




#### IS_NUMBER(x)

Returns true when x is a number. Note: The value is only recognized when placed in brackets.
Furthermore it only looks at the first element inside the brackets.
While not using brackets, the function will expect one element.

```ruby
IS_NUMBER(1) 
=> Error

IS_NUMBER([3]) 
=> true

IS_NUMBER('three') 
=> false

IS_NUMBER([3,'three']) 
=> true

IS_NUMBER([3],'three')
=> Error: Wrong number of elements
```

#### IS_NIL (value)
Returns true when the given value is nil. False when the value is not nil.

#### NEG(x)
Returns the negative value of the given value. Note: Only the first value is taken into account.

```ruby
NEG(1) 
=> -1

NEG(1,2)
=> -1

NEG(-1,-2)
=> 1
```

#### UNIT(x,unit)

Converts a value to another format.

```ruby
UNIT(0.15,percentage) 
=> 15.0 (%)
```

#### INVERSE(x)
Returns the inverse of a given value. Note: Only the first value is taken into account.

```ruby
INVERSE(5)
=> 0.2

INVERSE(5,2)
=> 0.2
```

#### FLATTEN(array)

Flattens any nested arrays into a single array with depth=1, removing nils

```ruby
FLATTEN([[1],[2],[3]])
=>
[1,2,3]
```

#### EQUALS(values)

Checks if the **first two** values that are given are equal.

```ruby
EQUALS(2,2)
=> true

EQUALS(2,3)
=> false

EQUALS(2,2,3)
=> true

EQUALS(2,3,3)
=> false
```

#### IF(condition, true_stmt, false_stmt)

If the condition is true, the true_stmt is returned, if the condition is false, the false_stmt is returned.

```ruby
IF(EQUALS(1,1),3,4) 
=> 3 --> EQUALS(1,1) returns 'true', so 3 is returned.

IF(EQUALS(1,2),3,4)
=> 4 --> EQUALS(1,2) returns 'false', so 4 is returned.
```

### Core functions

The Core functions form the core of GQL. With these functions you can extract data from elements of the model.

#### V(args)

Shortcut for the LOOKUP and MAP function. Used to retrieve information from the energy graph.

Example with node.

```ruby
V(foo) --> LOOKUP(foo)
=> foo
```

Example Lookup multiple nodes by their keys.

```ruby
V(foo,bar) --> LOOKUP(foo,bar)
=> [<foo>, <bar>]
```

Example Lookup a node attribute.

```ruby
V(foo,demand) --> MAP(LOOKUP(foo,demand))
=> 100 (When demand of node 'foo' is equal to 100)
```

Example nesting of LOOKUPs.

```ruby
V(V(foo), V(bar), demand) --> MAP(LOOKUP(foo, LOOKUP(bar)), demand)
=> 100, 200 
```

Example pass objects to V().

```ruby
V(CARRIER(electricity), cost_per_mj) --> = MAP( LOOKUP(CARRIER(electricity)), cost_per_mj )
=> 23.3
```

#### MV(args)

Same functionalities as V, but used for the molecule graph. 

#### Q(key)

QUERY() or Q() returns the result of a gquery with given key.

```ruby
Q(total_costs)
=> 100
```

#### CHILDREN(nodes)

Outputs the nodes corresponding to the outgoing edges of the given node.
```ruby
CHILDREN(V(households_space_heater_coal))
=> <Node households_final_demand_for_space_heating_coal>
```

#### PARENTS(nodes)
```ruby
PARENTS(V(households_space_heater_coal))
=> <Node households_space_heater_coal_aggregator>
```

Outputs the nodes corresponding to the incoming edges of the given node.

#### QUERY_PRESENT(key)

Returns the present value of the the gquery, when given a key. If the argument is a lambda ( -> { ... }), it returns the present value of the query inside the lamba.

```ruby
GRAPH(year)
=>
2019      2,019
2050      2,050

Q(graph_year)
=>
2019      2,019
2050      2,050


QUERY_PRESENT(graph_year)  
=>
2,019

QUERY_PRESENT( -> { GRAPH(year) } )   
=> 
2,019

QUERY_PRESENT(GRAPH(year))   
=> 
error

```

#### QUERY_FUTURE(key)

Returns the present value of the the gquery, when given a key. If the argument is a lambda ( -> { ... }), it returns the present value of the query inside the lamba. 

```ruby
GRAPH(year)
=>
2019      2,019
2050      2,050

Q(graph_year)
=>
2019      2,019
2050      2,050


QUERY_FUTURE(graph_year)  
=>
2,050

QUERY_FUTURE( -> { GRAPH(year) } )   
=> 
2,050

QUERY_FUTURE(GRAPH(year))   
=> 
error
```

#### QUERY_DELTA(key)

Returns the delta of the present value and future value of the query. Note: an operation within this query should be noted inside ( -> { ... }).

```ruby
QUERY_DELTA(graph_year)  
=> 
2019: 0.0
2050 : 31

QUERY_DELTA( -> { GRAPH(year) } )   
=> 
2019: 0.0
2050 : 31

QUERY_DELTA(GRAPH(year))
=>
error
```

#### AREA()

Returns an attribute.

```ruby
AREA(present_number_of_residences) 
=> 7349500.0
```

#### LAST(values)

Returns the last element of the array.

```ruby
LAST(V(1,2,3))
=>
3
```

#### FIRST(values)

Returns the first element of the array.
```ruby
LAST(V(1,2,3))
=>
1
```

#### EDGE(lft,rgt)

Returns the edge that goes from the first (lft) to the second node (rgt) for the energy graph.

```ruby
EDGE(energy_import_electricity,energy_interconnector_1_imported_electricity
)
=>
#<Qernel::Edge "energy_import_electricity-energy_interconnector_1_imported_electricity@imported_electricity">
```

#### MEDGE(lft,rgt)

Returns the edge that goes from the  first (lft) to the second node (rgt) for the molecule graph. See EDGE() for functionality


#### EDGES()

Retrieves edges based on given node(s) and optional arguments to filter or specify the type of edges.

```ruby
EDGES(V(foo))
=>
[foo->gas_1, foo->gas_2, loss1->foo, heat1->foo]

EDGES(V(foo), "share?")
EDGES(V(foo), "flexible?")
EDGES(V(foo), "flexible? && share >= 1.0")
=>
[Edges based on specified constraints]

EDGES(OUTPUT_SLOTS(foo, heat))
=>
[heat->foo]

EDGES(V(foo, bar))
=>
[Edges of multiple nodes]
```

#### OUTPUT_SLOTS()

Gets the output (to the left) slots of node(s). Can specify a particular type of slot or retrieve all output slots.

```ruby
OUTPUT_SLOTS(foo)
=>
[(loss)-foo, (heat)-foo]

OUTPUT_SLOTS(V(foo))
=>
[(loss)-foo, (heat)-foo]

OUTPUT_SLOTS(V(foo, bar))
=>
[(loss)-foo, (heat)-foo, ...]

OUTPUT_SLOTS(foo, loss)
=>
[(loss)-foo]
```

#### INPUT_SLOTS()

Gets the input (to the right) slots of node(s). Can specify a particular type of slot or retrieve all input slots.

```ruby
INPUT_SLOTS(foo)
=>
[foo-(gas), foo-(oil)]

INPUT_SLOTS(foo, gas)
=>
[foo-(gas)]
```

#### INPUT_EDGES()

Retrieves input edges based on given node(s) and optional arguments to filter or specify the type of edges.

```ruby
INPUT_EDGES(V(foo))
=>
[All input edges of node 'foo']

INPUT_EDGES(V(foo), "share?")
INPUT_EDGES(V(foo), "flexible?")
INPUT_EDGES(V(foo), "flexible? && share >= 1.0")
=>
[Input edges based on specified constraints]

INPUT_EDGES(INPUT_SLOTS(foo, oil))
=>
[foo->oil_1]

INPUT_EDGES(V(foo, bar))
=>
[Input edges of multiple nodes]
```

#### OUTPUT_EDGES()

Retrieves output edges based on given node(s) and optional arguments to filter or specify the type of edges.

```ruby
OUTPUT_EDGES(V(foo))
=>
[All output edges of node 'foo']

OUTPUT_EDGES(V(foo), "share?")
OUTPUT_EDGES(V(foo), "flexible?")
OUTPUT_EDGES(V(foo), "flexible? && share >= 1.0")
=>
[Output edges based on specified constraints]

OUTPUT_EDGES(OUTPUT_SLOTS(foo, heat))
=>
[heat->foo]

OUTPUT_EDGES(V(foo, bar))
=>
[Output edges of multiple nodes]
```

### Curves functions

With these functions you can perform operations with curves from the merit or fever modules.

#### CLAMP_CURVE(curve, min, max)

Restricts the values in a curve to be between the minimum and maximum. Raises an error if min > max.

```ruby
CLAMP_CURVE([1,2,3,4],0,2)
=> [1,2,2,2]

CLAMP_CURVE([1,-2,3,-4],0,2)
=> [1,0,2,0]
```

#### COALESCE_CURVE(curve, default = 0.0, length = 8760)

If the given `curve` is an array of non-zero length, it is returned. If the curve is nil or empty, a new curve with the lentgh of the value that is given to `length` is created, each value in the curve is set to the value that is given to `default`.

```ruby
COALESCE_CURVE(nil,3,5)
=> [3,3,3,3,3]

COALESCE_CURVE(nil)
=> [0,0,0,...,0]
Since no values are given for default & length, these are set to 0 & 8760 respectively

```

#### CUMULATIVE_CURVE(curve)

Creates a new curve where each index (n) is the sum of (0..n) in the source curve.

```ruby
CUMULATIVE_CURVE([1, 2,3,4])
=> [1,3,6,10]

CUMULATIVE_CURVE([1,-2,3,-4])
=> [1,-1,2,-2]
```


#### INVERT_CURVE(curve)

Inverts a single curve by swapping positive numbers to be negative, and vice-versa.

```ruby
INVERT_CURVE([1, 2,3,4])
=> [-1,-2,-3,-4]

INVERT_CURVE([1,-2,3,-4])
=> [-1,2,-3,4]
```


#### SUM_CURVES(curves)

Adds the values in multiple curves.

```ruby
SUM_CURVES([1, 2], [3, 4])
=> [4, 6]

SUM_CURVES([[1, 2], [3, 4]])
=> [4, 6]
```

#### PRODUCT_CURVES(left,right)
Multiplies two curves elementwise. Note that unlike `SUM_CURVES`, `PRODUCT_CURVES` expects exactly two arguments, each one a curve. An error will be raised if either parameter is an array of curves, or if the curves don't have matching lengths.

```ruby
PRODUCT_CURVES([1, 2, 3], [4, 5, 6])
=> [4, 10, 18]
```

#### DIVIDE_CURVES(left, right)
Divides two curves elementwise. Note that unlike `SUM_CURVES`, `DIVIDE_CURVES` expects exactly two arguments, each one a curve. An error will be raised if either parameter is an array of curves, or if the curves don't have matching lengths.

```ruby
DIVIDE_CURVES([1, 2, 3], [4, 5, 6])
=> [0.25, 0.4, 0.5]
```

#### SMOOTH_CURVE(curve, window_size)

Creates a smoothed curve using a moving average. `curve` is the curve you want to use as input, the `window_size` is the number of points the curve will be averaged over.

```ruby
SMOOTH_CURVE([3,2,4,3],1)
=> [3,2,4,3] --> Returns the input curve since each point is averaged on only one point.
```
```ruby
SMOOTH_CURVE([3,2,4,3],2)
=> [3,2.5,3,3.5] --> Returns a differenct curve since the window_size is bigger.
```


### Helper functions

These functions can support the user in gaining a quick insight in the data. See the examples below for use cases of these functions.

#### SORT_BY(objects, arguments)

With SORT_BY nodes can be sorted on one of their attributes. The nodes will be sorted ascending to the value of the attribute. Ranking of the nodes will start from 0. Note that the value of the attribute will not be printed, see TXT_TABLE for this functionality.

```ruby
SORT_BY(G(useful_demand),demand)
=> 
[
  #<Node industry_useful_demand_for_chemical_other_hydrogen_non_energetic> 0,
  #<Node bunkers_useful_demand_ships> 1,
  ...,
]
```


#### TXT_TABLE(objects, *argyments)

With TXT_TABLE 1 or more attributes from a node group can be queried. The nodes in the given node group will be sorted alphabetically.

Within the GQL-sandbox users can choose how the view the table in 4 different modes:
* Table: Shows the table in standard GQL-sandbox format.
* Text: Shows the table in text-format.
* CSV: Shows the table in CSV (comma seperated values) format.
* TSV: Shows the table in TSV (tab seperated values) format.

Note: With 'key' the name of the node is printed.

Example (output in text format, for readibility only the first 2 and last 2 rows of the table are shown):
```ruby
TXT_TABLE(G(useful_demand),key,demand)
=> 
+------------------------------------------------------------------------------+--------------------+
|                                     key                                      |       demand       |
+------------------------------------------------------------------------------+--------------------+
| agriculture_useful_demand_electricity                                        | 40964534066.695656 |
| agriculture_useful_demand_useable_heat                                       | 98697676910.08954  
|...                                                                           | ...                |
| transport_useful_demand_trucks                                               | 144749566437.32986 |
| transport_useful_demand_vans                                                 | 1280922944.4741797 |
+------------------------------------------------------------------------------+--------------------+
```

This function can be combined with SORT_BY, so that a quick overview of the nodes with the highest attributes can be found.

Example with SORT_BY (output in text format, for readibility only the first 2 and last 2 rows of the table are shown):
```ruby
TXT_TABLE(SORT_BY(G(useful_demand),demand),key,demand)
=> 
+------------------------------------------------------------------------------+--------------------+
|                                     key                                      |       demand       |
+------------------------------------------------------------------------------+--------------------+
| industry_useful_demand_for_chemical_other_hydrogen_non_energetic             | 0.0                |
| bunkers_useful_demand_ships                                                  | 0.0                |
|...                                                                           | ...                |
| industry_useful_demand_for_chemical_other_non_energetic                      | 414554538059.73004 |
| industry_useful_demand_for_chemical_refineries_crude_oil_non_energetic       | 2650973321780.0    |
+------------------------------------------------------------------------------+--------------------+
```
#### EACH()

Lets the user run multiple queries.

```ruby
EACH(
  SUM(foo, ...),
  SUM(bar, ...)
)
=>
[Results of SUM queries]

```

### Set functions

These functions concern operations associated with graph theory.

#### ALL()
Returns an Array of all nodes in the energy graph.

#### MALL()
Returns an Array of all nodes in the molecule graph.

#### GROUP(group)

Returns an Array of all nodes for a given energy group.

```ruby
GROUP(apartments)
=>
[
  #<Node households_useful_demand_for_space_heating_apartments_1945_1964>,
  #<Node households_useful_demand_for_space_heating_apartments_1965_1984>,
  #<Node households_useful_demand_for_space_heating_apartments_1985_2004>,
  #<Node households_useful_demand_for_space_heating_apartments_2005_present>,
  #<Node households_useful_demand_for_space_heating_apartments_before_1945>,
  #<Node households_useful_demand_for_space_heating_apartments_future>,
]
```

#### MGROUP(group)

Returns an Array of all nodes for a given molecule group.

```ruby
MGROUP(ccu_emitted)

[
  #<Node molecules_production_synthetic_methanol_emitted_co2>,
]
```

#### EDGE_GROUP(group)

TO-DO

#### MEDGE_GROUP(group)

TO-DO

#### SECTOR(sector)

Returns an Array of nodes for a given energy sector.

```ruby
###SECTOR(households)
=>
[
  #<Node households_apartments_useful_demand_for_space_heating>,
  #<Node households_apartments_useful_demand_for_space_heating_after_insulation>,
...
]
```

#### MSECTOR(sector)

Returns an Array of nodes for a given molecule sector.

```ruby
SECTOR(energy)
=>
[
  #<Node energy_chp_supercritical_ccs_ht_waste_mix_captured_co2>,
  #<Node energy_chp_supercritical_ccs_ht_waste_mix_co2>,
...
]
```

#### CARRIER(key)

Returns an Array of carriers for given key(s). Returns carriers belonging to the energy graph.

```ruby
CARRIER(electricity)
=>
[
  <Qernel::Carrier id:electricity key:electricity>,
]
```

#### MCARRIER()

Returns an Array of carriers for given key(s). Returns carriers belonging to the molecule graph. See CARRIER.

#### INTERSECTION(keys)

Returns the elements that are present in both the first and second arrays.

```ruby
INTERSECTION( V(1,2,3) , V(2,3,4) )
=> [2, 3]
```

#### EXCLUDE(keys)

Returns an Array of elements of the first array excluding the second array.

```ruby
EXCLUDE( V(1,2,3) , V(2,3,4) )
=> [1]
```

#### FILTER(collection, filter)

Imposes a filter. Can be used to impose a filter on node groups based on node attributes, see example.

```ruby
FILTER(G(electricity_production),"geothermal_input_conversion > 0.0")
=> 
[
  <#Node energy_power_geothermal>,
]
```

### Fever functions

These functions concern operations associated with the Fever module.

#### FEVER_DEMAND
TO-DO

#### FEVER_PRODUCTION
TO-DO
#### FEVER_PRODUCTION_CURVE_FOR_COUPLE
TO-DO

#### FEVER_DEMAND_CURVE_FOR_PEOPLE
TO-DO

#### FEVER_PRODUCTION_CURVE
TO-DO
#### FEVER_DEMAND_CURVE
TO-DO

### Update functions

These functions concern operations used to update values in the model.

#### UPDATE()

Updates attributes or elements based on the specified conditions or inputs, with various strategies (absolute, relative_total, or relative_per_year). Can be cobmined with the `EACH` function.

```ruby
UPDATE(V(foo), demand, 100)
=>
Demand becomes 100

UPDATE(V(foo, bar, baz), demand, 5)
=>
Demand of all nodes becomes 5

EACH(
  UPDATE(foo, ...),
  UPDATE(bar, ...)
)
=>
[Results of UPDATE queries]


```

#### UPDATE_WITH_FACTOR()
Same as `UPDATE`, but the input value is expected to be a factor that the user supplies.

```ruby
UPDATE_WITH_FACTOR(V(foo), preset_demand, 1.1)
=>
Foo gets a demand of 110.0

```

#### USER_INPUT()

Retrieves the numeric value of the user input, handling different formats (absolute, percentage, etc.).

```ruby
USER_INPUT()
=>
3.0 (if the user input is "3")
```

#### INPUT_VALUE(key)

Retrieves the value of a specified input.

```ruby
INPUT_VALUE('agriculture_geothermal_share')
=>
0.104
```

### Constants

```ruby
MWH_TO_GJ = 3.6
MONTHS_PER_YEAR = 12.0
HOURS_PER_YEAR = 8760.0
SECS_PER_HOUR = 3600.0
SECS_PER_YEAR = SECS_PER_HOUR * HOURS_PER_YEAR
KG_PER_TONNE = 1000
LITER_PER_BARREL = 159
MJ_TO_MHW = 3600
MJ_PER_KWH = 3.6
MJ_PER_MWH = 3600
BILLIONS = 10.0**9
MJ_TO_PJ = BILLIONS
MILLIONS = 10.0**6
THOUSANDS = 1000.0
```
