const babelJest = require('babel-jest');

module.exports = {
  process(src, filename) {
    if (!filename.match(/\.jsx?$/)) {
      return '';
    }
    return babelJest.process(
      src.replace(/import(.*)from.*\.((less)|(scss)|(svg)|(png)).*;/gi, 'let $1 = {};'
    ), filename);
  },
};
