const jobPosting = require('../../models/jobpost');

const deleteJobPosting = (app) => {
  app.delete('/api/delete-job/:id', async (req, res) => {
    try {
      const jobpost = await jobPosting.findByIdAndDelete(req.params.id);

      if (jobpost === null)
        return res.status(400).json({ sucess: false, message: err.message });

      res.status(201).json({
        sucess: true,
        message: `Job with id ${req.params.id} has been deleted`,
        data: jobpost,
      });
    } catch (err) {
      res.status(400).json({ sucess: false, message: `The job id is invalid` });
    }
  });
};

module.exports = deleteJobPosting;
