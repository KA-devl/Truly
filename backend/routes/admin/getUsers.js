const userModel = require('../../models/user');

const getUsers = (app) => {
  app.get('/api/get-users/', async (req, res) => {
    try {
      const user = await userModel.find();

      if (user === null)
        return res.status(400).json({ sucess: false, message: err.message });

      res.status(201).json({ sucess: true, data: user });
    } catch (err) {
      res.status(400).json({ sucess: false, message: err.message });
    }
  });
};

module.exports = getUsers;