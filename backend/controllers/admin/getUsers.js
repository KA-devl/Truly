const userModel = require('../../models/user');

async function getUsers(req, res) {
  try {
    const user = await userModel.find();

    if (user === null)
      return res.status(400).json({ sucess: false, message: err.message });
    else if (user === [])
      return res.status(200).json({ sucess: true, message: 'No such user' });

    res.status(201).json({ sucess: true, data: user });
  } catch (err) {
    res.status(400).json({ sucess: false, message: err.message });
  }
}

module.exports = { getUsers };
