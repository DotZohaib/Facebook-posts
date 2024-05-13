const mongoose = require('mongoose');
const passportLocalMongoose = require('passport-local-mongoose');

mongoose.connect('mongodb://127.0.0.1:27017/facebook');

// Define the User schema
const userSchema = new mongoose.Schema({
  username: String,
  password: String, // Do not explicitly define password if using Passport-Local Mongoose
  email: String,
  image: String,
  file: String // Added for video uploads
});

// Plugin passport-local-mongoose to User schema
userSchema.plugin(passportLocalMongoose);

const User = mongoose.model('User', userSchema);

module.exports = User;
