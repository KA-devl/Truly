const User = require("../../models/user");
const mongoose = require("mongoose");

module.exports = (app) =>
  app.put("/api/edit-profile/:id", async (req, res) => {
   const userId = req.params.id;

   let filter = {
    _id : userId 
   }

   let update = {
    name: req.body.name,
    email: req.body.email,
    username: req.body.username,
    age: req.body.age,
    mobileNumber: req.body.mobileNumber,
    userType: req.body.userType,
   }
  
    try {
      const newUser = await User.findOneAndUpdate(filter, update)
      res.status(201).json(newUser);
    } catch (error) {
      res.status(400).json({ message: error.message });
    }
  });
