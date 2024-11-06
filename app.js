// MODULES FOR SERVER
const express = require("express");
const expressLayouts = require("express-ejs-layouts");
const fileUpload = require("express-fileupload");
const session = require("express-session");
const cookieParser = require("cookie-parser");
const flash = require("connect-flash");

// SERVER INIT
const app = express();

// REQUIRE DOTENV
require("dotenv").config();

// MIDDLEWARE
app.use(express.urlencoded({ extended: true }));
app.use(express.static("public"));
app.use(expressLayouts);

app.use(cookieParser("RecipeBlogSecure"));
app.use(
  session({
    secret: "RecipeBlogSecret",
    saveUninitialized: true,
    resave: true,
  })
);
app.use(flash());
app.use(fileUpload());

// SET VIEW ENGINE
app.set("layout", "./layouts/main");
app.set("view engine", "ejs");

// SERVER ROUTES / MIDDLEWARE
const routes = require("./server/routes/recipeRoutes.js");
app.use("/", routes);

// SERVER START
const port = process.env.PORT || 3000;
app.listen(port, () => {
  console.log(`Server running on http://localhost:${port}`);
});
