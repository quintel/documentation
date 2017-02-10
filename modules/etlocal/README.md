# ETlocal

- Location of repository: [here](https://github.com/quintel/etlocal)

### Background

There needs to be a possibility to change local datasets for outside users.
A user needs to be able to create and edit a dataset without having the knowledge
of git itself or to require direct access to ETSource. Git has proven to be to
technical for most people. The reason why this is needed is because there's
going to be an expected growth of local datasets.

A local dataset needs to be edited with the utmost care. It should not be
possible to edit a value without any bit of proof. Each change needs to be
carefully thought through. In order to achieve that, each change is carefully
managed and a set of users need to be able to review each change that has been
made.

After a series of changes, a local dataset needs to be moved to ETSource
in order to be applicable for scenarios.

### Use cases

1. A user needs to sign in
2. A user needs to sign out
3. A user needs to be able to retrieve his/her password when lost
4. A user needs to create a new dataset
5. A user needs to update that dataset
6. A user needs to be able to change a value of a local dataset
7. A user needs to be able to see the history and past sources of each change to each value of a local dataset.
8. A user must deliver proof to a change of a value of a local dataset
9. A user needs to be able to review a change of a value of a local dataset
10. The previous editors of a change to a value of a local dataset, need to have a vote on that perticular change
11. A change to a value of a local dataset needs to be automatically applied/rejected (based on vote) within a certain time-frame
12. A user needs to be able to edit his own change (for a limited period of time)
13. A user needs to export the dataset to ETSource
14. A user needs to be able to destroy a dataset


### Technical

See [technical documentation](TECHNICAL.md).

### Out of scope

The editing of a non-local dataset is not possible with this application.
Mainly due to the proprietary energy balances.
