const mongoose = require("mongoose");

/**
 * User Schema
 */
const userSchema = new mongoose.Schema({
  name: {
    type: String,
    required: true,
    trim: true,
    maxlength: 50,
  },
  email: {
    type: String,
    match:
      /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/,
    required: true,
    unique: true,
  },
  username: {
    type: String,
    required: true,
    unique: true,
    trim: true,
    maxlength: 50,
  },
  password: {
    type: String,
    required: true,
    trim: true,
    maxlength: 50,
  },
  mobileNumber: {
    type: String,
    match:
      /^(\(\+[0-9]{2}\))?([0-9]{3}-?)?([0-9]{3})\-?([0-9]{4})(\/[0-9]{4})?$/,
    unique: true,
    required: true,
  },
  createdAt: {
    type: Date,
    default: Date.now,
  },
  userType: {
    type: String,
    required: true,
  },
});

userSchema.post("save", function (error, doc, next) {
  if (error.name === "MongoServerError" && error.code === 11000) {
    next(new Error("The user already exists"));
  } else {
    next();
  }
});

module.exports = mongoose.model("User", userSchema);
