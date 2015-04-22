# The topology YAML

As we have seen in the [topology documentation page](https://github.com/quintel/documentation#topology), a network structure can be defined in YAML format:

```
---
name: "High Voltage #1"
children:
  - name: "Medium Voltage #1"
    children:
      - name: "MV connection #1"
      - name: "Low Voltage #1"
      - name: "Low Voltage #2"
  - name: "Medium Voltage #2"
    children:
      - name: "Low Voltage #3"
      - name: "Low Voltage #4"
      - name: "Low Voltage #5"
```

We will now describe the syntax of the topology YAML in detail.

The topolgy YAML starts with three dashes. This is part of the YAML format and signifies the start of a new document (see section 2.2 of [the YAML documentation](http://www.yaml.org/spec/1.2/spec.html)).

Every topology starts with a single link to the high voltage (HV) network. This represents the connection to the 'rest of the world'. The HV net is the first 'node' of the hierarchical network and can branch into other connections as we will see below.


## Attributes
Any component (node) of the network can have the following attributes:

* name: a string which is enclosed in quotation marks (""). The 'name' attribute is the first one that needs to be specified and is preceded by a single dash.
* capacity: the capacity of the network in kW
* investment_cost: the cost of investment in EUR
* economic_lifetime: the economic lifetime in years
* units: the number of units of the component
* children: one or more connections to the rest of the network. The 'children' attribute is the last to be specified as is must be followed by the definitions of child nodes.

Each attribute has a **keyword** (listed above) and a **value** which are seperated by a colon (':')

## Connecting children
underneath the 'children' keyword (and the colon), the names of the children can be specified. Preceding the 'name' keyword, the YAML expects a **two-space indentation and a single dash followed by a space**. The indentation makes it possible to nest multiple layers of children (and grandchildren etc.)

Keywords following the 'name' keyword need to have the same indentation. This ensures that they are interpreted as part of the same component (node).

## Units
The 'units' keyword has a special function: it multiplies the capacity and investment cost of the component. This can be used to group many components of the same type.
No other attributes of the component are multiplied by the 'units'. This also holds for the 'children'. The user is responsible for keeping things consistent: if a transformator is given a 'units' equal to 200, the children need to be adjusted accordingly.