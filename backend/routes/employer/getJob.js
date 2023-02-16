const jobPosting = require('../../models/jobpost');

const getJob = (app) => {
  app.get('/api/get-job/:id', async (req, res) => {
    try {
      const jobpost = await jobPosting.findById(req.params.id);

      if (jobpost === null)
        return res.status(400).json({ sucess: false, message: `invalid id` });

      res.status(201).json({ sucess: true, data: jobpost });
    } catch (err) {
      res.status(400).json({ sucess: false, message: err.message });
    }
  });
};

module.exports = getJob;
