const Application = require('../../models/jobApplication');

//CREATE A APPLICATION FOR CANDIDATE
const createApplication = (app) => {
  app.post('/api/apply-for-job', async (req, res) => {
    try {
      const application = await Application.create(req.body);
      const populatedApplication = await Application.populate(application, [
        { path: 'candidateId', model: 'user' },
        { path: 'jobPostId', model: 'jobPost' },
      ]);

      populatedApplication.data;

      res.status(201).json({ sucess: true, data: populatedApplication });
    } catch (err) {
      res.status(400).json({ sucess: false, message: err.message });
    }
  });
};

module.exports = createApplication;
