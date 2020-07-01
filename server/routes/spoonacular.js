const router = require('express').Router();
const api = require('../config/spoonacular');
const { toParams } = require('../helpers');

router.get('/search', async (req, res) => {
  try {
    const params = toParams(req.query);
    const { data } = await api.get('/search', params);
    res.status(200).json(data);
  } catch (err) {
    console.log(err.response.data);
    res.status(200).res.json('Error: spoonacular Get - /search');
  }
});

router.post('/', (req, res) => {
  console.log(req.query);
  res.json(req.body);
});

module.exports = router;
