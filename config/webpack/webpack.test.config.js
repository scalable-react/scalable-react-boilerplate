import 'babel-polyfill';
import chai from 'chai';
import chaiEnzyme from 'chai-enzyme';
chai.use(chaiEnzyme());

// Load up every single JS file under the source directory except for
// reducers, routes and store files.
const context = require.context('../../app/src', true, /([^\a]+).test\.js$/);
context.keys().forEach(context);
