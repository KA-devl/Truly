const jobPosting = require('../../models/jobPost');

// DELETE JOBPOSTING BY ITS ID
async function deleteJobPosting(req, res) {
  try {
    const jobpost = await jobPosting.findById(req.params.id);

    if (!jobpost)
      return res.status(400).json({ sucess: false, message: err.message });

    jobpost.remove();

    res.status(201).json({
      sucess: true,
      message: `Job with id ${req.params.id} has been deleted`,
      data: jobpost,
    });
  } catch (err) {
    res.status(400).json({ sucess: false, message: `The job id is invalid` });
  }
}

module.exports = { deleteJobPosting };
