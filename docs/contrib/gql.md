---
title: Graph Query Language (GQL)
---
# General information GQL

GQL is used to calculate values that are used in the graphs, tables and figures that can be viewed in the model. Users can check values themselves by using the GQL-sandbox in ETEngine. This can be found here --> [Link]


Please note that the output that is printed in this documentation is dependent on the scenario the user is using. 

GQL is case sensitive. Since all GQL-functions are written in caps, this means that all functions **must** be written in caps in order to function.


List of all functions:

# Aggregate:

### COUNT(values)

Returns how many values. Removes nil values, but does not remove duplicates. 

*Basic example*:

```
COUNT(1) 
=> 1
COUNT(1,2)  
=> 2
```
*Node example*:

```
COUNT(L(foo,bar)) 
=> 2
```

*multiple LOOKUPS (does not remove duplicates)*

```
COUNT(L(foo,bar), L(foo)) 
=> 3
```

*Duplicates in one LOOKUP (does remove duplicates)*
```
COUNT(L(foo,bar,foo))
=> 2
```

### NEG(values)

Returns the *first* number as a negative

*example*:

```
NEG(2) 
=> -2

NEG(1,2,3)  
=> -1
```

AVG(values)
Returns the average of all number (ignores nil values).
```
AVG(1,2)    
=> 1.5

AVG(1,2,3)  
=> 2

AVG(1,nil,nil,2)  
=> 1.5
```

SUM
Returns the sum of all numbers (ignores nil values).
```
SUM(1,2) 
=> 3
SUM(1,nil)  
=> 1
```

### PRODUCT(values)

Multiplies all numbers (ignores nil values).

```
PRODUCT(1,2,3)
=>6 (1*2*3)

PRODUCT(1,nil)
=> 1
```


### DIVIDE(values)

Divides the first with the second.
```
DIVIDE(1,2)
=> 0.5

DIVIDE(1,2,3,4)
=> 0.5 --> only takes the second.
```

Constants:

MWH_TO_GJ = 3.6

HOURS_PER_YEAR = 8760.0

MAN_HOURS_PER_MAN_YEAR = 1800.0

MAN_YEAR_PER_MJ_INSULATION_PER_YEAR = 0.0000000122916

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

#NIL = nil if !defined?(NIL)

EURO_SIGN = '&euro;'

MONTHS_PER_YEAR = 12.0

INFINITY = Float::INFINITY

# Control




### EQUALS(values)

Checks if the **first two** values are given are equal.

```
EQUALS(2,2)
=> true

EQUALS(2,3)
=> false

EQUALS(2,2,3)
=> true

EQUALS(2,3,3)
=> false
```

### IF(condition, true_stmt, false_stmt)
If the condition is true, the true_stmt is given, if the condition is false, the false_stmt is given. 
```
IF(EQUALS(1,1),3,4) 
=> 3 --> EQUALS(1,1) returns 'true', so 3 is returned.

IF(EQUALS(1,2),3,4)
=> 4 --> EQUALS(1,2) returns 'false', so 4 is returned.
```

# Core

### V(args)

Shortcup for the LOOKUP and MAP function. Also see {#LOOKUP} and {#MAP}.

Example with node
```
V(foo) --> LOOKUP(foo)
=> foo
```

Example Lookup multiple nodes by their keys
```
V(foo,bar) --> LOOKUP(foo,bar)
=> [<foo>, <bar>]
```

Example Lookup a node attribute
```
V(foo,demand) --> MAP(LOOKUP(foo,demand))
=> 100 (When demand of node 'foo' is equal to 100)
```

Example nesting of LOOKUPs
```
V(V(foo), V(bar), demand) --> MAP(LOOKUP(foo, LOOKUP(bar)), demand)
=> 100, 200 
```

Example pass objects to V()
```
V(CARRIER(electricity), cost_per_mj) --> = MAP( LOOKUP(CARRIER(electricity)), cost_per_mj )
=> 23.3
```
### VALUE(args)

Alias for V()

### MV(args)

Same functionalities as V, but used for the molecule graph. 

### Q(key)

QUERY() or Q() returns the result of another gquery with given key.

Example costs

```
Q(total_costs)
=> 100
```

### Query(key)

Alias for Q()


### Lookup(keys)

lookup energy graph objects by their corresponding key(s).
keys - Provided keys should be energy graph node keys or Qernel objects 
Returns an array of the elements of the query: matching nodes or objects. Duplicates and nil values are removed.

Example 1 or 2 nodes:

```
LOOKUP(foo)  
=> [Node(foo)]

LOOKUP(foo, bar) 
=> [Node(foo), Node(bar)]
```

Elements that are not node keys are simply returned:
```
LOOKUP(foo,3.0)  
=> [Node(foo),3.0]

LOOKUP(foo, CARRIER(coal)) 
=> [Node(foo), Carrier(coal)]
```

nil and duplicate elements are removed:

```
LOOKUP(foo,nil)  
=> [Node(foo)]

LOOKUP(foo, Lookup(foo)) 
=> [Node(foo)]
```

### L(keys)
Alias for Lookup

### ML(keys)

Lookup or L for the moleculegraph, alias for MLOOKUP

### MLOOKUP(keys)
Lookup or L for the moleculegraph, alias for ML.

### MAP(elements, attr_name)

Access attributes of one or more objects.

=== Single and composed attributes
To query a single attribute simply pass it. You can put it inside '', "" or not.

To join multiple attributes and numbers surround it with "" or ''.

=== GQL functions as arguments

You can pass a GQL function as an argument to a *single* method.
Attributes dervied from GQL functions cannot be inside "" or ''.

Example with a single attribute:
```
MAP(L(foo), demand)
=> 100

MAP(L(foo), "demand")
=> 100

MAP(L(foo,bar), demand)
=> [100, 200]
```

Example Composed attributes add "" or ''

```
MAP(L(foo), 'demand * (3.0 + free_co2_factor)')
=> 100
```

```
MAP(L(foo), primary_demand_of(CARRIER(electricity)))
```
 ### TODO

### M(elements,attr_name)

ALIAS for MAP

### GET(keys)

Retrieves the attribute from one *single* object and is therefore similar to MAP.


# Curves

### ATTACHED_CURVE(name)

Looks up the attachment matching the `name`, and converts the contents into a curve. If no attachment is set, nil is returned.

### CLAMP_CURVE(curve, min, max)

Restricts the values in a curve to be between the minimum and maximum. Raises an error if min > max.

### COALESCE_CURVE(curve, default = 0.0, length = 8760)

If the given `curve` is an array of non-zero length, it is returned. If the curve is nil or empty, a new curve of `length` length is created, with each value set to `default`.

### CUMULATIVE_CURVE(curve)

Creates a new curve where each index (n) is the sum of (0..n) in the source curve.


### INVERT_CURVE(curve)

Inverts a single curve by swapping positive numbers to be negative, and vice-versa.

### SUM_CURVES(*curves)
Adds the values in multiple curves.

Example:

```
SUM_CURVES([1, 2], [3, 4])
=> [4, 6]

SUM_CURVES([[1, 2], [3, 4]])
=> [4, 6]
```


### PRODUCT_CURVES(left,right)
Multiplies two curves elementwise.
Note that unlike `SUM_CURVES`, `PRODUCT_CURVES` expects exactly two arguments, each one a curve.
An error will be raised if either parameter is an array of curves, or if the curves don't have matching lengths.

Example:
```
PRODUCT_CURVES([1, 2, 3], [4, 5, 6])
=> [4, 10, 18]
```

### DIVIDE_CURVES(left, right)
Divides two curves elementwise.
Note that unlike `SUM_CURVES`, `PRODUCT_CURVES` expects exactly two arguments, each one a curve.
An error will be raised if either parameter is an array of curves, or if the curves don't have matching lengths.
```
DIVIDE_CURVES([1, 2, 3], [4, 5, 6])
=> [0.25, 0.4, 0.5]
```

### SMOOTH_CURVE(curve, window_size)
Creates a smoothed curve using a moving average.
curve       - An array of numbers.
window_size - The number of points to average over.

# Helper

### OBSERVE_SET(objects, arguments)

OBSERVE_SET is mainly used to observe the graph calculation.
It may be extended for more use. Observing update statements is done
using Update#update_element_with in the debug runtime. 
#### Might not be interesting for user.


#### OBSERVE_GET(objects, arguments)

#### todo
#### Might not be interesting for user.

#### SORT_BY(*objects, arguments)
With SORT_BY nodes can be sorted on one of their attributes.
The nodes will be sorted ascending to the value of the attribute.
Ranking of the nodes will start from 0.
Note that the value of the attribute will not be printed, see TXT_TABLE for this functionality.

Example with the group 'useful_demand'.
```
SORT_BY(G(useful_demand),demand)
=> 
[
  #<Node industry_useful_demand_for_chemical_other_hydrogen_non_energetic> 0,
  #<Node bunkers_useful_demand_ships> 1,
  ...,
]
```


#### TXT_TABLE(objects, *argyments)
With TXT_TABLE 1 or more attributes from a node group can be queried.
The nodes in the given node group will be sorted alphabetically.

Within the GQL-sandbox users can choose how the view the table in 4 different modes:
* Table: Shows the table in standard GQL-sandbox format.
* Text: Shows the table in text-format.
* CSV: Shows the table in CSV (comma seperated values) format.
* TSV: Shows the table in TSV (tab seperated values) format.

Note: With 'key' the name of the node is printed.

Example (output in text format, for readibility only the first 2 and last 2 rows of the table are shown):
```
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
```
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

#### EXCEL_TABLE(objects, *arguments)
Similar functionality to TXT_TABLE


# Legacy

#### FILTER(collection, filter)
Imposes a filter.

Can be used to impose a filter on node groups based on node attributes, see example.

Example:

```
FILTER(G(electricity_production),"geothermal_input_conversion > 0.0")
=> 
[
  <#Node energy_power_geothermal>,
]
```

#### CHILDREN(*nodes)
#### Todo

#### PARENTS(*nodes)
#### Todo

#### INTERSECTION(*keys)
Returns the elements that are present in both the first and second arrays.

```
INTERSECTION( V(1,2,3) , V(2,3,4) )
=> [2, 3]
```

#### EXCLUDE(*keys)
Returns an Array of elements of the first array excluding the second array.
```
EXCLUDE( V(1,2,3) , V(2,3,4) )
=> [1]
```
#### INVALID_TO_ZERO(*keys)
Deprecated?

#### MAX(*values)
Returns the highest number.
```
MAX(-3,-2,5)
=> 5
```
#### MIN(*values)
Returns the lowest number.
```
MIN(-3,-2,5)
=> - 3
```
#### ABS(*values)
Returns all given numbers in absolute values.
```
ABS(-3,-2,5)
=> [3,2,5]
```

#### ROUND(value, precision = 0)
Public: Rounds numeric value to a given precision.
```
ROUND(3.334,2)
=> [3.33]
```

#### FLOOR(value, precision = 0)
Returns the largest number less than or equal to numeric value.
#### Todo

#### CEIL(value, precision = 0)
Returns the smallest number greater than or equal to numeric value.
#### Todo

#### SQRT(*values)
Returns the square root of the given values.
```
SQRT(4) 
=> [2]

SQRT(4,9) 
=> [2,3]

SUM(SQRT(4,9)) 
=> 5
```

#### LESS(x,y)
Returns true when x is smaller than y.
Note: This function only looks at the first two numbers entered in this function.

```
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
Returns true when x is smaller or equal than y.
Note: This function only looks at the first two numbers entered in this function.

```
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
Returns true when x is greater than y.
Note: This function only looks at the first two numbers entered in this function.

```
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
Returns true when x is smaller or equal than y.
Note: This function only looks at the first two numbers entered in this function.

```
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
Returns true when x is equal to y.
Note: This function only looks at the first two numbers entered in this function.

```
EQUALS(1,1) 
=> true

EQUALS(1,2) 
=> false

EQUALS(1,1,5)
=> true
```

#### NOT
Returns true when x is not equal to y.
Note: This function only looks at the first two numbers entered in this function.

```
NOT(1,1) 
=> false

NOT(1,2) 
=> true

NOT(1,1,5)
=> false
```

#### OR
#### TODO

#### IS_NUMBER(x)
Returns true when x is a number.
Note: The number is only recognized when placed in brackets.
Furthermore it only looks at the first element inside the brackets.
While not using brackets, the function will expect one element.

```
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

#### IS_NIL
#### TODO
Don't know a good true use case for this.

#### NEG(x)
Returns the first value but negative.

```
NEG(5) 
=> 5

NEG(5) 
=> -5
#### UNIT

#### INVERSE

#### FLATTEN

#### flatten_compact

#### flatten_uniq

# Lookup

QUERY_PRESENT

QUERY_FUTURE

QUERY_DELTA

MIXED

GRAPH

ALL

GROUP

MGROUP

EDGE_GROUP

MEDGE_GROUP

SECTOR

MSECTOR

USE

CARRIER

MCARRIER

AREA

INSULATION_COST

WEATHER_PROPERTY

FEVER_DEMAND

FEVER_PRODUCTION

CURVE_SET_VARIANTS

GOAL

GOAL_IS_SET

GOAL_USER_VALUE

ELEMENT_AT

LAST

FIRST

EDGE

MEDGE

EDGES

OUTPUT_SLOTS

INPUT_SLOTS

INPUT_EDGES

OUTPUT_EDGES

edges_for

edge_between_nodes

# Update

EACH

UPDATE

UPDATE_WITH_FACTOR

UPDATE_ABSOLUTE

update_something_by

update_element_with

USER_INPUT

# Graph Query Language

Made to be able to draw information from the graph. Many types of information can be queried. Ask one of the programmers for a automated version of this page, which is available in the code.

ABS(values, arguments, scope = nil)
-------------------------------
@param values [Array] @return [Array] absolute numbers

ALL(keys, arguments, scope)
---------------------------

All Converters in the graph. Use wisely. @return [Array

AREA(keys, arguments, scope)
----------------------------

{Qernel::Area Graph} attribute of current country: \*AREA(available\_land)\* @param keys [String] Attribute of area @return [Float]

AVG(values, arguments, scope = nil)
-------------------------------
@param values [Array] @return [Float] Average of values (ignoring nil values)

CARRIER(keys, arguments, scope)
-------------------------------

{Qernel::Carrier Carrier} with the keys: \*CARRIER(electricity)\* @param keys [Array] Carrier key(s) @return [Array]

CHILDREN(converters, arguments, scope)
--------------------------------------

Children of a converter(s). e.g.
```
CHILDREN(V(small_chp_industry_energetic))
```
@param converters [String] converters @return [Array] direct children of the converters

COMPARE(values, arguments, scope = nil)
-------------------------------
@param values [Float,Float] Two values. @return [-1,0,1]

COUNT(values, arguments, scope = nil)
-------------------------------
How many (non-nil) values are there? @param values [Array] @return [Integer] Size of array (ignoring nil values)

DIVIDE(values, arguments, scope = nil)
-------------------------------
@param values [Float,Float] @return [Float]

EQUALS(values, arguments, scope = nil)
-------------------------------
@param values [Float,Float] @return [Boolean] true if first equals second

EXCLUDE(keys, arguments, scope = nil)
-------------------------------
Returns the intersection of two sets of converters. e.g.
```
EXCLUDE([dennis,willem,alexander],[dennis])
=> [willem,alexander]`
```
@param keys [Array,Array] @return [Array]

FILTER(converters, filter\_name, scope)
---------------------------------------

Selects only the converters that return true to the given instance\_evaled ruby string.

FILTER(ALL(); electricity\_input \> 0) @param converters [String] converters

FOR\_COUNTRIES(value\_terms, arguments, scope = nil)
-------------------------------
Excecutes statement only if Current.scenario.country is in parameter list. Note: separate countries with “;“ e.g.
```
FOR_COUNTRIES(5;de;en;it)
# if Current.scenario.country is in the parameter list
=> 5
=> if not.
=> nil
```
G(keys, arguments, scope)
-------------------------

Alias for: GROUP

GOAL(key)
---------

Returns the GOAL object with the \`key\name. The only important attribute of the GOAL object is \`user\_value\`.
```
  UPDATE(GOAL(foobar),user_value,123)
```
You can get that value back with
```
 V(GOAL(foobar);user_value)
```
or with the shortcut
```
  GOAL_USER_VALUE(foobar)
```

If the user didn't set any value then user\_value will be nil. To check if the user has set a value you can use
```
   GOAL_IS_SET(foobar)
```
that will return a boolean.

GRAPH(keys, arguments, scope)
-----------------------------

{Qernel::GraphApi Graph} attributes: \*GRAPH(method)\* @see Qernel::GraphApi @param keys [String] GraphApi method @return [Float]

GREATER(values, arguments, scope = nil)
-------------------------------
GREATER(2,1) =\> true @param values [Float,Float] @return [Boolean] true if first is greater then second

GREATER\_OR\_EQUAL(values, arguments, scope = nil)
-------------------------------
@param values [Float,Float] @return [Boolean] true if first is greater or equal then second

GROUP(keys, arguments, scope)
-----------------------------

Converters of a {Qernel::Group Group}: \*GROUP(primary\_demand\_cbs)\* @param keys [Array] Group key(s) @return [Array] Also aliased as: G

IF(value\_terms, arguments, scope = nil)
-------------------------------
If statement, with a check clause (condition) and two values.
```
IF( condition , value if true , value if false )
```
e.g.
```
s
=> 0
IF(LESS(1,3),IF(LESS(3,1),50,10),100)
=> 10
```
@param statements [Array] Expects 3 statements: condition, value if true, value if false @raise [GqlError] if condition statement is not boolean @raise [GqlError] if arguments does not contain 3 statements @return [Object]

INTERSECTION(keys, arguments, scope = nil)
-------------------------------
Returns the intersection of two sets of converters. e.g.
```
INTERSECTION([dennis,willem,alexander],[sebastian,dennis,willem])
=> [dennis,willem]
```
It is mostly used to get an intersection of a group and a sector: e.g.
```
INTERSECTION(GROUP(heat_production),SECTOR(industry))
```
Note that it only works with two arguments. Bad:
```
INTERSECTION(GROUP(team_members),dennis,willem)
```
Good:
```
INTERSECTION(GROUP(team_members),V(dennis,willem))
```
@param keys [Array,Array] Intersection of two converter arrays @return [Array]

NVALID\_TO\_ZERO(values, arguments, scope = nil)
-------------------------------
converts nil and NaN values to zero values @param values [Float,Array] @return [Float,Array] Array with nil or NaN values converted to zero

INVERSE(values, arguments, scope = nil)
-------------------------------
@param values [Float] @return [Float] 1 / x of value

IS\_NIL(value, arguments, scope = nil)
-------------------------------
checks if value is nil @param value [Float] @return [Boolean] Is the argument a numeric

IS\_NUMBER(value, arguments, scope = nil)
-------------------------------
Is the value a number (and not nil or s’thing else). @param value [Float] @return [Boolean] Is the argument a numeric

LESS(values, arguments, scope = nil)
-------------------------------
LESS(1,2) =\> true LESS(1,1) =\> false @param values [Float,Float] @return [Boolean] true if first is less then second

LESS\_OR\_EQUAL(values, arguments, scope = nil)
-------------------------------
LESS\_OR\_EQUAL(1,1) =\> true @param values [Float,Float] @return [Boolean] true if first is less or equal then second

MAX(values, arguments, scope = nil)
-------------------------------
@param values [Array] @return [Float] the highest number

MIN(values)
-----------

@param values [Array] @return [Float] the lowest number

MIXED(q1,q2)
------------

This will run two different queries, one for the present and one for the future graph. This is mainly used for chart series.

NEG(values, arguments, scope = nil)
-------------------------------
@param values [Float] @return [Float] -(value)

NIL()
-----

Returns a nil value. mainly used for testing. e.g.
NIL()
```
NIL\_TO\_ZERO(values, arguments, scope = nil)
```
-------------------------------
convert nil values to zero values @param values [Float,Array] @return [Float,Array] Array with nil values converted to zero

NOT(values, arguments, scope = nil)
-------------------------------
@param values [Boolean] @return [Boolean] inverse of values

OR(values, arguments, scope = nil)
-------------------------------
@param values [Array] @return [Boolean] Any of the values true?

PARENTS(converters, arguments, scope)
-------------------------------------

Direct parents of a converter(s). e.g.
```
PARENTS(V(small_chp_industry_energetic))
```
@param converters [String] converters @return [Array] direct parents of the converters

PRODUCT(values, arguments, scope = nil)
-------------------------------
PRODUCT(1,2,3) =\> 1 \* 2 \* 3 =\> 6 @param values [Array] @return [Float] Product of all values (ignoring nil values).

Q(keys, arguments, scope)
-------------------------

Alias for: QUERY

QUERY(keys, arguments, scope)
-----------------------------

Executes a subquery with the given key (all stored Gqueries (see /admin/gqueries) can act as subquery): \*QUERY( total\_energy\_cost )\* @param keys [String] The key of the subquery (Gquery) @return The result of the subquery Also aliased as: Q, SUBQUERY

RESCUE(value\_terms, params, scope = nil)
-------------------------------
Returns the parameter value (or 0.0 as default) if an error is raised in the value. e.g.
```
RESCUE( DIVIDE(NIL(),5))
=> 0.0`
# with custom return value
RESCUE( DIVIDE(NIL(),5); 100.0)
=> 100.0
# If no errors returns value
RESCUE( SUM(1,2); 100.0)
=> 3.0
```
@return [Object] returns the value or the parameter if rescues an exception

SECTOR(keys, arguments, scope)
------------------------------

Converters of a sector : \*SECTOR(households)\* @see Qernel::Converter::SECTORS list of sectors @param keys [Array] Sector key(s) @return [Array]

SUBQUERY(keys, arguments, scope)
--------------------------------

@deprecated Alias for: QUERY
```
SUM(values, arguments, scope = nil)
```
-------------------------------
Sum of a list of values. @param values [Array] @return [Float] Sum of values (ignoring nil values)

NIT(values, arguments, scope = nil)
-------------------------------
Converts a value to another format. Know what you do! Especially useful to write more readable Queries:
```
PRODUCT(0.15,100) => 15.0 (%)
vs.`
UNIT(0.15;percentage) => 15.0 (%)
```
@param values [Float] @return [Float] Converted value

USE(keys, arguments, scope)
---------------------------

Converters of a “energy use”: energetic, non\_energetic, undefined: \*USE(energetic)\* @see Qernel::Converter::USE list of energy uses @param keys [Array] Use key(s) @return [Array]

V(converters, attribute\_name, scope = nil)
-------------------------------
Alias for: VALUE

VALUE(converters, attribute\_name, scope = nil)
-------------------------------
VALUE returns the attributes for a set of Converters. Note that duplicate converters are removed, so that
```
 VALUE(foo; bar) == VALUE(foo, foo; bar)
```
How to use:
```
VALUE( list of converters ; attribute )
More exact:
VALUE([Array`<Converter>`],[Array`<Converter>`] ; ruby code run inside this objects)
```
Getting values form multiple objects
```
VALUE(foo,bar,etc; attribute_name)
=> [3.0,2.0,5.0]
SUM( VALUE(foo,bar,etc; attribute_name) )
=> 10.0
```
Arbitrary complex select and attribute definition
```
VALUE( GROUP(households), GROUP(industry) ; output_demand * -1.5 )
# translates internally into:
# VALUE( [households_foo, households_bar], [industry_foo, industry_bar] ; output_demand * - 1.5)
# translates internally into:
# VALUE( households_foo, households_bar, industry_foo, industry_bar ; output_demand * - 1.5)
```
Special uses Get a value from a carrier We can use the VALUE method also to get values from other objects, mainly CARRIER.
```
VALUE( CARRIER(electricity, useable_heat); co2_per_mj )
```
Getting values from one object:
```
VALUE(foo; attribute_name)
=> 3.0
```
Notice that a Float is returned and not an Array of one Float. This has the advantage that we don’t have to add a SUM-function. Use VALUE to define a collection of converters. Sometimes we want to make a GQL Subquery, that just returns a set of converters. E.g. coal\_plants
```
VALUE(foo)
=> foo
more complex:
VALUE( foo, VALUE(foo,bar))
=> [foo, bar] # Note that foo only appears once. So duplicates are removed
```
We can now store the latter query into a Gquery and access them later.
```
foo_bar_converters: VALUE( foo, bar )
SUM( VALUE( Q(foo_bar_converters); demand) )
```
@param keys [Array] A list of converters. @param attribute\_name [String] A ruby expression that is instance\_evaled for the selected converters. @return [Array] @return [Array] if no attribute\_name is defined. Also aliased as: V