const {
  createApplication,
} = require('../../controllers/candidate/createApplication');

//CREATE A APPLICATION FOR CANDIDATE
module.exports = (app) => {
  app.post('/api/apply-for-job', createApplication);
};
