const { getJob } = require('../../controllers/employer/getJob');

// GET A JOB BY ITS ID
module.exports = (app) => {
  app.get('/api/get-job/:id', getJob);
};
