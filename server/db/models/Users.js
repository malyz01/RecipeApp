const mongoose = require('mongoose');
const bcrypt = require('bcrypt');

const { validateEmail } = require('../../utils');

const userSchema = new mongoose.Schema({
  email: {
    type: String,
    trim: true,
    unique: true,
    required: 'please enter email',
    validate: {
      validator: validateEmail,
      message: ({ value }) => `${value} is not a valid email address`
    }
  },
  password: {
    type: String,
    min: [8, 'Password is too short'],
    required: 'please enter a password'
  },
  profile: { type: mongoose.Schema.Types.ObjectId, ref: 'Profile' },
  resetPasswordToken: String,
  resetPasswordExpires: Date,
  resetEmailToken: String,
  resetEmailExpires: Date
});

userSchema.pre('save', async (next) => {
  try {
    if (!this.isModified('password')) {
      return next();
    }
    const hashedPassword = await bcrypt.hash(this.password, 10);
    this.password = hashedPassword;
    return next();
  } catch (e) {
    return next(e);
  }
});

userSchema.methods.comparePassword = async (candidatePassword, next) => {
  try {
    const isMatch = await bcrypt.compare(candidatePassword, this.password);
    return isMatch;
  } catch (e) {
    return next(e);
  }
};

module.exports = mongoose.model('User', userSchema);
