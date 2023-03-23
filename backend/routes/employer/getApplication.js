const { getApplication } = require('../../controllers/employer/getApplication');

// GET ALL THE JOB APPLICATIONS THAT A EMPLOYER RECEIVED
module.exports = (app) => {
  app.get('/api/get-application-employer/:id', getApplication);
};
