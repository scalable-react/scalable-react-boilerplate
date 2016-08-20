import chai from 'chai';
import chaiEnzyme from 'chai-enzyme';
chai.use(chaiEnzyme());

// Load up every single JS file under the source directory except for
// reducers, routes and store files.
<<<<<<< HEAD
const context = require.context('../../app/src', true, /([^\a]+).test\.js$/);
=======
const context = require.context(
  '../../app/src',
  true,
  /^^((?!(app|reducers|routes|store)).)*\.js$/
);
>>>>>>> c6f5eaf35b59c90e3eb65fffdd960e4e92aae81c
context.keys().forEach(context);
