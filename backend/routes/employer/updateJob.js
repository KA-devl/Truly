const { updateJob } = require('../../controllers/employer/updateJob');

//UPDATE JOB POSTING BY ITS ID
module.exports = (app) => {
  app.put('/api/update-job/:id', updateJob);
};
