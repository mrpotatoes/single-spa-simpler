## Non debatable requirements
  - [x] Zero coupling between child projects
  - [x] Near zero coupling between container & child apps
  - [x] CSS from one project shouldn't affect the other
  - [x] Version control shouldn't have any impact on overall project
  - [x] Reload on change
  - [ ] Must be able to develop locally (it's own "app")
  - [ ] [Lifecycle methods](https://single-spa.js.org/docs/building-applications/#registered-application-lifecycle)
    - [ ] `bootstrap()`
    - [ ] `mount()`
    - [ ] `unmount()`
    - [ ] `unload()`

### Important APIs
  - [ ] Import Maps
    - [x] Uses a service
    - [ ] Dynamic import maps (versions n' stuff)
    - [ ] Tell it which to use local and the rest are remote

### Deployment requirements
  - [ ] Deployment requirements
  - [ ] CDN
  - [ ] APIs should be lambdas

### Routing requirements
  - [ ] Container + sub-apps require routing features
  - [ ] Sub apps need to add in new pages routes all the time
  - [ ] We might need to show two or more MFEs at the same time
  - [ ] We want to use off-the-shelf routing solutions
  - [ ] We need navigation features for sub-apps in both hosted & isolation mode
  - [ ] Child app communication about routing must be generic
### Optional requirements
- [ ] Container can decide version to use

---
## TODO
Must include all the non debatable requirements above

### Musts
- [ ] Tech talk
- [ ] Create an App with complete development flow
  - [ ] Make an MFE for all the important bits here
      - [ ] [Main page](https://getbootstrap.com/docs/4.0/examples/cover/)
      - [ ] [Products list](https://getbootstrap.com/docs/4.0/examples/product/#)
      - [ ] [Product Page](https://bbbootstrap.com/snippets/bootstrap-ecommerce-product-list-carousel-and-custom-radio-buttons-62651409)
      - [ ] [Pricing page](https://getbootstrap.com/docs/4.0/examples/pricing/)
- [ ] Include CDN stuff (AWS a +)
- [ ] Include simple tools to work locally
- [ ] Must be a "complex" app
    - [ ] Nav
    - [ ] Footer
    - [ ] Multiple apps
      - [ ] Can apps have sub apps?
    - [ ] Complex routes
        - [ ] App multiple routes
        - [ ] Main routes
- [ ] Same CSS not affecting other apps
### Optional
- [ ] How CI/CD to push to AWS/CDN
- [ ] Show, even if hardcoded,
    - [ ] A way to do versioning
    - [ ] A way to do A/B tests
    - [ ] Container to choose app version
- [ ] A tool to run it locally that will inject itself into webpack
    - [ ] Should basically be the root config but for a single page (hardcoded import maps)

## Useful tools to have 
- [ ] MFE Creator
- [ ] MFE "The Deciderer"

## Other things
- [ ] Separate all local development stuf from prod stuff
- [ ] Same for comfig
- [ ] Would rollup be a better option?
  - [ ] Esp for smaller components
