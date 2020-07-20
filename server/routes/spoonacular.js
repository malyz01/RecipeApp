const router = require('express').Router();
const api = require('../config/spoonacular');
const { toQuery } = require('../helpers');

// GET - /api/v1/spoonacular/recipes/:route
router.get('/recipes/:route', async (req, res) => {
  try {
    const query = toQuery(req.query);
    const { route } = req.params;
    const { data } = await api.get(`/recipes/${route}`, query);
    res.status(200).json(data);
  } catch (err) {
    console.log(err.response.data);
    res.status(400).res.json(`Error: spoonacular Get - /${route}`);
  }
});

module.exports = router;
