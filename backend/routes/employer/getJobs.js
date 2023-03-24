const { getJobs } = require('../../controllers/employer/getJobs');

// GET ALL JOBS POSTING OF AN EMPLOYER BY EMPLYR ID
module.exports = (app) => {
  app.get('/api/get-jobs/:id', getJobs);
};
