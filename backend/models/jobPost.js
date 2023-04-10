const mongoose = require('mongoose');
const jobApplication = require('./jobApplication');

const JobPostingSchema = new mongoose.Schema({
  name: {
    type: String,
    required: true,
    trim: true,
    maxlength: 50,
  },
  image: {
    type: mongoose.Schema.Types.ObjectId,
    ref: 'user',
  },
  authorId: {
    type: mongoose.Schema.ObjectId,
    ref: 'user',
    required: true,
    validate: {
      validator: async function (value) {
        const user = await mongoose
          .model('user')
          .findOne({ _id: value, userType: 'employer' });
        return !!user;
      },
      message:
        'authorId must be the ObjectId of a user with userType "employer"',
    },
  },
  description: {
    type: String,
    required: true,
  },

  email: {
    type: String,
    match:
      /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/,
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

// when a job post is deleted it remove all it candidate applications
JobPostingSchema.pre('remove', async function (next) {
  await jobApplication.remove({ jobPostId: this._id });

  next();
});

module.exports = mongoose.model('jobPost', JobPostingSchema);
