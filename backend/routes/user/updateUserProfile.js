const { updateUser } = require('../../controllers/user/updateUserProfile');

//UPDATE USER BY HIS ID
module.exports = (app) => {
  app.put('/api/edit-profile/:id', updateUser);
};
