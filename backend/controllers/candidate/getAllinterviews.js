const Application = require('../../models/jobApplication');

// GET THE JOBS WHERE A CANDIDATE HAS BEEN SELECT FOR INTERVIEW USING HIS USER ID
async function getAllinterviews(req, res) {
  try {
    const getAllinterviews = await Application.find({
      candidateId: req.params.id,
      applicationStatus: ['interview'],
    }).populate({
      path: 'jobPostId',
      model: 'jobPost',
    }).populate({
      path: 'authorId',
      model: 'user',
    });

    if (getAllinterviews.length === 0)
      return res
        .status(200)
        .json({ sucess: false, message: `No interviews found` });
    else res.status(201).json({ sucess: true, data: getAllinterviews });
  } catch (err) {
    res.status(400).json({ sucess: false, message: err.message });
  }
}

module.exports = { getAllinterviews };
