const Application = require('../../models/jobApplication');

// GET ALL THE APPLICATIONS FOR A SPECIFIC JOB POST BY ITS ID
const getApplicationJob = (app) => {
  app.get('/api/get-application-job/:jobid', async (req, res) => {
    try {
      const getAllApplication = await Application.find({
        jobPostId: req.params.jobid,
      }).populate({
        path: 'candidateId',
        model: 'user',
      });
      if (!getAllApplication)
        return res.status(400).json({
          sucess: false,
          message: `No job application was found for this job post`,
        });

      res.status(201).json({ sucess: true, data: getAllApplication });
    } catch (err) {
      res.status(400).json({ sucess: false, message: err.message });
    }
  });
};

module.exports = getApplicationJob;
