const jobPosting = require('../../models/jobpost');

const getJobs = (app) => {
  app.get('/api/get-jobs/:id', async (req, res) => {
    try {
      const jobpost = await jobPosting.find({ authorId: req.params.id });

      if (jobpost === null)
        return res.status(400).json({ sucess: false, message: err.message });

      res.status(201).json({ sucess: true, data: jobpost });
    } catch (err) {
      res.status(400).json({ sucess: false, message: err.message });
    }
  });
};

module.exports = getJobs;
