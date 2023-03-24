const { deleteUser } = require('../../controllers/admin/deleteUser');

module.exports = (app) => app.delete('/api/delete-user/:id', deleteUser);
