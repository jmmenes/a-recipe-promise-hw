const mongoose = require('mongoose');

const todoSchema = new mongoose.Schema(
  {
    todo: {
      type: String,
    },
    isDone: {
      type: Boolean,
      default: false,
    },
  },
  {
    timestamps: true,
  }
);

module.exports = mongoose.model('todo', todoSchema);
