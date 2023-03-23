const { uploadAvatar } = require('../../controllers/user/updateAvatar');
const upload = require('../../config/multer');

// UPDATE USER PROFILE AVATAR
module.exports = (app) =>
  app.put('/api/update-avatar/:id', upload.single('image'), uploadAvatar);
