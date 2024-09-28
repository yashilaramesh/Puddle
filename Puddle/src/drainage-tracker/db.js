const mongoose = require('mongoose');

const connectDB = async () => {
  try {
    await mongoose.connect('mongodb+srv://yashiramesh1122:ooIVKwlWKkpUjgYv@puddle.evwa0.mongodb.net/');
    console.log('MongoDB connected...');
  } 
  catch (err) {
    console.error(err.message);
    process.exit(1);
  }
};

module.exports = connectDB;
