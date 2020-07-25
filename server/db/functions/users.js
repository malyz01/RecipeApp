const Users = require('../models/Users');

async function registerUser(userData) {
  try {
    const user = await Users.create(userData);
    const { id, email } = user;
    return { id, email };
  } catch (e) {
    console.log(e.message);
    throw new Error('Email already exist');
  }
}

function loginUser(userData) {
  try {
  } catch (e) {}
}

module.exports = {
  registerUser,
  loginUser
};
