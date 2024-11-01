// MODULES FOR CONTROLLER
require("../models/database");
const Category = require("../models/Category");
const Recipe = require("../models/Recipe");

// GET /homepage
// HOMEPAGE
exports.homePage = async (req, res) => {
  try {
    const limitNumber = 5;
    const categories = await Category.find({}).limit(limitNumber);
    const latest = await Recipe.find({}).sort({ _id: -1 }).limit(6);
    const thai = await Recipe.find({ category: "Thai" }).limit(6);
    const american = await Recipe.find({ category: "American" }).limit(6);
    const chinese = await Recipe.find({ category: "Chinese" }).limit(6);
    
    const food = { latest, thai, american, chinese };

    res.render("homePage", {
      title: "Homepage",
      categories,
      food,
    });
  } catch (error) {
    res.status(500).send({ message: error.message || "Error Occured" });
  }
};

// GET /categories
// Categories
exports.exploreCategories = async (req, res) => {
  try {
    const limitNumber = 20;
    const categories = await Category.find({}).limit(limitNumber);
    res.render("categories", {
      title: "Categories",
      categories,
    });
  } catch (error) {
    res.status(500).send({ message: error.message || "Error Occured" });
  }
};

// ----------------------- DUMMY DATA INSERT -----------------------
// -----------------------------------------------------------------

// INSERT DUMMY CATEGORY DATA
// let insertDummyCategoryData = async () => {
//   try {
//     await Category.insertMany();
//   } catch (error) {
//     console.log(error);
//   }
// };
// insertDummyCategoryData();

// INSERT DUMMY RECIPE DATA
// let insertDummyRecipeData = async () => {
//   try {
//     await Recipe.insertMany();
//   } catch (error) {
//     console.log(error);
//   }
// };
// insertDummyRecipeData();
