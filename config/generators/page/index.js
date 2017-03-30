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
      default: 'About',
      validate: (value) => {
        if ((/.+/).test(value)) {
          return componentNameCheck(value) ?
            'That component already exists. Please choose another name for your page component.' : true;
        }
        return 'The name is required.';
      },
    }, {
      type: 'input',
      name: 'path',
      message: 'Enter the route path of the page component.',
      default: '/about',
      validate: (value) => {
        if ((/.+/).test(value)) {
          return true;
        }

        return 'path is required';
      },
    },
  ],


  actions: () => {
    // Generate index.js and index.module.scss
    const actions = [{
      type: 'add',
      path: '../../app/src/pages/{{properCase name}}/index.js',
      templateFile: './page/index.js.hbs',
      abortOnFail: true,
    }];

    // Add the route to the routes.js file above the error route
    // automatic export in root index.js
    actions.push({
      type: 'modify',
      path: '../../app/src/routes.js',
      pattern: /(\/\* GENERATOR: Newly generated Routes go here \*\/)/g,
      template: trimTemplateFile('config/generators/page/route.js.hbs'),
    }, {
      type: 'modify',
      path: '../../app/src/pages/index.js',
      pattern: /(\/\* GENERATOR: Assemble all pages for export \*\/)/g,
      template: trimTemplateFile('config/generators/page/export.js.hbs'),
    });

    return actions;
  },
};
