const Application = require('../../models/jobApplication');

// GET THE JOBS WHERE A CANDIDATE HAS APPLIED USING HIS USER ID
async function getApplication(req, res) {
  try {
    const getAllApplication = await Application.find({
      candidateId: req.params.id,
    });
    if (getAllApplication.length === 0)
      return res
        .status(200)
        .json({ sucess: true, message: `No job applications found` });
    else if (getAllApplication);
    res.status(201).json({ sucess: true, data: getAllApplication });
  } catch (err) {
    res.status(400).json({ sucess: false, message: err.message });
  }
}

module.exports = { getApplication };
