---
title: Writing slider descriptions
---

Sliders are the visual representation of [Inputs](inputs.md) in the ETM. Modellers can add a description to sliders. This description becomes visible when users select the information button presented as a question mark next to each slider. For clarity, it is important that all slider descriptions follow the same structure and writing style. The [guidelines for writing texts](./authoring-texts.md) should be followed when writing slider descriptions.

## Guidelines
A good slider description contains the following aspects:
1. Informs users about the slider functionality
2. Shortly explains what type of technique is modelled with the slider (use full name to explain abbreviation if necessary, especially if we use the abbreviation in a slider name)
3. Indicates which other sliders affect the properties of this technology (including links to sliders)
4. Indicates where users might find more detailed information (links to documentation or Refmanager)

Slider descriptions should explicitly not contain the following: 
* Long explanation on how to set the slider, this should be covered in the documentation
* Technical and financial properties
* Region specific information
* Links to non-ETM websites
* Scenario-specific information

## Recommended structure

1. **Purpose (max 20 words)**

   Clearly state the slider's purpose in a brief sentence.
 
2. **How to set the slider at an appropriate value?**:

   When relevant, include any necessary warnings or additional information users should be aware of regarding the slider's effects or workings.
   
3. **Background** (Average 50-100 words):

   When relevant, provide concise background information about the associated technology or technique. Include a definition, usage, and, if relevant, advantages and disadvantages.
 

4. **Connections to other elements** (Average 1 sentence or bullet list):

   When relevant, clearly explain any connections to other sliders, charts or other elements within the model. Use links when available. Refer to the documentation if any supplementary documentation is available.

 
 ***Example***: 

This slider adjusts the total installed capacity of autothermal reformers (ATR). 

Note: ATR emits CO directly into the air, this means carbon capture and storage(CCS) will need to be used in combination with this method for carbon neutrality. 

ATR is a method for syngas/biofuel production, combining partial oxidation and steam methane reforming. It allows flexible hydrogen-to-carbon monoxide ratios for varied biofuel production. For more information, checkout the documentation [Documentation Link]. 

Go to Emissions > CCUS > Capture of CO2 to install CO capture or the production of pure hydrogen production.

Go to Costs & Efficiencies > Hydrogen > Hydrogen production for changing costs and efficiency.

## References style

### Pages

When referencing pages, reference the proper slide in the link, but use the title of sidebar item in the description and refer to it as a 'section'. Only use a more specific title if necessary. See the examples below.

```
description: |
  This slider adjusts the total installed capacity of Authothermal Reformers (ATR). 
```

:::warning Avoid outdated syntax
Note that it is possible to come across outdated syntax where `""` (inline strings) with `\r\m` (carriage return and line feed) is applied instead of `|` syntax. The use of `|` syntax is preferred due to its better readability. The outdated syntax should therefore be avoided when writing slider texts. 
:::

### HTML for formatting
Within the YAML format, HTML is used for formatting text. For example:
* `<br/><br/>` to insert a blank line for separating paragraphs
* `<a>` tags to insert hyperlinks
* `<sub></sub>` for sub scripts

### Referring to sections in the ETM
Refer to other sections within the ETM as follows:

```
Go to the <a href="/scenario/demand/industry/steel">Industry</a> section to set the production routes for steel production. 
```

### Opening charts or tables
It is possible to add a clickable link to a specific chart that will open that chart. See the example below.

```
See <a href="#" class="open_chart" data-chart-key="hourly_flexibility_electricity" data-chart-location="side">this</a> chart for more information.
```
### Referring to external pages
An example to refer to external pages (such as the docs or Refman) is provided below. This setup will open the external page in a new tab. 

```
Information about the behaviour of electricity storage technologies can be found in the <a href="https://docs.energytransitionmodel.com/main/electricity-storage" target=\"_blank\">documentation</a>. 
```
