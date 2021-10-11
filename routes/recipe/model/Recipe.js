const mongoose = require('mongoose');

const recipeSchema = new mongoose.Schema(
  {
    type: {
      type: String,
    },
    price: {
      type: Number,
    },
  },
  {
    timestamps: true,
  }
);

module.exports = mongoose.model('recipe', recipeSchema);
