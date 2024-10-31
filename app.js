// MODULES FOR SERVER
const express = require("express");
const expressLayouts = require("express-ejs-layouts");

// SERVER INIT
const app = express();

// REQUIRE DOTENV
require("dotenv").config();

// MIDDLEWARE
app.use(express.urlencoded({ extended: true }));
app.use(express.static("public"));
app.use(expressLayouts);

// SET VIEW ENGINE
app.set("layout", "./layouts/main");
app.set("view engine", "ejs");

// SERVER ROUTES / MIDDLEWARE
const routes = require("./server/routes/recipeRoutes.js");
app.use("/", routes);

// SERVER START
const port = process.env.PORT || 3000;
app.listen(port, () => {
  console.log(`Server running on http://locathost:${port}`);
});
