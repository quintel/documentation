# ETLocal - Technical

ETLocal will contain the following implementations:

- Authentication
- Authorization
- Connection with ETSource
- Control over git
- Voting
- Discussion platform
- Background workers

---

### Authentication

### Authorization

### Connection with ETSource

ETLocal is dependent on ETSource in combination with Atlas. When creating a
new local dataset a [new set of files](https://github.com/quintel/documentation/tree/master/modules/local-datasets#file-structure-of-a-local-dataset) will be generated inside of ETSource.

These changes need to be published to the remote git repository of ETSource.
This needs to happen on a separate branch in order to not directly cause any
disturbances to the `master` branch.

```bash
```

### Control over GIT

### Voting

### Discussion platform

### Background workers
