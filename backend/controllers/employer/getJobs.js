const jobPosting = require('../../models/jobPost');

// GET ALL JOBS POSTING OF AN EMPLOYER BY EMPLYR ID
async function getJobs(req, res) {
  try {
    const jobpost = await jobPosting.find({ authorId: req.params.id });

    if (!jobpost)
      return res
        .status(400)
        .json({ sucess: false, message: `No job posting found` });

    res.status(201).json({ sucess: true, data: jobpost });
  } catch (err) {
    res.status(400).json({ sucess: false, message: err.message });
  }
}

module.exports = { getJobs };
