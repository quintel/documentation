---
title: Writing slider descriptions
---

Sliders are the visual representation of [Inputs](inputs.md) in the ETM. Modellers can add a description to sliders. This description becomes visible when users select the information button presented as a question mark next to each slider. For clarity, it is important that all slider descriptions follow the same structure.

## Overview

* **Goal**: Explain what the slider does, how to set the slider, provide background and references or links if necessary.

* **Language**: Descriptions should always be added for both English (British) and Dutch (ABN), the two languages supported by the ETM.
 
* **User type**: Energy 'experts' or those aspiring to attain expertise in the subject matter. Focus on users already familiar with the topic. Avoid long explanations of the techologies or trends, rather focus on what is meant by a technology (short definition) and how this technology is modelled (if relevant).
 
* **Tone**: Formal yet constructive and activating. Use active and concise sentences. Prioritize readability, avoiding unnecessary technical jargon, and aim to nudge users toward understanding and utilizing the ETM effectively.


## Recommended slider text structure:
 
1. **What does this slider do?** (Average 20 words):

   Clearly state the slider's purpose in a brief sentence.
 
   ***Example***:
   
    This slider adjusts the total installed capacity of autothermal reformers (ATR).

2. **How to set the slider at an appropriate value?**:

   When relevant, include any necessary warnings or additional information users should be aware of regarding the slider's effects or workings.
 
   ***Example***: 

   Note: ATR emits CO directly into the air, this means…   
 
3. **Background** (Average 50-100 words):

   When relevant, provide concise background information about the associated technology or technique. Include a definition, usage, and, if relevant, advantages and disadvantages.
 
   ***Example***: 

   ATR is a method for syngas/biofuel production, combining partial oxidation and steam methane reforming. It allows flexible hydrogen-to-carbon monoxide ratios for varied biofuel production. For more information, checkout the documentation [Documentation Link].
 
 
4. **Connections to other elements** (Average 1 sentence or bullet list):

   When relevant, clearly explain any connections to other sliders, charts or other elements within the model. Use links when available. Refer to the documentation if any supplementary documentation is available.
 
    ***Example***: 

    Go to Emissions > CCUS > Capture of CO2 to install CO capture or the production of pure hydrogen production.
    Go to Costs & Efficiencies > Hydrogen > Hydrogen production for changing costs and efficiency.
 
## References style

### Pages

When referencing pages, reference the proper slide in the link, but use the title of sidebar item in the description and refer to it as a 'section'. Only use a more specific title if necessary. See the examples below.

```
description: |
    Go to the <a href="/scenario/demand/industry/steel">Industry</a> section to change the steel production process.
```

```
description: |
    Ga naar de sectie <a href="/scenario/demand/industry/steel">Industry</a> om het staalproductieproces aan te passen.
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

### Technical and financial properties

It is recommended not to refer to the technical and financial properties in the slider description. These should be visible by themselves.
