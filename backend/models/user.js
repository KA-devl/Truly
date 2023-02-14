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

userSchema.post('save', function(error, doc, next) {
  if (error.name === 'MongoServerError' && error.code === 11000) {
    next(new Error('The user already exists'));
  } else {
    next();
  }
});

module.exports = mongoose.model('User', userSchema);