const { deleteJobPosting } = require('../../controllers/employer/deleteJob');

// DELETE JOBPOSTING BY ITS ID
module.exports = (app) => {
  app.delete('/api/delete-job/:id', deleteJobPosting);
};
