// MODULES FOR ROUTER
const express = require("express");
const recipeController = require("../controllers/recipeController");

// INSTANCE OF ROUTER
const router = express.Router();

// APP ROUTES
router.get("/", recipeController.homePage);

// EXPORT MODULE
module.exports = router;
