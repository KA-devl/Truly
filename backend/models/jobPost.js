const mongoose = require('mongoose');

const JobPostingSchema = new mongoose.Schema({
  name: {
    type: String,
    required: true,
    trim: true,
    maxlength: 50,
  },

  description: {
    type: String,
    required: true,
    unique: true,
    trim: true,
    maxlength: 50,
  },

  email: {
    type: String,
    match:
      /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/,

    location: {
      type: String,
      enum: ['Point'],
      required: true,
    },

    coordinates: {
      type: [Number],
      required: true,
      index: '2dsphere',
    },

    formattedLocation: String,
    street: String,
    city: String,
    state: String,
    zipcode: String,
    country: String,
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

  hourlyRate: {
    type: Number,
    required: true,
    min: 15.25,
  },
  creationDate: {
    type: Date,
    default: Date.now,
  },
});

module.exports = mongoose.model('JobPost', JobPostingSchema);

// To do
// // job_id : 35235344314,

// is_faulfilled : false,

// author_id : 213213dfia3423,

// created_at : 12/01/2022

// title : Software engineer intern,

// description : blablabla,
