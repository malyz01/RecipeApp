const mongoose = require('mongoose');
const { validateEmail } = require('../../helpers');

const userSchema = new mongoose.Schema({
  email: {
    type: String,
    trim: true,
    unique: true,
    required: 'please enter email',
    validate: {
      validator: validateEmail,
      message: (props) => `${props.value} is not a valid email address!`
    },
    match: [
      /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/,
      'Please enter a valid email address'
    ]
  },
  password: {
    type: String,
    min: [8, 'Password is too short'],
    required: 'please enter a password'
  },
  resetPasswordToken: String,
  resetPasswordExpires: Date,
  resetEmailToken: String,
  resetEmailExpires: Date
});

module.exports = mongoose.Model('Users', userSchema);
