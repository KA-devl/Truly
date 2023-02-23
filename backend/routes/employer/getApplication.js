const Application = require('../../models/jobApplication');

// GET THE JOBS WHERE CANDIDATES APPLIED
const getApplication = (app) => {
  app.get('/api/get-application-employer/:id', async (req, res) => {
    try {
      const getAllApplication = await Application.find({
        authorId: req.params.id,
      });
      if (!getAllApplication)
        return res
          .status(400)
          .json({
            sucess: false,
            message: `No job application was found for this employer`,
          });

      res.status(201).json({ sucess: true, data: getAllApplication });
    } catch (err) {
      res.status(400).json({ sucess: false, message: err.message });
    }
  });
};

module.exports = getApplication;
