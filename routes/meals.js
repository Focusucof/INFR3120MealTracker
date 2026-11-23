const express = require('express');
const router = express.Router();

const Meal = require('../models/meal');

/* GET /meals */
router.get('/', async (req, res, next) => {
  try {
    const meals = await Meal.find();
    res.json(meals);
  } catch (err) {
    next(err);
  }
});

module.exports = router;
