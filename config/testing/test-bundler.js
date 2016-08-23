// needed for regenerator-runtime
// (ES7 generator support is required by redux-saga)
import 'babel-polyfill';

// If we need to use Chai, we'll have already chaiEnzyme loaded
import chai from 'chai';
import chaiEnzyme from 'chai-enzyme';
import chaiJsx from 'chai-jsx';

chai.use(chaiEnzyme());
chai.use(chaiJsx);

// Include all .js files under `app`, except app.js, reducers.js, and routes.js.
// This is for isparta code coverage
const context = require.context(
  '../../app/src',
  true,
  /([^\a]+).test\.js$/
);
context.keys().forEach(context);
