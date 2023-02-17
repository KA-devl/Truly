const Application = require('../../models/jobApplication');

// GET THE JOBS WHERE CANDIDATES APPLIED
const getApplication = (app) => {
  app.get('/api/get-job-candidate/:id', async (req, res) => {
    try {
      const getAllApplication = await Application.find({
        authorId: req.params.id,
      });

      res.status(201).json({ sucess: true, data: getAllApplication });
    } catch (err) {
      res.status(400).json({ sucess: false, message: err.message });
    }
  });
};

module.exports = getApplication;
