const mongoose = require('mongoose');

const reportSchema = new mongoose.Schema({
  picture: {
    // string is a url to the img
    type: String,
    required: true
  },
  location: {
    latitude: {
      type: Number,
      required: true
    },
    longitude: {
      type: Number,
      required: true
    }
  },
  issueType: {
    type: String,
    enum: ['Blocked drain', 'Flooding', 'Fallen tree', 'Blocked road'],
    required: true
  },
  status: {
    type: String,
    enum: ['Submitted', 'In progress', 'Resolved'],
    default: 'Submitted'
  },
  description: {
    type: String,
    required: true
  },
  timestamp: {
    type: Date,
    default: Date.now
  }
});

module.exports = mongoose.model('Report', reportSchema);
