const User = require("../../models/user");
const mongoose = require("mongoose");

module.exports = (app) =>
  app.post("/api/signup", async (req, res) => {
    //sample user
    // let user = new User({
    //   name: "anesssds",
    //   email: "test123@live.com33",
    //   username: "bawfgsdffg",
    //   age: "60",
    //   mobileNumber: "514-999-999594",
    //   userType: "candidate",
    // });
    let user = new User({
      name: req.body.name,
      email: req.body.email,
      username: req.body.username,
      age: req.body.age,
      mobileNumber: req.body.mobileNumber,
      userType: req.body.userType,
    });
    try {
      const newUser = await user.save();
      res.status(201).json(newUser);
    } catch (error) {
      res.status(400).json({ message: error.message });
    }
  });
