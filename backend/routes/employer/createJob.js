const { createJobPosting } = require('../../controllers/employer/createJob');

//CREATE A JOBPOSTING ( its better to define a name to the function so that we can understand what it does)

module.exports = (app) => {
  app.post('/api/create-job', createJobPosting);
};
