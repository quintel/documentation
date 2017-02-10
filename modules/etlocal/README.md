# ETlocal

### Background

There needs to be a possibility to change local datasets for outside users.
A user need to be able to create and edit datasets without having the knowledge
of git itself. Git has proven to be to technical for most people. The reason
why this is needed is because there's going to be a growth of local datasets.

A local dataset needs to be edited with the utmost care. It should not be
possible to edit it without any bit of proof. Each change needs to be
carefully thought through. In order to achieve this a set of users need
to be able to review each change that has been made.

After a series of changes the local dataset needs to be exported to ETSource
in order to be applicable for scenarios.

### Use cases

1. A user needs to sign in
2. A user needs to sign out
3. A user needs to create a new dataset
4. A user needs to update that dataset
5. A user needs to be able to change a value of a dataset
6. A user needs to be able to deliver proof for a change of a value
7. A user needs to be able to review a change
8. A user needs to be able to edit his own change
9. A user needs to export the dataset to ETSource
10. A user needs to be able to destroy a dataset

### Technical

See [technical documentation](TECHNICAL.md).
