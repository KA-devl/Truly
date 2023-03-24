const User = require('../../models/user');

// GET USER BY HIS ID

async function getUser(req, res) {
  try {
    const user = await User.findById(req.params.id)
      .populate({
        path: 'jobApplication',
        options: { strict: false },
      })
      .populate({
        path: 'jobPost',
        options: { strict: false },
      });

    if (user === null) {
      return res.status(404).json({ message: `no users found` });
    }

    res.status(201).json({ sucess: true, data: user });
  } catch (err) {
    res.status(400).json({ sucess: false, message: `no users found` });
  }
}
module.exports = { getUser };
