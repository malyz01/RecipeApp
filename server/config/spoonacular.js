const axios = require('axios');

const api = axios.create({
  baseURL: process.env.FOOD_SPOONACULAR_URL,
  params: {
    apiKey: process.env.FOOD_SPOONACULAR_API
  }
});

module.exports = api;
