const mongoose = require('mongoose');
const User = require('../models/user');

const JobPostingSchema = new mongoose.Schema({
  name: {
    type: String,
    required: true,
    trim: true,
    maxlength: 50,
  },

  authorId: {
    type: mongoose.Schema.ObjectId,
    ref: 'user',
    required: true,
    validate: {
      validator: async function (value) {
        const user = await User.findOne({ _id: value, userType: 'employer' });
        return !!user;
      },
      message:
        'authorId must be the ObjectId of a user with userType "employer"',
    },
  },
  description: {
    type: String,
    required: true,
    trim: true,
    maxlength: 50,
  },

  email: {
    type: String,
    match:
      /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/,
  },
  careersFields: {
    type: [String],
    required: true,
    enum: [
      'Agriculture, Food, and Natural Resources',
      'Architecture and Construction',
      'Arts, Audio/Video Technology, and Communication',
      'Business and Finance',
      'Education and Training',
      'Government and Public Administration',
      'Health Science.',
      'Information Technology',
      'Marketing',
      'Science, Technology, Engineering, and Math',
      'Law, Public Safety, Corrections, and Security',
      'Other',
    ],
  },

  jobStatus: {
    type: [String],
    required: true,
    enum: ['contractual', 'permanent', 'temporary', 'full-time', 'part-time'],
  },
  creationDate: {
    type: Date,
    default: Date.now,
  },
  is_faulfilled: {
    type: Boolean,
    default: false,
  },
});

module.exports = mongoose.model('JobPost', JobPostingSchema);
