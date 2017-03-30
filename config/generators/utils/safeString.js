function SafeString(string) {
  this.string = string;
}

SafeString.prototype.toString = SafeString.prototype.toHTML = function () {
  return '' + this.string; // eslint-disable-line
};

module.exports = {
  SafeString,
};
