const mongoose = require('mongoose');

const mealSchema = new mongoose.Schema({
  name: { type: String, required: true }, // form field is mealName but the schema calls it name too late to change
  mealType: {
    type: String,
    enum: ['breakfast', 'lunch', 'dinner', 'snack'], // can only be these options
    required: true,
  },
  date: {
    type: Date,
    required: true,
    default: Date.now,
  },
  calories: { type: Number, required: true, min: 0 },
  protein: { type: Number, min: 0 }, // in grams
  carbs: { type: Number, min: 0 }, // in grams
  fat: { type: Number, min: 0 }, // in grams
  notes: { type: String, maxlength: 500 }, // any extra notes about the meal, max 500 characters
});

module.exports = mongoose.model('Meal', mealSchema);
