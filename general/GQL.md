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

` CHILDREN(V(small_chp_industry_energetic))`

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

` EXCLUDE([dennis,willem,alexander],[dennis])`
` => [willem,alexander]`

@param keys [Array,Array] @return [Array]

FILTER(converters, filter\_name, scope)
---------------------------------------

Selects only the converters that return true to the given instance\_evaled ruby string.

FILTER(ALL(); electricity\_input \> 0) @param converters [String] converters

FOR\_COUNTRIES(value\_terms, arguments, scope = nil)
-------------------------------
Excecutes statement only if Current.scenario.country is in parameter list. Note: separate countries with “;“ e.g.

` FOR_COUNTRIES(5;de;en;it)`
` # if Current.scenario.country is in the parameter list`
` => 5`
` => if not.`
` => nil`

G(keys, arguments, scope)
-------------------------

Alias for: GROUP

GOAL(key)
---------

Returns the GOAL object with the \`key\` name. The only important attribute of the GOAL object is \`user\_value\`.

`   UPDATE(GOAL(foobar),user_value,123)`

You can get that value back with

`   V(GOAL(foobar);user_value)`

or with the shortcut

`   GOAL_USER_VALUE(foobar)`

If the user didn't set any value then user\_value will be nil. To check if the user has set a value you can use

`   GOAL_IS_SET(foobar)`

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

` IF( condition , value if true , value if false )`

e.g.

` s`
` => 0`
` IF(LESS(1,3),IF(LESS(3,1),50,10),100)`
` => 10`

@param statements [Array] Expects 3 statements: condition, value if true, value if false @raise [GqlError] if condition statement is not boolean @raise [GqlError] if arguments does not contain 3 statements @return [Object]

INTERSECTION(keys, arguments, scope = nil)
-------------------------------
Returns the intersection of two sets of converters. e.g.

` INTERSECTION([dennis,willem,alexander],[sebastian,dennis,willem])`
` => [dennis,willem]`

It is mostly used to get an intersection of a group and a sector: e.g.

` INTERSECTION(GROUP(heat_production),SECTOR(industry))`

Note that it only works with two arguments. Bad:

` INTERSECTION(GROUP(team_members),dennis,willem)`

Good:

` INTERSECTION(GROUP(team_members),V(dennis,willem))`

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

` NIL()`

NIL\_TO\_ZERO(values, arguments, scope = nil)
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

` PARENTS(V(small_chp_industry_energetic))`

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

` RESCUE( DIVIDE(NIL(),5))`
` => 0.0`
` # with custom return value`
` RESCUE( DIVIDE(NIL(),5); 100.0)`
` => 100.0`
` # If no errors returns value`
` RESCUE( SUM(1,2); 100.0)`
` => 3.0`

@return [Object] returns the value or the parameter if rescues an exception

SECTOR(keys, arguments, scope)
------------------------------

Converters of a sector : \*SECTOR(households)\* @see Qernel::Converter::SECTORS list of sectors @param keys [Array] Sector key(s) @return [Array]

SUBQUERY(keys, arguments, scope)
--------------------------------

@deprecated Alias for: QUERY

SUM(values, arguments, scope = nil)
-------------------------------
Sum of a list of values. @param values [Array] @return [Float] Sum of values (ignoring nil values)

NIT(values, arguments, scope = nil)
-------------------------------
Converts a value to another format. Know what you do! Especially useful to write more readable Queries:

` PRODUCT(0.15,100) => 15.0 (%)`
` vs.`
` UNIT(0.15;percentage) => 15.0 (%)`

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

`  VALUE(foo; bar) == VALUE(foo, foo; bar)`

How to use:

` VALUE( list of converters ; attribute )`
` More exact:`
` VALUE([Array`<Converter>`],[Array`<Converter>`] ; ruby code run inside this objects)`

Getting values form multiple objects

` VALUE(foo,bar,etc; attribute_name)`
` => [3.0,2.0,5.0]`
` SUM( VALUE(foo,bar,etc; attribute_name) )`
` => 10.0`

Arbitrary complex select and attribute definition

` VALUE( GROUP(households), GROUP(industry) ; output_demand * -1.5 )`
` # translates internally into:`
` # VALUE( [households_foo, households_bar], [industry_foo, industry_bar] ; output_demand * - 1.5)`
` # translates internally into:`
` # VALUE( households_foo, households_bar, industry_foo, industry_bar ; output_demand * - 1.5)`

Special uses Get a value from a carrier We can use the VALUE method also to get values from other objects, mainly CARRIER.

` VALUE( CARRIER(electricity, useable_heat); co2_per_mj )`

Getting values from one object:

` VALUE(foo; attribute_name)`
` => 3.0`

Notice that a Float is returned and not an Array of one Float. This has the advantage that we don’t have to add a SUM-function. Use VALUE to define a collection of converters. Sometimes we want to make a GQL Subquery, that just returns a set of converters. E.g. coal\_plants

` VALUE(foo)`
` => foo`
` more complex:`
` VALUE( foo, VALUE(foo,bar))`
` => [foo, bar] # Note that foo only appears once. So duplicates are removed`

We can now store the latter query into a Gquery and access them later.

` foo_bar_converters: VALUE( foo, bar )`
` SUM( VALUE( Q(foo_bar_converters); demand) )`

@param keys [Array] A list of converters. @param attribute\_name [String] A ruby expression that is instance\_evaled for the selected converters. @return [Array] @return [Array] if no attribute\_name is defined. Also aliased as: V
