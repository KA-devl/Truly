const jobPosting = require('../../models/jobpost');

// GET A JOB BY ITS ID
const getJob = (app) => {
  app.get('/api/get-job/:id', async (req, res) => {
    try {
      const jobpost = await jobPosting.findById(req.params.id);

    if (!jobpost)
        return res.status(400).json({ sucess: false, message: `invalid id` });

      res.status(201).json({ sucess: true, data: jobpost });
    } catch (err) {
      res
        .status(400)
        .json({ sucess: false, message: `The job id entered is invalid` });
    }
  });
};

module.exports = getJob;
