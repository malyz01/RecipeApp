const axios = require('axios');
const router = require('express').Router();
const { toParams } = require('../helpers');

const api = axios.create({
  baseURL: process.env.FOOD_SPOONACULAR_URL,
  params: {
    apiKey: process.env.FOOD_SPOONACULAR_API
  }
});

// router.get('/:id', (req, res, next) => {
//   console.log(req.query);
//   res.status(200).json(req.params.id);
// });

router.get('/search', async (req, res, next) => {
  console.log(process.env.FOOD_SPOONACULAR_API);
  try {
    const params = toParams(req.query);
    console.log(params);
    const { data } = await api.get('/search', params);
    res.json(data);
  } catch (err) {
    console.log(err);
  }
});

router.post('/', (req, res, next) => {
  console.log(req.query);
  res.json(req.body);
});

module.exports = router;
