const userModel = require('../../models/user');

const deleteUser = (app) =>
  app.post('/api/delete-user/:id', async (req, res) => {
    try {
      const user = await userModel.findByIdAndDelete(req.params.id);

      if (user === null)
        return res.status(400).json({ sucess: false, message: err.message });

      res.status(201).json({
        sucess: true,
        message: `User with id ${req.params.id} has been deleted`,
        data: user,
      });
    } catch (err) {
      res.status(400).json({ sucess: false, message: `The user id is invalid` });
    }
  });

module.exports = deleteUser;
