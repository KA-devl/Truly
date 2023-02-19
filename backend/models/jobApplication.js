const mongoose = require('mongoose');
const User = require('../models/user');
const jobpost = require('./jobpost');

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

// // setting the author id of job application
//  to the same as the author id of the corresponding job
JobApplicationSchema.pre('save', async function (next) {
  const jobPost = await mongoose.model('jobPost').findById(this.jobPostId);
  this.authorId = jobPost.authorId;
  next();
});

// // Checking if the user has already applied
// for a specific job before create a job application

JobApplicationSchema.pre('save', async function (next) {
  try {
    const jobPost = await mongoose
      .model('jobApplication')
      .find({ candidateId: this.candidateId, jobPostId: this.jobPostId });

    if (jobPost.length !== 0) {
      throw new Error('candidate cannot apply twice for a job');
    }
    next();
  } catch (err) {
    next(err);
  }
});

module.exports = mongoose.model('jobApplication', JobApplicationSchema);
