---
title: Writing slider descriptions
---

Sliders are the visual representation of [Inputs](inputs.md) in the ETM. Modellers can add a description to sliders. This description becomes visible when users select the information button presented as a question mark next to each slider. For clarity, it is important that all slider descriptions follow the same structure.

## Getting started
A good slider description contains the following aspects:
1. Informs users about the slider functionality
2. Shortly explains what type of technique is modelled with the slider (use full name to explain abbreviation if necessary, especialy if we use the abbreviation in a slidername)
3. Indicates which other sliders affect the properties of this technology (including links to sliders)
4. Indicates where users might find more detailed information (links to documentation or ref-manager)

Slider descriptions should explicitly not contain the follwoing: 
* Long explanation on how to set the slider, this should be covered in the documentation
* Technical and financial properties
* Region specific information
* Links to non-ETM websites
* Scenario-specific information

## Form

* **Language**: English / Dutch with a preference for British English.
* **User Type**: Adult energy 'experts' or those aspiring to attain expertise in the subject matter. Focus on users already familiar with the topic. Avoid long explanations of the technique or trends, rather focus on what is meant by this technique (short definition) and how this technique is modelled (if relevant).
* **Tone**: Formal yet constructive and activating. Use active and concise sentences. Prioritize readability, avoiding unnecessary technical jargon, and aim to nudge users toward understanding and utilising the ETM effectively.
* **Style**: Visual emphasis, utilise elements like arrows for brevity. Consistency in style to enable users to quickly scan and locate specific information.

To be avoided:
* Saying “we” (ETM is an “it”)
* Questions (“What do you think will happen…?”)
* Avoid adressing the user with “you” 
* Avoid abbreviations ("etc.")

## Recommended slider text structure
 
1. **Purpose (max 20 words):**

   Clearly state the slider's purpose in a brief sentence.

   *Example*: This slider adjusts the total installed capacity of Autothermal Reformers (ATR).
   
2. **Background (50 - 100 words):** 

   Provide information on why this slider / technology is relevant and how it relates to other sliders (if necessary). Include links to documentation if relevant.
    
   *Example*: ATR is a method for the production of hydrogen and variation of a steam methane reforming. With ATR it is easier to apply carbon capture and storage compared to SMR but this does result in a lower efficiency. 

 
3. **Connections to other sliders (1 sentence and/or bullet list):**

   Clearly explain any connections to other sliders within the model, providing links or references. 
    
   *Example*: 
   Please note that ….

   * Go to [Capture of CO2](https://energytransitionmodel.com/scenario/emissions/ccus/capture-of-co2-in-energy-sector) to install CO<sub>2</sub> capture or the production of pure hydrogen production.
   * Go to [Costs & Efficiencies](https://energytransitionmodel.com/scenario/costs/costs_hydrogen/hydrogen-production) for changing costs and efficiency. 
   
   Check out the [documentation](../main/hydrogen.md) for more information.

## References style

### Pages

When referencing pages, reference the proper slide in the link, but use the title of sidebar item in the description and refer to it as a 'section'. Only use a more specific title if necessary. See the examples below.

```
description: |
    Go to the <a href="/scenario/demand/industry/steel">Industry</a> section to change the steel production process.
```

```
description: |
    Ga naar de sectie <a href="/scenario/demand/industry/steel">Industrie</a> om het staalproductieproces aan te passen.
```

### Charts

It is possible to add a clickable link to a specific chart that will open that chart. See the examples below.

```
description: |
    See <a href="#" class="open_chart" data-chart-key="hourly_flexibility_electricity" data-chart-location="side">this</a> chart for more information.
```

```
description: |
    Zie <a href="#" class="open_chart" data-chart-key="hourly_flexibility_electricity" data-chart-location="side">deze</a> grafiek voor meer informatie.
```
