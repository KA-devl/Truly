const jobApplication = require('../../models/jobApplication');

//Update a job Application Status of a candidate to Interview
async function interview(req, res) {
  try {
    const jobApp = await jobApplication.findByIdAndUpdate(
      req.params.id,
      { applicationStatus: 'interview' },
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

module.exports = { interview };
