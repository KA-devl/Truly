const jobPosting = require('../../models/jobpost');

// GET ALL JOBS POSTING
const getAllJobs = (app) => {
  app.get('/api/get-jobs', async (req, res) => {
    try {
      const jobpost = await jobPosting.find();

      if (jobpost == 0)
        return res
          .status(400)
          .json({ sucess: false, message: 'No job posting' });

      res.status(201).json({ sucess: true, data: jobpost });
    } catch (err) {
      res.status(400).json({ sucess: false, message: err.message });
    }
  });
};

module.exports = getAllJobs;
