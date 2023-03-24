const {
  getApplication,
} = require('../../controllers/candidate/getJobAppliedFor');

// GET THE JOBS WHERE A CANDIDATE HAS APPLIED USING HIS USER ID
module.exports = (app) => {
  app.get('/api/get-application-candidate/:id', getApplication);
};
