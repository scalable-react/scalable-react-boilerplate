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
      default: 'Button',
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
      default: false,
      message: 'Should the component use SCSS Modules?',
    },
    {
      type: 'confirm',
      name: 'wantStyledComponents',
      default: false,
      message: 'Should the component use styled components?',
    },
    {
      type: 'confirm',
      name: 'wantFlowTypes',
      default: true,
      message: 'Should the component have FlowTypes?',
    },
    {
      type: 'confirm',
      name: 'wantPropTypes',
      default: false,
      message: 'Should the component have PropTypes?',
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

    if (data.wantStyledComponents) {
      actions.push({
        type: 'add',
        path: '../../app/src/components/{{properCase name}}/styles.js',
        templateFile: './component/styles.js.hbs',
        abortOnFail: true,
      });
    }

    // README.md
    actions.push({
      type: 'add',
      path: '../../app/src/components/{{properCase name}}/README.md',
      templateFile: './component/README.md.hbs',
      abortOnFail: true,
    });

    // Add container export to index.js in container root folder
    actions.push({
      type: 'modify',
      path: '../../app/src/components/index.js',
      pattern: /(\/\* GENERATOR: Assemble all components for export \*\/)/g,
      template: trimTemplateFile('config/generators/component/export.js.hbs'),
    });

    return actions;
  },
};
