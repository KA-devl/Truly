const mongoose = require('mongoose');
const JobPosting = require('./jobpost');
const jobApplication = require('./jobApplication');

/**
 * User Schema
 */
const userSchema = new mongoose.Schema(
  {
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
      required: true,
    },
    createdAt: {
      type: Date,
      default: Date.now,
    },
    userType: {
      type: String,
      enum: ['employer', 'candidate'],
      required: true,
    },

    avatar: {
      imageUrl: { type: String, default: 'undefined' },
      cloudinaryId: { type: String, default: 'undefined' },
    },
    resume: {
      resumeUrl: { type: String, default: 'undefined' },
      cloudinaryId: { type: String, default: 'undefined' },
    },
    imgProfileUrl: {
      type: String,
      default: '',
    },
  },

  {
    toJSON: { virtuals: true },
    toObject: { virtuals: true },
  }
);

// create a virtual field jobPost that diplay all the jobsPost that correspond to a author id (employer)
userSchema.virtual('jobPost', {
  ref: 'jobPost',
  localField: '_id',
  foreignField: 'authorId',
  justOne: false,
});

// create a virtual field jobApplication that diplay all the jobApplication that correspond to a candidate id
userSchema.virtual('jobApplication', {
  ref: 'jobApplication',
  localField: '_id',
  foreignField: 'candidateId',
  justOne: false,
});

userSchema.post('save', function (error, doc, next) {
  if (error.name === 'MongoServerError' && error.code === 11000) {
    next(new Error('The user already exists'));
  } else {
    next();
  }
});

userSchema.pre('remove', async function (next) {
  // before an employer is deleted , all it jobs posting are deleted
  if (this.userType === 'employer') {
    await JobPosting.remove({ authorId: this._id });

    // // before an employer
    // is deleted , all the jobs application associated with this employer are set to innactive
    await mongoose
      .model('jobApplication')
      .updateMany({ authorId: this._id }, { applicationStatus: 'inactive' });
    next();

    // before a candidate is deleted , all it jobs application are deleted
  } else if (this.userType === 'candidate') {
    const jobApp = await jobApplication.findById(this._id);
    if (!jobApp) {
      next();
      return;
    }
    jobApp.remove();
    next();
  }
  next();
});

module.exports = mongoose.model('user', userSchema);
