const jobPosting = require('../../models/jobpost');

const updateJob = (app) => {
  app.put('/api/update-job/:id', async (req, res) => {
    try {
      const jobpost = await jobPosting.findByIdAndUpdate(
        req.params.id,
        req.body,
        {
          new: true,
          runValidators: true,
        }
      );

      if (jobpost === null)
        return res.status(400).json({ sucess: false, message: `invalid id` });

      res.status(201).json({ sucess: true, data: jobpost });
    } catch (err) {
      res.status(400).json({ sucess: false, message: err.message });
    }
  });
};

module.exports = updateJob;
