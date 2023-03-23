const { getUser } = require('../../controllers/user/getUser');

// GET USER BY HIS ID
module.exports = (app) => {
  app.get('/api/get-user/:id', getUser);
};
