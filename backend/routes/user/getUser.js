const User = require('../../models/user');

const getUser = (app) => {
  app.get('/api/get-user/:id', async (req, res) => {
    try {
      const user = await User.findById(req.params.id);

      if (!user) {
        const message =
          "The user doesn't exist";
        return res.status(404).json({ message });
      }

      res.status(201).json({ sucess: true, data: user });
    } catch (err) {
      res.status(400).json({ sucess: false, message: err.message });
    }
  });
};

module.exports = getUser;
