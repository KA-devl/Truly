const {
  rejected,
} = require('../../controllers/employer/updateApplicationStatusToRejected');

//Update a job Application Status of a candidate to rejected
module.exports = (app) => {
  app.put('/api/update-application-rejected/:applicationId', rejected);
};
