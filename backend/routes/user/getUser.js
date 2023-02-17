const User = require('../../models/user');

const getUser = (app) => {
  app.get('/api/get-user/:id', async (req, res) => {
    try {
      const user = await User.findById(req.params.id).populate('jobPost');

      if (!user) {
        return res.status(404).json({ message: err.message });
      }

      res.status(201).json({ sucess: true, data: user });
    } catch (err) {
      res.status(400).json({ sucess: false, message: err.message });
    }
  });
};

module.exports = getUser;
