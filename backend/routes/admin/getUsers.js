const { getUsers } = require('../../controllers/admin/getUsers');

module.exports = (app) => {
  app.get('/api/get-users/', getUsers);
};
