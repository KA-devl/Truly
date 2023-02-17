const mongoose = require('mongoose');
const User = require('../models/user');

const JobApplicationSchema = new mongoose.Schema({
  authorId: {
    type: mongoose.Schema.ObjectId,
    ref: 'user',
    validate: {
      validator: async function (value) {
        const user = await User.findOne({ _id: value, userType: 'employer' });
        return !!user;
      },
      message:
        'authorId must be the ObjectId of a user with userType "employer"',
    },
  },
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

JobApplicationSchema.pre('save', async function (next) {
  const jobPost = await mongoose.model('jobPost').findById(this.jobPostId);
  this.authorId = jobPost.authorId;
  next();
});

module.exports = mongoose.model('jobApplication', JobApplicationSchema);
