const mongoose = require('mongoose');
const userSchema = new mongoose.Schema({
  firstName: {
    type: String,
    required: true,
    minLength: [3, 'Name too short'],
  },
  lastName: {
    type: String
  },
  age: Number,
  email: {
    type: String,
    required: true,
    unique: true
  },
});

module.exports = userSchema;