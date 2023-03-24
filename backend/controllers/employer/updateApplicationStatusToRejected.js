const jobApplication = require('../../models/jobApplication');

//Update a job Application Status of a candidate to rejected
async function rejected(req, res) {
  try {
    const jobApp = await jobApplication.findByIdAndUpdate(
      req.params.applicationId,
      { applicationStatus: 'rejected' },
      {
        new: true,
        runValidators: true,
      }
    );

    if (!jobApp)
      return res.status(400).json({
        sucess: false,
        message: `The job Application  id entered is invalid`,
      });

    res.status(201).json({ sucess: true, data: jobApp });
  } catch (err) {
    res.status(400).json({
      sucess: false,
      message: `The job Application id entered is invalid`,
    });
  }
}

module.exports = { rejected };
