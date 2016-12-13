var path = require('path');

module.exports = {
  "extends": "eslint-config-airbnb",
  "parser": "babel-eslint",
  "env": {
    "browser": true,
    "node": true,
    "mocha": true
  },
  "rules": {
    "func-names": 0,
    "eol-last": 0,
    "react/jsx-no-bind": [ 2, {
      "ignoreRefs": false,
      "allowArrowFunctions": true,
      "allowBind": true
    }],
    "graphql/template-strings": ['error', {
      env: 'apollo',
      schemaJsonFilepath: path.resolve(__dirname, './config/schema/schema.json'),
    }]
  },
  "plugins": [
    "react",
    "graphql"
  ]
}
