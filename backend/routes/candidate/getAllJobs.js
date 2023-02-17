const jobPosting = require('../../models/jobpost');

// GET ALL JOBS POSTING
const getAllJobs = (app) => {
  app.get('/api/get-jobs', async (req, res) => {
    try {
      const jobpost = await jobPosting.find();

      if (jobpost === null)
        return res.status(400).json({ sucess: false, message: err.message });

      res.status(201).json({ sucess: true, data: jobpost });
    } catch (err) {
      res.status(400).json({ sucess: false, message: err.message });
    }
  });
};

module.exports = getAllJobs;
