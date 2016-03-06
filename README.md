My various frontend boilerplates:

* [master](https://github.com/wfro/frontend-boilerplates/tree/master): Vanilla ES2015, mocha/chai
* [react-redux-hmr-client-only](https://github.com/wfro/frontend-boilerplates/tree/react-redux-hmr-client-only): client-only react/redux
* [planned but not added yet](): universal with react/redux and a backend (likely hapi or express)

# Mmmmmm vanilla

Simple boilerplate for vanilla ES2015.  It's set up with a dev server so you could hack on things that involve the DOM, or you just as easily do non-browser things.

Uses:

* Babel 6 (with es2015 presets)
* Mocha/Chai
* eslint (with [airbnb's config](https://github.com/airbnb/javascript/tree/master/packages/eslint-config-airbnb))

## Install

```
npm install
```

## Test

```
npm test

# or

npm test:watch
```

## Lint

```
npm run lint
```
