const {
  getAllinterviews,
} = require('../../controllers/candidate/getAllinterviews');

// GET ALL JOBS POSTING
module.exports = (app) => {
  app.get('/api/get-all-interviews/:id', getAllinterviews);
};
