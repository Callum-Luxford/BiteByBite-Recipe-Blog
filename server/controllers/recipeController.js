// MODULES FOR CONTROLLER
require("../models/database");
const { now } = require("mongoose");
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

// GET /about
// ABOUT PAGE
exports.aboutPage = async (req, res) => {
  res.render("aboutPage", {
    title: "About Page",
  });
};

// GET /contact
// CONACT PAGE
exports.contactPage = async (req, res) => {
  res.render("contactPage", {
    title: "contact Page",
  });
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

// GET /categories/:id
// Categories by Id
exports.exploreCategoriesById = async (req, res) => {
  try {
    let categoryId = req.params.id;

    const limitNumber = 20;
    const categoryById = await Recipe.find({ category: categoryId }).limit(
      limitNumber
    );

    res.render("categoryRecipes", {
      title: "Categories by category",
      name: categoryById.category,
      categoryById,
    });
  } catch (error) {
    res.status(500).send({ message: error.message || "Error Occured" });
  }
};

// GET /recipe/:id
// Recipe
exports.exploreRecipe = async (req, res) => {
  try {
    let recipeId = req.params.id;

    const recipe = await Recipe.findById(recipeId);

    res.render("recipe", {
      title: "Recipe",
      recipe,
    });
  } catch (error) {
    res.status(500).send({ message: error.message || "Error Occured" });
  }
};

// POST /search
// SEARCH
exports.searchRecipe = async (req, res) => {
  try {
    let searchTerm = req.body.searchTerm;
    let recipe = await Recipe.find({
      $text: { $search: searchTerm, $diacriticSensitive: true },
    });
    res.render("search", {
      title: "Search",
      recipe,
    });
  } catch (error) {
    res.status(500).send({ message: error.message || "Error Occured" });
  }
};

// GET /explore-latest
// Explore Latest
exports.exploreLatest = async (req, res) => {
  try {
    const limitNumber = 20;
    const recipe = await Recipe.find({}).sort({ _id: -1 }).limit(limitNumber);

    res.render("explore-latest", {
      title: "Explore Latest",
      recipe,
    });
  } catch (error) {
    res.status(500).send({ message: error.message || "Error Occured" });
  }
};

// GET /explore-random
// Explore Random
exports.exploreRandom = async (req, res) => {
  try {
    let count = await Recipe.find().countDocuments();
    let random = Math.floor(Math.random() * count);
    let recipe = await Recipe.findOne().skip(random).exec();

    res.render("explore-random", {
      title: "Explore Random",
      recipe,
    });
  } catch (error) {
    res.status(500).send({ message: error.message || "Error Occured" });
  }
};

// GET /submit-recipe
// SUBMIT RECIPE
exports.submitRecipe = async (req, res) => {
  const infoErrorsObj = req.flash("infoErrors");
  const infoSubmitObj = req.flash("infoSubmit");

  try {
    res.render("submit-recipe", {
      title: "Submit Recipe",
      infoErrorsObj,
      infoSubmitObj,
    });
  } catch (error) {
    res.status(500).send({ message: error.message || "Error Occured" });
  }
};

// POST /submit-recipe
// SUBMIT RECIPE
exports.submitRecipeOnPost = async (req, res) => {
  try {
    let imageUpoadFile;
    let uploadPath;
    let newImageName;
    if (!req.files || Object.keys(req.files).length === 0) {
      console.log("No Files were uploaded");
    } else {
      imageUpoadFile = req.files.image;
      newImageName = Date.now() + imageUpoadFile.name;

      uploadPath =
        require("path").resolve("./") + "/public/uploads/" + newImageName;

      imageUpoadFile.mv(uploadPath, (err) => {
        if (err) return res.status(500).send(err);
      });
    }

    const newRecipe = new Recipe({
      name: req.body.name,
      description: req.body.description,
      email: req.body.email,
      ingredients: req.body.ingredients,
      category: req.body.category,
      image: newImageName,
    });
    await newRecipe.save();
    req.flash("infoSubmit", "Recipe has been added.");
    res.redirect("/submit-recipe");
    setTimeout(() => {}, 3000);
  } catch (error) {
    req.flash("infoErrors", error);
    res.redirect("/submit-recipe");
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
