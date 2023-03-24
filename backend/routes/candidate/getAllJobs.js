const { getAllJobs } = require('../../controllers/candidate/getAllJobs');

// GET ALL JOBS POSTING
module.exports = (app) => {
  app.get('/api/get-jobs', getAllJobs);
};
