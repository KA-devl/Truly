const User = require('../../models/user');
async function login(req, res) {
  try {
    const user = await User.findOne({ username: req.body.username });

    //Search in db for username equivalent to request username
    if (!user) {
      const message =
        'The username does not exist. Please enter a valid username and password';
      return res.status(403).json({ message });
    }

    if (user.password !== req.body.password) {
      const message = 'You have entered an invalid username or password.'; //Always be less descriptive when the password is bad
      return res.status(403).json({ message });
    }

    const message = `The user have been connected with success`;
    return res.status(201).json({ message, data: user });
  } catch (error) {
    const message = 'Unable to login. Please try again later.';
    return res.status(400).json({ message, data: error.message });
  }
}

module.exports = { login };
