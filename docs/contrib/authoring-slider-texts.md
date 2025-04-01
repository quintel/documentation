---
title: Writing slider descriptions
---

**Goal slider information:** inform and direct to extra information.

A good slider text has the following aspects:
1. Informs the use about the sliders functionality
2. Shortly explains which exact type of technique was modelled (use full name to explain abbreviation if necessary, especialy if we use it in a slidername)
3. Which other sliders effect the properties of this technology (links to sliders)
4. Where the use might find more detailed information (links to documentation or ref-manager, nothing else).

*Out of scope*: 
1. Explain how to set the slider -> use documentation for longer explanations (if relevant / if unclear)
2. Region specific information (only relevant for NL / municipalitiets etc.)
3. Links to non-ETM websites
4. Scenario-specific information

## Form
* *Language*: English / Dutch (ABN) with a preference for British English.

* *User Type*: Adult energy 'experts' or those aspiring to attain expertise in the subject matter. Focus on users already familiar with the topic. Avoid long explanations of the technique or trends, rather focus on what is meant by this technique (short definition) and how this technique is modelled (if relevant).

* *Tone*: Formal yet constructive and activating. Use active and concise sentences. Prioritize readability, avoiding unnecessary technical jargon, and aim to nudge users toward understanding and utilizing the ETM effectively.

* *Style*: Visual emphasis, utilize elements like arrows for brevity. Consistency in style to enable users to quickly scan and locate specific information.

No go's:
* Saying “we” (ETM is an “it:”)
* Questions (“What do you think will happen…?”)
* Avoid adressing the user with “you” 
* Avoid abbreviations
    * Etc.
    * ... etc.

## Recommended slider text structure
 
1. **Purpose (max 20 words):**

   Clearly state the slider's purpose in a brief sentence.

   *Example*: This slider adjusts the total installed capacity of Autothermal Reformers (ATR).
   
2. **Background (50 - 100 words):** 

   Provide information on why this is slider / technology is relevant and how it relates to other sliders (if necessary). Include links to documentation if relevant.
    
   *Example*: ATR is a method for the production of hydrogen and variation of a steam methane reforming. With ATR it is easier to apply carbon capture and storage compared to SMR but this does result in a lower efficiency. 

 
3. **Connections to other sliders (1 sentence and/or bullet list):**

   Clearly explain any connections to other sliders within the model, providing links or references. 
    
   *Example*: 
   Please note that ….

   * Go to [Capture of CO2] to install CO capture or the production of pure hydrogen production.
   * Go to [Costs & Efficiencies] for changing costs and efficiency. 
   
   Check out the [Documentation] for more information.

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

### Technical and financial properties

It is recommended not to refer to the technical and financial properties in the slider description. These should be visible enough by themselves.
