const componentNameCheck = require('../utils/componentNameCheck');
const trimTemplateFile = require('../utils/trimTemplateFile');

module.exports = {
  description: 'Add a container component',
  prompts: [
    {
      type: 'input',
      name: 'name',
      message: 'What should it be called?',
      default: 'MyContainer',
      validate: value => {
        if ((/.+/).test(value)) {
          return componentNameCheck(value) ? 'A container with this name already exists' : true;
        }

        return 'The name is required';
      },
    },
    {
      type: 'confirm',
      name: 'wantSCSSModules',
      default: true,
      message: 'Does it need styling?',
    },
    {
      type: 'confirm',
      name: 'wantActionsAndReducer',
      default: true,
      message: 'Do you want actions/constants/reducer for this container?',
    },
  ],
  actions: (data) => {

    const actions = [{
      type: 'add',
      path: '../../app/src/containers/{{properCase name}}Container/index.js',
      templateFile: './container/index.js.hbs',
      abortOnFail: true,
    }, {
      type: 'add',
      path: '../../app/src/containers/{{properCase name}}Container/tests/index.test.js',
      templateFile: './container/test.js.hbs',
      abortOnFail: true,
    }];

    // Add container export to index.js in container root folder
    actions.push({
      type: 'modify',
      path: '../../app/src/containers/index.js',
      pattern: /(\/\* Assemble all containers for export \*\/)/g,
      template: trimTemplateFile('config/generators/container/export1.js.hbs'),
    }, {
      type: 'modify',
      path: '../../app/src/containers/index.js',
      pattern: /(export {)/g,
      template: trimTemplateFile('config/generators/container/export2.js.hbs'),
    });

    if (data.wantSCSSModules) {
      actions.push({
        type: 'add',
        path: '../../app/src/containers/{{properCase name}}Container/index.module.scss',
        templateFile: './container/styles.scss.hbs',
        abortOnFail: true,
      });
    }

    // If they want actions and a reducer, generate actions.js, constants.js,
    // reducer.js and the corresponding tests for actions and the reducer
    if (data.wantActionsAndReducer) {
      // Actions
      actions.push({
        type: 'add',
        path: '../../app/src/containers/{{properCase name}}Container/actions.js',
        templateFile: './container/actions.js.hbs',
        abortOnFail: true,
      });
      actions.push({
        type: 'add',
        path: '../../app/src/containers/{{properCase name}}Container/tests/actions.test.js',
        templateFile: './container/actions.test.js.hbs',
        abortOnFail: true,
      });

      // Constants
      actions.push({
        type: 'add',
        path: '../../app/src/containers/{{properCase name}}Container/constants.js',
        templateFile: './container/constants.js.hbs',
        abortOnFail: true,
      });

      // Reducer
      actions.push({
        type: 'add',
        path: '../../app/src/containers/{{properCase name}}Container/reducer.js',
        templateFile: './container/reducer.js.hbs',
        abortOnFail: true,
      });
      actions.push({
        type: 'add',
        path: '../../app/src/containers/{{properCase name}}Container/tests/reducer.test.js',
        templateFile: './container/reducer.test.js.hbs',
        abortOnFail: true,
      });
    }

    return actions;
  },
};
