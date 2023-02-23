const jobPosting = require('../../models/jobpost');

//CREATE A JOBPOSTING ( its better to define a name to the function so that we can understand what it does)

const createJobPosting = (app) => {
  app.post('/api/create-job', async (req, res) => {
    try {
      const jobpost = await jobPosting.create(req.body);
      res.status(201).json({ sucess: true, data: jobpost });
    } catch (err) {
      res
        .status(400)
        .json({ sucess: false, message: `The job cannot be created` });
    }
  });
};

module.exports = createJobPosting;
