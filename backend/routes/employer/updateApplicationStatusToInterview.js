const {
  interview,
} = require('../../controllers/employer/updateApplicationStatusToInterview');

//Update a job Application Status of a candidate to Interview
module.exports = (app) => {
  app.put('/api/update-application-interview/:applicationId', interview);
};
