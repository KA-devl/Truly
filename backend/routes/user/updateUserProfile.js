const User = require('../../models/user');
const updateUser = (app) => {
  app.put('/api/edit-profile/:id', async (req, res) => {
    try {
      const user = await User.findByIdAndUpdate(req.params.id, req.body, {
        new: true,
        runValidators: true,
      });

      if (user === null)
        return res.status(400).json({ sucess: false, message: `invalid id` });

      res.status(201).json({
        sucess: true,
        message: `The account parameters were successfully edited`,
        data: user,
      });
    } catch (err) {
      res.status(400).json({ sucess: false, message: err.message });
    }
  });
};

module.exports = updateUser;
