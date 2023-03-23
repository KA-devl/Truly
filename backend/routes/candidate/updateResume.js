const { updateResume } = require('../../controllers/candidate/updateResume');
const upload = require('../../config/multer');

// UPDATE CANDIDATE RESUME
module.exports = (app) =>
  app.put('/api/update-resume/:id', upload.single('resume'), updateResume);
