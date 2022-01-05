---
title: Electricity storage
---

The Flexibility > ['Electricity storage'](https://pro.energytransitionmodel.com/scenario/flexibility/flexibility_storage/behaviour-of-storage-technologies) section of the ETM deals with technologies that can store electricity and release it at a later point in time. These technologies are considered flexible because both their supply and demand can be increased, reduced or shifted in time if needed. This characteristic is especially useful when large capacities of inflexible supply are installed, such as wind turbines and solar panels. By strategically implementing electricity storage, you can decrease the amount of inflexible supply that has to be curtailed at times when it exceeds inflexible (or baseload) demand.

_Checkout: the ['Flexibility'](flexibility) infopage for more information about the difference between flexible and inflexible supply and demand technologies._

## Behaviour of technologies
Similar to other technologies, you can set the **installed capacity** for electricity storage technologies, which determines how much electricity can be consumed or produced in a given hour. This then also determines the storage volume, as it is set relative to the installed capacity. Only for flow batteries can this ratio be adjusted within the model.

Two different types of behaviour are possible, **price-based behaviour** and **forecasting behaviour**, which are described below. For each individual technology you can select which type of behaviour you want to activate and changing it can have a large impact on your scenario.

### Price-based behaviour
When this type of behaviour is selected, the resulting behaviour of the electricity storage technology technology will depend on its **willingness to pay** and its **willingness to accept**. The willingness to pay indicates the maximum price a technology is willing to pay to consume electricity. The demand of electricity storage technologies therefore becomes part of the demand-side merit order, similar to [electricity conversion technologies](electricity-conversion). The willingness to accept indicates the minimum price a technology is willing to receive to produce electricity. The supply of electricity storage technologies therefore becomes part of the supply-side merit order, similar to dispatchable power plants.

When electricity is stored in these technologies and released again at a later moment, losses occur. Roundtrip efficiency losses occur due to the conversion of electricity into the storage medium and backa and storage decay losses occur when potential energy is lost in the storage medium over time, for example due to self-discharge. To account for these losses it is therefore recommended to always set a higher willingness to accept than the willingness to pay.

_Checkout: the ['Merit order'](merit-order) infopage for more information on the clearing of the demand-side and supply-side merit order in the model, including an description of how the electricity price is set._

### Forecasting behaviour