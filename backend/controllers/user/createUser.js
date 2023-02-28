const user = require("../../models/user");

async function signUpUserController(req, res) {
  const { email } = req.body;
  const userDB = await user.findOne({ email });
  if (userDB) {
    res.status(400);
    res.send({ message: "User already exists!" });
  } else {
    const newUser = await user.create(req.body);
    let message = "The account was successfully created";
    res.status(201);
    res.send({ message, data: newUser });
  }
}

module.exports = { signUpUserController };
