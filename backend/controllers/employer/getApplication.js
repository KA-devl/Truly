const Application = require('../../models/jobApplication');

// GET ALL THE JOB APPLICATIONS THAT A EMPLOYER RECEIVED
async function getApplication(req, res) {
  try {
    const getAllApplication = await Application.find({
      authorId: req.params.id,
    });
    if (!getAllApplication)
      return res.status(400).json({
        sucess: false,
        message: `No job application was found for this employer`,
      });

    console.log(typeof getAllApplication);

    res.status(201).json({ sucess: true, data: getAllApplication });
  } catch (err) {
    res.status(400).json({ sucess: false, message: err.message });
  }
}

module.exports = { getApplication };
