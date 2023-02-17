const mongoose = require('mongoose');
const User = require('../models/user');

const JobApplicationSchema = new mongoose.Schema({
  candidateId: {
    type: mongoose.Schema.ObjectId,
    ref: 'user',
    required: true,
    validate: {
      validator: async function (value) {
        const user = await User.findOne({ _id: value, userType: 'candidate' });
        return !!user;
      },
      message:
        'candidateId must be the ObjectId of a user with userType "candidate"',
    },
  },

  jobPostId: {
    type: mongoose.Schema.ObjectId,
    ref: 'jobPost',
    required: true,
  },

  applicationStatus: {
    type: [String],
    required: true,
    default: ['pending'],
    enum: ['pending', 'under review', 'rejected'],
  },

  creationDate: {
    type: Date,
    default: Date.now,
  },
});

module.exports = mongoose.model('jobApplication', JobApplicationSchema);
