const mongoose = require('mongoose');

const userSchema = new mongoose.Schema({
  phoneNumber: {
    type: String,
    required: true,
    unique: true,  // Phone number must be unique for login
    match: [/^\d{10}$/, 'Please enter a valid 10-digit phone number'],  // Ensure it's a valid phone number format
  },
  name: {
    type: String,
    required: true,
  },
  department: {
    type: String,
    required: true,
  },
  year: {
    type: Number,
    required: true,
    min: 1,  // Assuming the year is a number (e.g., 1 for the first year)
  },
  password: {
    type: String,
    required: true,
  },
  isActive: {
    type: Boolean,
    default: true,  // Default isActive is true
  },
}, { timestamps: true });  // Add createdAt and updatedAt timestamps automatically

const User = mongoose.model('User', userSchema);

module.exports = User;
