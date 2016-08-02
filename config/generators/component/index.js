const componentNameCheck = require('../utils/componentNameCheck');
const trimTemplateFile = require('../utils/trimTemplateFile');

module.exports = {
  description: 'Add a component to the app',
  prompts: [
    {
      type: 'list',
      name: 'type',
      message: 'Select the type of component',
      default: 'Stateless Function',
      choices: () => ['ES6 Class', 'Stateless Function'],
    },
    {
      type: 'input',
      name: 'name',
      message: 'What is the name of the component?',
      default: 'MyComponent',
      validate: (value) => {
        if ((/.+/).test(value)) {
          return componentNameCheck(value) ? 'That component already exists.' : true;
        }
        return 'The name is required.';
      },
    },
    {
      type: 'confirm',
      name: 'wantSCSSModules',
      default: true,
      message: 'Should the component use SCSS Modules?',
    },
    {
      type: 'confirm',
      name: 'wantPropTypes',
      default: true,
      message: 'Should the component have PropTypes?',
    },
  ],
  actions: (data) => {
    const actions = [{
      type: 'add',
      path: '../../app/src/components/{{properCase name}}/index.js',
      templateFile: data.type === 'ES6 Class' ?
        './component/es6class.js.hbs' : './component/stateless.js.hbs',
      abortOnFail: true,
    }, {
      type: 'add',
      path: '../../app/src/components/{{properCase name}}/tests/index.test.js',
      templateFile: './component/test.js.hbs',
      abortOnFail: true,
    }];

    // If they want a CSS file, add styles.css
    if (data.wantSCSSModules) {
      actions.push({
        type: 'add',
        path: '../../app/src/components/{{properCase name}}/index.module.scss',
        templateFile: './component/styles.scss.hbs',
        abortOnFail: true,
      });
    }

    // Add container export to index.js in container root folder
    actions.push({
      type: 'modify',
      path: '../../app/src/components/index.js',
      pattern: /(\/\* Assemble all components for export \*\/)/g,
      template: trimTemplateFile('config/generators/component/export.js.hbs'),
    });

    return actions;
  },
};
