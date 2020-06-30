const axios = require('axios');
const router = require('express').Router();

const api = axios.create({
  baseURL: process.env.FOOD_SPOONACULAR_URL,
  params: {
    apiKey: process.env.FOOD_SPOONACULAR_API
  }
});

router.post('/', (req, res, next) => {
  console.log(req.query);
  res.json(req.body);
});

module.exports = router;
