const mongoose = require('mongoose');

/**
 * User Schema
 */
const userSchema = new mongoose.Schema({
  name:{
    type: String,
    required: true
  },
  email:{
    type: String,
    required: true,
    unique: true
  },
  username: {
    type: String,
    required: true,
    unique : true
  },
  age: {
    type : Number
  },
  mobileNumber: {
    type: String,
    required: true,
    unique : true
  },
  createdAt: {
    type: Date,
    default: Date.now
  },
  userType: {
    type: String,
    required : true
  }
});

module.exports = mongoose.model('User', userSchema);