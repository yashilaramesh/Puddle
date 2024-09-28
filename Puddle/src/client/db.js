const mongoose = require('mongoose');

const connectDB = async () => {
  try {
    await mongoose.connect('mongodb+srv://genechangw:I3B5E4SsEsk282ku@puddle.qswpc.mongodb.net/PuddleDatabase');
    console.log('MongoDB connected...');
  } 
  catch (err) {
    console.error(err.message);
    process.exit(1);
  }
};

module.exports = connectDB;
