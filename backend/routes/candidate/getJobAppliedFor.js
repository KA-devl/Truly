const Application = require('../../models/jobApplication');

// GET THE JOBS WHERE A CANDIDATE HAS APPLIED USING HIS USER ID
const getApplication = (app) => {
  app.get('/api/get-application-candidate/:id', async (req, res) => {
    try {
      const getAllApplication = await Application.find({
        candidateId: req.params.id,
      });

      res.status(201).json({ sucess: true, data: getAllApplication });
    } catch (err) {
      res.status(400).json({ sucess: false, message: err.message });
    }
  });
};

module.exports = getApplication;
