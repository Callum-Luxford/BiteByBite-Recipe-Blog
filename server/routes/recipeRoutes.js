// MODULES FOR ROUTER
const express = require("express");
const recipeController = require("../controllers/recipeController");

// INSTANCE OF ROUTER
const router = express.Router();

// APP ROUTES
router.get("/", recipeController.homePage);
router.get("/recipe/:id", recipeController.exploreRecipe);
router.get("/categories", recipeController.exploreCategories);
router.get("/categories/:id", recipeController.exploreCategoriesById);
router.post("/search", recipeController.searchRecipe);

router.get("/explore-latest", recipeController.exploreLatest);
router.get("/explore-random", recipeController.exploreRandom);
router.get("/submit-recipe", recipeController.submitRecipe);

// EXPORT MODULE
module.exports = router;
