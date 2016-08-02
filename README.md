![Scalable Boilerplate Logo](https://github.com/RyanCCollins/cdn/blob/master/alumni-webapp/scalable-boilerplate-logo.png?raw=true)

# Scalable React Boilerplate [![npm version](https://badge.fury.io/js/scalable-react-boilerplate.svg)](https://badge.fury.io/js/scalable-react-boilerplate)

The boilerplate aims to follow best practices for building highly scalable and reusable apps and component libraries with React and cutting edge JavaScript.

Following the lead of the famous [React Boilerplate]() project, this starter project incorporates the Feature-first architecture, meaning that files are organized by the feature they implement, not the filetype.  This provides a mechanism to scale React projects because it encourages isolation, encapsulation and reusability.

We incorporate an ESLint configuration and follow strictly the [AirBnb JS & JSX style guides](https://github.com/airbnb/javascript).

# Documentation

## Getting Started
To try the example application out or to use the project, follow the instructions below.

1. **Clone repo**

    git clone https://github.com/RyanCCollins/scalable-react-boilerplate.git

2. **Install dependencies**

    npm run setup

3. **Run development server**

   npm run start

   Development server should be running at http://localhost:8080/

4. **Make build**

   npm run build

### File Structure
* Some files left out for brevity.  Please reference the files in the [Scalable React Boilerplate](https://github.com/RyanCCollins/feature-first-react-boilerplate) project for an example of the file structure.  The application will ultimately be in use in a production web application project and more info will be posted here when we have production level examples.
```
.
├── README.md
├── LICENSE
├── index.html
├── package.json
├── webpack.config.js
├── app/
|   ├── fonts
|   ├── images
|   ├── src
|   |   ├── components
|   |   |   ├── FeatureFirstComponent
|   |   |   |   ├── index.js
|   |   |   |   ├── index.module.scss
|   |   |   |   └── tests
|   |   |   |   |   └── index.test.js
|   |   |   ├── App.jsx
|   |   |   ├── Main.js
|   |   |   └── index.js
|   |   ├── containers
|   |   |   ├── FeatureFirstContainer
|   |   |   |   ├── tests
|   |   |   |   |   ├── actions.test.js
|   |   |   |   |   ├── index.test.js
|   |   |   |   |   └── reducer.test.js
|   |   |   |   ├── actions.js
|   |   |   |   ├── constants.js
|   |   |   |   ├── index.js
|   |   |   |   ├── index.module.scss
|   |   |   |   └── reducer
|   |   |   └── index.js
|   |   ├── pages
|   |   ├── store
|   |   ├── utils
|   |   └── index.js
|   └── styles
├── .eslintignore
├── .eslintrc
├── .gitattributes
└── .gitignore
```

## Scripts
- **npm run setup**

    Installs the application's dependencies

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

## Generators
The boilerplate contains generators for easy project scaffolding.  At the moment, the generator has the following scaffold generating commands built in:
- containers
  - Connected / Not connected ES6 Class containers (higher order)
  - SCSS Modules
  - Reducers, actions and constants
  - Tests for all of the above
- components
  - Stateless functional components (recommended)
  - ES6 class components
  - SCSS modules
  - Tests for all of the above

To run the generators, run
```
npm run generate
```

Which will give you a list to select from with all of the available generators.  Follow the on screen prompts to select the options you wish to use.

For convenience, you can bypass the initial selection and scaffold out containers, components and pages by running

```
npm run generate:<type_of_component>
```

where <type_of_component> is one of: component, container or page.

The generators use the same feature-first file organization as the rest of the project, encapsulating components within their own folder.

#### **Gotchas**
If you are importing / exporting your modules from a root directory index.js file, then you will need to manually import / export the component / container after it has been generated.  Of course, you will also need to import the component and use it somewhere for it to show up on screen.

From `app/src/container/index.js` or `app/src/component/index.js`
```
// ... Other components here
import MyComponent from 'MyComponent';

export {
  // ... Other components here
  MyComponent
}
```

### Configuring your own generators
For information on how to build your own generators with relative ease, please go to the [Plop Microgenerator](https://github.com/amwmedia/plop) homepage for detailed instructions.

## Technologies / Libraries

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
- [Expect](https://github.com/mjackson/expect) - assertion library
- [Chai / Immutable](http://chaijs.com/) - assertion library for Immutable JS
- A bunch of useful scripts


## Timeline / TODOS
* [x] Write README file
* [x] Write component tests using Enzyme
* [x] Implement a Rails like component generator
* [ ] Write wiki / other documentation

### Acknowledgements
![Udacity Alumni Loves React](https://github.com/RyanCCollins/cdn/blob/master/alumni-webapp/udacity-heart-react.png?raw=true)

This boilerplate began its life as a fork of the [React Redux Simple Starter](https://github.com/RyanCCollins/react-redux-simple-starter) project and was setup as a starter project for the Udacity Alumni Web application open-source project.

It was created by several of the members of the Udacity Alumni product infrastructure team, including:
* [Ryan Collins](https://github.com/RyanCCollins)
* [Andreas Daiminger](https://github.com/adai183)

Many thanks to the team behind [React Boilerplate](https://github.com/mxstbr/react-boilerplate), especially @maxstbr for setting a standard for the level of quality we in the React community can all learn from.  Many of the ideas used here were reverse engineered from the same project.
