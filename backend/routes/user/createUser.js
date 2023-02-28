
const { signUpUserController} = require('../../controllers/user/createUser');

// CREATE A USER
// its better to define a name for this function so that we can understand what it does)
const createUser = (app) =>
  app.post('/api/signup', signUpUserController );

// The above method is exported so that it can be availaible in app.js
module.exports = createUser;
