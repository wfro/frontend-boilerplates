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

# Mmmmmm vanilla

Simple boilerplate for vanilla ES2015.  I typically use it for DOM experiments, katas/exercises and the like, really anything where you'd want to use ES2015 but don't have a huge list of other dependencies.

Uses:

* ES2015 via Babel
* Mocha/Chai
* eslint (with [airbnb's config](https://github.com/airbnb/javascript/tree/master/packages/eslint-config-airbnb))

## Install

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
