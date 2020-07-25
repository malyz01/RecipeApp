const router = require('express').Router();
const db = require('../db/functions/users');

// POST - api/v1/users/register
router.post('/register', (req, res) => {
  try {
    res.json('test');
  } catch (e) {
    console.log(e.message);
  }
});

module.exports = router;
