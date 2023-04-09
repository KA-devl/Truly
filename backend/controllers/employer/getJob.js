const jobPosting = require('../../models/jobPost');

// GET A JOB BY ITS ID
async function getJob(req, res) {
  try {
    const jobpost = await jobPosting.findById(req.params.id).populate({
      path: 'authorId',
      model: 'user',
    });

    if (!jobpost)
      return res.status(400).json({ sucess: false, message: `invalid id` });

    res.status(201).json({ sucess: true, data: jobpost });
  } catch (err) {
    res
      .status(400)
      .json({ sucess: false, message: `The job id entered is invalid` });
  }
}

module.exports = { getJob };
