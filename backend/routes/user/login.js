const { login } = require('../../controllers/user/login');

module.exports = (app) => {
  app.post('/api/login', login);
};
