const User = require('../../models/user');

const getUser = (app) => {
  app.get('/api/get-user/:id', async (req, res) => {
    try {
      const user = await User.findById(req.params.id);

      if (user === null) return res.status(400).json({ sucess: false });

      res.status(201).json({ sucess: true, data: user });
    } catch (err) {
      res.status(400).json({ sucess: false, message: err.message });
    }
  });
};

module.exports = getUser;
