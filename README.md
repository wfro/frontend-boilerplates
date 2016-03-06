In the golden age of the boilerplate, here are my various frontend boilerplates:

* [master](https://github.com/wfro/frontend-boilerplates/tree/master): Vanilla ES2015, mocha/chai
* [react-redux-hmr-client-only](https://github.com/wfro/frontend-boilerplates/tree/react-redux-hmr-client-only): client-only react/redux
* [planned but not added yet](): react/redux with some kind of JS backend

```

# Mmmmmm vanilla

Simple boilerplate for vanilla ES2015.  I typically use it for DOM experiments, katas/exercises and the like, really anything where you'd want to use ES2015 but don't have a huge list of other dependencies.

Uses:

* ES2015 goodness via Babel 6
* Mocha/Chai
* eslint (with [airbnb's config](https://github.com/airbnb/javascript/tree/master/packages/eslint-config-airbnb))

## Getting 

```
npm install
npm start
// open http://localhost:8080
```

## Run tests

```
npm test

# or

npm test:watch
```

## Run the linter

```
npm run lint
```
