const jobPosting = require('../../models/jobPost');

//CREATE A JOBPOSTING ( its better to define a name to the function so that we can understand what it does)

async function createJobPosting(req, res) {
  try {
    const jobpost = await jobPosting.create(req.body);
    res.status(201).json({ sucess: true, data: jobpost });
  } catch (err) {
    res.status(400).json({ sucess: false, message: err.message });
  }
}

module.exports = { createJobPosting };
