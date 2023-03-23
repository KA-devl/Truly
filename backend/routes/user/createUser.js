const { signUpUserController } = require('../../controllers/user/createUser');

// CREATE A USER
module.exports = (app) => app.post('/api/signup', signUpUserController);
