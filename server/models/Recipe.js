// MODULES
const mongoose = require("mongoose");

// SCHEMA
const recipeSchema = new mongoose.Schema({
  name: {
    type: String,
    required: "This field is required",
  },
  description: {
    type: String,
    required: "This field is required",
  },
  email: {
    type: String,
    required: "This field is required",
  },
  ingredients: {
    type: Array,
    required: "This field is required",
  },
  category: {
    type: String,
    enum: [
      "Thai",
      "American",
      "Spanish",
      "Chinese",
      "Mexican",
      "Indian",
      "British",
    ],
    required: "This field is required",
  },
  image: {
    type: String,
    required: "This field is required",
  },
});

recipeSchema.index({ name: "text", description: "text" });
// WildCard indexing
// recipeSchema.index({ "$**": "text" });

// EXPORTS
module.exports = mongoose.model("Recipe", recipeSchema);
