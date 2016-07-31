const fs = require('fs');

const pageComponents = fs.readdirSync('app/src/components');
const pageContainers = fs.readdirSync('app/src/containers');
const components = pageComponents.concat(pageContainers);

const componentNameCheck = (component) =>
  components.indexOf(component) >= 0;

module.exports = componentNameCheck;
