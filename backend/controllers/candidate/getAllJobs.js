const jobPosting = require('../../models/jobPost');

// GET ALL JOBS POSTING
async function getAllJobs(req, res) {
  try {
    const jobpost = await jobPosting.find().populate({
      path: 'authorId',
      model: 'user',
    });

    if (jobpost == 0)
      return res.status(400).json({ sucess: false, message: 'No job posting' });

    res.status(201).json({ sucess: true, data: jobpost });
  } catch (err) {
    res.status(400).json({ sucess: false, message: err.message });
  }
}

module.exports = { getAllJobs };
