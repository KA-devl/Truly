const user = require('../../models/user');

// CREATE A USER
// its better to define a name for this function so that we can understand what it does)
const createUser = (app) =>
  app.post('/api/signup', async (req, res) => {
    try {
      // // since newUser is a model we
      // can directly use the CRUD METHOD
      // on  it. Here we  Passing directly  all the body fields
      // to the CRUD operation create. Then the new "instance" created is assigned to  newUser variable
      const newUser = await user.create(req.body);
      let message = 'The account was successfully created';
      res.status(201).json({ sucess: true, message, data: newUser });
    } catch (error) {
      res
        .status(400)
        .json({ sucess: false, message: `The account has not been created` });
    }
  });

// The above method is exported so that it can be availaible in app.js
module.exports = createUser;
