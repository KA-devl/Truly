const {
  getApplicationJob,
} = require('../../controllers/employer/getApplicationForAjob');

// GET ALL THE APPLICATIONS FOR A SPECIFIC JOB POST BY ITS ID
module.exports = (app) => {
  app.get('/api/get-application-job/:jobid', getApplicationJob);
};
