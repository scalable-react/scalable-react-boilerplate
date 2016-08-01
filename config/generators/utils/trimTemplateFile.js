const fs = require('fs');

const trimTemplateFile = (template) => {
  // Loads the template file and trims the whitespace and then returns the content as a string.
  return fs.readFileSync(`config/generators/page/${template}`, 'utf8').replace(/\s*$/, '');
};

module.exports = trimTemplateFile;
