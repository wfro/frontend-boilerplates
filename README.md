In the golden age of the boilerplate, here are my various frontend boilerplates:

* [master](https://github.com/wfro/frontend-boilerplates/tree/master): Vanilla ES2015, mocha/chai
* [react-redux-hmr-client-only (this branch)](https://github.com/wfro/frontend-boilerplates/tree/react-redux-hmr-client-only): client-only react/redux
* [planned but not added yet](): react/redux with some kind of JS backend

# React/redux/hmr (client-only)

#### Start the server for development:

```
npm start
```

#### Start the server in production

```
npm run build
npm run serve
```

#### Run tests

Run command-line tests once:

```
npm test
```
Run tests on changes:

```
npm run test:watch
```

Run tests in browser:

```
npm run test:browser
open test/test.html
```

This is hacky and assumes you're using OSX and have access to the `open` utility.
It's a separate process you'll have to leave open which rebundles the test files.

#### Run the linter

```
npm run lint
```





TODO:

- [ ] React-router
- [ ] Karma
- [x] in-browser tests

