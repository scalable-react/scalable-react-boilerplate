/**
 * Page Generator
 */
const componentNameCheck = require('../utils/componentNameCheck');
const trimTemplateFile = require('../utils/trimTemplateFile');

module.exports = {
  description: 'Add a page',
  prompts: [
    {
      type: 'input',
      name: 'name',
      message: 'What is the name of the page component?',
      validate: (value) => {
        if ((/.+/).test(value)) {
          return componentNameCheck(value) ? 'That component already exists. Please choose another name for your page component.' : true;
        }
        return 'The name is required.';
      },
    }, {
      type: 'input',
      name: 'path',
      message: 'Enter the path of the page component.',
      default: '/about',
      validate: value => {
        if ((/.+/).test(value)) {
          return true;
        }

        return 'path is required';
      },
    },
  ],


  actions: data => {
    // Generate index.js and index.module.scss
    const actions = [{
      type: 'add',
      path: '../../app/src/pages/{{properCase name}}/index.js',
      templateFile: './page/index.js.hbs',
      abortOnFail: true,
    }, {
      type: 'add',
      path: '../../app/src/pages/{{properCase name}}/index.module.scss',
      templateFile: './page/index.module.scss.hbs',
      abortOnFail: true,
    }];

    // Add the route to the routes.js file above the error route
    // TODO smarter route adding
    actions.push({
      type: 'modify',
      path: '../../app/containers/index.js',
      pattern: /(\/\* Assemble all containers for export \*\/)/g,
      template: trimTemplateFile('route.js.hbs'),
    });

    return actions;
  },
};
