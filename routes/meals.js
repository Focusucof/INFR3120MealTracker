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

/* GET edit page for one meal */
router.get('/:id/edit', async (req, res, next) => {
  try {
    const meal = await Meal.findById(req.params.id);
    if (!meal) return res.redirect('/meals');
    res.render('editMeal', { title: 'CalLog - Edit Meal', meal: meal });
  } catch (err) {
    next(err);
  }
});

/* POST edit form */
router.post('/:id/edit', async (req, res, next) => {
  try {
    const { mealName, mealType, date, calories, protein, carbs, fat, notes } = req.body;
    // runValidators so the schema rules still apply on update
    await Meal.findByIdAndUpdate(
      req.params.id,
      { name: mealName, mealType, date, calories, protein, carbs, fat, notes },
      { runValidators: true }
    );
    res.redirect('/meals');
  } catch (err) {
    next(err);
  }
});

/* POST delete a meal */
router.post('/:id/delete', async (req, res, next) => {
  try {
    await Meal.findByIdAndDelete(req.params.id);
    res.redirect('/meals');
  } catch (err) {
    next(err);
  }
});

module.exports = router;
