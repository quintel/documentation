# Curves

## Introduction

The ETM uses hourly curves to model (electricity, hydrogen and gas) demand and supply. The hourly demand and supply is determined using the annual demand and supply and a given curve. It is also possible to use your own curves in the ETM by inserting them in [Modify profiles](https://energytransitionmodel.com/scenario/flexibility/curve_upload/upload-curves). This page gives an overview of the type of curves and explains how to modify these curves by inserting your own.

## Types of Curves

The ETM uses two main categories of curves: **demand curves** and **supply curves**. Within these categories, there are five different profile types that determine how the curves behave and are processed by the model.

### Profile Types Explained

The following profile types can be uploaded:

1. **Regular profiles**. These profiles are typically used for demand profiles and represent the fraction of annual demand used in each hour of the year (8760 hours) for a specific category. The unit used in the uploaded curve file does not matter: the model uses the shape of the profile (the relative distribution of demand over time). For example, if the profile sums up to 500 and the first hour has a value of 5, 1% of the annual demand for this category is assigned to the first hour. Examples of regular profiles are: electric buses, industry heating.

2. **Capacity profiles**. These profiles are typically used for supply profiles and represent the fraction of installed capacity used for each hour of the year for a specific production technology. For example, a value of 0.5 means that 50% of peak capacity is utilised in that hour. The sum of all hours should equal the total annual full load hours of that technology. Examples of profiles are: solar PV, wind offshore. Note that a capacity profile is also used for the must-run interconnectors import and export profiles.

3. **Price curves**. These profiles are used for the interconnector prices and represent the price for each hour of the year. The unit is €/MWh and the value for each hour will be rounded to the nearest whole cent. Example profile: interconnector 1 electricity price.

4. **Availability curves**. These profiles are used for interconnector import and export availability and represent the availability of the interconnector for each hour of the year. Values should be specified between 0 and 1 for each hour, where for example 0.5 means that 50% of the capacity is available, 0 that no capacity is available or 1 that all capacity is available. Example profile: interconnector 1 import availability.

5. **Temperature curve**. Used to set the air temperature profile and represents the outdoor air temperature for each hour of the year. The unit is degrees Celsius.

## Overview of Curves

### All Curves by Category

| Category | Sector | Sub-sector | Profile Type | Weather-Dependent | Additional Information |
|----------|--------|------------|--------------|-------------------|------------------------|
| **DEMAND** | **Households** | Space heating | Regular | Yes | Split up in profiles differing for household category and build year |
| | | Hot water | Regular | No | |
| | | Cooling | Regular | No | Heating demand set to zero, cooling-only profile |
| | | Appliances, lighting, cooking | Regular | No | |
| | **Buildings** | Space heating | Regular | Yes | |
| | | Cooling | Regular | No | |
| | | Appliances | Regular | No | |
| | **Transport** | Electric cars | Regular | No | 5 different profiles available: charging everywhere, home charging, fast charging, smart charging, regular charging |
| | | Passenger trains, trams/metro, electric bicycles, motorcycles | Regular | No | Uses "charging everywhere" profile pattern |
| | | Electric buses, electric trucks, freight trains | Regular | No | Uses "charging at home" profile with night-time peaks |
| | | Hydrogen trucks, buses, cars | Regular | No | Flat profile |
| | **Industry** | Heating demand (Food, Paper, Other sectors) | Regular | No | |
| | | Electricity demand (Food, Paper, Other, ICT sectors) | Regular | No | |
| | | Heating and electricity (all other sectors) | Regular | No | Flat profile (constant demand) |
| | **Agriculture** | Electricity | Regular | No | Agricultural electricity use (E3A curve) |
| | | Heat | Regular | Yes | Agricultural heating demand (G2A curve) |
| **SUPPLY** | **Renewable** | Solar PV | Availability | Yes | Based on measured climate data, adjusted to match country-specific full load hours |
| | | Solar thermal | Availability | Yes | Climate data adjusted for solar thermal behavior characteristics |
| | | Wind | Availability | Yes | Measured data profiles adjusted for country-specific performance |
| | **Conventional** | Geothermal heat | Regular | No | Flat profile (constant output) |
| | | Geothermal power | Regular | No | Flat profile (constant output) |
| | | Hydro | Regular | No | Flat profile (constant output) |
| | | Dispatchable technologies | Capacity | No | No standard profile; production determined by merit order optimization |
| | **Import/Export** | Interconnectors | Multiple | No | Uses price curves (€/MWh), availability curves (0-1 capacity fraction), and capacity profiles for must-run patterns. See imported electricity documentation for detailed cost calculations |
| | | Gas Import/Export | Regular | No | |

## Working with Custom Profiles

### Uploading Custom Curves

To upload a custom profile:

1. Navigate to the [Modify profiles](https://energytransitionmodel.com/scenario/flexibility/curve_upload/upload-curves) section
2. Select the specific profile from the dropdown menu
3. Click 'Upload a custom curve' and provide a CSV file
4. Ensure your CSV contains exactly 8,760 rows (one per hour) with numeric values

![Upload form](/img/docs/curve-upload-form.png)

### CSV Format Requirements

Your CSV file should follow this simple format:

```
23.64
32.71
32.65
32.71
30.89
etc
```

**Value Requirements by Profile Type:**
- **Regular profiles**: Any numeric values (model uses relative distribution)
- **Capacity profiles**: Values between 0 and 1, sum should equal annual full load hours
- **Price curves**: Values in €/MWh, rounded to nearest cent
- **Availability curves**: Values between 0 and 1
- **Temperature curve**: Values in degrees Celsius

### Understanding Results and Chart Display

The ETM processes your uploaded profiles and calculates resulting hourly energy flows. The charts in the Modify profiles section show these calculated results, not the raw uploaded data.

**Important**: If you upload a *capacity profile* for wind offshore, the chart displays the resulting deployed capacity in MW for each hour, not the fraction of installed capacity you uploaded.

![Modify profiles chart](/img/docs/modify_profiles.png)

**Chart Display Options**: By default, charts show daily peak capacity for the entire year. Use the dropdown menu to view monthly patterns (daily values within a month) or weekly details (hourly values for a week). If a technology isn't present in your scenario, the corresponding chart series will remain empty.

### Downloading Profiles

You can download both uploaded and calculated profiles:
- **Most profile types**: Downloaded in the same format as uploaded
- **Regular profiles**: Downloaded as normalized profiles maintaining the original shape

Complete hourly supply and demand profiles can be downloaded from the [Data export](https://energytransitionmodel.com/scenario/data/data_export/overview) section.

## Weather Years and Custom Profiles

The ETM supports different [weather years](https://energytransitionmodel.com/scenario/flexibility/flexibility_weather/weather-years) that affect weather-dependent profiles such as heating and cooling demand, and renewable energy production from solar and wind technologies.

**Note**: Weather year functionality is currently only available for Dutch datasets.

**Key Rule**: Uploaded custom profiles always take priority over standard weather-dependent curves. Even if you select a different weather year, your uploaded profiles remain unchanged while other weather-dependent profiles adjust to the selected weather conditions.

**Weather-Dependent Curves**: As shown in the overview table above, curves marked "Yes" in the Weather-Dependent column will change when you select different weather years. These include:
- Space heating and cooling demand (households and buildings)
- Solar PV, solar thermal, and wind supply profiles

**Non-Weather-Dependent Curves**: Curves marked "No" remain constant regardless of weather year selection, such as appliances, transport, and industrial profiles.

## Technical Integration and System Modeling

### How Profiles Work Together

Custom profiles are scenario inputs that the ETM uses to calculate hourly energy flows. The model combines these profiles with annual energy demands and supplies, technology capacities and constraints, merit order optimization, and system balancing requirements.

### Data Quality and Validation

The ETM's default profiles come from verified sources including climate databases, energy system operators, and research institutions. When uploading custom profiles, ensure your data represents realistic energy system behavior to maintain model accuracy.

For detailed information on interconnector cost calculations with uploaded curves, see [imported electricity](costs-imported-electricity.md#uploaded-price-curves).