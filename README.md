![Scalable Boilerplate Logo](https://github.com/RyanCCollins/cdn/blob/master/alumni-webapp/scalable-boilerplate-logo.png?raw=true)

# PLEASE NOTE:
Recently, this boilerplate received a huge update including: Styled Components, GraphQL / Apollo Support, Server Rendering, Generator Refactoring, etc.  If you are using this in production, you may want to use the [Stable](https://github.com/RyanCCollins/scalable-react-boilerplate/tree/stable) branch for a bit.  See the [CHANGELOG](https://github.com/RyanCCollins/scalable-react-boilerplate/blob/master/CHANGELOG.md) for more information of the recent updates.

# Scalable React Boilerplate
[![npm version](https://badge.fury.io/js/scalable-react-boilerplate.svg)](https://badge.fury.io/js/scalable-react-boilerplate)
![Code Ship](https://codeship.com/projects/92d32ae0-5907-0134-8eb1-7aa2649e3d2b/status?branch=master)
[![Codacy grade](https://img.shields.io/codacy/grade/fb3bf4881b8d4b98a8a3ff59f47b14d4.svg?maxAge=2592000)](https://github.com/RyanCCollins/scalable-react-boilerplate)

The boilerplate aims to follow best practices for building highly scalable and reusable apps and component libraries with React and cutting edge JavaScript.

You can read more about the organizational strategy used in this app in [this Medium post](https://medium.com/front-end-hacking/the-secret-to-organization-in-functional-programming-913484e85fc9#.6htl4s54y).

We incorporate an ESLint configuration and follow strictly the [AirBnb JS & JSX style guides](https://github.com/airbnb/javascript).

# What is Feature First?
In most projects and frameworks, files are organized in a File type first fashion.  For example, your tests exist in a test folder, your styles in a styles folder.  This boilerplate takes a different approach.

We encourage encapsulation of features by asking that you organize each feature into the same folder.  With React, this means that your containers and components exist in their own folders, along with literally every other file that pertains to that one component.  Your actions, reducers, tests, styles, and everything else are all internal to the component they represent.  By decoupling your features from the rest of your app, you set yourself up to reuse your UI components in future projects.  You can thank us later!

If this is confusing, don't fret, we've set you up with a few examples and code generation tools.  Give it a try! We promise you will enjoy it.

## Example Apps
Below are a few example apps that have been built with this project
- Udacity Alumni App
    - [See the Code](https://github.com/udacityalumni/alumni-client)
    - Live App coming soon
- RyanCollins.io v3.0
    - [See the Code](https://github.com/RyanCCollins/ryancollinsio)
    - Live App coming soon
- React Weekly
    - [See the Code](https://github.com/RyanCCollins/react-weekly)
    - [See the Live App](http://www.reactweekly.co/)
- Restaurant Reviewer
    - [See the Code](https://github.com/RyanCCollins/restaurant-reviewer)
    - [See the Live App](http://restaurant-reviewer-client.herokuapp.com/)
- Corporate Dashboard
    - [See the Code](https://github.com/RyanCCollins/corporate-dashboard)
    - [See the Live App](https://corporate-dashboard-client.herokuapp.com/)
- Meetup Event Planner
    - [See the Code](https://github.com/RyanCCollins/meetup-event-planner)
    - [See the Live App](http://meetup-event-planner.herokuapp.com/)

## Experimental Features
### Server Rendering
Server rendering has been merged into the master branch 🎉🎉🎉.

### Docker Support
Coming soon the app will support Docker, which will contain a configured web server to make deployment of this boilerplate simple!  You can take a look at [this branch](https://github.com/RyanCCollins/scalable-react-boilerplate/tree/feat_rc_docker_config) for more details.

# Documentation

## Getting Started
To try the example application out or to use the project, follow the instructions below.

There are two options for installation:

1. **Clone repo**

    git clone https://github.com/RyanCCollins/scalable-react-boilerplate.git

2. **Install dependencies**

    npm run setup

3. **Run development server**

   npm run start

   Your app will be served at: http://localhost:1337

or, you can install it using Slush via the npm package
```
npm install -g slush slush-generator-scalable-react
```

cd into the folder where you want to create your project and run:
```
slush generator-scalable-react
```

Follow the onscreen instructions to create your app.

## Deployment

<a href="https://myrskyt.com/container/deploy/https://github.com/RyanCCollins/scalable-react-boilerplate"><img src="https://myrskyt.com/static/img/button.jpg" height="40" width="155"></a>

A demo ExpressJS setup is included with the app.  The express server will serve up the production minified bundle.js, index.html and any other assets that are located in the `/server/public` folder.

The deploy script is now totally automated and will hook into the server-rendering automatically.  Running `npm run serve:bundle` will set your environment to production and serve these files via Express.  Also, a Procfile is included, which will run the Express server on Heroku when you push your code.

## File Structure
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
  + Installs the application's dependencies

- **npm run test**
  + Runs unit tests

- **npm run test:watch**
  + Watches for changes to run unit tests

- **npm run build**
  + Bundles the application

- **npm run dev**
  + Starts webpack development server

- **npm run lint**
  + Runs the linter

- **npm run deploy**
  + Creates the production ready files within the `/server/public` folder

- **npm run clean**
  + Removes the bundled code and the production ready files

- **npm run serve:bundle**
  + Serve production assets from the `/server/public` folder.

## Generators
The boilerplate contains generators for easy project scaffolding.  At the moment, the generator has the following scaffold generating commands built in:
- Container `npm run generate:container`
  - Name: the name of the container, i.e. `Awesome`, which converts to: `AwesomeContainer`
  - Connected / Not connected ES6 Class containers (higher order)
  - SCSS Modules
  - [Styled Components](https://github.com/styled-components/styled-components)
  - Reducers, actions and constants
  - GraphQL: The generator can add collocated queries and mutations using GraphQL / ApolloClient.  Accept the option to use this feature.
  - Tests for all of the above
  - README.md file that documents the container
- Component `npm run generate:component`
  - Name: the name of the component, i.e. `Button`
  - Stateless functional components (recommended)
  - ES6 class components
  - SCSS modules
  - [Styled Components](https://github.com/styled-components/styled-components)
  - Tests for all of the above
  - README.md file that documents the component
- Page `npm run generate:page`
  - Name: The name of the route, i.e. Home, which gets converted to `HomePage`
  - Route: the route that corresponds to the page
  - Container Import: Most of the time, a Route exists only to import a container by the same name.  This is enabled by default, so make sure to run the container generator if you want to use this feature.

To run the generators with a list of options, run
```
npm run generate
```

Follow the on screen prompts to select the options you wish to use.

For convenience, you can bypass the initial selection and scaffold out containers, components and pages by running

```
npm run generate:<type_of_component>
```

where <type_of_component> is one of: component, container or page.

The generators use the same feature-first file organization as the rest of the project, encapsulating components within their own folder.

### **Gotchas**
In order to get the import / export to work, the generator does some pattern matching of the comments in the files to place the new imports.  Just don't delete the any comment that is prefixed with GENERATOR and things will work great.

From `app/src/container/index.js` or `app/src/component/index.js`
```
/* GENERATOR: Assemble all containers for export */
export LandingContainer from './LandingContainer';
export AppContainer from './AppContainer';
```

### Configuring your own generators
For information on how to build your own generators with relative ease, please go to the [Plop Microgenerator](https://github.com/amwmedia/plop) homepage for detailed instructions.

## Testing
Included in the setup is a test suite that will run your tests using Jest.  A number of testing utilities are included, including
- Expect (Plus Expect-JSX)
- Chai (JSX and Immutable)
- Enzyme
- Jest & enzyme-to-json in order to use the Jest snappshotting with Enzyme.

You can see examples for testing of React Components, Redux Action Creators and Reducers in the repository [here](https://github.com/RyanCCollins/scalable-react-boilerplate/tree/master/app/src/containers/FeatureFirstContainer/tests).  Please follow the convention of naming tests with a .test.js postfix, or else the test suite will not recognize your tests.

To run tests, you will run
```js
npm run test
```

which will pick up any file with the .test.js postfix and run it through Jest.


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
- [Styled Components](https://github.com/styled-components/styled-components) Visual primitives for the component age 💅 http://styled-components.com
- [Apollo Client](https://github.com/apollostack/apollo-client) Collocated GraphQL queries that are intelligently cached.  See [the docs](http://dev.apollodata.com/) and the [configuration file](https://github.com/RyanCCollins/scalable-react-boilerplate/blob/master/app/src/apolloClient.js) to configure in your own project (Note: you will need to connect to a GraphQL Server.  See the [example apps for details](https://github.com/RyanCCollins/scalable-react-boilerplate#example-apps).
- [Graphql](http://graphql.org/)
- [isomorphic-fetch](https://github.com/matthew-andrews/isomorphic-fetch) - API fetch network requests
- [redux-devtools](https://github.com/gaearon/redux-devtools) - redux development tool
- [SASS](http://sass-lang.com/) - styles
- [ESLint](http://eslint.org/) - linter
- [Mocha](http://mochajs.org/) - unit tests
- [jsdom](https://github.com/tmpvar/jsdom) - vdom to test React without browser
- [Expect](https://github.com/mjackson/expect) - assertion library
- [Enzyme](https://github.com/airbnb/enzyme) - React Testing utils for rendering of components
- [Chai / Immutable](http://chaijs.com/) - assertion library for Immutable JS
- A bunch of useful scripts


## Timeline / TODOS
* [x] Write README file
* [x] Write component tests using Enzyme
* [x] Implement a Rails like component generator
* [x] Add README.md files to each component
* [x] Add [Grommet](grommet.io) as an optional starter component library
* [x] Add Webpack stats plugin
* [x] Dogfood the project and iterate on suggestions
* [x] Setup production server configuration
* [x] Add Jest as testing utility
* [x] Incporporate Server Rendering
* [ ] Create Docker container & automation scripts
* [ ] Write wiki / other documentation

### Acknowledgements
![Udacity Alumni Loves React](https://github.com/RyanCCollins/cdn/blob/master/alumni-webapp/udacity-heart-react.png?raw=true)

This boilerplate began its life as a fork of the [React Redux Simple Starter](https://github.com/RyanCCollins/react-redux-simple-starter) project and was setup as a starter project for the Udacity Alumni Web application open-source project.

It was created by several of the members of the Udacity Alumni product infrastructure team, including:
* [Ryan Collins](https://github.com/RyanCCollins)
* [Andreas Daiminger](https://github.com/adai183)

Many thanks to the team behind [React Boilerplate](https://github.com/mxstbr/react-boilerplate), especially @maxstbr for setting a standard for the level of quality we in the React community can all learn from.  Many of the ideas used here were reverse engineered from the same project.

## Troubleshooting
The most often reason for an error is a mismatch in node and npm versions. In the case of this project, we are using Node version 5.2.0.

Instructions for installing NVM and setting your node version for the project can be [found here](https://gist.github.com/RyanCCollins/1a5686ff9dd51b72eb2d4dc70aa6c1f4).

If you get an error message, such as "Unexpected token import", that means that your Babel installation is not working right.  Please see [here](https://github.com/babel/babel/issues) for potential troubleshooting steps.
