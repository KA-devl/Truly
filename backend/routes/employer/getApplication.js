const Application = require('../../models/jobApplication');

// GET THE JOBS WHERE CANDIDATES APPLIED
const getApplication = (app) => {
  app.get('/api/get-job-candidate', async (req, res) => {
    try {
      const application = await Application.find();

      const populatedApplication = await Application.populate(application, [
        { path: 'candidateId', model: 'user' },
        { path: 'jobPostId', model: 'jobPost' },
      ]);

      res.status(201).json({ sucess: true, data: application });
    } catch (err) {
      res.status(400).json({ sucess: false, message: err.message });
    }
  });
};

module.exports = getApplication;
