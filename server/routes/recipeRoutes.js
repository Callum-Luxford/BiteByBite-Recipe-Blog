// MODULES FOR ROUTER
const express = require("express");
const recipeController = require("../controllers/recipeController");

// INSTANCE OF ROUTER
const router = express.Router();

// APP ROUTES
router.get("/", recipeController.homePage);
router.get("/categories", recipeController.exploreCategories);
router.get("/recipe/:id", recipeController.exploreRecipe);

// EXPORT MODULE
module.exports = router;
