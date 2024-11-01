// MODULES
const mongoose = require("mongoose");

// SCHEMA
const categorySchema = new mongoose.Schema({
  name: {
    type: String,
    required: "This field is required",
  },
  image: {
    type: String,
    required: "This field is required",
  },
});

// EXPORTS
module.exports = mongoose.model("Category", categorySchema);
