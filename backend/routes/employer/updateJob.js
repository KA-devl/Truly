const jobPosting = require('../../models/jobpost');

//UPDATE JOB POSTING BY ITS ID
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

      if (!jobpost)
        return res
          .status(400)
          .json({ sucess: false, message: `The job id entered is invalid` });

      res.status(201).json({ sucess: true, data: jobpost });
    } catch (err) {
      res
        .status(400)
        .json({ sucess: false, message: `The job id entered is invalid` });
    }
  });
};

module.exports = updateJob;
