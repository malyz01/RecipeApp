const router = require('express').Router();
const jwt = require('jsonwebtoken');

const db = require('../db/functions/users');

// POST - api/v1/users/register
router.post('/register', async (req, res) => {
  try {
    const user = await db.registerUser(req.body);
    const token = jwt.sign(user, process.env.PRIVATE_KEY);
    res.status(200).json({ user, token });
  } catch (e) {
    res.status(400).json(e.message);
  }
});

module.exports = router;
