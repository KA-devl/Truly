const User = require('../../models/user');

const Login = (app) => {
  app.get('/api/login', async (req, res) => {
    try {
      console.log('REQ BODY IS ', req.body.username)
      const user = await User.findOne({username : req.body.username});

     //Search in db for username equivalent to request username
     if (!user) {
      const message =
        "The username does not exist. Please enter a valid username and password";
      return res.status(404).json({ message });
    }   

    console.log('the user is ', user)

      res.status(201).json({ sucess: true, data: user });
    } catch (err) {
      res.status(400).json({ sucess: false, message: err.message });
    }
  });
};

module.exports = Login;
