const mongoose = require('mongoose');

const userSchema = new mongoose.Schema({
  email: {
    type: String,
    trim: true,
    unique: true,
    required: 'is required',
    validate: {
      validator: validateEmail,
      message: (props) => `${props.value} is not a valid email address!`
    },
    match: [
      /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/,
      'Please fill a valid email address'
    ]
  },
  password: {
    type: String,
    min: [8, 'Password is too short'],
    required: 'is required'
  },
  resetPasswordToken: String,
  resetPasswordExpires: Date
});

module.exports = mongoose.Model('Users', userSchema);
