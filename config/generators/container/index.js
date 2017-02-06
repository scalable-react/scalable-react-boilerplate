const componentNameCheck = require('../utils/componentNameCheck');
const trimTemplateFile = require('../utils/trimTemplateFile');

module.exports = {
  description: 'Add a container component',
  prompts: [
    {
      type: 'input',
      name: 'name',
      message: 'What should it be called?',
      default: 'About',
      validate: (value) => {
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
      message: 'Do you want to use SCSS Modules for styling?',
    },
    {
      type: 'confirm',
      name: 'wantFlowTypes',
      default: true,
      message: 'Should the container have FlowTypes instead of PropTypes?',
    },
    {
      type: 'confirm',
      name: 'wantStyledComponents',
      default: false,
      message: 'Do you want to use Styled Components for styling?',
    },
    {
      type: 'confirm',
      name: 'wantActionsAndReducer',
      default: true,
      message: 'Do you want actions/constants/reducer for this container?',
    },
    {
      type: 'confirm',
      name: 'wantSelectors',
      default: false,
      message: 'Do you want to use reselect?',
    },
    {
      type: 'checkbox',
      name: 'imports',
      message: 'Would you like to import any commonly used grommet components?',
      choices: () => [
        { name: 'Anchor', value: 'Anchor', checked: false },
        { name: 'Article', value: 'Article', checked: false },
        { name: 'Button', value: 'Button', checked: false },
        { name: 'Card', value: 'Card', checked: false },
        { name: 'Heading', value: 'Heading', checked: false },
        { name: 'Header', value: 'Header', checked: false },
        { name: 'Footer', value: 'Footer', checked: false },
        { name: 'Paragraph', value: 'Paragraph', checked: false },
        { name: 'Section', value: 'Section', checked: false },
      ],
    },
  ],
  actions: (data) => {
    const actions = [{
      type: 'add',
      path: '../../app/src/containers/{{properCase name}}/index.js',
      templateFile: './container/index.js.hbs',
      abortOnFail: true,
    }, {
      type: 'add',
      path: '../../app/src/containers/{{properCase name}}/tests/index.test.js',
      templateFile: './container/test.js.hbs',
      abortOnFail: true,
    }];

    // Add container export to index.js in container root folder
    actions.push({
      type: 'modify',
      path: '../../app/src/containers/index.js',
      pattern: /(\/\* GENERATOR: Assemble all containers for export \*\/)/g,
      template: trimTemplateFile('config/generators/container/export.js.hbs'),
    });

    if (data.wantSCSSModules) {
      actions.push({
        type: 'add',
        path: '../../app/src/containers/{{properCase name}}/index.module.scss',
        templateFile: './container/styles.scss.hbs',
        abortOnFail: true,
      });
    }

    if (data.wantFlowTypes) {
      actions.push({
        type: 'add',
        path: '../../app/src/containers/{{properCase name}}/flowTypes.js',
        templateFile: './container/flowTypes.js.hbs',
        abortOnFail: true,
      });
    }

    if (data.wantStyledComponents) {
      actions.push({
        type: 'add',
        path: '../../app/src/containers/{{properCase name}}/styles.js',
        templateFile: './container/styles.js.hbs',
        abortOnFail: true,
      });
    }

    if (data.wantSelectors) {
      actions.push({
        type: 'add',
        path: '../../app/src/containers/{{properCase name}}/selectors.js',
        templateFile: './container/selectors.js.hbs',
        abortOnFail: true,
      });
    }

    // If they want actions and a reducer, generate actions.js, constants.js,
    // reducer.js and the corresponding tests for actions and the reducer
    if (data.wantActionsAndReducer) {
      // Actions
      actions.push({
        type: 'add',
        path: '../../app/src/containers/{{properCase name}}/actions.js',
        templateFile: './container/actions.js.hbs',
        abortOnFail: true,
      });
      actions.push({
        type: 'add',
        path: '../../app/src/containers/{{properCase name}}/tests/actions.test.js',
        templateFile: './container/actions.test.js.hbs',
        abortOnFail: true,
      });

      actions.push({
        type: 'modify',
        path: '../../app/src/store.js',
        pattern: /(\/\* GENERATOR: Import all of your initial state \*\/)/g,
        template: trimTemplateFile('config/generators/container/store.import.js.hbs'),
      });

      actions.push({
        type: 'modify',
        path: '../../app/src/store.js',
        pattern: /(\/\* GENERATOR: Compile all of your initial state \*\/)/g,
        template: trimTemplateFile('config/generators/container/store.usage.js.hbs'),
      });

      actions.push({
        type: 'modify',
        path: '../../app/src/reducers.js',
        pattern: /(\/\* GENERATOR: Import all of your reducers \*\/)/g,
        template: trimTemplateFile('config/generators/container/reducers.import.js.hbs'),
      });

      actions.push({
        type: 'modify',
        path: '../../app/src/reducers.js',
        pattern: /(\/\* GENERATOR: Compile all of your reducers \*\/)/g,
        template: trimTemplateFile('config/generators/container/reducers.usage.js.hbs'),
      });

      // Constants
      actions.push({
        type: 'add',
        path: '../../app/src/containers/{{properCase name}}/constants.js',
        templateFile: './container/constants.js.hbs',
        abortOnFail: true,
      });

      // Reducer
      actions.push({
        type: 'add',
        path: '../../app/src/containers/{{properCase name}}/reducer.js',
        templateFile: './container/reducer.js.hbs',
        abortOnFail: true,
      });
      actions.push({
        type: 'add',
        path: '../../app/src/containers/{{properCase name}}/tests/reducer.test.js',
        templateFile: './container/reducer.test.js.hbs',
        abortOnFail: true,
      });
    }

    return actions;
  },
};
