const fs = require('fs');
const componentGenerator = require('./component/index.js');
const containerGenerator = require('./container/index.js');
const pagesGenerator = require('./page/index.js');
const SafeString = require('./utils/safeString').SafeString;

module.exports = (plop) => {
  plop.setGenerator('component', componentGenerator);
  plop.setGenerator('container', containerGenerator);
  plop.setGenerator('page', pagesGenerator);
  plop.addHelper('uppercase', text => text.toUpperCase());
  plop.addHelper('directory', (comp) => {
    try {
      fs.accessSync(`app/src/containers/${comp}`, fs.F_OK);
      return `containers/${comp}`;
    } catch (e) {
      return `components/${comp}`;
    }
  });
  plop.addHelper('createImports', (list) => {
    const items = list.map(item => `import ${item} from 'grommet/components/${item}';`).join('\n');
    return new SafeString(items);
  });
  plop.addHelper('curly', (object, open) => (open ? '{' : '}'));
};