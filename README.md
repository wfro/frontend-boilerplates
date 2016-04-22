Here are my various frontend boilerplates.  You'll probably want to delete the `.git` directory and start from scratch with your own repository:

```
git clone git@github.com:wfro/frontend-boilerplates.git
cd frontend-boilerplates
rm -rf .git
git init
```

There are several branches:

* [master](https://github.com/wfro/frontend-boilerplates/tree/master): Vanilla ES2015, mocha/chai
* [react-redux-hmr-client-only](https://github.com/wfro/frontend-boilerplates/tree/react-redux-hmr-client-only): client-only react/redux
* [universal](https://github.com/wfro/frontend-boilerplates/tree/universal): react/express

# React/express

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

- [ ] Better docs
- [x] React-router
- [ ] redux devtools
- [ ] Karma

