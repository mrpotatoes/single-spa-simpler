- [ ] Basic Requirements
  - [x] Zero coupling between child projects
  - [x] Near zero coupling between container & child apps
  - [x] CSS from one project shouldn't affect the other
  - [x] Version control shouldn't have any impact on overall project
  - [x] Reload on change
  - [ ] Container can decide version to use
  - [ ] Must be able to develop locally
  - [ ] [Lifecycle methods](https://single-spa.js.org/docs/building-applications/#registered-application-lifecycle)
    - [ ] `bootstrap()`
    - [ ] `mount()`
    - [ ] `unmount()`
    - [ ] `unload()`

- [ ] Important APIs
  - [ ] Import Maps

- [ ] Deployment requirements
  - [ ] Deployment requirements
  - [ ] CDN
  - [ ] APIs should be lambdas

- [ ] Routing requirements
  - [ ] Container + sub-apps require routing features
  - [ ] Sub apps need to add in new pages routes all the time
  - [ ] We might need to show two or more MFEs at the same time
  - [ ] We want to use off-the-shelf routing solutions
  - [ ] We need navigation features for sub-apps in both hosted & isolation mode
  - [ ] Child app communication about routing must be generic

- [ ] Create an App with complete development flow
