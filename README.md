# Behind the boilerplate
The hardest part about React is getting setup.  This project aims to help anyone quickly get bootstrapped with a the latest versions of React, Redux, Webpack, etc.  It uses Hot Module Reloading and has a few optional add-ons like React Foundation, Redux Form, etc.

## Docs

Coming soon

## Instructions

1. **Clone repo**

    git clone https://github.com/RyanCCollins/react-redux-simple-starter.git

2. **Install dependencies**

    npm run setup

3. **Run the webserver**

    npm run webserver

    Webserver should be running at http://localhost:3000/

4. **Make build**

   npm run build

5. **Run development server**

   npm run start

   Development server should be running at http://localhost:8080/

## List of technology

- [Node](https://nodejs.org/en/) - JS runtime environment
- [npm](https://www.npmjs.com/) - package manager
- [Babel](https://babeljs.io/) - ES6 transpiler
- [Webpack](https://webpack.github.io/) - module bundler & task runner
- [React](https://facebook.github.io/react/) - interfaces
- [react-hot-loader](https://github.com/gaearon/react-hot-loader) - hot reloading for react
- [react-router](https://github.com/rackt/react-router) - react application router
- [react-redux](https://github.com/rackt/react-redux) - react bindings for redux
- [react-css-modules](https://github.com/gajus/react-css-modules) - React CSS Modules implement automatic mapping of CSS modules.
- [react-foundation](https://github.com/nordsoftware/react-foundation) - Foundation React components, use or don't use.
- [Immutable](https://github.com/facebook/immutable-js) - data structures
- [Redux](https://github.com/rackt/redux) - awesome flux architecture
- [Redux Form](https://github.com/erikras/redux-form)- works with React Redux to enable an html form in React to use Redux to store all of its state.
- [redux-thunk](https://github.com/gaearon/redux-thunk) - thunk middleware for redux
- [isomorphic-fetch](https://github.com/matthew-andrews/isomorphic-fetch) - API fetch network requests
- [redux-devtools](https://github.com/gaearon/redux-devtools) - redux development tool
- [SASS](http://sass-lang.com/) - styles
- [ESLint](http://eslint.org/) - linter
- [Mocha](http://mochajs.org/) - unit tests
- [jsdom](https://github.com/tmpvar/jsdom) - vdom to test React without browser
- [Chai](http://chaijs.com/) - assertion library
- A bunch of useful scripts

## Scripts
- **npm run test**

     Runs unit tests

- **npm run test:watch**

     Watches for changes to run unit tests

- **npm run build**

     Bundles the application

- **npm run dev**

     Starts webpack development server

- **npm run lint**

     Runs the linter

- **npm run deploy**

     Creates the production ready files

- **npm run clean**

    Removes the bundled code and the production ready files

### Acknowledgements

This project is loosely based on: [This boilerplate](https://github.com/mezod/boilerplate-koa-redux-react), specifically the npm scripts and file structure.

Thank you to @mezod for their hard work and inspiration.
