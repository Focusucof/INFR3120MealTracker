const express = require('express');
const router = express.Router();

const Meal = require('../models/meal');

/* GET /meals */
router.get('/', async (req, res, next) => {
  try {
    // sort by newer meals first
    const meals = await Meal.find().sort({ date: -1 });
    res.render('meals', { title: 'CalLog - Meals', meals: meals });
  } catch (err) {
    next(err);
  }
});

router.get('/add', (req, res) => {
  res.render('addMeal', { title: 'CalLog - Add Meal' });
});

router.post('/add', async (req, res, next) => {
  try {
    const { mealName, mealType, date, calories, protein, carbs, fat, notes } = req.body;
    // form field is mealName but the schema calls it name
    const meal = new Meal({ name: mealName, mealType, date, calories, protein, carbs, fat, notes });
    await meal.save();
    res.redirect('/meals');
  } catch (err) {
    next(err);
  }
});

module.exports = router;
