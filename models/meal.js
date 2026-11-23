const mongoose = require('mongoose');

const mealSchema = new mongoose.Schema({
  mealType: {
    type: String,
    enum: ['breakfast', 'lunch', 'dinner', 'snack'],
    required: true,
  },
  date: {
    type: Date,
    required: true,
    default: Date.now,
  },
  calories: { type: Number, required: true, min: 0 },
  protein: { type: Number, min: 0 },
  carbs: { type: Number, min: 0 },
  fat: { type: Number, min: 0 },
  notes: { type: String, maxlength: 500 },
});

module.exports = mongoose.model('Meal', mealSchema);
