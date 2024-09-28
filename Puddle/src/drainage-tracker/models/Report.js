const mongoose = require('mongoose');

const reportSchema = new mongoose.Schema({
  picture: {
    // string is a url to the img
    type: String
  },
  location: {
    type: String,
    required:true
  },
  issueType: {
    type: String,
    enum: ['floodings', 'damagedInfra', 'missingSigns', 'blockedRoads', 'construction'],
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
